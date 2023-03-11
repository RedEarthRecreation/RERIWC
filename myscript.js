document.addEventListener("DOMContentLoaded", function() {


  const imagesFolder = "../flora/"; // specify the folder path here
const row = document.querySelector(".row");

fetch(imagesFolder)
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const links = doc.querySelectorAll("a");
    const images = [];
    links.forEach(link => {
      const href = link.getAttribute("href");
      if (href.match(/\.(jpe?g|png|gif)$/)) {
        images.push(imagesFolder + href);
      }
    });
    images.forEach(image => {
      const img = document.createElement("img");
      img.src = image;
      row.appendChild(img);
    });
  });
});