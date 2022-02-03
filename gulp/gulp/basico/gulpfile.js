const gulp = require('gulp')
const {series, parallel} = require('gulp')
// const series =  gulp.series

const antes1 = cb =>{
    console.log('tarefa 2!')
    return cb()
}
const antes2 = cb =>{
    console.log('tarefa 3!')
    return cb()
}

function copiar(cb){
    gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB'))

    // gulp.src('pastaA/**/**.txt')
            // .pipe(gulp.dest('pastaB'))

    return cb()
}

const fim = cb =>{
    console.log('tarefa fim!')
    return cb()
}
module.exports.default = series(copiar, parallel(antes1, antes2), fim) 
