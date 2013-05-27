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
		_attrib('class', classStr);
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
// _idH.getAttribute(); to get various attribute values.