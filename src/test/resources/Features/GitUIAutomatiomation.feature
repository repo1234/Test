#Author: Lekhni D
@UiTest
Feature: Create a repository and verify

Scenario: Serach top 5 repository 
   Given Open browser with git url
   When signIn in git
   Then git page should be displayed
   Then Search top repo of "java" langauge 
#   

Scenario: Fork to all repo

   Given Open browser with git url
   When signIn in git
   Then git page should be displayed
   Then Search top repo of "java" langauge 
   Then fork to all repo
  
 
#Scenario:  Verify credentials should be valid 
#Scenario: Verify if repository is fork is false then that verify fork option should  be disabled 
# Scenario: Verify all 5 repo is forked into users repository