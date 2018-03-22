import gulp from 'gulp';
import rimraf from 'rimraf';
import {projectDir} from '../utils/paths';

gulp.task('clean', (cb) => rimraf(`${projectDir}/src/main/resources/web`, cb));