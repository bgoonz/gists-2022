import java.io.IOException;
import java.net.URL;
import java.util.Date;
import java.util.List;
import java.util.logging.Level;
import org.json.*;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.*;
import org.openqa.selenium.logging.*;
import org.openqa.selenium.remote.*;

public class Test {

  private static final String WEBDRIVER_SERVER_URL = "http://localhost:9515/";
  private static String androidPackage = null;  // Assigned in main()

  private WebDriver driver;

  public void testGoogleSearch() throws Exception {
    driver.get("http://www.google.com/news");
    WebElement element = driver.findElement(By.name("q"));
    element.sendKeys("Selenium Conference 2013");
    element.submit();
    driver.findElement(By.linkText("Web")).click();
  }

  public void setUp() throws Exception {
    DesiredCapabilities caps = DesiredCapabilities.chrome();
    if (null != androidPackage) {
      ChromeOptions chromeOptions = new ChromeOptions();
      chromeOptions.setExperimentalOptions("androidPackage", androidPackage);
      caps.setCapability(ChromeOptions.CAPABILITY, chromeOptions);
    }
    LoggingPreferences logPrefs = new LoggingPreferences();
    logPrefs.enable(LogType.BROWSER, Level.ALL);
    logPrefs.enable(LogType.PERFORMANCE, Level.INFO);
    caps.setCapability(CapabilityType.LOGGING_PREFS, logPrefs);

    driver = new Augmenter().augment(new RemoteWebDriver(new URL(WEBDRIVER_SERVER_URL), caps));
    Capabilities actualCaps = ((HasCapabilities) driver).getCapabilities();
    System.out.println("Actual caps: " + actualCaps);
  }

  public void tearDown() throws Exception {
    try {
      Logs logs = driver.manage().logs();
      System.out.println("Log types: " + logs.getAvailableLogTypes());
      printLog(LogType.BROWSER);
      submitPerformanceResult("Test.testGoogleSearch", logs.get(LogType.PERFORMANCE).getAll());
    } finally {
      driver.quit();
    }
  }

  void printLog(String type) {
    List<LogEntry> entries = driver.manage().logs().get(type).getAll();
    System.out.println(entries.size() + " " + type + " log entries found");
    for (LogEntry entry : entries) {
      System.out.println(
          new Date(entry.getTimestamp()) + " " + entry.getLevel() + " " + entry.getMessage());
    }
  }

  void submitPerformanceResult(String name, List<LogEntry> perfLogEntries)
      throws IOException, JSONException {
    JSONArray devToolsLog = new JSONArray();
    System.out.println(perfLogEntries.size() + " performance log entries found");
    for (LogEntry entry : perfLogEntries) {
      JSONObject message = new JSONObject(entry.getMessage());
      JSONObject devToolsMessage = message.getJSONObject("message");
      // System.out.println(
      //     devToolsMessage.getString("method") + " " + message.getString("webview"));
      devToolsLog.put(devToolsMessage);
    }
    byte[] screenshot = null;
    if (null == androidPackage) {  // Chrome on Android does not yet support screenshots
      screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
    }
    String resultUrl = new WebPageTest(new URL("http://localhost:8888/"), "Test", name)
        .submitResult(devToolsLog, screenshot);
    System.out.println("Result page: " + resultUrl);
  }

  public static void main(String[] argv) throws Exception {
    if (argv.length > 0 && "--android".equals(argv[0])) {
      // androidPackage = "com.google.android.apps.chrome_dev";
      androidPackage = "com.google.android.apps.chrome";
    }
    Test test = new Test();
    test.setUp();
    try {
      test.testGoogleSearch();
    } finally {
      test.tearDown();
    }
  }
}
