const {series} = require ('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const unglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function tranfCSS(){
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(unglifycss({"unglyComments": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
        
    }

function tranfHTML(){
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))

}

module.exports.default = series(tranfCSS, tranfHTML)