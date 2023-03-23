

//variabili setup
let imagesGallery = 18;                             //foto totali nella gallery
let imgForPage = 6;                                 //numero di foto per pagina

let pageNeed = Math.ceil(imagesGallery / imgForPage);
let pageNow = 0;                                    // navigatore                   
let imageStart = pageNow * imgForPage + 1;
let imageEnd = imagesGallery - (imgForPage * (pageNeed - (pageNow + 1))) + 1;
console.log('ImageStart: ' + imageStart);
console.log('ImageEnd: ' + imageEnd);

drawGallery();


function nextPage() {
    pageNow++;
    console.log("nextPage");
    cancelGallery();
    drawGallery();
}
function prevPage() {
    pageNow--;
    console.log("prevPage");
    cancelGallery();
    drawGallery();
}

function cancelGallery() {
    document.getElementById("gallery").innerHTML = "";
}

function drawGallery() {
    let imageStart = pageNow * imgForPage + 1;
    let imageEnd = imagesGallery - (imgForPage * (pageNeed - (pageNow + 1))) + 1;
    //disegno la gallery
    for (i = imageStart; i < imageEnd; i++) {
        document.getElementById("gallery").innerHTML += '<div onclick=openImg('+i+') class="box" id="myModal"><img src="images/gallery/img-'+i+'.jpg"></div>'
    }

    //navigator sotto la gallery
    document.getElementById("pagNumber").innerHTML = pageNow + 1 + ' di ' + pageNeed;
    if (pageNow == 0) {
        document.getElementById("previous").innerHTML = '';
    } else {
        document.getElementById("previous").innerHTML = 'Indietro';
    }

    if (pageNow == pageNeed - 1) {
        document.getElementById("next").innerHTML = '';
    } else {
        document.getElementById("next").innerHTML = 'Avanti';
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


function openImg(x){
    console.log(x);
    modal.style.display = "block";
    document.getElementById("imgBig").innerHTML = '<img src="images/gallery/img-'+x+'.jpg">';

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
