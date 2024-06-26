Feature: Fill out timesheet

  Scenario Outline: Login
    Given user is on homepage
    When user enters username and password
    Then redirected to dashboard

  Scenario Outline: Fill out timesheet
    Given user is on the dashboard
    When user clicks on Projects
    When user clicks on timesheet
    Then user user fills out the timesheet
