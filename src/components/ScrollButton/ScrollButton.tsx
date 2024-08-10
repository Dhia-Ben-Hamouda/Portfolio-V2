import { useCallback, useEffect, useRef } from "react";
import { FaAngleUp } from "react-icons/fa";
import { StyledButton } from "./extra/styles";

export default function ScrollButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleButtonVisiblity = useCallback(() => {
    if (window.scrollY > 0) {
      buttonRef.current?.classList.remove("hidden");
    } else {
      buttonRef.current?.classList.add("hidden");
    }
  }, [buttonRef]);

  useEffect(() => {
    document.addEventListener("scroll", handleButtonVisiblity);

    return () => {
      document.removeEventListener("scroll", handleButtonVisiblity);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <StyledButton className="hidden" onClick={scrollToTop} ref={buttonRef}>
        <FaAngleUp />
      </StyledButton>
    </>
  );
}
