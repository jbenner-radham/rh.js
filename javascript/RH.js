var RH = (function() {

    var RH = {}, _self = RH;

    _self = function(selector) {

        if (typeof selector === 'string') {

            if (selector[0] === '#') {

                return document.getElementById(selector.slice(1));
            
            } else {

                var _methodSelf = this;

                this.trim = {

                    right: function() { 
                        
                        var i = selector.length - 1;

                        for (; selector[i] === ' '; --i);

                        return selector.slice(0, ++i);

                    }

                };
                
                // aliases for trim{}...
                this.trimR = function() { return this.trim.right() };

                this.word = {

                    last: function() {
                    
                        var i, str = _methodSelf.trim.right();

                        // Added a safety to handle if the string doesn't have a space.
                        for (i = str.length - 1; str[i] !== ' ' && i > 0; --i);

                        // The accompanying ternary statement for the no space scenario.
                        return str.slice(i? ++i : 0);

                    }

                };
                
                // aliases for word{}...
                this.wordLast = function() { return this.word.last() };

            }

        } // End of string methods.
        
        return this;

    };

    return _self;

})();