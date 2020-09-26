const AWS = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const path = require('path')

const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

module.exports = multer({
  dest: path.resolve(__dirname, '..', 'temp'),
  storage: multerS3({
    s3,
    bucket: 'teste-scontti',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      const fileName = file.originalname

      cb(null, fileName)
    }
  })
})
