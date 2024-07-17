let currentTestimonial = 1;

function showTestimonial(testimonialNumber) {
  document.getElementById(`testimonial${currentTestimonial}`).style.display = 'none';
  currentTestimonial = testimonialNumber;
  document.getElementById(`testimonial${currentTestimonial}`).style.display = 'block';
}

function nextTestimonial() {
  currentTestimonial++;
  if (currentTestimonial > 2) {
    currentTestimonial = 1;
  }
  showTestimonial(currentTestimonial);
}

// Change testimonial every 5 seconds (adjust as needed)
setInterval(nextTestimonial, 3000);

// Display the first testimonial initially
showTestimonial(currentTestimonial);
