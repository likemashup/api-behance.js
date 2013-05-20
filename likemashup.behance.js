;(function($, window, document, undefined) {
	'use strict';

    $.lm_behance = {};

    var jsonpGET = function (path, args) {
        $.ajax({
            type: 'GET',
            url: ' http://www.behance.net/v2' + path + "?api_key=gPVGVtNKZxWBqYZbM4jF37ionx4ugsmN",
            data: args[1] || {},
            success: function (data) {
                if (typeof (data) === 'undefined') {
                    args[0]({error: true});
                }
                else {
                    args[0](data);
                }
            }
        });
    };

    var methods = {
        'getUserAppreciations': 		'/users/$/appreciations',
        'getProject':                   '/projects/$/',
    };


    var createAPIMethod = function (urlPattern) {
        return function () {
            var // Convert arguments to a real Array
                args = [].slice.call(arguments),


                // We run shift() on args here because we don't need to send
                // the first argument to jsonpGET.
                url = urlPattern.replace('$', args.shift());

            jsonpGET(url, args);
        };
    };

    for (var method in methods) {
        $.lm_behance[method] = createAPIMethod(methods[method]);
    }	

})(jQuery, window , document);