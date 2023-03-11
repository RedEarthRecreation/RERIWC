const imageFolder = "./flora/";

// Get list of image files in the folder
fetch(imageFolder)
  .then(response => response.text())
  .then(data => {
    // Extract the list of image file names from the HTML response
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(data, "text/html");
    const imageFiles = Array.from(htmlDoc.querySelectorAll("a"))
      .map(a => a.href.replace(window.location.href, ""))
      .filter(file => /\.(jpe?g|png)$/i.test(file));

    // Create and append image elements to the .row div
    const rowDiv = document.querySelector(".row");
    imageFiles.forEach(imageFile => {
      const imageElement = document.createElement("img");
      imageElement.src = imageFolder + imageFile;
      imageElement.alt = imageFile;
      rowDiv.appendChild(imageElement);
    });
  })
  .catch(error => {
    console.error(error);
  });
