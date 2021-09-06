document.addEventListener("click", (e) => {
  if (e.target.matches("[data-heart]")) {
    console.log("heart");
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches("[arrow-right]")) {
    console.log("right");
  }
});

document.addEventListener("DOMContentLoaded", (e) => {
  let index = 0;
  const images = document.querySelector(".image-login").children;
  images[index].style.opacity = "1";
  images[index].style.visibility = "visible";

  setInterval(() => {
    if (index < images.length - 1) {
      index++;
    } else {
      transitionOpacity0(images);
      index = 0;
    }
    
    images[index].style.transition = "opacity 3s";
    images[index].style.visibility = "visible";
    images[index].style.opacity = "1";

    if (index > 0) {
      /* transitionOpacity0(); */
    }
  }, 3000);
});

function transitionOpacity0(images) {
  for (let index = 0; index < images.length; index++) {
    if (index == 0) {
      images[index].style.transition = "opacity 3s";
      images[index].style.visibility = "visible";
      images[index].style.opacity = "1";
    }
    images[index].style.visibility = "hidden";
    images[index].style.opacity = "0";
  }
}
