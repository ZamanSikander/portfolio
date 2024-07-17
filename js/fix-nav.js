let openNav = document.getElementById('main-nav'); // Replace 'yourModalButtonId' with the actual ID of your modal button

window.onscroll = function() {
   if (window.pageYOffset > 80) { // Adjust the scroll threshold as needed
     openNav.style.display = 'block';
   } else {
     openNav.style.display = 'none';
   }
 };