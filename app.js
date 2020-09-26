const express = require('express')
const morgan = require('morgan')

const upload = require('./upload')

const app = express()
const port = 5000

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'Received' })
})

app.listen(port, () => console.log('Online:', port))
