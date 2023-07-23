"use strict"
const cardNumber = document.querySelector('.cardNumber-focus');
const cardLeft =  document.querySelector('.card-content__left');
const cardRight = document.querySelector('.card-content__right');

const cardNumberInput = document.querySelector('#cardNumber');
const cardNameInput =document.querySelector('#cardName');
const cardMonth = document.querySelector('#cardMonth');
const cardItemLabel = document.querySelector('.card-item');
const cardFullName = document.querySelector('.card-item__name');


cardNumberInput.addEventListener('click', (e) => {
   cardNumber.classList.add("active");
   cardLeft.classList.remove('active');
   cardRight.classList.remove("active");
});
cardNameInput.addEventListener('click', (e) => {
   cardLeft.classList.add('active');
   cardNumber.classList.remove('active');
   cardRight.classList.remove("active");
});
cardMonth.addEventListener('click', (e) => {
    cardRight.classList.add("active");
   cardNumber.classList.remove("active");
   cardLeft.classList.remove('active');
});


cardNumber.addEventListener('click', (e) => {
   cardNumber.classList.add("active");
   cardLeft.classList.remove('active');
   cardRight.classList.remove("active");
});

cardLeft.addEventListener('click', (e) => {
   cardLeft.classList.add('active');
   cardNumber.classList.remove('active');
   cardRight.classList.remove("active");
});

cardRight.addEventListener('click', (e) => {
   cardRight.classList.add("active");
   cardNumber.classList.remove("active");
   cardLeft.classList.remove('active');
});


cardItemLabel.innerHTML = '#### #### #### ####';

cardNumberInput.value == cardItemLabel.innerHTML;



   let val = cardNameInput.value;
   cardFullName.innerHTML = val;

   
   //cardNameInput.value = "";

//showText();