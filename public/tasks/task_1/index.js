function getArrays(number) {
  let array_three = [],
    array_five = [],
    array_total = [];
  let sign_of_number = Math.sign(number);
  let abs_number = Math.abs(number);

  if (number === "") {
    console.log("Error.You have an empty string.");
  }

  for (let i = 0; i <= abs_number; i++) {
    if (i % 3 === 0) {
      array_three.push(i * sign_of_number);
    }
    if (i % 5 === 0) {
      array_five.push(i * sign_of_number);
    }
  }

  array_total.push(array_three.slice(1));
  array_total.push(array_five.slice(1));

  return array_total;
}

export default getArrays;
