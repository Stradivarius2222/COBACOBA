function openCard() {
  document.querySelector('.envelope').style.display = 'none';
  document.getElementById('card').style.display = 'block';
  launchFireworks();
}

// Fireworks canvas
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function launchFireworks() {
  setInterval(() => {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: x,
        y: y,
        radius: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 360}, 100%, 60%)`,
        dx: Math.random() * 4 - 2,
        dy: Math.random() * 4 - 2,
        life: 100
      });
    }
  }, 500);
  animateFireworks();
}

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    p.life--;
    if (p.life <= 0) particles.splice(i, 1);
  });
  requestAnimationFrame(animateFireworks);
}
