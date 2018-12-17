const caesarCipher = (sentenca, numero) => {
  numero = numero % 26;
  const sentencaEmCaixaBaixa = sentenca.toLowerCase();
  let alfabeto = 'abcdefghijklmnopqrstuwxyz'.split('');
  let sentencaCifrada = '';

  for (var i = 0; i < sentencaEmCaixaBaixa.length; i++) {
    var letraAtual = sentencaEmCaixaBaixa[i];
    if (letraAtual === ' ') {
      sentencaCifrada += letraAtual;
      continue;
    }

    const currentIndex = alfabeto.indexOf(letraAtual);
    let newIndex = currentIndex + numero;
    if (newIndex > 25) {
      newIndex = newIndex - 26;
    }
    if (newIndex < 0) {
      newIndex = 26 + newIndex;
    }
    if (sentenca[i] === sentenca[i].toUpperCase()) {
      sentencaCifrada += alfabeto[newIndex].toUpperCase();
    }
    else {
      sentencaCifrada += alfabeto[newIndex];
    }
  }
  return sentencaCifrada;
}

const ccTest = caesarCipher('abcde', 1)

console.log(ccTest)