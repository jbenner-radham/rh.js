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

                    },

                    left: function() {

                        var i, len = selector.length - 1;

                        for (i = 0; selector[i] === ' '; ++i);

                        return selector.slice(i);

                    }

                };
                
                // aliases for trim{}...
                this.trimR = function() { return this.trim.right() };
                this.trimL = function() { return this.trim.left() };

                this.word = {

                    last: function() {
                    
                        var i, str = _methodSelf.trim.right();

                        // Added a safety to handle if the string doesn't have a space.
                        for (i = str.length - 1; str[i] !== ' ' && i > 0; --i);

                        // The accompanying ternary statement for the no space scenario.
                        return str.slice(i? ++i : 0);

                    },

                    spaceCaps: function() {

                        var str = _methodSelf.trim.left(), rtrnStr = '';

                        for (var i = 0, len = str.length; i < len; ++i) {

                            rtrnStr += (_self(str[i]).isUC() && i !== 0? ' ' : '') + str[i];

                        }

                        return rtrnStr;

                    }

                };

                // aliases for word{}...
                this.wordLast = function() { return this.word.last() };
                this.automagicSpaces = function() { return this.word.spaceCaps() }

                this.character = {

                    init: function() {

                        // _methodSelf.character.special.is()) << This doesn't work because it goes on a recursive loop, duh me!
                        if (!isNaN(selector) || '~`!#$%^&*+=-[]\\\';,/{}|":<>?'.indexOf(selector) !== -1)
                            return false;

                        return selector.length === 1? selector : selector[0];

                    },

                    upper: {

                        is: function() {

                            var c = _methodSelf.character.init();

                            return c && c === c.toUpperCase();

                        }

                    },

                    lower: {

                        is: function() {

                            var c = _methodSelf.character.init();

                            return c && c === c.toLowerCase();

                        }

                    },

                    special: {

                        is: function() {
                            
                            var c = _methodSelf.character.init();

                            if (!c) return false;
                            
                            return '~`!#$%^&*+=-[]\\\';,/{}|":<>?'.indexOf(c) !== -1;

                        }

                    }

                };

                this.isUC = function() { return this.character.upper.is() }

                this.isLC = function() { return this.character.lower.is() }

                this.isSpc = function() { return this.character.special.is() }

            }

        } // End of string methods.
        
        return this;

    };

    return _self;

})();