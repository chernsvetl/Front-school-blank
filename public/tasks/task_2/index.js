function encode(text, openAlph, secureAlph) {
  let openAlphLength = openAlph.lenght;
  let secureAlphLength = secureAlph.lenght;
  let coding_msg = "";
  let regexp = /[A-z]/i;

  if (openAlphLength !== secureAlphLength) {
    console.log("Error.The different lengths!");
  }

  text = text.split("");
  text.forEach((symbol) => {
    let up = false;
    if (symbol !== symbol.toLowerCase()) {
      up = true;
      symbol = symbol.toLowerCase();
    }

    if (symbol.match(regexp)) {
      let index = openAlph.indexOf(symbol);
      symbol = secureAlph[index];
    }
    if (up) {
      symbol = symbol.toUpperCase();
    }
    coding_msg += symbol;
  });
  return coding_msg;
}

export { encode };
