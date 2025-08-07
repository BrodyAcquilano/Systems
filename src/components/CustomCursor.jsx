import { useEffect, useRef, useState } from "react";
import "../styles/CustomCursor.css";
import cursors from "../cursors/cursors";

function CustomCursor({ cursor }) {
  const cursorRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const isCenteredCursor = cursor === "sparkle" || cursor === "lightning";
  useEffect(() => {
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

  let cursorContent;

const renderCursor = cursors[cursor] || cursors["Gold Arrow"];
cursorContent = renderCursor();

  return (
    <div
      className="custom-cursor"
      ref={cursorRef}
      style={{
        transform: isCenteredCursor
          ? "translate(-50%, -50%)"
          : "translate(0, 0)",
      }}
    >
      {cursorContent}
    </div>
  );
}

export default CustomCursor;
