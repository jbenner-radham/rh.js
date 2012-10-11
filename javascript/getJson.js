/*--------------------------------------------------------------------
This file is part of rh.js.

rh.js is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

rh.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with rh.js.  If not, see <http://www.gnu.org/licenses/>.
-------------------------------------------------------------------*/

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