


lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgThumbnail],
    licenseKey: 'your_license_key',
    speed: 500,
    // ... other settings
});
const darkMode = document.querySelector(".color-change");
console.log(darkMode);
const body = document.querySelector("body");
const moon = darkMode.children;
console.log(moon[0]);
darkMode.addEventListener("click", function () {
  if (moon[0].className == "fa-moon") {
    body.classList.remove("dark");
    moon[0].classList.remove("fa-moon");
    moon[0].classList.add("fa-sun");
  } else {
    body.classList.add("dark");
    moon[0].classList.add("fa-moon");
    moon[0].classList.remove("fa-sun");
  }
});