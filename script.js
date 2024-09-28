document.addEventListener("DOMContentLoaded", function () {
  // Function to handle intersection observer
  const observerOptions = {
    threshold: 0.1, // 10% of the element should be visible before the animation starts
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); // Add the "show" class to trigger the animation
      }
    });
  }, observerOptions);

  // Select all elements with the class 'fade-in'
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((el) => {
    observer.observe(el);
  });
});

// Smooth scroll for navbar links
document.querySelectorAll('.navbar-nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

//mobile toggle

document.getElementById('sidebarToggle').addEventListener('click', function() {
  document.getElementById('sidebar').classList.toggle('active');
});

document.getElementById('closeSidebar').addEventListener('click', function() {
  document.getElementById('sidebar').classList.remove('active');
});


document.addEventListener("DOMContentLoaded", function () {
  // Intersection observer for fade-in animation
  const observerOptions = {
    threshold: 0.1, // 10% of the element should be visible before the animation starts
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); // Add the "show" class to trigger the animation
      }
    });
  }, observerOptions);

  // Select all elements with the class 'fade-in'
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((el) => {
    observer.observe(el);
  });

  // Counter animation
  const counters = document.querySelectorAll('.counter');
  const speed = 200; // The lower the number, the faster the animation

  const countUp = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    // Lower increment value for slower count-up animation
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(() => countUp(counter), 50);
    } else {
      counter.innerText = target;
    }
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const countersInView = entry.target.querySelectorAll('.counter');
        countersInView.forEach((counter) => {
          countUp(counter);
        });
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  });

  // Select the counter section for counting animation
  const counterSection = document.querySelectorAll('.counter-section');
  counterSection.forEach((section) => {
    counterObserver.observe(section);
  });
});


// JavaScript for Hero Section

// Array of content with images and text
const heroContent = [
  {
    image: "image/woman1.jpg",  // Replace with the actual image path
    heading: "Hi, I am ",
    highlightedName: "Claudia",
    text: " This is my favorite work.",
    highlightColor: "#8d8d4a",  // Brown color
  },
  {
    image: "image/woman2.jpg",  // Replace with the actual image path
    heading: "Creative ",
    highlightedName: "UI/UX",
    text: " Designer & Developer",
    highlightColor: "#8d8d4a",  // Pink color
  }
];

let currentIndex = 0;

function changeHeroContent() {
  // Get elements to update
  const heroImage = document.querySelector('.hero-image');
  const heroHeading = document.querySelector('.hero .hero-heading');
  const heroName = document.querySelector('.hero .hero-heading .highlighted-name');

  // Update the image source
  heroImage.style.opacity = 0; // Fade out effect
  setTimeout(() => {
    heroImage.src = heroContent[currentIndex].image;
    heroImage.style.opacity = 1; // Fade in effect
  }, 1000);

  // Update the heading content with specific highlights
  heroHeading.innerHTML = `${heroContent[currentIndex].heading}<span class="highlight" style="color: ${heroContent[currentIndex].highlightColor};">${heroContent[currentIndex].highlightedName}</span>${heroContent[currentIndex].text}`;

  // Increment index for the next content, reset if it reaches the end
  currentIndex = (currentIndex + 1) % heroContent.length;
}

// Initial call to set the first content
changeHeroContent();

// Change content every 20 seconds
setInterval(changeHeroContent, 10000);






//skills section 
$(document).ready(function () {
function animateCircularProgress() {
    $('.circular-progress').each(function () {
        var $this = $(this);
        var progressValue = $this.data('percentage');
        var radius = 54; // 54 is the radius of the circle
        var circumference = 2 * Math.PI * radius;
        var offset = circumference - (progressValue / 100) * circumference;
        
        // Set initial stroke-dasharray and stroke-dashoffset
        $this.find('.bar').css({
            'stroke-dasharray': circumference,
            'stroke-dashoffset': circumference
        });

        // Animate the stroke-dashoffset to the desired value
        $this.find('.bar').animate({ 'stroke-dashoffset': offset }, {
            duration: 1500,
            step: function (now) {
                var currentPercentage = Math.round(100 - (now / circumference) * 100);
                $this.find('.percentage').text(currentPercentage + '%');
            }
        });
    });
}

// Check if the skills section is in view
function isElementInView(elem) {
    var elementTop = $(elem).offset().top;
    var elementBottom = elementTop + $(elem).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
}

// Trigger the animation when the section is in view
$(window).on('scroll', function () {
    if (isElementInView('#skills')) {
        animateCircularProgress();
        $(window).off('scroll'); // Remove scroll event after animation to avoid re-triggering
    }
});

// Trigger animation on page load if section is already in view
if (isElementInView('#skills')) {
    animateCircularProgress();
}
});

