const express = require('express');
const app = express();

app.set('port',process.env.PORT || 9099);
const port = app.get('port');

let numbers = [];

app.get('/', (req, res) =>{    
    res.send(`<ul>
            <li> ${numbers[0]}</li>
            </ul>
            <a href='/add'>add here</a>`);
});

app.use(express.urlencoded());
app.post('/add',(req,res) =>{
    numbers[0] = req.body.numValue;
    res.redirect(303,`/`);
});

app.get('/add', (req, res) => {
    res.send(`<form action = '/add' method = 'post'>
    Num <input type = "text" name = "numValue" size="10"/>
        <input type = "submit" name = "submitBtn" value = "Submit"/>
    </form>`);
});


app.listen(port, err =>{
    if(err){
        console.log(err);
    }
    console.log(`Server is listening on port ${port}`);
});