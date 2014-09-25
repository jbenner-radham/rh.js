(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var xhr = require('./xhr/xhr.js');

console.log(xhr.request('radioactivehamster.com'));

},{"./xhr/xhr.js":2}],2:[function(require,module,exports){
'use strict';

var xhr = {};

xhr.request = function(uri, callbackFn, params) {
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

module.exports = xhr;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lcy9Ecm9wYm94L0RvY3VtZW50cy9Db2RlL1Byb2plY3RzL3JhZGhhbS9yaC5qcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiLi9zcmMvcmguanMiLCIvVXNlcnMvamFtZXMvRHJvcGJveC9Eb2N1bWVudHMvQ29kZS9Qcm9qZWN0cy9yYWRoYW0vcmguanMvc3JjL3hoci94aHIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHhociA9IHJlcXVpcmUoJy4veGhyL3hoci5qcycpO1xuXG5jb25zb2xlLmxvZyh4aHIucmVxdWVzdCgncmFkaW9hY3RpdmVoYW1zdGVyLmNvbScpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHhociA9IHt9O1xuXG54aHIucmVxdWVzdCA9IGZ1bmN0aW9uKHVyaSwgY2FsbGJhY2tGbiwgcGFyYW1zKSB7XG4gICAgaWYgKCF1cmkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgVVJJIGFyZ3VtZW50IGNhbm5vdCBiZSBibGFuayBvciB1bmRlZmluZWQuJyk7XG4gICAgfVxuXG4gICAgdmFyIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICAgIC8vIFNlbWFudGljIG9iamVjdCBsaXRlcmFscyBmb3IgSFRUUCBzdGF0dXMgY29kZXMgYW5kIHJlYWR5IHN0YXRlcy5cbiAgICB2YXIgaHR0cFN0YXR1c2VzID0ge1xuICAgICAgICAyMDA6ICdPSydcbiAgICB9O1xuXG4gICAgdmFyIHJlYWR5U3RhdGVzID0ge1xuICAgICAgICAwOiAnVU5TRU5UJyxcbiAgICAgICAgMTogJ09QRU5FRCcsXG4gICAgICAgIDI6ICdIRUFERVJTX1JFQ0VJVkVEJyxcbiAgICAgICAgMzogJ0xPQURJTkcnLFxuICAgICAgICA0OiAnRE9ORSdcbiAgICB9O1xuXG4gICAgLy8gRGVmYXVsdCBwYXJhbWV0ZXJzXG4gICAgdmFyIGFzeW5jaHJvbm91cyAgICA9ICdhc3luY2hyb251cycgaW4gcGFyYW1zICAgICA/IHBhcmFtcy5hc3luY2hyb25vdXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZTtcblxuICAgIHZhciBvdXRnb2luZ01lc3NhZ2UgPSAnb3V0Z29pbmdNZXNzYWdlJyBpbiBwYXJhbXMgPyBwYXJhbXMub3V0Z29pbmdNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRydWU7XG5cbiAgICB2YXIgaHR0cE1ldGhvZCAgICAgID0gJ2h0dHBNZXRob2QnIGluIHBhcmFtcyAgICAgID8gcGFyYW1zLmh0dHBNZXRob2RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ0dFVCc7XG5cbiAgICB2YXIgcmVzcG9uc2VUeXBlICAgID0gJ3Jlc3BvbnNlVHlwZScgaW4gcGFyYW1zICAgID8gcGFyYW1zLnJlc3BvbnNlVHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndGV4dCc7XG5cbiAgICB2YXIgY2FsbGJhY2tGbiAgICAgID0gY2FsbGJhY2tGbiB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICB2YXIgcmVxdWVzdCAgICAgICAgID0gbmV3IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgcmVxdWVzdC5vcGVuKGh0dHBNZXRob2QsIHVyaSwgYXN5bmNocm9ub3VzKTtcbiAgICByZXF1ZXN0LnNlbmQob3V0Z29pbmdNZXNzYWdlKTtcblxuICAgIHJldHVybiByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgaW4gcmVhZHlTdGF0ZXMpXG4gICAgICAgICAgICB2YXIgcmVhZHlTdGF0ZSA9IHJlYWR5U3RhdGVzW3JlcXVlc3QucmVhZHlTdGF0ZV07XG5cbiAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzIGluIGh0dHBTdGF0dXNlcylcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSBodHRwU3RhdHVzZXNbcmVxdWVzdC5zdGF0dXNdO1xuXG4gICAgICAgIGlmICghcmVhZHlTdGF0ZSB8fCAhc3RhdHVzKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGlmIChyZWFkeVN0YXRlID09PSAnRE9ORScgJiYgc3RhdHVzID09PSAnT0snKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VNZXNzYWdlID0gcmVxdWVzdC5yZXNwb25zZVRleHQ7XG5cbiAgICAgICAgICAgIHN3aXRjaCAocmVzcG9uc2VUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnanNvbic6XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2VNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIHBhcnNlIEpTT04gcmVzcG9uc2UgbWVzc2FnZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2tGbihqc29uKTtcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFja0ZuKHJlc3BvbnNlTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0geGhyO1xuIl19
