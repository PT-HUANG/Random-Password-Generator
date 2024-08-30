//EXPRESS
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('express app for generator')
})

app.listen(port, () => {
    console.log(`express server is running on https://localhost:${port}`)
})