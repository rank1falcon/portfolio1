let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let seeMoreButton = document.querySelectorAll('.see-more');
let carousel = document.querySelector('.carsusel');
let listHtml = document.querySelector('.carsusel .list');

nextButton .onclick = function(){
    showSlider('next');
}
prevButton .onclick = function(){
    showSlider('prev');
}

let unAcceptClick;

const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('prev' , 'next');
    let items = listHtml.querySelectorAll('.carsusel .list .item');
    if(type === 'next'){
        listHtml.appendChild(items[0]);
        carousel.classList.add('next');
    }
    else {
        let postionLast = items.length - 1;
        listHtml.prepend(items[postionLast]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() => { 
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 1000);
}

seeMoreButton.forEach(button => {
    button.onclick = function(){
       carousel.classList.add('showDetail');
    }
});

backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}