// Desafio 8 - Escreva uma função que cumpra o Desafio 2 sem usar if/else ou switch/case.
function alternativeCalculator(sign, n1, n2) {
  const operations = {
    '+': n1 + n2,
    '-': n1 - n2,
    '*': n1 * n2,
    '/': n1 / n2,
  };

  return operations[sign];
}

// Desafio 9 - Escraba uma função que imprima um quadrado de "*"
function asteriskSquare(n) {
  let asterisk = "";

  for (let i = 0; i < n; i += 1) {
    for (let ii = 0; ii < n; ii += 1) {
      asterisk += "*";
    }
    console.log(asterisk);
    asterisk = "";
  }
}

// Desafio 10 - Escreva uma função que imprima um triângulo de "*" começando com 1 asterísco
//e terminando com n asteríscos
function asteriskTriangle(n) {
  let asterisk = "";

  for (let i = 0; i < n; i += 1) {
    asterisk += "*";
    console.log(asterisk);
  }
}

// Desafio 11 - Escreva uma função que imprima um triângulo de "*" começando com n asteríscos e
// terminando com 1 asterísco
function inverseAsteriskTriangle(n) {
  let arrayNum = [];
  let asterisk = "";

  for (let i = 1; i <= n; i += 1) {
    arrayNum.push(i);
  }

  for (let i = 0; i < arrayNum.length; i = 0) {
    for (let ii = arrayNum.length; ii > 0; ii -= 1) {
      asterisk += "*";
    }
    console.log(asterisk);
    arrayNum.pop();
    asterisk = "";
  }
}

// Desafio 12 - Escreva um função que diga se o parâmetro recebido é um palíndromo
function isPalindrome(sentence) {
  let sentenceLeftToRight = "";

  for (let i = (sentence.length - 1); i >= 0; i -= 1) {
    sentenceLeftToRight += sentence[i];
  }

  if (sentence === sentenceLeftToRight) {
    return true;
  }

  return false;
}

module.exports = {
  alternativeCalculator,
  asteriskSquare,
  asteriskTriangle,
  inverseAsteriskTriangle,
  isPalindrome,
};
