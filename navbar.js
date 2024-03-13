
function toggleMenu() {
    var x = document.getElementById("myNavbar");
    var x2 = document.getElementById("myNavbar2");
    if (x.className === "navbar") {
      x.className += " responsive";
      x2.style.display = "block"; // Show second navbar
    } else {
      x.className = "navbar";
      x2.style.display = "none"; // Hide second navbar
    }
  }