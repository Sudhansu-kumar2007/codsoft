const left =document.querySelector('.left_arrow');
const right =document.querySelector('.right_arrow');
const slider =document.querySelector('.slider');
let slidenum =1;
right.addEventListener('click', () => {
    slider.style.transform = 'translateX(' + -(slidenum * 100) + 'vw)';
    slidenum++;
    if (slidenum > 4) {
        slidenum = 1;
        slider.style.transform = 'translateX(0%)';
    }
});
left.addEventListener('click', () => {
    slider.style.transform = 'translateX(' + (slidenum * 100) + 'vw)';
    slidenum--;
    if (slidenum < 1) {
        slidenum = 4;
        slider.style.transform = 'translateX(0%)';
    }
});


// const slides = document.querySelector('.slider');
//   const total = slides.children.length;
//   let index = 0;

//   setInterval(function(){
//     index = (index + 1) % total;
//     slides.style.transform = `translateX(-${index * 1550}px)`;
//   }, 5000);
