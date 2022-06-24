// Desafios de loops de repetição (for, for/in, for/of, do/while).

// Desafio 4 - Escreva uma função que conte de 1 a 10.
function counter() {
  const acc = []

  for (let i = 1; i <= 10; i += 1) {
    acc.push(i);
  }

  return acc;
}

// Desafio 5 - Escreva uma função que conte a quantidade de letras existentes na frase (não conte com os espaços)
function howMuchWords(sentence) {
  let charQuantity = 0

  for (let index = 0; index < sentence.length; index += 1) {
    if (sentence[index] !== " ") {
      charQuantity += 1;
    }
  }

  return charQuantity;
}
