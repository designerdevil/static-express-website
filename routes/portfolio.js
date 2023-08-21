var express = require('express');
var router = express.Router();


const arr = [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400]

function randomize(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min) - 1
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('portfolio', { title: 'PORTFOLIO', layout: '_heavyhead', images: [
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`},
    {src: `https://picsum.photos/${arr[randomize(1,10)]}/${arr[randomize(1,10)]}/`, alt: `${Math.random()}`}
  ] });
});

module.exports = router;
