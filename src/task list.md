📋 Website Development Task Summary

---

3. Fix Text Highlight Sticking After Tap  
Prevent text from staying selected after tapping toggle buttons:
const clearSelection = () => {
  const sel = window.getSelection();
  if (sel) sel.removeAllRanges();
};

// Inside onClick:
clearSelection();

---

4. Add Custom Sword SVG Cursor  
- Design a centered sword SVG (32x32 or 48x48 recommended)  
- Save with transparent background and a centered `viewBox`  
- Apply with:
body {
  cursor: url('/cursors/sword.svg') 16 16, auto;
}

---

5. Media Queries and Mobile Detection  
- Update any breakpoints to use `768px` instead of `600px`.  
- Detect touch screens with both CSS and JS:

CSS:
@media (hover: none) and (pointer: coarse) {
  /* mobile-specific styles */
}

JavaScript:
const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

---

6. Markdown Hover Effects & Cursor Glow

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

7. Add Background Theme Options (Beyond Parchment)  
- Provide multiple background styles or themes (e.g., dark mode, abstract patterns, solid colors)  
- Allow users to switch themes via UI toggle or menu.

---

8. Save Style Preferences to Local Storage  
- When a user selects a style/theme, save it to localStorage:
localStorage.setItem("preferredTheme", themeName);
- On app load, check localStorage and apply the saved theme:
const savedTheme = localStorage.getItem("preferredTheme");
if (savedTheme) applyTheme(savedTheme);
