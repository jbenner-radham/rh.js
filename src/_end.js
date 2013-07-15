
  return _self;
})();

RH.getJson = function(jsonUri, cbFn) {

    var request = new XMLHttpRequest();

    request.overrideMimeType('application/json');
    request.open('GET', jsonUri, true);
    request.send(null);
    
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200)
            return cbFn(JSON.parse(request.responseText));
    };
};