

//variabili setup
let imagesGallery = 33;                             //foto totali nella gallery
let imgForPage = 9;                                 //numero di foto per pagina

let pageNeed = Math.ceil(imagesGallery / imgForPage);
let pageNow = 0;                                    // navigatore                   
let imageStart = pageNow * imgForPage + 1;
let imageEnd = imagesGallery - (imgForPage * (pageNeed - (pageNow + 1))) + 1;
console.log('ImageStart: ' + imageStart);
console.log('ImageEnd: ' + imageEnd);

drawGallery2();
//33 - (9 * (4 - 1)) +1

function nextPage() {
    pageNow++;
    console.log("nextPage");
    //cancelGallery();
    //drawGallery();
}
function prevPage() {
    pageNow--;
    console.log("prevPage");
    //cancelGallery();
    //drawGallery();
}

function cancelGallery() {
    document.getElementById("gallery").innerHTML = "";
}

function drawGallery() {
    let imageStart = pageNow * imgForPage + 1;
    let imageEnd = imagesGallery - (imgForPage * (pageNeed - (pageNow + 1))) + 1;
    //disegno la gallery
    for (i = imageStart; i < imageEnd; i++) {
        document.getElementById("gallery").innerHTML += '<div onclick=openImg('+i+') class="box" id="myModal"><img src="images/gallery/img-'+i+'.png"></div>'
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





function drawGallery2(){
    let galleryArray = [];
galleryArray[0] = "1.png";
galleryArray[2] = "2.png";
galleryArray[3] = "3.png";
galleryArray[4] = "4.png";
galleryArray[5] = "5.png";
galleryArray[6] = "6.png";
galleryArray[7] = "7.png";
galleryArray[8] = "8.png";
galleryArray[9] = "9.png";
galleryArray[10] = "10.png";
galleryArray[11] = "11.png";
galleryArray[12] = "12.png";
galleryArray[13] = "13.png";
galleryArray[14] = "14.png";
galleryArray[15] = "15.png";
galleryArray[16] = "16.png";
galleryArray[17] = "17.png";
galleryArray[18] = "18.png";
galleryArray[19] = "19.png";
galleryArray[20] = "20.png";
galleryArray[21] = "21.png";
galleryArray[21] = "22.png";
galleryArray[22] = "23.png";
galleryArray[23] = "24.png";
galleryArray[24] = "25.png";
galleryArray[25] = "26.png";
galleryArray[26] = "27.png";
galleryArray[27] = "28.png";
galleryArray[28] = "29.png";
galleryArray[29] = "30.png";
galleryArray[30] = "31.png";
galleryArray[31] = "32.png";
galleryArray[32] = "33.png";
console.log("galleryArray = ", galleryArray[0]);
    document.getElementById("gallery").innerHTML = "";
    galleryArray.forEach(element => document.getElementById("gallery").innerHTML += '<div onclick=openImg('+element+') class="box" id="myModal"><img src="images/gallery/img-'+element+'"></div>');
}

function openImg(x){
    console.log(x);
    modal.style.display = "block";
    document.getElementById("imgBig").innerHTML = '<img src="images/gallery/img-'+x+'">';

}