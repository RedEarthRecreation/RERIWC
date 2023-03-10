document.addEventListener("DOMContentLoaded", function() {


  function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";

    // Scroll the page to center the expanded image
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    var container = expandImg.parentElement;
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;
    var containerTop = container.getBoundingClientRect().top + window.pageYOffset;
    var containerLeft = container.getBoundingClientRect().left + window.pageXOffset;
    var targetLeft = containerLeft - (viewportWidth - containerWidth) / 2;
    var targetTop = containerTop - (viewportHeight - containerHeight) / 2;
    window.scrollTo(targetLeft, targetTop);
  }

  function closeExpandedImg() {
    // Hide the container element (hidden with CSS)
    var expandImgContainer = document.querySelector(".container");
    expandImgContainer.style.display = "none";

    // Scroll the page to center .Info3
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    var info3 = document.querySelector(".Info3");
    var info3Width = info3.offsetWidth;
    var info3Height = info3.offsetHeight;
    var info3Top = info3.getBoundingClientRect().top + window.pageYOffset;
    var info3Left = info3.getBoundingClientRect().left + window.pageXOffset;
    var targetLeft = info3Left - (viewportWidth - info3Width) / 2;
    var targetTop = info3Top - (viewportHeight - info3Height) / 2;
    window.scrollTo(targetLeft, targetTop);
  }
  function updateProgressBar() {
    var container = document.querySelector('.row');
    var scrollLeft = container.scrollLeft;
    var scrollWidth = container.scrollWidth - container.clientWidth;
    var scrolled = (scrollLeft / scrollWidth) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  const imagesFolder = "flora/"; // specify the folder path here
    const row = document.querySelector(".row");

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(this.responseText, "text/html");
        const images = htmlDoc.querySelectorAll("a[href$='.jpg'], a[href$='.png'], a[href$='.gif']");

        images.forEach(img => {
          const div = document.createElement("div");
          div.className = "column"; // add the new CSS class

          const image = document.createElement("img");
          image.src = imagesFolder + img.getAttribute("href").replace(/^\/+/, '').replace(/^flora\/+/, '');
          image.alt = img.textContent;
          image.onclick = function() { myFunction(this); };

          div.appendChild(image);
          row.appendChild(div);
        });
      }
    };
    xhr.open("GET", imagesFolder);
    xhr.send();
});