xmlRequest = (page, callbackFunc, asynchronous, sendStr, httpMethod) ->  
  sendStr = sendStr or null
  httpMethod = httpMethod or 'GET'
  asynchronous = asynchronous or true
  request = new XMLHttpRequest()
  request.open httpMethod, page, asynchronous  
  request.send sendStr
  return request