<<<<<<< HEAD
=======
<script type="application/javascript">

>>>>>>> 056f4eb74bb60706163cf425690e70ba204fb4cb
var RH_DOM = function(eleType) {
    'use strict';
    var _id = 'RH_DOM_ele_' + Math.random();
    var _idH = false;
    this._eleType = eleType || false;

    if (this.eleType !== false) {
        var domEle = document.createElement(eleType);
        var txtNde = document.createTextNode('Oh hai world!');
        domEle.setAttribute('id', _id);
        domEle.appendChild(txtNde);
        document.getElementById('wrapper').appendChild(domEle);
        _idH = document.getElementById(_id);
    }

    var _attrib = function(type, str) {
        _idH.setAttribute(type, str);
    };

    this.class = function(classStr) {
<<<<<<< HEAD
		_attrib('class', classStr);
=======
    	_attrib('class', classStr);
>>>>>>> 056f4eb74bb60706163cf425690e70ba204fb4cb
	};

	this.name = function(nameStr) {
		_attrib('name', nameStr);
	};

	// _idH.nodeName; property returns DOM element type in uppercase e.g. <div> is "DIV".
};

// I had to remove the prototypes because they can't access the private elements.
/*
RH_DOM.prototype.name = function(nmeStr) {
	_idH.setAttribute('name', nmeStr);
};

RH_DOM.prototype.class = function(classStr) {
	_idH.setAttribute('class', classStr);
	console.log(this.test);
	if (this.test == 'topsecretz') console.log('yayz');
};
*/

// Yay!!!
<<<<<<< HEAD
// _idH.getAttribute(); to get various attribute values.
=======
// _idH.getAttribute(); to get various attribute values.

</script>

<style type="text/css">
.blue { background-color: blue; }
.yellow { background-color: yellow; }
</style>

<div id="wrapper">

<script type="application/javascript">
	var div = new RH_DOM('div');
</script>

</div>
>>>>>>> 056f4eb74bb60706163cf425690e70ba204fb4cb
