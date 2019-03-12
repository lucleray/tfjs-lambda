const tar = require('tar')
const iltorb = require('iltorb')
const fs = require('fs')
const { join } = require('path')

tar
  .c({ cwd: join(__dirname, 'build') }, ['index.js', 'node_modules'])
  .pipe(iltorb.compressStream())
  .pipe(fs.createWriteStream('tfjs-node.br'))
