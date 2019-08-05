#Author: Lekhni D
@GitApiTest
Feature: Create a repository and verify


  Scenario: TestCase -1 Create new repository with access token 
    Given POST call to create new repo in GIT
       | Header | Body | Status |
       | Header_1 | Body_1| 201 |


  Scenario: TestCase-2 Star newly created repository 
    Given PUT call to create new repo in GIT
       |Status|
       |204|

   Scenario: TestCase -3 Error-422 validate if repository already exist 
    Given POST call to create new repo in GIT
       | Header | Body | Status |
       | Header_1 | Body_1| 422 |
    Then Verify withoutlinks "message" value as "name already exists on this account"
   
#   Scenario: TestCase-4 Validate if repository is not exist then star api should be throw exception
   #Scenario: TestCase-5 Validate if accessToken is not valid then repo should not created 
   #Scenario: TestCase-6 Validate GET should be work if repo is present 
   