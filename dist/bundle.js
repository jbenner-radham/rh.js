(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./xhr/xhr.js');

console.log('YOLO!');

},{"./xhr/xhr.js":2}],2:[function(require,module,exports){
'use strict';

// var RH  = RH || {};
// var xhr = {};

// xhr.request = (uri, callbackFn, params) => {
module.exports.request = function(uri, callbackFn, params) {
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

    return request.onreadystatechange = function() {

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

// module.exports = xhr;

},{}]},{},[1]);
