
# Network features reference - Chrome Developers

> ## Excerpt
> A comprehensive reference of Chrome DevTools Network panel features.

---
Discover new ways to analyze how your page loads in this comprehensive reference of Chrome DevTools network analysis features.

**Note:** This reference is based on Chrome 58. If you use another version of Chrome, the UI and features of DevTools may be different. Check `chrome://help` to see what version of Chrome you're running.

## Record network requests

By default, DevTools records all network requests in the Network panel, so long as DevTools is open.

![The Network panel.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/62R1WFVGgPSfnWi6EJcd.png?auto=format)

**Figure 1**. The Network panel

### Stop recording network requests

To stop recording requests:

-   Click **Stop recording network log** ![Stop recording network](https://wd.imgix.net/image/QMjXarRXcMarxQddwrEdPvHVM242/20E6CLcSzNV2GELQu7oC.png?auto=format) on the Network panel. It turns grey to indicate that DevTools is no longer recording requests.
-   Press Command+E (Mac) or Control+E (Windows, Linux) while the Network panel is in focus.

### Clear requests

Click **Clear** ![Clear](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/SUPMgMoG5s0cLAe1yKEd.png?auto=format) on the Network panel to clear all requests from the Requests table.

![The Clear button.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/IZwN127NS4ZHwAJ4QJNx.svg)

**Figure 2**. Clear, outlined in blue

### Save requests across page loads

To save requests across page loads, check the **Preserve log** checkbox on the Network panel. DevTools saves all requests until you disable **Preserve log**.

![The Preserve Log checkbox.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/9xALh1ItognWtTexZzRv.svg)

**Figure 3**. The Preserve Log checkbox, outlined in blue

### Capture screenshots during page load

Capture screenshots to analyze what users see as they wait for your page to load.

To enable screenshots, open **Settings** inside the Network panel and check **Capture screenshots**.

Reload the page while the Network panel is in focus to capture screenshots.

Once captured, you can interact with screenshots in the following ways:

-   Hover over a screenshot to view the point at which that screenshot was captured. A yellow line appears on the Overview pane.
-   Click a screenshot's thumbnail to filter out any requests that occurred after the screenshot was captured.
-   Double-click a thumbnail to zoom in on it.

![Capture screenshots enabled](https://wd.imgix.net/image/QMjXarRXcMarxQddwrEdPvHVM242/RM2QuyGbgYhQu61CSyCw.png?auto=format)

**Figure 4**. Capture screenshots enabled, showing loading screenshots over time.

### Replay XHR request

To replay an XHR request, right-click the request in the Requests table and select **Replay XHR**.

![Selecting Replay XHR.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/q78sXBNcIyDKpzm3nQja.png?auto=format)

**Figure 5**. Selecting Replay XHR

## Change loading behavior

### Emulate a first-time visitor by disabling the browser cache

To emulate how a first-time user experiences your site, check the **Disable cache** checkbox. DevTools disables the browser cache. This more accurately emulates a first-time user's experience, because requests are served from the browser cache on repeat visits.

![The Disable Cache checkbox.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/04bkZSC2b8Dsi0eE7H0J.svg)

**Figure 6**. The Disable Cache checkbox, outlined in blue

#### Disable the browser cache from the Network Conditions drawer

If you want to disable the cache while working in other DevTools panels, use the Network Conditions drawer.

1.  Open the [Network Conditions drawer](https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#network-conditions).
2.  Check or uncheck the **Disable cache** checkbox.

### Manually clear the browser cache

To manually clear the browser cache at any time, right-click anywhere in the Requests table and select **Clear Browser Cache**.

![Selecting Clear Browser Cache.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/m8T2kha4f43D1ipWIVWj.png?auto=format)

**Figure 7**. Selecting Clear Browser Cache

### Emulate offline

There's a new class of web apps, called [Progressive Web Apps](https://web.dev/progressive-web-apps), which can function offline with the help of [service workers](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers). When you're building this type of app, it's useful to be able to quickly simulate a device that has no data connection.

Check the **Offline** checkbox to simulate a completely offline network experience.

![The Offline checkbox](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/2GrWegpdEJMfsnEYNkq6.svg)

**Figure 8**. The Offline checkbox, outlined in blue

### Emulate slow network connections

Emulate 2G, 3G, and other connection speeds from the **Network Throttling** menu.

![The Network Throttling menu.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/7LD09urCKiCrkJcsYhiA.svg)

**Figure 9**. The Network Throttling menu, outlined in blue

You can select from a variety of presets, such as Regular or Good 2G. You can also add your own custom presets by opening the Network Throttling menu and selecting **Custom** > **Add**.

DevTools displays a warning icon next to the **Network** tab to remind you that throttling is enabled.

#### Emulate slow network connections from the Network Conditions drawer

If you want to throttle the network connection while working in other DevTools panels, use the Network Conditions drawer.

1.  Open the [Network Conditions drawer](https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#network-conditions).
2.  Select your desired connection speed from the **Network Throttling** menu.

### Manually clear browser cookies

To manually clear browser cookies at any time, right-click anywhere in the Requests table and select **Clear Browser Cookies**.

![Selecting Clear Browser Cookies.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/GJpOkjNwoZTgr4VnFlC4.png?auto=format)

**Figure 10**. Selecting Clear Browser Cookies

### Override the user agent

To manually override the user agent:

1.  Open the [Network Conditions drawer](https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#network-conditions).
2.  Uncheck **Select automatically**.
3.  Choose a user agent option from the menu, or enter a custom one in the text box.

## Filter requests

### Filter requests by properties

Use the **Filter** text box to filter requests by properties, such as the domain or size of the request.

If you can't see the text box, the Filters pane is probably hidden. See [Hide the Filters pane](https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#hide-filters).

![The Filters text box.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/oCVPgkalqEC6p9WWbaPu.svg)

**Figure 11**. The Filters text box, outlined in blue

You can use multiple properties simultaneously by separating each property with a space. For example, `mime-type:image/gif larger-than:1K` displays all GIFs that are larger than one kilobyte. These multi-property filters are equivalent to AND operations. OR operations are currently not supported.

Below is a complete list of supported properties.

-   `cookie-domain`. Show the resources that set a specific [cookie domain](https://developer.mozilla.org/docs/web/http/headers/set-cookie#attributes).
-   `cookie-name`. Show the resources that set a specific [cookie name](https://developer.mozilla.org/docs/web/http/headers/set-cookie#attributes).
-   `cookie-path`. Show the resources that set a specific [cookie path](https://developer.mozilla.org/docs/web/http/headers/set-cookie#attributes).
-   `cookie-value`. Show the resources that set a specific [cookie value](https://developer.mozilla.org/docs/web/http/headers/set-cookie#attributes).
-   `domain`. Only display resources from the specified domain. You can use a wildcard character (`*`) to include multiple domains. For example, `*.com` displays resources from all domain names ending in `.com`. DevTools shows a populates the autocomplete dropdown menu with all of the domains it has encountered.
-   `has-response-header`. Show the resources that contain the specified HTTP response header. DevTools populates the autocomplete dropdown with all of the response headers that it has encountered.
-   `is`. Use `is:running` to find `WebSocket` resources.
-   `larger-than`. Show resources that are larger than the specified size, in bytes. Setting a value of `1000` is equivalent to setting a value of `1k`.
-   `method`. Show resources that were retrieved over a specified HTTP method type. DevTools populates the autocomplete dropdown with all of the HTTP methods it has encountered.
-   `mime-type`. Show resources of a specified MIME type. DevTools populates the autocomplete dropdown with all MIME types it has encountered.
-   `mixed-content`. Show all mixed content resources (`mixed-content:all`) or just the ones that are currently displayed (`mixed-content:displayed`).
-   `priority`. Show resources whose priority level matches the specified value.
-   `resource-type`. Show resources of a resource type, e.g. image. DevTools populates the autocomplete dropdown with all resource types it has encountered.
-   `scheme`. Show resources retrieved over unprotected HTTP (`scheme:http`) or protected HTTPS (`scheme:https`).
-   `set-cookie-domain`. Show the resources that have a `Set-Cookie` header with a `Domain` attribute that matches the specified value. DevTools populates the autocomplete with all of the cookie domains that it has encountered.
-   `set-cookie-name`. Show the resources that have a `Set-Cookie` header with a name that matches the specified value. DevTools populates the autocomplete with all of the cookie names that it has encountered.
-   `set-cookie-value`. Show the resources that have a `Set-Cookie` header with a value that matches the specified value. DevTools populates the autocomplete with all of the cookie values that it has encountered.
-   `status-code`. Only show resources whose HTTP status code match the specified code. DevTools populates the autocomplete dropdown menu with all of the status codes it has encountered.
-   `url`. Show the resources that have a `url` matching the specified value.

### Filter requests by type

To filter requests by request type, click the **XHR**, **JS**, **CSS**, **Img**, **Media**, **Font**, **Doc**, **WS** (WebSocket), **Manifest**, or **Other** (any other type not listed here) buttons on the Network panel.

If you can't see these buttons, the Filters pane is probably hidden. See [Hide the Filters pane](https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#hide-filters).

To enable multiple type filters simultaneously, hold Command (Mac) or Control (Windows, Linux) and then click.

![Using the Type filters to display JS, CSS, and Document resources.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/EOVhAQmzNZXNSrvMwXv5.png?auto=format)

**Figure 12**. Using the Type filters to display JS, CSS, and Doc\[ument\] resources.

### Filter requests by time

Click and drag left or right on the Overview pane to only display requests that were active during that time frame. The filter is inclusive. Any request that was active during the highlighted time is shown.

![Filtering out any requests that weren't active around 2500ms.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/HasYhu7GxWfIp5Jq4ASn.png?auto=format)

**Figure 13**. Filtering out any requests that weren't active around 2500ms

### Hide data URLs

[Data URLs](https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) are small files embedded into other documents. Any request that you see in the Requests table that starts with `data:` is a data URL.

Check the **Hide data URLs** checkbox to hide these requests.

![The Hide Data URLs checkbox.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hz8BXb9YlYLhCGarY12J.svg)

**Figure 14**. The Hide Data URLs checkbox

## Sort requests

By default, the requests in the Requests table are sorted by initiation time, but you can sort the table using other criteria.

### Sort by column

Click the header of any column in the Requests to sort requests by that column.

### Sort by activity phase

To change how the Waterfall sorts requests, right-click the header of the Requests table, hover over **Waterfall**, and select one of the following options:

-   **Start Time**. The first request that was initiated is at the top.
-   **Response Time**. The first request that started downloading is at the top.
-   **End Time**. The first request that finished is at the top.
-   **Total Duration**. The request with the shortest connection setup and request / response is at the top.
-   **Latency**. The request that waited the shortest time for a response is at the top.

These descriptions assume that each respective option is ranked from shortest to longest. Clicking on the **Waterfall** column's header reverses the order.

![Sorting the Waterfall by total duration.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/tJOhr2jBQWy2CdKHDlUl.png?auto=format)

**Figure 15**. Sorting the Waterfall by total duration. The lighter portion of each bar is time spent waiting. The darker portion is time spent downloading bytes.

## Analyze requests

So long as DevTools is open, it logs all requests in the Network panel. Use the Network panel to analyze requests.

### View a log of requests

Use the Requests table to view a log of all requests made while DevTools has been open. Clicking or hovering over requests reveals more information about them.

![The Requests table.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/aUR3bbt8luG6r5p2WIuP.svg)

**Figure 16**. The Requests table, outlined in blue

The Requests table displays the following columns by default:

-   **Name**. The filename of, or an identifier for, the resource.
-   **Status**. The HTTP status code.
-   **Type**. The MIME type of the requested resource.
-   **Initiator**. The following objects or processes can initiate requests:
    -   **Parser**. Chrome's HTML parser.
    -   **Redirect**. An HTTP redirect.
    -   **Script**. A JavaScript function.
    -   **Other**. Some other process or action, such as navigating to a page via a link or entering a URL in the address bar.
-   **Size**. The combined size of the response headers plus the response body, as delivered by the server.
-   **Time**. The total duration, from the start of the request to the receipt of the final byte in the response.
-   [**Waterfall**](https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#waterfall). A visual breakdown of each request's activity.

#### Add or remove columns

Right-click the header of the Requests table and select an option to hide or show it. Currently displayed options have checkmarks next to them.

![Adding a column to the Requests table.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hGwBQqVdg2QGM6aSzFdj.png?auto=format)

**Figure 17**. Adding a column to the Requests table.

#### Add custom columns

To add a custom column to the Requests table, right-click the header of the Requests table and select **Response Headers** > **Manage Header Columns**.

![Adding a custom column to the Requests table.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/7zoqb5aU14tK8jiNMgQw.png?auto=format)

**Figure 18**. Adding a custom column to the Requests table.

### View the timing of requests in relation to one another

Use the Waterfall to view the timing of requests in relation to one another. By default, the Waterfall is organized by the start time of the requests. So, requests that are farther to the left started earlier than those that are farther to the right.

See [Sort by activity phase](https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#sort-by-activity) to see the different ways that you can sort the Waterfall.

![The Waterfall column of the Requests pane.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/3I6fk1zlTDXx5J6hRaOJ.png?auto=format)

**Figure 19**. The Waterfall column of the Requests pane.

### Analyze the frames of a WebSocket Connection

To view the frames of a WebSocket connection:

1.  Click the URL of the WebSocket connection, under the **Name** column of the Requests table.
2.  Click the **Frames** tab. The table shows the last 100 frames.

To refresh the table, re-click the name of the WebSocket connection under the **Name** column of the Requests table.

![The Frames tab.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/QgftKdIKE6NqaFwlZAVc.svg)

**Figure 20**. The Frames tab, outlined in blue

The table contains three columns:

-   **Data**. The message payload. If the message is plain text, it's displayed here. For binary opcodes, this column displays the opcode's name and code. The following opcodes are supported: Continuation Frame, Binary Frame, Connection Close Frame, Ping Frame, and Pong Frame.
-   **Length**. The length of the message payload, in bytes.
-   **Time**. The time when the message was received or sent.

Messages are color-coded according to their type:

-   Outgoing text messages are light-green.
-   Incoming text messages are white.
-   WebSocket opcodes are light-yellow.
-   Errors are light-red.

### View a preview of a response body

To view a preview of a response body:

1.  Click the URL of the request, under the **Name** column of the Requests table.
2.  Click the **Preview** tab.

This tab is mostly useful for viewing images.

![The Preview tab.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/v3bEdPqabJ8vxsXfsboK.svg)

**Figure 21**. The Preview tab, outlined in blue

### View a response body

To view the response body to a request:

1.  Click the URL of the request, under the **Name** column of the Requests table.
2.  Click the **Response** tab.

![The Response tab.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/th1QacW6EGUpityje3Rk.svg)

**Figure 22**. The Response tab, outlined in blue

To view HTTP header data about a request:

1.  Click on the URL of the request, under the **Name** column of the Requests table.
2.  Click the **Headers** tab.

![The Headers tab.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/Zv6sbHi6fZfZMWufSp75.svg)

**Figure 23**. The Headers tab, outlined in blue

By default, the Headers tab shows header names alphabetically. To view the HTTP header names in the order they were received:

1.  Open the **Headers** tab for the request you're interested in. See [View HTTP headers](https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#headers).
2.  Click **view source**, next to the **Request Header** or **Response Header** section.

There are times where the headers will show a warning message "Provisional headers are shown...".

1.  It could be due to the request not sent over the network (served from a local cache), which doesn't store the original request headers. In this case, you can [disable caching](https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#disable-cache) to see the full request headers. ![Provisional headers warning message](https://wd.imgix.net/image/dPDCek3EhZgLQPGtEG3y0fTn4v82/AQfq69qS2Ig6lT9Y7vcc.png?auto=format)
    
2.  It could also be due to the network resource not valid (e.g. Try `fetch("https://jec.fyi.com/unknown-url/")` in the Console). DevTools could also display only provisional header due to security reasons. ![Provisional headers warning message](https://wd.imgix.net/image/dPDCek3EhZgLQPGtEG3y0fTn4v82/xMKUHQxXLiRDiiUTol5J.png?auto=format)
    

### View query string parameters

To view the query string parameters of a URL in a human-readable format:

1.  Open the **Headers** tab for the request you're interested in. See [View HTTP headers](https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#headers).
2.  Go to the **Query String Parameters** section.

![The Query String Parameters section.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/B5QMjpRJZ72xKQ3uWLlh.svg)

**Figure 24**. The Query String Parameters section, outlined in blue

#### View query string parameters source

To view the query string parameter source of a request:

1.  Go to the Query String Parameters section. See [View query string parameters](https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#query-string).
2.  Click **view source**.

#### View URL-encoded query string parameters

To view query string parameters in a human-readable format, but with encodings preserved:

1.  Go to the Query String Parameters section. See [View query string parameters](https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#query-string).
2.  Click **view URL encoded**.

### View cookies

To view the cookies sent in a request's HTTP header:

1.  Click the URL of the request, under the **Name** column of the Requests table.
2.  Click the **Cookies** tab.

See [Fields](https://developer.chrome.com/docs/devtools/storage/cookies/#fields) for a description of each of the columns.

![The Cookies tab.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/y2W5yVOMWqgL8ZE1Lklh.svg)

**Figure 25**. The Cookies tab, outlined in blue

### View the timing breakdown of a request

To view the timing breakdown of a request:

1.  Click the URL of the request, under the **Name** column of the Requests table.
2.  Click the **Timing** tab.

See [Preview a timing breakdown](https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#timing-preview) for a faster way to access this data.

See [Timing breakdown phases explained](https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#timing-explanation) for more information about each of the phases that you may see in the Timing tab.

![The Timing tab.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/yDJ70NF49BREe9kHD7pw.svg)

**Figure 26**. The Timing tab, outlined in blue

Here's more information about each of the phases.

See [View timing breakdown](https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#timing) for another way to access this view.

#### Preview a timing breakdown

To view a preview of the timing breakdown of a request, hover over the request's entry in the **Waterfall** column of the Requests table.

See [View the timing breakdown of a request](https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#timing) for a way to access this data that does not require hovering.

![Previewing the timing breakdown of a request.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/c7kf94kHB11kK5AyYyMn.png?auto=format)

**Figure 27**. Previewing the timing breakdown of a request

#### Timing breakdown phases explained

Here's more information about each of the phases you may see in the Timing tab:

-   **Queueing**. The browser queues requests when:
    -   There are higher priority requests.
    -   There are already six TCP connections open for this origin, which is the limit. Applies to HTTP/1.0 and HTTP/1.1 only.
    -   The browser is briefly allocating space in the disk cache
-   **Stalled**. The request could be stalled for any of the reasons described in **Queueing**.
-   **DNS Lookup**. The browser is resolving the request's IP address.
-   **Initial connection**. The browser is establishing a connection, including TCP handshakes/retries and negotiating an SSL.
-   **Proxy negotiation**. The browser is negotiating the request with a [proxy server](https://en.wikipedia.org/wiki/Proxy_server).
-   **Request sent**. The request is being sent.
-   **ServiceWorker Preparation**. The browser is starting up the service worker.
-   **Request to ServiceWorker**. The request is being sent to the service worker.
-   **Waiting (TTFB)**. The browser is waiting for the first byte of a response. TTFB stands for Time To First Byte. This timing includes 1 round trip of latency and the time the server took to prepare the response.
-   **Content Download**. The browser is receiving the response, either directly from the network or from a service worker. This value is the total amount of time spent reading the response body. Larger than expected values could indicate a slow network, or that the browser is busy performing other work which delays the response from being read.
-   **Receiving Push**. The browser is receiving data for this response via HTTP/2 Server Push.
-   **Reading Push**. The browser is reading the local data previously received.

### View initiators and dependencies

To view the initiators and dependencies of a request, hold Shift and hover over the request in the Requests table. DevTools colors initiators green, and dependencies red.

![Viewing the initiators and dependencies of a request.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/JiZisZ4UmarOjo5cAwf3.png?auto=format)

**Figure 28**. Viewing the initiators and dependencies of a request

When the Requests table is ordered chronologically, the first green request above the request that you're hovering over is the initiator of the dependency. If there's another green request above that, that higher request is the initiator of the initiator. And so on.

### View load events

DevTools displays the timing of the `DOMContentLoaded` and `load` events in multiple places on the Network panel. The `DOMContentLoaded` event is colored blue, and the `load` event is red.

![The locations of the DOMContentLoaded and load events on the Network panel.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/FzH6gwuHgXuGnasATVOH.svg)

**Figure 29**. The locations of the `DOMContentLoaded` and `load` events in the Network panel

### View the total number of requests

The total number of requests is listed in the Summary pane, at the bottom of the Network panel.

**Caution:** This number only tracks requests that have been logged since DevTools was opened. If other requests occurred before DevTools was opened, those requests aren't counted.

![The total number of requests since DevTools was opened](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/Ce9YHacO35q8t5wbmFp9.svg)

**Figure 30**. The total number of requests since DevTools was opened

### View the total download size

The total download size of requests is listed in the Summary pane, at the bottom of the Network panel.

**Caution:** This number only tracks requests that have been logged since DevTools was opened. If other requests occurred before DevTools was opened, those requests aren't counted.

![The total download size of requests](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hlTa0Pu0GRSTt1yuantk.svg)

**Figure 31**. The total download size of requests

See [View the uncompressed size of a resource](https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#uncompressed) to see how large resources are after the browser uncompresses them.

### View the stack trace that caused a request

When a JavaScript statement causes a resource to be requested, hover over the **Initiator** column to view the stack trace leading up to the request.

![The stack trace leading up to a resource request](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/tAENLxUdEAUkxHpAysBL.png?auto=format)

**Figure 32**. The stack trace leading up to a resource request

### View the uncompressed size of a resource

Click **Use Large Request Rows** ![Use Large Request Rows](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/lvgZdF4HI4aDB451wS5G.png?auto=format) and then look at the bottom value of the **Size** column.

![An example of uncompressed resources.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/OkTz8xZwi0zVh2GWltnE.png?auto=format)

**Figure 33**. The compressed size of the `jquery-bundle.js` file that was sent over the network was `30.9 KB`, whereas the uncompressed size was `86.3 KB`

## Export requests data

### Save all network requests to a HAR file

To save all network requests to a HAR file:

1.  Right-click any request in the Requests table.
2.  Select **Save as HAR with Content**. DevTools saves all requests that have occurred since you opened DevTools to the HAR file. There is no way to filter requests, or to save just a single request.

Once you've got a HAR file, you can import it back into DevTools for analysis. Just drag-and-drop the HAR file into the Requests table. See also [HAR Analyzer](https://toolbox.googleapps.com/apps/har_analyzer/).

![Selecting Save as HAR with Content.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/FjVMRBNwMyIlkUElRzYI.png?auto=format)

**Figure 34**. Selecting **Save as HAR with Content**

### Copy one or more requests to the clipboard

Under the **Name** column of the Requests table, right-click a request, hover over **Copy**, and select one of the following options:

-   **Copy Link Address**. Copy the request's URL to the clipboard.
-   **Copy Response**. Copy the response body to the clipboard.
-   **Copy as cURL**. Copy the request as a cURL command.
-   **Copy All as cURL**. Copy all requests as a chain of cURL commands.
-   **Copy All as HAR**. Copy all requests as HAR data.

![Selecting Copy Response.](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/FCQLdbRS9UMc4eFHzYvI.png?auto=format)

**Figure 35**. Selecting Copy Response

## Change the layout of the Network panel

Expand or collapse sections of the Network panel UI to focus on what's important to you.

### Hide the Filters pane

By default, DevTools shows the [Filters pane](https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#filter). Click **Filter** ![Filter](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/BmGbqXVYxIY2kwgbNmsp.png?auto=format) to hide it.

![The Hide Filters button](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/zN18ngzI6ejSpoKMYKJG.svg)

**Figure 36**. Hide Filters, outlined in blue

### Use large request rows

Use large rows when you want more whitespace in your network requests table. Some columns also provide a little more information when using large rows. For example, the bottom value of the **Size** column is the uncompressed size of a request.

Open **Settings** and click **Use large request rows** to enable large rows.

![The use large request rows checkbox](https://wd.imgix.net/image/QMjXarRXcMarxQddwrEdPvHVM242/rhXHHi7yxFm6IqiwQ7C3.png?auto=format)

**Figure 37**. Large Request Rows, outlined in blue

### Hide the Overview pane

By default, DevTools shows the [Overview pane](https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#overview). Open **Settings** and uncheck the **Show overview** checkbox to hide it.

![The show overview checkbox](https://wd.imgix.net/image/QMjXarRXcMarxQddwrEdPvHVM242/uWWJfuFbpiClEFjPTdVD.png?auto=format)

**Figure 38**. Hide Overview, outlined in blue
