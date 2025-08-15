import { useState } from "react";
import "../styles/LeftSidebar.css";

const tocData = [
  {
    title: "Part I - Foundations of Socioecopolitics",
    chapters: [
      {
        title: "Chapter 1: Introduction",
        file: "Chapter1.md",
        sections: [
          "1.1 What Is Socioecopolitics?",
          "1.2 The Scope Of This Book",
          "1.3 A Note On Analogy And Respect",
        ],
      },
    ],
  },
  {
    title: "Part II - Ecology of Inequality",
    chapters: [
      {
        title: "Chapter 2: Niches, Roles, and Resource Competition",
        file: "Chapter2.md",
        sections: [
          "2.1 Definition/Introduction: Ecological niches and social roles",
          "2.2 Vocabulary: Niche, adaptation, role inflexibility, parasitism",
          "2.3 Analogies: Parasites vs. mutualism, invasive species, overcompetition",
          "2.4 Case Studies: Freelancers, gig workers, the unbanked",
          "2.5 Analysis: Who can legally shift roles? Who’s locked in?",
          "2.6 Potential Solutions: Access to re-skilling, tenant protections",
          "2.7 Solution Analysis: Risk of policy misuse or underuse",
          "2.8 Long-Term Outcomes: Role flexibility → resilience and innovation",
        ],
      },
    ],
  },
];

function LeftSidebar({
  selectedFile,
  setSelectedFile,
  setBgId,
  setBgPosition,
}) {
  const [expandedParts, setExpandedParts] = useState({});
  const [expandedChapters, setExpandedChapters] = useState({});

  const backgroundPositionOverrides = [
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
    return backgroundPositionOverrides[
      Math.floor(Math.random() * backgroundPositionOverrides.length)
    ];
  }

  function flashElement(el) {
    if (!el) return;

    const originalColor = el.style.color;
    const originalShadow = el.style.textShadow;

    el.style.color = "#cfcf8e";
    el.style.textShadow = "0 0 4px #f5f59655";

    setTimeout(() => {
      el.style.color = originalColor || "#a5a54e";
      el.style.textShadow = originalShadow || "none";
    }, 700);
  }

   function flashTitle(el) {
  if (!el) return;

  // Only flash if currently inactive
  if (el.classList.contains("inactive")) {
    el.classList.remove("inactive");
    el.classList.add("active");

    setTimeout(() => {
      el.classList.remove("active");
      el.classList.add("inactive");
    }, 700);
  }
}

  function clearSelection() {
    const sel = window.getSelection();
    if (sel) sel.removeAllRanges();
  }

  const isTouchDevice = window.matchMedia(
    "(hover: none) and (pointer: coarse)"
  ).matches;

  const togglePart = (index) => {
    setExpandedParts((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const togglePartTitle = (index, e) => {
    setExpandedParts((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));

    if (isTouchDevice) {
        flashTitle(e.currentTarget);
    }
  };

  const toggleChapter = (chapterKey) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterKey]: !prev[chapterKey],
    }));
  };

  const handleFileSelect = (fileName, e) => {
    if (selectedFile === fileName) return;

    setSelectedFile(fileName);
    localStorage.setItem("selectedFile", fileName);
    setBgId(Math.floor(Math.random() * 7) + 1);
    setBgPosition(getRandomPosition());

    if (isTouchDevice) {
      setTimeout(() => {
        flashElement(e.currentTarget);
        clearSelection();
      }, 50); // wait for re-render
    }
  };

  const handleSectionSelect = (fileName, e) => {
    if (isTouchDevice) {
      flashElement(e.currentTarget);
      clearSelection();
    }

    if (selectedFile === fileName) return;

    setSelectedFile(fileName);
    localStorage.setItem("selectedFile", fileName);
    setBgId(Math.floor(Math.random() * 7) + 1);
    setBgPosition(getRandomPosition());
  };

  return (
    <aside className="left-sidebar">
      <div className="left-sidebar-title">Table of Contents</div>
      <ul>
        {tocData.map((part, partIndex) => (
          <li key={partIndex}>
            <div className="part-header">
              <div
                className={`part-toggle-icon ${
                  expandedParts[partIndex]
                    ? "active"
                    : isTouchDevice
                    ? "inactive"
                    : ""
                }`}
                onClick={(e) => {
                  togglePart(partIndex);
                }}
              >
                {expandedParts[partIndex] ? "▼" : "▶"}
              </div>
              <div
                className={`part-title ${
                  part.chapters.some((chapter) => chapter.file === selectedFile)
                    ? "active"
                    : isTouchDevice
                    ? "inactive"
                    : ""
                }`}
                onClick={(e) => {
                  togglePartTitle(partIndex, e);
                }}
              >
                {part.title}
              </div>
            </div>

            {expandedParts[partIndex] && (
              <div className="chapter-list">
                {part.chapters.map((chapter, chapterIndex) => {
                  const chapterKey = `${partIndex}-${chapterIndex}`;
                  return (
                    <div key={chapterKey}>
                      <div className="chapter-header">
                        <div
                          className={`chapter-toggle-icon ${
                            expandedChapters[chapterKey]
                              ? "active"
                              : isTouchDevice
                              ? "inactive"
                              : ""
                          }`}
                          onClick={(e) => {
                            toggleChapter(chapterKey);
                          }}
                        >
                          {expandedChapters[chapterKey] ? "▼" : "▶"}
                        </div>
                        <div
                          className={`chapter-title ${
                            selectedFile === chapter.file ? "active" : ""
                          }`}
                          onClick={(e) => {
                            handleFileSelect(chapter.file, e);
                          }}
                        >
                          {chapter.title}
                        </div>
                      </div>

                      {expandedChapters[chapterKey] && (
                        <ul className="section-list">
                          {chapter.sections.map(
                            (sectionTitle, sectionIndex) => (
                              <li
                                className="section-item"
                                key={sectionIndex}
                                onClick={(e) => {
                                  handleSectionSelect(chapter.file, e);
                                  // In the future you can scroll to section anchor here
                                }}
                              >
                                {sectionTitle}
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default LeftSidebar;
