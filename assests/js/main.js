'use strict'

/* <!-- ==========================
    |   variables for navbar menu toggle |
    ================== --> */

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');

/* <!-- ==========================
    |   variables for navbar search toggle |
    ================== --> */

const navbarForm = document.querySelector('.navbar-form');
const navbarFormCloseBtn = document.querySelector('.navbar-form-close');
const navbarSearchBtn = document.querySelector('.navbar-search-btn');

/* <!-- ==========================
    |   variables for navbar search toggle |
    ================== --> */

function navIsActive(){
    header.classList.toggle('active');
    nav.classList.toggle('active');
    navbarMenuBtn.classList.toggle('active');
}

navbarMenuBtn.addEventListener('click', navIsActive);

/* <!-- ==========================
    |   navbaqr  search toggle function |
    ================== --> */

const searchBarIsActive = () => navbarForm.classList.toggle('active');

navbarSearchBtn.addEventListener('click', searchBarIsActive);
navbarFormCloseBtn.addEventListener('click', searchBarIsActive);
