var rhXhr;

rhXhr = {
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
  xhrRequest: function(page, callbackFunc, asynchronous, sendStr, httpMethod, responseType) {
    var p, request;
    request = new this.xhr();
    p = this.params;
    request.open(this.params.httpMethod, this.params.page, this.params.asynchronous);
    request.send(this.params.sendStr);
    return request.onreadystatechange = function() {
      if (request.readyState === 4 && request.status === 200) {
        switch (p.responseType) {
          case "json":
            return p.callbackFunc(JSON.parse(request.responseText));
          case "text":
          case null:
            return p.callbackFunc(request.responseText);
        }
      }
    };
  },
  getText: function(page, callbackFunc, asynchronous, httpMethod) {
    var p;
    p = this.params;
    p.page = page || null;
    p.callbackFunc = callbackFunc || null;
    p.responseType = 'text';
    return this.xhrRequest();
  },
  getJson: function(page, callbackFunc, asynchronous, httpMethod) {
    var p;
    p = this.params;
    p.page = page || null;
    p.callbackFunc = callbackFunc || null;
    p.responseType = 'json';
    return this.xhrRequest();
  }
};

/*
var cbJson = function(returnJson) {
	console.log(returnJson);
	//for (var x in returnJson) {
	//	console.log(returnJson[x]);
	//}
};
*/
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

//rhXhr.getText('echo.php', cbJson);