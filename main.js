let heart = document.getElementById("heart");
let postImg = document.getElementById("postImg");

let heart1 = "assets/heart.png";
let heart2 = "assets/heart-2.png";

// ----- LIKE ------

heart.addEventListener("click", () => {
  heart.src = "assets/heart-2.png";
});

// ---- DISLIKE -----
postImg.addEventListener("dblclick", () => {
  heart.src = heart1;
});
