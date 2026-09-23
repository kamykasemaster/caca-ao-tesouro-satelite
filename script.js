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

const form = document.getElementById('interestForm');
const message = document.getElementById('formMessage');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const equipe = data.get('equipe');
  message.textContent = `Obrigado, ${equipe}! O formulário é uma demonstração da primeira versão. Conecte-o ao seu Google Forms para registrar os interessados.`;
  form.reset();
});
