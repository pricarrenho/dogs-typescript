import { useEffect } from "react";
import { useLocation } from "react-router";

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
    });
  }, [pathname]);
};
