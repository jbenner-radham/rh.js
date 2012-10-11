/*--------------------------------------------------------------------
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
-------------------------------------------------------------------*/

var RH = {};

RH.countChrs = function(varchar_str, display_id) {
    var displayID = document.getElementById(display_id);
	while (displayID.childNodes.length >= 1) {
		displayID.removeChild(displayID.firstChild);
	}
	displayID.appendChild(displayID.ownerDocument.createTextNode(varchar_str.length));
};

RH.pwEntropy = function(varchar_str, display_id) {
	var keyID = event.keyCode;
	var displayID = document.getElementById(display_id);
	while (displayID.childNodes.length >= 1) {
		displayID.removeChild(displayID.firstChild);
	}
	var i = 0;
	var test_char = varchar_str.slice(i);
	var spec_char = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
	var re_lower = /[a-z]/;
	var re_upper = /[A-Z]/;
	if ((keyID == 8) || (keyID == 46)) {
		// Don't do anything for backspace(8) or delete(46)...
	} else if (parseInt(test_char) >= 0) {
		displayID.appendChild(displayID.ownerDocument.createTextNode('Is numeric.'));
	} else if (re_lower.test(test_char)) {
		displayID.appendChild(displayID.ownerDocument.createTextNode('Is lowercase Latin char.'));
	} else if (re_upper.test(test_char)) {
		displayID.appendChild(displayID.ownerDocument.createTextNode('Is uppercase Latin char.'));
	} else if (test_char.indexOf(spec_char)) {
		displayID.appendChild(displayID.ownerDocument.createTextNode('Is a special char.'));
	}
	if (varchar_str.length == 1) {
		displayID.appendChild(displayID.ownerDocument.createTextNode(" " + varchar_str.length + " char long."));
	} else if (varchar_str.length > 1) {
		displayID.appendChild(displayID.ownerDocument.createTextNode(" " + varchar_str.length + " chars long."));
	}	
};