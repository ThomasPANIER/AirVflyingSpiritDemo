const images = [
    "img/imgCarousel1.jpg",
    "img/imgCarousel2.jpg",
    "img/imgCarousel3.jpg",
    "img/imgCarousel4.jpg",
    "img/imgCarousel5.jpg",
    "img/imgCarousel6.jpg",
    "img/imgCarousel7.jpg",
    "img/photoBgCard.png",
    "img/imgCarousel1.jpg",
    "img/imgCarousel2.jpg",
    "img/imgCarousel3.jpg",
    "img/imgCarousel4.jpg",
    "img/imgCarousel5.jpg",
    "img/imgCarousel6.jpg",
    "img/imgCarousel7.jpg",
    "img/photoBgCard.png"
];
for (let i=0; i<images.length; i++) {
    let image = document.createElement("img");
    image.src = images[i];
    let containerGalerie = document.getElementById("galerie");
    let img = containerGalerie.appendChild(image);
    img.classList.add("col-12", "col-lg-4", "my-4", "img-fluid");
}

const videos = [
    "video/entreCielEtMer.mp4",
    "video/choixInfiniVoyage.mp4",
    "video/ileABoutDaile.mp4",
    "video/videoULM.mp4",
    "video/UntitledVideo1.mp4",

    //"video/UntitledVideo2.mp4",
    //"video/UntitledVideo7.mp4",
    //"video/UntitledVideo8.mp4",
    //"video/UntitledVideo9.mp4",
    //"video/UntitledVideo10.mp4",
    //"video/UntitledVideo11.mp4",
    //"video/UntitledVideo12.mp4",
    //"video/UntitledVideo13.mp4",
    //"video/UntitledVideo14.mp4",
    //"video/UntitledVideo15.mp4"
];
for (let i=0; i<videos.length; i++) {
    let video = document.createElement("video");
    video.src = videos[i];
    video.controls = "controls";
    let containerGalerie = document.getElementById("galerie");
    let vid = containerGalerie.appendChild(video);
    vid.classList.add("col-12", "col-lg-4", "my-4", "img-fluid");
}