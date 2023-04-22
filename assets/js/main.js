// peso / altura * altura
const form = document.querySelector(`#form`);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputWeight = e.target.querySelector(`#weight`);
  const inputHeight = e.target.querySelector(`#height`);

  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  if (!weight) {
    setResult(`Peso inválido`, false);
    return;
  }

  if (!height) {
    setResult(`Altura inválida`, false);
    return;
  }

  const imc = getIMC(weight, height)
  const nivelImc = getNivelImc(imc)

  const msg = `Seu IMC é ${imc} (${nivelImc})`;

  setResult(msg, true);

  console.log(imc, nivelImc)
});

function getIMC(weight, height) {

  const imc = weight / (height ** 2);
  return imc.toFixed(2)
}

function getNivelImc(imc) {
  const nivel = [
    `Abaixo do peso`,
    `Peso normal`,
    `Sobrepeso`,
    `Obesidade Grau 1`,
    `Obesidade Grau 2`,
    `Obesidade Grau 3`
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];

}

function creatP() {
  const p = document.createElement(`p`);
  return p;
}

function setResult(msg, isValid) {
  const result = document.querySelector(`#result`)
  result.innerHTML = '';

  const p = creatP();
  
  if (isValid) {
    p.classList.add(`p-result`);
  } else {
    p.classList.add(`p-invalid`);
  }

  p.innerHTML = msg
  result.appendChild(p)

}