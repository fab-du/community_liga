'use strict';

var db =require('../index');

var clubs = require('./clubs').clubs;

var faker = require('faker');
    faker.locale = "de";


var makeNewsObject = function( id ){
    var _id = id;
    var _title =  faker.lorem.sentence(); 
    var _news =  faker.lorem.paragraphs() + faker.lorem.paragraphs();  
    var news = {
        _id :  _id,
        title : _title,
        news  : _news 
    };

    return news;

}


function seed( cb ){
var newsId = 5;

for (var i = 0, len = clubs.length; i < len; i++) {
    db.Club.findOne( {name : clubs[i].name }, function(err, club){

        for ( var j = 0; j <5; j++  ){
          var news = new db.News( makeNewsObject( newsId ) );
          news.save();
          newsId++;
          club.news.push( news );
        }
        club.save();
    });

}

// for liga
db.Liga.findOne( { _id : 1}, function( err, liga ){

    for( var k = 0; k < 10; k++ ){
            newsId++;
            var news = makeNewsObject( newsId ); 
            var newsToSave = new db.News( news );
            newsToSave.save();
            liga.news.push( newsToSave );
    }
    liga.save();
});

return cb();

};


module.exports = { seed  : seed };

