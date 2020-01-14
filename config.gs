QUnit.helpers( this );

// Define the tests to run. Each function is a collection of tests.
function tests() {
  console = Logger; // Match JS
  calcTests(); 
  objectTests(); 
}

// runs inside a web app, results displayed in HTML.
function doGet( e ) {
  QUnit.urlParams( e.parameter );
  QUnit.config({
    title: "QUnit for GAS", // Sets the title of the test page.
  });
  // Fire up the tests
  QUnit.load( tests );
  var content = QUnit.getHtml();
  return HtmlService.createHtmlOutput(content).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
};