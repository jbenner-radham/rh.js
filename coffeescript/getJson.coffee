xmlRequest = ->
  return new XMLHttpRequest()

xmlRequestParams = (page, callbackFunc, asynchronous, sendStr, httpMethod, responseType) ->
  xmlParams =
    page: page or null
    callbackFunc: callbackFunc or null
    asynchronous: asynchronous or true
    sendStr: sendStr or null
    httpMethod: httpMethod or 'GET'
    responseType: responseType or null
  return xmlParams

getXmlRequest = (page, callbackFunc, asynchronous, sendStr, httpMethod, responseType) ->
  request = new xmlRequest()
  params = xmlRequestParams page, callbackFunc, asynchronous, sendStr, httpMethod, responseType 
  request.open params.httpMethod, params.page, params.asynchronous
  request.send params.sendStr
  request.onreadystatechange = ->
    if request.readyState is 4 and request.status is 200
      switch params.responseType
        when 'json'
          callbackFunc JSON.parse request.responseText
        when 'text', null
          callbackFunc request.responseText
          
getJson = (page, callbackFunc, asynchronous, sendStr, httpMethod) ->
  getXmlRequest page, callbackFunc, asynchronous, sendStr, httpMethod, 'json'

getText = (page, callbackFunc, asynchronous, sendStr, httpMethod) ->  
  getXmlRequest page, callbackFunc, asynchronous, sendStr, httpMethod, 'text'

callbackResponse = (requestReturn) ->
  switch typeof requestReturn
    when 'object'
      for x of requestReturn
        console.log requestReturn[x]
    when 'string'
      console.log requestReturn
      
domPurgeChildren = (domElement) ->
  while domElement.childNodes.length >= 1
    domElement.removeChild domElement.firstChild

# Test functions...
#getJson 'echo.php', callbackResponse
#getText 'echo.php', callbackResponse