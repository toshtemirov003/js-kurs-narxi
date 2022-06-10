var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elSelect = document.querySelector(".js-select");
var elHeading = document.querySelector(".js-heading");
var usd = 11000;
var euro = 11739;
var rubl = 189;

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var elInputText = elInput.value;
  var elSelectText = elSelect.value;
  

//   var result = elInputText * elSelectText;

    // elHeading.textContent = `${result}`

     if (elSelectText == "USD" ) {
        elHeading.textContent = elInputText * usd
     }else if(elSelectText == "RUBL"){
         elHeading.textContent = elInputText * rubl
     }else if(elSelectText == "EURO"){
        elHeading.textContent = elInputText * euro
     }else{
         elHeading.textContent = "Topilmadi"
     }
});
