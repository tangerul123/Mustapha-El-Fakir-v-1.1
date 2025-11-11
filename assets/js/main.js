"use strict";
/*--
    sticky  menu js 
-----------------------------------*/
let header = document.querySelector('.header-area');
let scrollTimeout;

window.addEventListener('scroll', function() {
  clearTimeout(scrollTimeout); // আগের timer clear
  
  scrollTimeout = setTimeout(() => {
    if (window.scrollY > 100) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }, 200); // scroll stop howar 0.2s pore sticky hobe
});

/*--
    back to top js 
-----------------------------------*/
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

/*--
    Hero Slider 
-----------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    let heroSlider = new Swiper(".hero-banner .swiper", {
        // direction: "vertical", // Uncomment if you want vertical slide
        autoplay: {
            delay: 5000, // 5 seconds
            disableOnInteraction: false,
        },
        pagination: {
            el: ".hero-banner .swiper-pagination",
            clickable: true,
        },
    });
});

/*--
    Counter Up js
-----------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const speed = 200; // speed control

    const startCounting = (counter) => {
        const target = +counter.getAttribute("data-target");
        const updateCount = () => {
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    };

    const options = {
        threshold: 0.6, // 60% visible holei count shuru
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                observer.unobserve(entry.target); // once count up, no repeat
            }
        });
    }, options);

    counters.forEach((counter) => {
        observer.observe(counter);
    });
});

// lang js 

function applyLanguage(lang) {
  // Loop through all elements with data-i18n attributes
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      // Use innerHTML to support <br> and HTML tags
      el.innerHTML = translations[lang][key];
    }
  });

  // Add active class to selected language button
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Save selected language in localStorage
  localStorage.setItem("site_lang", lang);
}

// ================================
// Initialize on page load
// ================================
document.addEventListener("DOMContentLoaded", () => {
  // Load saved language or default to English
  const savedLang = localStorage.getItem("site_lang") || "en";
  applyLanguage(savedLang);

  // Add click events to buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      applyLanguage(lang);
    });
  });
});


// swiper js for hero section
// home-3 video slider
var swiper = new Swiper(".hero-slider-active", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".video-btn-next",
        prevEl: ".video-btn-prev",
    },
});
// home-3 testimonial slider
var swiper = new Swiper(".testimonial-active-3", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        577: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 1,
        },
        992: {
        slidesPerView: 2,
        },
        1200: {
        slidesPerView: 2,
        },
        1600: {
        slidesPerView: 2,
        },
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".testimonial-btn-next",
        prevEl: ".testimonial-btn-prev",
    },
});

// Properties-thum-slider
var swiper = new Swiper(".Properties-thum-active", {
    slidesPerView: 1,
    spaceBetween: 0,
    // effect: "fade",
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".Properties-btn-next",
        prevEl: ".Properties-prev",
    },
});

// // email js

// document.getElementById('contact-form').addEventListener('submit',function (e){
//     e.preventDefault();
//     console.log(this);
//     emailjs.sendForm('service_iyurtll','template_k0t0qjk', this)
//     .then (function(result){
//         alert('We’ve received your message — we’ll get back to you soon!')
//         console.log(result.text);
//         document.getElementById('contact-form').reset()
        
//     },function(error){
//         alert('Something went wrong! Please try again later.')
//     }
// )

// });

