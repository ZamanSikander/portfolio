 // Get the modal and buttons
 var modal = document.getElementById('myModal');
 var openModalBtn = document.getElementById('openModalBtn');
 var closeModalBtn = document.getElementById('closeModalBtn');
 
 // Open the modal
 openModalBtn.onclick = function() {
   modal.style.display = 'block';
 };
 
 // Close the modal
 closeModalBtn.onclick = function() {
   modal.style.display = 'none';
 };
 
 // Close the modal if the user clicks outside the modal
 window.onclick = function(event) {
   if (event.target === modal) {
     modal.style.display = 'none';
   }
 };