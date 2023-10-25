

function itemQuantity(){

  const minusBtn = document.querySelector('.fa-circle-minus');
  // console.log(minusBtn);

  const plusBtn = document.querySelector('.fa-circle-plus');
  // console.log(plusBtn);

  const counter = document.getElementById('counter');
  // console.log(counter);

  const totalPrice = document.getElementById('price'); /* price changes as counter increments */
  // console.log(totalPrice);

  plusBtn.addEventListener('click', event => {
    let counterUp = parseInt(counter.textContent);
    // console.log(event);

    let priceUp = parseFloat(totalPrice.textContent);
    // console.log(priceUp);

    if(counterUp < 6){
      counterUp += 1;
      priceUp += 99.00;
    }

    if(counterUp >= 6){
      counter.style.opacity = '.7';
    } else {
      counter.style.opacity = '1';
    }

    counter.textContent = counterUp;
    totalPrice.textContent = priceUp.toFixed(2);

  });

  minusBtn.addEventListener('click', event => {
    // console.log(event);
    let counterDown = parseInt(counter.textContent);

    let priceDown = parseFloat(totalPrice.textContent);

    if(counterDown > 1){
      counterDown -= 1;
      priceDown -= 99.00;
    }

    if(counterDown <= 1){
      counter.style.opacity = '.7';
    } else {
      counter.style.opacity = '1';
    }

    counter.textContent = counterDown;
    totalPrice.textContent = priceDown.toFixed(2);
  })

}

itemQuantity();
