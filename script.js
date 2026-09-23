// ===== CONFIGURAÇÕES DO EVENTO =====
// Troque pela data/hora oficiais.
// Exemplo: "2026-12-12T08:00:00-03:00"
const EVENT_DATE = "2026-12-12T08:00:00-03:00";

// Quando criar o Google Forms, cole o link aqui.
// Exemplo: "https://forms.gle/SEU-LINK"
const REGISTRATION_URL = "";

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const registrationButton = document.getElementById('registrationButton');
if (registrationButton && REGISTRATION_URL) {
  registrationButton.href = REGISTRATION_URL;
  registrationButton.textContent = 'INSCREVA SUA EQUIPE';
}

function updateCountdown() {
  const target = new Date(EVENT_DATE).getTime();
  const distance = target - Date.now();
  if (distance <= 0) return;

  document.getElementById('days').textContent = String(Math.floor(distance / 86400000)).padStart(2,'0');
  document.getElementById('hours').textContent = String(Math.floor((distance % 86400000) / 3600000)).padStart(2,'0');
  document.getElementById('minutes').textContent = String(Math.floor((distance % 3600000) / 60000)).padStart(2,'0');
  document.getElementById('seconds').textContent = String(Math.floor((distance % 60000) / 1000)).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown, 1000);
