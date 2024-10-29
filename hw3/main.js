// Рекурсивный способ
function factorialRecursive(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorialRecursive(n - 1);
  }
  
  // Итеративный способ
  function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }




  function funIteration(x, y) {
    let res = y;
    while (x > 0) {
      res = x + res;
      console.log(`res = ${res}; x = ${x}; y = ${y}`);
      x--;
    }
    return res;
  }



  function hanoiRecursive(n, fromRod, toRod, auxRod) {
    if (n === 1) {
      console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
      return;
    }
    hanoiRecursive(n - 1, fromRod, auxRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    hanoiRecursive(n - 1, auxRod, toRod, fromRod);
  }
  function hanoiIterative(n, fromRod, toRod, auxRod) {
    const moves = [];
    let totalMoves = Math.pow(2, n) - 1;
    
    for (let i = n; i > 0; i--) {
      moves.push([i, fromRod, toRod, auxRod]);
    }
    
    while (moves.length > 0) {
      const [disk, from, to, aux] = moves.pop();
      if (disk === 1) {
        console.log(`Move disk 1 from ${from} to ${to}`);
      } else {
        moves.push([disk - 1, aux, to, from]);
        moves.push([1, from, to, aux]);
        moves.push([disk - 1, from, aux, to]);
      }
    }
  }