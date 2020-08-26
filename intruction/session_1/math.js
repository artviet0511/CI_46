export function sum(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export function multiple(a, b) {
    return a * b;
}

export function divide(a, b) {
    return a / b;
}

function pow(a, b) {
    return a ** b;
}

function mod(a, b) {
    return a % b;
}

export { pow, mod };

export default { sum, sub, multiple, divide, pow, mod }