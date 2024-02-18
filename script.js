// mobile nav menu
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// footer year auto
  document.addEventListener('DOMContentLoaded', function () {
    var year = new Date().getFullYear();
    document.getElementById('year').textContent = year;
  });
  
// pop-up
function closePopup() {
  document.getElementById("popup-message").style.display = "none";
}

// Display the popup on page load
window.onload = function() {
  document.getElementById("popup-message").style.display = "block";
}
