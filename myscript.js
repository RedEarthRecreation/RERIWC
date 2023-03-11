// Get a reference to the .row div
const row = document.querySelector('.row');

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Set up a callback function to handle the response
xhr.onload = function() {
  // Parse the JSON response
  const files = JSON.parse(this.responseText);

  // Loop through the list of files
  files.forEach(function(file) {
    // Check if the file is an image
    if (file.type.startsWith('image/')) {
      // Create a new img element
      const img = document.createElement('img');

      // Set the src attribute to the file path
      img.src = './flora/' + file.name;

      // Add the img element to the .row div
      row.appendChild(img);
    }
  });
};

// Open the request and send it
xhr.open('GET', './flora/');
xhr.send();
