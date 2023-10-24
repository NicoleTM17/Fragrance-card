

function itemQuantity(){

  const minusBtn = document.querySelector('.fa-circle-minus');
  // console.log(minusBtn);

  const plusBtn = document.querySelector('.fa-circle-plus');
  // console.log(plusBtn);

  const counter = document.getElementById('counter');
  // console.log(counter);

  const totalPrice = document.querySelector('.fragrance-price'); /* price changes as counter increments */
  // console.log(totalPrice);

  plusBtn.addEventListener('click', event => {
    let counterUp = parseInt(counter.textContent);
    // console.log(event);

    if(counterUp < 6){
      counterUp += 1;
    }

    if(counterUp >= 6){
      counter.style.opacity = '.7';
    } else {
      counter.style.opacity = '1';
    }

    counter.textContent = counterUp;

  });

  minusBtn.addEventListener('click', event => {
    // console.log(event);
    let counterDown = parseInt(counter.textContent);

    if(counterDown > 1){
      counterDown -= 1;
    }

    if(counterDown <= 1){
      counter.style.opacity = '.7';
    } else {
      counter.style.opacity = '1';
    }

    counter.textContent = counterDown;
  })

}

itemQuantity();
