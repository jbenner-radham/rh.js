    // Random object size function...
    this.size = function() {
        
      var size = 0,
          obj  = selector;
      
      for (var prop in obj) obj.hasOwnProperty(prop) && ++size;

      return size;
    }; // size
    