const getForm = document.getElementById('form');
const getInputName = document.getElementById('nome');
const getInputAltura = document.getElementById('altura');
const getInputPeso = document.getElementById('peso');
const getButton = document.getElementById('btn');
const getParagraph = document.getElementById('paragraph');

const calculateIMC = (name, heigth, weight) => {
  let correctHeigth = heigth;

  if (heigth > 100) {
    correctHeigth = heigth / 100;
  }
  
  let IMC = weight / (correctHeigth * correctHeigth);
  let message;

  if (IMC < 18.5) {
    message = 'você está abaixo do peso.';
  } 
  else if (IMC < 25) {
    message = 'você está com o peso ideal.';
  }
  else if (IMC < 30) {
    message = 'você está com sobrepeso.';
  }
  else if (IMC < 40) {
    message = 'você está com obesidade.';
  }
  else {
    message = 'você está com obesidade grave.';
  }

  return `${name}, seu IMC é: ${IMC.toFixed(1)} e ${message}`;
}

getForm.addEventListener('submit', (e) => {
  e.preventDefault();
  getParagraph.innerText = calculateIMC(getInputName.value, getInputAltura.value, getInputPeso.value);
})