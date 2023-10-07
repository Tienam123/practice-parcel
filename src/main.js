const button = document.querySelector('#button')
const input = document.querySelector('.input');
const text= document.querySelector('p');
button.addEventListener('click', onClickButton)
function onClickButton (event) {
  let value = input.value
  console.log(value)
  let array = value.split(',')
  let total = 0;
  console.log(array)
  array.forEach((element,index) => {
    total += Number(element);
  })
  console.log(total/array.length)
}


