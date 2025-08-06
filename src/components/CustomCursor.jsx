import { useEffect, useRef, useState } from "react";
import "../styles/CustomCursor.css";

function CustomCursor() {
  const cursorRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch once on mount
    const hasTouch = matchMedia("(hover: none), (pointer: coarse)").matches;
    setIsTouchDevice(hasTouch);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div className="custom-cursor" ref={cursorRef}>
      ✨
    </div>
  );
}

export default CustomCursor;

{
  /* Replace with ⚡or <img src="/cursor.svg" /> or inline SVG if you prefer */
}
