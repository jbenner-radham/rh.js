var RH = (function() {

    var RH = {}, _self = RH;

    _self = function(selector) {

        if (typeof selector === 'string') {

            if (selector[0] === '#') {

                return document.getElementById(selector.slice(1));
            
            } else {

                this.trimR = function() { 
                    
                    var i = selector.length - 1;

                    for (; selector[i] === ' '; --i);

                    return selector.slice(0, ++i);

                };

                this.wordLast = function() {
                    
                    var i, str = this.trimR();

                    // Added a safety to handle if the string doesn't have a space.
                    for (i = str.length - 1; str[i] !== ' ' && i > 0; --i);

                    // The accompanying ternary statement for the no space scenario.
                    return str.slice(i? ++i : 0);

                };

            }

        } // End of string methods.
        
        return this;

    };

    return _self;

})();