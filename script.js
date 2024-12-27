const counterEl = document.querySelector('.counter');
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value');
const counterTitleEl = document.querySelector('.counter__title');

decreaseButtonEl.addEventListener('click', function () {
  if (parseInt(counterValueEl.textContent) > 0) {
    counterValueEl.textContent = parseInt(counterValueEl.textContent) - 1;
  }

  decreaseButtonEl.blur();
});

resetButtonEl.addEventListener('click', function () {
  counterValueEl.textContent = 0;
  // reset background color
  counterEl.classList.remove('counter--limit');

  // reset counter title
  counterTitleEl.textContent = 'Fancy Counter';

  // enable increase and decrease buttons
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;

  // unfocus (blur) reset button
  resetButtonEl.blur();
});

const incrementCounter = () => {
  const currentValue = parseInt(counterValueEl.textContent);

  let newValue = currentValue + 1;

  if (newValue > 5) {
    newValue = 5;

    // give visual indicator that limit has been reached
    counterEl.classList.add('counter--limit');

    // update counter title to say limit has been reached
    counterTitleEl.innerHTML = 'Limit! Buy <b>Pro</b> for >5';

    // disable increase and decrease buttons
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }

  counterValueEl.textContent = newValue;

  increaseButtonEl.blur();
};

increaseButtonEl.addEventListener('click', incrementCounter);
document.addEventListener('keydown', incrementCounter);