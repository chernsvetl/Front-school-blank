function checkAnagram(anagramArray) {
  let anagramArrayLength = anagramArray.length;
  let word;
  let result;

  if (anagramArrayLength <= 1 || !anagramArray || anagramArray === "") {
    console.log("Error.");
    result = false;
  } else {
    for (let i = 0; i < anagramArrayLength; i++) {
      word = anagramArray[0].split("").sort().join("");
      if (anagramArray[i].split("").sort().join("") === word) {
        result = true;
      } else result = false;
    }
  }

  return result;
}

export { checkAnagram };
