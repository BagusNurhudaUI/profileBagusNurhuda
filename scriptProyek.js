console.log("berhasil masuk ke script");

const menuToggle = document.querySelector('.contact-me');

menuToggle.addEventListener('click', function(){
open('https://api.whatsapp.com/send/?phone=6287888254504&text&app_absent=0')
console.log("toggle di click");

});

const toggleMenu = document.querySelector('.menu-toggle')
const menuList = document.querySelector('.nav-menu')

toggleMenu.addEventListener('click', function(){
    menuList.classList.toggle('active');
})

const listNav = document.querySelectorAll(".nav-links a")
console.log(listNav);

for (let i = 0; i < listNav.length; i++) {
    listNav[i].addEventListener('click', function(){
        console.log("nav-links ditekan");
        menuList.classList.toggle('active');
    });
}
