import { useEffect } from "react";
import animations from "../animations/animations";
import "../styles/animations.css";

function CustomAnimation({ animationContent }) {
  useEffect(() => {
    const spawn = animations[animationContent] || animations["Sparkle"];

    const handleMove = (e) => {
      spawn(e.clientX, e.clientY, false);
    };

    const handleClick = (e) => {
      const sparkleCount = window.innerWidth > 1000 ? 50 : 30;
      let created = 0;

      const spawnBatch = () => {
        for (let i = 0; i < 10 && created < sparkleCount; i++) {
          spawn(e.clientX, e.clientY, true);
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
  }, [animationContent]);

  return <div id="animation-container"></div>;
}

export default CustomAnimation;
