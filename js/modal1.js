// Get the modal element by its ID
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var openModalBtn = document.getElementById('openModalBtn1');
// Get the button that closes the modal
var closeModalBtn = document.getElementById('closeModalBtn');

// Function to open the modal when the open button is clicked
openModalBtn.onclick = function() {
  modal.style.display = 'block'; // Set the modal display to block (visible)
};

// Function to close the modal when the close button is clicked
closeModalBtn.onclick = function() {
  modal.style.display = 'none'; // Set the modal display to none (hidden)
};

// Function to close the modal when the user clicks outside of it
window.onclick = function(event) {
  if (event.target === modal) { // Check if the clicked target is the modal
    modal.style.display = 'none'; // Set the modal display to none (hidden)
  }
};

