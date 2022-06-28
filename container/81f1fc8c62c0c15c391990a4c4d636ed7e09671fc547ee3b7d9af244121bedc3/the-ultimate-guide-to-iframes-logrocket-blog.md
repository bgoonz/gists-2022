# The ultimate guide to iframes

> ## Excerpt
>
> Not a fan of iframes? This post provides an overview of the tag's best features, shows you how to use them, and how to secure them against vulnerabilities.

---

The iframe element (short for inline frame) is probably among the oldest HTML tags and was introduced in 1997 with HTML 4.01 by Microsoft Internet Explorer.

Even though all modern browsers support them, many developers write endless articles advising against using them.

I believe that their bad reputation should not prevent you from relying on them. They have many legitimate uses cases.

Besides, it’s not that hard to secure them, so you won’t have to worry about your user’s computer becoming infected.

To help you form your own opinion and sharpen your developer skills, we will cover all the essentials you should know about this controversial tag.

We’ll go through most of the features the iframe element provides and talk about how you use them, as well as how iframe can be useful for overcoming some tricky situations. Finally, we’ll talk about how you can secure your iframe to avoid potential vulnerabilities.

### What is an iframe, and when do you use it?

Developers mainly use the iframe tag to embed another HTML document within the current one.

You may have crossed paths with it when you had to include a third-party widget (like the famous Facebook like button), a YouTube video, or an advertising section on your website.

For instance, the code below will display a 500px square with the google homepage within:

```
<iframe src="https://www.google.com/" height="500px" width="500px"></iframe>
```

Here is another example in which we display a button to tweet your web page on Twitter:

```
<iframe src="https://platform.twitter.com/widgets/tweet_button.html" style="border: 0; width:130px; height:20px;"></iframe>
```

What you must keep in mind when thinking about an iframe is that it lets you embed an independent HTML document with its browsing context.

Thus, it will be isolated from the JavaScript and CSS of the parent. That is one of the valid purposes to use an iframe: to provide a measure of separation between your application and the iframe content.

Nonetheless, as you will see in this guide, the separation is not so perfect.

The iframe can still behave in annoying or malicious ways: triggering a popup or auto-playing videos for instance.

To illustrate how this isolation from the JavaScript and CSS is handy, let’s take a look at these two situations:

In an application, the user could create emails and save them as templates. On a particular page, I needed to list them to let him preview and choose one.

But, to prevent the CSS of the current website from affecting the style of these templates, I figured out that using an iframe with the `srcdoc` attribute was the cleanest solution.

```
<iframe srcdoc="<html><body>The content you see here will never be affected by the CSS of its parent container. It supposed to be rendered in black on a white background.</body></html>"></iframe>
```

The other situation when iframes saved my life was when I had to build a WYSIWYG editor for a customer. But the thing with these editors is that you have to find a way to keep the focus and the selection when the user is clicking on all the buttons across the interface.

Because an iframe offers an isolated environment, this means that the focus or the selection is never lost when you are clicking outside of it.

By using communication events between the iframe and the parent (more on how to do so later in this article), I managed to design a powerful editor in a snap.

### The attributes you need to know

To this day, there are eight attributes we can use to customize the behavior or styling of an iframe.

```
<iframe

  src="https://google.com/"    <!-- Sets the address of the document to embed -->

  srcdoc="<p>Some html</p>"    <!-- Sets the HTML content of the page to show -->

  height="100px"               <!-- Sets the iframe height in pixels -->

  width="100px"                <!-- Sets the iframe width in pixels -->

  name="my-iframe"             <!-- Sets the name of the iframe (mainly used to reference the element in JavaScript -->

  allow="fullscreen"           <!-- Sets the feature policy for the iframe. -->

  referrerpolicy="no-referrer" <!-- Set the referrer to send when fetching the iframe content -->

  sandbox="allow-same-origin"  <!-- Sets the restrictions of the iframe (more on this below) -->

></iframe>
```

You may find more than the ones listed above, but keep in mind that they are not supported in HTML5 anymore: `align`, `frameborder`, `longdesc`, `marginheight`, `marginwidth` and `scrolling`.

