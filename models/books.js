// 放置对MongoDB的操作
const Book = require('../lib/mongo').Book

module.exports = {
  getBooks () {
    return Book
      .find({})
      .sort({_id: -1}) // 1正序，-1倒序
      .exec() // 加上.exec()返回一个完整的promise对象，then用于连续动作
  },
  getBook (id) {
    return Book
      .findById(id)
      .exec() // 等价于Book.findById(id, (err, adventure) => {})
  },
  editBook (id, data) {
    return Book
      .findByIdAndUpdate(id, data)
      .exec()
  },
  addBook (book) {
    return Book.create(book)
  },
  delBook (id) {
    return Book
      .findByIdAndRemove(id)
      .exec()
  }
}