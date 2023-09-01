var gulp = require("gulp");
var fancy_log = require("fancy-log");
var connect = require('gulp-connect');
var cssPaths = [
  'src/**/*.css'
];
var paths = {
  pages: ["src/*.html"],
};



// gulp.task("copy-html", function () {
//   return gulp.src(paths.pages).pipe(gulp.dest("dist"));
// });


gulp.task('connect', function(done) {
  connect.server({
    root: '.',
    host: 'localhost',
    port: 3000,
  
  });
  done()
});


gulp.task("default", gulp.series(gulp.parallel('connect'), ));
