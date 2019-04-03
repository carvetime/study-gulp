

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

gulp.task('html', function (done) {
  gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp));
  done();
});

gulp.task('css', function (done) {
    gulp.src(paths.srcCSS).pipe(gulp.dest(paths.tmp));
    done();
});

gulp.task('js', function (done) {
    gulp.src(paths.srcJS).pipe(gulp.dest(paths.tmp));
    done();
});

gulp.task('copy',gulp.series(['html','js','css'],function(done){
    console.log('------copy done---')
    done();
}))

gulp.task('watch',function(){
    gulp.watch(paths.srcHTML,gulp.series('html'))
    gulp.watch(paths.srcCSS,gulp.series('css'))
});


