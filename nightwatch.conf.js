require('nightwatch-cucumber')({
  cucumberArgs: [
  '--require', 'features/step_definitions',
  '--require', 'hooks.js',
  '--format', 'node_modules/cucumber-pretty', 
  '--format', 'json:reports/cucumber.json',
  'features']
})

module.exports = (function(settings) {
  settings.test_workers = false
  return settings;
})(require('./nightwatch.json'));