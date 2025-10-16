export const useBodyScroll = () => {
  const lock = () => {
    document.body.style.overflow = 'hidden';
  };

  const unlock = () => {
    document.body.style.overflow = '';
  };

  return { lock, unlock };
};
