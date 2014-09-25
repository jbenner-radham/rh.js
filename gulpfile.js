'use strict';

var $          = require('gulp-load-plugins')();
var browserify = require('browserify');
var esnext     = require('esnext');
var gulp       = require('gulp');
var path       = require('path');
var source     = require('vinyl-source-stream');
var through    = require('through');

gulp.task('browserify', function () {
    return browserify('./src/rh.js', { debug: true })
        .transform(function (file) {
            var data = '';
            return through(write, end);

            function write(buf) {
                data += buf;
            }

            function end() {
                this.queue(esnext.compile(data).code);
                this.queue(null);
            }
        })
        .bundle()
        .pipe(source('./rh.js'))
        .pipe(gulp.dest('dist/'));
});
