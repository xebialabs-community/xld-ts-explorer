var gulp = require('gulp');
var fs = require('fs');
var pluginDest = 'src/main/resources/web/xld-ts-explorer';
var libDist = 'node_modules/type-system-explorer/dist/**';
var path = require('path');
var rimraf = require('rimraf');
var html = require("html-template-tag");
var intformat = require('biguint-format');
var FlakeId = require('flake-idgen');
var nextId = () => intformat(new FlakeId().next(), 'dec');
var projectDir = path.resolve(__dirname);

require('gulp-release-it')(gulp);

gulp.task('generate-xl-ui-plugin', function (cb) {
    var newFileContent = html`<plugin xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="http://www.xebialabs.com/deployit/ui-plugin"
    xsi:schemaLocation="http://www.xebialabs.com/deployit/ui-plugin xl-ui-plugin.xsd">
    <menu id="ts-explorer-plugin" label="TS" uri="xld-ts-explorer/index.html?${nextId()}" weight="20" />
</plugin>`;

    fs.writeFile(`${projectDir}/src/main/resources/xl-ui-plugin.xml`, newFileContent, function (err) {
        if (err) {
            throw err;
        }
        cb();
    });
});

gulp.task('clean', function (cb) {
    rimraf(`${projectDir}/src/main/resources/web/xld-ts-explorer`, cb);
});

gulp.task('copy', ['clean', 'generate-xl-ui-plugin'], function () {
    gulp
        .src(libDist)
        .pipe(gulp.dest(pluginDest));

});