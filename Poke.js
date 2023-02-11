document.getElementById("card").addEventListener("click", function() {
    var card = document.getElementById("card");
    if (card.style.transform === "rotateY(0deg)") {
      card.style.transform = "rotateY(180deg)";
    } else {
      card.style.transform = "rotateY(0deg)";
    }
  });
  