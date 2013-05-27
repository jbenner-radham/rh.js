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

mkStyle = (paramStr) ->
  head = document.getElementsByTagName('head')[0]
  styleEle = document.createElement 'style'
  styleEle.type = 'text/css'
  styleEle.media = 'screen'
  if styleEle.styleSheet ### IE method ###
    styleEle.styleSheet.cssText = paramStr
  else ### Other browsers ###
    styleEle.appendChild document.createTextNode paramStr
  head.appendChild styleEle

carousel = (imgId) ->
  rightPrior = parseInt imgId.style.right, 10 or 0
  console.log 'rightPrior is: ' + rightPrior
  if rightPrior < 90
    imgId.style.right = ++rightPrior + '%'
  else
    console.log 'Done'
    clearInterval window.intervalId

###
Call/Testing functions
----------------------
imgId = document.getElementById('theImg')
window.intervalId = setInterval carousel, 30, imgId
console.log 'IntervalId is: ' + intervalId
mkStyle 'h3{color:green}'
###