rhDom =
  domPurgeChildren = (domElement) ->
    while domElement.childNodes.length >= 1
      domElement.removeChild domElement.firstChild