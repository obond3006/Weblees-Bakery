(function() {
    const burgerBtn = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.burger-menu');

    function openBurger () {
        burgerBtn.classList.toggle('active');
        burgerMenu.classList.toggle('active');       
    }

    burgerBtn.onclick = openBurger;
})()