window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    // Initialize Carousel
    bulmaCarousel.attach('#results-carousel', {
      slidesToScroll: 2,
      slidesToShow: 2,
      infinite: true,
      autoplay: false,
      navigation: true,
      gap: 60
    });

    // Initialize slider
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

    bulmaSlider.attach();
});
