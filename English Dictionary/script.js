const inputElement = document.querySelector('.js-input-text');
const wordInfoElement = document.querySelector('.js-meaning-container');
const containerElement = document.querySelector('.js-container');
const enterTextElement = document.querySelector('.js-enter-text');

let inputText;

inputElement.addEventListener('input', () => {
  enterTextElement.innerText = 'Type a word and press enter';
  wordInfoElement.innerHTML = '';
  inputText = inputElement.value;
});

window.addEventListener('keyup', (event) => {
  if(event.key === 'Enter' && inputText !== ''){
    getInfo();
  }
});

let wordMeaning;
let audio;

async function getInfo(){
  try {
    enterTextElement.innerText = 'Searching for word...';
    wordInfoElement.innerHTML = '';
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputText}`);
    
    const data = await response.json();

    if(data.title){
      wordMeaning = 'N/A';
      audio = '';
    }
    else{
      wordMeaning = data[0].meanings[0].definitions[0].definition;
      audio = data[0].phonetics.length > 1 ? data[0].phonetics[1].audio : '';
    }

    const html = `
    <p>Word Title: ${inputText}</p>
    <p>Meaning: ${wordMeaning}</p>
    <audio src="${audio}" controls></audio>
    `
    wordInfoElement.innerHTML = html;
    enterTextElement.innerText = '';    
  }
  catch(error){
    containerElement.innerHTML = `<p>An error occured due to some reason. Try again later!</p>`;
  }
}