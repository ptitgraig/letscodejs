// default task
// JAKE can use dependencies so it'll load "lint" before "default"
desc('Defaut jake task');
task('default', ['lint'], function(){
    console.log('Running default task');
});

task('lint', [], function(){
    var lint = require('./build/lint/lint_runner.js');
    lint.validateFile('Jakefile.js', {}, {});
});
