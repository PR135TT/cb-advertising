document.getElementById('nav-toggle').addEventListener('click', function(e) {
  // Prevent the link's default behavior
  e.preventDefault();
  
  // Select all nav items that are initially hidden
  const hiddenItems = document.querySelectorAll('.nav-hidden');

  // Toggle the display property for each hidden nav item
  hiddenItems.forEach(item => {
    // Using classList.toggle is also an option if you prefer toggling a class.
    if (item.style.display === "none" || item.style.display === "") {
      item.style.display = "flex";  // or "block" based on your layout
    } else {
      item.style.display = "none";
    }
  });
});