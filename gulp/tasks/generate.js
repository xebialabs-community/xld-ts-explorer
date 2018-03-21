import FlakeId from 'flake-idgen';
import fs from 'fs';
import gulp from 'gulp';
import html from 'html-template-tag';
import intformat from 'biguint-format';
import {projectDir} from '../utils/paths';

const nextId = () => intformat(new FlakeId().next(), 'dec');

gulp.task('generate-xl-ui-plugin', (cb) => {
    const newFileContent = html`<plugin xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="http://www.xebialabs.com/deployit/ui-plugin"
    xsi:schemaLocation="http://www.xebialabs.com/deployit/ui-plugin xl-ui-plugin.xsd">
    <menu id="ts-explorer-plugin" label="TS" uri="xld-ts-explorer/index.html?${nextId()}" weight="20" />
</plugin>`;

    fs.writeFile(`${projectDir}/src/main/resources/xl-ui-plugin.xml`, newFileContent, (err) => {
        if (err) {
            throw err;
        }
        cb();
    });
});