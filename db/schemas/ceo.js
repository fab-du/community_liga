var Schema = require('mongoose').Schema;
var Object  = Schema.ObjectId;
var schema_person = require('./person')

var schema = new Schema({
    _  : Number,
    beruf : String,
    person : schema_person
});

module.exports = schema;
