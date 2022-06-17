
# Media Queries Level 5

> ## Excerpt
> This section is not normative.

---
## 1\. Introduction[](https://drafts.csswg.org/mediaqueries-5/#intro)

_This section is not normative._

In 1997, HTML4 [\[HTML401\]](https://drafts.csswg.org/mediaqueries-5/#biblio-html401) defined a mechanism to support media-dependent style sheets, tailored for different [media types](https://drafts.csswg.org/mediaqueries-5/#media-type). For example, a document may use different style sheets for screen and for print. In HTML, this can be written as:

<link rel="stylesheet" type="text/css" media="screen" href="style.css">
<link rel="stylesheet" type="text/css" media="print" href="print.css">

CSS adapted and extended this functionality with its [@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media) and [@import](https://drafts.csswg.org/css-cascade-5/#at-ruledef-import) rules, adding the ability to query the value of individual features:

[](https://drafts.csswg.org/mediaqueries-5/#example-23ee34e2)Inside a CSS style sheet, one can declare that sections apply to certain [media types](https://drafts.csswg.org/mediaqueries-5/#media-type):

@media screen {
  \* { font-family: sans-serif }
}

Similarly, stylesheets can be conditionally imported based on media queries:

@import "print-styles.css" print;

[Media queries](https://drafts.csswg.org/mediaqueries-5/#media-query) can be used with HTML, XHTML, XML [\[xml-stylesheet\]](https://drafts.csswg.org/mediaqueries-5/#biblio-xml-stylesheet) and the @import and @media rules of CSS.

[](https://drafts.csswg.org/mediaqueries-5/#example-b1c63ddf)Here is the same example written in HTML, XHTML, XML, @import and @media:

<link media="screen and (color), projection and (color)"
      rel="stylesheet" href="example.css">

<link media="screen and (color), projection and (color)"
      rel="stylesheet" href="example.css" />

<?xml-stylesheet media="screen and (color), projection and (color)"
                 rel="stylesheet" href="example.css" ?>

@import url(example.css) screen and (color), projection and (color);

@media screen and (color), projection and (color) { … }

### 1.1. Module interactions[](https://drafts.csswg.org/mediaqueries-5/#placement)

This module extends and supersedes [\[MEDIAQUERIES-4\]](https://drafts.csswg.org/mediaqueries-5/#biblio-mediaqueries-4) and its predecessor [\[MEDIAQUERIES-3\]](https://drafts.csswg.org/mediaqueries-5/#biblio-mediaqueries-3), which themselves built upon and replaced [CSS 2 § 7 Media types](https://www.w3.org/TR/CSS2/media.html#q7.0).

### 1.2. Values[](https://drafts.csswg.org/mediaqueries-5/#values)

Value types not defined in this specification, such as [<integer>](https://drafts.csswg.org/css-values-4/#integer-value), [<number>](https://drafts.csswg.org/css-values-4/#number-value) or [<resolution>](https://drafts.csswg.org/css-values-4/#resolution-value "Expands to: dpcm | dpi | dppx | x"), are defined in [\[CSS-VALUES-4\]](https://drafts.csswg.org/mediaqueries-5/#biblio-css-values-4). Other CSS modules may expand the definitions of these value types.

### 1.3. Units[](https://drafts.csswg.org/mediaqueries-5/#units)

The units used in media queries are the same as in other parts of CSS, as defined in [\[CSS-VALUES-4\]](https://drafts.csswg.org/mediaqueries-5/#biblio-css-values-4). For example, the pixel unit represents CSS pixels and not physical pixels.

[Relative length](https://drafts.csswg.org/css-values-4/#relative-length) units in media queries are based on the [initial value](https://drafts.csswg.org/css-cascade-5/#initial-value), which means that units are never based on results of declarations.

Note: For example, in HTML, the [em](https://drafts.csswg.org/css-values-4/#em) unit is relative to the [initial value](https://drafts.csswg.org/css-cascade-5/#initial-value) of [font-size](https://drafts.csswg.org/css-fonts-5/#descdef-font-face-font-size), defined by the user agent or the user’s preferences, not any styling on the page. Note that this will also take into account additional restrictions the user might apply, such as minimum font sizes.

### 1.4. Prefers-\* Media Features Security and Privacy[](https://drafts.csswg.org/mediaqueries-5/#mq-prefers-security)

[](https://drafts.csswg.org/mediaqueries-5/#issue-53662cc5)Information about a user can be used as an active fingerprinting vector. Analysis of impact pending, more information to be provided before spec is published.

User agents and developers implementing this specification need to be aware of this vector and take it into consideration when deciding whether to use the feature. Specifically \`prefers-reduced-motion\`, \`prefers-color-scheme\` and \`prefers-reduced-data\` are currently of concern for exploitation.

A media query is a method of testing certain aspects of the user agent or device that the document is being displayed in. [Media queries](https://drafts.csswg.org/mediaqueries-5/#media-query) are (almost) always independent of the contents of the document, its styling, or any other internal aspect; they’re only dependent on “external” information unless another feature explicitly specifies that it affects the resolution of Media Queries.

The syntax of a [media query](https://drafts.csswg.org/mediaqueries-5/#media-query) consists of an optional [media query modifier](https://drafts.csswg.org/mediaqueries-5/#media-query-modifier), an optional [media type](https://drafts.csswg.org/mediaqueries-5/#media-type), and zero or more [media features](https://drafts.csswg.org/mediaqueries-5/#media-feature):

media condition only not media type and media condition

A [media query](https://drafts.csswg.org/mediaqueries-5/#media-query) is a logical expression that is either true or false. A media query is true if:

-   the [media type](https://drafts.csswg.org/mediaqueries-5/#media-type), if specified, matches the media type of the device where the user agent is running, and
    
-   the [media condition](https://drafts.csswg.org/mediaqueries-5/#media-condition) is true.
    

Statements regarding media queries in this section assume the [syntax section](https://drafts.csswg.org/mediaqueries-5/#mq-syntax) is followed. Media queries that do not conform to the syntax are discussed in [§ 3.2 Error Handling](https://drafts.csswg.org/mediaqueries-5/#error-handling). I.e. the syntax takes precedence over requirements in this section.

[](https://drafts.csswg.org/mediaqueries-5/#example-724d1b7b)Here is a simple example written in HTML:

<link rel="stylesheet" media="screen and (color)" href="example.css" />

This example expresses that a certain style sheet (`example.css`) applies to devices of a certain media type ([screen](https://drafts.csswg.org/mediaqueries-5/#valdef-media-screen)) with certain feature (it must be a color screen).

Here is the same media query written in an @import-rule in CSS:

@import url(example.css) screen and (color);

User agents must re-evaluate [media queries](https://drafts.csswg.org/mediaqueries-5/#media-query) in response to changes in the user environment that they’re aware of, for example if the device is tiled from landscape to portrait orientation, and change the behavior of any constructs dependent on those media queries accordingly.

Unless another feature explicitly specifies that it affects the resolution of Media Queries, it is never necessary to apply a style sheet in order to evaluate expressions.

### 2.1. Combining Media Queries[](https://drafts.csswg.org/mediaqueries-5/#mq-list)

Several [media queries](https://drafts.csswg.org/mediaqueries-5/#media-query) can be combined into a comma-separated media query list.

media query ,

A [media query list](https://drafts.csswg.org/mediaqueries-5/#media-query-list) is true if _any_ of its component [media queries](https://drafts.csswg.org/mediaqueries-5/#media-query) are true, and false only if _all_ of its component media queries are false.

[](https://drafts.csswg.org/mediaqueries-5/#example-75a76747)For example, the following [media query list](https://drafts.csswg.org/mediaqueries-5/#media-query-list) is true if either the [media type](https://drafts.csswg.org/mediaqueries-5/#media-type) is [screen](https://drafts.csswg.org/mediaqueries-5/#valdef-media-screen) and it’s a color device, **or** the media type is [projection](https://drafts.csswg.org/mediaqueries-5/#valdef-media-projection) and it’s a color device:

@media screen and (color), projection and (color) { … }

An empty [media query list](https://drafts.csswg.org/mediaqueries-5/#media-query-list) evaluates to true.

[](https://drafts.csswg.org/mediaqueries-5/#example-6f06ee45)For example, these are equivalent:

@media all { … }
@media { … }

### 2.2. Media Query Modifiers[](https://drafts.csswg.org/mediaqueries-5/#mq-prefix)

A [media query](https://drafts.csswg.org/mediaqueries-5/#media-query) may optionally be prefixed by a single media query modifier, which is a single keyword which alters the meaning of the following media query.

#### 2.2.1. Negating a Media Query: the [not](https://drafts.csswg.org/mediaqueries-5/#valdef-media-not) keyword[](https://drafts.csswg.org/mediaqueries-5/#mq-not)

An individual [media query](https://drafts.csswg.org/mediaqueries-5/#media-query) can have its result negated by prefixing it with the keyword not. If the media query would normally evaluate to true, prefixing it with [not](https://drafts.csswg.org/mediaqueries-5/#valdef-media-not) makes it evaluate to false, and vice versa.

[](https://drafts.csswg.org/mediaqueries-5/#example-b5a260cd)For example, the following will apply to everything except color-capable screens. Note that the entire media query is negated, not just the [media type](https://drafts.csswg.org/mediaqueries-5/#media-type).

<link rel="stylesheet" media="not screen and (color)" href="example.css" />

#### 2.2.2. Hiding a Media Query From Legacy user agents: the [only](https://drafts.csswg.org/mediaqueries-5/#valdef-media-only) keyword[](https://drafts.csswg.org/mediaqueries-5/#mq-only)

The concept of [media queries](https://drafts.csswg.org/mediaqueries-5/#media-query) originates from HTML4 [\[HTML401\]](https://drafts.csswg.org/mediaqueries-5/#biblio-html401). That specification only defined [media types](https://drafts.csswg.org/mediaqueries-5/#media-type), but had a forward-compatible syntax that accommodated the addition of future concepts like [media features](https://drafts.csswg.org/mediaqueries-5/#media-feature): it would consume the characters of a media query up to the first non-alphanumeric character, and interpret that as a media type, ignoring the rest. For example, the media query screen and (color) would be truncated to just [screen](https://drafts.csswg.org/mediaqueries-5/#valdef-media-screen).

Unfortunately, this means that legacy user agents using this error-handling behavior will ignore any [media features](https://drafts.csswg.org/mediaqueries-5/#media-feature) in a [media query](https://drafts.csswg.org/mediaqueries-5/#media-query), even if they’re far more important than the [media type](https://drafts.csswg.org/mediaqueries-5/#media-type) in the query. This can result in styles accidentally being applied in inappropriate situations.

To hide these [media queries](https://drafts.csswg.org/mediaqueries-5/#media-query) from legacy user agents, the media query can be prefixed with the keyword only. The [only](https://drafts.csswg.org/mediaqueries-5/#valdef-media-only) keyword **has no effect** on the media query’s result, but will cause the media query to be parsed by legacy user agents as specifying the unknown [media type](https://drafts.csswg.org/mediaqueries-5/#media-type) “only”, and thus be ignored.

[](https://drafts.csswg.org/mediaqueries-5/#example-88774f15)In this example, the stylesheet specified by the `<link>` element will not be used by legacy user agents, even if they would normally match the [screen](https://drafts.csswg.org/mediaqueries-5/#valdef-media-screen) [media type](https://drafts.csswg.org/mediaqueries-5/#media-type).

<link rel="stylesheet" media="only screen and (color)" href="example.css" />

Note: Note that the [only](https://drafts.csswg.org/mediaqueries-5/#valdef-media-only) keyword can only be used before a [media type](https://drafts.csswg.org/mediaqueries-5/#media-type). A [media query](https://drafts.csswg.org/mediaqueries-5/#media-query) consisting only of [media features](https://drafts.csswg.org/mediaqueries-5/#media-feature), or one with another [media query modifier](https://drafts.csswg.org/mediaqueries-5/#media-query-modifier) like [not](https://drafts.csswg.org/mediaqueries-5/#valdef-media-not), will be treated as false by legacy user agents automatically.

Note: At the time of publishing this specification, such legacy user agents are extremely rare, and so using the [only](https://drafts.csswg.org/mediaqueries-5/#valdef-media-only) modifier is rarely, if ever, necessary.

### 2.3. Media Types[](https://drafts.csswg.org/mediaqueries-5/#media-types)

A media type is a broad category of user-agent devices on which a document may be displayed. The original set of [media types](https://drafts.csswg.org/mediaqueries-5/#media-type) were defined in HTML4, for the `media` attribute on `<link>` elements.

Unfortunately, [media types](https://drafts.csswg.org/mediaqueries-5/#media-type) have proven insufficient as a way of discriminating between devices with different styling needs. Some categories which were originally quite distinct, such as [screen](https://drafts.csswg.org/mediaqueries-5/#valdef-media-screen) and [handheld](https://drafts.csswg.org/mediaqueries-5/#valdef-media-handheld), have blended significantly in the years since their invention. Others, such as [tty](https://drafts.csswg.org/mediaqueries-5/#valdef-media-tty) or [tv](https://drafts.csswg.org/mediaqueries-5/#valdef-media-tv), expose useful differences from the norm of a full-featured computer monitor, and so are potentially useful to target with different styling, but the definition of media types as mutually exclusive makes it difficult to use them in a reasonable manner; instead, their exclusive aspects are better expressed as [media features](https://drafts.csswg.org/mediaqueries-5/#media-feature) such as [grid](https://drafts.csswg.org/mediaqueries-5/#descdef-media-grid) or [scan](https://drafts.csswg.org/mediaqueries-5/#descdef-media-scan).

As such, the following [media types](https://drafts.csswg.org/mediaqueries-5/#media-type) are defined for use in [media queries](https://drafts.csswg.org/mediaqueries-5/#media-query):

all[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-all)

Matches all devices.

print

Matches printers, and devices intended to reproduce a printed display, such as a web browser showing a document in “Print Preview”.

screen

Matches all devices that aren’t matched by [print](https://drafts.csswg.org/mediaqueries-5/#valdef-media-print).

In addition, the following **deprecated** [media types](https://drafts.csswg.org/mediaqueries-5/#media-type) are defined. Authors must not use these media types; instead, it is recommended that they select appropriate [media features](https://drafts.csswg.org/mediaqueries-5/#media-feature) that better represent the aspect of the device that they are attempting to style against.

User agents must recognize the following [media types](https://drafts.csswg.org/mediaqueries-5/#media-type) as valid, but must make them match nothing.

-   tty
-   tv
-   projection
-   handheld
-   braille[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-braille)
-   embossed[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-embossed)
-   aural[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-aural)
-   speech

Note: It is expected that all of the media types will also be deprecated in time, as appropriate [media features](https://drafts.csswg.org/mediaqueries-5/#media-feature) are defined which capture their important differences.

### 2.4. Media Features[](https://drafts.csswg.org/mediaqueries-5/#mq-features)

A media feature is a more fine-grained test than [media types](https://drafts.csswg.org/mediaqueries-5/#media-type), testing a single, specific feature of the user agent or display device.

Syntactically, [media features](https://drafts.csswg.org/mediaqueries-5/#media-feature) resemble CSS properties: they consist of a feature name, a colon, and a value to test for. They may also be written in boolean form as just a feature name, or in range form with a comparison operator.

( feature name : feature value feature name range form (see below) )

There are, however, several important differences between properties and media features:

-   Properties are used to give information about how to present a document. Media features are used to describe requirements of the output device.
-   Media features are always wrapped in parentheses and combined with the and or or keywords, like (color) and (min-width: 600px), rather than being separated with semicolons.
-   A media feature may be given with _only_ its name (omitting the colon and value) to evaluate the feature in a [boolean context](https://drafts.csswg.org/mediaqueries-5/#boolean-context). This is a convenient shorthand for features that have a reasonable value representing 0 or “none”. For example, (color) is true if the [color](https://drafts.csswg.org/mediaqueries-5/#descdef-media-color) [media feature](https://drafts.csswg.org/mediaqueries-5/#media-feature) is non-zero.
-   [Media features](https://drafts.csswg.org/mediaqueries-5/#media-feature) with “range” type can be written in a [range context](https://drafts.csswg.org/mediaqueries-5/#range-context), which uses standard mathematical comparison operators rather than a colon, or have their feature names [prefixed with “min-” or “max-”](https://drafts.csswg.org/mediaqueries-5/#mq-min-max).
-   Properties sometimes accept complex values, e.g., calculations that involve several other values. [Media features](https://drafts.csswg.org/mediaqueries-5/#media-feature) only accept single values: one keyword, one number, etc.

If a [media feature](https://drafts.csswg.org/mediaqueries-5/#media-feature) references a concept which does not exist on the device where the UA is running (for example, speech UAs do not have a concept of “width”), the media feature must always evaluate to false.

[](https://drafts.csswg.org/mediaqueries-5/#example-b561f02b)The media feature device-aspect-ratio only applies to visual devices. On an [speech](https://drafts.csswg.org/mediaqueries-5/#valdef-media-speech) device, expressions involving device-aspect-ratio will therefore always be false:

<link media="speech and (device-aspect-ratio: 16/9)"
      rel="stylesheet" href="example.css">

#### 2.4.1. Media Feature Types: “range” and “discrete”[](https://drafts.csswg.org/mediaqueries-5/#mq-ranges)

Every media feature defines its “type” as either “range” or “discrete” in its definition table.

“Discrete” media features, like [pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-pointer) take their values from a set. The values may be keywords or boolean numbers (0 and 1), but the common factor is that there’s no intrinsic “order” to them—none of the values are “less than” or “greater than” each other.

“Range” media features like [width](https://drafts.csswg.org/mediaqueries-5/#descdef-media-width), on the other hand, take their values from a range. Any two values can be compared to see which is lesser and which is greater.

The only significant difference between the two types is that “range” [media features](https://drafts.csswg.org/mediaqueries-5/#media-feature) can be evaluated in a [range context](https://drafts.csswg.org/mediaqueries-5/#range-context) and accept “min-” and “max-” prefixes on their name. Doing either of these changes the meaning of the feature—rather than the media feature being true when the feature exactly matches the given value, it matches when the feature is greater than/less than/equal to the given value.

[](https://drafts.csswg.org/mediaqueries-5/#example-772c034d)A ''(width >= 600px)'' [media feature](https://drafts.csswg.org/mediaqueries-5/#media-feature) is true when the viewport’s width is 600px _or more_.

On the other hand, (width: 600px) by itself is only true when the viewport’s width is _exactly_ 600px. If it’s less or greater than 600px, it’ll be false.

#### 2.4.2. Evaluating Media Features in a Boolean Context[](https://drafts.csswg.org/mediaqueries-5/#mq-boolean-context)

While [media features](https://drafts.csswg.org/mediaqueries-5/#media-feature) normally have a syntax similar to CSS properties, they can also be written more simply as just the feature name, like (color).

When written like this, the [media feature](https://drafts.csswg.org/mediaqueries-5/#media-feature) is evaluated in a boolean context. If the feature would be true for any value _other than_ the number 0, a [<dimension>](https://drafts.csswg.org/css-values-4/#typedef-dimension) with the value 0, the keyword [none](https://drafts.csswg.org/mediaqueries-5/#valdef-media-update-none), or a value explicitly defined by that media feature to evaluate as false in a boolean context, the media feature evaluates to true. Otherwise, it evaluates to false.

[](https://drafts.csswg.org/mediaqueries-5/#example-f4e46a51)Some [media features](https://drafts.csswg.org/mediaqueries-5/#media-feature) are designed to be written like this.

For example, [update](https://drafts.csswg.org/mediaqueries-5/#descdef-media-update) is typically written as (update) to test if any kind of updating is available, or not (update) to check for the opposite.

It can still be given an explicit value as well, with (update: fast) or (update: slow) equal to (update), and (update: none) equal to not (update).

[](https://drafts.csswg.org/mediaqueries-5/#example-b4366ae2)Some numeric [media features](https://drafts.csswg.org/mediaqueries-5/#media-feature), like [width](https://drafts.csswg.org/mediaqueries-5/#descdef-media-width), are rarely if ever useful to evaluate in a [boolean context](https://drafts.csswg.org/mediaqueries-5/#boolean-context), as their values are almost always greater than zero. Others, like [color](https://drafts.csswg.org/mediaqueries-5/#descdef-media-color), have meaningful zero values: (color) is identical to (color > 0), indicating that the device is capable of displaying color at all.

[](https://drafts.csswg.org/mediaqueries-5/#example-9591e2ed)Only some of the [media features](https://drafts.csswg.org/mediaqueries-5/#media-feature) that accept keywords are meaningful in a [boolean context](https://drafts.csswg.org/mediaqueries-5/#boolean-context).

For example, (pointer) is useful, as [pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-pointer) has a [none](https://drafts.csswg.org/mediaqueries-5/#valdef-media-pointer-none) value to indicate there’s no pointing device at all on the device. On the other hand, (scan) is just always true or always false (depending on whether it applies at all to the device), as there’s no value that means “false”.

#### 2.4.3. Evaluating Media Features in a Range Context[](https://drafts.csswg.org/mediaqueries-5/#mq-range-context)

[Media features](https://drafts.csswg.org/mediaqueries-5/#media-feature) with a “range” type can be alternately written in a range context that takes advantage of the fact that their values are ordered, using ordinary mathematical comparison operators:

( feature name/value \> <= < \= \>= feature value/name value < <= feature name < <= value value \> \>= feature name \> \>= value )

Note: This syntax is new to Level 4 of Mediaqueries, and thus is not as widely supported at the moment as the min-/max- prefixes.

The basic form, consisting of a feature name, a comparison operator, and a value, returns true if the relationship is true.

[](https://drafts.csswg.org/mediaqueries-5/#example-fc928617)For example, (height > 600px) (or (600px < height)) returns true if the viewport height is greater than 600px.

The remaining forms, with the feature name nested between two value comparisons, returns true if both comparisons are true.

[](https://drafts.csswg.org/mediaqueries-5/#example-ef30a3ee)For example, (400px < width < 1000px) returns true if the viewport width is between 400px and 1000px (but not equal to either).

Some media features with a "range" type are said to be false in the negative range. This means that negative values are valid and must be parsed, and that querying whether the media feature is equal to, less than, or less or equal than any such negative value must evaluate to false. Querying whether the media feature is greater, or greater or equal, than a negative value evaluates to true if the relationship is true.

Note: If negative values had been rejected at parse time instead, they would be treated as unknown based on the error handling rules. However, in reality, whether a device’s [resolution](https://drafts.csswg.org/mediaqueries-5/#descdef-media-resolution) is \-300dpi is not unknown, it is known to be false. Similarly, for any visual device, the [width](https://drafts.csswg.org/mediaqueries-5/#descdef-media-width) of the targeted display area is known to be greater than \-200px The above rule reflects that, making intuition match what UAs do.

[](https://drafts.csswg.org/mediaqueries-5/#example-d3333f79)The following examples result in a green background on all visual devices:

```
@media not (width <= -100px) {
  body { background: green; }
}
```

```
@media (height > -100px) {
  body { background: green; }
}
```

```
@media not (resolution: -300dpi) {
  body { background: green; }
}
```

This is a behavior change compared to Media Queries Level 3 [\[MEDIAQUERIES-3\]](https://drafts.csswg.org/mediaqueries-5/#biblio-mediaqueries-3), where negative values on these properties caused a syntax error. In level 3, syntax errors—including forbidden values—resulted in the entire [media query](https://drafts.csswg.org/mediaqueries-5/#media-query) being false, rather than the unknown treatment defined in this level. Implementations updating from level 3 should make sure to change the handling of negative values for the relevant properties when they add support for the richer syntax defined in [§ 2.5 Combining Media Features](https://drafts.csswg.org/mediaqueries-5/#media-conditions), to avoid introducing unintended semantics.

#### 2.4.4. Using “min-” and “max-” Prefixes On Range Features[](https://drafts.csswg.org/mediaqueries-5/#mq-min-max)

Rather than evaluating a “range” type [media feature](https://drafts.csswg.org/mediaqueries-5/#media-feature) in a range context, as described above, the feature may be written as a normal media feature, but with a “min-” or “max-” prefix on the feature name.

This is equivalent to evaluating the feature in a [range context](https://drafts.csswg.org/mediaqueries-5/#range-context), as follows:

-   Using a “min-” prefix on a feature name is equivalent to using the “>=” operator. For example, (min-height: 600px) is equivalent to ''(height >= 600px)''.
-   Using a “max-” prefix on a feature name is equivalent to using the “<=” operator. For example, (max-width: 40em) is equivalent to ''(width <= 40em)''.

Note: because “min-” and “max-” both equate to range comparisons that **include** the value, they may be limiting in certain situations.

[](https://drafts.csswg.org/mediaqueries-5/#example-69e2181d)For instance, authors trying to define different styles based on a breakpoint in the viewport width using “min-” and “max-” would generally offset the values they’re comparing, to ensure that both queries don’t evaluate to true simultaneously. Assuming the breakpoint is at 320px, authors would conceptually use:

@media (max-width: 320px) { /\* styles for viewports <= 320px \*/ }
@media (min-width: 321px) { /\* styles for viewports >= 321px \*/ }

While this ensures that the two sets of styles don’t apply simultaneously when the viewport width is 320px, it does not take into account the possibility of fractional viewport sizes which can occur as a result of non-integer pixel densities (e.g. on high-dpi displays or as a result of zooming/scaling). Any viewport widths that fall between 320px and 321px will result in none of the styles being applied.

One approach to work around this problem is to increase the precision of the values used for the comparison. Using the example above, changing the second comparison value to 320.01px significantly reduces the chance that a viewport width on a device would fall between the cracks.

@media (max-width: 320px) { /\* styles for viewports <= 320px \*/ }
@media (min-width: 320.01px) { /\* styles for viewports >= 320.01px \*/ }

However, in these situations, [range context](https://drafts.csswg.org/mediaqueries-5/#range-context) queries (which are not limited to “>=” and “<=” comparisons) offer a more appropriate solution:

@media (width <= 320px) { /\* styles for viewports <= 320px \*/ }
@media (width > 320px) { /\* styles for viewports > 320px \*/ }

“Discrete” type properties do not accept “min-” or “max-” prefixes. Adding such a prefix to a “discrete” type [media feature](https://drafts.csswg.org/mediaqueries-5/#media-feature) simply results in an unknown feature name.

[](https://drafts.csswg.org/mediaqueries-5/#example-d539f038)For example, (min-grid: 1) is invalid, because [grid](https://drafts.csswg.org/mediaqueries-5/#descdef-media-grid) is a “discrete” [media feature](https://drafts.csswg.org/mediaqueries-5/#media-feature), and so doesn’t accept the prefixes. (Even though the grid media feature appears to be numeric, as it accepts the values 0 and 1.)

Attempting to evaluate a min/max prefixed [media feature](https://drafts.csswg.org/mediaqueries-5/#media-feature) in a [boolean context](https://drafts.csswg.org/mediaqueries-5/#boolean-context) is invalid and a syntax error.

### 2.5. Combining Media Features[](https://drafts.csswg.org/mediaqueries-5/#media-conditions)

Multiple [media features](https://drafts.csswg.org/mediaqueries-5/#media-feature) can be combined together into a media condition using full boolean algebra (not, and, or).

-   Any media feature can be negated by placing [not](https://drafts.csswg.org/mediaqueries-5/#valdef-media-not) before it. For example, not (color) inverts the meaning of (color)—since (color) matches a device with any kind of color display, not (color) matches a device _without_ any kind of color display.
    
-   Two or more media features can be chained together, such that the query is only true if _all_ of the media features are true, by placing and between them. For example, (width < 600px) and (height < 600px) only matches devices whose screens are smaller than 600px wide in both dimensions.
    
-   Alternately, two or more media features can be chained together, such that the query is true if _any_ of the media features are true, by placing or between them. For example, (update: slow) or (hover: none) matches if the device is slow to update the screen (such as an e-reader) _or_ the primary pointing device has no hover capability, perhaps indicating that one should use a layout that displays more information rather than compactly hiding it until the user hovers.
    
-   [Media conditions](https://drafts.csswg.org/mediaqueries-5/#media-condition) can be grouped by wrapping them in parentheses () which can then be nested within a condition the same as a single media query. For example, (not (color)) or (hover) is true on devices that are monochrome and/or that have hover capabilities. If one instead wanted to query for a device that was monochrome and _didn’t_ have hover capabilities, it must instead be written as not ((color) or (hover)) (or, equivalently, as (not (color)) and (not (hover))).
    

It is _invalid_ to mix and and or and [not](https://drafts.csswg.org/mediaqueries-5/#valdef-media-not) at the same “level” of a media query. For example, (color) and (pointer) or (hover) is illegal, as it’s unclear what was meant. Instead, parentheses can be used to group things using a particular joining keyword, yielding either (color) and ((pointer) or (hover)) or ((color) and (pointer)) or (hover). These two have very different meanings: if only (hover) is true, the first one evaluates to false but the second evaluates to true.

## 3\. Syntax[](https://drafts.csswg.org/mediaqueries-5/#mq-syntax)

Informal descriptions of the media query syntax appear in the prose and railroad diagrams in previous sections. The formal media query syntax is described in this section, with the rule/property grammar syntax defined in [\[CSS-SYNTAX-3\]](https://drafts.csswg.org/mediaqueries-5/#biblio-css-syntax-3) and [\[CSS-VALUES-4\]](https://drafts.csswg.org/mediaqueries-5/#biblio-css-values-4).

To parse a <media-query-list> production, [parse a comma-separated list of component values](https://drafts.csswg.org/css-syntax-3/#parse-a-comma-separated-list-of-component-values), then parse each entry in the returned list as a [<media-query>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-query). Its value is the list of <media-query>s so produced.

Note: This explicit definition of [<media-query-list>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-query-list) parsing is necessary to make the error-recovery behavior of [media query lists](https://drafts.csswg.org/mediaqueries-5/#media-query-list) well-defined.

Note: This definition of [<media-query-list>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-query-list) parsing intentionally accepts an empty list.

Note: As per [\[CSS-SYNTAX-3\]](https://drafts.csswg.org/mediaqueries-5/#biblio-css-syntax-3), tokens are [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive).

<media-query> = [<media-condition>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-condition)
             | \[ not | only \]? [<media-type>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-type) \[ and [<media-condition-without-or>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-condition-without-or) \]?
<media-type> = [<ident>](https://drafts.csswg.org/css-values-4/#typedef-ident)

<media-condition> = [<media-not>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-not) | [<media-in-parens>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-in-parens) \[ [<media-and>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-and)\* | [<media-or>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-or)\* \]
<media-condition-without-or> = [<media-not>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-not) | [<media-in-parens>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-in-parens) [<media-and>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-and)\*
<media-not> = not [<media-in-parens>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-in-parens)
<media-and> = and [<media-in-parens>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-in-parens)
<media-or> = or [<media-in-parens>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-in-parens)
<media-in-parens> = ( [<media-condition>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-condition) ) | [<media-feature>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-feature) | [<general-enclosed>](https://drafts.csswg.org/mediaqueries-5/#typedef-general-enclosed)

<media-feature> = ( \[ [<mf-plain>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-plain) | [<mf-boolean>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-boolean) | [<mf-range>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-range) \] )
<mf-plain> = [<mf-name>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-name) : [<mf-value>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-value)
<mf-boolean> = [<mf-name>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-name)
<mf-range> = [<mf-name>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-name) [<mf-comparison>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-comparison) [<mf-value>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-value)
           | [<mf-value>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-value) [<mf-comparison>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-comparison) [<mf-name>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-name)
           | [<mf-value>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-value) [<mf-lt>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-lt) [<mf-name>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-name) [<mf-lt>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-lt) [<mf-value>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-value)
           | [<mf-value>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-value) [<mf-gt>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-gt) [<mf-name>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-name) [<mf-gt>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-gt) [<mf-value>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-value)
<mf-name> = [<ident>](https://drafts.csswg.org/css-values-4/#typedef-ident)
<mf-value> = [<number>](https://drafts.csswg.org/css-values-4/#number-value) | [<dimension>](https://drafts.csswg.org/css-values-4/#typedef-dimension) | [<ident>](https://drafts.csswg.org/css-values-4/#typedef-ident) | [<ratio>](https://drafts.csswg.org/css-values-4/#ratio-value)
<mf-lt> = '<' '='?
<mf-gt> = '>' '='?
<mf-eq> = '='
<mf-comparison> = [<mf-lt>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-lt) | [<mf-gt>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-gt) | [<mf-eq>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-eq)

<general-enclosed> = \[ [<function-token>](https://drafts.csswg.org/css-syntax-3/#typedef-function-token) [<any-value>](https://drafts.csswg.org/css-syntax-3/#typedef-any-value) ) \] | ( [<ident>](https://drafts.csswg.org/css-values-4/#typedef-ident) [<any-value>](https://drafts.csswg.org/css-syntax-3/#typedef-any-value) )

The [<media-type>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-type) production does not include the keywords [only](https://drafts.csswg.org/mediaqueries-5/#valdef-media-only), [not](https://drafts.csswg.org/mediaqueries-5/#valdef-media-not), and, and or.

No whitespace is allowed between the “<” or “>” [<delim-token>](https://drafts.csswg.org/css-syntax-3/#typedef-delim-token)s and the following “=” <delim-token>, if it’s present.

Note: Whitespace is required between a [not](https://drafts.csswg.org/mediaqueries-5/#valdef-media-not), and, or or keyword and the following ( character, because without it that would instead parse as a [<function-token>](https://drafts.csswg.org/css-syntax-3/#typedef-function-token). This is not made explicitly invalid because it’s already covered by the above grammar. It’s fine to have whitespace between a ) and a following keyword, however.

When parsing the [<media-in-parens>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-in-parens) production, the [<general-enclosed>](https://drafts.csswg.org/mediaqueries-5/#typedef-general-enclosed) branch must only be chosen if the input does not match either of the preceding branches. [<general-enclosed>](https://drafts.csswg.org/mediaqueries-5/#typedef-general-enclosed) exists to allow for future expansion of the grammar in a reasonably compatible way.

### 3.1. Evaluating Media Queries[](https://drafts.csswg.org/mediaqueries-5/#evaluating)

Each of the major subexpression of [<media-condition>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-condition) or [<media-condition-without-or>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-condition-without-or) is associated with a boolean result, as follows:

[<media-condition>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-condition)

[<media-condition-without-or>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-condition-without-or)

The result is the result of the child subexpression.

[<media-in-parens>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-in-parens)

The result is the result of the child term.

[<media-not>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-not)

The result is the negation of the [<media-in-parens>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-in-parens) term. The negation of unknown is unknown.

[<media-in-parens>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-in-parens) [<media-and>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-and)\*

The result is true if the [<media-in-parens>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-in-parens) child term and all of the <media-in-parens> children of the [<media-and>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-and) child terms are true, false if at least one of these <media-in-parens> terms are false, and unknown otherwise.

[<media-in-parens>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-in-parens) [<media-or>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-or)\*

The result is false if the [<media-in-parens>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-in-parens) child term and all of the <media-in-parens> children of the [<media-or>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-or) child terms are false, true if at least one of these <media-in-parens> terms are true, and unknown otherwise.

[<general-enclosed>](https://drafts.csswg.org/mediaqueries-5/#typedef-general-enclosed)

The result is unknown.

Authors must not use [<general-enclosed>](https://drafts.csswg.org/mediaqueries-5/#typedef-general-enclosed) in their stylesheets. It exists only for future-compatibility, so that new syntax additions do not invalidate too much of a [<media-condition>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-condition) in older user agents.

[<media-feature>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-feature)

The result is the result of evaluating the specified media feature.

If the result of any of the above productions is used in any context that expects a two-valued boolean, “unknown” must be converted to “false”.

Note: This means that, for example, when a [media query](https://drafts.csswg.org/mediaqueries-5/#media-query) is used in a [@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media) rule, if it resolves to “unknown” it’s treated as “false” and fails to match.

Media Queries use a three-value logic where terms can be “true”, “false”, or “unknown”. Specifically, it uses the [Kleene 3-valued logic](http://en.wikipedia.org/wiki/Three-valued_logic#Kleene_and_Priest_logics). In this logic, “unknown” means “either true or false, but we’re not sure which yet”.

In general, an unknown value showing up in a formula will cause the formula to be unknown as well, as substituting “true” for the unknown will give the formula a different result than substituting “false”. The only way to eliminate an unknown value is to use it in a formula that will give the same result whether the unknown is replaced with a true or false value. This occurs when you have “false AND unknown” (evaluates to false regardless) and “true OR unknown” (evaluates to true regardless).

This logic was adopted because [<general-enclosed>](https://drafts.csswg.org/mediaqueries-5/#typedef-general-enclosed) needs to be assigned a truth value. In standard boolean logic, the only reasonable value is “false”, but this means that not unknown(function) is true, which can be confusing and unwanted. Kleene’s 3-valued logic ensures that unknown things will prevent a [media query](https://drafts.csswg.org/mediaqueries-5/#media-query) from matching, unless their value is irrelevant to the final result.

### 3.2. Error Handling[](https://drafts.csswg.org/mediaqueries-5/#error-handling)

A media query that does not match the grammar in the previous section must be replaced by not all during parsing.

Note: Note that a grammar mismatch does **not** wipe out an entire [media query list](https://drafts.csswg.org/mediaqueries-5/#media-query-list), just the problematic [media query](https://drafts.csswg.org/mediaqueries-5/#media-query). The parsing behavior defined above automatically recovers at the next top-level comma.

@media (example, all,), speech { /\* only applicable to speech devices \*/ }
@media &test, speech           { /\* only applicable to speech devices \*/ }

Both of the above [media query lists](https://drafts.csswg.org/mediaqueries-5/#media-query-list) are turned into not all, speech during parsing, which has the same truth value as just [speech](https://drafts.csswg.org/mediaqueries-5/#valdef-media-speech).

Note that error-recovery only happens at the top-level of a [media query](https://drafts.csswg.org/mediaqueries-5/#media-query); anything inside of an invalid parenthesized block will just get turned into not all as a group. For example:

@media (example, speech { /\* rules for speech devices \*/ }

Because the parenthesized block is unclosed, it will contain the entire rest of the stylesheet from that point (unless it happens to encounter an unmatched “)” character somewhere in the stylesheet), and turn the entire thing into a not all [media query](https://drafts.csswg.org/mediaqueries-5/#media-query).

An unknown [<media-type>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-type) must be treated as not matching.

[](https://drafts.csswg.org/mediaqueries-5/#example-2b46833d)For example, the media query unknown is false, as unknown is an unknown [media type](https://drafts.csswg.org/mediaqueries-5/#media-type).

But not unknown is true, as the [not](https://drafts.csswg.org/mediaqueries-5/#valdef-media-not) negates the false media type.

[](https://drafts.csswg.org/mediaqueries-5/#example-45dbfecd)Remember that some keywords aren’t allowed as [<media-type>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-type)s and cause parsing to fail entirely: the media query or and (color) is turned into not all during parsing, rather than just treating the or as an unknown [media type](https://drafts.csswg.org/mediaqueries-5/#media-type).

An unknown [<mf-name>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-name) or [<mf-value>](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-value), or disallowed <mf-value>, results in the value “unknown”. A [<media-query>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-query) whose value is “unknown” must be replaced with not all.

<link media="screen and (max-weight: 3kg) and (color), (color)"rel="stylesheet" href="example.css" />

As max-weight is an unknown [media feature](https://drafts.csswg.org/mediaqueries-5/#media-feature), this [media query list](https://drafts.csswg.org/mediaqueries-5/#media-query-list) is turned into not all, (color), which is equivalent to just (color).

@media (min-orientation:portrait) { … }

The [orientation](https://drafts.csswg.org/mediaqueries-5/#descdef-media-orientation) feature does not accept prefixes, so this is considered an unknown [media feature](https://drafts.csswg.org/mediaqueries-5/#media-feature), and turned into not all.

[](https://drafts.csswg.org/mediaqueries-5/#example-951a2717)The media query (color:20example) specifies an unknown value for the [color](https://drafts.csswg.org/mediaqueries-5/#descdef-media-color) media feature and is therefore turned into not all.

Note that [media queries](https://drafts.csswg.org/mediaqueries-5/#media-query) are also subject to the parsing rules of the host language. For example, take the following CSS snippet:

@media test;,all { body { background:lime } }

The media query test;,all is, parsed by itself, equivalent to not all, all, which is always true. However, CSS’s parsing rules cause the [@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media) rule, and thus the [media query](https://drafts.csswg.org/mediaqueries-5/#media-query), to end at the semicolon. The remainder of the text is treated as a style rule with an invalid selector and contents.

## 4\. Viewport/Page Characteristics Media Features[](https://drafts.csswg.org/mediaqueries-5/#mf-viewport-characteristics)

### 4.1. Width: the [width](https://drafts.csswg.org/mediaqueries-5/#descdef-media-width) feature[](https://drafts.csswg.org/mediaqueries-5/#width)

Name:

width

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

[<length>](https://drafts.csswg.org/css-values-4/#length-value "Expands to: advance measure | cap | ch | cm | dvb | dvh | dvi | dvmax | dvmin | dvw | em | ex | ic | in | lh | lvb | lvh | lvi | lvmax | lvmin | lvw | mm | pc | pt | px | q | rcap | rch | rem | rex | ric | rlh | svb | svh | svi | svmax | svmin | svw | vb | vh | vi | vmax | vmin | vw")

Type:

range

The [width](https://drafts.csswg.org/mediaqueries-5/#descdef-media-width) media feature describes the width of the targeted display area of the output device. For [continuous media](https://drafts.csswg.org/mediaqueries-5/#continuous-media), this is the width of the viewport (as described by CSS2, section 9.1.1 [\[CSS2\]](https://drafts.csswg.org/mediaqueries-5/#biblio-css2)) including the size of a rendered scroll bar (if any). For [paged media](https://drafts.csswg.org/mediaqueries-5/#paged-media), this is the width of the page box (as described by CSS2, section 13.2 \[CSS2\]).

[<length>](https://drafts.csswg.org/css-values-4/#length-value "Expands to: advance measure | cap | ch | cm | dvb | dvh | dvi | dvmax | dvmin | dvw | em | ex | ic | in | lh | lvb | lvh | lvi | lvmax | lvmin | lvw | mm | pc | pt | px | q | rcap | rch | rem | rex | ric | rlh | svb | svh | svi | svmax | svmin | svw | vb | vh | vi | vmax | vmin | vw")s are interpreted according to [§ 1.3 Units](https://drafts.csswg.org/mediaqueries-5/#units).

[width](https://drafts.csswg.org/mediaqueries-5/#descdef-media-width) is [false in the negative range](https://drafts.csswg.org/mediaqueries-5/#false-in-the-negative-range).

[](https://drafts.csswg.org/mediaqueries-5/#example-3ef57809)For example, this media query expresses that the style sheet is used on printed output wider than 25cm:

<link rel="stylesheet" media="print and (min-width: 25cm)" href="http://…" />

[](https://drafts.csswg.org/mediaqueries-5/#example-462c5899)This media query expresses that the style sheet is used on devices with viewport (the part of the screen/paper where the document is rendered) widths between 400 and 700 pixels:

@media (400px <= width <= 700px) { … }

[](https://drafts.csswg.org/mediaqueries-5/#example-fab3f079)This media query expresses that style sheet is used if the width of the viewport is greater than 20em.

@media (min-width: 20em) { … }

The [em](https://drafts.csswg.org/css-values-4/#em) value is relative to the [initial value](https://drafts.csswg.org/css-cascade-5/#initial-value) of [font-size](https://drafts.csswg.org/css-fonts-5/#descdef-font-face-font-size).

### 4.2. Height: the [height](https://drafts.csswg.org/mediaqueries-5/#descdef-media-height) feature[](https://drafts.csswg.org/mediaqueries-5/#height)

Name:

height

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

[<length>](https://drafts.csswg.org/css-values-4/#length-value "Expands to: advance measure | cap | ch | cm | dvb | dvh | dvi | dvmax | dvmin | dvw | em | ex | ic | in | lh | lvb | lvh | lvi | lvmax | lvmin | lvw | mm | pc | pt | px | q | rcap | rch | rem | rex | ric | rlh | svb | svh | svi | svmax | svmin | svw | vb | vh | vi | vmax | vmin | vw")

Type:

range

The [height](https://drafts.csswg.org/mediaqueries-5/#descdef-media-height) media feature describes the height of the targeted display area of the output device. For [continuous media](https://drafts.csswg.org/mediaqueries-5/#continuous-media), this is the height of the viewport including the size of a rendered scroll bar (if any). For [paged media](https://drafts.csswg.org/mediaqueries-5/#paged-media), this is the height of the page box.

[<length>](https://drafts.csswg.org/css-values-4/#length-value "Expands to: advance measure | cap | ch | cm | dvb | dvh | dvi | dvmax | dvmin | dvw | em | ex | ic | in | lh | lvb | lvh | lvi | lvmax | lvmin | lvw | mm | pc | pt | px | q | rcap | rch | rem | rex | ric | rlh | svb | svh | svi | svmax | svmin | svw | vb | vh | vi | vmax | vmin | vw")s are interpreted according to [§ 1.3 Units](https://drafts.csswg.org/mediaqueries-5/#units).

[height](https://drafts.csswg.org/mediaqueries-5/#descdef-media-height) is [false in the negative range](https://drafts.csswg.org/mediaqueries-5/#false-in-the-negative-range).

### 4.3. Aspect-Ratio: the [aspect-ratio](https://drafts.csswg.org/mediaqueries-5/#descdef-media-aspect-ratio) feature[](https://drafts.csswg.org/mediaqueries-5/#aspect-ratio)

Name:

aspect-ratio

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

[<ratio>](https://drafts.csswg.org/css-values-4/#ratio-value)

Type:

range

The [aspect-ratio](https://drafts.csswg.org/mediaqueries-5/#descdef-media-aspect-ratio) media feature is defined as the ratio of the value of the [width](https://drafts.csswg.org/mediaqueries-5/#descdef-media-width) media feature to the value of the [height](https://drafts.csswg.org/mediaqueries-5/#descdef-media-height) media feature.

### 4.4. Orientation: the [orientation](https://drafts.csswg.org/mediaqueries-5/#descdef-media-orientation) feature[](https://drafts.csswg.org/mediaqueries-5/#orientation)

Name:

orientation

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

portrait [|](https://drafts.csswg.org/css-values-4/#comb-one) landscape

Type:

discrete

portrait

The [orientation](https://drafts.csswg.org/mediaqueries-5/#descdef-media-orientation) media feature is [portrait](https://drafts.csswg.org/mediaqueries-5/#valdef-media-orientation-portrait) when the value of the [height](https://drafts.csswg.org/mediaqueries-5/#descdef-media-height) media feature is greater than or equal to the value of the [width](https://drafts.csswg.org/mediaqueries-5/#descdef-media-width) media feature.

landscape

Otherwise [orientation](https://drafts.csswg.org/mediaqueries-5/#descdef-media-orientation) is [landscape](https://drafts.csswg.org/mediaqueries-5/#valdef-media-orientation-landscape).

[](https://drafts.csswg.org/mediaqueries-5/#example-cd688c88)The following media query tests for “portrait” orientation, like a phone held upright.

@media (orientation:portrait) { … }

### 4.5. Block-Axis Overflow: the [overflow-block](https://drafts.csswg.org/mediaqueries-5/#descdef-media-overflow-block) feature[](https://drafts.csswg.org/mediaqueries-5/#mf-overflow-block)

Name:

overflow-block

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

none [|](https://drafts.csswg.org/css-values-4/#comb-one) scroll | paged

Type:

discrete

The [overflow-block](https://drafts.csswg.org/mediaqueries-5/#descdef-media-overflow-block) media feature describes the behavior of the device when content overflows the initial containing block in the [block axis](https://www.w3.org/TR/css-writing-modes-4/#block-axis).

none

There is no affordance for overflow in the [block axis](https://www.w3.org/TR/css-writing-modes-4/#block-axis); any overflowing content is simply not displayed. Examples: billboards

scroll

Overflowing content in the [block axis](https://www.w3.org/TR/css-writing-modes-4/#block-axis) is exposed by allowing users to scroll to it. Examples: computer screens

paged

Content is broken up into discrete pages; content that overflows one page in the [block axis](https://www.w3.org/TR/css-writing-modes-4/#block-axis) is displayed on the following page. Examples: printers, ebook readers

Media that match [none](https://drafts.csswg.org/mediaqueries-5/#valdef-media-overflow-block-none) or [scroll](https://drafts.csswg.org/mediaqueries-5/#valdef-media-overflow-block-scroll) are said to be continuous media, while those that match [paged](https://drafts.csswg.org/mediaqueries-5/#valdef-media-overflow-block-paged) are said to be paged media

Note: Additional values for this media feature may be added in the future to describe classes of user agents with a hybrid behavior combining aspects of [continuous](https://drafts.csswg.org/mediaqueries-5/#continuous-media) and [paged media](https://drafts.csswg.org/mediaqueries-5/#paged-media). For example, the Presto layout engine (now discontinued) shipped with a semi-paginated presentation-mode behavior similar to continuous except that it honored forced page breaks. Not knowing of any currently-shipping user agent with this type of behavior, the Working Group has decided not to add such a value in this level to avoid mischaracterizing any such user agent. Anyone implementing a user agent not adequately described by any of the values specified above is encouraged to contact the Working Group so that extensions to this media feature may be considered.

### 4.6. Inline-Axis Overflow: the [overflow-inline](https://drafts.csswg.org/mediaqueries-5/#descdef-media-overflow-inline) feature[](https://drafts.csswg.org/mediaqueries-5/#mf-overflow-inline)

Name:

overflow-inline

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

none [|](https://drafts.csswg.org/css-values-4/#comb-one) scroll

Type:

discrete

The [overflow-inline](https://drafts.csswg.org/mediaqueries-5/#descdef-media-overflow-inline) media feature describes the behavior of the device when content overflows the initial containing block in the [inline axis](https://www.w3.org/TR/css-writing-modes-4/#inline-axis).

none[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-overflow-inline-none)

There is no affordance for overflow in the [inline axis](https://www.w3.org/TR/css-writing-modes-4/#inline-axis); any overflowing content is simply not displayed.

scroll[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-overflow-inline-scroll)

Overflowing content in the [inline axis](https://www.w3.org/TR/css-writing-modes-4/#inline-axis) is exposed by allowing users to scroll to it.

Note: There are no known implementations of paged overflow of inline-overflowing content, and the very concept doesn’t seem to make much sense, so there is intentionally no [paged](https://drafts.csswg.org/mediaqueries-5/#valdef-media-overflow-block-paged) value for [overflow-inline](https://drafts.csswg.org/mediaqueries-5/#descdef-media-overflow-inline).

### 4.7. Horizontal Viewport Segments: the [horizontal-viewport-segments](https://drafts.csswg.org/mediaqueries-5/#descdef-media-horizontal-viewport-segments) feature[](https://drafts.csswg.org/mediaqueries-5/#mf-horizontal-viewport-segments)

Name:

horizontal-viewport-segments

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

[<integer>](https://drafts.csswg.org/css-values-4/#integer-value)

Type:

range

The [horizontal-viewport-segments](https://drafts.csswg.org/mediaqueries-5/#descdef-media-horizontal-viewport-segments) media feature describes the number of logical segments of the viewport in the horizontal direction.

The [horizontal-viewport-segments](https://drafts.csswg.org/mediaqueries-5/#descdef-media-horizontal-viewport-segments) media feature is [false in the negative range](https://drafts.csswg.org/mediaqueries-5/#false-in-the-negative-range).

When the viewport is split by one or more hardware features (such as a fold or a hinge between separate displays) that act as a logical divider, segments are the regions of the viewport that can be treated as logically distinct by the page.

### 4.8. Vertical Viewport Segments: the [vertical-viewport-segments](https://drafts.csswg.org/mediaqueries-5/#descdef-media-vertical-viewport-segments) feature[](https://drafts.csswg.org/mediaqueries-5/#mf-vertical-viewport-segments)

Name:

vertical-viewport-segments

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

[<integer>](https://drafts.csswg.org/css-values-4/#integer-value)

Type:

range

The [vertical-viewport-segments](https://drafts.csswg.org/mediaqueries-5/#descdef-media-vertical-viewport-segments) media feature describes the number of logical segments of the viewport in the vertical direction.

The [vertical-viewport-segments](https://drafts.csswg.org/mediaqueries-5/#descdef-media-vertical-viewport-segments) media feature is [false in the negative range](https://drafts.csswg.org/mediaqueries-5/#false-in-the-negative-range).

[](https://drafts.csswg.org/mediaqueries-5/#example-3f07f45a)This media query detects a viewport that has exactly two segments that are side-by-side.

@media (horizontal-viewport-segments: 2) and (vertical-viewport-segments: 1) { … }

### 4.9. Display Modes: the display-mode media feature[](https://drafts.csswg.org/mediaqueries-5/#display-modes)

Name:

display-mode

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

fullscreen [|](https://drafts.csswg.org/css-values-4/#comb-one) standalone | minimal-ui | browser

Type:

discrete

The [display-mode](https://drafts.csswg.org/mediaqueries-5/#descdef-media-display-mode) media feature represents the [display mode](https://drafts.csswg.org/mediaqueries-5/#display-mode) of the web application. Child browsing contexts reflect the display mode of their [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context).

A display mode represents how the web application is being presented within the context of an OS (e.g., in fullscreen, etc.). Display modes correspond to user interface (UI) metaphors and functionality in use on a given platform. The UI conventions of the display modes are purely advisory and implementers are free to interpret them how they best see fit.

This specification defines the following [display modes](https://drafts.csswg.org/mediaqueries-5/#display-mode):

fullscreen

The web application is displayed with browser UI elements hidden and takes up the entirety of the available display area.

standalone

The web application is displayed to look and feel like a standalone native application. This can include the application having a different window, its own icon in the application launcher, etc. In this mode, the user agent excludes standard browser UI elements such as an URL bar, but standard system UI elements, such as window decorations, a system status bar, and/or a system back button, remain available.

minimal-ui[](https://drafts.csswg.org/mediaqueries-5/#display-mode-minimal-ui)

This mode is similar to [standalone](https://drafts.csswg.org/mediaqueries-5/#display-mode-standalone), but provides the end-user with some means to access a minimal set of UI elements for controlling navigation (i.e., back, forward, reload, and perhaps some way of viewing the document’s address). A user agent may include other platform specific UI elements, such as "share" and "print" buttons or whatever is customary on the platform and user agent.

browser[](https://drafts.csswg.org/mediaqueries-5/#display-mode-browser)

The web application is displayed using the platform-specific convention for opening hyperlinks in the user agent (e.g., in a browser tab or a new window).

The [fullscreen](https://drafts.csswg.org/mediaqueries-5/#display-mode-fullscreen) [display mode](https://drafts.csswg.org/mediaqueries-5/#display-mode) is distinct from the [Fullscreen API](https://drafts.csswg.org/mediaqueries-5/#biblio-fullscreen).

The [fullscreen](https://drafts.csswg.org/mediaqueries-5/#display-mode-fullscreen) [display mode](https://drafts.csswg.org/mediaqueries-5/#display-mode) describes the fullscreen state of the browser viewport, while the [Fullscreen API](https://drafts.csswg.org/mediaqueries-5/#biblio-fullscreen) operates on an element contained within the viewport. As such, a web application can have its display mode set to fullscreen, even while `[fullscreenElement](https://fullscreen.spec.whatwg.org/#dom-document-fullscreenelement)` returns `null`, and `[fullscreenEnabled](https://fullscreen.spec.whatwg.org/#dom-document-fullscreenenabled)` returns `false`.

The fullscreen [display mode](https://drafts.csswg.org/mediaqueries-5/#display-mode) is also not directly related to the CSS [:fullscreen](https://fullscreen.spec.whatwg.org/#css-pc-fullscreen) pseudo-class. The :fullscreen pseudo-class matches an element exclusively when that element is put into the fullscreen element stack. However, a side effect of calling the `[requestFullscreen()](https://fullscreen.spec.whatwg.org/#dom-element-requestfullscreen)` method on an element using the [Fullscreen API](https://drafts.csswg.org/mediaqueries-5/#biblio-fullscreen) can be that the browser enters a fullscreen mode at the OS-level, in which case both :fullscreen and (display-mode: fullscreen) will match.

[](https://drafts.csswg.org/mediaqueries-5/#example-f95854b1)On some platforms, it is possible for a user—or a [Web Application Manifest](https://drafts.csswg.org/mediaqueries-5/#biblio-appmanifest)—to put a web application into fullscreen without invoking the [Fullscreen API](https://drafts.csswg.org/mediaqueries-5/#biblio-fullscreen). When this happens, the [:fullscreen](https://fullscreen.spec.whatwg.org/#css-pc-fullscreen) pseudo class will not match, but (display-mode: fullscreen) will match. This is exemplified in CSS code below:

/\* applies when the viewport is fullscreen \*/
@media (display-mode: fullscreen) {
  ...
}

/\* applies when an element is fullscreen \*/
#game:fullscreen {
  ...
}

## 5\. Display Quality Media Features[](https://drafts.csswg.org/mediaqueries-5/#mf-display-quality)

### 5.1. Display Resolution: the [resolution](https://drafts.csswg.org/mediaqueries-5/#descdef-media-resolution) feature[](https://drafts.csswg.org/mediaqueries-5/#resolution)

Name:

resolution

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

[<resolution>](https://drafts.csswg.org/css-values-4/#resolution-value "Expands to: dpcm | dpi | dppx | x") [|](https://drafts.csswg.org/css-values-4/#comb-one) infinite

Type:

range

The [resolution](https://drafts.csswg.org/mediaqueries-5/#descdef-media-resolution) media feature describes the resolution of the output device, i.e. the density of the pixels, taking into account the [page zoom](https://drafts.csswg.org/cssom-view-1/#page-zoom) but assuming a [pinch zoom](https://drafts.csswg.org/cssom-view-1/#pinch-zoom) of 1.0.

The [resolution](https://drafts.csswg.org/mediaqueries-5/#descdef-media-resolution) media feature is [false in the negative range](https://drafts.csswg.org/mediaqueries-5/#false-in-the-negative-range)

When querying media with non-square pixels, [resolution](https://drafts.csswg.org/mediaqueries-5/#descdef-media-resolution) queries the density in the vertical dimension.

For printers, this corresponds to the screening resolution (the resolution for printing dots of arbitrary color). Printers might have a different resolution for grayscale printing.

For output mediums that have no physical constraints on resolution (such as outputting to vector graphics), this feature must match the infinite value. For the purpose of evaluating this media feature in the [range context](https://drafts.csswg.org/mediaqueries-5/#range-context), [infinite](https://drafts.csswg.org/mediaqueries-5/#valdef-media-resolution-infinite) must be treated as larger than any possible [<resolution>](https://drafts.csswg.org/css-values-4/#resolution-value "Expands to: dpcm | dpi | dppx | x"). (That is, a query like (resolution > 1000dpi) will be true for an infinite media.)

[](https://drafts.csswg.org/mediaqueries-5/#example-4141fdad)This media query simply detects “high-resolution” screens (those with a hardware pixel to CSS [px](https://drafts.csswg.org/css-values-4/#px) ratio of at least 2):

@media (resolution >= 2dppx)

[](https://drafts.csswg.org/mediaqueries-5/#example-618117ac)For example, this media query expresses that a style sheet is used on devices with resolution greater than 300 dots per CSS [in](https://drafts.csswg.org/css-values-4/#in):

@media print and (min-resolution: 300dpi) { … }

This media query is equivalent, but uses the CSS [cm](https://drafts.csswg.org/css-values-4/#cm) unit:

@media print and (min-resolution: 118dpcm) { … }

[<resolution>](https://drafts.csswg.org/css-values-4/#resolution-value "Expands to: dpcm | dpi | dppx | x") does not refer to the number of device pixels per physical length unit, but the number of device pixels per css unit. This mapping is done by the user agent, so it is always known to the user agent.

If the user agent either has no knowledge of the geometry of physical pixels, or knows about the geometry physical pixels and they are (close enough to) square, it would not map a different number of device pixels per css pixels along each axis, and the would therefore be no difference between the vertical and horizontal resolution.

Otherwise, if the UA chooses to map a different number along each axis, this would be to respond to physical pixels not being square either. How the UA comes to this knowledge is out of scope, but having enough information to take this decision, it can invert the mapping should the device be rotated 90 degrees.

### 5.2. Display Type: the [scan](https://drafts.csswg.org/mediaqueries-5/#descdef-media-scan) feature[](https://drafts.csswg.org/mediaqueries-5/#scan)

Name:

scan

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

interlace [|](https://drafts.csswg.org/css-values-4/#comb-one) progressive

Type:

discrete

The [scan](https://drafts.csswg.org/mediaqueries-5/#descdef-media-scan) media feature describes the scanning process of some output devices.

interlace[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-scan-interlace)

CRT and some types of plasma TV screens used “interlaced” rendering, where video frames alternated between specifying only the “even” lines on the screen and only the “odd” lines, exploiting various automatic mental image-correction abilities to produce smooth motion. This allowed them to simulate a higher FPS broadcast at half the bandwidth cost.

When displaying on interlaced screens, authors should avoid very fast movement across the screen to avoid “combing”, and should ensure that details on the screen are wider than 1px to avoid [“twitter”](https://en.wikipedia.org/wiki/Interlaced_video#Interline_twitter).

progressive[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-scan-progressive)

A screen using “progressive” rendering displays each screen fully, and needs no special treatment.

Most modern screens, and all computer screens, use progressive rendering.

[](https://drafts.csswg.org/mediaqueries-5/#example-3db7de6d)For example, the “feet” of letters in serif fonts are very small features that can provoke “twitter” on interlaced devices. The [scan](https://drafts.csswg.org/mediaqueries-5/#descdef-media-scan) media feature can be used to detect this, and use an alternative font with less chance of “twitter”:

@media (scan: interlace) { body { font-family: sans-serif; } }

Note: At the time of writing, all known implementations match `scan: progressive` rather than `scan: interlace`.

### 5.3. Detecting Console Displays: the [grid](https://drafts.csswg.org/mediaqueries-5/#descdef-media-grid) feature[](https://drafts.csswg.org/mediaqueries-5/#grid)

Name:

grid

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

[<mq-boolean>](https://drafts.csswg.org/mediaqueries-5/#typedef-mq-boolean)

Type:

discrete

The [grid](https://drafts.csswg.org/mediaqueries-5/#descdef-media-grid) media feature is used to query whether the output device is grid or bitmap. If the output device is grid-based (e.g., a “tty” terminal, or a phone display with only one fixed font), the value will be 1. Otherwise, the value will be 0.

The <mq-boolean> value type is an [<integer>](https://drafts.csswg.org/css-values-4/#integer-value) with the value 0 or 1. Any other integer value is invalid. Note that \-0 is always equivalent to 0 in CSS, and so is also accepted as a valid [<mq-boolean>](https://drafts.csswg.org/mediaqueries-5/#typedef-mq-boolean) value.

Note: The [<mq-boolean>](https://drafts.csswg.org/mediaqueries-5/#typedef-mq-boolean) type exists only for legacy purposes. If this feature were being designed today, it would instead use proper named keywords for its values.

[](https://drafts.csswg.org/mediaqueries-5/#example-07e10c7e)Here is an example that detects a narrow console screen:

@media (grid) and (max-width: 15em) { … }

Note: At the time of writing, all known implementations match `grid: 0` rather than `grid: 1`.

### 5.4. Display Update Frequency: the [update](https://drafts.csswg.org/mediaqueries-5/#descdef-media-update) feature[](https://drafts.csswg.org/mediaqueries-5/#update)

Name:

update

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

none [|](https://drafts.csswg.org/css-values-4/#comb-one) slow | fast

Type:

discrete

The [update](https://drafts.csswg.org/mediaqueries-5/#descdef-media-update) media feature is used to query the ability of the output device to modify the appearance of content once it has been rendered. It accepts the following values:

none

Once it has been rendered, the layout can no longer be updated. Example: documents printed on paper.

slow[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-update-slow)

The layout may change dynamically according to the usual rules of CSS, but the output device is not able to render or display changes quickly enough for them to be perceived as a smooth animation. Example: E-ink screens or severely under-powered devices.

fast[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-update-fast)

The layout may change dynamically according to the usual rules of CSS, and the output device is not unusually constrained in speed, so regularly-updating things like CSS Animations can be used. Example: computer screens.

[](https://drafts.csswg.org/mediaqueries-5/#example-57cc8bd6)For example, if a page styles its links to only add underlines on hover, it may want to always display underlines when printed:

@media (update) {
  a { text-decoration: none; }
  a:hover, a:focus { text-decoration: underline; }
}
/\* In non-updating UAs, the links get their default underline at all times. \*/

### 5.5. Detecting the display technology: the [environment-blending](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) feature[](https://drafts.csswg.org/mediaqueries-5/#environment-blending)

Name:

environment-blending

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

opaque [|](https://drafts.csswg.org/css-values-4/#comb-one) additive | subtractive

Type:

discrete

The [environment-blending](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) media feature is used to query the characteristics of the user’s display so the author can adjust the style of the document. An author might choose to adjust the visuals and/or layout of the page depending on the display technology to increase the appeal or improve legibility.

The following values are valid:

opaque[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-environment-blending-opaque)

The document is rendered on an opaque medium, such as a traditional monitor or paper. Black is dark and white is 100% light.

additive[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-environment-blending-additive)

The display blends the colors of the canvas with the real world using additive mixing. Black is fully transparent and white is 100% light.

For example: a head-up display in a car.

subtractive

The display blends the colors of the canvas with the real world using subtractive mixing. White is fully transparent and dark colors have the most contrast.

For example: an LCD display embedded in a bathroom mirror.

[](https://drafts.csswg.org/mediaqueries-5/#issue-c4eeab17)Is there a need for the [subtractive](https://drafts.csswg.org/mediaqueries-5/#valdef-media-environment-blending-subtractive) value?

body { background-color: white; }
p { color: black; }

@media(environment-blending: additive) {
    body { background-color: black; }
    p { color: white; font-size: 16px; font-weight: 1000; }
}

## 6\. Color Media Features[](https://drafts.csswg.org/mediaqueries-5/#mf-colors)

### 6.1. Color Depth: the [color](https://drafts.csswg.org/mediaqueries-5/#descdef-media-color) feature[](https://drafts.csswg.org/mediaqueries-5/#color)

Name:

color

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

[<integer>](https://drafts.csswg.org/css-values-4/#integer-value)

Type:

range

The [color](https://drafts.csswg.org/mediaqueries-5/#descdef-media-color) media feature describes the number of bits per color component of the output device. If the device is not a color device, the value is zero.

[color](https://drafts.csswg.org/mediaqueries-5/#descdef-media-color) is [false in the negative range](https://drafts.csswg.org/mediaqueries-5/#false-in-the-negative-range).

[](https://drafts.csswg.org/mediaqueries-5/#example-8d42e196)For example, these two media queries express that a style sheet applies to all color devices:

@media (color) { … }
@media (min-color: 1) { … }

[](https://drafts.csswg.org/mediaqueries-5/#example-f33339f9)This media query expresses that a style sheet applies to color devices with at least 8 bits per color component:

@media (color >= 8) { … }

If different color components are represented by different number of bits, the smallest number is used.

[](https://drafts.csswg.org/mediaqueries-5/#example-d1c7ceef)For instance, if an 8-bit color system represents the red component with 3 bits, the green component with 3 bits, and the blue component with 2 bits, the [color](https://drafts.csswg.org/mediaqueries-5/#descdef-media-color) media feature will have a value of 2.

In a device with indexed colors, the minimum number of bits per color component in the lookup table is used.

Note: The described functionality is only able to describe color capabilities at a superficial level. [color-gamut](https://drafts.csswg.org/mediaqueries-5/#descdef-media-color-gamut), is generally more relevant to authors’ needs. If further functionality is required, RFC2879 [\[RFC2879\]](https://drafts.csswg.org/mediaqueries-5/#biblio-rfc2879) provides more specific media features which may be supported at a later stage.

### 6.2. Paletted Color Screens: the [color-index](https://drafts.csswg.org/mediaqueries-5/#descdef-media-color-index) feature[](https://drafts.csswg.org/mediaqueries-5/#color-index)

Name:

color-index

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

[<integer>](https://drafts.csswg.org/css-values-4/#integer-value)

Type:

range

The [color-index](https://drafts.csswg.org/mediaqueries-5/#descdef-media-color-index) media feature describes the number of entries in the color lookup table of the output device. If the device does not use a color lookup table, the value is zero.

[color-index](https://drafts.csswg.org/mediaqueries-5/#descdef-media-color-index) is [false in the negative range](https://drafts.csswg.org/mediaqueries-5/#false-in-the-negative-range).

[](https://drafts.csswg.org/mediaqueries-5/#example-d0764fe1)For example, here are two ways to express that a style sheet applies to all color index devices:

@media (color-index) { … }
@media (color-index >= 1) { … }

[](https://drafts.csswg.org/mediaqueries-5/#example-0fec94ea)This media query expresses that a style sheet applies to a color index device with 256 or more entries:

<?xml-stylesheet media="(min-color-index: 256)"
  href="http://www.example.com/…" ?>

### 6.3. Monochrome Screens: the [monochrome](https://drafts.csswg.org/mediaqueries-5/#descdef-media-monochrome) feature[](https://drafts.csswg.org/mediaqueries-5/#monochrome)

Name:

monochrome

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

[<integer>](https://drafts.csswg.org/css-values-4/#integer-value)

Type:

range

The [monochrome](https://drafts.csswg.org/mediaqueries-5/#descdef-media-monochrome) media feature describes the number of bits per pixel in a monochrome frame buffer. If the device is not a monochrome device, the output device value will be 0.

[monochrome](https://drafts.csswg.org/mediaqueries-5/#descdef-media-monochrome) is [false in the negative range](https://drafts.csswg.org/mediaqueries-5/#false-in-the-negative-range).

[](https://drafts.csswg.org/mediaqueries-5/#example-fa837be6)For example, this is how to express that a style sheet applies to all monochrome devices:

@media (monochrome) { … }

[](https://drafts.csswg.org/mediaqueries-5/#example-83e2c204)Express that a style sheet applies to monochrome devices with more than 2 bits per pixels:

@media (monochrome >= 2) { … }

[](https://drafts.csswg.org/mediaqueries-5/#example-60bef5a3)Express that there is one style sheet for color pages and another for monochrome:

<link rel="stylesheet" media="print and (color)" href="http://…" />
<link rel="stylesheet" media="print and (monochrome)" href="http://…" />

### 6.4. Color Display Quality: the [color-gamut](https://drafts.csswg.org/mediaqueries-5/#descdef-media-color-gamut) feature[](https://drafts.csswg.org/mediaqueries-5/#color-gamut)

Name:

color-gamut

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

srgb [|](https://drafts.csswg.org/css-values-4/#comb-one) p3 | rec2020

Type:

discrete

The [color-gamut](https://drafts.csswg.org/mediaqueries-5/#descdef-media-color-gamut) media feature describes the approximate range of colors that are supported by the UA and output device. That is, if the UA receives content with colors in the specified space it can cause the output device to render the appropriate color, or something appropriately close enough.

Note: The query uses approximate ranges for a few reasons. Firstly, there are a lot of differences in display hardware. For example, a device might claim to support "Rec. 2020", but actually renders a significantly lower range of the full gamut. Secondly, there are a lot of different color ranges that different devices support, and enumerating them all would be tedious. In most cases the author does not need to know the exact capabilities of the display, just whether it is better than sRGB, or significantly better than sRGB. That way they can serve appropriate images, tagged with color profiles, to the user.

srgb

The UA and output device can support approximately the sRGB gamut or more.

Note: It is expected that the vast majority of color displays will be able to return true to a query of this type.

p3

The UA and output device can support approximately the gamut specified by the DCI P3 Color Space or more.

Note: The [p3](https://drafts.csswg.org/mediaqueries-5/#valdef-media-color-gamut-p3) gamut is larger than and includes the [srgb](https://drafts.csswg.org/mediaqueries-5/#valdef-media-color-gamut-srgb) gamut.

rec2020

The UA and output device can support approximately the gamut specified by the ITU-R Recommendation BT.2020 Color Space or more.

Note: The [rec2020](https://drafts.csswg.org/mediaqueries-5/#valdef-media-color-gamut-rec2020) gamut is larger than and includes the [p3](https://drafts.csswg.org/mediaqueries-5/#valdef-media-color-gamut-p3) gamut.

The following table lists the primary colors of these color spaces in terms of their color space chromaticity coordinates, as defined in [\[COLORIMETRY\]](https://drafts.csswg.org/mediaqueries-5/#biblio-colorimetry).

Color Space

White Point

Primaries

Red

Green

Blue

xW

yW

xR

yR

xG

yG

xB

yB

srgb

0.3127

0.3290

0.640

0.330

0.300

0.600

0.150

0.060

p3

0.3127

0.3290

0.680

0.320

0.265

0.690

0.150

0.060

rec2020

0.3127

0.3290

0.708

0.292

0.170

0.797

0.131

0.046

Note: The table above does not contains enough information to fully describe the color spaces, but is sufficient to determine whether an output device approximately covers their respective gamuts. See [\[SRGB\]](https://drafts.csswg.org/mediaqueries-5/#biblio-srgb) for more information on sRGB, [\[SMPTE-EG-432-1-2010\]](https://drafts.csswg.org/mediaqueries-5/#biblio-smpte-eg-432-1-2010) and [\[SMPTE-RP-431-2-2011\]](https://drafts.csswg.org/mediaqueries-5/#biblio-smpte-rp-431-2-2011) for more information on DCI P3, and [\[ITU-R-BT-2020-2\]](https://drafts.csswg.org/mediaqueries-5/#biblio-itu-r-bt-2020-2) for more information on ITU-R Recommendation BT.2020.

[](https://drafts.csswg.org/mediaqueries-5/#example-6fba5b94)For example, this media query applies when the display supports colors in the range of DCI P3:

@media (color-gamut: p3) { … }

Note: An output device can return true for multiple values of this media feature, if its full output gamut is large enough, or one gamut is a subset of another supported gamut. As a result, this feature is best used in an "ascending" fashion—set a base value when (color-gamut: srgb) is true, then override it if (color-gamut: p3) is true, etc.

Note: Some output devices, such as monochrome displays, cannot support even the [srgb](https://drafts.csswg.org/mediaqueries-5/#valdef-media-color-gamut-srgb) gamut. To test for these devices, you can use this feature in a negated boolean-context fashion: not (color-gamut).

### 6.5. Dynamic Range: the [dynamic-range](https://drafts.csswg.org/mediaqueries-5/#descdef-media-dynamic-range) feature[](https://drafts.csswg.org/mediaqueries-5/#dynamic-range)

Name:

dynamic-range

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

standard [|](https://drafts.csswg.org/css-values-4/#comb-one) high

Type:

discrete

[dynamic-range](https://drafts.csswg.org/mediaqueries-5/#descdef-media-dynamic-range) represents the combination of max brightness, color depth, and contrast ratio that are supported by the user agent and output device.

high

The user agent and the output device fulfill all of the following criteria:

-   they support a [high peak brightness](https://drafts.csswg.org/mediaqueries-5/#peak-brightness-high-peak-brightness)
    
-   they support a [high contrast ratio](https://drafts.csswg.org/mediaqueries-5/#contrast-ratio-high-contrast-ratio)
    
-   the color depth is greater than 24 bit or 8 bit per color component of RGB
    

Note: Some devices have high dynamic range capabilities that are not always on, and that need to be activated (sometimes programmatically, sometimes by the user, sometimes based on the content). This media feature does not test whether such a mode is active, just whether the device is capable of high dynamic range visuals.

standard

This value matches on any visual device, and not on devices lacking visual capabilities.

Note: More than one value of this media feature can match simulataneously: a user agent matching [high](https://drafts.csswg.org/mediaqueries-5/#valdef-media-dynamic-range-high) will also match [standard](https://drafts.csswg.org/mediaqueries-5/#valdef-media-dynamic-range-standard).

#### 6.5.1. Determining contrast and brightness of display[](https://drafts.csswg.org/mediaqueries-5/#contrast-brightness-of-display)

Peak brightness refers to how bright the brightest point a light-emitting device such as an LCD screen can produce, or in the case of a light reflective device such as paper or e-ink, the point at which it least absorbs light.

Note: Some devices can only produce their [peak brightness](https://drafts.csswg.org/mediaqueries-5/#peak-brightness) for brief periods of time or on a small portion of their surface at any given time.

The contrast ratio is the ratio of the luminance of the brightest color to that of the darkest color that the system is capable of producing.

This specification does not define precise ways by which these qualities can be measured; it also lets the user agent determine what counts as a high [contrast ratio](https://drafts.csswg.org/mediaqueries-5/#contrast-ratio) and as a high [peak brightness](https://drafts.csswg.org/mediaqueries-5/#peak-brightness). User agents must nonetheless attempt to conform to the following intent: a device capable of [high peak brightness](https://drafts.csswg.org/mediaqueries-5/#peak-brightness-high-peak-brightness) can display “brighter than white” highlights, and a simultaneous ability to do so while also presenting deep blacks (rather than an overall bright but washed out image) is indicative of a [high contrast ratio](https://drafts.csswg.org/mediaqueries-5/#contrast-ratio-high-contrast-ratio).

Note: The determination for [dynamic-range](https://drafts.csswg.org/mediaqueries-5/#descdef-media-dynamic-range) and [video-dynamic-range](https://drafts.csswg.org/mediaqueries-5/#descdef-media-video-dynamic-range) will be vary depending on the user agent, but is expected to have broadly dependable semantics.

### 6.6. Detecting inverted colors on the display: the [inverted-colors](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) feature[](https://drafts.csswg.org/mediaqueries-5/#inverted)

Name:

inverted-colors

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

none [|](https://drafts.csswg.org/css-values-4/#comb-one) inverted

Type:

discrete

The [inverted-colors](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) media feature indicates whether the content is displayed normally, or whether colors have been inverted.

Note: This is an indication that the user agent or underlying operating system has forcibly inverted all colors, not a request to do so. This is sometimes provided as a simple accessibility feature, allowing users to switch between light-on-dark and dark-on-light text. However, this has unpleasant side effects, such as inverting pictures, or turning shadows into highlights, which reduce the readability of the content.

none[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-inverted-colors-none)

Colors are displayed normally.

inverted[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-inverted-colors-inverted)

All pixels within the displayed area have been inverted.

This value must not match if the user agent has done some kind of content aware inversion such as one that preserves the images (except through its UA style sheet, see below).

Note: This is because the goal of this media feature is to enable authors to mitigate the undesirable effects of the non content aware approach that invert _all_ the pixels. If the author were to take counter measures even in the content-aware cases, their counter measures and the UA’s would be at risk of cancelling each other.

User agents must add the following rule to their [UA style sheet](https://drafts.csswg.org/css-cascade-5/#cascade-origin-ua):

```
@media (inverted-colors) {
  img:not(picture>img), picture, video { filter: invert(100%); }
}
```

[](https://drafts.csswg.org/mediaqueries-5/#example-d96b625d)In addition to this UA style sheet rule, and depending on their style sheet, authors may also wish to invert images injected via CSS (such as backgrounds), or to disable shadows:

@media (inverted-colors) {
  \* {
    text-shadow: none !important;
    box-shadow: none !important;
  }
}

## 7\. Interaction Media Features[](https://drafts.csswg.org/mediaqueries-5/#mf-interaction)

The “interaction” media features reflect various aspects of how the user interacts with the page.

Typical examples of devices matching combinations of [pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-pointer) and [hover](https://drafts.csswg.org/mediaqueries-5/#descdef-media-hover):

[pointer: none](https://drafts.csswg.org/mediaqueries-5/#descdef-media-pointer)

[pointer: coarse](https://drafts.csswg.org/mediaqueries-5/#descdef-media-pointer)

[pointer: fine](https://drafts.csswg.org/mediaqueries-5/#descdef-media-pointer)

[hover: none](https://drafts.csswg.org/mediaqueries-5/#descdef-media-hover)

keyboard-only controls, sequential/spatial (d-pad) focus navigation

smartphones, touch screens

basic stylus digitizers (Cintiq, Wacom, etc)

[hover: hover](https://drafts.csswg.org/mediaqueries-5/#descdef-media-hover)

Nintendo Wii controller, Kinect

mouse, touch pad, advanced stylus digitizers (Surface, Samsung Note, Wacom Intuos Pro, etc)

The [pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-pointer) and [hover](https://drafts.csswg.org/mediaqueries-5/#descdef-media-hover) features relate to the characteristics of the “primary” pointing device, while [any-pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-any-pointer) and [any-hover](https://drafts.csswg.org/mediaqueries-5/#descdef-media-any-hover) can be used to query the properties of all potentially available pointing devices.

Note: While this specification does not define how user agents should decide what the “primary” pointing device is, the expectation is that user agents should make this determination by combining knowledge about the device/environment they are running on, the number and type of pointing devices available, and a notion of which of these is generally and/or currently being used. In situations where the primary input mechanism for a device is not a pointing device, but there is a secondary – and less frequently used – input that is a pointing devices, the user agent may decide to treat the non-pointing device as the primary (resulting in 'pointer: none'). user agents may also decide to dynamically change what type of pointing device is deemed to be primary, in response to changes in the user environment or in the way the user is interacting with the UA.

Note: The [pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-pointer), [hover](https://drafts.csswg.org/mediaqueries-5/#descdef-media-hover), [any-pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-any-pointer) and [any-hover](https://drafts.csswg.org/mediaqueries-5/#descdef-media-any-hover) features only relate to the characteristics, or the complete absence, of pointing devices, and can not be used to detect the presence of non-pointing device input mechanisms such as keyboards. Authors should take into account the potential presence of non-pointing device inputs, regardless of which values are matched when querying these features.

While [pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-pointer) and [hover](https://drafts.csswg.org/mediaqueries-5/#descdef-media-hover) can be used to design the main style and interaction mode of the page to suit the primary input mechanism (based on the characteristics, or complete absence, of the primary pointing device), authors should strongly consider using [any-pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-any-pointer) and [any-hover](https://drafts.csswg.org/mediaqueries-5/#descdef-media-any-hover) to take into account all possible types of pointing devices that have been detected.

### 7.1. Pointing Device Quality: the [pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-pointer) feature[](https://drafts.csswg.org/mediaqueries-5/#pointer)

Name:

pointer

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

none [|](https://drafts.csswg.org/css-values-4/#comb-one) coarse | fine

Type:

discrete

The [pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-pointer) media feature is used to query the presence and accuracy of a pointing device such as a mouse. If multiple pointing devices are present, the pointer media feature must reflect the characteristics of the “primary” pointing device, as determined by the user agent. (To query the capabilities of _any_ available pointing devices, see the [any-pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-any-pointer) media feature.)

none

The primary input mechanism of the device does not include a pointing device.

coarse

The primary input mechanism of the device includes a pointing device of limited accuracy. Examples include touchscreens and motion-detection sensors (like the Kinect peripheral for the Xbox.)

fine

The primary input mechanism of the device includes an accurate pointing device. Examples include mice, touchpads, and drawing styluses.

Both [coarse](https://drafts.csswg.org/mediaqueries-5/#valdef-media-pointer-coarse) and [fine](https://drafts.csswg.org/mediaqueries-5/#valdef-media-pointer-fine) indicate the presence of a pointing device, but differ in accuracy. A pointing device with which it would be difficult or impossible to reliably pick one of several small adjacent targets at a zoom factor of 1 would qualify as coarse. Changing the zoom level does not affect the value of this media feature.

Note: As the UA may provide the user with the ability to zoom, or as secondary pointing devices may have a different accuracy, the user may be able to perform accurate clicks even if the value of this media feature is [coarse](https://drafts.csswg.org/mediaqueries-5/#valdef-media-pointer-coarse). This media feature does not indicate that the user will never be able to click accurately, only that it is inconvenient for them to do so. Authors are expected to react to a value of coarse by designing pages that do not rely on accurate clicking to be operated.

For accessibility reasons, even on devices whose pointing device can be described as [fine](https://drafts.csswg.org/mediaqueries-5/#valdef-media-pointer-fine), the UA may give a value of [coarse](https://drafts.csswg.org/mediaqueries-5/#valdef-media-pointer-coarse) or [none](https://drafts.csswg.org/mediaqueries-5/#valdef-media-pointer-none) to this media query, to indicate that the user has difficulties manipulating the pointing device accurately or at all. In addition, even if the primary pointing device has fine pointing accuracy, there may be additional coarse pointing devices available to the user. Authors may wish to query the [any-pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-any-pointer) media feature to take these other coarse potential pointing devices into account.

/\* Make radio buttons and check boxes larger if we have an inaccurate primary pointing device \*/
@media (pointer:coarse) {
  input\[type="checkbox"\], input\[type="radio"\] {
    min-width:30px;
    min-height:40px;
    background:transparent;
  }
}

### 7.2. Hover Capability: the [hover](https://drafts.csswg.org/mediaqueries-5/#descdef-media-hover) feature[](https://drafts.csswg.org/mediaqueries-5/#hover)

Name:

hover

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

none [|](https://drafts.csswg.org/css-values-4/#comb-one) hover

Type:

discrete

The [hover](https://drafts.csswg.org/mediaqueries-5/#descdef-media-hover) media feature is used to query the user’s ability to hover over elements on the page with the primary pointing device. If a device has multiple pointing devices, the hover media feature must reflect the characteristics of the “primary” pointing device, as determined by the user agent. (To query the capabilities of _any_ available pointing devices, see the [any-hover](https://drafts.csswg.org/mediaqueries-5/#descdef-media-any-hover) media feature.)

none[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-hover-none)

Indicates that the primary pointing device can’t hover, or that there is no pointing device. Examples include touchscreens and screens that use a basic drawing stylus.

Pointing devices that can hover, but for which doing so is inconvenient and not part of the normal way they are used, also match this value. For example, a touchscreen where a long press is treated as hovering would match [hover: none](https://drafts.csswg.org/mediaqueries-5/#descdef-media-hover).

hover[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-hover-hover)

Indicates that the primary pointing device can easily hover over parts of the page. Examples include mice and devices that physically point at the screen, like the Nintendo Wii controller.

[](https://drafts.csswg.org/mediaqueries-5/#example-3d419780)For example, on a touch screen device that can also be controlled by an optional mouse, the [hover](https://drafts.csswg.org/mediaqueries-5/#descdef-media-hover) [media feature](https://drafts.csswg.org/mediaqueries-5/#media-feature) should match hover: none, as the primary pointing device (the touch screen) does not allow the user to hover.

However, despite this, the optional mouse does allow users to hover. Authors should therefore be careful not to assume that the ':hover' pseudo class will never match on a device where 'hover:none' is true, but they should design layouts that do not depend on hovering to be fully usable.

For accessibility reasons, even on devices that do support hovering, the UA may give a value of [hover: none](https://drafts.csswg.org/mediaqueries-5/#descdef-media-hover) to this media query, to opt into layouts that work well without hovering. Note that even if the primary input mechanism has 'hover: hover' capability, there may be additional input mechanisms available to the user that do not provide hover capabilities.

/\* Only use a hover-activated drop down menu on devices that can conveniently hover. \*/
@media (hover) {
  .menu > li        {display:inline-block;}
  .menu ul          {display:none; position:absolute;}
  .menu li:hover ul {display:block; list-style:none; padding:0;}
  /\* ... \*/
}

### 7.3. All Available Interaction Capabilities: the [any-pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-any-pointer) and [any-hover](https://drafts.csswg.org/mediaqueries-5/#descdef-media-any-hover) features[](https://drafts.csswg.org/mediaqueries-5/#any-input)

Name:

any-pointer

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

none [|](https://drafts.csswg.org/css-values-4/#comb-one) coarse | fine

Type:

discrete

Name:

any-hover

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

none [|](https://drafts.csswg.org/css-values-4/#comb-one) hover

Type:

discrete

The [any-pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-any-pointer) and [any-hover](https://drafts.csswg.org/mediaqueries-5/#descdef-media-any-hover) media features are identical to the [pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-pointer) and [hover](https://drafts.csswg.org/mediaqueries-5/#descdef-media-hover) media features, but they correspond to the union of capabilities of all the pointing devices available to the user. In the case of any-pointer, more than one of the values can match, if different pointing devices have different characteristics.

[any-pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-any-pointer) and [any-hover](https://drafts.csswg.org/mediaqueries-5/#descdef-media-any-hover) must only match none if _all_ of the pointing devices would match [none](https://drafts.csswg.org/mediaqueries-5/#valdef-media-pointer-none) for the corresponding query, or there are no pointing devices at all.

[any-pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-any-pointer) is used to query the presence and accuracy of pointing devices. It does not take into account any additional non-pointing device inputs, and can not be used to test for the presence of other input mechanisms, such as d-pads or keyboard-only controls, that don’t move an on-screen pointer. 'any-pointer:none' will only evaluate to true if there are no pointing devices at all present.

[](https://drafts.csswg.org/mediaqueries-5/#example-acccb04d)On a traditional desktop environment with a mouse and keyboard, 'any-pointer:none' will be false (due to the presence of the mouse), even though a non-pointer input (the keyboard) is also present.

'any-hover:none' will only evaluate to true if there are no pointing devices, or if all the pointing devices present lack hover capabilities. As such, it should be understood as a query to test if any hover-capable pointing devices are present, rather than whether or not any of the pointing devices is hover-incapable. The latter scenario can currently not be determined using [any-hover](https://drafts.csswg.org/mediaqueries-5/#descdef-media-any-hover) or any other interaction media feature. Additionally, it does not take into account any non-pointing device inputs, such as d-pads or keyboard-only controls, which by their very nature are also not hover-capable.

[](https://drafts.csswg.org/mediaqueries-5/#example-3ebf158a)On a touch-enabled laptop with a mouse and a touchscreen, 'any-hover:none' will evaluate to false (due to the presence of the hover-capable mouse), even though a non-hover-capable pointing device (the touchscreen) is also present. It is currently not possible to provide different styles for cases where different pointing devices have different hover capabilities.

Designing a page that relies on hovering or accurate pointing only because [any-hover](https://drafts.csswg.org/mediaqueries-5/#descdef-media-any-hover) or [any-pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-any-pointer) indicate that at least one of the available input mechanisms has these capabilities is likely to result in a poor experience. However, authors may use this information to inform their decision about the style and functionality they wish to provide based on any additional pointing devices that are available to the user.

[](https://drafts.csswg.org/mediaqueries-5/#example-45cc4e7d)A number of smart TVs come with a way to control an on-screen cursor, but it is often fairly basic controller which is difficult to operate accurately.

A browser in such a smart TV would have [coarse](https://drafts.csswg.org/mediaqueries-5/#valdef-media-pointer-coarse) as the value of both [pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-pointer) and [any-pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-any-pointer), allowing authors to provide a layout with large and easy to reach click targets.

The user may also have paired a Bluetooth mouse with the TV, and occasionally use it for extra convenience, but this mouse is not the main way the TV is operated. [pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-pointer) still matches [coarse](https://drafts.csswg.org/mediaqueries-5/#valdef-media-pointer-coarse), while [any-pointer](https://drafts.csswg.org/mediaqueries-5/#descdef-media-any-pointer) now both matches coarse and [fine](https://drafts.csswg.org/mediaqueries-5/#valdef-media-pointer-fine).

Switching to small click targets based on the fact that (any-pointer: fine) is now true would not be appropriate. It would not only surprise the user by providing an experience out of line with what they expect on a TV, but may also be quite inconvenient: the mouse, not being the primary way to control the TV, may be out of reach, hidden under one of the cushions on the sofa...

By contrast, consider scrolling on the same TV. Scrollbars are difficult to manipulate without an accurate pointing device. Having prepared an alternative way to indicate that there is more content to be seen based on (pointer: coarse) being true, an author may want to still show the scrollbars in addition if (any-pointer: fine) is true, or to hide them altogether to reduce visual clutter if (any-pointer: fine) is false.

### 7.4. Detecting UA-supplied navigation controls: the [nav-controls](https://drafts.csswg.org/mediaqueries-5/#descdef-media-nav-controls) feature[](https://drafts.csswg.org/mediaqueries-5/#nav-controls)

Name:

nav-controls

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

none [|](https://drafts.csswg.org/css-values-4/#comb-one) back

Type:

discrete

The [nav-controls](https://drafts.csswg.org/mediaqueries-5/#descdef-media-nav-controls) media features allows authors to know whether the user agent is providing [obviously discoverable](https://drafts.csswg.org/mediaqueries-5/#obviously-discoverable) navigation controls as part of its user interface.

Note: Traditional browsers typically do provide such controls and web pages typically have not needed to concern themselves with that, but in some contexts, web applications are run through so-called web-views, which do not always feature a full-fledged user interface. It is thus useful for authors to know what is being supplied by the user agent, so that they can consider whether they need to provide an easily discovered alternative.

In this context, obviously discoverable refers to controls which are either directly visible in the user interface, such as buttons, or some other form of control which is typical of the user interface of that device and trivially identifiable by the user. In the case of visual user interfaces, this would typically a _visible_ control, although it could be something else in the case of an audio or tactile user interface. Importantly, this is not about keyboard shortcuts or gestures; as convenient as these can be, these are not obviously discoverable by just looking at (in the case of a visual UI) the user agent.

The following values are valid:

none[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-nav-controls-none)

The user agent does not have any [obviously discoverable](https://drafts.csswg.org/mediaqueries-5/#obviously-discoverable) navigation controls, and in particular none that cause the user agent to move back one page in the [joint session history](https://html.spec.whatwg.org/multipage/history.html#joint-session-history).

back

The user agent provides navigation controls, including at least an [obviously discoverable](https://drafts.csswg.org/mediaqueries-5/#obviously-discoverable) control causing the user agent to move back one page in the [joint session history](https://html.spec.whatwg.org/multipage/history.html#joint-session-history) (typically, a “back” button).

[](https://drafts.csswg.org/mediaqueries-5/#example-a7700c44)Authors can include a back button in their web application, and then conditionally hide it if the user agent already offers that functionality:

```
@media (nav-controls: back) {
  #back-button {
    display: none;
  }
}
```

As this media feature can be used in a [boolean context](https://drafts.csswg.org/mediaqueries-5/#boolean-context), the same example can be written with shorter syntax:

```
@media (nav-controls) {
  #back-button {
    display: none;
  }
}
```

Note: Theoretically, the two are not strictly equivalent, as there could be new values in a future extension of this media feature other than [back](https://drafts.csswg.org/mediaqueries-5/#valdef-media-nav-controls-back) that could match when back doesn’t. In that case, using the [nav-controls](https://drafts.csswg.org/mediaqueries-5/#descdef-media-nav-controls) feature in a boolean context could be misleading. However, given that navigation back is arguably the most fundamental navigation operation, the CSS Working Group does not anticipate user interfaces with explicit navigation controls but no back button, so this problem is not expected to occur in practice.

Whether [obviously discoverable](https://drafts.csswg.org/mediaqueries-5/#obviously-discoverable) controls are active does not impact the evaluation of this media feature.

[](https://drafts.csswg.org/mediaqueries-5/#example-ceb745cf)If there is no previous page in the [joint session history](https://html.spec.whatwg.org/multipage/history.html#joint-session-history), a user agent with a “back” button could toggle it to a disabled state that cannot be interacted with until there actually is history that can be navigated back to. In such a case, `@media (nav-controls: back) { … }` would still be expected to match.

## 8\. Video Prefixed Features[](https://drafts.csswg.org/mediaqueries-5/#video-prefixed-features)

Some user agents, including many TVs, render video and graphics in two separate "planes" (bi-plane) with distinct screen characteristics. A set of video-prefixed features is provided to describe the video plane.

Any bi-plane implementation must return values based on the video plane for the following features: [video-color-gamut](https://drafts.csswg.org/mediaqueries-5/#descdef-media-video-color-gamut); [video-dynamic-range](https://drafts.csswg.org/mediaqueries-5/#descdef-media-video-dynamic-range). All other features must return values based on the graphics plane.

Non bi-plane implementations must return the same values for video-prefixed features and their non-prefixed counterparts.

### 8.1. Video Color Display Quality: the [video-color-gamut](https://drafts.csswg.org/mediaqueries-5/#descdef-media-video-color-gamut) feature[](https://drafts.csswg.org/mediaqueries-5/#video-color-gamut)

Name:

video-color-gamut

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

srgb [|](https://drafts.csswg.org/css-values-4/#comb-one) p3 | rec2020

Type:

discrete

The [video-color-gamut](https://drafts.csswg.org/mediaqueries-5/#descdef-media-video-color-gamut) media feature describes the approximate range of colors that are supported by the UA and output device’s video plane. That is, if the UA receives content with colors in the specified space it can cause the output device to render the appropriate color, or something appropriately close enough.

Value and color space definitions are the same as [color-gamut](https://drafts.csswg.org/mediaqueries-5/#descdef-media-color-gamut)

### 8.2. Video Dynamic Range: the [video-dynamic-range](https://drafts.csswg.org/mediaqueries-5/#descdef-media-video-dynamic-range) feature[](https://drafts.csswg.org/mediaqueries-5/#video-dynamic-range)

Name:

video-dynamic-range

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

standard [|](https://drafts.csswg.org/css-values-4/#comb-one) high

Type:

discrete

[video-dynamic-range](https://drafts.csswg.org/mediaqueries-5/#descdef-media-video-dynamic-range) represents the combination of max brightness, color depth, and contrast ratio that are supported by the UA and output device’s video plane.

Supported values are the same as [dynamic-range](https://drafts.csswg.org/mediaqueries-5/#dynamic-range).

## 9\. Scripting Media Features[](https://drafts.csswg.org/mediaqueries-5/#mf-scripting)

### 9.1. Scripting Support: the [scripting](https://drafts.csswg.org/mediaqueries-5/#descdef-media-scripting) feature[](https://drafts.csswg.org/mediaqueries-5/#scripting)

Name:

scripting

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

none [|](https://drafts.csswg.org/css-values-4/#comb-one) initial-only | enabled

Type:

discrete

The [scripting](https://drafts.csswg.org/mediaqueries-5/#descdef-media-scripting) media feature is used to query whether scripting languages, such as JavaScript, are supported on the current document.

enabled

Indicates that the user agent supports scripting of the page, and that scripting in the current document is enabled for the lifetime of the document.

initial-only

Indicates that the user agent supports scripting of the page, and that scripting in the current document is enabled during the initial page load, but is not supported afterwards. Examples are printed pages, or pre-rendering network proxies that render a page on a server and send a nearly-static version of the page to the user.

[](https://drafts.csswg.org/mediaqueries-5/#issue-168bd904)Should there be an explicit minimum threshold to meet before a UA is allowed to claim [initial-only](https://drafts.csswg.org/mediaqueries-5/#valdef-media-scripting-initial-only)? Having one would mean authors would know what they can depend on, and could tailor their scripts accordingly. On the other hand, pinpointing that threshold is difficult: if it is set too low, the scripting facilities that authors can depend on may be to constrained to be practical, even though actual UAs may potentially all support significantly more. But trying to set it higher may cause us to exclude UAs that do support scripting at loading time, but restrict it in some cases based on complex heuristics. For instance, conservative definitions likely include at least running all inline scripts and firing the DOMContentLoaded event. But it does not seem useful for authors to constrain themselves to this if most (or maybe all) initial-only UAs also load external scripts (including async and defer) and fire the load event. On the other hand, requiring external scripts to be loaded and the load event to be fired could exclude UAs like Opera mini, which typically do run them, but may decide not to based on timeouts and other heuristics. [\[Issue #503\]](https://github.com/w3c/csswg-drafts/issues/503)

none

Indicates that the user agent will not run scripts for this document; either it doesn’t support a scripting language, or the support isn’t active for the current document.

Some user agents have the ability to turn off scripting support on a per script basis or per domain basis, allowing some, but not all, scripts to run in a particular document. The [scripting](https://drafts.csswg.org/mediaqueries-5/#descdef-media-scripting) media feature does not allow fine grained detection of which script is allowed to run. In this scenario, the value of the scripting media feature should be [enabled](https://drafts.csswg.org/mediaqueries-5/#valdef-media-scripting-enabled) or [initial-only](https://drafts.csswg.org/mediaqueries-5/#valdef-media-scripting-initial-only) if scripts originating on the same domain as the document are allowed to run, and [none](https://drafts.csswg.org/mediaqueries-5/#valdef-media-scripting-none) otherwise.

Note: A future level of CSS may extend this media feature to allow fine-grained detection of which script is allowed to run.

## 10\. Custom Media Queries[](https://drafts.csswg.org/mediaqueries-5/#custom-mq)

When designing documents that use media queries, the same media query may be used in multiple places, such as to qualify multiple [@import](https://drafts.csswg.org/css-cascade-5/#at-ruledef-import) statements. Repeating the same media query multiple times is an editing hazard; an author making a change must edit every copy in the same way, or suffer from difficult-to-find bugs in their CSS.

To help ameliorate this, this specification defines a method of defining [custom media queries](https://drafts.csswg.org/mediaqueries-5/#custom-media-query), which are simply-named aliases for longer and more complex media queries. In this way, a media query used in multiple places can instead be assigned to a custom media query, which can be used everywhere, and editing the media query requires touching only one line of code.

A custom media query is defined with the [@custom-media](https://drafts.csswg.org/mediaqueries-5/#at-ruledef-custom-media) rule:

@custom-media = @custom-media [<extension-name>](https://drafts.csswg.org/css-extensions-1/#typedef-extension-name) \[ [<media-query-list>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-query-list) [|](https://drafts.csswg.org/css-values-4/#comb-one) true [|](https://drafts.csswg.org/css-values-4/#comb-one) false \] ;

The [<extension-name>](https://drafts.csswg.org/css-extensions-1/#typedef-extension-name) can then be used in a [media feature](https://drafts.csswg.org/mediaqueries-5/#media-feature). It **must** be used in a [boolean context](https://drafts.csswg.org/mediaqueries-5/#boolean-context); using them in a normal or [range context](https://drafts.csswg.org/mediaqueries-5/#range-context) is a syntax error. If a [<media-query-list>](https://drafts.csswg.org/mediaqueries-5/#typedef-media-query-list) is given, the [custom media query](https://drafts.csswg.org/mediaqueries-5/#custom-media-query) evaluates to true if the <media-query-list> it represents evaluates to true, and false otherwise. If true[](https://drafts.csswg.org/mediaqueries-5/#valdef-custom-media-true) or false[](https://drafts.csswg.org/mediaqueries-5/#valdef-custom-media-false) is given, the custom media query evaluates to true or false, respectively.

[](https://drafts.csswg.org/mediaqueries-5/#example-532b0adb)The [custom media query](https://drafts.csswg.org/mediaqueries-5/#custom-media-query) is evaluated logically, not treated as a textual substitution. Take the following code snippet for instance:

```
/* --modern targets modern devices that support color or hover */
@custom-media --modern (color), (hover);

@media (--modern) and (width > 1024px) {
  .a { color: green; }
}
```

It is equivalent to:

```
@media ((color) or (hover)) and (width > 1024px) {
  .a { color: green; }
}
```

Processing it as if it meant the following would be incorrect:

```
@media (color), (hover) and (width > 1024px) {
  .a { color: green; }
}
```

A [@custom-media](https://drafts.csswg.org/mediaqueries-5/#at-ruledef-custom-media) rule can refer to other [custom media queries](https://drafts.csswg.org/mediaqueries-5/#custom-media-query). However, loops are forbidden, and a custom media query must not be defined in terms of itself or of another custom media query that directly or indirectly refers to it. Any such attempt of defining a custom media query with a circular dependency must cause all the custom media queries in the loop to fail to be defined.

If multiple [@custom-media](https://drafts.csswg.org/mediaqueries-5/#at-ruledef-custom-media) rules declare the same [<extension-name>](https://drafts.csswg.org/css-extensions-1/#typedef-extension-name), the truth value is based on the last one alone, ignoring all previous declarations of the same <extension-name>.

Note: For error handling purposes, an undefined [media feature](https://drafts.csswg.org/mediaqueries-5/#media-feature) is different from a media feature that evaluates to false. See [Media Queries 4 § 3.2 Error Handling](https://www.w3.org/TR/mediaqueries-4/#error-handling) for details.

[](https://drafts.csswg.org/mediaqueries-5/#example-c280b211)For example, if a responsive site uses a particular breakpoint in several places, it can alias that with a reasonable name:

@custom-media --narrow-window (max-width: 30em);

@media (--narrow-window) {
  /\* narrow window styles \*/
}
@media (--narrow-window) and (script) {
  /\* special styles for when script is allowed \*/
}
/\* etc \*/

### 10.1. Script-based Custom Media Queries[](https://drafts.csswg.org/mediaqueries-5/#script-custom-mq)

[](https://drafts.csswg.org/mediaqueries-5/#issue-bab99524)Define a map of names to values for JS. Values can be either a MediaQueryList object or a boolean, in which case it’s treated identically to the above, or can be a number or a string, in which case it’s treated like a normal MQ, and can use the normal or range context syntax. Like:

<script>
CSS.customMedia.set('--foo', 5);
</script>
<style>
@media (\_foo: 5) { ... }
@media (\_foo < 10) { ... }
</style>

## 11\. User Preference Media Features[](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences)

### 11.1. Detecting the desire for less motion on the page: the [prefers-reduced-motion](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-reduced-motion) feature[](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion)

Name:

prefers-reduced-motion

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

no-preference [|](https://drafts.csswg.org/css-values-4/#comb-one) reduce

Type:

discrete

The [prefers-reduced-motion](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-reduced-motion) media feature is used to detect if the user has requested the system minimize the amount of non-essential motion it uses.

no-preference[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-motion-no-preference)

Indicates that the user has made no preference known to the system. This keyword value evaluates as false in the [boolean context](https://drafts.csswg.org/mediaqueries-5/#boolean-context).

reduce[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-motion-reduce)

Indicates that user has notified the system that they prefer an interface that removes or replaces the types of motion-based animation that either trigger discomfort for those with vestibular motion sensitivity, or distraction for those with attention deficits.

### 11.2. Detecting the desire for reduced transparency on the page: the [prefers-reduced-transparency](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-reduced-transparency) feature[](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-transparency)

Name:

prefers-reduced-transparency

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

no-preference [|](https://drafts.csswg.org/css-values-4/#comb-one) reduce

Type:

discrete

The [prefers-reduced-transparency](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-reduced-transparency) media feature is used to detect if the user has requested the system minimize the amount of transparent or translucent layer effects it uses.

no-preference[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-transparency-no-preference)

Indicates that the user has made no preference known to the system. This keyword value evaluates as false in the [boolean context](https://drafts.csswg.org/mediaqueries-5/#boolean-context).

reduce[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-transparency-reduce)

Indicates that user has notified the system that they prefer an interface that minimizes the amount of transparent or translucent layer effects.

[](https://drafts.csswg.org/mediaqueries-5/#issue-34934443)How does this interact with preferences around e.g. pattern fills and backgrounds? They’re not about transparency, but they also interfere with shape recognition.

### 11.3. Detecting the desire for increased or decreased color contrast from elements on the page: the [prefers-contrast](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-contrast) feature[](https://drafts.csswg.org/mediaqueries-5/#prefers-contrast)

Name:

prefers-contrast

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

no-preference [|](https://drafts.csswg.org/css-values-4/#comb-one) less | more | custom

Type:

discrete

The [prefers-contrast](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-contrast) media feature is used to detect if the user has requested more or less contrast in the page. This could be responded to, for example, by adjusting the contrast ratio between adjacent colors, or by changing how much elements stand out visually, such as by adjusting their borders.

no-preference[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-contrast-no-preference)

Indicates that the user has made no preference known to the system. This keyword value evaluates as false in the [boolean context](https://drafts.csswg.org/mediaqueries-5/#boolean-context).

less

Indicates that user has notified the system that they prefer an interface that has a lower level of contrast.

more

Indicates that user has notified the system that they prefer an interface that has a higher level of contrast.

custom

Indicates that the user has indicated wanting a specific set of colors to be used, but the contrast implied by these particular colors is such that neither [more](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-contrast-more) nor [less](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-contrast-less) match.

Note: This value will match for users of [forced colors mode](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) who have picked a palette that is neither particularly high nor low contrast. See [§ 11.4 Detecting Forced Colors Mode: the forced-colors feature](https://drafts.csswg.org/mediaqueries-5/#forced-colors).

[](https://drafts.csswg.org/mediaqueries-5/#example-90364cb5)A user calling for cyan text over a rust background is not—at least in terms of luminosity—expressing a need for particularly high or low contrast, but this is not a lack of a preference either.

Note: Authors can respond to specific user preferences for more or less contrast using [prefers-contrast: more](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-contrast) or prefers-contrast: less, as appropriate.

Using an unqualified `@media (prefers-contrast) { … }` to apply high contrast styles is incorrect and user-hostile, as it would also impose high contrast styles to people who have requested the exact opposite.

However, it is also common to reduce visual clutter and color complexity in response to both high and low contrast preferences. In that case, it is appropriate to use `@media (prefers-contrast) { … }` without specifying [more](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-contrast-more) or [less](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-contrast-less), to do things like replacing background images with plain colors, turning off decorative gradients, or replacing border images or box shadows with simple solid borders. As [prefers-contrast: custom](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-contrast)—like prefers-contrast: more or prefers-contrast: less—evaluates to true in a [boolean context](https://drafts.csswg.org/mediaqueries-5/#boolean-context), such simplifications would also benefit users of [forced colors mode](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode), even when their colors of choice do not result in a particularly high or low contrast. This is desirable, as the reduced palette enforced by forced colors mode calls for some visual simplification of the page.

[](https://drafts.csswg.org/mediaqueries-5/#example-e956a9d7)Preference for more or less contrast may arise from a variety of different situations. Here are some examples:

-   Many users have difficulty reading text that has a small difference in contrast to the text background and would prefer a larger contrast.
-   People suffering from migraine may find strongly contrasting pages to be visually painful and would prefer a low contrast.
-   Some people with dyslexia find high contrast text hard to read, as they feel that the letters shine / sparkle as if backlit by too bright a light, and find low contrast to be more comfortable.
-   Environmental factors may also lead a user to prefer more or less contrast. See also [§ 11.7 Automatic handling of User Preferences](https://drafts.csswg.org/mediaqueries-5/#auto-pref).

[](https://drafts.csswg.org/mediaqueries-5/#issue-819b41af)This list should be refined and expanded.

### 11.4. Detecting Forced Colors Mode: the [forced-colors](https://drafts.csswg.org/mediaqueries-5/#descdef-media-forced-colors) feature[](https://drafts.csswg.org/mediaqueries-5/#forced-colors)

Name:

forced-colors

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

none [|](https://drafts.csswg.org/css-values-4/#comb-one) active

Type:

discrete

active[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-forced-colors-active)

Indicates that [forced colors mode](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) is active: the user agent enforces a user-chosen limited color palette on the page, The UA will provide the color palette to authors through the CSS system color keywords. See [CSS Color Adjust § 3 Forced Color Palettes](https://www.w3.org/TR/css-color-adjust-1/#forced) for details.

This does _not_ necessarily indicate a preference for more contrast. The colors have been forcibly adjusted to match the preference of the user, but that preference can be for less or more contrast, or some other arrangement that is neither particularly low or high contrast.

In addition to [forced-colors: active](https://drafts.csswg.org/mediaqueries-5/#descdef-media-forced-colors), the user agent must also match one of [prefers-contrast: more](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-contrast) or prefers-contrast: less if it can determine that the forced color palette chosen by the user has a particularly high or low contrast, and must make prefers-contrast: custom match otherwise.

Similarly, if the forced color palette chosen by the user fits within one of the color schemes described by [prefers-color-scheme](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-scheme), the corresponding value must also match.

none[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-forced-colors-none)

[Forced colors mode](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) is not active.

[](https://drafts.csswg.org/mediaqueries-5/#example-44ff2aad)When [forced colors mode](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) is active, the only colors that are available to the author are [system colors](https://drafts.csswg.org/css-color-4/#css-system-colors). The user agent will enforce this limited palette automatically, but the author may choose a different way of using these colors, using the forced-colors media feature to detect when it is appropriate to do so.

### 11.5. Detecting the desire for light or dark color schemes: the [prefers-color-scheme](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-scheme) feature[](https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme)

Name:

prefers-color-scheme

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

light [|](https://drafts.csswg.org/css-values-4/#comb-one) dark

Type:

discrete

The [prefers-color-scheme](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-scheme) media feature reflects the user’s desire that the page use a light or dark color theme.

light

Indicates that user has expressed the preference for a page that has a light theme (dark text on light background), or has not expressed an active preference (and thus should receive the "web default" of a light theme).

dark

Indicates that user has expressed the preference for a page that has a dark theme (light text on dark background).

Note: The values for this feature might be expanded in the future (to express a more active preference for light color schemes, or preferences for other types of color schemes like "sepia"). As such, the most future-friendly way to use this media feature is by negation such as (prefers-color-scheme: dark) and (not (prefers-color-scheme: dark)), which ensures that new values fall into at least one of the styling blocks.

The method by which the user expresses their preference can vary. It might be a system-wide setting exposed by the Operating System, or a setting controlled by the user agent.

Note: User preferences can also vary by medium. For example, a user may prefer dark themes on a glowing screen, but light themes when printing (to save ink and/or because inked text on blank paper prints better than blank letterforms knocked out of an inked background). UAs are expected to take such variances into consideration so that [prefers-color-scheme](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-scheme) reflects preferences appropriate to the medium rather than preferences taken out of context.

This feature, like the other prefers-\* features, previously had a no-preference value to indicate an author not expressing an active preference. However, user agents converged on expressing the "default" behavior as a [light](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-color-scheme-light) preference, and never matching no-preference.

If a future user agent wishes to expose a difference between "no preference" and "really wants a light display", please contact the CSSWG to discuss this.

### 11.6. Detecting the desire for reduced data usage when loading a page: the [prefers-reduced-data](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-reduced-data) feature[](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-data)

[](https://drafts.csswg.org/mediaqueries-5/#issue-22536363)This feature may be an undesired source of fingerprinting, with a bias towards low income with limited data. A Privacy and Security section should be added to this spec, and it should address this concern. [\[Issue #4832\]](https://github.com/w3c/csswg-drafts/issues/4832)

Name:

prefers-reduced-data

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

no-preference [|](https://drafts.csswg.org/css-values-4/#comb-one) reduce

Type:

discrete

The [prefers-reduced-data](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-reduced-data) media feature is used to detect if the user has a preference for being served alternate content that uses less data for the page to be rendered.

no-preference[](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-data-no-preference)

Indicates that the user has made no preference known to the system. This keyword value evaluates as false in the [boolean context](https://drafts.csswg.org/mediaqueries-5/#boolean-context).

reduce

Indicates that user has expressed the preference for lightweight alternate content.

The method by which the user expresses their preference can vary. It might be a system-wide setting exposed by the Operating System, or a setting controlled by the user agent.

Note: User agents may consider setting this based on the same user or system preference as they use to set the [Save-Data](https://wicg.github.io/savedata/) HTTP request header.

[](https://drafts.csswg.org/mediaqueries-5/#example-b1599633)For example, a site could honour the preference of a user who has turned on data-saving mode by serving a smaller image.

.image {
  background-image: url("images/heavy.jpg");
}

@media (prefers-reduced-data: reduce) {
  /\* Save-Data: On \*/
  .image {
    background-image: url("images/light.jpg");
  }
}

### 11.7. Automatic handling of User Preferences[](https://drafts.csswg.org/mediaqueries-5/#auto-pref)

User agents may have explicit settings allowing users to indicate their preferences or may make the determination based on settings in the underlying operating system. User agents may also automatically infer the preferences of the user based on knowledge about the device, the environment, etc. In such case, it is recommended that they also offer a way for users to opt out of or override the automatically determined preferences.

[](https://drafts.csswg.org/mediaqueries-5/#example-e4f5c435)In addition to allowing users to explicitly choose between a preference for a [light](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-color-scheme-light) or [dark](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-color-scheme-dark) color scheme, a user agent could have a mode where the determination is automatically made based on the current time, expressing a preference for dark between sunset and dawn.

[](https://drafts.csswg.org/mediaqueries-5/#example-ed3f92b7)Depending on the type of display used, changes in the ambient light level may make the reading experience difficult or uncomfortable.

For instance, liquid crystal displays can be washed out and very hard to read in brightly lit environments. A device with such a screen and with an ambient light sensor could automatically switch [prefers-contrast](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-contrast) to [more](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-contrast-more) when it detects conditions that would make the screen difficult to read. A user agent on a device with an e-ink display would not make the same adjustment, as such displays remain readable in bright daylight.

In the opposite situation, user agents running of device with a light-emitting screen (LCD, OLED, etc.) and an ambient light sensor could automatically switch [prefers-contrast](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-contrast) to [less](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-contrast-less) and [prefers-color-scheme](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-scheme) to [dark](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-color-scheme-dark) when used in a dim environment where excessive contrast and brightness would be distracting or uncomfortable to the reader.

[](https://drafts.csswg.org/mediaqueries-5/#example-b48ea7e3)A user agent could automatically switch between [prefers-reduced-data: no-preference](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-reduced-data) and [reduce](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-data-reduce) depending on whether the network connection in use allows for unlimited data or is on a metered plan.

## Appendix A: Deprecated Media Features[](https://drafts.csswg.org/mediaqueries-5/#mf-deprecated)

The following [media features](https://drafts.csswg.org/mediaqueries-5/#media-feature) are **deprecated**. They are kept for backward compatibility, but are not appropriate for newly written style sheets. Authors must not use them. User agents must support them as specified.

To query for the size of the viewport (or the page box on page media), the [width](https://drafts.csswg.org/mediaqueries-5/#descdef-media-width), [height](https://drafts.csswg.org/mediaqueries-5/#descdef-media-height) and [aspect-ratio](https://drafts.csswg.org/mediaqueries-5/#descdef-media-aspect-ratio) [media features](https://drafts.csswg.org/mediaqueries-5/#media-feature) should be used, rather than [device-width](https://drafts.csswg.org/mediaqueries-5/#descdef-media-device-width), [device-height](https://drafts.csswg.org/mediaqueries-5/#descdef-media-device-height) and [device-aspect-ratio](https://drafts.csswg.org/mediaqueries-5/#descdef-media-device-aspect-ratio), which refer to the physical size of the device regardless of how much space is available for the document being laid out. The device-\* media features are also sometimes used as a proxy to detect mobile devices. Instead, authors should use media features that better represent the aspect of the device that they are attempting to style against.

### device-width[](https://drafts.csswg.org/mediaqueries-5/#device-width)

Name:

device-width

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

[<length>](https://drafts.csswg.org/css-values-4/#length-value "Expands to: advance measure | cap | ch | cm | dvb | dvh | dvi | dvmax | dvmin | dvw | em | ex | ic | in | lh | lvb | lvh | lvi | lvmax | lvmin | lvw | mm | pc | pt | px | q | rcap | rch | rem | rex | ric | rlh | svb | svh | svi | svmax | svmin | svw | vb | vh | vi | vmax | vmin | vw")

Type:

range

The [device-width](https://drafts.csswg.org/mediaqueries-5/#descdef-media-device-width) media feature describes the width of the rendering surface of the output device. For [continuous media](https://drafts.csswg.org/mediaqueries-5/#continuous-media), this is the width of the [Web-exposed screen area](https://drafts.csswg.org/cssom-view-1/#web-exposed-screen-area). For [paged media](https://drafts.csswg.org/mediaqueries-5/#paged-media), this is the width of the page sheet size.

[device-width](https://drafts.csswg.org/mediaqueries-5/#descdef-media-device-width) is [false in the negative range](https://drafts.csswg.org/mediaqueries-5/#false-in-the-negative-range).

@media (device-width < 800px) { … }

In the example above, the style sheet will apply only to screens less than 800px in length. The [px](https://drafts.csswg.org/css-values-4/#px) unit is of the logical kind, as described in the [Units](https://drafts.csswg.org/mediaqueries-5/#units) section.

Note: If a device can be used in multiple orientations, such as portrait and landscape, the device-\* media features reflect the current orientation.

### device-height[](https://drafts.csswg.org/mediaqueries-5/#device-height)

Name:

device-height

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

[<length>](https://drafts.csswg.org/css-values-4/#length-value "Expands to: advance measure | cap | ch | cm | dvb | dvh | dvi | dvmax | dvmin | dvw | em | ex | ic | in | lh | lvb | lvh | lvi | lvmax | lvmin | lvw | mm | pc | pt | px | q | rcap | rch | rem | rex | ric | rlh | svb | svh | svi | svmax | svmin | svw | vb | vh | vi | vmax | vmin | vw")

Type:

range

The [device-height](https://drafts.csswg.org/mediaqueries-5/#descdef-media-device-height) media feature describes the height of the rendering surface of the output device. For [continuous media](https://drafts.csswg.org/mediaqueries-5/#continuous-media), this is the height of the [Web-exposed screen area](https://drafts.csswg.org/cssom-view-1/#web-exposed-screen-area). For [paged media](https://drafts.csswg.org/mediaqueries-5/#paged-media), this is the height of the page sheet size.

[device-height](https://drafts.csswg.org/mediaqueries-5/#descdef-media-device-height) is [false in the negative range](https://drafts.csswg.org/mediaqueries-5/#false-in-the-negative-range).

<link rel="stylesheet" media="(device-height > 600px)" />

In the example above, the style sheet will apply only to screens taller than 600 vertical pixels. Note that the definition of the [px](https://drafts.csswg.org/css-values-4/#px) unit is the same as in other parts of CSS.

### device-aspect-ratio[](https://drafts.csswg.org/mediaqueries-5/#device-aspect-ratio)

Name:

device-aspect-ratio

For:

[@media](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)

Value:

[<ratio>](https://drafts.csswg.org/css-values-4/#ratio-value)

Type:

range

The 'device-aspect-ratio media feature is defined as the ratio of the value of the [device-width](https://drafts.csswg.org/mediaqueries-5/#descdef-media-device-width) media feature to the value of the 'device-height media feature.

[](https://drafts.csswg.org/mediaqueries-5/#example-b60c3a77)For example, if a screen device with square pixels has 1280 horizontal pixels and 720 vertical pixels (commonly referred to as “16:9”), the following media queries will all match the device:

@media (device-aspect-ratio: 16/9) { … }
@media (device-aspect-ratio: 32/18) { … }
@media (device-aspect-ratio: 1280/720) { … }
@media (device-aspect-ratio: 2560/1440) { … }

## Appendix B: Privacy and Security Considerations[](https://drafts.csswg.org/mediaqueries-5/#priv-sec)

_This section is not normative._

[](https://drafts.csswg.org/mediaqueries-5/#issue-d67229a5)this section is incomplete

The [display-mode](https://drafts.csswg.org/mediaqueries-5/#descdef-media-display-mode) media feature allows an origin access to aspects of a user’s local computing environment and, particularly when used together with an [application manifest](https://www.w3.org/TR/appmanifest/#dfn-manifest) [display](https://www.w3.org/TR/appmanifest/#dfn-display) member [\[APPMANIFEST\]](https://drafts.csswg.org/mediaqueries-5/#biblio-appmanifest), allows an origin some measure of control over a user agent’s native UI. Through a CSS media query, a script can know the display mode of a web application. An attacker could, in such a case, exploit the fact that an application is being displayed in fullscreen to mimic the user interface of another application.

## Changes[](https://drafts.csswg.org/mediaqueries-5/#changes)

_This section is not normative._

### Changes Since the 2020-07-31 Working Draft[](https://drafts.csswg.org/mediaqueries-5/#changes-since-2020-07-31)

In addition to editorial changes and minor clarifications, the following changes and additions were made to this module since the [2020-07-31 Working Draft](https://www.w3.org/TR/2020/WD-mediaqueries-5-20200731/):

-   Adopted [display-mode](https://drafts.csswg.org/mediaqueries-5/#descdef-media-display-mode) from [\[APPMANIFEST\]](https://drafts.csswg.org/mediaqueries-5/#biblio-appmanifest). (See [Issue 6343](https://github.com/w3c/csswg-drafts/issues/6343))
    
-   Dropped the media features what were meant to query about the geometry of the video plane in [bi-plane implementations](https://drafts.csswg.org/mediaqueries-5/#video-prefixed-features): `video-width`, `video-height`, and `video-resolution`. (See [Issue 5044](https://github.com/w3c/csswg-drafts/issues/5044))
    
-   Renamed [prefers-contrast](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-contrast) values `high` and `low` to [more](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-contrast-more) and prefers-contrast less. (See [Issue 2943](https://github.com/w3c/csswg-drafts/issues/2942))
    
-   Rework the interaction between [prefers-contrast](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-contrast) and [forced-colors](https://drafts.csswg.org/mediaqueries-5/#descdef-media-forced-colors), retiring `prefers-contrast: forced` and introducing [custom](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-contrast-custom). (See [Issue 5433](https://github.com/w3c/csswg-drafts/issues/5433)) and [Issue 6036](https://github.com/w3c/csswg-drafts/issues/6036))
    
-   Added the [horizontal-viewport-segments](https://drafts.csswg.org/mediaqueries-5/#descdef-media-horizontal-viewport-segments) and [vertical-viewport-segments](https://drafts.csswg.org/mediaqueries-5/#descdef-media-vertical-viewport-segments) media feature. (See [Issue 6234](https://github.com/w3c/csswg-drafts/issues/6234))
    
-   Added the [nav-controls](https://drafts.csswg.org/mediaqueries-5/#descdef-media-nav-controls) media feature. (See [Issue 6234](https://github.com/w3c/csswg-drafts/issues/6234))
    
-   Make it possible for multiple values of [dynamic-range](https://drafts.csswg.org/mediaqueries-5/#descdef-media-dynamic-range) to match at the same time. (See [Issue 6793](https://github.com/w3c/csswg-drafts/issues/6793))
    

### Changes Since the 2020-07-15 Working Draft[](https://drafts.csswg.org/mediaqueries-5/#changes-since-2020-07-15)

The following additions were made to this module since the [2020-07-15 Working Draft](https://www.w3.org/TR/2020/WD-mediaqueries-5-20200715/):

-   Added a UA style sheet rule for [inverted-colors](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors).
-   Added the [prefers-contrast: forced](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-contrast) value.
-   Remove the `light-level` media feature as it is redundant with prefers-contrast and prefers-color-scheme; add examples of how these media features may be automatically inferred by the user agent based on the same factors `light-level` was expected to respond to.

### Changes Since the 2020-06-03 Working Draft[](https://drafts.csswg.org/mediaqueries-5/#changes-since-2020-06-03)

The following additions were made to this module since the [2020-06-03 Working Draft](https://www.w3.org/TR/2020/WD-mediaqueries-5-20200603/):

-   Merged the content of level 4 into this specification. It previously was maintained as a delta over level 4.
-   Made a few editorial tweaks.

### Changes Since the 2020-03-18 Working Draft[](https://drafts.csswg.org/mediaqueries-5/#changes-since-2020-03-18)

The following additions were made to this module since the [2020-03-18 Working Draft](https://www.w3.org/TR/2020/WD-mediaqueries-5-20200318/):

-   Added video-\* and [dynamic-range](https://drafts.csswg.org/mediaqueries-5/#descdef-media-dynamic-range) media features
-   Removed 'prefers-color-scheme: no-preference'

### Changes Since the First Public Working Draft[](https://drafts.csswg.org/mediaqueries-5/#changes-since-fpwd)

The following additions were made to this module since the [2020-03-03 First Public Working Draft](https://www.w3.org/TR/2020/WD-mediaqueries-5-20200303/):

-   Highlight some known issues inline in the document.

### Changes since the Media Queries Level 4[](https://drafts.csswg.org/mediaqueries-5/#changes-level-5)

The following additions were made to the First Public Working Draft of this module since the [Media Queries Level 4](https://www.w3.org/TR/mediaqueries-4/):

-   Reinstate the `light-level`, [inverted-colors](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors), and Custom Media Queries sections from earlier Media Queries Level 4 drafts.
-   Added [prefers-reduced-motion](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-reduced-motion), [prefers-reduced-transparency](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-reduced-transparency), [prefers-contrast](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-contrast), [prefers-color-scheme](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-scheme), and [forced-colors](https://drafts.csswg.org/mediaqueries-5/#descdef-media-forced-colors) media features.