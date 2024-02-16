document.addEventListener('DOMContentLoaded', function() {

   for (const menubtn of document.querySelectorAll('.menu-toggle')) {
        menubtn.addEventListener('click', function() {
            menubtn.classList.toggle('menu-toggle--active');
           // this.classList.toggle('menu-toggle--active');
           // document.querySelector('.navbar').classList.toggle('active');
        });
   }
});