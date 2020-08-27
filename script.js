//When user clicks on the burger icon, the mobile menu opens
let burgerIcon = document.querySelector('.burger_icon');
let mobileMenu = document.querySelector('.mobile_menu');
let exitIcon = document.querySelector('.exit_icon');
burgerIcon.addEventListener('click', function() {
    mobileMenu.style.display = "block";
    burgerIcon.style.display = "none";
});
//clicking the X closes the mobile menu
exitIcon.addEventListener('click', function() {
    mobileMenu.style.display = "none";
    burgerIcon.style.display = "block";
});

//When user clicks on a link in mobile menu, the menu closes
let links = document.querySelectorAll('.nav_link_mobile');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        mobileMenu.style.display = "none";
        burgerIcon.style.display = "block";
    });
}
