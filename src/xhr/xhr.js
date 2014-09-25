'use strict';

var xhr = {};

xhr.request = (uri, callbackFn, params) => {
    if (!uri) {
        throw new Error('The URI argument cannot be blank or undefined.');
    }

    var params = params || {};

    // Semantic object literals for HTTP status codes and ready states.
    var httpStatuses = {
        200: 'OK'
    };

    var readyStates = {
        0: 'UNSENT',
        1: 'OPENED',
        2: 'HEADERS_RECEIVED',
        3: 'LOADING',
        4: 'DONE'
    };

    // Default parameters
    var asynchronous    = 'asynchronus' in params     ? params.asynchronous
                                                      : true;

    var outgoingMessage = 'outgoingMessage' in params ? params.outgoingMessage
                                                      : true;

    var httpMethod      = 'httpMethod' in params      ? params.httpMethod
                                                      : 'GET';

    var responseType    = 'responseType' in params    ? params.responseType
                                                      : 'text';

    var callbackFn      = callbackFn || function () {};
    var request         = new new XMLHttpRequest();

    request.open(httpMethod, uri, asynchronous);
    request.send(outgoingMessage);

    return request.onreadystatechange = () => {

        if (request.readyState in readyStates)
            var readyState = readyStates[request.readyState];

        if (request.status in httpStatuses)
            var status = httpStatuses[request.status];

        if (!readyState || !status)
            return;

        if (readyState === 'DONE' && status === 'OK') {
            var responseMessage = request.responseText;

            switch (responseType) {
                case 'json':
                    try {
                        var json = JSON.parse(responseMessage);
                    } catch (e) {
                        console.error('Unable to parse JSON response message');

                        return;
                    }

                    return callbackFn(json);

                default:
                    return callbackFn(responseMessage);
            }
        };
    };
};

module.exports = xhr;
