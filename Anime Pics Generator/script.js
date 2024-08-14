import { animeImgs } from "./data/data.js";

const getAnimeBtn = document.querySelector('.js-get-anime-btn');
const animeContainerEl = document.querySelector('.js-anime-container');

let currentIndex = 0;

getAnimeBtn.addEventListener('click', generateAnime);

function generateAnime(){
  animeContainerEl.innerHTML = '';

  const imgObj = animeImgs[currentIndex];
  
    const html = `
      <img class="anime-img js-anime-img" src= '${imgObj.imgSrc}' alt="anime-img">
    `
    animeContainerEl.innerHTML = html;

    currentIndex = (currentIndex + 1) % animeImgs.length;
};