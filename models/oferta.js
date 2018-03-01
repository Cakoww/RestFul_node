var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OfertaSchema = new Schema({

    produto : String,
    loja: String,
    preco: String,
    tipo: String


});


module.exports = mongoose.model('Oferta', OfertaSchema);