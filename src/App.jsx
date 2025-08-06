import { useState, useEffect } from "react";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import MainContent from "./components/MainContent";
import CustomCursor from "./components/CustomCursor";
import "./styles/App.css";

const markdownFiles = import.meta.glob("./markdown/*.md", { as: "raw" });

function App() {
  const [selectedFile, setSelectedFile] = useState("0. Table of Contents.md");
  const [fileContent, setFileContent] = useState("");
  const [bgId, setBgId] = useState(() => Math.floor(Math.random() * 7) + 1);
  const [showLeftPanel, setShowLeftPanel] = useState(false);
  const [showRightPanel, setShowRightPanel] = useState(false);
  const [fontStyle, setFontStyle] = useState("'Alegreya SC', serif");
  const [fontColor, setFontColor] = useState("#2b2b2b");
  const [bgPosition, setBgPosition] = useState(getRandomPosition());

const bgPositionOverrides = [
  "left top",
  "left center",
  "left bottom",
  "center top",
  "center center",
  "center bottom",
  "right top",
  "right center",
  "right bottom",
];

function getRandomPosition() {
  return bgPositionOverrides[
    Math.floor(Math.random() * bgPositionOverrides.length)
  ];
}

  const spawnSparkle = (x, y, isClick = false) => {
    const sparkle = document.createElement("div");
    sparkle.className = isClick ? "click-sparkle" : "sparkle";
    sparkle.innerText = "✨";

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    const rotation = `${Math.floor(Math.random() * 360)}deg`;
    sparkle.style.setProperty("--rotation", rotation);

    if (isClick) {
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 400 + 200; // 200–600px
      const moveX = `${Math.cos(angle) * distance}px`;
      const moveY = `${Math.sin(angle) * distance}px`;
      const scale = (0.5 + Math.random() * 1.2).toFixed(2);

      sparkle.style.setProperty("--move-x", moveX);
      sparkle.style.setProperty("--move-y", moveY);
      sparkle.style.setProperty("--scale", scale);
      sparkle.style.fontSize = `${12 + Math.random() * 20}px`;
      sparkle.style.opacity = (0.6 + Math.random() * 0.4).toFixed(2);

      const minDuration = 2000; // 2 seconds
      const maxDuration = 5000; // 5 seconds
      const duration =
        Math.random() * (maxDuration - minDuration) + minDuration;
      sparkle.style.setProperty("--sparkle-duration", `${duration}ms`);

      setTimeout(() => sparkle.remove(), duration);
    } else {
      const size = 10 + Math.random() * 14; // 10–24px
      sparkle.style.fontSize = `${size}px`;

      const rotation = `${Math.floor(Math.random() * 360)}deg`;
      sparkle.style.setProperty("--rotation", rotation);

      sparkle.style.opacity = (0.4 + Math.random() * 0.4).toFixed(2);

      sparkle.style.setProperty("--rand-dir-x", Math.random() > 0.5 ? 1 : -1);
      sparkle.style.setProperty("--rand-dir-y", Math.random() > 0.5 ? 1 : -1);

      // Optional: Assign random lifespan (use with cleanup below)
      const minDuration = 2000; // 2 seconds
      const maxDuration = 5000; // 5 seconds
      const duration =
        Math.random() * (maxDuration - minDuration) + minDuration;
      sparkle.style.setProperty("--sparkle-duration", `${duration}ms`);

      setTimeout(() => sparkle.remove(), duration);
    }

    document.getElementById("sparkle-container").appendChild(sparkle);
  };

  useEffect(() => {
    const handleMove = (e) => {
      spawnSparkle(e.clientX, e.clientY, false);
    };

    const handleClick = (e) => {
      const sparkleCount = window.innerWidth > 1000 ? 120 : 80;
      let created = 0;

      const spawnBatch = () => {
        for (let i = 0; i < 10 && created < sparkleCount; i++) {
          spawnSparkle(e.clientX, e.clientY, true);
          created++;
        }
        if (created < sparkleCount) {
          requestAnimationFrame(spawnBatch);
        }
      };

      spawnBatch();
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const loadMarkdown = async () => {
      const path = `./markdown/${selectedFile}`;
      const loader = markdownFiles[path];
      if (loader) {
        const content = await loader();
        setFileContent(content);
      } else {
        setFileContent("File not found.");
      }
    };
    loadMarkdown();
  }, [selectedFile]);

  return (
    <div className="app-container">
      <CustomCursor />
      <div id="sparkle-container"></div>
      <div className="header-container">
        <Header />
      </div>
      <div className="body-container">
        {/* Toggle Button for Left Sidebar */}
        <button
          className={`left-side-toggle left-toggle ${
            showLeftPanel ? "" : "left-collapsed-toggle"
          }`}
          onClick={() => setShowLeftPanel(!showLeftPanel)}
          aria-label="Toggle Table of Contents"
        >
          ☰
        </button>

        {/* Collapsible Left Sidebar */}
        <div
          className={`left-overlay-panel left-panel-wrapper ${
            showLeftPanel ? "" : "left-collapsed"
          }`}
          aria-hidden={!showLeftPanel}
        >
          <LeftSidebar
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            setBgId={setBgId}
            setBgPosition={setBgPosition}
          />
        </div>

        {/* Toggle Button for Right Sidebar */}
        <button
          className={`right-side-toggle right-toggle ${
            showRightPanel ? "" : "right-collapsed-toggle"
          }`}
          onClick={() => setShowRightPanel(!showRightPanel)}
          aria-label="Toggle Options"
        >
          ☰
        </button>

        {/* Collapsible Right Sidebar */}
        <div
          className={`right-overlay-panel right-panel-wrapper ${
            showRightPanel ? "" : "right-collapsed"
          }`}
          aria-hidden={!showRightPanel}
        >
          <RightSidebar
            fontStyle={fontStyle}
            setFontStyle={setFontStyle}
            fontColor={fontColor}
            setFontColor={setFontColor}
          />
        </div>

        <MainContent
          fileContent={fileContent}
          bgId={bgId}
          bgPosition={bgPosition}
          fontStyle={fontStyle}
          fontColor={fontColor}
        />
      </div>
    </div>
  );
}

export default App;
