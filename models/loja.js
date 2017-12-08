var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LojaSchema = new Schema({

    name : String,
    latitude: String,
    longitude: String


});


module.exports = mongoose.model('Loja', LojaSchema);