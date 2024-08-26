const background = document.querySelector('.background');
background.style.backgroundColor = 'red';
background.style.transition = '1.5s';

setInterval(() => {
  const backgroundColor = background.style.backgroundColor;
  if (backgroundColor == 'red') {
    background.style.backgroundColor = 'orange';
  } else if (backgroundColor == 'orange') {
    background.style.backgroundColor = 'yellow';
  } else if (backgroundColor == 'yellow') {
    background.style.backgroundColor = 'greenyellow';
  } else if (backgroundColor == 'greenyellow') {
    background.style.backgroundColor = 'green';
  } else if (backgroundColor == 'green') {
    background.style.backgroundColor = 'skyblue';
  } else if (backgroundColor == 'skyblue') {
    background.style.backgroundColor = 'blue';
  } else if (backgroundColor == 'blue') {
    background.style.backgroundColor = 'darkblue';
  } else if (backgroundColor == 'darkblue') {
    background.style.backgroundColor = 'purple';
  } else if (backgroundColor == 'purple') {
    background.style.backgroundColor = 'red';
  }
}, 1500);
