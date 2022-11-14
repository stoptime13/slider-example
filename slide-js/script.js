let slide = document.getElementsByClassName("item");
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');

let currentSlide = 1;

show(currentSlide);

function show(i){
    if(i > slide.length){
        currentSlide = 1;
    }else if (i < 1){
        currentSlide = slide.length;
    }
    for (let j of slide) {
        j.style.display = "none";
        slide[currentSlide - 1].style.display = "block";
    }
}

function nextSlide(){
    currentSlide += 1;
    show(currentSlide);
}

function previousSlide(){
    currentSlide -= 1;
    show(currentSlide)
}



next.addEventListener('click', nextSlide);
previous.addEventListener('click', previousSlide);