// Smooth scroll for navbar links
document.querySelectorAll('.navbar-nav a').forEach(anchor => {
anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth'
        });

        // Trigger animation if 'skills' section is clicked
        if (this.getAttribute('href') === '#skills') {
            setTimeout(function () {
                $(window).trigger('scroll'); // Trigger scroll event to animate skills section
            }, 500); // Delay to allow smooth scrolling to complete
        }
    }
});
});


//services section//

document.addEventListener('DOMContentLoaded', function () {
// Function to check if an element is in the viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add 'animate' class when element is in viewport
function animateOnScroll() {
    var elements = document.querySelectorAll('.services');
    elements.forEach(function (el) {
        if (isElementInViewport(el)) {
            el.classList.add('animate');
        } else {
            el.classList.remove('animate');
        }
    });
}

// Initial check
animateOnScroll();

// Add event listener for scroll and resize
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('resize', animateOnScroll);
});

//project section//
// Smooth Scroll for Project Links
document.querySelectorAll('.project a').forEach(anchor => {
anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
});

// Add Scroll Animation Class
const animatedElements = document.querySelectorAll('.ftco-animate');
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('fadeInUp');
        observer.unobserve(entry.target);
    }
});
}, {
threshold: 0.1
});

animatedElements.forEach(element => {
observer.observe(element);
});

// Animation Class for Visibility
document.addEventListener('DOMContentLoaded', function () {
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.ftco-animate');
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.8) {
            element.classList.add('visible');
        }
    });
});
});

//testimonial section//

//testimonial section//

var testiomnialData = [
  {
      avatar: "https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg",
      name: "Simonette Lindermann",
      review: "Mind-blowing discovery! changed my routine. Essential for everyone. A vise advice to all interested. Can't imagine without it!"
  },
  {
      avatar: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg",
      name: "Merilee Beal",
      review: "Unbelievable gem! Altered my life. A must-have now. Wholeheartedly advise it to everyone. An absolute game-changer"
  },
  {
      avatar: "https://img.freepik.com/free-photo/handsome-african-guy-with-stylish-haircut-taking-photo-digital-camera_171337-1345.jpg",
      name: "Suzi Lankester",
      review: "Phenomenal addition! Completely transformed my days. Can't go without it. Strongly endorse for all. A game-changer for sure!"
  },
  {
      avatar: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg",
      name: "Gaston Cunnow",
      review: "Amazing product! It changed my life. Can't live without it now. Highly recommended to everyone!"
  },
  {
      avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
      name: "Marys Lobb",
      review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
  },
  {
      avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
      name: "Marys Lobb",
      review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
  }, {
      avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
      name: "Marys Lobb",
      review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
  }]
var slideHolder = document.querySelector("#slideHolder")
for (let i of testiomnialData) slideHolder.innerHTML += `<div class="swiper-slide"> <div class="ImgHolder"><img src="${i.avatar}"></div><div class="ContentHolder"><h3>${i.name}</h3><p>${i.review}</p></div></div>`

const swiper = new Swiper('#craouselContainer', {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2.3,
  loop: true,
  spaceBetween: 30,
  effect: "coverflow",
  coverflowEffect: {
      rotate: 0,
      depth: 800,
      slideShadows: true,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  autoplay: { delay: 500 }
});
window.onresize = queryResizer
queryResizer()
function queryResizer() {
  if (window.innerWidth < 724) swiper.params.slidesPerView = 2
  if (window.innerWidth > 501) swiper.params.slidesPerView = 2
  if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3
  if (window.innerWidth < 501) swiper.params.slidesPerView = 1
  swiper.update()
}


