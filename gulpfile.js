var gulp = require('gulp'), // required node package
    uglify = require('gulp-uglify'), // requiring gulp uglify
    sass = require('gulp-ruby-sass');


// Scripts Task
// Uglifies
// gulp.task('scripts', function() {
//     gulp.src('js/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('minjs'));
// });



gulp.task('styles', function() {
    return sass('src/scss/main.scss', {
      style: 'expanded'
    })
    .pipe(gulp.dest('src/css'));
});


// Watch Task
// watches js
gulp.task('watch', function() {
    //gulp.watch('js/*.js', ['scripts']);
    gulp.watch('src/scss/**/*.scss', ['styles']);
});



gulp.task('default', ['scripts', 'styles', 'watch']);

