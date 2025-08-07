import "../styles/animations.css";

export function spawnLightning(x, y, isClick = false) {
  const sparkle = document.createElement("div");
  sparkle.className = isClick ? "click-sparkle" : "sparkle";
  sparkle.innerText = "⚡";

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    const rotation = `${Math.floor(Math.random() * 360)}deg`;
    sparkle.style.setProperty("--rotation", rotation);

    if (isClick) {
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 200 + 100; // 100–300px
      const moveX = `${Math.cos(angle) * distance}px`;
      const moveY = `${Math.sin(angle) * distance}px`;
      const scale = (0.5 + Math.random() * 1.2).toFixed(2);

      sparkle.style.setProperty("--move-x", moveX);
      sparkle.style.setProperty("--move-y", moveY);
      sparkle.style.setProperty("--scale", scale);
      sparkle.style.fontSize = `${12 + Math.random() * 20}px`;
      sparkle.style.opacity = (0.6 + Math.random() * 0.4).toFixed(2);

      const minDuration = 1000; // 1 second
      const maxDuration = 3000; // 3 seconds
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

document.getElementById("animation-container").appendChild(sparkle);
  };
