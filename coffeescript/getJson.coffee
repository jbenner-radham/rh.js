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
  request.open params['httpMethod'], params['page'], params['asynchronous']
  request.send params['sendStr']
  request.onreadystatechange = ->
    if request.readyState is 4 and request.status is 200
      #callbackFunc JSON.parse request.responseText
      switch params['responseType']
        when 'json'
          callbackFunc JSON.parse request.responseText
        when 'text', null
          callbackFunc request.responseText
      

getJson = (page, callbackFunc, asynchronous, sendStr, httpMethod) ->  
  getXmlRequest(page, callbackFunc, asynchronous, sendStr, httpMethod, 'json')

callbackJson = (returnJson) ->
  if typeof returnJson is 'object'
    for x of returnJson
      console.log returnJson[x]
  else if typeof returnJson is 'string'
    console.log returnJson

getJson 'echo.php', callbackJson
#params = xmlRequestParams()
#for k, v of params
#  console.log k + ' ' + v