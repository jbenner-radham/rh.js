var rhXhr = {
    
	xhr: function() {
		return new XMLHttpRequest();
	},
	
	xhrParams: function(page, callbackFunc, asynchronous, sendStr, httpMethod, responseType) {
		/*
		var _method = this.xhrParams;
		_method.page = page || null;
		_method.callbackFunc = callbackFunc || null;
		_method.asynchronous = asynchronous || true;
		_method.sendStr = sendStr || null;
		_method.httpMethod = httpMethod || 'GET';
		_method.responseType = responseType || null;
		*/
		var paramsObj = {
			page: page || null,
            callbackFunc: callbackFunc || null,
            asynchronous: asynchronous || true,
            sendStr: sendStr || null,
            httpMethod: httpMethod || 'GET',
            responseType: responseType || null
		};
		return paramsObj;
	},
	
	xhrRequest: function(page, callbackFunc, asynchronous, sendStr, httpMethod, responseType) {
		var params, request;
        request = new this.xhr();
		params = this.xhrParams(page, callbackFunc, asynchronous, sendStr, httpMethod, responseType);
        request.open(params.httpMethod, params.page, params.asynchronous);
        request.send(params.sendStr);
        return request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status === 200) {
                switch (params.responseType) {
                    case 'json':
                        return callbackFunc(JSON.parse(request.responseText));
                    case 'text':
                    case null:
                        return callbackFunc(request.responseText);
                }
            }
        };
    },
	
	test2: function() {
		console.log('test2');
	},

	testParams: function() {
		console.log(this.xhrParams.page);
	},
	
	getText: function(page, callbackFunc, asynchronous, sendStr, httpMethod) {
		this.xhrRequest(page, callbackFunc, asynchronous, sendStr, httpMethod, 'text');
	},
	
	getJson: function(page, callbackFunc, asynchronous, sendStr, httpMethod) {
		this.xhrRequest(page, callbackFunc, asynchronous, sendStr, httpMethod, 'json');
	}

};

var cbJson = function(returnJson) {
	//console.log(returnJson);
	for (var x in returnJson) {
		console.log(returnJson[x]);
	}
};

/*
for (var key in rhXhr) {
  // if the keys belongs to object and it is a function
  if (rhXhr.hasOwnProperty(key) && (typeof rhXhr[key] === 'function')) {
    console.log(key);
  }
}
*/
//rhXhr.xhrParams();
//rhXhr.testParams();

rhXhr.getJson('echo.php', cbJson);


/*
var getJSON = function(page, callbackFunc, sendStr, httpMethod) {
    sendStr = sendStr || null;
	httpMethod = httpMethod || 'GET';
	var request = new XMLHttpRequest();
	request.open(httpMethod, page, true);
	request.send(sendStr);
	request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            callbackFunc(JSON.parse(request.responseText));
        }
    };
};

var cbJson = function(returnJson) {
	for (var x in returnJson) {
		console.log(returnJson[x]);
	}
};

getJSON('echo.php', cbJson);
*/