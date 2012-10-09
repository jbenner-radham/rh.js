var carousel;

carousel = function(imgId) {
  var rightPrior;
  rightPrior = parseInt(imgId.style.right, 10 || 0);
  console.log('rightPrior is: ' + rightPrior);
  if (rightPrior < 90) {
    return imgId.style.right = ++rightPrior + '%';
  } else {
    console.log('Done');
    return clearInterval(window.intervalId);
  }
};

/*
Call/Testing functions
----------------------
imgId = document.getElementById('theImg')
window.intervalId = setInterval carousel, 30, imgId
console.log 'IntervalId is: ' + intervalId
*/