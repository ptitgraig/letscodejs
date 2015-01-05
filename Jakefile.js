/* global desc, task, jake, fail, complete */

"use strict";
// default task
// JAKE can use dependencies so it'll load "lint" before "default"
task('default', ['lint']);

desc('Lint everything');
task('lint', [], function(){
    var lint = require('./build/lint/lint_runner.js');
    var files = new jake.FileList();
    files.include('**/*.js');
    files.exclude('node_modules');
    var options = {
        node: true
    };
    lint.validateFileList(files.toArray(), options, {});
});
