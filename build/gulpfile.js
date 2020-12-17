'use strict';

var gulp = require( 'gulp' );
var postcss = require( 'gulp-postcss' );
var cssmin = require( 'gulp-cssmin' );
var autoprefixer = require( 'gulp-autoprefixer' );
// var sass = require( 'gulp-sass' );
var less = require( 'gulp-less' );
var sourcemaps = require('gulp-sourcemaps');
var salad = require( 'postcss-salad' )( require( './salad.config.json' ) );
var header = require('gulp-header');
var pkg = require( '../package.json' );
// 公共的 banner
const banner = require( './banner' )(true);

gulp.task( 'compile', function() {
  gulp.src( '../wkheader/**/*.less' )
      .pipe( less() )
      .pipe( autoprefixer( { browsers: salad.browsers, cascade: false } ) )
      .pipe( postcss( [ salad ] ) ).pipe( cssmin() )
      .pipe(header( banner ))
      .pipe(sourcemaps.write('../dist/'))
      .pipe( gulp.dest( '../dist/' ) );
} );

gulp.task( 'default', [ 'compile' ] );
