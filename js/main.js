let dumbles = document.getElementById("dumbles");
let dumble = document.getElementById("dumble");
let aboutSection = document.querySelector(".dumble-container");
let animationPaused = false;

function animateParallax() {
    if (!animationPaused) {
        let value = window.scrollY;
        dumbles.style.transform = `translateX(${value * -0.5}px)`;
        dumble.style.transform = `translateX(${value * 0.5}px)`;
    }

    requestAnimationFrame(animateParallax);
}

animateParallax();

function pauseAnimation() {
    animationPaused = true;
}

function resumeAnimation() {
    animationPaused = false;
}

window.addEventListener("scroll", () => {
    // Check if the user has scrolled past the about section
    if (window.scrollY >= aboutSection.offsetTop) {
        pauseAnimation();
    } else {
        resumeAnimation();
    }
});


const slider = document.querySelector('.slider');
let slideIndex = 0;

function showSlide(index) {
  if (index >= slider.children.length) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = slider.children.length - 1;
  }

  const translateX = -slideIndex * 100; 
  slider.style.transform = `translateX(${translateX}%)`;

  const previousSlideIndex = slideIndex === 0 ? slider.children.length - 1 : slideIndex - 1;
  slider.children[previousSlideIndex].style.opacity = 0;

  slider.children[slideIndex].style.opacity = 1;
}

setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 5000);


    // Smooth scrolling for anchor links
    $("a[href^='#']").on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });


// form validation 
function validateAndShowAlert() {
  // Check if all form fields are filled
  var name = document.getElementById("validationDefault01").value;
  var email = document.getElementById("validationDefault02").value;
  var phone = document.getElementById("validationDefault03").value;


  if ( name  === "" || email  === "" || phone  === "") {
     
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please fill out all fields!',
      });
  } else {
    
      Swal.fire({
          icon: 'success',
          title:' Your Form Submitted Successfully',
          text: '',
      });
  }
}


 


