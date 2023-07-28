
  document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const asideBar = document.getElementById('menu');

    menuBtn.addEventListener('click', function() {
      asideBar.classList.toggle('active');
    });
  });

   fetch('nav.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('menu').innerHTML = data;
      });