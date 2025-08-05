import "../styles/RightSidebar.css";

function RightSidebar({ fontStyle, setFontStyle, fontColor, setFontColor }) {
  return (
    <aside className="right-sidebar">
      <div className="right-sidebar-title">Style Options</div>

      <div className="dropdown-group">
        <label htmlFor="font-style-select">Font Style:</label>
        <select
          id="font-style-select"
          value={fontStyle}
          onChange={(e) => setFontStyle(e.target.value)}
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
          <option value="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">Segoe UI / Tahoma</option>

          
        </select>
      </div>

      <div className="dropdown-group">
        <label htmlFor="font-color-select">Font Color:</label>
        <select
          id="font-color-select"
          value={fontColor}
          onChange={(e) => setFontColor(e.target.value)}
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
    </aside>
  );
}

export default RightSidebar;
