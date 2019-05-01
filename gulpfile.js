
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jsFiles = ['*.js', 'src/**/*.js'];
var jscs = require('gulp-jscs'); 

gulp.task('style', function(){
    console.log("what the fuck");
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish, { verbost:true}'))
        .pipe(jscs());
});

