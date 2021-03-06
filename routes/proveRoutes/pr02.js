const express = require('express');
var router = express.Router();

let books = [];

router.get('/', (req, res, next)=>{
  res.render('pages/prove/prove02/book-list', {
    pageTitle: 'Book List',
    path: '/prove/pr02',
    books: books
  });
});

router.get('/add-book', (req,res,next) => {
  res.render('pages/prove/prove02/add-book', {
    pageTitle: 'Add Book',
    path: '/prove/pr02/add-book'
  });
});

router.post('/add-book',(req, res, next)=>{
  var book = { 
    title: req.body.title, 
    description: req.body.description,
    author: req.body.author,
    publishedOn: req.body.publishedOn
  };
  books.push(book);
  res.redirect(302,'/prove/pr02');
});



module.exports = router;