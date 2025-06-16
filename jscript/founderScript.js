   document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% is visible
    });

    sections.forEach(section => {
      observer.observe(section);
    });
  });