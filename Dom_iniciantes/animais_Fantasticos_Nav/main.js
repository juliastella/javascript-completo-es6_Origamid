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
  
  if(accordionList.length) {
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