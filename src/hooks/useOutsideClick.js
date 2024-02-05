import { useEffect, useRef } from "react";

const useOutsideClick = (handler, listenCaptuering = true) => {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) handler();
    }
    document.addEventListener("click", handleClick, listenCaptuering);
    return () =>
      document.removeEventListener("click", handleClick, listenCaptuering);
  }, [handler, listenCaptuering]);

  return ref;
};

export default useOutsideClick;
