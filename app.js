console.log("Hi :D"); 

var i = 0;
var images = [];
var time = 3500;

//image list
images[0] = "slike/kettlebell.jpg";
images[1] = "slike/fitness2.jpg";
images[2] = "slike/trx.jpg";
images[3] = "slike/fitness3.jpg";

//change image
function changeImg() {
    let img = document.querySelector("#prvaSlika");
    img.setAttribute("src", images[i]);
    img.classList.remove("imageAnimation");
    setTimeout(function() {img.classList.add("imageAnimation");}, 8);

    i = (i + 1) % 4;
    // if(i < images.length - 1) {
    //     i++;
    // } else {
    //     i = 0;
    // }

    setTimeout("changeImg()", time);
}
window.onload = function(){changeImg()};




let stranke = [];
function getTestamonials() {
    console.log("get recipes function is called");
    fetch("data/stranke.json")
        .then(function(response) {
            console.log("We have read the file");
            return response.json();
        })
        .then(function(data) {
            console.log("We have converted the data to json");
            stranke = data.stranke;
            listClientTestamonials(stranke);
        });
}

getTestamonials();

let testmonialsIndex = 0;
function listClientTestamonials(strankeArray) {
    let clients = document.querySelector("#clients");
    let html = "";
    let enDelStrank = strankeArray.slice(testmonialsIndex, testmonialsIndex + 2);
    enDelStrank.forEach(function(stranka) {
        html += `<li><img src="${stranka.slika}">
                    <p><strong>${stranka.ime}</strong><br><br>${stranka.tekst}</p><br><br></li>`;
    }); 
    
    
    clients.innerHTML = html;
} 

function listUp() {
    if((testmonialsIndex - 1) >= 0) {
        testmonialsIndex -= 1;
    }
    listClientTestamonials(stranke);
}
    
function listDown() {
    if((testmonialsIndex + 1) < stranke.length) {
        testmonialsIndex += 1;
    }
    listClientTestamonials(stranke);
}
    
  