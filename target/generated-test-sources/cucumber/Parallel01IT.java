import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        strict = false,
        features = {"/Users/prasad/Documents/ID_DOC/CCTandKYCAutomation Projects/AgroStarAssigment/src/test/resources/Features/GitUIAutomatiomation.feature"},
        plugin = {"json:/Users/prasad/Documents/ID_DOC/CCTandKYCAutomation Projects/AgroStarAssigment/target/cucumber-reports/1.json", "html:/Users/prasad/Documents/ID_DOC/CCTandKYCAutomation Projects/AgroStarAssigment/target/cucumber-reports/1", "rerun:/Users/prasad/Documents/ID_DOC/CCTandKYCAutomation Projects/AgroStarAssigment/target/cucumber-reports/1.txt"},
        monochrome = false,
        tags = {"@UiTest", "~@Ignore"},
        glue = {"com.agrostar.stepdefs"})
public class Parallel01IT {
}
