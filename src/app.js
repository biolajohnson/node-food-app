const express = require('express')
const path = require('path')
const hbs = require('hbs');
const foodReq = require('./utils/foodreq');
const port = process.env.PORT || 3000;

//setup express
const app = express();

//setup directory
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup hbs 
app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))
hbs.registerPartials(partialsPath)


app.get('', (req, res) => {
        res.render('index', {
            title: 'Foodie',
            name: 'Abiola Johnson'
        })
        
    })
    app.get('/foods', (req, res) => {
        if (!req.query.ingredient){
            return res.send({
                error: 'Unable to connect properly'
            })
        }
            foodReq(req.query.ingredient, (error, {foodName, foodInfo} = {}) => {
                if (error){
                    return res.send({error})
                }
                res.send({
                    foodName,
                    foodInfo
                })
            })
        })
    
app.listen(port, () => {
    console.log('The server is up on ' + port)
})