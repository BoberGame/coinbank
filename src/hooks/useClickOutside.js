import { useEffect, useRef } from 'react';

export const useClickOutside = (handler) => {
  const domNode = useRef(null);
  useEffect(() => {
    const closeHandler = ({ target }) => {
      if (!domNode.current.contains(target)) {
        handler();
      }
    };
    document.addEventListener('mousedown', closeHandler);

    return () => document.removeEventListener('mousedown', closeHandler);
  }, []);
  return domNode;
};
