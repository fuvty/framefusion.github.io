window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    // Initialize Carousel
    bulmaCarousel.attach('#results-carousel', {
      slidesToScroll: 1,
      slidesToShow: 1,
      infinite: true,
      autoplay: false,
      navigation: true,
    });

    // Initialize slider and other components
    preloadInterpolationImages();
    $('#interpolation-slider').on('input', function(event) {
      setInterpolationImage(this.value);
    });
    setInterpolationImage(0);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);
    bulmaSlider.attach();
});

// Slider logic for frame interpolation
document.addEventListener('DOMContentLoaded', function () {
  // Frame interpolation
  const slider = document.getElementById('interpolation-slider');
  const wrapper = document.getElementById('interpolation-image-wrapper');
  
  // Total number of frames (0-63 based on the files)
  const totalFrames = 63;
  
  function updateImage(value) {
    const frameNumber = Math.round((totalFrames * value) / 100);
    wrapper.innerHTML = `
      <div class="columns is-centered">
        <div class="column">
          <img src="./static/images/tom_jerry/frame_${frameNumber}.png" class="interpolation-image">
        </div>
        <div class="column">
          <img src="./static/images/tom_jerry_prune/frame_${frameNumber}.png" class="interpolation-image">
        </div>
      </div>
    `;
  }
  
  if (slider && wrapper) {
    // Set initial image
    updateImage(0);
    
    // Update image when slider moves
    slider.addEventListener('input', function(e) {
      updateImage(e.target.value);
    });
  }
});
