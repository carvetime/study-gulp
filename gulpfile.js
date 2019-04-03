

// gulpfile.js
var gulp = require('gulp');
var connect = require('gulp-connect');


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
   gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp)).pipe(connect.reload());
   done()
});

gulp.task('css', function (done) {
    gulp.src(paths.srcCSS).pipe(gulp.dest(paths.tmp)).pipe(connect.reload());
    done()
});

gulp.task('js', function (done) {
    gulp.src(paths.srcJS).pipe(gulp.dest(paths.tmp)).pipe(connect.reload());
    done()
});

gulp.task('watch',function(done){
  gulp.watch(paths.srcHTML,gulp.series('html'))
  gulp.watch(paths.srcCSS,gulp.series('css'))
  gulp.watch(paths.srcJS,gulp.series('js'))
  console.log('files changing ...')
  done()
})

gulp.task('connect',function(done){
  connect.server({
    livereload:true
  });
  done()
})


gulp.task('default',gulp.series(['html','css','js','watch','connect']));


