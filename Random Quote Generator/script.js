const quoteContainer = document.querySelector('.js-container');
const quoteWriterElement = document.querySelector('.js-quote-writer');
const quoteBtnElement = document.querySelector('.js-quote-btn');
const quoteElement = document.querySelector('.js-quote');

const options = {
  headers: {
    'X-Api-Key' : 'TJRPFFQrTcnQJmzQ+k3GJg==4nUeSK4gvRfCl18N' 
  }
};

const api_url = 'https://api.api-ninjas.com/v1/quotes?category=inspirational';

async function fetchApi(){
  try {
    quoteElement.innerText = 'Updating...';
    quoteWriterElement.innerText = 'Updating...';
    quoteBtnElement.innerText = 'Loading...';
    quoteBtnElement.disabled = true;

    const response =await fetch(api_url, options);
    const data = await response.json();

    quoteElement.innerText = data[0].quote;
    quoteWriterElement.innerText = `~ ${data[0].author}`;
    quoteBtnElement.innerText = 'Get Quote';
    quoteBtnElement.disabled = false;
    } 
    catch (error) {
      quoteContainer.innerHTML = 
      `<h3>OOPS!! <br> Something went wrong, Try again later.</h3>`;
    }
};

quoteBtnElement.addEventListener('click',fetchApi);