import { useEffect, useRef, useState } from "react";
import "../styles/CustomCursor.css";

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

  switch (cursor) {
case "Gold Arrow":
  cursorContent = (
    <svg
      width="21"
      height="38"
      viewBox="0 0 21 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-arrow"
      aria-label="Custom arrow cursor"
      role="img"
    >
      <defs>
        <linearGradient id="metallicFill" x1="0" y1="0" x2="0" y2="1">
           <stop offset="0%" stopColor="#a99b47ff" />
          <stop offset="100%" stopColor="#a58a36ff" />
        </linearGradient>
        <pattern
          id="metallicFillPattern"
          patternUnits="userSpaceOnUse"
          width="21"
          height="38"
        >
          <rect width="21" height="38" fill="url(#metallicFill)" />
        </pattern>
      </defs>

      <path
      d="M2 0 L2 28 L6.3 20 L11.5 36 L18.5 32 L10.8 18 L19 20 Z"
        fill="url(#metallicFillPattern)"
        stroke="#000000ff"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
  break;

  case "Steel Arrow":
  cursorContent = (
    <svg
      width="21"
      height="38"
      viewBox="0 0 21 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-arrow"
      aria-label="Custom arrow cursor"
      role="img"
    >
      <defs>
        <linearGradient id="metallicFill" x1="0" y1="0" x2="0" y2="1">
           <stop offset="0%" stopColor="#9f9e9aff" />
          <stop offset="100%" stopColor="#6e6d6cff" />
        </linearGradient>
        <pattern
          id="metallicFillPattern"
          patternUnits="userSpaceOnUse"
          width="21"
          height="38"
        >
          <rect width="21" height="38" fill="url(#metallicFill)" />
        </pattern>
      </defs>

      <path
      d="M2 0 L2 28 L6.3 20 L11.5 36 L18.5 32 L10.8 18 L19 20 Z"
        fill="url(#metallicFillPattern)"
        stroke="#000000ff"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
  break;

    case "sparkle":
    default:
      cursorContent = "✨";
      break;
  }

  return (
     <div
    className="custom-cursor"
    ref={cursorRef}
    style={{
      transform: isCenteredCursor ? "translate(-50%, -50%)" : "translate(0, 0)",
    }}
  >
    {cursorContent}
  </div>
  );
}

export default CustomCursor;