// const button = document.getElementById('myButton');
// const resultElement = document.getElementById('result');
//
//
// button.addEventListener('click', displayPromptResult);
//
// function displayPromptResult() {
//
//   const userInput = prompt("Введите текст:");
//
//
//   if (userInput !== null && userInput.trim() !== '') {
//
//     resultElement.textContent = userInput;
//   } else {
//
//     resultElement.textContent = "Текст не введен";
//   }
// }





function changeLightColor() {
  const inputValue = prompt("Введите цвет:");

  if (inputValue === "Красный") {
    resetLights();
    document.querySelector('.red').style.backgroundColor = 'red';
    console.log("STOP");
  } else if (inputValue === "Желтый") {
    resetLights();
    document.querySelector('.yellow').style.backgroundColor = 'yellow';
    console.log("GET READY");
  } else if (inputValue === "Зеленый") {
    resetLights();
    document.querySelector('.green').style.backgroundColor = 'green';
    console.log("GO");
  } else {
    console.log("Недопустимый цвет!");
  }
}

function resetLights() {

  document.querySelectorAll('.light').forEach(light => {
    light.style.backgroundColor = 'gray';
  });
}


changeLightColor();