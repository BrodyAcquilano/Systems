📋 Website Development Task Summary

1. Add Custom Sword SVG Cursor  
- Design a centered sword SVG (32x32 or 48x48 recommended)  
- Save with transparent background and a centered `viewBox`  
- Apply with:
body {
  cursor: url('/cursors/sword.svg') 16 16, auto;
}

---

2. Media Queries and Mobile Detection  
- Update any breakpoints to use `768px` instead of `600px`.  
- Detect touch screens with both CSS and JS:

CSS:
@media (hover: none) and (pointer: coarse) {
  /* mobile-specific styles */
}

JavaScript:
const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

---

3. Markdown Hover Effects & Cursor Glow

Glow text on hover:
.markdown-content p:hover {
  color: gold;
  text-shadow: 0 0 10px gold;
  transition: all 0.3s ease;
}

Glowing cursor follower (JS):
document.addEventListener('mousemove', (e) => {
  const glow = document.getElementById('cursor-glow');
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

Glowing cursor follower (CSS):
#cursor-glow {
  position: fixed;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: radial-gradient(white, rgba(255,255,255,0));
  pointer-events: none;
  mix-blend-mode: screen;
  z-index: 9999;
}

---

4. Add Background Theme Options (Beyond Parchment)  
- Provide multiple background styles or themes (e.g., dark mode, abstract patterns, solid colors)  
- Allow users to switch themes via UI toggle or menu.
-wooden desk , scroll, book, animations for page turns etc...
---

5. add database link make a custom ereader /writer with different pages for read/write or for designing custom styles, animations, and cursors or fonts. 
