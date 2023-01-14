$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/login.feature");
formatter.feature({
  "line": 2,
  "name": "login functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeScenario"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Check login is sucessful with valid credentials",
  "description": "",
  "id": "login-functionality;check-login-is-sucessful-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 67637100,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.user_enters_username_and_password()"
});
formatter.result({
  "duration": 40200,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 29100,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.user_should_land_on_home_page()"
});
formatter.result({
  "duration": 25199,
  "status": "passed"
});
});