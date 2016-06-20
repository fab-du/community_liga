'use strict';

var db = require('../index');
var faker = require('faker');
    faker.locale = "de";


var makePerson = function( id ){
    var _id = id;
    var _name = []; _name.push(faker.name.firstName());
    var _vorname = []; _vorname.push(faker.name.lastName());
    var _geboren_am = faker.date.past(60);
    var _nationalitaet = faker.address.country();

var person = {
    _id           : _id,

    name          : _name,

    vorname       : _vorname,

    geboren_am    : _geboren_am,

    nationalitaet : _nationalitaet
}

return person;

}



var seed = function( cb ){
    for ( var i=1; i< 600; i++ ){
        var person = makePerson( i );
        var toSave = new db.Person( person );
        toSave.save( function( err ){
            if( err ) console.log( "Person already exists \n");
        });
    }

    return cb();
}


module.exports = 
{
    seed : seed
};
