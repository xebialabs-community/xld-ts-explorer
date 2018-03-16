var gulp = require('gulp');
var pluginDest = 'src/main/resources/web/xld-ts-explorer';
var libDist = 'node_modules/type-system-explorer/dist/**';

require('gulp-release-it')(gulp);

gulp.task('copy', function () {
    gulp
        .src(libDist)
        .pipe(gulp.dest(pluginDest));

});