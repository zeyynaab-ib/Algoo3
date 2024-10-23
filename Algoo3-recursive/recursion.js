// Power Function
function power (base, exponent) {
    if (exponent === 0) {
      return 1;
    }
    
    // Recursive Case: exponent is negative
    else if (exponent < 0) {
      return 1 / power(base, -exponent);
    }
    //Handle positive exponent
  
      else {
          return base * power(base, exponent - 1);
      }
  
  } 
  
  
  
  //Fibonacci Sequence 
  function fibonacci (n) {
      // Base Case
    if (n === 0) {
      return 0;
    }
    else if (n === 1) {
      return 1;
    }
      // Recursive Case
      return fibonacci(n - 1) + fibonacci(n - 2);
    
  }