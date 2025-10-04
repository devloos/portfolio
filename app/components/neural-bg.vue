<template>
  <canvas
    ref="canvasRef"
    :class="cn('pointer-events-none absolute inset-0 size-full opacity-95', props.class)"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, type HTMLAttributes } from 'vue';
import { Renderer, Camera, Transform, Program, Mesh, Plane } from 'ogl';
import { cn } from '~/lib/utils';

interface Props {
  hue?: number;
  saturation?: number;
  chroma?: number;
  backgroundColor?: string;
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  hue: 200, // Blue hue by default
  saturation: 0.8,
  chroma: 0.6,
  backgroundColor: '#000000', // Black background by default
});

const canvasRef = ref<HTMLCanvasElement | null>(null);
const animationRef = ref<number | null>(null);
const rendererRef = ref<Renderer | null>(null);
const sceneRef = ref<Transform | null>(null);
const meshRef = ref<Mesh | null>(null);
const cameraRef = ref<Camera | null>(null);

const { width: windowWidth, height: windowHeight } = useWindowSize({ type: 'visual' });

const pointerRef = ref({
  x: 0,
  y: 0,
  tX: 0,
  tY: 0,
});

// Helper function to convert hex color to RGB values (0-1 range)
function hexToRgb(hex: string): [number, number, number] {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;
  return [r, g, b];
}

const vertexShader = `
  precision mediump float;

  attribute vec2 position;
  attribute vec2 uv;

  varying vec2 vUv;

  void main() {
      vUv = uv;
      gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float;

  varying vec2 vUv;
  uniform float u_time;
  uniform float u_ratio;
  uniform vec2 u_pointer_position;
  uniform float u_scroll_progress;
  uniform float u_hue;
  uniform float u_saturation;
  uniform float u_chroma;
  uniform vec3 u_background_color;

  vec2 rotate(vec2 uv, float th) {
      return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
  }

  float neuro_shape(vec2 uv, float t, float p) {
      vec2 sine_acc = vec2(0.);
      vec2 res = vec2(0.);
      float scale = 8.;

      for (int j = 0; j < 15; j++) {
          uv = rotate(uv, 1.);
          sine_acc = rotate(sine_acc, 1.);
          vec2 layer = uv * scale + float(j) + sine_acc - t;
          sine_acc += sin(layer) + 2.4 * p;
          res += (.5 + .5 * cos(layer)) / scale;
          scale *= (1.2);
      }
      return res.x + res.y;
  }

  // HSL to RGB conversion
  vec3 hsl2rgb(vec3 c) {
      vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0);
      return c.z + c.y * (rgb - 0.5) * (1.0 - abs(2.0 * c.z - 1.0));
  }

  void main() {
      vec2 uv = .5 * vUv;
      uv.x *= u_ratio;

      vec2 pointer = vUv - u_pointer_position;
      pointer.x *= u_ratio;
      float p = clamp(length(pointer), 0., 1.);
      p = .5 * pow(1. - p, 2.);

      float t = .0005 * u_time;
      vec3 color = vec3(0.);

      float noise = neuro_shape(uv, t, p);

      noise = 0.8 * pow(noise, 3.);
      noise += pow(noise, 12.);
      noise = max(.0, noise - .6);
      noise *= (1. - length(vUv - .5));

      // Convert hue from degrees to 0-1 range
      float normalizedHue = u_hue / 360.0;
      
      // Create HSL color with animation
      vec3 hsl = vec3(
          normalizedHue + 0.1 * sin(3.0 * u_scroll_progress + 1.5),
          u_saturation,
          u_chroma * 0.5 + 0.2 * sin(2.0 * u_scroll_progress)
      );

      // Convert to RGB
      vec3 neuralColor = hsl2rgb(hsl);
      
      // Blend neural pattern with background color
      color = mix(u_background_color, neuralColor, noise);
      
      // Apply noise to alpha for transparency effect
      float alpha = max(noise, 0.1); // Minimum alpha to maintain background visibility

      gl_FragColor = vec4(color, alpha);
  }
`;

