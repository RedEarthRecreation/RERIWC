document.addEventListener("DOMContentLoaded", function() {
  const row = document.querySelector(".row");
  const floraFolder = "https://RedEarthRecreation.github.io/flora/";

  fetch(floraFolder)
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const images = doc.querySelectorAll("a[href]");
      for (let i = 0; i < images.length; i++) {
        const image = images[i].href;
        if (image.match(/\.(jpe?g|png|gif)$/)) {
          const img = document.createElement("img");
          img.src = floraFolder + image.split('/').pop();
          img.alt = image.split('/').pop();
          const col = document.createElement("div");
          col.classList.add("col-sm-4", "mb-4");
          col.appendChild(img);
          row.appendChild(col);
        }
      }
    });
});
