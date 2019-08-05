$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/prasad/Documents/ID_DOC/CCTandKYCAutomation Projects/AgroStarAssigment/src/test/resources/Features/GitUIAutomatiomation.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Lekhni D"
    }
  ],
  "line": 3,
  "name": "Create a repository and verify",
  "description": "",
  "id": "create-a-repository-and-verify",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@UiTest"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Serach top 5 repository",
  "description": "",
  "id": "create-a-repository-and-verify;serach-top-5-repository",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Open browser with git url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "signIn in git",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "git page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Search top repo of \"java\" langauge",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.open_browser_with_git_url()"
});
formatter.result({
  "duration": 5102603903,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.signin_in_git()"
});
formatter.result({
  "duration": 1012790113,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.git_page_should_be_dispalyed()"
});
formatter.result({
  "duration": 1521906,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "java",
      "offset": 20
    }
  ],
  "location": "StepDefs.search_top_repo_of_langauge(String)"
});
formatter.result({
  "duration": 16266753,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"q\"}\n  (Session info: chrome\u003d76.0.3809.87)\n  (Driver info: chromedriver\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db),platform\u003dMac OS X 10.13.4 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 13 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.43.1\u0027, revision: \u00275163bceef1bc36d43f3dc0b83c88998168a363a0\u0027, time: \u00272014-09-10 09:43:55\u0027\nSystem info: host: \u0027Ranajit\u0027, ip: \u0027192.168.43.241\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:55643}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db), userDataDir\u003d/var/folders/2n/f356hh595rg06z9nwzgfqhj00000gn/T/.org.chromium.Chromium.FynLpV}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d76.0.3809.87, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: f32a0a876a84b07491025ee4e4b7dbba\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:425)\n\tat org.openqa.selenium.By$ByName.findElement(By.java:299)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\n\tat com.agrostar.pages.UiMainPage.serachRepo(UiMainPage.java:57)\n\tat com.agrostar.stepdefs.StepDefs.search_top_repo_of_langauge(StepDefs.java:46)\n\tat ✽.Then Search top repo of \"java\" langauge(/Users/prasad/Documents/ID_DOC/CCTandKYCAutomation Projects/AgroStarAssigment/src/test/resources/Features/GitUIAutomatiomation.feature:9)\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 10,
      "value": "#"
    }
  ],
  "line": 12,
  "name": "Fork to all repo",
  "description": "",
  "id": "create-a-repository-and-verify;fork-to-all-repo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Open browser with git url",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "signIn in git",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "git page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Search top repo of \"java\" langauge",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "fork to all repo",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.open_browser_with_git_url()"
});
formatter.result({
  "duration": 4441618341,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.signin_in_git()"
});
formatter.result({
  "duration": 1059531826,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.git_page_should_be_dispalyed()"
});
formatter.result({
  "duration": 26532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "java",
      "offset": 20
    }
  ],
  "location": "StepDefs.search_top_repo_of_langauge(String)"
});
formatter.result({
  "duration": 12226364,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"q\"}\n  (Session info: chrome\u003d76.0.3809.87)\n  (Driver info: chromedriver\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db),platform\u003dMac OS X 10.13.4 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 12 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.43.1\u0027, revision: \u00275163bceef1bc36d43f3dc0b83c88998168a363a0\u0027, time: \u00272014-09-10 09:43:55\u0027\nSystem info: host: \u0027Ranajit\u0027, ip: \u0027192.168.43.241\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:55673}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db), userDataDir\u003d/var/folders/2n/f356hh595rg06z9nwzgfqhj00000gn/T/.org.chromium.Chromium.Kugu3c}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d76.0.3809.87, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: ec373f428de0bf5d4889712129dfe418\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:425)\n\tat org.openqa.selenium.By$ByName.findElement(By.java:299)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\n\tat com.agrostar.pages.UiMainPage.serachRepo(UiMainPage.java:57)\n\tat com.agrostar.stepdefs.StepDefs.search_top_repo_of_langauge(StepDefs.java:46)\n\tat ✽.Then Search top repo of \"java\" langauge(/Users/prasad/Documents/ID_DOC/CCTandKYCAutomation Projects/AgroStarAssigment/src/test/resources/Features/GitUIAutomatiomation.feature:17)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefs.forkRepo()"
});
formatter.result({
  "status": "skipped"
});
});