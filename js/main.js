document.addEventListener("DOMContentLoaded", function () {
  // Set current year in footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Theme Toggle Functionality
  const themeSwitch = document.getElementById("theme-switch");
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
      themeSwitch.checked = true;
    }
  }

  themeSwitch.addEventListener("change", function () {
    if (this.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });

  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector("nav ul");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // Header scroll effect
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Back to top button
  const backToTopBtn = document.querySelector(".back-to-top");
  window.addEventListener("scroll", function () {
    backToTopBtn.classList.toggle("active", window.scrollY > 300);
  });

  // Text rotation effect
  class TextRotator {
    constructor(element, words, options = {}) {
      this.element = element;
      this.words = words;
      this.options = {
        speed: 100,
        deleteSpeed: 50,
        delay: 2000,
        ...options,
      };
      this.currentWordIndex = 0;
      this.currentCharIndex = 0;
      this.isDeleting = false;
      this.text = "";
      this.animate();
    }

    animate() {
      const currentWord = this.words[this.currentWordIndex];

      if (this.isDeleting) {
        this.text = currentWord.substring(0, this.text.length - 1);
      } else {
        this.text = currentWord.substring(0, this.text.length + 1);
      }

      this.element.textContent = this.text;

      let speed = this.isDeleting
        ? this.options.deleteSpeed
        : this.options.speed;

      if (!this.isDeleting && this.text === currentWord) {
        speed = this.options.delay;
        this.isDeleting = true;
      } else if (this.isDeleting && this.text === "") {
        this.isDeleting = false;
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
        speed = 500;
      }

      setTimeout(() => this.animate(), speed);
    }
  }

  // Initialize the text rotator
  const rotatingText = document.querySelector(".txt-rotate");
  if (rotatingText) {
    const words = JSON.parse(rotatingText.getAttribute("data-rotate"));
    new TextRotator(rotatingText, words, {
      speed: 100,
      deleteSpeed: 50,
      delay: 2000,
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Initialize particles.js
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", particlesConfig);
  }
});
