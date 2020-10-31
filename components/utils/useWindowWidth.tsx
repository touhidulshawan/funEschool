import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  let [width, setwidth] = useState<number>();

  useEffect(() => {
    const getCurrentWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    setwidth(getCurrentWidth());
  });

  useEffect(() => {
    let time: any;
    const getCurrentWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
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
