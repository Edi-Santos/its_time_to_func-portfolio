// Desafios de loops de repetição (for, for/in, for/of, do/while).

// Desafio 4 - Escreva uma função que conte de 1 a 10.
function counter() {
  const acc = [];

  for (let i = 1; i <= 10; i += 1) {
    acc.push(i);
  }

  return acc;
}

// Desafio 5 - Escreva uma função que conte a quantidade de letras existentes na frase (não conte com os espaços)
function howMuchWords(sentence) {
  let charQuantity = 0;

  for (let index = 0; index < sentence.length; index += 1) {
    if (sentence[index] !== " ") {
      charQuantity += 1;
    }
  }

  const result = `A frase tem ${charQuantity} letras.`;

  return result;
}

// Desafio 6 - Escreva uma função que diga a letra mais repetida numa frase
function letterMoreUsed(sentence) {
  let letter = "";
  let counter = 0;
  let acc = 0;

  const toLowerCase = sentence.toLowerCase();

  for (let index1 = 0; index1 < toLowerCase.length; index1 += 1) {
    for (let index2 = 0; index2 < toLowerCase.length; index2 += 1) {
      if (toLowerCase[index1] === toLowerCase[index2] && toLowerCase[index1] !== " ") counter += 1;

      if (counter > acc) {
        letter = sentence[index1];
        acc = counter;
      }
    }
    counter = 0;
  }

  return letter;
}


// Desafio 7 - Escreva uma função que receba uma array de strings e retorne o maior elemente deste array
function biggestElement(arr) {
  let biggest = "";
  let lengthElement = 0;
 
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index].length > lengthElement) {
      lengthElement = arr[index].length;
      biggest = arr[index];
    }
  }

  return biggest;
}

module.exports = {
  counter,
  howMuchWords,
  letterMoreUsed,
  biggestElement,
}
