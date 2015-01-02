desc('Example 1');
// JAKE can use dependencies so it'll load "dependency" before "example"
task('example', ['dependency'], function(){
    console.log('example task');
});

task('dependency', function(){
    console.log('dependency')
});