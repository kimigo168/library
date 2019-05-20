const mongoose = require('mongoose')
const Schema = mongoose.Schema // 一种以文件形式存储的数据库模型骨架

mongoose.Promise = global.Promise

const db = mongoose.connect('mongodb://localhost:27017/books')

db.connection.on('error', (error) => {
  console.log(`数据库连接失败：${error}`)
})

db.connection.on('open', () => {
  console.log(`数据库连接成功`)
})

const BookSchema = Schema({
  title: {
    unique: true, // 唯一的不可重复
    type: 'String'
  },
  summary: 'String',
  price: 'Number',
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    }
  }
})

exports.Book = mongoose.model('Book', BookSchema) // model是由schema生产的模型，可以对数据库操作
