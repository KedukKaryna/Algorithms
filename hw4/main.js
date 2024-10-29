function fibonacci(n) {
    if (n === 1 || n === 2) {
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  for (let i = 1; i <= 11; i++) {
    console.log(fibonacci(i));
  }

  function fibonacciRiV(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 1 || n === 2) return 1;
    memo[n] = fibonacciRiV(n - 1, memo) + fibonacciRiV(n - 2, memo);
    return memo[n];
  }
  
  for (let i = 1; i <= 11; i++) {
    console.log(fibonacciRiV(i));
  }



  function findKthElement(arr1, arr2, k) {
    let i = 0, j = 0, count = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        count++;
        if (count === k) return arr1[i];
        i++;
      } else {
        count++;
        if (count === k) return arr2[j];
        j++;
      }
    }
    while (i < arr1.length) {
      count++;
      if (count === k) return arr1[i];
      i++;
    }
    while (j < arr2.length) {
      count++;
      if (count === k) return arr2[j];
      j++;
    }
  }
  
  const arr1 = [100, 112, 256, 349, 770];
  const arr2 = [72, 86, 113, 119, 265, 445, 892];
  const k = 7;
  console.log(findKthElement(arr1, arr2, k));