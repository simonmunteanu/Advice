document.getElementById('fetchButton').addEventListener('click', fetchRandomAdvice);

function fetchRandomAdvice() {fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    const advice = data.slip.advice;
    displayAdvice(advice);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  function displayAdvice(advice) {
    const adviceContainer = document.getElementById('adviceContainer');
    adviceContainer.innerText = advice;
    
  }
}