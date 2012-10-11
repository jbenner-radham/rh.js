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

rhDom =
  domPurgeChildren = (domElement) ->
    while domElement.childNodes.length >= 1
      domElement.removeChild domElement.firstChild