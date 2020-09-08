// 1.2
let a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let a2 = [2, "a", "d", 10, 4]
let a3 = [];
for (let i = 0; i < a1.length; i++) {
    a3 = a2.filter(i => a1[i]);
}
console.log(a3);
let a4 = [];
for (let i = 0; i < a1.length; i++) {
    if (a3.indexOf(a1[i]) === -1) {
        a4.push(a1[i])
    }
}
for (let i = 0; i < a2.length; i++) {
    if (a3.indexOf(a2[i]) === -1) {
        a4.push(a2[i])
    }
}
console.log(a4);

// 1.1:

