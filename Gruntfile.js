/*
        src: ['src/_start.js',
              'src/size.js',
              'src/string.js',
              'src/code.js',
              'src/character.js',
              'src/html.js',
              'src/object.js',
              'src/_end.js']
        dest: 'stuff.js'
*/
module.exports = function(grunt) {
  
  var rh = {
    files: []
  };

  [
    {
      dir: 'src',
      file: [
       '_start',
       'size',
       '_end'
      ]
    }
  ].forEach(function(obj) {
    for (var i in obj.file) {
      rh.files.push(obj.dir + '/' + obj.file[i] + '.js');
    }
  });

  grunt.initConfig({ 
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: rh.files,
        dest: 'awesome.js'
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  grunt.registerTask('default', ['concat']);

};