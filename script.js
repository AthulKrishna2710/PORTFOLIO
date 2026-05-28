const darkblue = document.getElementById('darkblue');
const lightblue = document.getElementById('lightblue');
const home = document.getElementById('home');

// Two independent orbits: left (dark) and right (light)
let angle1 = 0;
let angle2 = Math.PI; // start opposite
const speed = 0.0015; // radians per frame

let centerLeft = { x: 100, y: 200 };
let centerRight = { x: 300, y: 200 };
let orbitRadius = 30;

function updateCenters() {
  const rect = home.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  // choose left/right centers relative to the home section
  centerLeft.x = rect.left + rect.width * 0.12;
  // move dark blob upward by a larger responsive offset
  centerLeft.y = cy - rect.height * 0.25;
  centerRight.x = rect.left + rect.width * 0.88;
  // move light blob downward by a larger responsive offset
  centerRight.y = cy + rect.height * 0.25;

  orbitRadius = Math.min(rect.width, rect.height) * 0.12; // responsive radius
}

window.addEventListener('resize', updateCenters);
updateCenters();

function animate() {
  // dark (left) orbit
  const x1 = centerLeft.x + orbitRadius * Math.cos(angle1) - darkblue.offsetWidth / 2;
  const y1 = centerLeft.y + orbitRadius * Math.sin(angle1) - darkblue.offsetHeight / 2;
  darkblue.style.left = x1 + 'px';
  darkblue.style.top = y1 + 'px';

  // light (right) orbit
  const x2 = centerRight.x + orbitRadius * Math.cos(angle2) - lightblue.offsetWidth / 2;
  const y2 = centerRight.y + orbitRadius * Math.sin(angle2) - lightblue.offsetHeight / 2;
  lightblue.style.left = x2 + 'px';
  lightblue.style.top = y2 + 'px';

  angle1 += speed;
  angle2 += speed;
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);


