//EXPRESS
const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

//View => use Handlebar as view engine
app.engine('.hbs', engine({extname: '.hbs'})) //更改附檔名.handlebars => .hbs
app.set('view engine', '.hbs') //指定 view engine 為.hbs檔案
app.set('views', './views')


//Controller
app.get('/', (req, res) => {
    res.redirect('/password-generator')
  })
  
app.get('/password-generator', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`express server is running on https://localhost:${port}`)
})