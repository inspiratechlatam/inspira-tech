import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Al cambiar de página vuelve arriba (salvo que la URL lleve un #ancla). */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
