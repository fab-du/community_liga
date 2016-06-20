'use strict';

var async = require('async');


var task =
[
    require('./liga').seed,
    require('./clubs').seed,
    require('./person').seed,
    require('./goals').seed,
    require('./player').seed,
    require('./spieltag').seed,
    require('./spiel').seed,
    require('./news').seed
];


async.series( task );
