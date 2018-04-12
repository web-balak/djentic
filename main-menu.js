//menu_button.onclick = function myFunction() {
//    let x = document.getElementById("my_nav");
//
//    if (x.className === "top_nav") {
//        x.className += " responsive";
//    } else {
//        x.className = "top_nav";
//    }
//}
main_menu.onclick = function myFunction() {
    let x = document.getElementById("my_nav");

    if (x.className === "top_nav") {
        x.className += " activeMMM";
    } else {
        x.className = "top_nav";
    }
}
