import { inject, provide } from 'vue';

export function useCreateContext(contextKey, fallback) {
  function provideContext(data) {
    provide(contextKey, data);

    return data;
  }

  function injectContext() {
    const context = inject(contextKey, fallback);

    if (context || context === null) {
      return context;
    }

    throw new Error(
      `Context key ${contextKey} not found. Please make sure to use inside correct child component.`,
    );
  }

  return { provideContext, injectContext };
}
