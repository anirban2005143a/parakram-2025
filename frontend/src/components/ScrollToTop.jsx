import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animate } from "framer-motion";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    animate(0, 0, {
      type: "tween",
      duration: 0.5,
      ease: "easeInOut",
      onUpdate: (value) => window.scrollTo(0, value),
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
