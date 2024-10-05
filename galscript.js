document.addEventListener('DOMContentLoaded', (event) => {
    let slideIndex = 0;
    autoShowSlides();

    function showSlides(n) {
        let slides = document.querySelectorAll(".mySlides");
        if (n >= slides.length) { slideIndex = 0 }
        if (n < 0) { slideIndex = slides.length - 1 }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
    }

    function autoShowSlides() {
        let slides = document.querySelectorAll(".mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex >= slides.length) { slideIndex = 0 }
        slides[slideIndex].style.display = "block";
        setTimeout(autoShowSlides, 3000); // Change image every 3 seconds
    }

    /*Modal Image Gallery*/
    function openModal(index) {
        document.getElementById("myModal").style.display = "block";
        showSlide(index);
    }

    function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }

    function showSlide(index) {
        let slides = document.querySelectorAll(".gallery img");
        let modalImg = document.querySelector(".modal-content img");
        modalImg.src = slides[index - 1].src;
    }

    window.openModal = openModal;
    window.closeModal = closeModal;

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    // Slideshow next/previous controls
    function plusSlides(n) {
        slideIndex += n;
        showSlides(slideIndex);
    }

    function minusSlides(n) {
        slideIndex -= n;
        showSlides(slideIndex);
    }

    window.plusSlides = plusSlides;
    window.minusSlides = minusSlides;
});
