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

    // Maybe change "getJson" to auto include ".json" since it's implicite...
    rhXhr.getJson('./js/json/js.json', function(json) {
        console.debug(RH(json).get('for')['synopsis'])
        /*
        for (obj in json) {
            console.log(json[obj])
        }
        */
        //console.debug(RH(json).get('statements'));
        //for (var objStmt in RH(json).get('statements')['for']) {
        //  console.debug(objStmt);
        //}
        //for (var obj in json)
        //  console.log(obj);
    });