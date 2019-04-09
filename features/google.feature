Feature: Google Search

Scenario: Searching Google

  Given I open Google's search page
  When the Google search is visible
  Then the title is "Google"