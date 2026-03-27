import { CanvasEngine } from './canvas-engine.js';
import { InputHandler } from './input-handler.js';
import { UI } from './ui.js';

// Initialize canvas
const canvas = document.getElementById('drawing-canvas');
const engine = new CanvasEngine(canvas);

// Size canvas to fill available space
function resizeCanvas() {
  const app = document.getElementById('app');
  const topBar = document.getElementById('top-toolbar');
  const bottomBar = document.getElementById('bottom-toolbar');
  const availHeight = app.clientHeight - topBar.offsetHeight - bottomBar.offsetHeight;
  const availWidth = app.clientWidth;

  // Use device pixel ratio for crisp rendering
  const dpr = window.devicePixelRatio || 1;
  canvas.style.width = availWidth + 'px';
  canvas.style.height = availHeight + 'px';
  engine.resize(availWidth * dpr, availHeight * dpr);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Clear to black
engine.clear();

// Initialize UI
const ui = new UI(engine);

// Wire up input
new InputHandler(canvas, {
  onStart(x, y, pressure) {
    engine.onPointerStart(x, y, pressure);
    ui.onPointerStart(x, y, pressure);
  },
  onMove(x, y, pressure) {
    engine.onPointerMove(x, y, pressure);
    ui.onPointerMove(x, y, pressure);
  },
  onEnd(x, y) {
    engine.onPointerEnd(x, y);
  }
});
