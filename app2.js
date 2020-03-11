var x = 0;
var slides = [];
var xtime = 3500;

//image list
slides[0] = "slike/food1.jpg";
slides[1] = "slike/food2.jpg";
slides[2] = "slike/food3.jpg";
slides[3] = "slike/food4.jpg";
slides[4] = "slike/food5.jpg";
slides[5] = "slike/food6.jpg";
slides[6] = "slike/food7.jpg";
//change image
function changeSlide() {
    let img1 = document.querySelector("#prviSlide");
    img1.setAttribute("src", slides[x]);
    img1.classList.remove("imageAnimation");
    setTimeout(function() {img1.classList.add("imageAnimation");}, 14);


    x = (x + 1) % 7;


    setTimeout("changeSlide()", xtime);
}
window.onload = function(){changeSlide()};