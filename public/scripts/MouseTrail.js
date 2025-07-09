const trailCount = 20;
const trailElements = [];

for (let i = 0; i < trailCount; i++) {
  const dot = document.createElement("div");
  dot.style.position = "fixed";
  dot.style.width = "12px";
  dot.style.height = "12px";
  dot.style.borderRadius = "50%";
  dot.style.pointerEvents = "none";
  dot.style.background = "rgba(59,130,246,0.6)";
  dot.style.filter = "blur(4px)";
  dot.style.zIndex = "9999";
  dot.style.transition = "transform 0.1s ease-out, opacity 0.2s";
  document.body.appendChild(dot);
  trailElements.push(dot);
}

let mouseX = 0, mouseY = 0;
let lastX = 0, lastY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  lastX += (mouseX - lastX) * 0.2;
  lastY += (mouseY - lastY) * 0.2;

  trailElements.forEach((dot, i) => {
    const t = i / trailCount;
    const x = lastX - i * 3;
    const y = lastY - i * 3;
    const scale = (1 - t) * 0.6 + 0.4;
    const opacity = (1 - i / trailCount).toString();

    dot.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    dot.style.opacity = opacity;
  });

  requestAnimationFrame(animate);
}

animate();
