var rhXhr = {
    
    xhr: function() {
		return new XMLHttpRequest();
	},
    
    params: {
        page: null,
        callbackFunc: null,
        asynchronous: true,
        sendStr: null,
        httpMethod: 'GET',
        responseType: null
    },
	
    /* xhrParams is depricated, will be removed. */
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
		var request = new this.xhr();
		var params = this.params;
        request.open(params.httpMethod, params.page, params.asynchronous);
        request.send(params.sendStr);
        return request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status === 200) {
                switch (params.responseType) {
                    case 'json':
                        return params.callbackFunc(JSON.parse(request.responseText));
                    case 'text':
                    case null:
                        return params.callbackFunc(request.responseText);
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
		this.params.page = page || null;
		this.params.callbackFunc = callbackFunc || null;
		this.params.responseType = 'text';
		this.xhrRequest();
	},
	
	getJson: function(page, callbackFunc, asynchronous, sendStr, httpMethod) {
		this.xhrRequest(page, callbackFunc, asynchronous, sendStr, httpMethod, 'json');
	}

};

var cbJson = function(returnJson) {
	console.log(returnJson);
	//for (var x in returnJson) {
	//	console.log(returnJson[x]);
	//}
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

rhXhr.getText('echo.php', cbJson);