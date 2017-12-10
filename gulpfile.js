var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('js', ()=>{
    return gulp.src(['./dist/bundle.js'])
    .pipe(rename('bundle.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
});

gulp.task('default',['js'],(success)=>console.log('gulp build executed!'));