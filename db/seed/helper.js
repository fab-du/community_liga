'use strict';

var mersenne = require('../../mersenne');
var faker  = require('faker');

var api = {};

api.random = function (options) {

    if (typeof options === "number") {
      options = {
        max: options
      };
    }

    options = options || {};

    if (typeof options.min === "undefined") {
      options.min = 0;
    }

    if (typeof options.max === "undefined") {
      options.max = 99999;
    }
    if (typeof options.precision === "undefined") {
      options.precision = 1;
    }

    // Make the range inclusive of the max value
    var max = options.max;
    if (max >= 0) {
      max += options.precision;
    }

    var randomNumber = options.precision * Math.floor(
      mersenne.rand(max / options.precision, options.min / options.precision));

    return randomNumber;
  }


api.address = function(){
    var address = {};

    address.strasse = faker.address.streetName();
    address.nummer  = api.random( { max : 1000 , min : 1});
    address.plz     = api.random( {max : 9000 , min : 1000});
    address.stadt   = faker.address.city();

    return address;
}



module.exports  = api;
