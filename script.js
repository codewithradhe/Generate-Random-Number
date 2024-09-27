let GenerateButton = document.getElementById("Generatebtn");
let inputBox = document.getElementById("inputBox");

GenerateButton.addEventListener("click", function () {
  let ranNumber= Math.random()*1000000
  ranNumber = Math.floor(ranNumber)
  console.log(ranNumber);
  inputBox.value =ranNumber
  
  
});
