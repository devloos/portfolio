<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { computed, ref, useTemplateRef, watch } from 'vue';

const TEAL_HEX = '#008080';

class DOMVector {
  constructor(
    readonly x: number,
    readonly y: number,
    readonly magnitudeX: number,
    readonly magnitudeY: number,
  ) {
    this.x = x;
    this.y = y;
    this.magnitudeX = magnitudeX;
    this.magnitudeY = magnitudeY;
  }

  toDOMRect(): DOMRect {
    return new DOMRect(
      Math.min(this.x, this.x + this.magnitudeX),
      Math.min(this.y, this.y + this.magnitudeY),
      Math.abs(this.magnitudeX),
      Math.abs(this.magnitudeY),
    );
  }
}

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    items: any[];
    containerClass?: string;
    backgroundColor?: string;
    selectorColor?: string;
  }>(),
  { backgroundColor: TEAL_HEX, selectorColor: `${TEAL_HEX}50` },
);

const selectedItems = defineModel<any[]>({ required: true });

const selectionVector = ref<DOMVector | null>(null);

function initSelectionVector(e: any) {
  // only start pointer events from left mouse click
  if (e.button !== 0) {
    return;
  }

  const containerRect = e.currentTarget.getBoundingClientRect();
  const relativeX = e.clientX - containerRect.x;
  const relativeY = e.clientY - containerRect.y;

  selectionVector.value = new DOMVector(relativeX, relativeY, 0, 0);
}

function setSelectionVector(e: any) {
  // shouldnt happen
  if (!selectionVector.value) {
    return;
  }

  const containerRect = e.currentTarget.getBoundingClientRect();

  // starting point
  const originX = selectionVector.value.x;
  const originY = selectionVector.value.y;

  // new point
  const relativeX = e.clientX - containerRect.x;
  const relativeY = e.clientY - containerRect.y;

  selectionVector.value = new DOMVector(
    originX,
    originY,
    relativeX - originX,
    relativeY - originY,
  );
}

const refItems = useTemplateRef('ref-items');
const refSelection = useTemplateRef('ref-selection');

function collides(a: Element, b: Element) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  if (aRect.right < bRect.left || bRect.right < aRect.left) {
    return false;
  }

  if (aRect.bottom < bRect.top || bRect.bottom < aRect.top) {
    return false;
  }

  return true;
}

watch(selectionVector, () => {
  if (!selectionVector.value || !refItems.value) {
    return;
  }

  const tempSelectedItems: any[] = [];

  refItems.value.forEach((refItem) => {
    if (!refSelection.value) {
      return;
    }

    const itemIndex = Number(refItem.id);
    const item = props.items[itemIndex];

    if (collides(refSelection.value, refItem)) {
      tempSelectedItems.push(item);
    }
  });

  selectedItems.value = tempSelectedItems;
});

const selectionStyle = computed(() => {
  const selectionRect = selectionVector.value?.toDOMRect();

  if (!selectionRect) {
    return;
  }

  return {
    top: selectionRect.y + 'px',
    left: selectionRect.x + 'px',
    width: selectionRect.width + 'px',
    height: selectionRect?.height + 'px',
  };
});
</script>

<template>
  <div
    class="relative select-none"
    @pointerdown="initSelectionVector"
    @pointermove="setSelectionVector"
    @pointerup="selectionVector = null"
  >
    <div :class="containerClass">
      <div
        ref="ref-items"
        v-for="(item, index) in items"
        :key="index"
        :id="String(index)"
        class="item"
        :class="{
          'relative after:absolute after:inset-0 after:content-[\'\']':
            selectedItems.includes(item),
        }"
      >
        <slot name="item" :item :index>
          {{ index }}
        </slot>
      </div>

      <div
        ref="ref-selection"
        v-if="selectionVector"
        class="selector absolute border-2"
        :style="selectionStyle"
      />
    </div>
  </div>
</template>

<style scoped>
.item::after {
  background-color: v-bind(backgroundColor);
  opacity: 25%;
}

.selector {
  background-color: v-bind(selectorColor);
  border-color: v-bind(selectorColor);
}
</style>
