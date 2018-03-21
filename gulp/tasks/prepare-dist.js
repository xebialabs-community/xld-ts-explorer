import gulp from 'gulp';

gulp.task('prepare-dist', gulp.series('clean', 'copy', 'generate-xl-ui-plugin'));