const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 9002

app.use(cors())

app.post('/login', function (req, res) {
  res.send({})
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
