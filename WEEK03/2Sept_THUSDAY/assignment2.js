function countDown(fromNumber) {
    console.log(fromNumber);
    let nextNumber = fromNumber - 1;
    let sum=fromNumber+nextNumber
  
    if (nextNumber > 0) {
      countDown(nextNumber);
    }
  }
  
  countDown(3);