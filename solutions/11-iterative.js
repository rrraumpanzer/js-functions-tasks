const smallestDivisor = (num) => {
    // BEGIN
    if (num === 1) {return 1;  }
      
    let divisor = 2;
    while (divisor <= num) {
      if (num % divisor === 0) 
      {
      return divisor;
      }
      divisor++;
    }
    return num;
    }
    // END
  
export default smallestDivisor;
  