    if (typeof selector === 'string') {

      if (['#', '.'].indexOf(selector[0]) !== -1)
        return document.querySelector(selector)

      var _parent = this;
  