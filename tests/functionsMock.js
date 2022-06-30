// Funções para utilizar nos testes
function asteriskSquareMock(n) {
  let asterisk = "";

  for (let i = 0; i < n; i += 1) {
    for (let ii = 0; ii < n; ii += 1) {
      asterisk += "*";
    }
    console.log(asterisk);
    asterisk = "";
  }
}

function asteriskTriangleMock(n) {
  let asterisk = "";

  for (let i = 0; i < n; i += 1) {
    asterisk += "*";
    console.log(asterisk);
  }
}

module.exports = {
  asteriskSquareMock,
  asteriskTriangleMock,
}
