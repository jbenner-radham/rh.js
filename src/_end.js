
    return _self;

})(); // SEAF - RH

RH.getJson = function(uri, cbFn) {

    var request = new XMLHttpRequest()

    request.overrideMimeType('application/json')
    request.open('GET', uri, true)
    request.send(null)
    
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200)
            return cbFn(JSON.parse(request.responseText))
    }

} // method - getJson

RH.getQueryString = function() {

    var query = decodeURIComponent(document.location.search),
        qsObj = {}

    // Checking if "query" is an empty string is technically
    // un-needed since the "query[0]" check appears to handle
    // it fine. However I put it in there because I'm paranoid.
    if (query === '' || query[0] !== '?') return null

    // Chop off the preceding "?" and explode the string. 
    query.slice(1).split('&').forEach(function(argv) {
        var getVar = argv.split('=')
        qsObj[getVar[0]] = getVar[1]
    })

    return qsObj

} // method - getQueryString