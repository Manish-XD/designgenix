document.getElementById("next1").addEventListener("click", function () {
    document.querySelector(".card_1").style.display = "block";
    document.querySelector(".card_2").style.display = "none";
    document.querySelector(".card_3").style.display = "none";
  });
document.getElementById("next2").addEventListener("click", function () {
    document.querySelector(".card_1").style.display = "none";
    document.querySelector(".card_2").style.display = "none";
    document.querySelector(".card_3").style.display = "block";
  });