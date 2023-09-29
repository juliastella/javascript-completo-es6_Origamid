function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmanu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  function activeTav(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, index) => {
    // um loop para cada item da tab
    itemMenu.addEventListener('click', () => {
      // a cada item e adicionado um evento de click ->
      activeTab(index); // acionado a activeTab que vai acionar o item que esta clicando
    });
  });
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave(params) {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // forma alternativa
    // window.scrollTO({
    //   top: topo,
    //   behaviot: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade;
        if (isSectionVisible > 0) {
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      });
    }
    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}

initAnimacaoScroll();

