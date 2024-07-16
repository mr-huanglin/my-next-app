/*
 * @Author: mr-huanglin
 * @LastEditTime: 2024-07-16 15:18:32
 */
'use server'
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('请填写服务器地址')
}
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export async function dbConnect() {
  if (cached.conn) {
    console.log('链接成功 :>> ')

    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: false,
      useCreateIndex: true
    }
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log('链接成功 :>> ')
      return mongoose
    })
  }
  cached.conn = await cached.promise

  return cached.conn
}
