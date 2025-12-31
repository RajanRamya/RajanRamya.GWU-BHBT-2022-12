// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  icon.classList.remove('fa-moon');
  icon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    localStorage.setItem('theme', 'light');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

// Navigation toggle for mobile
document.getElementById('nav-toggle').addEventListener('click', () => {
  document.getElementById('nav').classList.toggle('open');
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form submission (simple alert for demo; replace with actual handling like Formspree)
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  alert('Thanks for your message! I\'ll get back to you soon.');
  form.reset();
});

// Typing effect for tagline
const tagline = document.getElementById('tagline');
const text = tagline.textContent;
tagline.textContent = '';
let i = 0;
function typeWriter() {
  if (i < text.length) {
    tagline.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
setTimeout(typeWriter, 1000); // Start after slide-in

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Creative function: Random color change on card hover (subtle)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    const colors = ['#9CAF88', '#A8DADC', '#7A9B6A', '#CCCCCC'];
    card.style.borderLeft = `5px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.borderLeft = 'none';
  });
});

// Animate skill progress bars on scroll
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progress = entry.target.querySelector('.progress');
      const width = progress.getAttribute('data-width');
      progress.style.width = width + '%';
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-item').forEach(item => skillObserver.observe(item));

// Parallax effect for hero
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Add floating class to profile pic
document.querySelector('.profile-pic').classList.add('floating');

// Creative particle effect (simple)
function createParticle() {
  const particle = document.createElement('div');
  particle.style.position = 'absolute';
  particle.style.width = '4px';
  particle.style.height = '4px';
  particle.style.background = 'var(--accent)';
  particle.style.borderRadius = '50%';
  particle.style.top = Math.random() * 100 + 'vh';
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.animation = 'float 5s ease-in-out infinite';
  document.body.appendChild(particle);
  setTimeout(() => particle.remove(), 5000);
}

setInterval(createParticle, 2000);