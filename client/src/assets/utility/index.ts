interface TagOptions {
  text: string;
  backgroundColor: string;
  style?: string;
  logo?: string;
}

export function buildTagUrl(opt: TagOptions) {
  // https://img.shields.io/badge/javascript-%23323330.svg?&style=for-the-badge&logo=javascript
  const url = new URL(`https://img.shields.io/badge/${opt.text}-${opt.backgroundColor}`);

  if (opt.style) {
    url.searchParams.append('style', opt.style);
  }

  if (opt.logo) {
    url.searchParams.append('logo', opt.logo);
  }

  return url.href;
}

export function getImageKitUrl(src: string) {
  return new URL(src, 'https://ik.imagekit.io');
}

export function log(message: string) {
  if (import.meta.env.VITE_ENV === 'development') {
    console.log(message);
  }
}
