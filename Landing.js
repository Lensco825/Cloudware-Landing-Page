var toggle = document.getElementById('menu-toggle');
var menu = document.getElementById('navbar');
var contents = document.querySelectorAll('menuContent');

toggle.addEventListener('click', function() {
    menu.classList.toggle('navbar');
    contents.classList.toggle('center');
})