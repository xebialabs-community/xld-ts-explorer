import gulp from 'gulp';

const libDist = 'node_modules/type-system-explorer/dist/**';
const pluginDest = 'src/main/resources/web/xld-ts-explorer';

gulp.task('copy', () =>
    gulp
        .src(libDist)
        .pipe(gulp.dest(pluginDest))
);