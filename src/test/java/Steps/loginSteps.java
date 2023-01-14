package Steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginSteps {
	@Given("^User is on login page$")
	public void user_is_on_login_page()  {
	   System.out.println("User is on login page"); 
	}

@When("^User enters username and password$")
public void user_enters_username_and_password()  {
	System.out.println("User enters username and password");
}

@When("^User clicks on login button$")
public void user_clicks_on_login_button()  {
	System.out.println("User clicks on login button");
}

@Then("^User should land on home page$")
public void user_should_land_on_home_page( ){
	System.out.println("User is landing on home page");

}}