function initOGL() {
  const canvas = canvasRef.value;
  if (!canvas) return false;

  try {
    const renderer = new Renderer({
      canvas,
      width: windowWidth.value,
      height: windowHeight.value,
      dpr: Math.min(window.devicePixelRatio, 2),
    });

    const camera = new Camera(renderer.gl);
    const scene = new Transform();

    const geometry = new Plane(renderer.gl, {
      width: 2,
      height: 2,
    });

    const program = new Program(renderer.gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        u_time: { value: 0 },
        u_ratio: { value: windowWidth.value / windowHeight.value },
        u_pointer_position: { value: [0, 0] },
        u_scroll_progress: { value: 0 },
        u_hue: { value: props.hue },
        u_saturation: { value: props.saturation },
        u_chroma: { value: props.chroma },
        u_background_color: { value: hexToRgb(props.backgroundColor) },
      },
    });

    const mesh = new Mesh(renderer.gl, {
      geometry,
      program,
    });

    mesh.setParent(scene);

    rendererRef.value = renderer;
    cameraRef.value = camera;
    sceneRef.value = scene;
    meshRef.value = mesh;

    return true;
  } catch (error) {
    console.error('Error initializing OGL:', error);
    return false;
  }
}

function resizeCanvas() {
  const renderer = rendererRef.value;
  const mesh = meshRef.value;
  const canvas = canvasRef.value;

  if (!canvas) return;

  if (!renderer || !mesh) return;

  renderer.setSize(windowWidth.value, windowHeight.value);

  // Update ratio uniform
  if (mesh.program && mesh.program.uniforms.u_ratio) {
    mesh.program.uniforms.u_ratio.value = windowWidth.value / windowHeight.value;
  }
}

function render() {
  const renderer = rendererRef.value;
  const scene = sceneRef.value;
  const camera = cameraRef.value;
  const mesh = meshRef.value;
  const pointer = pointerRef.value;

  if (!renderer || !scene || !camera || !mesh) return;

  const currentTime = performance.now();

  // Smooth pointer interpolation
  pointer.x += (pointer.tX - pointer.x) * 0.04;
  pointer.y += (pointer.tY - pointer.y) * 0.04;

  // Update uniforms
  if (mesh.program && mesh.program.uniforms) {
    const uniforms = mesh.program.uniforms;

    if (uniforms.u_time) uniforms.u_time.value = currentTime;
    if (uniforms.u_pointer_position) {
      uniforms.u_pointer_position.value = [
        pointer.x / windowWidth.value,
        1 - pointer.y / windowHeight.value,
      ];
    }
    if (uniforms.u_scroll_progress) {
      uniforms.u_scroll_progress.value = window.pageYOffset / (2 * windowHeight.value);
    }
  }

  renderer.render({ scene, camera });
  animationRef.value = requestAnimationFrame(render);
}

function updateMousePosition(x: number, y: number) {
  pointerRef.value.tX = x;
  pointerRef.value.tY = y;
}

function handlePointerMove(e: PointerEvent) {
  updateMousePosition(e.clientX, e.clientY);
}

function handleTouchMove(e: TouchEvent) {
  if (e.touches[0]) {
    updateMousePosition(e.touches[0].clientX, e.touches[0].clientY);
  }
}

function handleClick(e: MouseEvent) {
  updateMousePosition(e.clientX, e.clientY);
}

// Watch for prop changes and update uniforms
watch(
  () => props.hue,
  (newHue) => {
    const mesh = meshRef.value;
    if (mesh && mesh.program && mesh.program.uniforms.u_hue) {
      mesh.program.uniforms.u_hue.value = newHue;
    }
  },
);

watch(
  () => props.saturation,
  (newSaturation) => {
    const mesh = meshRef.value;
    if (mesh && mesh.program && mesh.program.uniforms.u_saturation) {
      mesh.program.uniforms.u_saturation.value = newSaturation;
    }
  },
);

watch(
  () => props.chroma,
  (newChroma) => {
    const mesh = meshRef.value;
    if (mesh && mesh.program && mesh.program.uniforms.u_chroma) {
      mesh.program.uniforms.u_chroma.value = newChroma;
    }
  },
);

watch(
  () => props.backgroundColor,
  (newBackgroundColor) => {
    const mesh = meshRef.value;
    if (mesh && mesh.program && mesh.program.uniforms.u_background_color) {
      mesh.program.uniforms.u_background_color.value = hexToRgb(newBackgroundColor);
    }
  },
);

onMounted(() => {
  if (initOGL()) {
    resizeCanvas();
    render();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('click', handleClick);
  }
});

onUnmounted(() => {
  if (animationRef.value) {
    cancelAnimationFrame(animationRef.value);
  }

  window.removeEventListener('resize', resizeCanvas);
  window.removeEventListener('pointermove', handlePointerMove);
  window.removeEventListener('touchmove', handleTouchMove);
  window.removeEventListener('click', handleClick);

  // Clean up OGL resources
  if (rendererRef.value) {
    rendererRef.value = null;
  }
});
</script>
