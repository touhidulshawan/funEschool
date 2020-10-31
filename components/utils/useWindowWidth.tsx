import { useState, useEffect } from "react";

const getCurrentWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

export const useWindowWidth = () => {
  let [width, setwidth] = useState(getCurrentWidth());

  useEffect(() => {
    let time = null;
    const resizeListner = () => {
      clearTimeout(time);

      time = setTimeout(() => setwidth(getCurrentWidth()), 100);
    };

    window.addEventListener("resize", resizeListner);

    return () => {
      window.removeEventListener("resize", resizeListner);
    };
  }, []);
  return width;
};
