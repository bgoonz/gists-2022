# Using Iframes vs Scripts for Embedding Components

> ## Excerpt
>
> Have you ever tried embedding an image, video, or a whole part from an external website into your web application? Although there are various methods of doing this, it’s essential to find the right…

---

## Iframe or script, what is the better option?

![](https://miro.medium.com/max/1400/1*94Lb06JEK-kfEN_5HRG4dA.jpeg)

Have you ever tried embedding an image, video, or a whole part from an external website into your web application? Although there are various methods of doing this, it’s essential to find the right fit for your use case.

Out of these methods, IFrame and Script Tags stand out. Both of them allow content to be embedded dynamically.

In this article, I will discuss their differences and when to use them.

The final section of this article will discuss [independent components](https://blog.bitsrc.io/independent-components-the-webs-new-building-blocks-59c893ef0f65) as the right building blocks for any sort of frontend integration, whether it is using iframes or script tags.

> _The “I” in Iframe stands for Inline, and the element Iframe or the inline frame is used to embed an external object such as an HTML document within the current one_

You may have used it many times while adding widgets like the famous Facebook-like button, a YouTube video, or an advertising section on your webpage.

For example, the following code will display a 500px square including a YouTube video within:

```
<iframe     width=“500”     height=“500”        src="https://www.youtube.com/embed/sInYS-EZ2Hg"     frameborder=“0”     allow=“accelerometer; autoplay; encrypted-media; gyroscope; picture-in picture”     style=“padding: 20px;”></iframe>
```

## Script Tag

> In most cases <script> tag is used to embed JavaScript into HTML or XHTML documents.

Script tag can be used to directly embed JavaScript into the web page or specify an external file containing the JavaScript.

The following code is an example of how to use the `<script>` tag on embedding the JavaScript directly into an HTML file:

```
<script type=“text/javascript”>   // JavaScript code goes here</script>
```

If you want to include an external file containing JavaScript, you can modify the code as follows:

```
<script    src=“/j-scripts/myscript.js”    type=“text/javascript”></script>
```

Now that you have a fair idea of what script and Iframe tags are, let’s look at the edges each has over the other.

## When Should You Choose IFrames?

It’s true that the majority of the developers do not prefer to use Iframes. But it surely has some advantages we should be aware of.

**Provides the security you need.**

When you’re using an Iframe, you mainly deal with the content coming from a third party, which you have no control over. This always increases the risk of having a potential vulnerability in your application.

> _The Iframe element, by itself, is not a security risk to your site or to the visitors of the site._

Iframes have gotten a negative reputation because malicious websites can use them to inject an invisible Iframe into your webpages, turning your website into a botnet.

> However, Iframes are considered the safer approach than the scripts since using Iframes is better than including an external JavaScript with direct access to your DOM tree.

When using the Iframes, you can use attributes like the **_‘sandbox’_** and **_‘allow’_** to blacklist or whitelist specific features to deal with bad user experiences such as annoying video auto-playing.

## Doesn’t block rendering

Browsers tend to wait until all the scripts are being downloaded and executed before downloading anything else. This is known as the blocking behavior, and because of this, Scripts have a negative impact on your webpage’s performance.

> _But, there are times that it is necessary to have this blocking. So as a solution for the performance reduction, we can use Iframes to load content in parallel with other components in the webpage._

For example, if you want your webpage to load the content first and then the Ads, it can be done using Iframe.

## When Should You Choose Scripts

Since we’ve looked at some unicorns and rainbows Iframes have over scripts, now let’s look at the edges scripts have over the Iframes.

**Scripts bring the responsiveness you need.**

Iframes are not exactly responsive. You can make the Iframe container in your webpage responsive, but not the content it is displaying. In most cases, the content inside the Iframe follows the sizes defined in the original website.

> _Also, Iframes are not supported by all the browsers and may display them improperly or even serve as a blank page._

On the other hand, scripts help to solve the IFrame responsiveness issues and have support across all the significant browsers & different devices.

**Relatively less loading time & better SEO support**

Scripts stay well ahead of the Iframes when it comes to loading time. Iframes always cause another call to the server after receiving the response and this extra round trip increases the load time drastically as the application grows.

For example, the **N** number of frames on a page causes a page to perform a minimum of **N+1** calls to the server, which increases the round-trips, communication, and transportation costs.

> _In addition to that, this has a significant impact on SEO score since the content displayed via Iframes may not be indexed and available to appear in Google’s search results._

Therefore, compared to Iframes, scripts put less load on the server and have higher SEO scores.

## Developing components independently for runtime integrations

How do you create the building blocks for any sort of frontend integration? How do you develop and collaborate on a single component? How do you make sure that component works well in its future hosting app?

[Independent components](https://blog.bitsrc.io/independent-components-the-webs-new-building-blocks-59c893ef0f65) are components that are independently authored, rendered, versioned, and collaborated on. They are developed and managed using [Bit](https://bit.dev/), in a Bit workspace which provides a very simplified monorepo-like development experience. That is, you develop, version, and deliver each component independently but you do so in an environment that allows you to develop _multiple_ independent components and keep track of their dependencies.

![](https://miro.medium.com/proxy/0*Om2ML1FvY-LrNlEx.png)

An [independent component](https://blog.bitsrc.io/independent-components-the-webs-new-building-blocks-59c893ef0f65) developed in Bit and shared on [bit.dev](https://bit.dev/)

Bit offers a great feature called ‘[Compositions](https://bit.dev/teambit/compositions/compositions)’. These are mini-apps that test your component in various contexts and usages. Each composition serves both as a tool for manual testing, but also for automated testing when used as a test sample. That way, you can test your component in future integrations, before they happen in production.

![](https://miro.medium.com/max/1400/1*BDyZbygBFAB7h4ocFfNa6g.png)

[https://bit.dev/harmony-mfe/people/ui/pages/user-profile/~compositions](https://bit.dev/harmony-mfe/people/ui/pages/user-profile/~compositions)
