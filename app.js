const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('views','./IHM'); // définition du chemin de mes views
app.set('view engine','ejs'); // définition du moteur de render ou de views ou de templates 

app.get('/', function (req, res) { 
    res.status(200).render('index');
    })

app.get('/a_propos', function (req, res) { 
    res.status(200).render('a_propos');
    })

app.get('/accueil', function (req, res) { 
    res.status(200).render('accueil');
    })


app.use((req,res)=>{ 
    res.status(404).render('404');
})

app.listen(port, () => { 
    console.log("Server listening on port "+port);
})

