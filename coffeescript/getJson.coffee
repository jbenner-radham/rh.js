###-------------------------------------------------------------------
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
------------------------------------------------------------------###

rhXhr =
  xhr: ->
    new XMLHttpRequest()

  params:
    page: null
    callbackFunc: null
    asynchronous: true
    sendStr: null
    httpMethod: 'GET'
    responseType: null

  xhrRequest: (page, callbackFunc, asynchronous, sendStr, httpMethod, responseType) ->
    request = new @xhr()
    p = @params
    request.open @params.httpMethod, @params.page, @params.asynchronous
    request.send @params.sendStr
    request.onreadystatechange = ->
      # @/this takes on a different value here since it's inside the onreadystatechange method.
      if request.readyState is 4 and request.status is 200
        switch p.responseType
          when "json"
            p.callbackFunc JSON.parse(request.responseText)
          when "text", null
            p.callbackFunc request.responseText

  getText: (page, callbackFunc, asynchronous, httpMethod) ->
    p = @params
    p.page = page or null
    p.callbackFunc = callbackFunc or null
    p.responseType = 'text'
    @xhrRequest()

  getJson: (page, callbackFunc, asynchronous, httpMethod) ->
    p = @params
    p.page = page or null
    p.callbackFunc = callbackFunc or null
    p.responseType = 'json'
    @xhrRequest()

###
domPurgeChildren = (domElement) ->
  while domElement.childNodes.length >= 1
    domElement.removeChild domElement.firstChild
###

# Test functions...
#getJson 'echo.php', callbackResponse
#getText 'echo.php', callbackResponse