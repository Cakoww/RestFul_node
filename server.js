//inclusão dos pacotes usados na aplicacao
var express = require('express');
var app = express();


var bodyParser = require('body-parser');

var Loja = require('./models/loja');
var Oferta = require('./models/Oferta');

var path = require('path')


//conexao ao banco de dados
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/base_app'); // connect to our database



// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());



app.use(express.static(__dirname));
app.use('/angular', express.static(__dirname + '/angular'));




var port = process.env.PORT || 3000; //nossa porta

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});





// on routes that end in /bears
// ----------------------------------------------------
router.route('/lojas') 

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        var loja = new Loja();              // create a new instance of the Bear model
        loja.name = req.body.name;         
        loja.latitude = req.body.latitude;  
        loja.longitude = req.body.longitude;  
        console.log('request: ' + req.body.name);

        // save the bear and check for errors
        loja.save(function(err) {

            console.log('loja salva... nome: ' + loja.name);

            if (err)
                res.send(err);

            res.json({ message: 'Loja created!' });
        });

    })
    
    // get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res) {
        Loja.find(function(err, lojas) {
            if (err)
                res.send(err);

            res.json(lojas);
        });
    });


    // on routes that end in /bears/:bear_id
    // ----------------------------------------------------
    router.route('/lojas/:loja_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Loja.findById(req.params.loja_id, function(err, loja) {
            if (err)
                res.send(err);
            res.json(loja);
        });
    })
    
    // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
    .put(function(req, res) {
        
                // use our bear model to find the bear we want
                Loja.findById(req.params.loja_id, function(err, loja) {
        
                    if (err)
                        res.send(err);
        
                    loja.name = req.body.name;  
                    loja.latitude = req.body.latitude;  
                    loja.longitude = req.body.longitude;  
        
                    // save the bear
                    loja.save(function(err) {
                        if (err)
                            res.send(err);
        
                        res.json({ message: 'Loja updated!' });
                    });
        
                });
    })
    
    .delete(function(req, res){

        Loja.remove({
            _id: req.params.loja_id
        }, function(err, loja){

            if(err)
            res.send(err);
            
                res.json({ message: 'Successfully deleted' });


        });
    });
    

    router.route('/index').get(function(req, res){
        res.sendFile(__dirname +'/static/index.html');
    });


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api --RETIREI
app.use('', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
