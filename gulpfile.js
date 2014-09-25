'use strict';

var $          = require('gulp-load-plugins')();
var browserify = require('browserify');
var esnext     = require('esnext');
var gulp       = require('gulp');
var path       = require('path');
var source     = require('vinyl-source-stream');
var through    = require('through');

gulp.task('browserify', function () {
    return browserify('./src/rh.js')
        .transform(function (bFile) {
            var tData = '';
            return through(write, end);

            function write(buf) {
                tData += buf;
            }

            function end() {
                this.queue(esnext.compile(tData).code);
                this.queue(null);
                //file.contents = new Buffer(esnext.compile(data).code);
                $.util.log(esnext.compile(tData).code.length);
            }
        })
        /*.on('bundle', function (bundle) {
            bundle.on('data', function (chunk) {
                if (!this.data) this.data = '';
                this.data += chunk;
        })
        .on('end', function () {
            $.util.log('Done: ', this.data)
            // file._contents = new Buffer(this.data);
        })*/
        .bundle()
        .pipe(source('./bundle.js'))
        .pipe(gulp.dest('dist/'));
});

/*
gulp.task('default', function() {
    return gulp.src('src/rh.js')
        .pipe($.esnext())
        .pipe($.tap(function (file) {
            // $.util.log(Object.getOwnPropertyNames(
            //     browserify(file, { cwd: file.cwd }).bundle()
            // ));

            $.util.log(file.cwd + '/src');

            var b = browserify(file, { basedir: file.cwd + '/src', debug: false });

            b.transform(function (bFile) {
                var tData = '';
                return through(write, end);

                function write(buf) {
                    tData += buf;
                }

                function end() {
                    this.queue(esnext.compile(tData).code);
                    this.queue(null);
                    //file.contents = new Buffer(esnext.compile(data).code);
                    $.util.log(esnext.compile(tData).code.length);
                }
            });

            //return b.bundle(); // .pipe(process.stdout);
            b.on('bundle', function (bundle) {
                bundle.on('data', function (chunk) {
                    if (!this.data) this.data = '';
                    this.data += chunk;
                });

                bundle.on('end', function () {
                    $.util.log('Done: ', this.data)
                    file._contents = new Buffer(this.data);
                });
                //$.util.log(bundle.toString());
            });

            b.bundle().pipe(source('./bundle.js'));




            // $.util.log(file.valueOf());

            //$.util.log(file.base);
            //$.util.log(file.path);
            //$.util.log(path.relative(file.cwd, file.path));

            // for (var i in file) {
            //     $.util.log(i);
            // };

            // $.util.log(Object.getOwnPropertyNames(file));
        }))
        .pipe(gulp.dest('dist'));
});
*/
