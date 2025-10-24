document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('greetBtn').addEventListener('click', () => {
  const now = new Date();
  const hours = now.getHours();
  const part = hours < 12 ? 'morning' : hours < 18 ? 'afternoon' : 'evening';
  document.getElementById('greetOutput').textContent = `Good ${part}! Thanks for visiting my site.`;
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  document.getElementById('contactResult').textContent = `Thanks, ${name}! This is a demo form — no message was sent.`;
  e.target.reset();
});
