
# Everything about event bubbling/capturing

> ## Excerpt
> Definition
What is event bubbling?

Most events attached to the DOM node do propagate (bubble/capture). In other
words, when an event is triggered

 * It first goes from the most parent event (i.e., the window object) to the
   lowest descendant. This phase is called capturing.
   Note: IE does not support
   [https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Browser_compatibility] 
   event capture.
 * After that, the event goes back from the lowest descendant to the

---
-   [![Tran Sang](https://www.gravatar.com/avatar/1680e1243aec860a526fc7df7bd01f6f?s=250&d=mm&r=x)](https://transang.me/author/sang/)

Dec 20, 2020 • 7 min read

![Everything about event bubbling/capturing](https://transang.me/content/images/size/w2000/2021/01/a-7.png)

## Definition

What is event bubbling?

Most events attached to the DOM node do propagate (bubble/capture). In other words, when an event is triggered

-   It **first** goes from the most parent event (i.e., the `window` object) to the lowest descendant. This phase is called **capturing**.  
    **_Note_**: IE does [not support](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Browser_compatibility) event capture.
-   **After** that, the event goes back from the lowest descendant to the highest ascendant (the `window` object). This phase is called **bubbling**.

![](https://transang.me/content/images/2020/12/a-7.png)

Events' capturing and bubbling

![](https://transang.me/content/images/2020/12/image-1.png)

Event capture compatibility table

### Event capture with react

Due to the inconsistency across browsers regarding the support for event capture in particular and event support in general, react encapsulates the native events in the React's Event System called [SyntheticEvent](https://reactjs.org/docs/events.html).

The default on... props are for the bubbling phase, to listen for the events in the capture phase, suffix the prop names with `Capture`. For example: `onClickCapture`, `onChangeCapture`, ...

From [react docs](https://reactjs.org/docs/events.html#supported-events)

> The event handlers below are triggered by an event in the bubbling phase. To register an event handler for the capture phase, append `Capture` to the event name; for example, instead of using `onClick`, you would use `onClickCapture` to handle the click event in the capture phase.

React supports an extensive range of events, namely: `copy`, `cut`, `paste`, `compositionend`, `compositionstart`, `compositionupdate`, `keydown`, `keypress`, `keyup`, `blur`, `focus`, `change`, `input`, `invalid`, `reset`, `submit`, `error`, `load`, `select`, `touchcancel`, `touchend`, `touchemove`, `touchstart`, `scroll`, `wheel`, `animationstart`, `animationend`, `animationiteration`, `transitionend`, `toggle`, [media events](https://reactjs.org/docs/events.html#media-events), [pointer events](https://reactjs.org/docs/events.html#pointer-events), [mouse events](https://reactjs.org/docs/events.html#mouse-events).

___

### Document type

_Note_: I said `window` is the highest ascendant object in the event bubbling/capture tree. One may question what the nearest child element of the window object is.

The following facts can solve this question:

-   The equivalent javascript DOMElement of the `<html>` tag is `document.documentElement`.
-   `document` is the parent of the `<html>` element.
-   `window` is a parent of the `document` object.

Hence, some top objects in the event tree are `window` -> `document` -> `document.documentElement` (`<html>` element) -> ...

___

## Which events do not bubble?

Most events do bubble. There are several exception events that do not bubble. Some of them are:

-   [focus](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event) ([focusin](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event) is the equivalent bubbling version).
-   [blur](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) ([focusout](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event) is the equivalent bubbling version).
-   [load](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event), [unload](https://developer.mozilla.org/en-US/docs/Web/API/Window/unload_event), [abort](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/abort_event), [error](https://developer.mozilla.org/en-US/docs/Web/API/Element/error_event), [beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event).
-   [mouseenter](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event) ([mouseover](https://transang.me/everything-about-event-bubbling/mouseover) is similar but do bubble).
-   [mouseleave](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event) ([mouseout](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event) is similar but do bubble).
-   [DOMNodeInsertedIntoDocument](https://w3c.github.io/uievents/#event-type-DOMNodeInsertedIntoDocument), [DOMNodeRemovedFromDocument](https://w3c.github.io/uievents/#event-type-DOMNodeRemovedFromDocument) (both events are [deprecated](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events)).
-   In IE prior to version 9: [change](https://www.quirksmode.org/dom/events/change.html), [submit and reset](https://quirksmode.org/dom/events/submit.html).
-   and many others...

This information can be checked from [MDN Event reference](https://developer.mozilla.org/en-US/docs/Web/Events) or [W3C UI Events](https://w3c.github.io/uievents/).

The capability of bubbling/capturing is defined when [constructing](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event) the event via the `bubbles: boolean` option.

### Are non-bubble events captured?

The answer is **yes**, unless the browser does not support event capture. See [this codepen](https://codepen.io/tranvansang/pen/ExgvYOa) to confirm.

![](https://transang.me/content/images/2020/12/a-9.png)

non-bubble events are captured (in browsers that support event capture)

___

## Event listener firing order

### Phase specification

[EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) is used to add a handler to an event. The `useCapture` option is used to specify whether the handler is added to the capture phase or the bubble phase.

Most today browsers do not require the `useCapture` option and use the default `false` value. However, as noted by [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters), there are some cases that require this option, such as IE prior to version 9. Thus, to improve your code compatibility, you should always explicitly set this option.

> **Note**: `useCapture` has not always been optional. Ideally, you should include it for the widest possible browser compatibility.

![](https://transang.me/content/images/2020/12/image.png)

useCapture isn't optional in all browsers historically

### Firing order

From the illustration, it is trivial to infer that event listeners in the capture phase are fired before the bubble phase.

In the target phase, where the event handlers attached to the event target are fired, the `useCapture` parameter is ignored and the event handlers are executed in the order they were registered.

![](https://transang.me/content/images/2020/12/a-8.png)

Capture phase is executed before the bubble phase

From [MND docs](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters)

> **Note**: For event listeners attached to the event target, the event is in the target phase, rather than the capturing and bubbling phases. Events in the target phase will trigger all listeners on an element in the order they were registered, regardless of the `useCapture` parameter.

### Canceling an event

There are three types of event canceling.

-   [preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault):  
    \- has no effect on non-[cancelable](https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelable) events.  
    \- prevents the default handler of the event, such as form submission, text input, ...
-   [stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation): prevents the event to continue the capture/bubble chain.
-   [stopImmediatePropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopImmediatePropagation): prevents the event listeners attached to the same target from being fired.

All three calls have different event listeners which are affected. None of them affects the target listeners of any other.

![](https://transang.me/content/images/2020/12/a-3.png)

preventDefault() v.s. stopPropagation() v.s stopImmediatePropagation()

___

## Event target

The are several target-related properties in the event object which are handy to obtain useful context information because sometimes the element that triggers the event is not always the element where the event listener is attached to. Some of these properties are:

-   [Event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target): the element that triggers the event.
-   [Event.currentTarget](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget): the element where the event listener is attached to.

![](https://transang.me/content/images/2020/12/a-12.png)

Event's various target types

-   [MouseEvent.relatedTarget](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/relatedTarget), [FocusEvent.relatedTarget](https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/relatedTarget)

![](https://transang.me/content/images/2021/07/a.png)

relatedTarget value in focusin/focusout events

**Note**: In vanilla javascript, and React prior to version 17 (see [Event Pooling](https://reactjs.org/docs/legacy-event-pooling.html)), the event object is re-used in the capture/bubble itinerary. See [this pen](https://codepen.io/tranvansang/pen/rNMzBNq) to confirm this fact in a vanilla script, or [this pen](https://codepen.io/tranvansang/pen/JjRyPdQ?editors=0010) for React 17 version.

This means that if the event listener is asynchronous, you should cache the event's properties locally, otherwise they may be changed unexpectedly.

For [mousenter](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter), [mouseleave](https://developer.mozilla.org/en-US/docs/Web/Events/mouseleave), [mouseout](https://developer.mozilla.org/en-US/docs/Web/Events/mouseout), [mouseover](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event), [dragenter](https://developer.mozilla.org/en-US/docs/Web/Events/dragenter), [dragexit](https://developer.mozilla.org/en-US/docs/Web/Events/dragexit), [blur](https://developer.mozilla.org/en-US/docs/Web/Events/blur), [focus](https://developer.mozilla.org/en-US/docs/Web/Events/focus), [focusin](https://developer.mozilla.org/en-US/docs/Web/Events/focusin), [focusout](https://developer.mozilla.org/en-US/docs/Web/Events/focusout) events, the event has one more property named `relatedTarget` which points to the secondary target, where `target` is the primary target. Use the following structure for your convenience to infer them.

For example:

-   mouseenter: mouse enters/overs/dragenter event.target from event.relatedTarget
-   mouseleave: mouse leaves/outs/dragexit event.target to event.relatedTarget

___

## Focus/Blur events

There are 4 types of focus/blur events: blur/focus (non-bubble), focusin/focusout (bubble).

_There was [a bug](https://bugzilla.mozilla.org/show_bug.cgi?id=962251) from many years ago in Firefox (it has been fixed along), where `relatedTarget` is null on all these 4 events._

Even though the W3C specs on [blur](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-blur), [focus](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-focus), [focusin](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-focusin), [focusout](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-focusout) does require `relatedTarget`.

> FocusEvent.relatedTarget : event target receiving focus.

> FocusEvent.relatedTarget : event target losing focus (if any).

IE only assigns the `relatedTarget` on focusin/focusout events, while it does not set on focus/blur events ([source](https://github.com/facebook/react/issues/3751#issue-71134278)).

### React's onBlur/onFocus

Prior to version 17, React [checks](https://github.com/facebook/react/blob/94a3b0f8a304202bb7c4cc32286e404ac3cc9464/src/browser/ReactBrowserEventEmitter.js#L262-L293) for the availability of event capturing to use the blur/focus events; If not, use the focusin/focusout event. This [causes](https://github.com/facebook/react/issues/6410#issuecomment-207064994) [several](https://github.com/facebook/react/issues/3751) [problems](https://github.com/facebook/react/issues/2011#issuecomment-54880399).

[From version 17](https://github.com/facebook/react/issues/2011#issuecomment-671498305), they decided to use focusin/focusout under the hood for onFocus/onBlur.

Anyway, regardless of react version, react's onBlur/onFocus is not native focus/blur events, because in react onBlur/onBlur do bubble while the native focus/blur events do not bubble.

### Check if an element loses/gains its focus in react

Because the onFocus/onBlur events bubble in react, if a child element gains/loses from from/to its sibling element.

![](https://transang.me/content/images/2020/12/a-10.png)

onBlur and onFocus events in React

To correctly determine if the target element (where the event listener is attached to) loses/gains its focus, check for `evt.currentTarget === evt.target`.

The following source code is copied from [here](https://github.com/facebook/react/issues/6410#issuecomment-671915381).

___

## How much does .addEventListener / .removeEventListener affects the performance?

I added this session because I saw many people care about tuning their code to save several calls of `.addEventListener()` in the effect callback.

My suggestion is that: please do NOT do that. Instead, save your time and spend the investigation on the other critical portion of your program. `.addEventListener`/`.removeEventListener` are very cheap in terms of performance.

The following snippets perform relatively the same. Precisely speaking, the `.addEventListener` versions are at least faster or equal to the later versions.
