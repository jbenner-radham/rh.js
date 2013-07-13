    else if (typeof selector === 'object') {

      this.get = function(search) {
          
        // If no search term is submitted bail out.
        if (!search) return false
          
        // If the search object is in the first dimension
        // return that dim immediately.
        if (search in selector) return selector[search]
          
          // Now try searching the second dimension... (Pigs) in space!!!
          for (var obj in selector)
            for (var key in selector[obj])
              if (selector[obj].hasOwnProperty(key) && key == search)
                return selector[obj][key] // <- Value
          
      } // psuedo-method - get

    } // End of object methods.

    return this;
  } // End of object methods.
  