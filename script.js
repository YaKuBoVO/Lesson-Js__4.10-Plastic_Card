"use strict"
const cardNumber = document.querySelector('.cardNumber-focus');
const cardLeft =  document.querySelector('.card-content__left');
const cardRight = document.querySelector('.card-content__right');

const cardNumberInput = document.querySelector('#cardNumber');
const cardNameInput = document.querySelector('#cardName');
const cardMonth = document.querySelector('#cardMonth');
const cardItemLabel = document.querySelector('.card-item');
const cardFullName = document.querySelector('.card-item__name');

const selectMonth = document.querySelector(".month-select");
const plasticDate = document.querySelector('.card-item__dateItem');
const selectYear = document.querySelector('.select-year');
const datePlastic = document.querySelector('.dateJs');
const cardInputCvv = document.querySelector('.cardCvv');
const cardBox = document.querySelector("#cardCvv");

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


/*document.querySelector('.cardCvv').onmouseleave = () => {
   document.querySelector('.plastic-card').style.transform = "perspective(1000px) rotateY(-180deg)";
   document.querySelector(".back").style.transform = "perspective(1000px) rotateY(0deg)";
};

document.querySelector(".cardCvv").onmouseleave = () => {
    document.querySelector('.plastic-card').style.transform = "perspective(1000px) rotateY(0deg)";
   document.querySelector(".back").style.transform = "perspective(1000px) rotateY(180deg)";
};*/

//document.querySelector("#cardCvv").oninput = () => {
//   document.querySelector(".boxCVV").innerHTML = 
//   document.querySelector("#cardCvv").value;
//}





/*cardItemLabel.addEventListener("keyup", (e) => {
   if(!e.target.value) {
      cardItemLabel.innerHTML = '****  ****  ****  ****';
   }  else {
      const valuesOfInput = e.target.value.replaceAll("", "");

      if (e.target.value.length > 14) {
         e.target.value = valuesOfInput.replace(
            /(\d{4})(\d{4})(\d{4})(\d{0,4})/,
            "$1 $2 $3 $4"
         );
         cardItemLabel.innerHTML = valuesOfInput.replace(
             /(\d{4})(\d{4})(\d{4})(\d{0,4})/,
            "$1 $2 $3 $4"
         );
      }  else if (e.target.value.length > 9) {
         e.target.value = valuesOfInput.replace(
            /(\d{4})(\d{4})(\d{0,4})/,
            "$1 $2 $3"
         );
         cardItemLabel.innerHTML = valuesOfInput.replace(
             /(\d{4})(\d{4})(\d{0,4})/,
            "$1 $2 $3"
         );
      }  else if (e.target.value.length > 4) {
         e.target.value = valuesOfInput.replace(
             /(\d{4})(\d{0,4})/,
            "$1 $2"
         );
         cardItemLabel.innerHTML = valuesOfInput.replace(
             /(\d{4})(\d{0,4})/,
            "$1 $2"
         );
      }  else {
         cardItemLabel.innerHTML = valuesOfInput;
      }
   }
});*/



document.querySelector('#cardNumber').oninput = () => {
   document.querySelector('.card-item').innerHTML = document.querySelector('#cardNumber').value;
};


document.querySelector('#cardName').oninput = () => {
   document.querySelector('.card-item__name').innerHTML = document.querySelector('#cardName').value;
};


document.querySelector(".month-select").oninput = () => {
   document.querySelector('.card-item__dateItem').innerHTML = document.querySelector(".month-select").value;
};

document.querySelector('.select-year').oninput = () => {
   document.querySelector('.dateJs').innerHTML = document.querySelector('.select-year').value;
}