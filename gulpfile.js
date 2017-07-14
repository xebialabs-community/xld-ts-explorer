var gulp = require('gulp');
var pluginDest = 'src/main/resources/web/xld-ts-explorer';

var typeSystemJs = 'node_modules/ts-explorer/bundledOutputs/typeSystem.js';

gulp.task('copy', function () {
    gulp
        .src(typeSystemJs)
        .pipe(gulp.dest(pluginDest + '/bundledOutputs'));

    gulp
        .src(['node_modules/ts-explorer/bundledOutputs/**', '!' + typeSystemJs])
        .pipe(gulp.dest(pluginDest));

});