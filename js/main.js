

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
        document.getElementById("gallery").innerHTML += '<a href="images/gallery/img-'+i+'.jpg"><div class="box"><img src="images/gallery/img-'+i+'.jpg"></div></a>'
    }

    //navigator sotto la gallery
    document.getElementById("pagNumber").innerHTML = pageNow + 1 + ' di ' + pageNeed;
    if (pageNow == 0) {
        document.getElementById("previous").innerHTML = '';
    } else {
        document.getElementById("previous").innerHTML = 'Pag. ' && pageNow;
    }

    if (pageNow == pageNeed - 1) {
        document.getElementById("next").innerHTML = '';
    } else {
        document.getElementById("next").innerHTML = 'Pag. ' && pageNow + 1;
    }
}

