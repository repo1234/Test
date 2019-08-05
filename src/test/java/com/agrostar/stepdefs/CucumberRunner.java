package com.agrostar.stepdefs;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"src/test/resources/Features"},
		tags= {"@test"},
		glue={"com.vodafone.uk.kyc.cucumber.api.stepdefs"}
		)
// This class can be use for debugging purpose
// We have maven plugin to run cucumber on jenkins.
// Caution : Please check that which environment cucumber is pointing before executing.
public class CucumberRunner {

}
