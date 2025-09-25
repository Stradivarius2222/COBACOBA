// script.js

// Scroll animation on section load
const sections = document.querySelectorAll('.section');
const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      const texts = entry.target.querySelectorAll('.animate-text');
      texts.forEach((el, i) => {
        el.style.transitionDelay = `${i * 150}ms`;
        el.classList.add('text-visible');
      });
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Dark mode toggle
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn?.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  if (document.body.classList.contains('light-mode')) {
    toggleBtn.textContent = 'Dark Mode';
  } else {
    toggleBtn.textContent = 'Light Mode';
  }
});
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

let w, h, particles = [];

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

function createParticles() {
  particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 2 + 1,
      vx: Math.random() - 0.5,
      vy: Math.random() - 0.5
    });
  }
}
createParticles();

function drawParticles() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(164, 162, 164, 0.39)';
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();


  
