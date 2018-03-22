import gulp from 'gulp';
import {webDir} from '../utils/paths';

const libDist = 'node_modules/type-system-explorer/dist/**';

gulp.task('copy', () =>
    gulp
        .src(libDist)
        .pipe(gulp.dest(webDir))
);