// variables to store HTML elements
let placeholder = document.querySelector(".placeholder");
let buttonOne = document.querySelector(".button-one");
let buttonTwo = document.querySelector(".button-two");


// click event for buttonOne
buttonOne.addEventListener('click', function() {

    // 1. Select the placeholder and update the src.
    // - The image address should be a picture of a place you want to travel to.
    // - Use Google Search, find a photo you want, right-click, and copy the image address.
  placeholder.src = "https://www.state.gov/wp-content/uploads/2018/11/Germany-2109x1406.jpg";



});


// click event for buttonTwo
buttonTwo.addEventListener('click', function() {

    // 2. Select the placeholder and update the src.
    // - The image address should be a picture that represents your mood.
    // - Use Google Search, find a photo you want, right-click, and copy the image address.
  placeholder.src = "https://t4.ftcdn.net/jpg/01/36/70/67/360_F_136706734_KWhNBhLvY5XTlZVocpxFQK1FfKNOYbMj.jpg";


    

});