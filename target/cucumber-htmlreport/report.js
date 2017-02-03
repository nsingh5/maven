$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('com\packtpub\mastering\selenium\AdvancedDocumentation.feature');
formatter.feature({
  "line": 1,
  "name": "Verify the documentation for the advanced features in Selenium",
  "description": "\r\nIn order to show you a way to communicate with non technical stakeholder\r\nI want to introduce Cucumber in the video course \"Mastering Selenium Testing Tools\"",
  "id": "verify-the-documentation-for-the-advanced-features-in-selenium",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Selenium Page Object Design Pattern",
  "description": "",
  "id": "verify-the-documentation-for-the-advanced-features-in-selenium;selenium-page-object-design-pattern",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "that seleniumhq.org is available",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I read the documentation about page objects",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see the title \"Test Design Considerations — Selenium Documentation\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SeleniumAdvancedDocumentationStepDefs.that_seleniumhq_org_is_available()"
});
formatter.result({
  "duration": 4963074096,
  "status": "passed"
});
formatter.match({
  "location": "SeleniumAdvancedDocumentationStepDefs.I_read_the_documentation_about_page_objects()"
});
formatter.result({
  "duration": 265528,
  "error_message": "java.lang.Error: Unresolved compilation problem: \n\tactualPageTitle cannot be resolved to a variable\n\r\n\tat com.packtpub.mastering.selenium.steps.SeleniumAdvancedDocumentationStepDefs.I_read_the_documentation_about_page_objects(SeleniumAdvancedDocumentationStepDefs.java:61)\r\n\tat ✽.When I read the documentation about page objects(com\\packtpub\\mastering\\selenium\\AdvancedDocumentation.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Design Considerations — Selenium Documentation",
      "offset": 24
    }
  ],
  "location": "SeleniumAdvancedDocumentationStepDefs.I_should_see_the_title(String)"
});
formatter.result({
  "status": "skipped"
});
});