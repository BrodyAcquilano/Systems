import "../styles/RightSidebar.css";
import { useEffect, useState } from "react";

function RightSidebar({
  fontStyle,
  setFontStyle,
  fontColor,
  setFontColor,
  setCursor,
  setAnimationContent,
}) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const hasTouch = matchMedia("(hover: none), (pointer: coarse)").matches;
    setIsTouchDevice(hasTouch);
  }, []);

  const handleFontStyleChange = (e) => {
    const newStyle = e.target.value;
    setFontStyle(newStyle);
    localStorage.setItem("fontStyle", newStyle);
  };

  const handleFontColorChange = (e) => {
    const newColor = e.target.value;
    setFontColor(newColor);
    localStorage.setItem("fontColor", newColor);
  };

  const handleCursorChange = (e) => {
    const newCursor = e.target.value;
    setCursor(newCursor);
    localStorage.setItem("cursor", newCursor);
  };

  const handleAnimationChange = (e) => {
    const newAnimation = e.target.value;
    setAnimationContent(newAnimation);
    localStorage.setItem("animation", newAnimation);
  };

  return (
    <aside className="right-sidebar">
      <div className="right-sidebar-title">Style Options</div>

      <div className="dropdown-group">
        <label htmlFor="font-style-select">Font Style:</label>
        <select
          id="font-style-select"
          value={fontStyle}
          onChange={handleFontStyleChange}
        >
          <option value="'Alegreya SC', serif">Alegreya SC</option>
          <option value="'Domine', serif">Domine</option>
          <option value="'Pinyon Script', cursive">Pinyon Script</option>
          <option value="'Uncial Antiqua', serif">Uncial Antiqua</option>
          <option value="'Cedarville Cursive', cursive">Cedarville Cursive</option>
          <option value="'Dancing Script', cursive">Dancing Script</option>
          <option value="'IM Fell English', serif">IM Fell English</option>
          <option value="'Lucida Handwriting', cursive">Lucida Handwriting</option>
          <option value="'Great Vibes', cursive">Great Vibes</option>
          <option value="'MedievalSharp', cursive">MedievalSharp</option>
          <option value="'Caudex', serif">Caudex</option>
          <option value="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">
            Segoe UI / Tahoma
          </option>
        </select>
      </div>

      <div className="dropdown-group">
        <label htmlFor="font-color-select">Font Color:</label>
        <select
          id="font-color-select"
          value={fontColor}
          onChange={handleFontColorChange}
        >
          <option value="#2b2b2b">Classic Ink</option>
          <option value="#4e4e4e">Iron Gray</option>
          <option value="#4a2c2a">Dark Mahogany</option>
          <option value="#6f4f28">Chestnut</option>
          <option value="#7b5e57">Weathered Leather</option>
          <option value="#8B0000">Crimson Red</option>
          <option value="#7C0A02">Burgundy</option>
          <option value="#9C1C1C">Scarlet Ink</option>
          <option value="#1C1CA2">Royal Blue Ink</option>
          <option value="#003366">Ink Blue</option>
          <option value="#2C3E50">Slate Blue</option>
        </select>
      </div>

      {!isTouchDevice && (
        <div className="dropdown-group cursor-options">
          <label htmlFor="cursor-select">Cursor Style:</label>
          <select id="cursor-select" onChange={handleCursorChange}>
            <option value="Gold Arrow">Gold Arrow</option>
            <option value="Steel Arrow">Steel Arrow</option>
            <option value="Sparkle Cursor">Sparkle Cursor</option>
          </select>
        </div>
      )}

      <div className="dropdown-group">
        <label htmlFor="animation-select">Animation Style:</label>
        <select id="animation-select" onChange={handleAnimationChange}>
          <option value="sparkle">Sparkle</option>
          <option value="lightning">Lightning</option>
        </select>
      </div>
    </aside>
  );
}

export default RightSidebar;
