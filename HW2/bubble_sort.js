// START
// READ number n
// IF n == 1 THEN return
// FOR i = 1, i <= n, i + 1
//     FOR j = 1; j <= n, j + 1
//         print "*"
//         BREAK
// END
// function printStars(n) {
//     if (n === 1) {
//         return;
//     }

//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             console.log("*");
//             break;
//         }
//     }
// }

// let n = 3; 
// printStars(n);


// START
// READ number n
// numbers i = 0, j = 0, a = 0
// FOR i = n/2, i <= n; i + 1
//     FOR j = 2, j <= n, j * 2
//         a = a + n / 2
// END



// function calculateResult(n) {
//     let i = 0, j = 0, a = 0;
//     for (i = n / 2; i <= n; i++) {
//         for (j = 2; j <= n; j *= 2) {
//             a = a + n / 2;
//         }
//     }
//     console.log("Результат a:", a);
// }

// let n = 6; 
// calculateResult(n);



// START
// READ number n
// number a = 0
// FOR i = 0, i < n, i + 1
//     FOR j = n, j > i, j - 1
//         a = a + i + j
// END


// function calculateSum(n) {
//     let a = 0;
//     for (let i = 0; i < n; i++) {
//         for (let j = n; j > i; j--) {
//             a = a + i + j;
//         }
//     }

//     console.log("Результат a:", a);
// }

// let n = 7;
// calculateSum(n);


// START
// READ number n
// numbers a = 0, i = n
// WHILE i > 0
//     a = a + i
//     i = i / 2
// END

// function calculateSum(n) {
//     let a = 0;
//     let i = n;
//     while (i > 0) {
//         a = a + i;
//         i = Math.floor(i / 2);
//     }

//     console.log("Результат a:", a);
// }

// let n = 6;
// calculateSum(n);
