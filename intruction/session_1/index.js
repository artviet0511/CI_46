// name import
import { sum, multiple, divide, sub } from './math.js';
// default import
// import Math from "./math.js"
// console.log(Math.divide(2, 1));

// console.log(sum(1, 2));

// document.getElementById("hello").innerHTML = "hello, CI 46";
let soa = document.getElementById("soa");
let sob = document.getElementById("sob");
let kq = document.getElementById('kq');
let c;
document.getElementById("cong").addEventListener('click', function () {
    if (soa.value == null || sob.value == null) {
        alert('ban phai nhap du 2 so');
    } else {
        c = sum(Number(soa.value), Number(sob.value));
        kq.innerHTML = `${soa.value} + ${sob.value} = ${c}`;
    }
});
document.getElementById("tru").addEventListener('click', function () {
    if (soa.value == null || sob.value == null) {
        alert('ban phai nhap du 2 so');
    } else {
        c = sub(Number(soa.value), Number(sob.value));
        kq.innerHTML = `${soa.value} - ${sob.value} = ${c}`;
    }
});
document.getElementById("nhan").addEventListener('click', function () {
    if (soa.value == null || sob.value == null) {
        alert('ban phai nhap du 2 so');
    } else {
        c = multiple(Number(soa.value), Number(sob.value));
        kq.innerHTML = `${soa.value} * ${sob.value} = ${c}`;
    }
});
document.getElementById("chia").addEventListener('click', function () {
    if (soa.value == null || sob.value == null) {
        alert('ban phai nhap du 2 so');
    } else if (sob.value == 0) {
        kq.innerHTML = `${soa.value} / ${sob.value} = khong ton tai`;
    } else {
        c = divide(Number(soa.value), Number(sob.value));
        kq.innerHTML = `${soa.value} / ${sob.value} = ${c}`;
    }
});

