 Feature: Thirsty Wine 
  
 # Registration Page
     
      Scenario: uesr registers successfully
        Given I visit the registration page
        When I fill in the registration form
        Then I should see a success message

      Scenario: uesr login successfully
        Given I visit the login page
        When Open the login page
        Then Login to the website

      Scenario: Validate header section
        Given I visit the home page
        When Check the Header Section
        Then Check the best sellers option

      Scenario: Validate Footer Links
        Given Visit the home
        When Verify Footer links
        Then Verify Contct,About us

      Scenario: Validate Products Page
        Given Open the product
        When Select the option
        Then Select the price

      Scenario: Validate Add to cart
        Given Open the home page
        When Add the product to cart
        Then Verify Added to cart message


        