// Typing Effect for Roles
const roles = [
  "Full Stack Developer",
  "Spring Boot & Angular Specialist",
  "Problem Solver",
  "Backend API Developer",
  "Frontend Integrator"
];

let roleIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenRoles = 1500;

const roleElement = document.getElementById("changingRoles");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    roleElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, typingSpeed);
  } else {
    setTimeout(eraseRole, delayBetweenRoles);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, erasingSpeed);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, typingSpeed);
  }
}

// Start typing animation on page load
document.addEventListener("DOMContentLoaded", () => {
  if (roles.length) {
    setTimeout(typeRole, 1000);
  }

  // GitHub Calendar Integration
  GitHubCalendar(".calendar", "rish2408", {
    responsive: true
  });
});
