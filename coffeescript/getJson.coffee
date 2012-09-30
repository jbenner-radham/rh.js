getJson = (page, callbackFunc, sendStr, httpMethod) ->  
  sendStr = sendStr or null
  httpMethod = httpMethod or 'GET'
  request = new XMLHttpRequest()
  request.open httpMethod, page, true  
  request.send sendStr
  request.onreadystatechange = ->
    if request.readyState is 4 and request.status is 200
      callbackFunc JSON.parse request.responseText

cbJson = (returnJson) ->
  for x of returnJson
    console.log returnJson[x]

getJson 'echo.php', cbJson  