import { useCallback, useLayoutEffect, useRef } from "react";

export default function useNavbarAnimation() {
  const navRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const handleNavbarAnimation = useCallback(() => {
    if (window.scrollY > 0) {
      navRef.current?.classList.add("animated");
      headerRef.current?.classList.add("animated");
    } else {
      navRef.current?.classList.remove("animated");
      headerRef.current?.classList.remove("animated");
    }
  }, [navRef, headerRef]);

  useLayoutEffect(() => {
    document.addEventListener("scroll", handleNavbarAnimation);

    return () => {
      document.removeEventListener("scroll", handleNavbarAnimation);
    };
  }, []);

  return {
    navRef,
    headerRef,
  };
}
