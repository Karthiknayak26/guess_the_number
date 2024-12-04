'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// console.log(document.querySelector('.guess').value);
// document.querySelector('guess').value = 23;
let secretnumber = Math.trunc(Math.random() + 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // document.querySelector('.message').textContent = 'correct number';

  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  } else if (guess === secretnumber) {
    document.querySelector('.message').textContent = 'correct number';

    document.querySelector('.number').textContent = secretnumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('body').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = guess > secretnumber ? 'too high' : 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost yhe game';
      document.querySelector('.score').textContent = 0;
    }
  }
});


// } else if (guess > secretnumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'too high';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('message').textContent = 'you lost a game';
//   }

// } else if (guess < secretnumber) {
//   document.querySelector('.message').textContent = 'too low';
//   score--;
// }
// document.querySelector('.score').textContent = score;
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() + 20) + 1;
  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '7';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.widyh = '15rem'
})

