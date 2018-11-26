const caesarCipher = (str, num) => {
  num = num % 26
  const lowerCaseString = str.toLowerCase()
  let alphabet = 'abcdefghijklmnopqrstuwxyz'.split('')
  let newString = ''

  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }


    const currentIndex = alphabet.indexOf(currentLetter)
    let newIndex = currentIndex + num
    if (newIndex > 25) newIndex = newIndex - 26
    if (newIndex < 0) newIndex = 26 + newIndex
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex]

  }
  return newString
}

const ccTest = caesarCipher('abc', 0)

console.log(ccTest)