'use strict';

// document.querySelector('.message').textContent = 'Corret Number!!!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// const guessN = document.querySelector('.guess').value;
// console.log(document.querySelector('.guess').value);

// const button = document.querySelector('.check');

// button.addEventListener('click', function () {
//   Math.random(guessN);
// });

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'NO Number!!!';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct number';

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when score is too low.
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'start guessing...';

  document.querySelector('.score').textContent = 20;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('.number').style.width = '30rem';
});
