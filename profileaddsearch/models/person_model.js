var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    regno: String,
    name: String,
    age: Number,
 });
 var Person = mongoose.model("Person", personSchema);

 module.exports = mongoose.model('Person', personSchema);   