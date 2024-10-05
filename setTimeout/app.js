// Quick example explaining syntax and paramters passed to setTimeout

let x = 100;


function a() {
    setTimeout(() => { console.log("x = ", x) }, 0); // prints x = 100
}


function b() {
    setTimeout((x) => { console.log("x = ", x) }, 0); // prints x = undefined
}


function c() {
    setTimeout((x) => { console.log("x = ", x) }, 1000, x); // prints x = 100
}

function d() {
    setTimeout(function xyz() {
        console.log("x = ", x); // prints x = 100
    }, 0);
}

function e() {
    setTimeout(function xyz(x) {
        console.log("x = ", x); // prints x = undefined
    }, 0);
}

function f() {
    setTimeout(function xyz(x) {
        console.log("x = ", x); // prints x = 100
    }, 0, x);
}