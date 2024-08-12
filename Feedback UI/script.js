const reviewBtnElement = document.querySelector('.js-review-btn');
const ratingElements = document.querySelectorAll('.js-rating');
const containerElement = document.querySelector('.js-container');

let selectedRating = '';

ratingElements.forEach((ratingEl) => {
  ratingEl.addEventListener('click', () => {
    removeActive();
    ratingEl.classList.add('active');
    selectedRating = ratingEl.innerText;
  })
})

reviewBtnElement.addEventListener('click', () => {
  if(selectedRating){
    containerElement.innerHTML = `
      <strong>Thank You!</strong>
      <br><br>
      <strong>Feedback: ${selectedRating}</strong>
      <br><br>
      <p>We'll use your feedback to improve our customer support.</p>
    `;
  }
})

function removeActive(){
  ratingElements.forEach((ratingEl) => {
    ratingEl.classList.remove('active');
  })
}