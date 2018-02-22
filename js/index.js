var mySwiper = new Swiper(".swiper-container", {
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  speed: 600,
})

$(document).ready(function() {
  $(".ui.accordion").accordion();
});


$(".title").on("click", function() {
  $(".slider").toggleClass("clicked");
});

$('.hamburger-sidebar').on("click", function() {
  $('.ui.sidebar').sidebar('toggle');
})


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#top-bar').outerHeight();

$(window).scroll(function(event) {
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $('#top-bar').removeClass('nav-down').addClass('nav-up');
    $('#bar-logo').removeClass('logo-down').addClass('logo-up');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $('#top-bar').removeClass('nav-up').addClass('nav-down')
      $('#bar-logo').removeClass('logo-up').addClass('logo-down')
    }
  }

  lastScrollTop = st;
}

function showImages(el) {
  var windowHeight = jQuery(window).height();
  $(el).each(function() {
    var thisPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (topOfWindow + windowHeight - 200 > thisPos) {
      $(this).addClass("fadeIn");
    }
  });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function() {
  showImages('.fadein-image');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
  showImages('.fadein-image');
});