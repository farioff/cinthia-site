(() => {
  const menu = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  const closeMenu = () => {
    menu.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menu.focus();
    }
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
  const links = window.PORTFOLIO_LINKS || {};
  document.querySelectorAll('[data-link]').forEach(link => {
    const destination = links[link.dataset.link];
    if (destination && /^(https?:\/\/|mailto:|tel:)/i.test(destination)) {
      link.href = destination;
      if (/^https?:\/\//i.test(destination)) link.rel = 'noopener noreferrer';
    } else {
      link.addEventListener('click', () => {
        const status = document.querySelector('#link-status');
        status.hidden = false;
        status.textContent = 'Este link ainda não foi disponibilizado. Em breve, mais informações por aqui.';
      });
    }
  });
})();
