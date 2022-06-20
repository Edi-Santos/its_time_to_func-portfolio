// Desafios de loops de repetição (for, for/in, for/of, do/while).

// Desafio 4 - Escreva uma função que conte de 1 a 10.
function counter() {
  const acc = []

  for (let i = 1; i <= 10; i += 1) {
    acc.push(i);
  }

  return acc;
}

console.log(counter());
