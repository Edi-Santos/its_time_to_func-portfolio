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

module.exports = {
  studentStats,
}
