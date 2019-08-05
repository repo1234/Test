package com.agrostar.stepdefs;

import com.agrostar.pages.MainPage;
import com.agrostar.pages.UiMainPage;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefs {

	@Given("^ Given GET call to search top 5 repositories$")
	public void serach_repositories() {
		
	}
	@Given("^POST call to create new repo in GIT$")
	public void GIT_Post_Call(DataTable arg1) throws Throwable {
		MainPage.GITPostCall(arg1);
	}
	@Given("^Star newly created repository$")
	public void GIT_StarRepo(DataTable arg1) throws Throwable {
		MainPage.StarREpoCall(arg1);
	}
	
	
	//=========GIT UI Automation====
	
	@Given("^Open browser with git url$")
	public void open_browser_with_git_url() throws Throwable {
		UiMainPage.launch();
	}

	@When("^signIn in git$")
	public void signin_in_git()  {
		UiMainPage.enterCredential("repo1234","!@34India");
	}

	@Then("^git page should be displayed$")
	public void git_page_should_be_dispalyed()  {
	    UiMainPage.verifyGitUrl();
	}

	@Then("^Search top repo of \"([^\"]*)\" langauge$")
	public void search_top_repo_of_langauge(String arg1)  {
	    UiMainPage.serachRepo(arg1);
	}
	@Then("^fork to all repo$")
	public void forkRepo() {
		UiMainPage.forkRepo();
	}

}
