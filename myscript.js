const imageFolder = "./flora/";

// Get list of image files in the folder
fetch(imageFolder)
  .then(response => response.text())
  .then(data => {
    // Extract the list of image file names from the HTML response
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(data, "text/html");
    const imageFiles = Array.from(htmlDoc.querySelectorAll("a")).map(a => a.href);

    // Create and append image elements to the .row div
    const rowDiv = document.querySelector(".row");
    imageFiles.forEach(imageFile => {
      if (imageFile.endsWith(".jpg") || imageFile.endsWith(".jpeg") || imageFile.endsWith(".png")) {
        const imageElement = document.createElement("img");
        imageElement.src = imageFolder + imageFile;
        imageElement.alt = imageFile;
        rowDiv.appendChild(imageElement);
      }
    });
  })
  .catch(error => {
    console.error(error);
  });
