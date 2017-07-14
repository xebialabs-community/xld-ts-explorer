var gulp = require('gulp');
var destination = 'src/main/resources/web/xld-ts-explorer/bundledOutputs';

gulp.task('copy', function () {
    gulp
        .src('node_modules/ts-explorer/bundledOutputs/typeSystem.js')
        .pipe(gulp.dest(destination));

});