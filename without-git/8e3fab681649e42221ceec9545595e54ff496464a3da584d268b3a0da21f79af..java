import java.io.*;
import java.net.*;
import java.util.zip.*;
import org.json.*;

public class WebPageTest {

  private final String location;
  private final URL createTestUrl;
  private final URL workDoneUrl;
  private final String mimeBoundary = "-----CorrectBatteryHorseStaple";

  public WebPageTest(URL baseUrl, String location, String testUrl) throws IOException {
    this.location = location;
    this.createTestUrl = new URL(baseUrl,
        "runtest.php?location=" + location + "&url=" + URLEncoder.encode(testUrl, "UTF-8") +
        "&fvonly=1&f=json");
    this.workDoneUrl = new URL(baseUrl, "work/workdone.php");
  }

  public String submitResult(JSONArray devToolsLog, byte[] screenshot) throws IOException, JSONException {
    JSONObject testDescriptor = createTest();
    postResult(testDescriptor, devToolsLog, screenshot);
    return testDescriptor.getJSONObject("data").getString("userUrl");
  }

  private void writeResultsZip(OutputStream os, JSONArray devToolsLog, byte[] screenshot)
      throws IOException, JSONException {
    ZipOutputStream zos = new ZipOutputStream(os);
    if (null != devToolsLog) {
      zos.putNextEntry(new ZipEntry("1_devtools.json"));
      OutputStreamWriter writer = new OutputStreamWriter(zos);
      devToolsLog.write(writer);
      writer.flush();
      zos.closeEntry();
    }
    if (null != screenshot) {
      zos.putNextEntry(new ZipEntry("1_screen.png"));
      zos.write(screenshot);
      zos.closeEntry();
    }
    zos.finish();
  }

  private JSONObject createTest() throws IOException, JSONException {
    HttpURLConnection http = (HttpURLConnection) createTestUrl.openConnection();
    if (HttpURLConnection.HTTP_OK != http.getResponseCode()) {
      throw new IOException("WebPateTest test creation failed for location " + location + ": " +
                            http.getResponseCode() + " " +http.getResponseMessage());
    }
    Reader reader = new InputStreamReader(http.getInputStream(), "UTF-8");
    try {
      return new JSONObject(new JSONTokener(reader));
    } finally {
      reader.close();
    }
  }

  private void postResult(JSONObject testDescriptor, JSONArray devToolsLog, byte[] screenshot)
      throws IOException, JSONException {
    HttpURLConnection http = (HttpURLConnection) workDoneUrl.openConnection();
    http.setDoOutput(true);
    http.addRequestProperty("Content-Type", "multipart/form-data; boundary=" +
                            mimeBoundary);
    http.setChunkedStreamingMode(4096);
    writeMultipartContent(http.getOutputStream(), testDescriptor, devToolsLog, screenshot);
    http.getInputStream().close();
    if (HttpURLConnection.HTTP_OK != http.getResponseCode()) {
      throw new IOException("Result submission failed for " +
                            testDescriptor.getJSONObject("data").getString("userUrl") + " : " +
                            http.getResponseCode() + " " +http.getResponseMessage());
    }
  }

  private void writeMultipartContent(
      OutputStream os, JSONObject testDescriptor, JSONArray devToolsLog, byte[] screenshot)
      throws IOException, JSONException {
    String testId = testDescriptor.getJSONObject("data").getString("testId");
    OutputStreamWriter writer = new OutputStreamWriter(os, "UTF-8");
    startMimePart(writer, "location", null);
    writer.write("\r\n" + location + "\r\n");
    startMimePart(writer, "id", null);
    writer.write("\r\n" + testId + "\r\n");
    startMimePart(writer, "done", null);
    writer.write("\r\n1\r\n");
    startMimePart(writer, "file", "1_results.zip");
    writer.write("Content-Type: application/zip\r\n");
    writer.write("Content-Transfer-Encoding: binary\r\n\r\n");
    writer.flush();
    writeResultsZip(os, devToolsLog, screenshot);
    writer.write("\r\n--");
    writer.write(mimeBoundary);
    writer.write("--\r\n");
    writer.flush();
  }

  private void startMimePart(Writer writer, String name, String filename) throws IOException {
    writer.write("--");
    writer.write(mimeBoundary);
    writer.write("\r\n");
    writer.write("Content-Disposition: form-data; name=\"");
    writer.write(name);
    if (null != filename) {
      writer.write("\"; filename=\"");
      writer.write(filename);
    }
    writer.write("\"\r\n");
  }
}