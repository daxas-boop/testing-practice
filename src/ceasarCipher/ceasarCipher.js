const ceasar = (string, key) => {
  if (key < 0) {
    return caesar(string, key + 26);
  }
  let outputString = "";

  for (let i = 0; i < string.length; i++) {
    let c = string[i];

    if (c.match(/[a-z]/i)) {
      let code = string.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + key) % 26) + 65);
      }
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + key) % 26) + 97);
      }
    }
    
    outputString += c;
  }

  return outputString;
};

export default ceasar;