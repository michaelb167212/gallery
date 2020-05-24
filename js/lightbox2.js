//Open Modal
openModal = () =>{
  document.getElementById("lightbox").style.display = "block";
}

//Close Modal
closeModal = () =>{
    document.getElementById("lightbox").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

//next/ prev controls
plusSlides = (n) =>{
    showSlides(slideIndex += n);
}

showSlides = (n) =>{
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if(n > slides.length) {slideIndex = 1}
    if(n < 1){slideIndex = slide.length}
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}