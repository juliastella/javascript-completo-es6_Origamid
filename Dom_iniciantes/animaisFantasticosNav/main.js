const tabMenu = document.querySelectorAll(".js-tabmanu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");


function activeTav(index) {
  tabContent.forEach((section) => {
    section.classList.remove('ativo');
  });
  tabContent[index].classList.add('ativo');
}

tabMenu.forEach((itemMenu, index) => { // um loop para cada item da tab
  itemMenu.addEventListener('click', () => { // a cada item e adicionado um evento de click ->
    activeTab(index); // acionado a activeTab que vai acionar o item que esta clicando
  });
});
