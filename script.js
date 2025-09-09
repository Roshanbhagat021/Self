const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

function toggleMenu() {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("scale-y-100");
  mobileMenu.classList.toggle("scale-y-0");
}

// Toggle menu on hamburger click
menuBtn.addEventListener("click", toggleMenu);

// Close menu on link click
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!mobileMenu.classList.contains("hidden")) {
      toggleMenu();
    }
  });
});

let images = [
  "assets/img1.avif",
  "assets/img2.avif",
  "assets/img3.avif",
  "assets/img4.avif",
  "assets/img5.avif",
  "assets/img6.avif",
  "assets/img7.avif",
  "assets/img8.avif",
  "assets/img9.avif",
  "assets/kitchen1.avif",
  "assets/dining1.avif",
];
let currentIndex = 0;

function openGalleryModal(e) {
  e.preventDefault();
  document.getElementById("galleryModal").classList.remove("hidden");
  document.getElementById("galleryModal").classList.add("flex");
}

function closeGalleryModal() {
  document.getElementById("galleryModal").classList.add("hidden");
}

function showImage(src) {
  document.getElementById("mainImage").src = src;
  currentIndex = images.indexOf(src);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("mainImage").src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("mainImage").src = images[currentIndex];
}

function filterImages(category) {
  // 🔥 Example filter logic
  if (category === "all") {
    images = [
      "assets/img1.avif",
      "assets/img2.avif",
      "assets/img3.avif",
      "assets/img4.avif",
      "assets/img5.avif",
      "assets/img6.avif",
      "assets/img7.avif",
      "assets/img8.avif",
      "assets/img9.avif",
      "assets/kitchen1.avif",
      "assets/dining1.avif",
    ];
  } else if (category === "kitchen") {
    images = ["assets/kitchen1.avif"];
  } else if (category === "dining") {
    images = ["assets/dining1.avif", "assets/img7.avif"];
  }
  currentIndex = 0;
  document.getElementById("mainImage").src = images[currentIndex];
}

document.addEventListener("DOMContentLoaded", function () {
  const galleryContent = document.getElementById("galleryContent");

  if (galleryContent) {
    galleryContent.addEventListener("click", function (event) {
      // This prevents the event from bubbling up to the outer modal container
      event.stopPropagation();
    });
  }
});

// -------------- send message to what'sapp --------------------

document
  .getElementById("whatsappForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    // Your WhatsApp number
    let whatsappNumber = "+918510844840";

    // Create message
    let finalMessage = `Hi 👋, I am ${encodeURIComponent(
      name
    )}. My phone number is ${encodeURIComponent(
      phone
    )}.%0A%0A${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    let url = `https://wa.me/${whatsappNumber}?text=${finalMessage}`;
    window.open(url, "_blank");
  });

//   ------------------ Year -------------------
document.getElementById("year").textContent = new Date().getFullYear();
