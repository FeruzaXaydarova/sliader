const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n =>{
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active')
}

const activeDot = n =>{
    for(dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active')
}

const handleChange = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () =>{
    if(index == slides.length-1){
        index = 0;
        handleChange(index);
    }else{
        index++;
        handleChange(index);
    }
}

const prevSlide = () =>{
    if(index == 0){
        index = slides.length-1;
        handleChange(index);
    }else{
        index--;
        handleChange(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        handleChange(index)
    })
})

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide);

setInterval(prevSlide , 2000)