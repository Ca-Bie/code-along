const randomChange = document.getElementById('randomChange');

images = ['/images/background1.png', '/images/background2.png', '/images/background3.png', '/images/background4.png',];

const imgCount = images.length;

const number = Math.floor(Math.random() * imgCount);


window.onload = function(){

    randomChange.style.backgroundImage = 'url('+images[number]+')'
}

