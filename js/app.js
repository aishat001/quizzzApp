var changeColor, colors, defaultColor;

 var title = document.querySelector('#white');
 var reg = document.querySelector('.white');

 const quizContainer = document.getElementById('quiz');
 const resultsContainer = document.getElementById('results');
 const submitButton = document.getElementById('submit');


 document.querySelector('.dots').addEventListener('click', function () {
    var color = event.target.getAttribute('data-color');
    title.style.backgroundColor = color;
   reg.style.backgroundColor = color;
   }, false);

//SHOW RESULT ***********************************************
//**************************************************8
   function myFunction() {
      var element = document.querySelector('.hide');
      if (element.style.display === "flex") {
          element.style.display = "none";
      } else {
          element.style.display = "flex"
      }
  }