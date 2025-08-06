import { useState, useEffect } from "react";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import MainContent from "./components/MainContent";
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
      <div className="header-container">
        <Header />
        </div>
      <div className="body-container">
       

   {/* Toggle Button for Left Sidebar */}
        <button
          className={`left-side-toggle left-toggle ${showLeftPanel ? "" : "left-collapsed-toggle"}`}
          onClick={() => setShowLeftPanel(!showLeftPanel)}
          aria-label="Toggle Table of Contents"
        >
          ☰
        </button>

        {/* Collapsible Left Sidebar */}
        <div
          className={`left-overlay-panel left-panel-wrapper ${showLeftPanel ? "" : "left-collapsed"}`}
          aria-hidden={!showLeftPanel}
        >
            <LeftSidebar 
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile} 
            setBgId={setBgId}
           />
        </div>

  {/* Toggle Button for Right Sidebar */}
        <button
          className={`right-side-toggle right-toggle ${showRightPanel ? "" : "right-collapsed-toggle"}`}
          onClick={() => setShowRightPanel(!showRightPanel)}
          aria-label="Toggle Options"
        >
          ☰
        </button>

        {/* Collapsible Right Sidebar */}
        <div
          className={`right-overlay-panel right-panel-wrapper ${showRightPanel ? "" : "right-collapsed"}`}
          aria-hidden={!showRightPanel}
        >
            <RightSidebar fontStyle={fontStyle} 
            setFontStyle={setFontStyle} 
            fontColor={fontColor}
            setFontColor={setFontColor} />
        </div>

        <MainContent fileContent={fileContent} bgId={bgId} fontStyle={fontStyle} fontColor={fontColor} />
      </div>
    </div>
  );
}

export default App;

