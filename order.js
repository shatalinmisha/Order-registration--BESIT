
const openBurgerEl = document.querySelector('.header__burger');
const menuNavEl = document.querySelector('.header');


openBurgerEl.onclick = function () {
    menuNavEl.classList.toggle('header--open');
}

const btnEl = document.querySelector('.btn');
const formEl = document.querySelector('.form-order');

btnEl.onclick = function () {
    formEl.classList.add('form-order--success');
}