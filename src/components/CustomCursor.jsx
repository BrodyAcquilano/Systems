import { useEffect, useRef, useState } from "react";
import "../styles/CustomCursor.css";

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="custom-cursor" ref={cursorRef}>
      {/* Replace with ⚡ <img src="/cursor.svg" /> or inline SVG if you prefer */}
      ✨
    </div>
  );
}

export default CustomCursor;
