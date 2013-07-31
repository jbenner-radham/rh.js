function getQueryStringObj() {

  var query = document.location.search,
      qsObj = {}

  if (query[0] !== '?') return false

  query.slice(1).split('&').forEach(function(argv) {
    var getVar = argv.split('=')
    qsObj[getVar[0]] = getVar[1]
  })

  return qsObj
  
}
