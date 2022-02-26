var pages = new Array('halaman1', 'halaman2');

function klikMenu() {
  document.getElementsByClassName('newpage')[0].classList.toggle('buka_menu');
}

function PindahKeHalaman(page) {
  var newpage = document.getElementsByClassName('newpage')[0];
  var sections = document.getElementsByClassName('dalemnya_halaman');
  for (i = 0; i < sections.length; i++) {
    sections[i].classList.remove('before', 'after');
    if (i > page) {
      sections[i].classList.add('after');
    }
  }
  newpage.classList.remove('buka_menu', 'page-halaman1');
  newpage.classList.add('page-' + pages[page]);
}
