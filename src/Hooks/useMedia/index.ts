import { useEffect, useState } from "react";

export const useMedia = (media: string) => {
  const [match, setMath] = useState(true);

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMath(matches);
    }
    changeMatch();
    window.addEventListener("resize", changeMatch);
    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [media]);

  return match;
};
