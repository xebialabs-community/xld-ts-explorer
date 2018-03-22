import FlakeId from 'flake-idgen';
import fs from 'fs';
import gulp from 'gulp';
import html from 'html-template-tag';
import intformat from 'biguint-format';
import {resourceDir, webDir} from '../utils/paths';

const nextId = intformat(new FlakeId().next(), 'dec');
const indexHtml = `index-${nextId}.html`;

gulp.task('generate-xl-ui-plugin', (cb) => {
    const newFileContent = html`<plugin xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="http://www.xebialabs.com/deployit/ui-plugin"
    xsi:schemaLocation="http://www.xebialabs.com/deployit/ui-plugin xl-ui-plugin.xsd">
    <menu id="ts-explorer-plugin" label="TS" uri="${indexHtml}" weight="20" />
</plugin>`;

    fs.rename(`${webDir}/index.html`, `${webDir}/${indexHtml}`, (err) => {
        if (err) {
            throw err;
        }

        fs.writeFile(`${resourceDir}/xl-ui-plugin.xml`, newFileContent, (err) => {
            if (err) {
                throw err;
            }
            cb();
        });
    });
});