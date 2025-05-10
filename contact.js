document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Submit form data using Fetch API
    const formData = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        window.location.href = "thankYou.html"; // Redirect on success
      } else {
        alert("There was an issue sending your message.");
      }
    }).catch(error => {
      console.error("Error:", error);
      alert("There was an error. Please try again later.");
    });
  });
});
