for (i = 1; i <= 10; i++) {
    console.log(i)
}
console.log("Finished")

var cities = ["NewYork", "Amsterdam", "Berlin", "Tokyo"]

for (i = 0; i < cities.length; i++) {
    console.log(cities[i])
}

var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

var i = 0;

do {
 console.log(i);
 i++
} while (i < 10) {
   
}


cities.forEach(function(city){
    console.log(city)
})