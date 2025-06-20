console.log("You know eron Priest Karibo made this right");

const flierImages = [
  "images/gallery1.jpg",
  "images/gallery2.jpg",
  "images/gallery3.jpg",
  "images/gallery4.jpg",
  "images/gallery5.jpg",
  "images/gallery6.jpg",
  "images/gallery7.jpg"
];

let flierIndex = 0;
const flierImg = document.getElementById("flier-image");

function showFlier(index) {
  flierIndex = (index + flierImages.length) % flierImages.length;
  flierImg.src = flierImages[flierIndex];
  console.log("Now Showing:", flierImg.src);
}

showFlier(flierIndex);
setInterval(() => {
  showFlier(flierIndex + 1);
}, 3000); // Change image every 3 seconds

const achievements = [
 { text: "ACHIEVEMENTS", color: "#5E85FF" },
  { text: "At CBM Sales & Biz Solution,we don't just promote -- we deliver results that speak for themselves:", color: "#5E85FF" },
   { text: "60M+ in Sales Generated for vendors through powerful promos and campaigns", color: "#5E85FF" },
    { text: "1,200+ Business Owners Transformed from LOW SALES to consistent orders", color: "#5E85FF" },
	  { text: "3,000+ BUYERS connected directly to vendors in our SALES network", color: "#5E85FF" },
	    { text: "100+ Orders from One Promo -- proven, tested, and repeatable", color: "#5E85FF" },
		  { text: "350+ Verified Suppliers Shared(Lagos & China) to cut off middlement", color: "#5E85FF" },
		    { text: "Fast-Growing SALES COMMUNITY with daily reviews, real buyers & mentorship", color: "#5E85FF" },
			  { text: "CBMSBS isn't just a brand -- it's where vendors go to SELL.", color: "#5E85FF" }
];

let achievementIndex = 0;
const achievementsDiv = document.getElementById("achievements");
achievementsDiv.textContent.transition = "opacity 1s ease-out";

function showAchievement(index) {
  achievementIndex = (index + achievements.length) % achievements.length;
  const current = achievements[achievementIndex];
  achievementsDiv.textContent = current.text;
  achievementsDiv.style.backgroundColor = current.color;
}

showAchievement(achievementIndex);
setInterval(() => {
  showAchievement(achievementIndex + 1);
}, 3000); // Change text every 3 seconds

const sidebar       = document.getElementById('sidebar');
const toggleBtn     = document.getElementById('sidebarToggle');
const closeBtn      = document.getElementById('sidebarClose');

// Open sidebar
toggleBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
});

// Close sidebar
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

// Optional: close when clicking a link
document.querySelectorAll('#sidebar .nav-sidebar a')
  .forEach(link => link.addEventListener('click', () => {
    sidebar.classList.remove('active');
  }));
  
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




