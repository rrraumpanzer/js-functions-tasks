// BEGIN
const sayPrimeOrNot = (number) => {
  if (number<2) {return console.log("no");}
  if (number === 2) {return console.log("yes")}
  var i = 2;
  const maximal = Math.sqrt(number)+1;
  while (i < maximal) {
      if (number%i === 0) {return console.log("no")}
      i += 1;
  }
  return console.log("yes");
}

export default sayPrimeOrNot;
// END