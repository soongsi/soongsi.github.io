const body = document.body;
const bgImg = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'];

const changeImg = bgImg[Math.floor(Math.random() * bgImg.length)];

body.style.backgroundImage = `url(img/${changeImg})`;