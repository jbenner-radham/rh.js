    if (typeof selector === 'string') {

      if (selector[0] === '#') return document.getElementById(selector.slice(1))

      var _parent = this;
  