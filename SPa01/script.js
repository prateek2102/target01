// DOM Elements
const homeBtn = document.getElementById('homeBtn');
const aboutBtn = document.getElementById('aboutBtn');
const contactBtn = document.getElementById('contactBtn');
const contentArea = document.getElementById('contentArea');

// Sections
const homePage = document.getElementById('homePage');
const aboutPage = document.getElementById('aboutPage');
const contactPage = document.getElementById('contactPage');

// Show Home Page by Default
window.onload = () => {
  showHomePage();
};

// Event Listeners
homeBtn.addEventListener('click', showHomePage);
aboutBtn.addEventListener('click', showAboutPage);
contactBtn.addEventListener('click', showContactPage);

// Show Home Page Function
function showHomePage() {
  homePage.classList.remove('hidden');
  aboutPage.classList.add('hidden');
  contactPage.classList.add('hidden');
}

// Show About Us Page Function
function showAboutPage() {
  homePage.classList.add('hidden');
  aboutPage.classList.remove('hidden');
  contactPage.classList.add('hidden');
}

// Show Contact Page Function
function showContactPage() {
  homePage.classList.add('hidden');
  aboutPage.classList.add('hidden');
  contactPage.classList.remove('hidden');
}

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const thankYouMessage = document.getElementById("thankYouMessage");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const question = document.getElementById("question").value.trim();

    thankYouMessage.textContent = `Thank you ${name} for filling your details!`;
    thankYouMessage.style.display = "block";

    console.log("Captured Details:", { name, email, question });

    contactForm.reset();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const observers = document.querySelectorAll('.animate-on-scroll');

  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, options);

  observers.forEach(el => {
    observer.observe(el);
  });
});
