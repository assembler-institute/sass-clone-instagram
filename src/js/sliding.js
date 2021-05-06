const slides = $(".slider-img");

changeSlide(0, 1);

function changeSlide(prev, next) {
  window.setTimeout(
    () => {
      for (let index in slides) {
        if (!slides.hasOwnProperty(index)) continue;
        var slide = slides[index];
        if (parseInt(index) === prev) {
          slide.className = "slider-img hiding";
          continue;
        }
        if (parseInt(index) === next) {
          slide.className = "slider-img showing";
          continue;
        }
        slide.className = "slider-img";
      }

      next = next === slides.length - 1 ? 0 : next + 1;
      prev = next === 0 ? slides.length - 1 : next - 1;

      changeSlide(prev, next);
    },
    5000,
    prev,
    next
  );
}
