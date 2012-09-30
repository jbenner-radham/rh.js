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