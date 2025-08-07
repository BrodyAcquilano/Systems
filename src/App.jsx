import { useState, useEffect } from "react";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import MainContent from "./components/MainContent";
import CustomCursor from "./components/CustomCursor";
import CustomAnimation from "./components/CustomAnimation"
import "./styles/App.css";

const markdownFiles = import.meta.glob("./markdown/*.md", { as: "raw" });

function App() {
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

const [selectedFile, setSelectedFile] = useState(
  localStorage.getItem("selectedFile") || "Chapter1.md"
);
const [fileContent, setFileContent] = useState("");
const [bgId, setBgId] = useState(() => Math.floor(Math.random() * 7) + 1);
const [showLeftPanel, setShowLeftPanel] = useState(false);
const [showRightPanel, setShowRightPanel] = useState(false);
const [fontStyle, setFontStyle] = useState(
  localStorage.getItem("fontStyle") || "'Alegreya SC', serif"
);
const [fontColor, setFontColor] = useState(
  localStorage.getItem("fontColor") || "#2b2b2b"
);
const [cursor, setCursor] = useState(
  localStorage.getItem("cursor") || "Gold Arrow"
);
const [animationContent, setAnimationContent] = useState(
  localStorage.getItem("animation") || "Sparkle"
);
const [bgPosition, setBgPosition] = useState(getRandomPosition());


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

  function flashElement(el) {
    if (!el) return;
    const originalColor = el.style.color;
    el.style.color = "#f5f596";
    setTimeout(() => {
      el.style.color = originalColor || "#a5a54e";
    }, 700);
  }

  function clearSelection() {
    const sel = window.getSelection();
    if (sel) sel.removeAllRanges();
  }

  const isTouchDevice = window.matchMedia(
    "(hover: none) and (pointer: coarse)"
  ).matches;

  return (
    <div className="app-container">
      <CustomCursor cursor={cursor} />
     <CustomAnimation animationContent={animationContent} />
      <div className="header-container">
        <Header />
      </div>
      <div className="body-container">
        {/* Toggle Button for Left Sidebar */}
        <button
          className={`left-side-toggle left-toggle ${
            showLeftPanel ? "" : "left-collapsed-toggle"
          }`}
          onClick={(e) => {
            if (isTouchDevice) flashElement(e.currentTarget);
            clearSelection();
            setShowLeftPanel(!showLeftPanel);
          }}
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
          onClick={(e) => {
            if (isTouchDevice) flashElement(e.currentTarget);
            clearSelection();
            setShowRightPanel(!showRightPanel);
          }}
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
            setCursor={setCursor}
            setAnimationContent={setAnimationContent}
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
