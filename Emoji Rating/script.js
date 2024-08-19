const starsEl = document.querySelectorAll('.fa-star');
const emojisEl = document.querySelectorAll('.fa-regular');
const colorsArr = ['red', 'orange', 'pink','blue', 'green'];

updateRating(0);

starsEl.forEach((starEL,index) => {
  starEL.addEventListener('click', () => {
    updateRating(index);
  });
});

function updateRating(index){
  starsEl.forEach((starEL, idx) => {
    if(idx < index + 1){
      starEL.classList.add('active');
    }else{
      starEL.classList.remove('active');
    }
  }); 

  emojisEl.forEach(emojiEl => {
    emojiEl.style.transform = `translate(-${index * 50}px)`;
    emojiEl.style.color = colorsArr[index];
  })
}