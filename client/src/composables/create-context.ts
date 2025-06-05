import { inject, provide } from 'vue';

export function useCreateContext<T>(
  contextKey: string,
  fallback?: T,
): [(data: T) => void, () => T | null] {
  function provideContext(data: T) {
    provide(contextKey, data);
  }

  function injectContext(): T | null {
    const context: T | null = inject(contextKey, fallback);

    if (context || context === null) {
      return context;
    }

    throw new Error(
      `Context key ${contextKey} not found. Please make sure to use inside correct child component.`,
    );
  }

  return [provideContext, injectContext];
}
