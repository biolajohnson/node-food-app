const request = require('request');

// app_id : 3078073d
//api key: 1312769a9d108cd58fde3ce3cc4ea124

const foodReq = (ingredient, callback) => {
    const url = 'https://api.edamam.com/api/food-database/v2/parser?ingr=' + encodeURI(ingredient) + '&app_id=3078073d&app_key=1312769a9d108cd58fde3ce3cc4ea124'

    request({url, json: true}, (error, response) => {
            if(error){
                callback('Unable to connect to the internet', undefined)
            }else if(response.body.status){
                    callback('Unable to connect to food services', undefined)
                }else{
                    callback(undefined, {
                        foodName: ingredient,
                        foodInfo: response.body.parsed[0]
                    })
                }
            
    } )
}

module.exports = foodReq