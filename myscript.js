window.addEventListener('load', function() {
  // Get the row element
  var row = document.querySelector('.row');

  // Get the images from the flora folder
  fetch('https://RedEarthRecreation.github.io/flora/')
    .then(response => response.text())
    .then(html => {
      // Parse the HTML response and get all the <a> elements
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');
      var links = doc.querySelectorAll('a');

      // Loop through the <a> elements and get the image URLs
      for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var href = link.getAttribute('href');
        if (href.endsWith('.jpg') || href.endsWith('.jpeg') || href.endsWith('.png') || href.endsWith('.gif')) {
          // Create an <img> element and set its src attribute
          var img = document.createElement('img');
          img.src = 'https://RedEarthRecreation.github.io/flora/' + href;

          // Create a <div> element with class="col-lg-4 col-md-6 mb-4" and append the <img> element to it
          var div = document.createElement('div');
          div.classList.add('col-lg-4', 'col-md-6', 'mb-4');
          div.appendChild(img);

          // Append the <div> element to the row
          row.appendChild(div);
        }
      }
    });
});
