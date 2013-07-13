module.exports = function(grunt) {
  
  var rh = {
    files: []
  };

  [
    {
      dir: 'src',
      file: ['_start']
    },
    {
      dir: 'src',
      file: ['size']
    },
    {
      dir: 'src/str',
      file: [
       '_start',
       'character',
       'code',
       'html',
       'trim',
       'word',
       '_end'
      ]
    },
    {
      dir: 'src/object',
      file: ['_start']
    },
    {
      dir: 'src',
      file: ['_end']
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