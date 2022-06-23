
# Webstandards - Overview - Tutorial

> ## Excerpt
> In a web server architecture you have a web client (browser)
taking to a web server.

---
In a web server architecture you have a web client (browser) taking to a web server.

### [](https://www.vogella.com/tutorials/Webstandards/article.html#architecture_webserver)[1.1. Web Server](https://www.vogella.com/tutorials/Webstandards/article.html#architecture_webserver)

A web server takes a client request, process the request and send the result back to the client. The web server may return a HTML page, a picture or an error message.

Web server and web client communicate over a protocol usually the HTTP protocol.

Popular web servers are the Apache HTTP web server.

### [](https://www.vogella.com/tutorials/Webstandards/article.html#architecture_webclient)[1.2. Web Client](https://www.vogella.com/tutorials/Webstandards/article.html#architecture_webclient)

A web client issues requests (via the user) to the web server and displays (renders) the result. A web client is typically a browser, e.g. Firefox.

### [](https://www.vogella.com/tutorials/Webstandards/article.html#architecture_html)[1.3. HTML](https://www.vogella.com/tutorials/Webstandards/article.html#architecture_html)

HTML is a markup language which contains content and describes the structure how this content will be displayed. The current version of HTML is HTML5 (which is still work in process). The article explains how to develop HTML5 pages.

### [](https://www.vogella.com/tutorials/Webstandards/article.html#architecture_http)[1.4. HTTP](https://www.vogella.com/tutorials/Webstandards/article.html#architecture_http)

HTTP (HyperText Transfer Protocol) is the protocol usually used for the communication between web server and web client. HTTP is based on TCP/IP. TCP is responsible for making sure that a file is received as a whole and IP is responsible for moving the individual data packages between within the network.

A HTTP conversion follow a Request / Response sequence. The web client issues a request to the web server and the web server responses to this request.

The HTTP request support methods, e.g. HEAD, GET, PUT, DELETE etc. Via these methods the web client indicates what the web server should do. For example the method GET indicates that the web client would like to receive a resource, e.g. file from the web server without any modification. The PUT method indicates that the web server should change something.

The HTTP response consists of a response header, and a response body. The HTTP header contains the status of the response, e.g. Ok and indicates what type of data is included in the body. The type of data is also called "Content-Type" or "MIME-type". For example the "Content-Type: text/htmL" indicates that the response body contains text or HTML.

### [](https://www.vogella.com/tutorials/Webstandards/article.html#architecture_url)[1.5. URL - Uniform Resource Locator](https://www.vogella.com/tutorials/Webstandards/article.html#architecture_url)

A resource in the web (and on the web server) can get identified via the URL. A URL is what is usually displayed in the browser, e.g. [http://www.vogella.com](http://www.vogella.com/) is a URL.

A URL consists of the following parts:

```
protocol:server:[port:][path][resource]

For example:

http://www.vogella.com:80/articles/HTML/article.html

protocol: http://
server: www.vogella.com
[port:] 80 (optional)
path: articles/HTML/
resource: article.html
```

### [](https://www.vogella.com/tutorials/Webstandards/article.html#architecture_dns)[1.6. DNS - Dynamic name server and entries](https://www.vogella.com/tutorials/Webstandards/article.html#architecture_dns)

A DNS server is responsible for identifying resources in the Internet based on domain names. The provide which hosts and URL can specify which DNS server should be used and if someone requests a resource with this URL, the name server is contacted to which IP address the domain belongs.

To check which entries for a certain domain name is returned, you can use the `digg` command on the command line. f

```
# return the IP address of vogella.com from the named nameserver
dig @robotns3.second-ns.com vogella.com
```
