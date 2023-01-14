 @SmokeScenario
 Feature: login functionality

  Scenario: Check login is sucessful with valid credentials
  
   Given User is on login page
   When User enters username and password
   And User clicks on login button
   Then User should land on home page
    
    
 #Scenario Outline: Check login is sucessful with valid credentials
 #
    #Given User is in  login page
    #When User enters <username> and <password>
    #When User clicks on login button
    #Then User should land on home page
    #
    #Examples:
    #|username|password|
    #|user1|pass1|
    #|user2|pass2 |