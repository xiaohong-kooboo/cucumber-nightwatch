const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

Given(/^I open Google's search page$/, () => {
    const googlePage = client.page.googlePage();
     body = googlePage.section.body
  return client
    .url('http://google.com')
    .waitForElementVisible('body', 1000);
});

When(/^the Google search is visible$/, () => {
  return body.waitForElementVisible('@input',3000)
});

Then(/^the title is "([^"]*)"$/, (title) => {
  return client.assert.title(title);
});