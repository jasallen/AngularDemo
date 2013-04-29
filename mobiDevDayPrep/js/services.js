angular.module('HN_Reddit_Mashup.Services', [])
    .factory('HackerNews', function($http) {
        var HackerNewsCache = {};

        return {
            get: function(url) {
                return HackerNewsCache[url] || 
                ( HackerNewsCache[url] = $http.jsonp("http://api.thriftdb.com/api.hnsearch.com/items/_search?q=" + url + "&callback=JSON_CALLBACK") );
            },            
        };
    })
