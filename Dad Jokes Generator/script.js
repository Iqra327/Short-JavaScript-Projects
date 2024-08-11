const jokeElement = document.querySelector('.js-joke');
const jokeBtnElement = document.querySelector('.js-btn');

const apiKey = 'TJRPFFQrTcnQJmzQ+k3GJg==4nUeSK4gvRfCl18N';

const options = {
  method: 'GET',
  headers: {
    'X-Api-Key' : apiKey,
  },
}

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes';

async function getJoke(){
  try
  {
    jokeElement.textContent = 'Updating...';
    jokeBtnElement.innerText = 'Loading...';
    jokeBtnElement.disabled = true;

    const response =await fetch(apiURL , options);
    const data =await response.json();

    jokeBtnElement.innerText = 'TELL ME A JOKE';
    jokeBtnElement.disabled = false;
    jokeElement.textContent = data[0].joke;
  }
  catch
  {
    jokeElement.textContent = 'An error happened, try again later!';
    jokeBtnElement.innerText = 'TELL ME A JOKE';
  } 
}

jokeBtnElement.addEventListener('click', getJoke);