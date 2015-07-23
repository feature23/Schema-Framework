var gulp = require('gulp'),                                // required node package
    uglify = require('gulp-uglify'),                       // requiring gulp uglify
    sass = require('gulp-ruby-sass'),                      // requiring gulp autoprefixer
    connect = require('gulp-connect'),                     // requiring gulp connect
    postcss = require('postcss'),                          // requiring gulp postcss
    autoprefixer = require('gulp-autoprefixer');           // requiring gulp autoprefixer



// Styles Task
// Autoprefixes css, minifies, etc
gulp.task('styles', function() {
    return sass('src/scss/main.scss', {
        style: 'expanded'
    })
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(autoprefixer({
        browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9'],
        cascade: true
    }))
    .pipe(gulp.dest('src/css'));
});


 //Scripts Task
 //Uglifies
 gulp.task('scripts', function() {
     gulp.src('js/*.js')
     .pipe(uglify())
     .pipe(gulp.dest('minjs'));
 });


// Watch Task
// watches js
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('src/scss/**/*.scss', ['styles']);
});


// Starts the server localhost:8080
gulp.task('webserver', function() {
    connect.server();
});



gulp.task('default', ['scripts', 'styles', 'watch', 'webserver']);

