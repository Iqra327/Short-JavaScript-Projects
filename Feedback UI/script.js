const reviewBtn = document.querySelector('.js-review-btn');
const rating = document.querySelector('.js-rating');
const emojiContainer = document.querySelector('.js-emoji-container');

reviewBtn.addEventListener('click', sendFeedback());

function sendFeedback(){
  rating.addEventListener('click', () => {
    rating.classList.add('active');
    if(rating.childNodes[1].textContent = 'Unhappy'){
      console.log('unhappy');
    } 
  })
}

