// create Recipe finder 
// npm install cors
//CORS - Cross Origin Resource Sharing
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');



const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 8080;

//In memory 
let recipes = [
    {id:1,name : "Briyani" , ingredients:['spices', 'meat', 'briyani rice', 'onion']},
    {id:2,name : "Salad" , ingredients:['lettuce', 'tomato', 'cucumber']},
    {id:3,name : "Grilled bread" , ingredients:['bread', 'cheese', 'butter']}
]


app.post('/search', (req,res) => {
   const {ingredients} = req.body;
   if(!ingredients || ingredients.length === 0){
    return res.status(400).json({error: ' Ingredients are required'})
   }

   const matchingRecipes = recipes.filter((recipe) =>
        ingredients.every((ingredient) => 
        recipe.ingredients.includes(ingredient))
        
        )
        res.json(matchingRecipes);
})



app.listen(port, () => {
    console.log(`server is listening on ${port}`);
})

