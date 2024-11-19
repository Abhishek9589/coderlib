document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll('.fade');

  const appearOptions = {
    threshold: 0.5, // Trigger when 50% of the element is in view
  };

  const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        entry.target.classList.remove('fade-out');
      } else {
        entry.target.classList.remove('fade-in');
        entry.target.classList.add('fade-out');
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    fader.classList.add('fade'); // Add fade class initially
    appearOnScroll.observe(fader);
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  const viewMoreButton = document.getElementById('view-more');
  let visibleCards = 6;

  // Initially show the first 6 cards
  for (let i = 0; i < visibleCards; i++) {
      if (cards[i]) {
          cards[i].classList.remove('hidden');
      }
  }

  viewMoreButton.addEventListener('click', function() {
      // Show the next set of cards
      for (let i = visibleCards; i < visibleCards + 6; i++) {
          if (cards[i]) {
              cards[i].classList.remove('hidden');
          }
      }
      visibleCards += 6;

      // Hide the button if all cards are visible
      if (visibleCards >= cards.length) {
          viewMoreButton.style.display = 'none';
      }
  });
});

window.onload = function () {
  document.getElementById('loadingSpinner').style.display = 'none';
};



document.addEventListener("DOMContentLoaded", function() {
  const aboutLink = document.getElementById("about-link");
  const sections = document.querySelectorAll(".section"); // Select all sections

  aboutLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default anchor behavior
      
      // Hide all sections
      sections.forEach(section => {
          section.style.display = "none"; // Hide section
      });

      // Show only the about section
      const aboutSection = document.getElementById("about-section");
      aboutSection.style.display = "block"; // Show about section
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const aboutLink = document.getElementById("team-link");
  const sections = document.querySelectorAll(".section"); // Select all sections

  aboutLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default anchor behavior
      
      // Hide all sections
      sections.forEach(section => {
          section.style.display = "none"; // Hide section
      });

      // Show only the about section
      const aboutSection = document.getElementById("team-section");
      aboutSection.style.display = "block"; // Show about section
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const aboutLink = document.getElementById("contact-link");
  const sections = document.querySelectorAll(".section"); // Select all sections

  aboutLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default anchor behavior
      
      // Hide all sections
      sections.forEach(section => {
          section.style.display = "none"; // Hide section
      });

      // Show only the about section
      const aboutSection = document.getElementById("contact-section");
      aboutSection.style.display = "block"; // Show about section
  });
});

const el = document.getElementById('messages')
 el.scrollTop = el.scrollHeight

 function showWelcomeMessage() {
  const email = document.getElementById('email').value;
  const welcomeMessage = document.getElementById('welcomeMessage');
  const welcomeText = document.getElementById('welcomeText');

  // Check if the email field is not empty
  if (email) {
    welcomeText.textContent = `Welcome, ${email.split('@')[0]}!`;
    welcomeMessage.style.display = 'flex';  // Show the welcome message
  } else {
    alert('Please enter a valid email');
  }
}

