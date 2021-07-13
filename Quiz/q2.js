const express = require('express');
const app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'view'));
app.set('port',process.env.PORT || 9090);
const port = app.get('port');

app.use(express.urlencoded({ extended: false }));

let list = [];
app.get('/', (req, res) => {  
  res.render('template',{itemList:list});
});

app.get('/add', (req, res) => {
    res.render('itemRegistrationForm');
});

app.post('/add', (req, res) => {
    list.push(req.body.item);
    res.redirect(302, "/");
});

app.listen(port, err =>{
    if(err){
        console.log("Error: "+err);
    }
    console.log(`Server is running on port ${port}`);
});