**Note**: By default, the iframe element has a border around it. To remove it, you can use the style attribute to set the border CSS property to none.

```
<iframe src="https://logrocket.com/" style="border: none;"></iframe>
```

### iframe events and communication

**Loading and errors**

Because an iframe is a document, you can use most [global event handlers](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers).

When you are initiating the iframe, two of them come in handy to improve the experience, like displaying a spinner or a specific message to assist the user:

- The `load` event. It is triggered when the iframe is fully loaded. In other words, all static assets have been downloaded, and all the elements in the DOM tree have fired their load event.
- The `error` event that is triggered when the loading failed.

You can listen to them with the `onload` and `onerror` attribute respectively:

```
<iframe src="https://logrocket.com/" onload="onLoad()" onerror="onError()"></iframe>
```

Or if you can add the listeners to your iframe programmatically.

```

const iframe = document.createElement("iframe");

iframe.onload = function() {
  console.log("The iframe is loaded");
};
iframe.onerror = function() {
  console.log("Something wrong happened");
};

iframe.src = "https://logrocket.com/";
document.body.appendChild(iframe);


const iframe = document.querySelector('.my-iframe');

iframe.onload = function() {
  console.log("The iframe is loaded");
}
iframe.onerror = function() {
  console.log("Something wrong happened");
}
```

### **Communication with iframes**

It is quite easy to send messages between the parent and the iframe. You have to use the `postMessage` function, which is [documented here](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).

**From the parent to the iframe**

Send the message from the parent element:

```
const myiframe = document.getElementById('myIframe')

myIframe.contentWindow.postMessage('message', '*');
```

And listen to it in the iframe:

```
window.onmessage = function(event){
    if (event.data == 'message') {
        console('Message received!');
    }
};
```

**From the iframe to the parent**

Send the message from the iframe:

```
window.top.postMessage('reply', '*')
```

And listen to it in the parent:

```
window.onmessage = function(event){
    if (event.data == 'reply') {
        console('Reply received!');
    }
};
```

**Note**: Keep in mind that you can end up in some tricky situations when you need to debug something as messages are fire-and-forget (i.e., there is no real error handling).

### Security

When you are using an iframe, you are mostly dealing with content coming from a third party over which you have no control.

Thus, you are increasing the risk of having a potential vulnerability in your application or simply having to deal with a bad user experience (like annoying video auto-play ).

Thankfully, you can blacklist or whitelist specific features.

You have to use the `sandbox` and `allow` the attributes we discussed earlier.

> Keep in mind that a good rule of thumb is to always grant the minimum level of capability necessary to a resource to do its job. Security experts refer to this concept as “the principle of least privilege.”

**The sandbox attribute**

Here is the complete list of sandboxing flags and their purposes:

| Flag                                        | Details                                                                                                  |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **allow-forms**                             | Allows form submission.                                                                                  |
| **allow-modals**                            | Allows the resource to open new modal windows.                                                           |
| **allow-orientation-lock**                  | Allows the resource to lock the screen orientation.                                                      |
| **allow-pointer-lock**                      | Allows the resource to use the Pointer Lock API.                                                         |
| **allow-popups**                            | Allows the resource to open new popups or tabs.                                                          |
| **allow-popups-to-escape-sandbox**          | Allows the resource to open new windows that will not inherit the sandboxing.                            |
| **allow-presentation**                      | Allows the resource to start a presentation session.                                                     |
| **allow-same-origin**                       | Allows the resource to maintain its origin.                                                              |
| **allow-scripts**                           | Allows the resource to run scripts.                                                                      |
| **allow-top-navigation**                    | Allows the resource to navigate the top-level browsing context.                                          |
| **allow-top-navigation-by-user-activation** | Allows the resource to navigate the top-level browsing context, but only if initiated by a user gesture. |

It is up to you to define which privileges you can grant to each iframe.

For instance, if your iframe only needs to submit forms and to open new modal windows, here is how you will configure the sandbox attribute:

```
<iframe sandbox="allow-forms allow-modals" src="https://www.something.com/"></iframe>
```

