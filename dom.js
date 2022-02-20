//document.getElementById("bio").innerHTML="John Doe: 2022"
var intro1 = document.getElementById("intro1");

var mesaj = document.getElementById("mesaj");

mesaj.innerHTML = intro1.innerHTML;

var tumlisteler = document.getElementsByTagName("ul");
var cities = tumlisteler[0];

tumElemanlar = cities.getElementsByTagName("li");

for (i = 0; i < tumElemanlar.length; i++) {
//     alert(tumElemanlar[i].innerHTML);
// }

 var classElemanlari = document.getElementsByClassName("intro1")
alert(classElemanlari[1].innerHTML)
alert(classElemanlari.length)


// var queryElemanlari =document.querySelectorAll("p.intro1");
// alert(queryElemanlari.length);

var isimElemanlari = document.getElementsByName("CustomerName");
alert(isimElemanlari[0].value);

var jane = document.getElementById("jane").addEventListener("mouseover",rengiDegistir);

function rengiDegistir(){
    document.getElementById("div1").style.color="red";
    var isimElemanlari=document.getElementsByName("CustomerName");
    isimElemanlari[0].value="Hans"
}
