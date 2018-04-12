// let arr = ["Gucci", "Timberland", "Armani", "tommy Hilfiger", "Clarc's", "Versace", "Reebock", "Levi's", "prada", "d&g", "cK", "puma", "dior", "diesel", "hugo boss", "ralph lauren", "givenchy", "u.s. polo assn.", "adidas", "guess", "the north face"];
// let word = "";
//
//
// for (let i = 0; i < arr.length; i++) {
//     word += "<li>" + arr[i].toUpperCase() + "</li>";
//     document.getElementById("ul").innerHTML = word;
// }


//
// let brands = document.getElementById("parafraph");
// let text = brands.innerHTML;
//
// setInterval(function () {
//     text = text[text.length - 1] + text.substring(0, text.length - 1);
//     brands.innerHTML = text;
// }, 200);

let arr = ["Gucci", "Timberland", "Armani", "tommy Hilfiger", "Clarc's", "Versace", "Reebock", "Levi's", "prada", "d&g", "cK", "puma", "dior", "diesel", "hugo boss", "ralph lauren", "givenchy", "u.s. polo assn.", "adidas", "guess", "the north face"];

let i = 0,
    j = 1,
    z = 2;

setInterval(function () {
    document.getElementById("li1").innerHTML = arr[i].toUpperCase();
    document.getElementById("li2").innerHTML = arr[j].toUpperCase();
    document.getElementById("li3").innerHTML = arr[z].toUpperCase();
    i++;
    j++;
    z++;

    if (i == arr.length || j == arr.length || z == arr.length) {
        i = 0;
        j = 1;
        z = 2;
    }

}, 2000)

