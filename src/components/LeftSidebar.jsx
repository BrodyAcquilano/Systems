import { useState } from "react";
import "../styles/LeftSidebar.css";

const tocData = [
  {
    title: "Part I – Foundations of Systemic Thinking",
    description: "Why systems? Why this lens? Vocabulary and tools",
    chapters: [
      {
        title: "Chapter 1: Why Systems Matter",
        file: "Chapter1.md",
        sections: [
          "1.1 Introduction: A Structural Guide for Policymakers",
          "1.2 Introduction: Poverty as a Systemic Outcome",
          "1.3 Limits of Morality, Charity, and Punishment",
          "1.4 From Stories to Systems: Analytical Frameworks",
          "1.5 Why Ecology, Engineering, Economics and Law?",
          "1.6 Vocabulary & Notation",
          "1.7 Reference: Symbols, Visual Language",
        ],
      },
    ],
  },
  {
    title: "Part II – Ecology of Inequality",
    description: "Ecological concepts applied to social systems",
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
      {
        title: "Chapter 3: Patches, Corridors, and Barriers",
        file: "Chapter3.md",
        sections: [
          "3.1 Definition/Introduction: Spatial ecology and access",
          "3.2 Vocabulary: Habitat patch, corridor, barrier, fragmentation",
          "3.3 Analogies: Wildlife corridors, urban deserts, rail networks",
          '3.4 Case Studies: "Trapped Downtown", ID restrictions, shelter transit gaps',
          "3.5 Analysis: Geographic inequality, legal barriers to access",
          "3.6 Potential Solutions: Integrated services, mobile programs",
          "3.7 Solution Analysis: Implementation costs vs. reduced recidivism",
          "3.8 Long-Term Outcomes: More equitable service distribution",
        ],
      },
      {
        title: "Chapter 4: Landscape Heterogeneity and Uneven Terrain",
        file: "Chapter4.md",
        sections: [
          "4.1 Definition/Introduction: Uneven landscapes create fragmentation in access, opportunity, and exposure to risk.",
          "4.2 Vocabulary: Heterogeneity, fragmentation, edge effects, zoning, terrain cost",
          "4.3 Analogies: Topographic relief, watershed divides, patchy ecosystems, war zones",
          '4.4 Case Studies: Zoning exclusions, uphill access to healthcare, "wrong side of the tracks" schools',
          "4.5 Analysis: Legal, physical, and policy landscapes produce uneven service terrains",
          "4.6 Potential Solutions: Legal harmonization, transit-oriented planning, equity-based zoning",
          "4.7 Solution Analysis: Risk of gentrification, political resistance, inter-jurisdictional complexity",
          "4.8 Long-Term Outcomes: Smoother terrain → more universal access, less geographic precarity",
        ],
      },
      {
        title: "Chapter 5: Resource Flows and Scarcity Cycles",
        file: "Chapter5.md",
        sections: [
          "5.1 Definition/Introduction: Inputs, outputs, and resource flow",
          "5.2 Vocabulary: Bottleneck, leak, redundancy, buffer, debt trap",
          "5.3 Analogies: Hydraulic systems, nutrient cycles, blackout cascades",
          "5.4 Case Studies: Overdrafts, missed work, food insecurity",
          "5.5 Analysis: Blocked flows = vulnerability; access = stability",
          "5.6 Potential Solutions: Basic income, emergency buffer programs",
          "5.7 Solution Analysis: Risks of inflation vs. downstream savings",
          "5.8 Long-Term Outcomes: Break scarcity cycles → lower systemic cost",
        ],
      },
    ],
  },
  {
    title: "Part III – Engineering for Stability and Resilience",
    description: "Engineering and systems design applied to social problems",
    chapters: [
      {
        title: "Chapter 6: Feedback Loops and Instability",
        file: "Chapter6.md",
        sections: [
          "6.1 Definition/Introduction: Feedback in systems",
          "6.2 Vocabulary: Positive feedback, negative feedback, stability",
          "6.3 Analogies: Thermostats, runaway loops, climate systems",
          '6.4 Case Studies: "Three Strikes", benefit cutoff traps',
          "6.5 Analysis: Where policy amplifies vs. dampens outcomes",
          "6.6 Potential Solutions: Conditional programs with feedback checks",
          "6.7 Solution Analysis: Balancing incentives with reliability",
          "6.8 Long-Term Outcomes: Fewer cycles of crisis",
        ],
      },
      {
        title: "Chapter 7: Load, Stress, and Failure Thresholds",
        file: "Chapter7.md",
        sections: [
          "7.1 Definition/Introduction: Structural load and human pressure",
          "7.2 Vocabulary: Fatigue, yield point, safety factor",
          "7.3 Analogies: Bridge collapse, mental burnout, system fatigue",
          "7.4 Case Studies: ER overuse, eviction cycles, school dropout",
          "7.5 Analysis: Poor have lower safety margins, higher failure risk",
          "7.6 Potential Solutions: Legal rest periods, overload caps",
          "7.7 Solution Analysis: System capacity cost vs. social stability",
          "7.8 Long-Term Outcomes: Better margin → fewer crises → lower cost",
        ],
      },
      {
        title: "Chapter 8: Interfaces, Coupling, and Interdependency",
        file: "Chapter8.md",
        sections: [
          "8.1 Definition/Introduction: System boundaries and overlap",
          "8.2 Vocabulary: Interface, tight coupling, modularity",
          "8.3 Analogies: Software APIs, valve systems, ecological edge effects",
          "8.4 Case Studies: Shelter ↔ Policing, Court ↔ Employment",
          "8.5 Analysis: Policy hand-offs that fail due to weak coupling",
          "8.6 Potential Solutions: Interagency portals, shared intake systems",
          "8.7 Solution Analysis: Costs of integration vs. fragmentation losses",
          "8.8 Long-Term Outcomes: More adaptable, humane service network",
        ],
      },
    ],
  },
  {
    title: "Part IV – Economic and Legal Frameworks",
    description:
      "How to model, measure, and reform system structures and write policies using ecological and engineering principles with economic considerations.",
    chapters: [
      {
        title: "Chapter 9: Economic Modeling and Opportunity Cost",
        file: "Chapter9.md",
        sections: [
          "9.1 Principles of Scarcity and Trade-offs",
          "9.2 Modeling Resource Allocation",
          "9.3 Cost-Benefit and ROI in Social Policy",
          "9.4 Fiscal Responsibility in Reform",
          "9.5 Case Examples",
          "9.6 Glossary and Formulas",
        ],
      },
      {
        title: "Chapter 10: Legal Systems and Structural Barriers",
        file: "Chapter10.md",
        sections: [
          "10.1 Rights vs. Privileges Framework",
          "10.2 Legal Gaps and Enforcement Issues",
          "10.3 Property and Power in Law",
          "10.4 Case Law and Policy Precedents",
          "10.5 Reform Approaches",
          "10.6 Legal Glossary",
        ],
      },
      {
        title: "Chapter 11: Policy Design and Implementation",
        file: "Chapter11.md",
        sections: [
          "11.1 Principles of Effective Policy Making",
          "11.2 Inclusive, Ethical, and Resilient Policy Design",
          "11.3 Stakeholder Engagement and Collaboration",
          "11.4 Monitoring, Evaluation, and Feedback",
          "11.5 Tools for Policymakers",
        ],
      },
    ],
  },
  {
    title: "Part V – Applying the Framework: Case Studies and Practical Tools",
    description: "Examples of how tools in part 4 above can be applied.",
    chapters: [
      {
        title: "Chapter 12: Case Study Template and Methodology",
        file: "Chapter12.md",
        sections: [
          "12.1 How to Use This Book to Analyze Cases",
          "12.2 Stepwise Guide to Mapping Systems and Problems",
          "12.3 Worksheets and Tools",
        ],
      },
      {
        title: "Chapter 13: Selected Case Studies",
        file: "Chapter13.md",
        sections: [
          "13.1 Homelessness and Transit Isolation",
          "13.2 Landlord Abuse and Housing Insecurity",
          "13.3 Criminal Records and Employment Barriers",
          "13.4 Addiction and Survival Economies",
          "13.5 Other Case Snapshots",
        ],
      },
      {
        title: "Chapter 14: Future Directions and Calls to Action",
        file: "Chapter14.md",
        sections: [
          "14.1 Scaling Solutions",
          "14.2 Building Interdisciplinary Coalitions",
          "14.3 Educating Systems Thinkers and Policymakers",
          "14.4 Final Reflections",
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

  const togglePart = (index, e) => {
    if (isTouchDevice) {
      flashElement(e.currentTarget);
      clearSelection();
    }
    setExpandedParts((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleChapter = (chapterKey, e) => {
    if (isTouchDevice) {
      flashElement(e.currentTarget);
      clearSelection();
    }
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterKey]: !prev[chapterKey],
    }));
  };

const handleFileSelect = (fileName, e) => {
  if (selectedFile === fileName) return;

  setSelectedFile(fileName);
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
  setBgId(Math.floor(Math.random() * 7) + 1);
  setBgPosition(getRandomPosition());
};

  return (
    <aside className="left-sidebar">
      <div
        className={`left-sidebar-title ${
          selectedFile === "0. Table of Contents.md" ? "active" : ""
        }`}
        onClick={(e) => {
          handleFileSelect("0. Table of Contents.md", e);
        }}
      >
        Table of Contents
      </div>
      <ul>
        {tocData.map((part, partIndex) => (
          <li key={partIndex}>
            <div className="part-header">
              <div
                className="part-toggle-icon"
                onClick={(e) => {
                  togglePart(partIndex, e);
                }}
              >
                {expandedParts[partIndex] ? "▼" : "▶"}
              </div>
              <div
                className="part-title"
                onClick={(e) => {
                  togglePart(partIndex, e);
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
                          className="chapter-toggle-icon"
                          onClick={(e) => {
                            toggleChapter(chapterKey, e);
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
                                  handleSectionSelect(
                                    chapter.file,
                                    e
                                  );
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
