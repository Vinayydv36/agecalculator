// This function calculates the age based on the input date, month, and year
function age() {
  // Get the input values for date, month, and year and convert them to integers using parseInt
  const d1 = parseInt(document.getElementById('date').value);
  const m1 = parseInt(document.getElementById('month').value);
  const y1 = parseInt(document.getElementById('year').value);

  // Get the current date, month, and year
  const date = new Date();
  const d2 = date.getDate();
  const m2 = 1 + date.getMonth();
  const y2 = date.getFullYear();

  // Define the number of days in each month
  const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Adjust the current date and month if the input date and month are in the future
  if (d1 > d2) {
    d2 += month[m2 - 1];
    m2--;
  }

  if (m1 > m2) {
    m2 += 12;
    y2--;
  }

  // Calculate the age in years, months, and days
  const d = d2 - d1;
  const m = m2 - m1;
  const y = y2 - y1;

  // Display the calculated age on the webpage
  document.getElementById('age').innerHTML = `Your Age is ${y} Years ${m} Months ${d} Days`;
}
// Get the modal element
const modal = document.getElementById('popupModal');

// Get the close button element
const closeBtn = document.getElementsByClassName('close')[0];

// Function to display the modal
function displayModal() {
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// When the user clicks on the close button, close the modal
closeBtn.onclick = closeModal;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
}