  const flierImages = [
    "womenInBiz.jpg",
    "laptop.jpg",
    "girlTyping.jpg"
  ];

  let flierIndex = 0;
  const flierImg = document.getElementById("flier-image");
  const leftArrow = document.querySelector(".flier-arrow.left");
  const rightArrow = document.querySelector(".flier-arrow.right");

  function showFlier(index) {
    const image = document.getElementById("flier-image");
    flierIndex = (index + flierImages.length) % flierImages.length;
    image.src = flierImages[flierIndex];
  }
  
  leftArrow.addEventListener("click", () => showFlier(flierIndex - 1));
  rightArrow.addEventListener("click", () => showFlier(flierIndex + 1));

  function changeSlide(direction) {
    showFlier(flierIndex + direction);
  }

  // Auto-change image every 1 second
  //setInterval(() => {
	  //changeSlide(1.5);
 //}, 1000);
  // Optional: auto-play every 3s
  // setInterval(() => changeSlide(1), 3000);