For a situation when the sandbox attribute is configured, and one feature is not working correctly within the resource, it might be because it lacks a specific flag.

Make sure you know more about them to debug things quickly.

Also, keep in mind that using an empty sandbox attribute will fully sandbox the iframe.

This means that the JavaScript inside the iframe will not be executed, and all the privileges listed above will be restricted (like creating new windows or loading a plugin).

The empty sandbox attribute is mostly using for static content but will drastically reduce the capability required for other resources to work properly.

```
<iframe sandbox="allow-forms allow-modals" src="https://www.something.com/"></iframe>
```

**Note**: The sandbox attribute is unsupported in Internet Explorer 9 and earlier.

**The `allow` attribute**

This `allow` attribute is currently experimental and only supported by Chromium-based browsers. It lets you allow whitelist specific features like letting the iframe access to the accelerometer, the battery information, or the camera.

There are more than 25 available flags, so I will not list them all here. You can browse them [on the Mozilla Feature Policy Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy#Directives). I summarized the most popular in the table below:

| Flag                     | Details                                                 |
| ------------------------ | ------------------------------------------------------- |
| **accelerometer**        | Allows access the Accelerometer interface               |
| **ambient-light-sensor** | Allows access the AmbientLightSensor interface          |
| **autoplay**             | Allows to autoplay video and audio files                |
| **battery**              | Allows access to the Battery Status API                 |
| **camera**               | Allows access to the camera                             |
| **fullscreen**           | Allows access to fullscreen mode                        |
| **geolocation**          | Allows access to the Geolocation API                    |
| **gyroscope**            | Allows access to the Sensors API Gyroscope interface    |
| **magnetometer**         | Allows access to the Sensors API Magnetometer interface |
| **microphone**           | Allows access to the device microphone                  |
| **midi**                 | Allows access to the Web MIDI API                       |
| **payment**              | Allows access to the Payment Request API                |
| **usb**                  | Allows access to the WebUSB API                         |
| **vibrate**              | Allows access to the Vibration API                      |

### Things to know about iframes

**How to deal with browsers that do not support iframes**

If a browser does not support an iframe, it will display the content included between the opening `<iframe>` tag and the closing `</iframe>` tag.

Thus, you should always think about placing a warning message as a fallback for those poor users.

```
<iframe>
  <p>Your browser does not support iframes.</p>
</iframe>
```

**How can you render the iframe like it is actually part of the parent document (i.e., no borders and scrollbars) ?**

🤓 The `seamless` attribute has been introduced for this exact purpose. It is still experimental and poorly supported among browsers (only Chromium-based understand it).

It’s also not part of the W3C HTML5 specification at the time of this writing.

```
<iframe seamless src="https://logrocket.com/"></iframe>
```

**Can iframes effect the SEO of my website?**

I did not know much about this, so I had to dig a little. There are many speculations around this subject.

For a long time, crawlers could not understand them, but this is no longer the case. The most relevant answer I found was [from this article](https://www.boostability.com/the-affect-of-iframes-on-seo/) and today’s conclusion seems to be:

> Since search engines consider the content in iframes to belong to another website, the best you can hope for is no effect. Iframes tend to neither help nor hurt your search engine ranking.

Thus, it is best to assume that the content displayed via iframes may not be indexed or available to appear in Google’s search results. A workaround would be to make sure to provide additional text-based links to the content they display so that Googlebot can crawl and index this content.

**Note**: You should also not worry about duplicate content issues since today’s web crawlers usually recognize them.

**Can iframes affect the loading speed of my website?**

Every iframe on a page will increase the memory used as well as other computing resources like your bandwidth.

So, you should not use iframe excessively without monitoring what’s going on, or you might end up harming your page performance.

To avoid having your iframes slow down your pages, a good technique is to lazy load them (i.e., loading them only when they are required like when the user scrolls near them).

This can be achieved easily just by adding the `loading="lazy"` attribute to the tag.

Keep in mind that all modern Chromium-based browsers support this at the time of this writing. You will be interested in the [lazyload library](https://github.com/verlok/lazyload) for something that works everywhere.

```
<iframe src="https://logrocket.com/" loading="lazy"></iframe>
```

**Note**: The `loading="lazy"` attribute also works with the `img` tag, in case you didn’t know that already. 😜

### **How can I make an iframe responsive?**

As more people browse the web using their phones, it is essential to make sure every one of your interfaces is responsive.

But how can you do so when you have an iframe in your page?

We could dedicate an entire guide regarding the myriad of ways to make your iframe responsive. Instead, I will just link to two excellent articles:

- [This first article (with probably the simplest solution)](https://blog.theodo.com/2018/01/responsive-iframes-css-trick/) will show you how you can achieve this by wrapping your iframe in another HTML element and by adding a few CSS properties to it.
- [This second article](https://css-tricks.com/responsive-iframes/) will show you how you can make an iframe responsive by dealing with aspect ratios.
- There is also the [Iframe Resizer Library](https://github.com/davidjbradshaw/iframe-resizer), but keep in mind that it comes with a lot of additional features you may not actually need.

**Note**: If you are using the bootstrap library in your project, there are the `embed-responsive` and `embed-responsive-16by9` that you can use straight out of the box to make your iframes responsive.

```
<div class="embed-responsive embed-responsive-16by9">
  <iframe src="https://logrocket.com/" loading="lazy"></iframe>
</div>
```

### **How to prevent the white flash that occurs while the iframe is loading**

Yes my friends, there is a solution for this. [In this article](https://css-tricks.com/prevent-white-flash-iframe/), [Chris Coyier](https://twitter.com/chriscoyier) shares a little snippet that hides all the iframes on the page with some CSS and removes it until the window is loaded and then makes them visible.

### **How to reload the content of an iframe**

Easy peasy lemon squeezy! As you can access the window element of the iframe with `contentWindow`, you have to do this:

```

const iframe = document.getElementById('myIframe');


iframe.contentWindow.location.reload();
```

### Bonus: about iframe accessibility

Most of the time, a screen reader will indicate that an iframe is present on the page.

Many will even enable you to navigate inside. If your iframe does not contain another webpage but instead contains external content like a video player or an ad, it is essential to add a title to the tag.

Adding a title to the tag gives users more context for what is the iframe is about.

```
html
<iframe src="an_ad.html" title="I contain an advertisement"></iframe>
```

Some will say that this attribute is not essential since most screen readers will only read the document’s title when available and skip the title attribute on the iframe tag.

However, for the same title to be read correctly across various screen readers, it remains good practice to provide both and to make sure they match each other.

Another thing to keep in mind is that when your iframe includes non-readable content (like, for instance, a video game built with JavaScript), you will have to hide its contents from screen reader users using the aria-hidden attribute.

```
html
<iframe src="a_video_game.com" title="I contain a video game" aria-hidden="true"></iframe>
```

We talked about this at the beginning of this guide, but make sure to include some content inside the iframe for all the older browsers that do not support them.

This will give more context to everyone about what should be displayed in the space.

```
html
<iframe>
  <p>Your browser does not support iframes.</p>
</iframe>
```

## [LogRocket](https://logrocket.com/signup/): Monitor iframe performance and how users interact with them

[![LogRocket Dashboard Free Trial Banner](https://blog.logrocket.com/wp-content/uploads/2017/03/1d0cd-1s_rmyo6nbrasp-xtvbaxfg.png)](https://logrocket.com/signup/)

[LogRocket](https://logrocket.com/signup/) is a frontend application monitoring solution that lets you replay problems as if they happened in your own browser. When implementing iframes, it’s critical that you understand how they impact the performance of the overall app or page as well as the user experience. Instead of guessing why errors happen, or asking users for screenshots and log dumps, LogRocket lets you replay the session to quickly understand what went wrong. It works perfectly with any app, regardless of framework, and has plugins to log additional context from Redux, Vuex, and @ngrx/store.

In addition to logging Redux actions and state, LogRocket records console logs, JavaScript errors, stacktraces, network requests/responses with headers + bodies, browser metadata, and custom logs. It also instruments the DOM to record the HTML and CSS on the page, recreating pixel-perfect videos of even the most complex single-page apps.
