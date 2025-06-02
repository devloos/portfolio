export function log(message: string) {
  if (import.meta.env.VITE_ENV === 'development') {
    console.log(message);
  }
}
