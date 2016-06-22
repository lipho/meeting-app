var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    gutil = require('gulp-util');

var jsSrc = './app.js'

gulp.task('bundle', function() {
    'use strict';
    let newName = jsSrc.slice(0, -3);
    return browserify(jsSrc).bundle()
        .pipe(source(jsSrc))
        .pipe(gulp.dest('./js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(rename(newName+'.min.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./js'))
});

gulp.task('watch', function() {
    gulp.watch('app.js', ['bundle'])
})

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true,
            path: '/'
        }));
});

gulp.task('default', ['bundle', 'webserver', 'watch']);