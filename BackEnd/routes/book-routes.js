const express = require("express");
const router  = express.Router();
const Book = require("../model/Book")
const booksController = require('../controllers/Book-controller')
// const jwt = require ("jsonwebtoken")
const MiddleWare = require('../model/Middleware');
console.log(Book,"hello")

router.get('/',booksController.getAllBooks); 
router.post('/add',booksController.addBooks); 
router.get('/:id',booksController.getById); 
router.put('/:id',booksController.updateBooks); 
router.delete('/:id',booksController.deleteBooks); 
router.post('/signup',booksController.signUp);
router.post('/login',booksController.login);
router.get('/myprofile',MiddleWare,booksController.myProfile);
module.exports = router;