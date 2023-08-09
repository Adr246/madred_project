const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
});

//parallax test
const parallax_el = document.querySelector('.parallax');
let xValue=0,
    yValue=0;
window.addEventListener("mousemove",(e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - widnow.innerHeight / 2;

    parallax_el.forEach((el) =>  {
        el.style.transform = `translateX(calc(-50% + ${-xValue})) translateY(calc(-50% + ${yValue}))`;
    });

});
