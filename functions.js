var helloFuction = function hello() {
    console.log("Hello World!!");
}
helloFuction();

var helloFuction2 = () => {
    console.log("Hello World Again!!");
    console.log("Something");

}
helloFuction2();

const helloFuction3 = (message) => {
    console.log(message)

}
helloFuction3("Hello!!");


var topla = (sayi1 , sayi2) => {
    return sayi1 + sayi2
}
let toplam = topla(3, 4);
console.log(topla);