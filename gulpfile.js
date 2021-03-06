

// gulpfile.js
var gulp = require('gulp');

var paths = {
  src: 'src/**/*',
  srcHTML: 'src/**/*.html',
  srcCSS: 'src/**/*.css',
  srcJS: 'src/**/*.js',
  tmp: 'tmp',
  tmpIndex: 'tmp/index.html',
  tmpCSS: 'tmp/**/*.css',
  tmpJS: 'tmp/**/*.js',
  dist: 'dist',
  distIndex: 'dist/index.html',
  distCSS: 'dist/**/*.css',
  distJS: 'dist/**/*.js'
};

gulp.task('html', function () {
  return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp));
});

gulp.task('css', function () {
    return gulp.src(paths.srcCSS).pipe(gulp.dest(paths.tmp));
});

gulp.task('js', function () {
    return gulp.src(paths.srcJS).pipe(gulp.dest(paths.tmp));
});

gulp.task('copy',gulp.series(['html','css','js'],function(){
    console.log('copy complete')
}));


