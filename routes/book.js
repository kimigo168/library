const express = require('express')
const router = express.Router()
const BookModel = require('../models/books')

// GET 首页显示全部书籍
router.get('/', (req, res) => {
  BookModel.getBooks()
    .then((books) => {
      console.log('books', books)
      res.render('index', { books })
    })
})

// GET 新增书籍页面
router.get('/add', (req, res) => {
  res.render('add')
})

// POST 新增书籍
router.post('/add', (req, res) => {
  let book = req.body
  BookModel.addBook(book)
    .then((result) => {
      res.redirect('/')
    })
})

// GET 删除
router.get('/:bookId/remove', (req, res) => {
  BookModel.delBook(req.params.bookId)
    .then((book) => {
      res.redirect('/')
    })
})

// GET 编辑页面
router.get('/:bookId/edit', (req, res) => {
  let book = req.book
  BookModel.getBook(req.params.bookId)
    .then((book) => {
      res.render('edit', {
        book,
        bookid: req.params.bookId
      })
    })
})

// POST 编辑
router.post('/:bookId/edit', (req, res) => {
  let book = req.book
  BookModel.editBook(req.params.bookId, book)
    .then((result) => {
      res.redirect('/')
    })
})

module.exports = router