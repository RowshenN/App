var slider_img = document.querySelector('.slider-img')
var images = ['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG'];
var i = 0;

function prev() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}

function next() {
    if ( i >= images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute('src', '../images/' + images[i])
}


function openModule(id){
    document.getElementById("moduls").style.display = "flex"
    window.scroll(0,0);
}
function closeModule(id){
    document.getElementById("moduls").style.display = "none"
}

function ShowImgs(){
    document.getElementById("module-videos").style.display = "none"
    document.getElementById("module-imgs").style.display = "inline-flex"
    document.getElementById("img-button").style.color = "green"
    document.getElementById("video-button").style.color = "black";
 
}

function ShowVideos(){
    document.getElementById("module-imgs").style.display = "none"
    document.getElementById("module-videos").style.display = "inline-flex"
    document.getElementById("video-button").style.color = "green"
    document.getElementById("img-button").style.color = "black"
}

function nextImg(){
    console.log("clicked!")
    var images = ['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG'];
    if ( i >= images.length - 1) {i = 0;}
    else{i++;}
    document.getElementById("m-img").setAttribute('src', '../images/' + images[i])
    console.log(images[i])
}
function preveImg(){
    var images = ['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG'];
    if (i == 0) {i = images.length-1;}
    else{i--;}
    
    console.log(images[i])
    document.getElementById("m-img").setAttribute('src', '../images/' + images[i])
}

function nextVideo(){ 
 var videos = ['video.MP4', 'video2.MP4'];
 if ( i >= videos.length - 1) {i = 0;}
 else{i++;}
 document.getElementById("m-video").setAttribute('src', '../videos/' + videos[i])
}
function preveVideo(){
    var videos = ['video.MP4', 'video2.MP4'];
    if (i == 0) {i = videos.length-1;}
    else{i--;}
    
    console.log(videos[i])
    document.getElementById("m-video").setAttribute('src', '../videos/' + videos[i])
}