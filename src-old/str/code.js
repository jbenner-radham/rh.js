      this.code = {

        brackets: {

          match: function() {

            // Synopsis:
            // Supply a string and return the matching end bracket.

            // To do: Handle nested brackets via the nested int/bool var.  

            var nested = false

            for (var i = 0, len = selector.length; i < len; ++i)
              if (selector[i] === '}')
                if (!nested)
                  return i

            //_parent.each(function(c) {
            //  var nested = false
            //  if (c === '}')
            //    if (!nested)
            //})

          }

        }

      },
      