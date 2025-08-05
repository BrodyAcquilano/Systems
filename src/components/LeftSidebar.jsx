import "../styles/LeftSidebar.css";

function LeftSidebar({ setSelectedFile, setBgId }) {
  const handleFileSelect = (fileName) => {
    setSelectedFile(fileName);
    setBgId(Math.floor(Math.random() * 7) + 1);
  };

  return (
    <aside className="left-sidebar">
      <div className="left-sidebar-title" onClick={() => handleFileSelect("0. Table of Contents.md")}>Table of Contents</div>
      <ul>
        <li className="part-title">Part I – Foundations of Systemic Thinking</li>
        <li onClick={() => handleFileSelect("1. Why Systems Matter.md")}>1. Why Systems Matter</li>

        <li className="part-title">Part II – Ecology of Inequality</li>
        <li onClick={() => handleFileSelect("2. Niches, Roles and Resource Competition.md")}>2. Niches, Roles and Resource Competition</li>
        <li onClick={() => handleFileSelect("3. Patches, Corridors and Barriers.md")}>3. Patches, Corridors and Barriers</li>
        <li onClick={() => handleFileSelect("4. Landscape Heterogeneity and Uneven Terrain.md")}>4. Landscape Heterogeneity and Uneven Terrain</li>
        <li onClick={() => handleFileSelect("5. Resource Flows and Scarcity Cycles.md")}>5. Resource Flows and Scarcity Cycles</li>

        <li className="part-title">Part III – Engineering for Stability and Resilience</li>
        <li onClick={() => handleFileSelect("6. Feedback Loops and Instability.md")}>6. Feedback Loops and Instability</li>
        <li onClick={() => handleFileSelect("7. Load, Stress and Failure Thresholds.md")}>7. Load, Stress and Failure Thresholds</li>
        <li onClick={() => handleFileSelect("8. Interfaces, Coupling and Interdependency.md")}>8. Interfaces, Coupling and Interdependency</li>

        <li className="part-title">Part IV – Economic and Legal Frameworks</li>
        <li onClick={() => handleFileSelect("9. Economic Modeling and Opportunity Cost.md")}>9. Economic Modeling and Opportunity Cost</li>
        <li onClick={() => handleFileSelect("10. Legal Systems and Structural Barriers.md")}>10. Legal Systems and Structural Barriers</li>
        <li onClick={() => handleFileSelect("11. Policy Design and Implementation.md")}>11. Policy Design and Implementation</li>

        <li className="part-title">Part V – Applying the Framework</li>
        <li onClick={() => handleFileSelect("12. Case Study Template and Methodology.md")}>12. Case Study Template and Methodology</li>
        <li onClick={() => handleFileSelect("13. Selected Case Studies.md")}>13. Selected Case Studies</li>
        <li onClick={() => handleFileSelect("14. Future Directions and Calls to Action.md")}>14. Future Directions and Calls to Action</li>
      </ul>
    </aside>
  );
}

export default LeftSidebar;
