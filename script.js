const images = ['../images/ping1.jpg', '../images/ping2.jpg', '../images/ping3.webp', '../images/ping4.jpg']

let currentNumber = 0;
const renderPic = (currentNumber) => {
    const pic = document.createElement('img');
    pic.classList.add('img')
    pic.src = images[currentNumber];
    const img1 = document.querySelector('.pic');
    img1.append(pic);
}

renderPic(currentNumber);

const changePic = (currentNumber) => {
    const img = document.querySelector('.img');
    img.src = images[currentNumber];
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    const currentDot = document.querySelector(`#dot${currentNumber}`);
    currentDot.classList.add('active');
}

const next = document.querySelector('.next');
const previous = document.querySelector('.previous');

next.addEventListener('click', function (e) {
    if (currentNumber === images.length - 1) {
        currentNumber = 0;
        changePic(currentNumber);
    } else {
        changePic(++currentNumber);
    }
});

previous.addEventListener('click', function (e) {
    if (currentNumber === 0) {
        currentNumber = images.length - 1;
        changePic(currentNumber);
    } else {
        changePic(--currentNumber);
    }
});

const points = document.querySelector('.points');

for (let index = 0; index < images.length; index++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.id = 'dot' + index;
    points.append(dot);
}

const dots = document.querySelectorAll('.dot');
dots.forEach(dot => {
    dot.addEventListener('click', function (e) {
        dots.forEach(dotEl => {
            dotEl.classList.remove('active');
        });
        dot.classList.add('active');
        const id = dot.id;
        // number =id.charAt(id.length - 1);
        currentNumber = parseInt(id.charAt(id.length - 1));
        changePic(currentNumber);
    });
});

