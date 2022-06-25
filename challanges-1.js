// Desafios de estruturas condicionais (if/else e switch/case).
// Fique a vontade para usar o que achar mais conveniente.

// Desafio 1 - Escreva uma função simples que diga se um aluno está aprovado, em recuperação ou reprovado com base na nota que a função receberá por parâmetro.
// Reprovado: 0 a 4,9; Recuperação: 5 a 7; Aprovado: 7,1 a 10.

function studentStats(grade) {
  if (grade >= 0 && grade < 5) return 'Aluno reprovado.';
  if (grade <= 7) return 'Aluno em recuperação';
  if (grade >= 7.1 && grade <= 10) return 'Aluno aprovado';

  return 'Nota inválida';
}

// Desafio 2 - Escreva uma função que calcula as 4 operações fundamentais.
function calculator(sign, n1, n2) {
  if (sign === '+') return n1 + n2;
  if (sign === '-') return n1 - n2;
  if (sign === '*') return n1 * n2;
  if (sign === '/') return n1 / n2;

  return 'Sinal inválido.';
}

// Desafio 3 - Escreva uma função que faça a conversão de medidas de temperatura: Celsius, Kelvin e Fahrenheit
function conversionTempMeasur(degrees, currentMeasure, conversion) {
  const currToLowerCase = currentMeasure.toLowerCase();
  const converToLowerCase = conversion.toLowerCase();
  
  if (currToLowerCase === 'celsius' && converToLowerCase === 'kelvin') {
    return degrees + 273;
  }

  if (currToLowerCase === 'kelvin' && converToLowerCase === 'celsius') {
    return degrees - 273;
  }

  if (currToLowerCase === 'celsius' && converToLowerCase === 'fahrenheit') {
    const calcToFahrenheit = ((9 * degrees) + (5 * 32)) / 5;

    return calcToFahrenheit;
  }

  if (currToLowerCase === 'kelvin' && converToLowerCase === 'fahrenheit') {
    const kelvinToCelsius = degrees - 273;
    const calcToFahrenheit = ((9 * kelvinToCelsius) + (5 * 32)) / 5;
    
    return calcToFahrenheit;
  }

  if (currToLowerCase === 'fahrenheit' && converToLowerCase === 'celsius') {
    const calcToCelsius = (5 * (degrees - 32)) / 9;

    return calcToCelsius;
  }

  return 'Dados incorrentos.';
}

module.exports = {
  studentStats,
  calculator,
  conversionTempMeasur,
}
