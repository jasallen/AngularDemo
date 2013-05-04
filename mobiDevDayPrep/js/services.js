angular.module('HN_Reddit_Mashup.Services', [])
    .factory('HackerNews', function($http) {
        var HackerNewsCache = {};
        var _current = {};
        return {
            get: function(url) {
                return HackerNewsCache[url] ||
                    (HackerNewsCache[url] = $http.jsonp("http://api.thriftdb.com/api.hnsearch.com/items/_search?q=" + url + "&callback=JSON_CALLBACK"));
            },
            set_current: function (s) { _current = s; },
            get_current: function () { return _current; }
        };
    })
