//EXPRESS
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.redirect('/password-generator')
  })
  
app.get('/password-generator', (req, res) => {
    res.send('password generator')
})

app.listen(port, () => {
    console.log(`express server is running on https://localhost:${port}`)
})