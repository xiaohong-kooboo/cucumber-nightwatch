const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

Given(/^I open Google's search page$/, () => {
  return client
    .url('http://google.com')
    .waitForElementVisible('body', 1000);
});

When(/^the Google search is visible$/, () => {
  return client.assert.visible('input[name="q"]');
});

Then(/^the title is "([^"]*)"$/, (title) => {
  return client.assert.title(title);
});