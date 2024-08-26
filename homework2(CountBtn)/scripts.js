const countNumber = document.querySelector('.count');
const button = document.querySelector('button');

let count = 0;

button.addEventListener('click', () => {
  count++;
  if (count > 10) {
    count = 0;
  }
  countNumber.innerHTML = count;
});
