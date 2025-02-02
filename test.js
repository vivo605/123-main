const fs = require('fs')
console.log('Ты больше не увидишь этот текст')
fs.unlinkSync(__filename)