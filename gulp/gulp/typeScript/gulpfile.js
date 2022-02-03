const {series} = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig1.json')

function tranformacaoJS(){
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}


module.exports.default = series(tranformacaoJS)