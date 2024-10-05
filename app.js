//Express Basic settings & Variables 
import express from 'express';
import { engine } from 'express-handlebars';
import { generatePassword } from './public/javascripts/generate_password.js';
const app = express();
const port = 3000;

//View => Use Handlebars as view engine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');                
app.set('views', './views');  

//Model => Load static files
app.use(express.static('public'));

//Middleware => Encode url
app.use(express.urlencoded({ extended: true }));

//Controller => Routing
app.get('/', (req, res) => {
    res.render('index');
  })
  
app.post('/', (req, res) => {
    const option = req.body;
    const password = generatePassword(option);
    res.render('index', {password, option});
})

app.listen(port, () => {
    console.log(`express server is running on https://localhost:${port}`);
})