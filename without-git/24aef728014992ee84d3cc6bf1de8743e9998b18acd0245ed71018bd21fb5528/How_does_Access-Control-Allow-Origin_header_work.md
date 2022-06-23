Apparently, I have completely misunderstood its semantics. I thought of something like this:

1.  A client downloads javascript code MyCode.js from `http://siteA` - **the origin**.
2.  The response header of MyCode.js contains **Access-Control-Allow-Origin: `http://siteB`**, which I thought meant that MyCode.js was allowed to make cross-origin references to the site B.
3.  The client triggers some functionality of MyCode.js, which in turn make requests to `http://siteB`, which should be fine, despite being cross-origin requests.

Well, I am wrong. It does not work like this at all. So, I have read [Cross-origin resource sharing](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) and attempted to read [Cross-Origin Resource Sharing in w3c recommendation](http://www.w3.org/TR/cors/)

One thing is sure - I still do not understand how am I supposed to use this header.

I have full control of both site A and site B. How do I enable the javascript code downloaded from the site A to access resources on the site B using this header?

P.S.

I do not want to utilize JSONP.

[javascript](https://stackoverflow.com/questions/tagged/javascript "show questions tagged 'javascript'")[cross-domain](https://stackoverflow.com/questions/tagged/cross-domain "show questions tagged 'cross-domain'")[cors](https://stackoverflow.com/questions/tagged/cors "show questions tagged 'cors'")

[Share](https://stackoverflow.com/q/10636611 "Short permalink to this question")

[Improve this question](https://stackoverflow.com/posts/10636611/edit)

Follow

[edited May 15 '20 at 9:53](https://stackoverflow.com/posts/10636611/revisions "show all edits to this post")

[

![](https://i.stack.imgur.com/125k3.jpg?s=64&g=1)

](https://stackoverflow.com/users/860099/kamil-kie%c5%82czewski)

[Kamil Kiełczewski](https://stackoverflow.com/users/860099/kamil-kie%c5%82czewski)

64k2424 gold badges307307 silver badges266266 bronze badges

asked May 17 '12 at 13:23

[

![](https://www.gravatar.com/avatar/73babeb4b448be14151bac397c7b0535?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/80002/mark)

[mark](https://stackoverflow.com/users/80002/mark)

51.8k6767 gold badges249249 silver badges512512 bronze badges

-   6

    I'm not sure, but I believe that setting the header this way allows code on site B to fetch `http://siteA/MyCode.js`. 

    -- [pimvdb](https://stackoverflow.com/users/514749/pimvdb "144,488 reputation")

     [May 17 '12 at 13:26](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment13788316_10636611) 

-   9

    But how??? In order to get the header value one has to fetch the resource first, but the resource is cross-origin and so shouldn't the browser block the request in the first place? 

    -- [mark](https://stackoverflow.com/users/80002/mark "51,834 reputation")

     [May 17 '12 at 13:33](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment13788480_10636611)

-   1

    What you described actually resembles another practice, [Content Security Policy](https://en.wikipedia.org/wiki/Content_Security_Policy) 

    -- [Alex](https://stackoverflow.com/users/902859/alex "337 reputation")

     [Jun 9 '16 at 17:03](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment62935360_10636611)

-   5

    @mark You don't have to fetch the resource in order to get the headers. The HTTP HEADER method will return headers-only. And in the case of CORS, a preflight check is done using the HTTP OPTIONS method which doesn't return the body either. apsillers answer describes this nicely [stackoverflow.com/posts/10636765/revisions](https://stackoverflow.com/posts/10636765/revisions). 

    -- [Matthew](https://stackoverflow.com/users/46249/matthew "927 reputation")

     [Sep 9 '16 at 23:50](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment66167159_10636611)

-   @DrMcCleod The wiki page linked is pretty clear, the Mozilla page however... 

    -- [Déjà vu](https://stackoverflow.com/users/338904/d%c3%a9j%c3%a0-vu "26,676 reputation")

     [May 4 at 7:48](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment119098031_10636611)

[Add a comment](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work# "Use comments to ask for more information or suggest improvements. Avoid answering questions in comments.")

18 Answers
----------

[Active](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work?answertab=active#tab-top "Answers with the latest activity first")[Oldest](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work?answertab=oldest#tab-top "Answers in the order they were provided")[Votes](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work?answertab=votes#tab-top "Answers with the highest score first")

1679

[](https://stackoverflow.com/posts/10636765/timeline)

`Access-Control-Allow-Origin` is a [CORS (Cross-Origin Resource Sharing) header](http://www.html5rocks.com/en/tutorials/cors/).

When Site A tries to fetch content from Site B, Site B can send an `Access-Control-Allow-Origin` response header to tell the browser that the content of this page is accessible to certain origins. (An *origin* is a [domain, plus a scheme and port number](https://stackoverflow.com/a/19542686/710446).) By default, Site B's pages are [not accessible to any other origin](https://en.wikipedia.org/wiki/Same-origin_policy); using the `Access-Control-Allow-Origin` header opens a door for cross-origin access by specific requesting origins.

For each resource/page that Site B wants to make accessible to Site A, Site B should serve its pages with the response header:

```
Access-Control-Allow-Origin: http://siteA.com

```

Modern browsers will not block cross-domain requests outright. If Site A requests a page from Site B, the browser will actually fetch the requested page *on the network level* and check if the response headers list Site A as a permitted requester domain. If Site B has not indicated that Site A is allowed to access this page, the browser will trigger the `XMLHttpRequest`'s `error` event and deny the response data to the requesting JavaScript code.

Non-simple requests
===================

What happens on the network level can be *slightly* more complex than explained above. If the request is a ["non-simple" request](http://www.html5rocks.com/en/tutorials/cors/#toc-handling-a-not-so-simple-request), the browser first sends a data-less "preflight" OPTIONS request, to verify that the server will accept the request. A request is non-simple when either (or both):

-   using an HTTP verb other than GET or POST (e.g. PUT, DELETE)
-   using non-simple request headers; the only simple requests headers are:
    -   `Accept`
    -   `Accept-Language`
    -   `Content-Language`
    -   `Content-Type` (this is only simple when its value is `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain`)

If the server responds to the OPTIONS preflight with appropriate response headers (`Access-Control-Allow-Headers` for non-simple headers, `Access-Control-Allow-Methods` for non-simple verbs) that match the non-simple verb and/or non-simple headers, then the browser sends the actual request.

Supposing that Site A wants to send a PUT request for `/somePage`, with a non-simple `Content-Type` value of `application/json`, the browser would first send a preflight request:

```
OPTIONS /somePage HTTP/1.1
Origin: http://siteA.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Content-Type

```

Note that `Access-Control-Request-Method` and `Access-Control-Request-Headers` are added by the browser automatically; you do not need to add them. This OPTIONS preflight gets the successful response headers:

```
Access-Control-Allow-Origin: http://siteA.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Content-Type

```

When sending the actual request (after preflight is done), the behavior is identical to how a simple request is handled. In other words, a non-simple request whose preflight is successful is treated the same as a simple request (i.e., the server must still send `Access-Control-Allow-Origin` again for the actual response).

The browsers sends the actual request:

```
PUT /somePage HTTP/1.1
Origin: http://siteA.com
Content-Type: application/json

{ "myRequestContent": "JSON is so great" }

```

And the server sends back an `Access-Control-Allow-Origin`, just as it would for a simple request:

```
Access-Control-Allow-Origin: http://siteA.com

```

See [Understanding XMLHttpRequest over CORS](https://stackoverflow.com/a/13400954/710446) for a little more information about non-simple requests.

[Share](https://stackoverflow.com/a/10636765 "Short permalink to this answer")

[Improve this answer](https://stackoverflow.com/posts/10636765/edit)

Follow

[edited May 23 '17 at 11:47](https://stackoverflow.com/posts/10636765/revisions "show all edits to this post")

[

![](https://www.gravatar.com/avatar/a007be5a61f6aa8f3e85ae2fc18dd66e?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/-1/community)

[Community](https://stackoverflow.com/users/-1/community)Bot

111 silver badge

answered May 17 '12 at 13:33

[

![](https://www.gravatar.com/avatar/a1325bf0a5baed69f6f65248c3b2254a?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/710446/apsillers)

[apsillers](https://stackoverflow.com/users/710446/apsillers)

106k1616 gold badges211211 silver badges232232 bronze badges

-   4

    But MyCode.js cannot reach for site B in the first place! How will this header arrive at the client? BTW, kudos for the light life glider in the avatar. 

    -- [mark](https://stackoverflow.com/users/80002/mark "51,834 reputation")

     [May 17 '12 at 13:36](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment13788543_10636765) 

-   11

    I edited with clarification: the browser actually does perform a network fetch on site B to check the `Access-Control-Allow-Origin` header, but it might not provide the response to the JS code on site A if the header doesn't allow site A to have it. (P.S. Thanks :) ) 

    -- [apsillers](https://stackoverflow.com/users/710446/apsillers "105,773 reputation")

     [May 17 '12 at 13:41](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment13788658_10636765) 

-   2

    Indeed, I do not see any record of the download in Fiddler, unless the cross-origin request is approved. Interesting... 

    -- [mark](https://stackoverflow.com/users/80002/mark "51,834 reputation")

     [May 17 '12 at 14:18](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment13789705_10636765)

-   31

    @Jwan622 A fundamental "*why?*" question like that is probably out of scope for this particular answer, which is just about rules & mechanics. Basically, the browser allows *you*, the human sitting at the computer, see any resource from any origin. It disallows scripts (which could be written by anyone) from reading resources from origins that are different from the origin of the page running the script. Some related questions are [programmers.stackexchange.com/q/216605](http://programmers.stackexchange.com/q/216605/) and [What is the threat model for the same origin policy?](http://stackoverflow.com/q/6744283/) 

    -- [apsillers](https://stackoverflow.com/users/710446/apsillers "105,773 reputation")

     [Jul 12 '15 at 17:55](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment50720789_10636765)

-   3

    In case of using an authentication, `Access-Control-Allow-Origin` does not accept the `*` in some browsers (FF and Chrome AFAIK). So in this case you have to specify the value from the `Origin` header. Hope that this will help someone. 

    -- [Zsolti](https://stackoverflow.com/users/340992/zsolti "1,453 reputation")

     [Sep 9 '16 at 19:59](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment66162852_10636765)

[Show **15** more comments](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work# "Expand to show all comments on this post")

Report this ad

140

[](https://stackoverflow.com/posts/21310171/timeline)

Cross-Origin Resource Sharing - `CORS` (A.K.A. Cross-Domain AJAX request) is an issue that most web developers might encounter, according to Same-Origin-Policy, browsers restrict client JavaScript in a security sandbox, usually JS cannot directly communicate with a remote server from a different domain. In the past developers created many tricky ways to achieve Cross-Domain resource request, most commonly using ways are:

1.  Use Flash/Silverlight or server side as a "proxy" to communicate with remote.
2.  JSON With Padding ([JSONP](http://en.wikipedia.org/wiki/JSONP)).
3.  Embeds remote server in an iframe and communicate through fragment or window.name, refer [here](http://www.ibm.com/developerworks/library/wa-crossdomaincomm/#N10120).

Those tricky ways have more or less some issues, for example JSONP might result in security hole if developers simply "eval" it, and #3 above, although it works, both domains should build strict contract between each other, it neither flexible nor elegant IMHO:)

W3C had introduced Cross-Origin Resource Sharing (CORS) as a standard solution to provide a safe, flexible and a recommended standard way to solve this issue.

**The Mechanism**

From a high level we can simply deem CORS is a contract between client AJAX call from domain A and a page hosted on domain B, a typical Cross-Origin request/response would be:

**DomainA AJAX request headers**

```
Host DomainB.com
User-Agent Mozilla/5.0 (Windows NT 6.1; WOW64; rv:2.0) Gecko/20100101 Firefox/4.0
Accept text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8,application/json
Accept-Language en-us;
Accept-Encoding gzip, deflate
Keep-Alive 115
Origin http://DomainA.com

```

**DomainB response headers**

```
Cache-Control private
Content-Type application/json; charset=utf-8
Access-Control-Allow-Origin DomainA.com
Content-Length 87
Proxy-Connection Keep-Alive
Connection Keep-Alive

```

The blue parts I marked above were the kernal facts, "Origin" request header "indicates where the cross-origin request or preflight request originates from", the "Access-Control-Allow-Origin" response header indicates this page allows remote request from DomainA (if the value is * indicate allows remote requests from any domain).

As I mentioned above, W3 recommended browser to implement a "**preflight request**" before submiting the actually Cross-Origin HTTP request, in a nutshell it is an HTTP `OPTIONS` request:

```
OPTIONS DomainB.com/foo.aspx HTTP/1.1

```

If foo.aspx supports OPTIONS HTTP verb, it might return response like below:

```
HTTP/1.1 200 OK
Date: Wed, 01 Mar 2011 15:38:19 GMT
Access-Control-Allow-Origin: http://DomainA.com
Access-Control-Allow-Methods: POST, GET, OPTIONS, HEAD
Access-Control-Allow-Headers: X-Requested-With
Access-Control-Max-Age: 1728000
Connection: Keep-Alive
Content-Type: application/json

```

Only if the response contains "Access-Control-Allow-Origin" AND its value is "*" or contain the domain who submitted the CORS request, by satisfying this mandtory condition browser will submit the actual Cross-Domain request, and cache the result in "**Preflight-Result-Cache**".

I blogged about CORS three years ago: [AJAX Cross-Origin HTTP request](http://wayneye.com/Blog/Ajax-Cross-Origin-HTTP-request)

[Share](https://stackoverflow.com/a/21310171 "Short permalink to this answer")

[Improve this answer](https://stackoverflow.com/posts/21310171/edit)

Follow

[edited Jan 18 '20 at 7:52](https://stackoverflow.com/posts/21310171/revisions "show all edits to this post")

[

![](https://www.gravatar.com/avatar/600879854c516cd3b5c1df1817f008f2?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/2454958/fade2black)

[fade2black](https://stackoverflow.com/users/2454958/fade2black)

49611 gold badge99 silver badges2424 bronze badges

answered Jan 23 '14 at 13:54

[

![](https://www.gravatar.com/avatar/dc654756c7cb2ba653f94a946e1d137d?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/498175/wayne-ye)

[Wayne Ye](https://stackoverflow.com/users/498175/wayne-ye)

2,32422 gold badges2222 silver badges2828 bronze badges

-   This answer made me realize why i was suddenly getting an issue without using this header for POST and GET requests. I had accidently opened the index.html file directly from disk, so the URL the client was accessing on node.js was thought to be cross-domain, while it was simply running on localhost. Accessing via the URL (as one would usually do) "solved" my issue... 

    -- [LuqJensen](https://stackoverflow.com/users/5552144/luqjensen "300 reputation")

     [Jan 8 '17 at 21:06](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment70280990_21310171)

-   Would a domain in an external network able to communite with a domain on an internal network? 

    -- [Si8](https://stackoverflow.com/users/837722/si8 "8,772 reputation")

     [Mar 31 '17 at 1:47](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment73340381_21310171)

[Add a comment](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work# "Use comments to ask for more information or suggest improvements. Avoid comments like "+1" or "thanks".")

82

[](https://stackoverflow.com/posts/42605316/timeline)

Question is a bit too old to answer, but I am posting this for any future reference to this question.

According to [this](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) Mozilla Developer Network article,

> A resource makes a **cross-origin HTTP request** when it requests a resource from a different domain, or port than the one which the first resource itself serves.

[![enter image description here](https://i.stack.imgur.com/zn3sT.png)](https://i.stack.imgur.com/zn3sT.png)

An **HTML page** served from `http://domain-a.com` makes an `<img>` src request for `http://domain-b.com/image.jpg`.\
Many pages on the web today load resources like **CSS stylesheets**, **images** and **scripts** from separate domains (thus it should be cool).

Same-Origin Policy
==================

For security reasons, browsers restrict **cross-origin HTTP** requests **initiated from within scripts**.\
For example, `XMLHttpRequest` and `Fetch` follow the **same-origin policy**.\
So, a web application using `XMLHttpRequest` or `Fetch` could only make **HTTP requests** to **its own domain**.

Cross-Origin Resource Sharing (CORS)
====================================

To improve web applications, developers asked browser vendors to allow cross-domain requests.

The **Cross-Origin Resource Sharing (CORS)** mechanism gives web servers **cross-domain access controls**, which enable secure cross-domain data transfers.\
Modern browsers use **CORS** in an **API container** - such as `XMLHttpRequest` or `Fetch` - to mitigate risks of cross-origin HTTP requests.

How CORS works (`Access-Control-Allow-Origin` header)
-----------------------------------------------------

[Wikipedia](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing):

> The CORS standard describes new HTTP headers which provide browsers and servers a way to request remote URLs only when they have permission.
>
> Although some validation and authorization can be performed by the server, **it is generally the browser's responsibility** to support these headers and honor the restrictions they impose.

Example
=======

1.  The browser sends the `OPTIONS` request with an `Origin HTTP` header.

    The value of this header is the domain that served the parent page. When a page from `http://www.example.com` attempts to access a user's data in `service.example.com`, the following request header would be sent to `service.example.com`:

    Origin: [http://www.example.com](http://www.example.com/)

2.  The server at `service.example.com` may respond with:

    -   An `Access-Control-Allow-Origin` (ACAO) header in its response indicating which origin sites are allowed.\
        For example:

        `Access-Control-Allow-Origin: http://www.example.com`

    -   An error page if the server does not allow the cross-origin request

    -   An `Access-Control-Allow-Origin` (ACAO) header with a wildcard that allows all domains:

        `Access-Control-Allow-Origin: *`

[Share](https://stackoverflow.com/a/42605316 "Short permalink to this answer")

[Improve this answer](https://stackoverflow.com/posts/42605316/edit)

Follow

answered Mar 5 '17 at 6:39

[

![](https://www.gravatar.com/avatar/5876f452293163fba2790c9996e1f812?s=64&d=identicon&r=PG&f=1)

](https://stackoverflow.com/users/5104596/pmpr)

[Pmpr](https://stackoverflow.com/users/5104596/pmpr)

15.5k2323 gold badges8383 silver badges9595 bronze badges

-   2

    How to set none are allowed to acees some thing like `Access-Control-Allow-Origin:null` 

    -- [Subin Chalil](https://stackoverflow.com/users/2756662/subin-chalil "3,219 reputation")

     [Aug 25 '17 at 6:18](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment78709160_42605316) 

-   3

    When I don't want to allow anyone to access my resources through CORS, what value should I set for `Access-Control-Allow-Origin` ? I mean the negation of `Access-Control-Allow-Origin: *` 

    -- [Subin Chalil](https://stackoverflow.com/users/2756662/subin-chalil "3,219 reputation")

     [Aug 31 '17 at 13:54](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment78925983_42605316)

-   6

    Just dont set anything, for that purpose 

    -- [Pmpr](https://stackoverflow.com/users/5104596/pmpr "15,549 reputation")

     [Aug 31 '17 at 13:56](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment78926089_42605316)

-   where I put access-control 

    -- [Ganesan J](https://stackoverflow.com/users/11828164/ganesan-j "165 reputation")

     [Feb 16 at 11:36](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment117080490_42605316)

-   I your web server is Apache, then you may put in your `http-config` or `htaccess` files 

    -- [Pmpr](https://stackoverflow.com/users/5104596/pmpr "15,549 reputation")

     [Feb 16 at 11:42](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment117080634_42605316)

[Add a comment](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work# "Use comments to ask for more information or suggest improvements. Avoid comments like "+1" or "thanks".")

Report this ad

36

[](https://stackoverflow.com/posts/48490061/timeline)

Whenever I start thinking about CORS, my intuition about which site hosts the headers is incorrect, just as you described in your question. For me, it helps to think about the purpose of the same origin policy.

The purpose of the same origin policy is to protect you from malicious JavaScript on siteA.com accessing private information you've chosen to share only with siteB.com. Without the same origin policy, JavaScript written by the authors of siteA.com could make your browser make requests to siteB.com, using your authentication cookies for siteB.com. In this way, siteA.com could steal the secret information you share with siteB.com.

Sometimes you need to work cross domain, which is where CORS comes in. CORS relaxes the same origin policy for siteB.com, using the `Access-Control-Allow-Origin` header to list other domains (siteA.com) that are trusted to run JavaScript that can interact with siteB.com.

To understand which domain should serve the CORS headers, consider this. You visit malicious.com, which contains some JavaScript that tries to make a cross domain request to mybank.com. It should be up to mybank.com, not malicious.com, to decide whether or not it sets CORS headers that relax the same origin policy allowing the JavaScript from malicious.com to interact with it. If malicous.com could set its own CORS headers allowing its own JavaScript access to mybank.com, this would completely nullify the same origin policy.

I think the reason for my bad intuition is the point of view I have when developing a site. It's **my** site, with all **my** JavaScript, therefore it isn't doing anything malicious and it should be up to **me** to specify which other sites **my** JavaScript can interact with. When in fact I should be thinking which **other** sites JavaScript are trying to interact with my site and should I use CORS to allow them?

[Share](https://stackoverflow.com/a/48490061 "Short permalink to this answer")

[Improve this answer](https://stackoverflow.com/posts/48490061/edit)

Follow

[edited Oct 3 at 11:49](https://stackoverflow.com/posts/48490061/revisions "show all edits to this post")

[

![](https://i.stack.imgur.com/tAFkf.jpg?s=64&g=1)

](https://stackoverflow.com/users/3593246/jayp)

[jayp](https://stackoverflow.com/users/3593246/jayp)

14211 silver badge1111 bronze badges

answered Jan 28 '18 at 18:47

[

![](https://www.gravatar.com/avatar/3ecf0502e68f93a5d3eabdca8ef48c32?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/893515/dom)

[Dom](https://stackoverflow.com/users/893515/dom)

2,59422 gold badges2424 silver badges3232 bronze badges

-   2

    Given paragraph 2, do you have siteA, siteB backwards in paragraph 3? I could be misunderstanding, but the earlier paragraph seems to imply its siteA that is running the JS in question? 

    -- [cellepo](https://stackoverflow.com/users/1357094/cellepo "3,182 reputation")

     [Apr 23 '20 at 3:50](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment108581701_48490061)

-   1

    From OP - "I think the reason for my bad intuition is the point of view I have when developing a site. It's my site, with all my JavaScript, therefore it isn't doing anything malicious and it should be up to me to specify which other sites my JavaScript can interact with. " - for those who first thought like this (as I did), there is another rule, one that is not CORS, for this: CSP (consent security policy) - using CSP you can specify which site/url your site is able to visit/reach. 

    -- [Pedro Gabriel Lima](https://stackoverflow.com/users/5666052/pedro-gabriel-lima "1,012 reputation")

     [Aug 10 '20 at 17:36](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment112011222_48490061) 

[Add a comment](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work# "Use comments to ask for more information or suggest improvements. Avoid comments like "+1" or "thanks".")

15

[](https://stackoverflow.com/posts/46774307/timeline)

Using **React** and **Axios**, join proxy link to the URL and add header as shown below

`https://cors-anywhere.herokuapp.com/` + `Your API URL`

Just by adding the Proxy link will work, but it can also throw error for No Access again. Hence better to add header as shown below.

```
axios.get(`https://cors-anywhere.herokuapp.com/[YOUR_API_URL]`,{headers: {'Access-Control-Allow-Origin': '*'}})
      .then(response => console.log(response:data);
  }

```

* * * * *

WARNING: Not to be used in Production
=====================================

> This is just a quick fix, if you're struggling with why you're not able to get a response, you CAN use this. But again it's **not the best answer for production.**
>
> Got several downvotes and it completely makes sense, I should have added the warning a long time ago.

[Share](https://stackoverflow.com/a/46774307 "Short permalink to this answer")

[Improve this answer](https://stackoverflow.com/posts/46774307/edit)

Follow

[edited Jun 4 '20 at 18:38](https://stackoverflow.com/posts/46774307/revisions "show all edits to this post")

answered Oct 16 '17 at 15:53

[

![](https://graph.facebook.com/10154540609073171/picture?type=large)

](https://stackoverflow.com/users/7427111/dhaval-jardosh)

[Dhaval Jardosh](https://stackoverflow.com/users/7427111/dhaval-jardosh)

6,56544 gold badges2323 silver badges6060 bronze badges

-   29

    Please don't do this. Using a proxy link is like handing over user cookies to a middle-man. Should be illegal IMHO 

    -- [anthonymonori](https://stackoverflow.com/users/2759296/anthonymonori "1,663 reputation")

     [Dec 9 '17 at 10:12](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment82415455_46774307)

-   1

    this was useful for me! Except rather than using the * (which has security issues), I limited Access Control to the exact address i'm using to learn with... in my case '[reqres.in/api/register](http://reqres.in/api/register)' 

    -- [C-Note187](https://stackoverflow.com/users/10120439/c-note187 "496 reputation")

     [Jan 23 '20 at 12:03](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment105885731_46774307)

[Add a comment](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work# "Use comments to ask for more information or suggest improvements. Avoid comments like "+1" or "thanks".")

15

[](https://stackoverflow.com/posts/58921781/timeline)

From my own experience, it's hard to find a simple explanation why CORS is even a concern.

Once you understand why it's there, the headers and discussion becomes a lot clearer. I'll give it a shot in a few lines.

* * * * *

It's all about cookies. Cookies are stored on a client by their domain.

> An example story: On your computer, there's a cookie for `yourbank.com`. Maybe your session is in there.

**Key point:** When a client makes a request to the server, it will send the cookies stored under the domain for that request.

> You're logged in on your browser to `yourbank.com`. You request to see all your accounts, and cookies are sent for `yourbank.com`. `yourbank.com` receives the pile of cookies and sends back its response (your accounts).

If another client makes a *cross origin* request to a server, those cookies are sent along, just as before. Ruh roh.

> You browse to `malicious.com`. Malicious makes a bunch of requests to different banks, including `yourbank.com`.

Since the cookies are validated as expected, the server will authorize the response.

> Those cookies get gathered up and sent along - and now, `malicious.com` has a response from `yourbank`.

Yikes.

* * * * *

So now, a few questions and answers become apparent:

-   "Why don't we just block the browser from doing that?" Yep. CORS.
-   "How do we get around it?" Have the server tell the request that CORS is OK.

[Share](https://stackoverflow.com/a/58921781 "Short permalink to this answer")

[Improve this answer](https://stackoverflow.com/posts/58921781/edit)

Follow

[edited May 28 at 22:01](https://stackoverflow.com/posts/58921781/revisions "show all edits to this post")

answered Nov 18 '19 at 19:40

[

![](https://i.stack.imgur.com/eTnXA.png?s=64&g=1)

](https://stackoverflow.com/users/385273/ben)

[Ben](https://stackoverflow.com/users/385273/ben)

49.6k4646 gold badges164164 silver badges211211 bronze badges

-   I like this answer and I feel like this is right, but I don't understand why it seems like it's only the front-end that throws an error, and the backend might still process the request. I wrote a question about it [stackoverflow.com/questions/69559952/...](https://stackoverflow.com/questions/69559952/if-i-get-a-cross-origin-request-blocked-error-on-my-front-end-why-does-the-requ "if i get a cross origin request blocked error on my front end why does the requ") 

    -- [Cameron](https://stackoverflow.com/users/5645583/cameron "2,238 reputation")

     [Oct 13 at 17:41](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment122950116_58921781)

-   1

    The backend only sees one request, from one URL. The backend for `yourbank.com` doesn't (definitively) know that it's `malicious.com` making the request. The browser is the only place that keeps track of all of the different domains you've visited 

    -- [Ben](https://stackoverflow.com/users/385273/ben "49,597 reputation")

     [Oct 13 at 21:33](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment122954644_58921781)

[Add a comment](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work# "Use comments to ask for more information or suggest improvements. Avoid comments like "+1" or "thanks".")

14

[](https://stackoverflow.com/posts/35664676/timeline)

*1\. A client downloads javascript code MyCode.js from [http://siteA](http://sitea/) - the origin.*

The code that does the downloading - your html script tag or xhr from javascript or whatever - came from, let's say, [http://siteZ](http://sitez/). And, when the browser requests MyCode.js, it sends an Origin: header saying "Origin: [http://siteZ](http://sitez/)", because it can see that you're requesting to siteA and siteZ != siteA. (You cannot stop or interfere with this.)

*2\. The response header of MyCode.js contains Access-Control-Allow-Origin: [http://siteB](http://siteb/), which I thought meant that MyCode.js was allowed to make cross-origin references to the site B.*

no. It means, Only siteB is allowed to do this request. So your request for MyCode.js from siteZ gets an error instead, and the browser typically gives you nothing. But if you make your server return A-C-A-O: siteZ instead, you'll get MyCode.js . Or if it sends '*', that'll work, that'll let everybody in. Or if the server always sends the string from the Origin: header... but... for security, if you're afraid of hackers, your server should only allow origins on a shortlist, that are allowed to make those requests.

Then, MyCode.js comes from siteA. When it makes requests to siteB, they are all cross-origin, the browser sends Origin: siteA, and siteB has to take the siteA, recognize it's on the short list of allowed requesters, and send back A-C-A-O: siteA. Only then will the browser let your script get the result of those requests.

[Share](https://stackoverflow.com/a/35664676 "Short permalink to this answer")

[Improve this answer](https://stackoverflow.com/posts/35664676/edit)

Follow

answered Feb 27 '16 at 1:37

[

![](https://i.stack.imgur.com/RVfcA.jpg?s=64&g=1)

](https://stackoverflow.com/users/1373611/osamabinlogin)

[OsamaBinLogin](https://stackoverflow.com/users/1373611/osamabinlogin)

54144 silver badges1010 bronze badges

[Add a comment](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work# "Use comments to ask for more information or suggest improvements. Avoid comments like "+1" or "thanks".")

12

[](https://stackoverflow.com/posts/42397163/timeline)

If you want just to test a cross domain application in which the browser blocks your request, then you can just open your browser in unsafe mode and test your application without changing your code and without making your code unsafe. From MAC OS you can do this from the terminal line:

```
open -a Google\ Chrome --args --disable-web-security --user-data-dir

```

[Share](https://stackoverflow.com/a/42397163 "Short permalink to this answer")

[Improve this answer](https://stackoverflow.com/posts/42397163/edit)

Follow

answered Feb 22 '17 at 16:32

[

![](https://www.gravatar.com/avatar/d0893c103adc10aaa324c391760501e7?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/3009621/maurizio-brioschi)

[Maurizio Brioschi](https://stackoverflow.com/users/3009621/maurizio-brioschi)

59577 silver badges1414 bronze badges

[Add a comment](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work# "Use comments to ask for more information or suggest improvements. Avoid comments like "+1" or "thanks".")

12

[](https://stackoverflow.com/posts/41723271/timeline)

If you are using PHP, try adding the following code at the beginning of the php file:

If you are using localhost, try this:

```
header("Access-Control-Allow-Origin: *");

```

If you are using external domains such as server, try this:

```
header("Access-Control-Allow-Origin: http://www.website.com");

```

[Share](https://stackoverflow.com/a/41723271 "Short permalink to this answer")

[Improve this answer](https://stackoverflow.com/posts/41723271/edit)

Follow

[edited Jul 10 '19 at 15:42](https://stackoverflow.com/posts/41723271/revisions "show all edits to this post")

[

![](https://www.gravatar.com/avatar/efa74da0a76d7d7cb5326003d4ef8a01?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/1298803/usumoio)

[usumoio](https://stackoverflow.com/users/1298803/usumoio)

3,41266 gold badges2828 silver badges5454 bronze badges

answered Jan 18 '17 at 15:30

[

![](https://graph.facebook.com/10153836918389403/picture?type=large)

](https://stackoverflow.com/users/6709405/melvin-guerrero)

[Melvin Guerrero](https://stackoverflow.com/users/6709405/melvin-guerrero)

19411 silver badge99 bronze badges

[Add a comment](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work# "Use comments to ask for more information or suggest improvements. Avoid comments like "+1" or "thanks".")

11

[](https://stackoverflow.com/posts/42063152/timeline)

I work with express 4 and node 7.4 and angular,I had the same problem me help this:\
a) server side: in file app.js I give headers to all response like:

```
app.use(function(req, res, next) {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
 });

```

**this must have before all router**.\
I saw a lot of added this headers:

```
res.header("Access-Control-Allow-Headers","*");
res.header('Access-Control-Allow-Credentials', true);
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

```

but i dont need that,\
b) client side: in send ajax you need add: "withCredentials: true," like:

```
$http({
     method: 'POST',
     url: 'url,
     withCredentials: true,
     data : {}
   }).then(function(response){
        // code
   }, function (response) {
         // code
   });

```

[Share](https://stackoverflow.com/a/42063152 "Short permalink to this answer")

[Improve this answer](https://stackoverflow.com/posts/42063152/edit)

Follow

[edited Nov 18 at 10:23](https://stackoverflow.com/posts/42063152/revisions "show all edits to this post")

[

![](https://www.gravatar.com/avatar/f9aab67045fa891d26b9a14a215a512a?s=64&d=identicon&r=PG&f=1)

](https://stackoverflow.com/users/12892553/nimantha)

[Nimantha](https://stackoverflow.com/users/12892553/nimantha)

5,42255 gold badges1818 silver badges5050 bronze badges

answered Feb 6 '17 at 8:19

[

![](https://www.gravatar.com/avatar/cf6bb307f74654f61b7c68339f83dbf4?s=64&d=identicon&r=PG&f=1)

](https://stackoverflow.com/users/7452985/izik-f)

[izik f](https://stackoverflow.com/users/7452985/izik-f)

2,09311 gold badge1414 silver badges1414 bronze badges

-   2

    `res.header('Access-Control-Allow-Origin', req.headers.origin);` is the same as `res.header('Access-Control-Allow-Origin', '*');` 

    -- [The Aelfinn](https://stackoverflow.com/users/3923962/the-aelfinn "10,852 reputation")

     [Sep 17 '19 at 14:41](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment102363048_42063152)

[Add a comment](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work# "Use comments to ask for more information or suggest improvements. Avoid comments like "+1" or "thanks".")

7

[](https://stackoverflow.com/posts/48441475/timeline)

In Python I have been using the [`Flask-CORS` library](https://flask-cors.readthedocs.io/en/latest/) with great success. It makes dealing with CORS super easy and painless. I added some code from the library's documentation below.

Installing:

```
$ pip install -U flask-cors

```

Simple example that allows CORS for all domains on all routes:

```
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def helloWorld():
  return "Hello, cross-origin-world!"

```

For more specific examples see the documentation. I have used the simple example above to get around the CORS issue in an ionic application I am building that has to access a separate flask server.

[Share](https://stackoverflow.com/a/48441475 "Short permalink to this answer")

[Improve this answer](https://stackoverflow.com/posts/48441475/edit)

Follow

answered Jan 25 '18 at 11:10

[

![](https://www.gravatar.com/avatar/50623f5ea714bc6271f9c34b13b090ab?s=64&d=identicon&r=PG&f=1)

](https://stackoverflow.com/users/5454400/peachykeen)

[peachykeen](https://stackoverflow.com/users/5454400/peachykeen)

3,58744 gold badges2424 silver badges4141 bronze badges

[Add a comment](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work# "Use comments to ask for more information or suggest improvements. Avoid comments like "+1" or "thanks".")

4

[](https://stackoverflow.com/posts/40836421/timeline)

For cross origin sharing, set header: `'Access-Control-Allow-Origin':'*';`

Php: `header('Access-Control-Allow-Origin':'*');`

Node: `app.use('Access-Control-Allow-Origin':'*');`

This will allow to share content for different domain.

[Share](https://stackoverflow.com/a/40836421 "Short permalink to this answer")

[Improve this answer](https://stackoverflow.com/posts/40836421/edit)

Follow

[edited Jan 16 '17 at 8:10](https://stackoverflow.com/posts/40836421/revisions "show all edits to this post")

[

![](https://www.gravatar.com/avatar/7ea7576c24b63bb5f2adbe3b1277780c?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/611879/budidino)

[budiDino](https://stackoverflow.com/users/611879/budidino)

11.6k88 gold badges8787 silver badges8989 bronze badges

answered Nov 28 '16 at 2:39

[

![](https://www.gravatar.com/avatar/25e24cc32841373ac70675f195eb8c80?s=64&d=identicon&r=PG&f=1)

](https://stackoverflow.com/users/2923052/suryadev)

[suryadev](https://stackoverflow.com/users/2923052/suryadev)

10911 silver badge33 bronze badges

[Add a comment](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work# "Use comments to ask for more information or suggest improvements. Avoid comments like "+1" or "thanks".")

4

[](https://stackoverflow.com/posts/54273606/timeline)

Simply paste the following code in your web.config file.

Noted that, you have to paste the following code under `<system.webServer>` tag

```
    <httpProtocol>
    <customHeaders>
     <add name="Access-Control-Allow-Origin" value="*" />
     <add name="Access-Control-Allow-Headers" value="Content-Type" />
     <add name="Access-Control-Allow-Methods" value="GET, POST, PUT, DELETE, OPTIONS" />
    </customHeaders>
  </httpProtocol>

```

[Share](https://stackoverflow.com/a/54273606 "Short permalink to this answer")

[Improve this answer](https://stackoverflow.com/posts/54273606/edit)

Follow

answered Jan 20 '19 at 4:35

[

![](https://i.stack.imgur.com/W4dPt.jpg?s=64&g=1)

](https://stackoverflow.com/users/6426633/juboraj-sarker)

[Juboraj Sarker](https://stackoverflow.com/users/6426633/juboraj-sarker)

86811 gold badge88 silver badges1313 bronze badges

-   This helped me. I was enabling cors in WebApiConfig.cs.but I used the above code and put it on the web. config and remove the WebApiConfig.cs code. It worked like charm. Thanks 

    -- [Mukesh Salaria](https://stackoverflow.com/users/2745868/mukesh-salaria "1,689 reputation")

     [Jul 30 at 11:47](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work#comment121217825_54273606) 

[Add a comment](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work# "Use comments to ask for more information or suggest improvements. Avoid comments like "+1" or "thanks".")

2

[](https://stackoverflow.com/posts/61816107/timeline)

Nginx and Appache
=================

As addition to [apsillers answer](https://stackoverflow.com/a/10636765/860099) I would like to add [wiki graph](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing#How_CORS_works) which shows when request is simple or not (and OPTIONS pre-flight request is send or not)

[![Enter image description here](https://i.stack.imgur.com/BTFel.png)](https://i.stack.imgur.com/BTFel.png)

For simple request (e.g. [hotlinking images](https://en.wikipedia.org/wiki/Inline_linking)) you don't need to change your server configuration files but you can add headers in application (hosted on server, e.g. in php) like Melvin Guerrero mention in his [answer](https://stackoverflow.com/a/41723271/860099) - but [remember](https://stackoverflow.com/a/46917668/860099): if you add full cors headers in you server (config) and at same time you allow simple cors on application (e.g. php) this will not work at all.

And here are configurations for two popular servers

-   turn on **CORS on Nginx** (`nginx.conf` file)

    Show code snippet

-   turn on **CORS on Appache** (`.htaccess` file)

    Show code snippet