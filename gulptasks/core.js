/**
 * Created by labutineg on 12.01.2015.
 *
 */
/*jslint node: true*/
/* global require */

(function () {
    'use strict';

    // Include gulp
    var gulp = require('gulp');

    var minifyCSS = require('gulp-minify-css');
    var replace = require('gulp-replace');
    var rename = require('gulp-rename');
    var uglify = require('gulp-uglify');
    var concat = require('gulp-concat');
    var less = require('gulp-less');
    var htmlmin = require('gulp-minify-html');

    // Minification

    gulp.task('Core-min-Angular-JS', function () {

        var pathToJS = [
            'node_modules/angular/angular.js',
            'node_modules/angular-animate/angular-animate.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/angular-sanitize/angular-sanitize.js',
            'node_modules/ng-flow/dist/ng-flow-standalone.js',
            'node_modules/ng-table/dist/ng-table.min.js',
            'node_modules/angular-ui-grid/ui-grid.js',
            'node_modules/restangular/dist/restangular.js'

        ];

        return gulp.src(pathToJS)
            .pipe(concat('angular-animate-route-sanitize.min.js'))
            .pipe(uglify({mangle: false}))
            .pipe(gulp.dest('dist/core/scripts/'));
    });

    gulp.task('Core-min-Bootstrap-LESS', function () {

        var pathToLESS = [
            'node_modules/bootstrap/less/bootstrap.less'
        ];

        return gulp.src(pathToLESS)
            .pipe(concat('bootstrap.less'))
            .pipe(rename({suffix: '.min'}))
            .pipe(less())
            .pipe(replace('../fonts/', '../fonts/bootstrap/'))
            .pipe(minifyCSS({keepBreaks: false}))
            .pipe(gulp.dest('dist/core/content/css/'));
    });

    gulp.task('Core-min-Bootstrap-JS', function () {

        var pathToJS = [
            'node_modules/bootstrap/dist/js/bootstrap.js',
            'node_modules/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js'
        ];

        return gulp.src(pathToJS)
            .pipe(concat('bootstrap.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist/core/scripts/'));
    });

    gulp.task('Core-min-Bootstrap-Fonts', function () {

        var pathFonts = 'node_modules/bootstrap/fonts/**/*.{otf,eot,ttf,woff,woff2,eof,svg}';

        return gulp.src(pathFonts)
            .pipe(gulp.dest('dist/core/content/fonts/bootstrap/'));
    });

    gulp.task('Core-min-AngularBootstrap-JS', function () {

        var pathToJS = [
            'node_modules/angular-bootstrap/template/**/*.js'
        ];

        return gulp.src(pathToJS)
            .pipe(uglify({mangle: false}))
            .pipe(gulp.dest('dist/core/scripts/ng.bootstrap-templates/'));
    });

    gulp.task('Core-min-AngularBootstrap-HTML', function () {

        var pathToHTML = [
            'node_modules/angular-bootstrap/template/**/*.html'
        ];

        return gulp.src(pathToHTML)
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest('dist/core/scripts/ng.bootstrap-templates/'));
    });

    gulp.task('Core-min-FontAwesome-CSS', function () {

        var pathToCSS = 'node_modules/font-awesome/css/font-awesome.css';

        return gulp.src(pathToCSS)
            .pipe(minifyCSS({keepBreaks: false}))
            .pipe(rename({suffix: '.min'}))
            .pipe(replace('../fonts/', '../../../core/content/fonts/font-awesome/'))
            .pipe(gulp.dest('dist/core/content/css/'));
    });

    gulp.task('Core-min-FontAwesome-Fonts', function () {

        var pathToFonts = 'node_modules/font-awesome/fonts/**/*.{otf,eot,ttf,woff,woff2,eof,svg}';

        return gulp.src(pathToFonts)
            .pipe(gulp.dest('dist/core/content/fonts/font-awesome/'));
    });

    gulp.task('Core-min-jQuery-JS', function () {

        var pathToJS = [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/howler/howler.js'
        ];

        return gulp.src(pathToJS)
            .pipe(concat('jquery.js'))
            .pipe(uglify())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('dist/core/scripts/'));
    });

    gulp.task('Core-min-Angular-UI-JS', function () {

        var pathToJS = [
            'node_modules/angular-ui-router/build/angular-ui-router.js',
            'node_modules/angular-ui-bootstrap/ui-bootstrap.min.js',
            'node_modules/angular-ui-bootstrap/ui-bootstrap-tpls.min.js'
        ];

        return gulp.src(pathToJS)
            .pipe(concat('angular-ui.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist/core/scripts/'));
    });

    gulp.task('Core-min-CoreJS-JS', function () {

        var pathToJS = [
            'node_modules/core-js/client/core.js'
        ];

        return gulp.src(pathToJS)
            .pipe(concat('corejs.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist/core/scripts/'));
    });

    gulp.task('core-min-libs-JS', function () {

        var pathToJS = [
            'node_modules/cropper/dist/cropper.js'
        ];

        return gulp.src(pathToJS)
            .pipe(concat('libs.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist/core/scripts/'));
    });

    gulp.task('core-min-libs-LESS', function () {


        var pathToLESS = ['node_modules/cropper/dist/cropper.css',
                         'node_modules/ng-table/dist/ng-table.less'];

        return gulp.src(pathToLESS)
            .pipe(concat('libs.less'))
            .pipe(rename({suffix: '.min'}))
            .pipe(less())
            .pipe(minifyCSS({keepBreaks: false}))
            .pipe(gulp.dest('dist/core/content/css/'));

    });

    gulp.task('Core-min-All', [
        'Core-min-Angular-JS',
        'Core-min-Bootstrap-Fonts',
        'Core-min-Bootstrap-JS',
        'Core-min-Bootstrap-LESS',
        'Core-min-FontAwesome-Fonts',
        'Core-min-FontAwesome-CSS',
        'Core-min-Angular-UI-JS',
        'Core-min-jQuery-JS',
        'Core-min-CoreJS-JS',
        'core-min-libs-JS',
        'core-min-libs-LESS'
    ]);

}());