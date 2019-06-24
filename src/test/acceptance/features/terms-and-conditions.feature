Feature: Terms and conditions
  In order to apply for the HTBHF programme
  As a potential claimant
  I must accept the terms and conditions before submitting my application

  Scenario: I am prevented from submitting my application without accepting the terms and conditions
    Given I have entered my details up to the check details page
    When I click continue without accepting the terms and conditions
    Then I am told I must accept the terms and conditions