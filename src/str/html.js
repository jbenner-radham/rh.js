      this.html = {

        elements: {

          // Array of void elements 
          // a.k.a. informally "self-closing tags."
          arVoid: [
              'area',
              'base',
              'br',
              'col',
              'command',
              'emed',
              'hr',
              'img',
              'input',
              'keygen',
              'link',
              'meta',
              'param',
              'source',
              'track',
              'wbr'
          ]

        },

        tag: {

          builder: function(objAttribs) {
              
            var html    = '<',
                notVoid = objAttribs.name && !(objAttribs.name in _parent.html.elements.arVoid)? objAttribs.name : false 

            objAttribs.name && (html += objAttribs.name)
                            && delete objAttribs.name 
                            && (html += _self(objAttribs).size() >= 1? ' ':'')

            for (var prop in objAttribs) {
                // .hasOwnProperty may be un-needed but just in case...
                if (objAttribs.hasOwnProperty(prop)) {
                    console.log(prop + ' - ' + objAttribs[prop]);
                    html += prop + '="' + objAttribs[prop] + '" '
                }
            }

            html = _self(html).trim.right();

            return html += (notVoid? ' /' : '</' + notVoid) + '>'
          }

        },

        link: {

          less: function() {
              
            return _parent.html.tag.builder({
              name: 'link',
              rel:  "stylesheet/less", 
              type: 'text/css',
              src:  selector + '.less'
            })

          } // psuedo-method - less

        } // object - link

      }; // parent object - html
      