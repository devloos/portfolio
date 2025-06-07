import { type MaybeElementRef, useMouseInElement } from '@vueuse/core';
import { computed } from 'vue';

export function usePerspective(refValue?: MaybeElementRef) {
  const { elementX, elementY, elementHeight, elementWidth, isOutside } =
    useMouseInElement(refValue);

  const transformClass = computed(() => {
    const MAX_ROTATION = 8;

    const rX = (
      MAX_ROTATION / 2 -
      (elementY.value / elementHeight.value) * MAX_ROTATION
    ).toFixed(2);

    const rY = (
      (elementX.value / elementWidth.value) * MAX_ROTATION -
      MAX_ROTATION / 2
    ).toFixed(2);

    return isOutside.value
      ? ''
      : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
  });

  return {
    transformClass,
  };
}
