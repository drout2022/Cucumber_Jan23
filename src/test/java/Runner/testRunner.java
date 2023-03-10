package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
//@RunWith(Cucumber.class)
//@CucumberOptions(features="src\\test\\java\\Features",
//                 glue={"src\\test\\java\\Steps"})




@RunWith(Cucumber.class)
@CucumberOptions(
		features="classpath:Features",
		glue="Steps",
		monochrome=true,
		dryRun=false,
		plugin= {
				"pretty",
				"html:target/cucumber",
				"json:target/cucumber.json"
				}
		)

public class testRunner {
	


}
