'use strict';

/**
 * @ngdoc service
 * @name publicApp.Rest
 * @description
 * # Rest
 * Factory in the publicApp.
 */
angular.module('bundesLigaApp')

.factory('Rest', ['$resource', function ( $resource ) {

    
var api = {};
var liga = 
{
    url : '/liga/:ligaId',
    actions : {
        'find'    : { method : 'GET', isArray : true },
        'findOne' : { method : 'GET', params : { ligaId : '@ligaId' }, isArray : true },
        'clubs'   : { method : 'GET', params : { ligaId : '@ligaId', populate : 'clubs', select : 'clubs' }, isArray : false },
        'news'    : { method : 'GET', params : { ligaId : '@ligaId',  populate : 'news', select:'news' }, isArray : false },
        'spiele'  : { method : 'GET', params : { ligaId : '@ligaId' }, query : {populate : 'spiele' }, isArray : true },
        'spieltage': { method :'GET', params : { ligaId : '@ligaId', populate : 'spielTage', select : 'spielTage' }, isArray : false }
    }
};

var club = 
{
    url : '/clubs/:clubId',
    actions : {
        'find'    : { method : 'GET', isArray : true, params : { sort : 'spiele' } },
        'findOne' : { method : 'GET', params : { clubId : '@clubId'  }, isArray : true },
        'news'    : { method : 'GET', params : { clubId : '@clubId', populate : 'news', select:'news' }, isArray : false },
        'players' : { method : 'GET', params : { clubId : '@clubId', populate : 'players', populate: 'person', select:'players' }, isArray : false },
        'spiele'  : { method : 'GET', params : { clubId : '@clubId', populate : 'spiele', select : 'spiele' }, isArray: false }
    }
};

var player = 
{
    url : '/players/:playerId',
    actions : {
        'find'    : { method : 'GET', query :{ playerId : '@playerId', populate : 'person' } },
        'findOne' : { method : 'GET', params : { playerId : '@playerId', populate : 'person'} },
        'news'    : { method : 'GET', params : { playerId : '@playerId' }, query : {populate : 'news,clubs' }, isArray : true }

    }
};


var news = 
{
    url : '/news/:newsId',
    actions : {
        'find'    : { method : 'GET', isArray : true, query :{ populate : 'liga' } },
        'clubs'   : { method : 'GET', params : { newsId : '@newsId'  }, query :{ populate : 'clubs' }, isArray : true }, 
        'club'    : {  method : 'GET', params : { newsId : '@newsId'  }, query :{ populate : 'clubs', select :'@clubId' }, isArray : true },
        'players'   : { method : 'GET', params : { newsId : '@newsId'  }, query :{ populate : 'players' }, isArray : true }, 
        'player'   : {  method : 'GET', params : { newsId : '@newsId'  }, query :{ populate : 'players', select : '@playerId' }, isArray : true } 
    }
};

var spiele = 
{
    url : '/spiele/:spielId',
    actions : {
        'find'    : { method : 'GET', isArray : true, query :{ populate : 'liga' } },
        'findOne'    : { method : 'GET', isArray : true, query :{ populate : 'liga' } }
    }
};


var spieltage = 
{
    url : '/spieltage/:spieltagId',
    actions : {
        'find'    : { method : 'GET', isArray : true, query :{ populate : 'liga' } },
        'findOne'    : { method : 'GET', isArray : true, query :{ populate : 'liga' } }

    }
};

function _resource( res ){
    return $resource( res.url , { },  res.actions, {} );
}

api.liga = function(){
    return _resource( liga );
};

api.club = function(){
    return _resource( club );
};

api.player = function(){
    return _resource( player );
};

api.news = function(){
    return _resource( news );
};

api.spiele = function(){
    return _resource( spiele );
};

api.spieltage = function(){
    return _resource( spieltage );
};

var _api = { }
_api.Club = api.club();
_api.Player = api.player();
_api.Spiele = api.spiele();
_api.News = api.news();
_api.Liga = api.liga();
_api.SpielTage = api.spieltage();

return _api;

}]);
