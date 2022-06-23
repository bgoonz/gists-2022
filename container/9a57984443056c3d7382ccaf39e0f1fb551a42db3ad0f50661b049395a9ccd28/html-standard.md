

## HTML STANDARD

[← 7.11 Browsing the web](https://html.spec.whatwg.org/multipage/browsing-the-web.html) — [Table of Contents](https://html.spec.whatwg.org/multipage/) — [8.4 Dynamic markup insertion →](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html)

1.  [8 Web application APIs](https://html.spec.whatwg.org/multipage/webappapis.html#webappapis)
    1.  [8.1 Scripting](https://html.spec.whatwg.org/multipage/webappapis.html#scripting)
        1.  [8.1.1 Introduction](https://html.spec.whatwg.org/multipage/webappapis.html#introduction-11)
        2.  [8.1.2 Agents and agent clusters](https://html.spec.whatwg.org/multipage/webappapis.html#agents-and-agent-clusters)
            1.  [8.1.2.1 Integration with the JavaScript agent formalism](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-agent-formalism)
            2.  [8.1.2.2 Integration with the JavaScript agent cluster formalism](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-agent-cluster-formalism)
        3.  [8.1.3 Realms and their counterparts](https://html.spec.whatwg.org/multipage/webappapis.html#realms-and-their-counterparts)
            1.  [8.1.3.1 Environments](https://html.spec.whatwg.org/multipage/webappapis.html#environments)
            2.  [8.1.3.2 Environment settings objects](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-objects)
            3.  [8.1.3.3 Realms, settings objects, and global objects](https://html.spec.whatwg.org/multipage/webappapis.html#realms-settings-objects-global-objects)
                1.  [8.1.3.3.1 Entry](https://html.spec.whatwg.org/multipage/webappapis.html#entry)
                2.  [8.1.3.3.2 Incumbent](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent)
                3.  [8.1.3.3.3 Current](https://html.spec.whatwg.org/multipage/webappapis.html#current)
                4.  [8.1.3.3.4 Relevant](https://html.spec.whatwg.org/multipage/webappapis.html#relevant)
            4.  [8.1.3.4 Enabling and disabling scripting](https://html.spec.whatwg.org/multipage/webappapis.html#enabling-and-disabling-scripting)
            5.  [8.1.3.5 Secure contexts](https://html.spec.whatwg.org/multipage/webappapis.html#secure-contexts)
        4.  [8.1.4 Script processing model](https://html.spec.whatwg.org/multipage/webappapis.html#scripting-processing-model)
            1.  [8.1.4.1 Scripts](https://html.spec.whatwg.org/multipage/webappapis.html#script-structs)
            2.  [8.1.4.2 Fetching scripts](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts)
            3.  [8.1.4.3 Creating scripts](https://html.spec.whatwg.org/multipage/webappapis.html#creating-scripts)
            4.  [8.1.4.4 Calling scripts](https://html.spec.whatwg.org/multipage/webappapis.html#calling-scripts)
            5.  [8.1.4.5 Killing scripts](https://html.spec.whatwg.org/multipage/webappapis.html#killing-scripts)
            6.  [8.1.4.6 Runtime script errors](https://html.spec.whatwg.org/multipage/webappapis.html#runtime-script-errors)
            7.  [8.1.4.7 Unhandled promise rejections](https://html.spec.whatwg.org/multipage/webappapis.html#unhandled-promise-rejections)
        5.  [8.1.5 JavaScript specification host hooks](https://html.spec.whatwg.org/multipage/webappapis.html#javascript-specification-host-hooks)
            1.  [8.1.5.1 HostEnsureCanCompileStrings(realm)](https://html.spec.whatwg.org/multipage/webappapis.html#hostensurecancompilestrings(realm))
            2.  [8.1.5.2 HostPromiseRejectionTracker(promise, operation)](https://html.spec.whatwg.org/multipage/webappapis.html#the-hostpromiserejectiontracker-implementation)
            3.  [8.1.5.3 Job-related host hooks](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-javascript-jobs)
                1.  [8.1.5.3.1 HostCallJobCallback(callback, V, argumentsList)](https://html.spec.whatwg.org/multipage/webappapis.html#hostcalljobcallback)
                2.  [8.1.5.3.2 HostEnqueueFinalizationRegistryCleanupJob(finalizationRegistry)](https://html.spec.whatwg.org/multipage/webappapis.html#hostenqueuefinalizationregistrycleanupjob)
                3.  [8.1.5.3.3 HostEnqueuePromiseJob(job, realm)](https://html.spec.whatwg.org/multipage/webappapis.html#hostenqueuepromisejob)
                4.  [8.1.5.3.4 HostMakeJobCallback(callable)](https://html.spec.whatwg.org/multipage/webappapis.html#hostmakejobcallback)
            4.  [8.1.5.4 Module-related host hooks](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-module-system)
                1.  [8.1.5.4.1 HostGetImportMetaProperties(moduleRecord)](https://html.spec.whatwg.org/multipage/webappapis.html#hostgetimportmetaproperties)
                2.  [8.1.5.4.2 HostImportModuleDynamically(referencingScriptOrModule, moduleRequest, promiseCapability)](https://html.spec.whatwg.org/multipage/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-modulerequest,-promisecapability))
                3.  [8.1.5.4.3 HostResolveImportedModule(referencingScriptOrModule, moduleRequest)](https://html.spec.whatwg.org/multipage/webappapis.html#hostresolveimportedmodule(referencingscriptormodule,-modulerequest))
                4.  [8.1.5.4.4 HostGetSupportedImportAssertions()](https://html.spec.whatwg.org/multipage/webappapis.html#hostgetsupportedimportassertions)
        6.  [8.1.6 Event loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)
            1.  [8.1.6.1 Definitions](https://html.spec.whatwg.org/multipage/webappapis.html#definitions-3)
            2.  [8.1.6.2 Queuing tasks](https://html.spec.whatwg.org/multipage/webappapis.html#queuing-tasks)
            3.  [8.1.6.3 Processing model](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model)
            4.  [8.1.6.4 Generic task sources](https://html.spec.whatwg.org/multipage/webappapis.html#generic-task-sources)
            5.  [8.1.6.5 Dealing with the event loop from other specifications](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-for-spec-authors)
        7.  [8.1.7 Events](https://html.spec.whatwg.org/multipage/webappapis.html#events)
            1.  [8.1.7.1 Event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-attributes)
            2.  [8.1.7.2 Event handlers on elements, `Document` objects, and `Window` objects](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers-on-elements,-document-objects,-and-window-objects)
                1.  [8.1.7.2.1 IDL definitions](https://html.spec.whatwg.org/multipage/webappapis.html#idl-definitions)
            3.  [8.1.7.3 Event firing](https://html.spec.whatwg.org/multipage/webappapis.html#event-firing)
    2.  [8.2 The `WindowOrWorkerGlobalScope` mixin](https://html.spec.whatwg.org/multipage/webappapis.html#windoworworkerglobalscope-mixin)
    3.  [8.3 Base64 utility methods](https://html.spec.whatwg.org/multipage/webappapis.html#atob)

## 8 Web application APIs[](https://html.spec.whatwg.org/multipage/webappapis.html#webappapis)

### 8.1 Scripting[](https://html.spec.whatwg.org/multipage/webappapis.html#scripting)

#### 8.1.1 Introduction[](https://html.spec.whatwg.org/multipage/webappapis.html#introduction-11)

Various mechanisms can cause author-provided executable code to run in the context of a document. These mechanisms include, but are probably not limited to:

-   Processing of `[script](https://html.spec.whatwg.org/multipage/scripting.html#the-script-element)` elements.
-   Navigating to [`javascript:` URLs](https://html.spec.whatwg.org/multipage/browsing-the-web.html#javascript-protocol).
-   Event handlers, whether registered through the DOM using `addEventListener()`, by explicit [event handler content attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-content-attributes), by [event handler IDL attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes), or otherwise.
-   Processing of technologies like SVG that have their own scripting features.

#### 8.1.2 Agents and agent clusters[](https://html.spec.whatwg.org/multipage/webappapis.html#agents-and-agent-clusters)

##### 8.1.2.1 Integration with the JavaScript agent formalism[](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-agent-formalism)

JavaScript defines the concept of an [agent](https://tc39.es/ecma262/#sec-agents). This section gives the mapping of that language-level concept on to the web platform.

Conceptually, the [agent](https://tc39.es/ecma262/#sec-agents) concept is an architecture-independent, idealized "thread" in which JavaScript code runs. Such code can involve multiple globals/[realms](https://html.spec.whatwg.org/multipage/webappapis.html#concept-global-object-realm) that can synchronously access each other, and thus needs to run in a single execution thread.

Two `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` objects having the same [agent](https://tc39.es/ecma262/#sec-agents) does not indicate they can directly access all objects created in each other's realms. They would have to be [same origin-domain](https://html.spec.whatwg.org/multipage/origin.html#same-origin-domain); see [IsPlatformObjectSameOrigin](https://html.spec.whatwg.org/multipage/browsers.html#isplatformobjectsameorigin-(-o-)).

The following types of agents exist on the web platform:

Similar-origin window agent

Contains various `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` objects which can potentially reach each other, either directly or by using `[document.domain](https://html.spec.whatwg.org/multipage/origin.html#dom-document-domain)`.

If the encompassing [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters)'s [is origin-keyed](https://html.spec.whatwg.org/multipage/webappapis.html#is-origin-keyed) is true, then all the `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` objects will be [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin), can reach each other directly, and `[document.domain](https://html.spec.whatwg.org/multipage/origin.html#dom-document-domain)` will no-op.

Two `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` objects that are [same origin](https://html.spec.whatwg.org/multipage/origin.html#same-origin) can be in different [similar-origin window agents](https://html.spec.whatwg.org/multipage/webappapis.html#similar-origin-window-agent), for instance if they are each in their own [browsing context group](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context-group).

Dedicated worker agent

Contains a single `[DedicatedWorkerGlobalScope](https://html.spec.whatwg.org/multipage/workers.html#dedicatedworkerglobalscope)`.

Shared worker agent

Contains a single `[SharedWorkerGlobalScope](https://html.spec.whatwg.org/multipage/workers.html#sharedworkerglobalscope)`.

Service worker agent

Contains a single `[ServiceWorkerGlobalScope](https://w3c.github.io/ServiceWorker/#serviceworkerglobalscope)`.

Worklet agent

Contains a single `[WorkletGlobalScope](https://html.spec.whatwg.org/multipage/worklets.html#workletglobalscope)` object.

Although a given worklet can have multiple realms, each such realm needs its own agent, as each realm can be executing code independently and at the same time as the others.

Only [shared](https://html.spec.whatwg.org/multipage/webappapis.html#shared-worker-agent) and [dedicated worker agents](https://html.spec.whatwg.org/multipage/webappapis.html#dedicated-worker-agent) allow the use of JavaScript `[Atomics](https://tc39.es/ecma262/#sec-atomics-object)` APIs to potentially [block](https://tc39.es/ecma262/#sec-forward-progress).

To create an agent, given a boolean canBlock:

1.  Let signifier be a new unique internal value.
    
2.  Let candidateExecution be a new [candidate execution](https://tc39.es/ecma262/#sec-candidate-executions).
    
3.  Let agent be a new [agent](https://tc39.es/ecma262/#sec-agents) whose \[\[CanBlock\]\] is canBlock, \[\[Signifier\]\] is signifier, \[\[CandidateExecution\]\] is candidateExecution, and \[\[IsLockFree1\]\], \[\[IsLockFree2\]\], and \[\[LittleEndian\]\] are set at the implementation's discretion.
    
4.  Set agent's [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#concept-agent-event-loop) to a new [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop).
    
5.  Return agent.
    

The relevant agent for a [platform object](https://webidl.spec.whatwg.org/#dfn-platform-object) platformObject is platformObject's [relevant Realm](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-realm)'s [agent](https://tc39.es/ecma262/#sec-agents). This pointer is not yet defined in the JavaScript specification; see [tc39/ecma262#1357](https://github.com/tc39/ecma262/issues/1357).

The agent equivalent of the [current Realm Record](https://tc39.es/ecma262/#current-realm) is the [surrounding agent](https://tc39.es/ecma262/#surrounding-agent).

##### 8.1.2.2 Integration with the JavaScript agent cluster formalism[](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-agent-cluster-formalism)

JavaScript also defines the concept of an [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters), which this standard maps to the web platform by placing agents appropriately when they are created using the [obtain a similar-origin window agent](https://html.spec.whatwg.org/multipage/webappapis.html#obtain-similar-origin-window-agent) or [obtain a worker/worklet agent](https://html.spec.whatwg.org/multipage/webappapis.html#obtaining-a-worker/worklet-agent) algorithms.

The [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters) concept is crucial for defining the JavaScript memory model, and in particular among which [agents](https://tc39.es/ecma262/#sec-agents) the backing data of `[SharedArrayBuffer](https://tc39.es/ecma262/#sec-sharedarraybuffer-objects)` objects can be shared.

Conceptually, the [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters) concept is an architecture-independent, idealized "process boundary" that groups together multiple "threads" ([agents](https://tc39.es/ecma262/#sec-agents)). The [agent clusters](https://tc39.es/ecma262/#sec-agent-clusters) defined by the specification are generally more restrictive than the actual process boundaries implemented in user agents. By enforcing these idealized divisions at the specification level, we ensure that web developers see interoperable behavior with regard to shared memory, even in the face of varying and changing user agent process models.

An [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters) has an associated cross-origin isolation mode, which is a [cross-origin isolation mode](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-isolation-mode). It is initially "`[none](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-isolation-none)`".

An [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters) has an associated is origin-keyed (a boolean), which is initially false.

___

The following defines the allocation of the [agent clusters](https://tc39.es/ecma262/#sec-agent-clusters) of [similar-origin window agents](https://html.spec.whatwg.org/multipage/webappapis.html#similar-origin-window-agent).

An agent cluster key is a [site](https://html.spec.whatwg.org/multipage/origin.html#site) or [tuple origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-tuple). Without web developer action to achieve [origin-keyed agent clusters](https://html.spec.whatwg.org/multipage/origin.html#origin-keyed-agent-clusters), it will be a [site](https://html.spec.whatwg.org/multipage/origin.html#site).

An equivalent formulation is that an [agent cluster key](https://html.spec.whatwg.org/multipage/webappapis.html#agent-cluster-key) can be a [scheme-and-host](https://html.spec.whatwg.org/multipage/origin.html#scheme-and-host) or an [origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin).

To obtain a similar-origin window agent, given an [origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) origin, a [browsing context group](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context-group) group, and a boolean requestsOAC, run these steps:

1.  Let site be the result of [obtaining a site](https://html.spec.whatwg.org/multipage/origin.html#obtain-a-site) with origin.
    
2.  Let key be site.
    
3.  If group's [cross-origin isolation mode](https://html.spec.whatwg.org/multipage/browsers.html#bcg-cross-origin-isolation) is not "`[none](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-isolation-none)`", then set key to origin.
    
4.  Otherwise, if group's [historical agent cluster key map](https://html.spec.whatwg.org/multipage/browsers.html#historical-agent-cluster-key-map)\[origin\] [exists](https://infra.spec.whatwg.org/#map-exists), then set key to group's [historical agent cluster key map](https://html.spec.whatwg.org/multipage/browsers.html#historical-agent-cluster-key-map)\[origin\].
    
5.  Otherwise:
    
    1.  If requestsOAC is true, then set key to origin.
        
    2.  Set group's [historical agent cluster key map](https://html.spec.whatwg.org/multipage/browsers.html#historical-agent-cluster-key-map)\[origin\] to key.
        
6.  If group's [agent cluster map](https://html.spec.whatwg.org/multipage/browsers.html#agent-cluster-map)\[key\] [does not exist](https://infra.spec.whatwg.org/#map-exists), then:
    
    1.  Let agentCluster be a new [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters).
        
    2.  Set agentCluster's [cross-origin isolation mode](https://html.spec.whatwg.org/multipage/webappapis.html#agent-cluster-cross-origin-isolation) to group's [cross-origin isolation mode](https://html.spec.whatwg.org/multipage/browsers.html#bcg-cross-origin-isolation).
        
    3.  Set agentCluster's [is origin-keyed](https://html.spec.whatwg.org/multipage/webappapis.html#is-origin-keyed) to true if key equals origin; otherwise false.
        
    4.  Add the result of [creating an agent](https://html.spec.whatwg.org/multipage/webappapis.html#create-an-agent), given false, to agentCluster.
        
    5.  Set group's [agent cluster map](https://html.spec.whatwg.org/multipage/browsers.html#agent-cluster-map)\[key\] to agentCluster.
        
7.  Return the single [similar-origin window agent](https://html.spec.whatwg.org/multipage/webappapis.html#similar-origin-window-agent) contained in group's [agent cluster map](https://html.spec.whatwg.org/multipage/browsers.html#agent-cluster-map)\[key\].
    

This means that there is only one [similar-origin window agent](https://html.spec.whatwg.org/multipage/webappapis.html#similar-origin-window-agent) per browsing context agent cluster. (However, [dedicated worker](https://html.spec.whatwg.org/multipage/webappapis.html#dedicated-worker-agent) and [worklet agents](https://html.spec.whatwg.org/multipage/webappapis.html#worklet-agent) might be in the same cluster.)

___

The following defines the allocation of the [agent clusters](https://tc39.es/ecma262/#sec-agent-clusters) of all other types of agents.

To obtain a worker/worklet agent, given an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) or null outside settings, a boolean isTopLevel, and a boolean canBlock, run these steps:

1.  Let agentCluster be null.
    
2.  If isTopLevel is true, then:
    
    1.  Set agentCluster to a new [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters).
        
    2.  Set agentCluster's [is origin-keyed](https://html.spec.whatwg.org/multipage/webappapis.html#is-origin-keyed) to true.
        
        These workers can be considered to be origin-keyed. However, this is not exposed through any APIs (in the way that `[originAgentCluster](https://html.spec.whatwg.org/multipage/origin.html#dom-originagentcluster)` exposes the origin-keyedness for windows).
        
3.  Otherwise:
    
    1.  Assert: outside settings is not null.
        
    2.  Let ownerAgent be outside settings's [Realm](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object's-realm)'s agent.
        
    3.  Set agentCluster to the agent cluster which contains ownerAgent.
        
4.  Let agent be the result of [creating an agent](https://html.spec.whatwg.org/multipage/webappapis.html#create-an-agent) given canBlock.
    
5.  Add agent to agentCluster.
    
6.  Return agent.
    

To obtain a dedicated/shared worker agent, given an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) outside settings and a boolean isShared, return the result of [obtaining a worker/worklet agent](https://html.spec.whatwg.org/multipage/webappapis.html#obtaining-a-worker/worklet-agent) given outside settings, isShared, and true.

To obtain a worklet agent, given an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) outside settings, return the result of [obtaining a worker/worklet agent](https://html.spec.whatwg.org/multipage/webappapis.html#obtaining-a-worker/worklet-agent) given outside settings, false, and false.

To obtain a service worker agent, return the result of [obtaining a worker/worklet agent](https://html.spec.whatwg.org/multipage/webappapis.html#obtaining-a-worker/worklet-agent) given null, true, and false.

___

#### 8.1.3 Realms and their counterparts[](https://html.spec.whatwg.org/multipage/webappapis.html#realms-and-their-counterparts)

The JavaScript specification introduces the [realm](https://tc39.es/ecma262/#sec-code-realms) concept, representing a global environment in which script is run. Each realm comes with an [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) [global object](https://html.spec.whatwg.org/multipage/webappapis.html#global-object); much of this specification is devoted to defining that global object and its properties.

For web specifications, it is often useful to associate values or algorithms with a realm/global object pair. When the values are specific to a particular type of realm, they are associated directly with the global object in question, e.g., in the definition of the `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` or `[WorkerGlobalScope](https://html.spec.whatwg.org/multipage/workers.html#workerglobalscope)` interfaces. When the values have utility across multiple realms, we use the [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) concept.

Finally, in some cases it is necessary to track associated values before a realm/global object/environment settings object even comes into existence (for example, during [navigation](https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigate)). These values are tracked in the [environment](https://html.spec.whatwg.org/multipage/webappapis.html#environment) concept.

##### 8.1.3.1 Environments[](https://html.spec.whatwg.org/multipage/webappapis.html#environments)

An environment is an object that identifies the settings of a current or potential execution environment. An [environment](https://html.spec.whatwg.org/multipage/webappapis.html#environment) has the following fields:

An id

An opaque string that uniquely identifies this [environment](https://html.spec.whatwg.org/multipage/webappapis.html#environment).

A creation URL

A [URL](https://url.spec.whatwg.org/#concept-url) that represents the location of the resource with which this [environment](https://html.spec.whatwg.org/multipage/webappapis.html#environment) is associated.

In the case of a `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), this URL might be distinct from its [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global)'s [associated `Document`](https://html.spec.whatwg.org/multipage/window-object.html#concept-document-window)'s [URL](https://dom.spec.whatwg.org/#concept-document-url), due to mechanisms such as `[history.pushState()](https://html.spec.whatwg.org/multipage/history.html#dom-history-pushstate)` which modify the latter.

A top-level creation URL

Null or a [URL](https://url.spec.whatwg.org/#concept-url) that represents the [creation URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-environment-creation-url) of the "top-level" [environment](https://html.spec.whatwg.org/multipage/webappapis.html#environment). It is null for workers and worklets.

A top-level origin

A for now [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) value, null, or an [origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin). For a "top-level" potential execution environment it is null (i.e., when there is no response yet); otherwise it is the "top-level" [environment](https://html.spec.whatwg.org/multipage/webappapis.html#environment)'s [origin](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-origin). For a dedicated worker or worklet it is the [top-level origin](https://html.spec.whatwg.org/multipage/webappapis.html#concept-environment-top-level-origin) of its creator. For a shared or service worker it is an [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) value.

This is distinct from the [top-level creation URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-environment-top-level-creation-url)'s [origin](https://url.spec.whatwg.org/#concept-url-origin) when sandboxing, workers, and worklets are involved.

A target browsing context

Null or a target [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) for a [navigation request](https://fetch.spec.whatwg.org/#navigation-request).

An active service worker

Null or a [service worker](https://w3c.github.io/ServiceWorker/#dfn-service-worker) that [controls](https://w3c.github.io/ServiceWorker/#dfn-control) the [environment](https://html.spec.whatwg.org/multipage/webappapis.html#environment).

An execution ready flag

A flag that indicates whether the environment setup is done. It is initially unset.

Specifications may define environment discarding steps for environments. The steps take an [environment](https://html.spec.whatwg.org/multipage/webappapis.html#environment) as input.

The [environment discarding steps](https://html.spec.whatwg.org/multipage/webappapis.html#environment-discarding-steps) are run for only a select few environments: the ones that will never become execution ready because, for example, they failed to load.

##### 8.1.3.2 Environment settings objects[](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-objects)

An environment settings object is an [environment](https://html.spec.whatwg.org/multipage/webappapis.html#environment) that additionally specifies algorithms for:

A realm execution context

A [JavaScript execution context](https://tc39.es/ecma262/#sec-execution-contexts) shared by all [scripts](https://html.spec.whatwg.org/multipage/scripting.html#the-script-element) that use this settings object, i.e. all scripts in a given [JavaScript realm](https://tc39.es/ecma262/#sec-code-realms). When we [run a classic script](https://html.spec.whatwg.org/multipage/webappapis.html#run-a-classic-script) or [run a module script](https://html.spec.whatwg.org/multipage/webappapis.html#run-a-module-script), this execution context becomes the top of the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack), on top of which another execution context specific to the script in question is pushed. (This setup ensures [ParseScript](https://tc39.es/ecma262/#sec-parse-script) and [Source Text Module Record](https://tc39.es/ecma262/#sec-source-text-module-records)'s [Evaluate](https://tc39.es/ecma262/#sec-moduleevaluation) know which Realm to use.)

A module map

A [module map](https://html.spec.whatwg.org/multipage/webappapis.html#module-map) that is used when importing JavaScript modules.

An API URL character encoding

A character encoding used to encode URLs by APIs called by scripts that use this [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object).

An API base URL

A [URL](https://url.spec.whatwg.org/#concept-url) used by APIs called by scripts that use this [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) to [parse URLs](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#parse-a-url).

An origin

An [origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) used in security checks.

A policy container

A [policy container](https://html.spec.whatwg.org/multipage/origin.html#policy-container) containing policies used for security checks.

A cross-origin isolated capability

A boolean representing whether scripts that use this [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) are allowed to use APIs that require cross-origin isolation.

A time origin

A number used as the baseline for performance-related timestamps. [\[HRT\]](https://html.spec.whatwg.org/multipage/references.html#refsHRT)

An [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) also has an outstanding rejected promises weak set and an about-to-be-notified rejected promises list, used to track [unhandled promise rejections](https://html.spec.whatwg.org/multipage/webappapis.html#unhandled-promise-rejections). The [outstanding rejected promises weak set](https://html.spec.whatwg.org/multipage/webappapis.html#outstanding-rejected-promises-weak-set) must not create strong references to any of its members, and implementations are free to limit its size, e.g. by removing old entries from it when new ones are added.

An [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object)'s responsible event loop is its [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global)'s [relevant agent](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-agent)'s [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#concept-agent-event-loop).

##### 8.1.3.3 Realms, settings objects, and global objects[](https://html.spec.whatwg.org/multipage/webappapis.html#realms-settings-objects-global-objects)

A global object is a JavaScript object that is the \[\[GlobalObject\]\] field of a [JavaScript realm](https://tc39.es/ecma262/#sec-code-realms).

In this specification, all [JavaScript realms](https://tc39.es/ecma262/#sec-code-realms) are [created](https://html.spec.whatwg.org/multipage/webappapis.html#creating-a-new-javascript-realm) with [global objects](https://html.spec.whatwg.org/multipage/webappapis.html#global-object) that are either `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` or `[WorkerGlobalScope](https://html.spec.whatwg.org/multipage/workers.html#workerglobalscope)` objects.

There is always a 1-to-1-to-1 mapping between [JavaScript realms](https://tc39.es/ecma262/#sec-code-realms), [global objects](https://html.spec.whatwg.org/multipage/webappapis.html#global-object), and [environment settings objects](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object):

-   A [JavaScript realm](https://tc39.es/ecma262/#sec-code-realms) has a \[\[HostDefined\]\] field, which contains the Realm's settings object.
    
-   A [JavaScript realm](https://tc39.es/ecma262/#sec-code-realms) has a \[\[GlobalObject\]\] field, which contains the Realm's global object.
    
-   Each [global object](https://html.spec.whatwg.org/multipage/webappapis.html#global-object) in this specification is created during the [creation](https://html.spec.whatwg.org/multipage/webappapis.html#creating-a-new-javascript-realm) of a corresponding [JavaScript realm](https://tc39.es/ecma262/#sec-code-realms), known as the global object's Realm.
    
-   Each [global object](https://html.spec.whatwg.org/multipage/webappapis.html#global-object) in this specification is created alongside a corresponding [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), known as its [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object).
    
-   An [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object)'s [realm execution context](https://html.spec.whatwg.org/multipage/webappapis.html#realm-execution-context)'s Realm component is the environment settings object's Realm.
    
-   An [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object)'s [Realm](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object's-realm) then has a \[\[GlobalObject\]\] field, which contains the environment settings object's global object.
    

To create a new JavaScript realm in an [agent](https://tc39.es/ecma262/#sec-agents) agent, optionally with instructions to create a global object or a global **this** binding (or both), the following steps are taken:

1.  Perform [InitializeHostDefinedRealm](https://tc39.es/ecma262/#sec-initializehostdefinedrealm)() with the provided customizations for creating the global object and the global **this** binding.
    
2.  Let realm execution context be the [running JavaScript execution context](https://tc39.es/ecma262/#running-execution-context).
    
    This is the [JavaScript execution context](https://tc39.es/ecma262/#sec-execution-contexts) created in the previous step.
    
3.  Remove realm execution context from the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack).
    
4.  Let realm be realm execution context's Realm component.
    
5.  Set realm's agent to agent. This pointer is not yet defined in the JavaScript specification; see [tc39/ecma262#1357](https://github.com/tc39/ecma262/issues/1357).
    
6.  If agent's [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters)'s [cross-origin isolation mode](https://html.spec.whatwg.org/multipage/webappapis.html#agent-cluster-cross-origin-isolation) is "`[none](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-isolation-none)`", then:
    
    1.  Let global be realm's [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-realm-global).
        
    2.  Let status be ! global.\[\[Delete\]\]("`SharedArrayBuffer`").
        
    3.  Assert: status is true.
        
    
    This is done for compatibility with web content and there is some hope that this can be removed in the future. Web developers can still get at the constructor through `new WebAssembly.Memory({ shared:true, initial:0, maximum:0 }).buffer.constructor`.
    
7.  Return realm execution context.
    

___

When defining algorithm steps throughout this specification, it is often important to indicate what [JavaScript realm](https://tc39.es/ecma262/#sec-code-realms) is to be used—or, equivalently, what [global object](https://html.spec.whatwg.org/multipage/webappapis.html#global-object) or [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) is to be used. In general, there are at least four possibilities:

Entry

This corresponds to the script that initiated the currently running script action: i.e., the function or script that the user agent called into when it called into author code.

Incumbent

This corresponds to the most-recently-entered author function or script on the stack, or the author function or script that originally scheduled the currently-running callback.

Current

This corresponds to the currently-running function object, including built-in user-agent functions which might not be implemented as JavaScript. (It is derived from the [current JavaScript realm](https://tc39.es/ecma262/#current-realm).)

Relevant

Every [platform object](https://webidl.spec.whatwg.org/#dfn-platform-object) has a [relevant Realm](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-realm), which is roughly the [JavaScript realm](https://tc39.es/ecma262/#sec-code-realms) in which it was created. When writing algorithms, the most prominent [platform object](https://webidl.spec.whatwg.org/#dfn-platform-object) whose [relevant Realm](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-realm) might be important is the **this** value of the currently-running function object. In some cases, there can be other important [relevant Realms](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-realm), such as those of any arguments.

Note how the [entry](https://html.spec.whatwg.org/multipage/webappapis.html#concept-entry-everything), [incumbent](https://html.spec.whatwg.org/multipage/webappapis.html#concept-incumbent-everything), and [current](https://html.spec.whatwg.org/multipage/webappapis.html#concept-current-everything) concepts are usable without qualification, whereas the [relevant](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-everything) concept must be applied to a particular [platform object](https://webidl.spec.whatwg.org/#dfn-platform-object).

The [incumbent](https://html.spec.whatwg.org/multipage/webappapis.html#concept-incumbent-everything) and [entry](https://html.spec.whatwg.org/multipage/webappapis.html#concept-entry-everything) concepts should not be used by new specifications, as they are excessively complicated and unintuitive to work with. We are working to remove almost all existing uses from the platform: see [issue #1430](https://github.com/whatwg/html/issues/1430) for [incumbent](https://html.spec.whatwg.org/multipage/webappapis.html#concept-incumbent-everything), and [issue #1431](https://github.com/whatwg/html/issues/1431) for [entry](https://html.spec.whatwg.org/multipage/webappapis.html#concept-entry-everything).

In general, web platform specifications should use the [relevant](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-everything) concept, applied to the object being operated on (usually the **this** value of the current method). This mismatches the JavaScript specification, where [current](https://html.spec.whatwg.org/multipage/webappapis.html#concept-current-everything) is generally used as the default (e.g. in determining the [JavaScript realm](https://tc39.es/ecma262/#sec-code-realms) whose `Array` constructor should be used to construct the result in `Array.prototype.map`). But this inconsistency is so embedded in the platform that we have to accept it going forward.

Consider the following pages, with `a.html` being loaded in a browser window, `b.html` being loaded in an `[iframe](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element)` as shown, and `c.html` and `d.html` omitted (they can simply be empty documents):

```
<!-- a.html -->
<!DOCTYPE html>
<html lang="en">
<title>Entry page</title>

<iframe src="b.html"></iframe>
<button onclick="frames[0].hello()">Hello</button>

<!--b.html -->
<!DOCTYPE html>
<html lang="en">
<title>Incumbent page</title>

<iframe src="c.html" id="c"></iframe>
<iframe src="d.html" id="d"></iframe>

<script>
  const c = document.querySelector("#c").contentWindow;
  const d = document.querySelector("#d").contentWindow;

  window.hello = () => {
    c.print.call(d);
  };
</script>
```

Each page has its own [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context), and thus its own [JavaScript realm](https://tc39.es/ecma262/#sec-code-realms), [global object](https://html.spec.whatwg.org/multipage/webappapis.html#global-object), and [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object).

When the `[print()](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-print)` method is called in response to pressing the button in `a.html`, then:

-   The [entry Realm](https://html.spec.whatwg.org/multipage/webappapis.html#concept-entry-realm) is that of `a.html`.
    
-   The [incumbent Realm](https://html.spec.whatwg.org/multipage/webappapis.html#concept-incumbent-realm) is that of `b.html`.
    
-   The [current Realm](https://tc39.es/ecma262/#current-realm) is that of `c.html` (since it is the `[print()](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-print)` method from `c.html` whose code is running).
    
-   The [relevant Realm](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-realm) of the object on which the `[print()](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-print)` method is being called is that of `d.html`.
    

One reason why the [relevant](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-everything) concept is generally a better default choice than the [current](https://html.spec.whatwg.org/multipage/webappapis.html#concept-current-everything) concept is that it is more suitable for creating an object that is to be persisted and returned multiple times. For example, the `[navigator.getBattery()](https://w3c.github.io/battery/#widl-Navigator-getBattery-Promise-BatteryManager)` method creates promises in the [relevant Realm](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-realm) for the `[Navigator](https://html.spec.whatwg.org/multipage/system-state.html#navigator)` object on which it is invoked. This has the following impact: [\[BATTERY\]](https://html.spec.whatwg.org/multipage/references.html#refsBATTERY)

```
<!-- outer.html -->
<!DOCTYPE html>
<html lang="en">
<title>Relevant Realm demo: outer page</title>
<script>
  function doTest() {
    const promise = navigator.getBattery.call(frames[0].navigator);

    console.log(promise instanceof Promise);           // logs false
    console.log(promise instanceof frames[0].Promise); // logs true

    frames[0].hello();
  }
</script>
<iframe src="inner.html" onload="doTest()"></iframe>

<!-- inner.html -->
<!DOCTYPE html>
<html lang="en">
<title>Relevant Realm demo: inner page</title>
<script>
  function hello() {
    const promise = navigator.getBattery();

    console.log(promise instanceof Promise);        // logs true
    console.log(promise instanceof parent.Promise); // logs false
  }
</script>
```

If the algorithm for the `[getBattery()](https://w3c.github.io/battery/#widl-Navigator-getBattery-Promise-BatteryManager)` method had instead used the [current Realm](https://tc39.es/ecma262/#current-realm), all the results would be reversed. That is, after the first call to `[getBattery()](https://w3c.github.io/battery/#widl-Navigator-getBattery-Promise-BatteryManager)` in `outer.html`, the `[Navigator](https://html.spec.whatwg.org/multipage/system-state.html#navigator)` object in `inner.html` would be permanently storing a `Promise` object created in `outer.html`'s [JavaScript realm](https://tc39.es/ecma262/#sec-code-realms), and calls like that inside the `hello()` function would thus return a promise from the "wrong" realm. Since this is undesirable, the algorithm instead uses the [relevant Realm](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-realm), giving the sensible results indicated in the comments above.

___

The rest of this section deals with formally defining the [entry](https://html.spec.whatwg.org/multipage/webappapis.html#concept-entry-everything), [incumbent](https://html.spec.whatwg.org/multipage/webappapis.html#concept-incumbent-everything), [current](https://html.spec.whatwg.org/multipage/webappapis.html#concept-current-everything), and [relevant](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-everything) concepts.

###### 8.1.3.3.1 Entry[](https://html.spec.whatwg.org/multipage/webappapis.html#entry)

The process of [calling scripts](https://html.spec.whatwg.org/multipage/webappapis.html#calling-scripts) will push or pop [realm execution contexts](https://html.spec.whatwg.org/multipage/webappapis.html#realm-execution-context) onto the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack), interspersed with other [execution contexts](https://tc39.es/ecma262/#sec-execution-contexts).

With this in hand, we define the entry execution context to be the most recently pushed item in the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack) that is a [realm execution context](https://html.spec.whatwg.org/multipage/webappapis.html#realm-execution-context). The entry Realm is the [entry execution context](https://html.spec.whatwg.org/multipage/webappapis.html#entry-execution-context)'s Realm component.

Then, the entry settings object is the [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-realm-settings-object) of the [entry Realm](https://html.spec.whatwg.org/multipage/webappapis.html#concept-entry-realm).

Similarly, the entry global object is the [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-realm-global) of the [entry Realm](https://html.spec.whatwg.org/multipage/webappapis.html#concept-entry-realm).

###### 8.1.3.3.2 Incumbent[](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent)

All [JavaScript execution contexts](https://tc39.es/ecma262/#sec-execution-contexts) must contain, as part of their code evaluation state, a skip-when-determining-incumbent counter value, which is initially zero. In the process of [preparing to run a callback](https://html.spec.whatwg.org/multipage/webappapis.html#prepare-to-run-a-callback) and [cleaning up after running a callback](https://html.spec.whatwg.org/multipage/webappapis.html#clean-up-after-running-a-callback), this value will be incremented and decremented.

Every [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) has an associated backup incumbent settings object stack, initially empty. Roughly speaking, it is used to determine the [incumbent settings object](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent-settings-object) when no author code is on the stack, but author code is responsible for the current algorithm having been run in some way. The process of [preparing to run a callback](https://html.spec.whatwg.org/multipage/webappapis.html#prepare-to-run-a-callback) and [cleaning up after running a callback](https://html.spec.whatwg.org/multipage/webappapis.html#clean-up-after-running-a-callback) manipulate this stack. [\[WEBIDL\]](https://html.spec.whatwg.org/multipage/references.html#refsWEBIDL)

When Web IDL is used to [invoke](https://webidl.spec.whatwg.org/#invoke-a-callback-function) author code, or when [HostEnqueuePromiseJob](https://html.spec.whatwg.org/multipage/webappapis.html#hostenqueuepromisejob) invokes a promise job, they use the following algorithms to track relevant data for determining the [incumbent settings object](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent-settings-object):

To prepare to run a callback with an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) settings:

1.  Push settings onto the [backup incumbent settings object stack](https://html.spec.whatwg.org/multipage/webappapis.html#backup-incumbent-settings-object-stack).
    
2.  Let context be the [topmost script-having execution context](https://html.spec.whatwg.org/multipage/webappapis.html#topmost-script-having-execution-context).
    
3.  If context is not null, increment context's [skip-when-determining-incumbent counter](https://html.spec.whatwg.org/multipage/webappapis.html#skip-when-determining-incumbent-counter).
    

To clean up after running a callback with an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) settings:

1.  Let context be the [topmost script-having execution context](https://html.spec.whatwg.org/multipage/webappapis.html#topmost-script-having-execution-context).
    
    This will be the same as the [topmost script-having execution context](https://html.spec.whatwg.org/multipage/webappapis.html#topmost-script-having-execution-context) inside the corresponding invocation of [prepare to run a callback](https://html.spec.whatwg.org/multipage/webappapis.html#prepare-to-run-a-callback).
    
2.  If context is not null, decrement context's [skip-when-determining-incumbent counter](https://html.spec.whatwg.org/multipage/webappapis.html#skip-when-determining-incumbent-counter).
    
3.  Assert: the topmost entry of the [backup incumbent settings object stack](https://html.spec.whatwg.org/multipage/webappapis.html#backup-incumbent-settings-object-stack) is settings.
    
4.  Remove settings from the [backup incumbent settings object stack](https://html.spec.whatwg.org/multipage/webappapis.html#backup-incumbent-settings-object-stack).
    

Here, the topmost script-having execution context is the topmost entry of the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack) that has a non-null ScriptOrModule component, or null if there is no such entry in the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack).

With all this in place, the incumbent settings object is determined as follows:

1.  Let context be the [topmost script-having execution context](https://html.spec.whatwg.org/multipage/webappapis.html#topmost-script-having-execution-context).
    
2.  If context is null, or if context's [skip-when-determining-incumbent counter](https://html.spec.whatwg.org/multipage/webappapis.html#skip-when-determining-incumbent-counter) is greater than zero, then:
    
    1.  Assert: the [backup incumbent settings object stack](https://html.spec.whatwg.org/multipage/webappapis.html#backup-incumbent-settings-object-stack) is not empty.
        
        This assert would fail if you try to obtain the [incumbent settings object](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent-settings-object) from inside an algorithm that was triggered neither by [calling scripts](https://html.spec.whatwg.org/multipage/webappapis.html#calling-scripts) nor by Web IDL [invoking](https://webidl.spec.whatwg.org/#invoke-a-callback-function) a callback. For example, it would trigger if you tried to obtain the [incumbent settings object](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent-settings-object) inside an algorithm that ran periodically as part of the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), with no involvement of author code. In such cases the [incumbent](https://html.spec.whatwg.org/multipage/webappapis.html#concept-incumbent-everything) concept cannot be used.
        
    2.  Return the topmost entry of the [backup incumbent settings object stack](https://html.spec.whatwg.org/multipage/webappapis.html#backup-incumbent-settings-object-stack).
        
3.  Return context's Realm component's [settings object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-realm-settings-object).
    

Then, the incumbent Realm is the [Realm](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object's-realm) of the [incumbent settings object](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent-settings-object).

Similarly, the incumbent global object is the [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global) of the [incumbent settings object](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent-settings-object).

___

The following series of examples is intended to make it clear how all of the different mechanisms contribute to the definition of the [incumbent](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent) concept:

Consider the following starter example:

```
<!DOCTYPE html>
<iframe></iframe>
<script>
  frames[0].postMessage("some data", "*");
</script>
```

There are two interesting [environment settings objects](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) here: that of `window`, and that of `frames[0]`. Our concern is: what is the [incumbent settings object](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent-settings-object) at the time that the algorithm for `[postMessage()](https://html.spec.whatwg.org/multipage/web-messaging.html#dom-window-postmessage)` executes?

It should be that of `window`, to capture the intuitive notion that the author script responsible for causing the algorithm to happen is executing in `window`, not `frames[0]`. This makes sense: the [window post message steps](https://html.spec.whatwg.org/multipage/web-messaging.html#window-post-message-steps) use the [incumbent settings object](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent-settings-object) to determine the `[source](https://html.spec.whatwg.org/multipage/comms.html#dom-messageevent-source)` property of the resulting `[MessageEvent](https://html.spec.whatwg.org/multipage/comms.html#messageevent)`, and in this case `window` is definitely the source of the message.

Let us now explain how the steps given above give us our intuitively-desired result of `window`'s [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object).

When the [window post message steps](https://html.spec.whatwg.org/multipage/web-messaging.html#window-post-message-steps) look up the [incumbent settings object](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent-settings-object), the [topmost script-having execution context](https://html.spec.whatwg.org/multipage/webappapis.html#topmost-script-having-execution-context) will be that corresponding to the `[script](https://html.spec.whatwg.org/multipage/scripting.html#the-script-element)` element: it was pushed onto the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack) as part of [ScriptEvaluation](https://tc39.es/ecma262/#sec-runtime-semantics-scriptevaluation) during the [run a classic script](https://html.spec.whatwg.org/multipage/webappapis.html#run-a-classic-script) algorithm. Since there are no Web IDL callback invocations involved, the context's [skip-when-determining-incumbent counter](https://html.spec.whatwg.org/multipage/webappapis.html#skip-when-determining-incumbent-counter) is zero, so it is used to determine the [incumbent settings object](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent-settings-object); the result is the [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) of `window`.

(Note how the [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) of `frames[0]` is the [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object) of [this](https://webidl.spec.whatwg.org/#this) at the time the `[postMessage()](https://html.spec.whatwg.org/multipage/web-messaging.html#dom-window-postmessage)` method is called, and thus is involved in determining the _target_ of the message. Whereas the incumbent is used to determine the _source_.)

Consider the following more complicated example:

```
<!DOCTYPE html>
<iframe></iframe>
<script>
  const bound = frames[0].postMessage.bind(frames[0], "some data", "*");
  window.setTimeout(bound);
</script>
```

This example is very similar to the previous one, but with an extra indirection through `Function.prototype.bind` as well as `[setTimeout()](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout)`. But, the answer should be the same: invoking algorithms asynchronously should not change the [incumbent](https://html.spec.whatwg.org/multipage/webappapis.html#concept-incumbent-everything) concept.

This time, the result involves more complicated mechanisms:

When `bound` is [converted](https://webidl.spec.whatwg.org/#es-type-mapping) to a Web IDL callback type, the [incumbent settings object](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent-settings-object) is that corresponding to `window` (in the same manner as in our starter example above). Web IDL stores this as the resulting callback value's [callback context](https://webidl.spec.whatwg.org/#dfn-callback-context).

When the [task](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task) posted by `[setTimeout()](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout)` executes, the algorithm for that task uses Web IDL to [invoke](https://webidl.spec.whatwg.org/#invoke-a-callback-function) the stored callback value. Web IDL in turn calls the above [prepare to run a callback](https://html.spec.whatwg.org/multipage/webappapis.html#prepare-to-run-a-callback) algorithm. This pushes the stored [callback context](https://webidl.spec.whatwg.org/#dfn-callback-context) onto the [backup incumbent settings object stack](https://html.spec.whatwg.org/multipage/webappapis.html#backup-incumbent-settings-object-stack). At this time (inside the timer task) there is no author code on the stack, so the [topmost script-having execution context](https://html.spec.whatwg.org/multipage/webappapis.html#topmost-script-having-execution-context) is null, and nothing gets its [skip-when-determining-incumbent counter](https://html.spec.whatwg.org/multipage/webappapis.html#skip-when-determining-incumbent-counter) incremented.

Invoking the callback then calls `bound`, which in turn calls the `[postMessage()](https://html.spec.whatwg.org/multipage/web-messaging.html#dom-window-postmessage)` method of `frames[0]`. When the `[postMessage()](https://html.spec.whatwg.org/multipage/web-messaging.html#dom-window-postmessage)` algorithm looks up the [incumbent settings object](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent-settings-object), there is still no author code on the stack, since the bound function just directly calls the built-in method. So the [topmost script-having execution context](https://html.spec.whatwg.org/multipage/webappapis.html#topmost-script-having-execution-context) will be null: the [JavaScript execution context](https://tc39.es/ecma262/#sec-execution-contexts) stack only contains an execution context corresponding to `[postMessage()](https://html.spec.whatwg.org/multipage/web-messaging.html#dom-window-postmessage)`, with no [ScriptEvaluation](https://tc39.es/ecma262/#sec-runtime-semantics-scriptevaluation) context or similar below it.

This is where we fall back to the [backup incumbent settings object stack](https://html.spec.whatwg.org/multipage/webappapis.html#backup-incumbent-settings-object-stack). As noted above, it will contain as its topmost entry the [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object) of `window`. So that is what is used as the [incumbent settings object](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent-settings-object) while executing the `[postMessage()](https://html.spec.whatwg.org/multipage/web-messaging.html#dom-window-postmessage)` algorithm.

Consider this final, even more convoluted example:

```
<!-- a.html -->
<!DOCTYPE html>
<button>click me</button>
<iframe></iframe>
<script>
const bound = frames[0].location.assign.bind(frames[0].location, "https://example.com/");
document.querySelector("button").addEventListener("click", bound);
</script>
```

```
<!-- b.html -->
<!DOCTYPE html>
<iframe src="a.html"></iframe>
<script>
  const iframe = document.querySelector("iframe");
  iframe.onload = function onLoad() {
    iframe.contentWindow.document.querySelector("button").click();
  };
</script>
```

Again there are two interesting [environment settings objects](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) in play: that of `a.html`, and that of `b.html`. When the `[location.assign()](https://html.spec.whatwg.org/multipage/history.html#dom-location-assign)` method triggers the [`Location`\-object navigate](https://html.spec.whatwg.org/multipage/history.html#location-object-navigate) algorithm, what will be the [incumbent settings object](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent-settings-object)? As before, it should intuitively be that of `a.html`: the `[click](https://w3c.github.io/uievents/#event-type-click)` listener was originally scheduled by `a.html`, so even if something involving `b.html` causes the listener to fire, the [incumbent](https://html.spec.whatwg.org/multipage/webappapis.html#concept-incumbent-everything) responsible is that of `a.html`.

The callback setup is similar to the previous example: when `bound` is [converted](https://webidl.spec.whatwg.org/#es-type-mapping) to a Web IDL callback type, the [incumbent settings object](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent-settings-object) is that corresponding to `a.html`, which is stored as the callback's [callback context](https://webidl.spec.whatwg.org/#dfn-callback-context).

When the `[click()](https://html.spec.whatwg.org/multipage/interaction.html#dom-click)` method is called inside `b.html`, it [dispatches](https://dom.spec.whatwg.org/#concept-event-dispatch) a `[click](https://w3c.github.io/uievents/#event-type-click)` event on the button that is inside `a.html`. This time, when the [prepare to run a callback](https://html.spec.whatwg.org/multipage/webappapis.html#prepare-to-run-a-callback) algorithm executes as part of event dispatch, there _is_ author code on the stack; the [topmost script-having execution context](https://html.spec.whatwg.org/multipage/webappapis.html#topmost-script-having-execution-context) is that of the `onLoad` function, whose [skip-when-determining-incumbent counter](https://html.spec.whatwg.org/multipage/webappapis.html#skip-when-determining-incumbent-counter) gets incremented. Additionally, `a.html`'s [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) (stored as the `[EventHandler](https://html.spec.whatwg.org/multipage/webappapis.html#eventhandler)`'s [callback context](https://webidl.spec.whatwg.org/#dfn-callback-context)) is pushed onto the [backup incumbent settings object stack](https://html.spec.whatwg.org/multipage/webappapis.html#backup-incumbent-settings-object-stack).

Now, when the [`Location`\-object navigate](https://html.spec.whatwg.org/multipage/history.html#location-object-navigate) algorithm looks up the [incumbent settings object](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent-settings-object), the [topmost script-having execution context](https://html.spec.whatwg.org/multipage/webappapis.html#topmost-script-having-execution-context) is still that of the `onLoad` function (due to the fact we are using a bound function as the callback). Its [skip-when-determining-incumbent counter](https://html.spec.whatwg.org/multipage/webappapis.html#skip-when-determining-incumbent-counter) value is one, however, so we fall back to the [backup incumbent settings object stack](https://html.spec.whatwg.org/multipage/webappapis.html#backup-incumbent-settings-object-stack). This gives us the [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) of `a.html`, as expected.

Note that this means that even though it is the `[iframe](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element)` inside `a.html` that navigates, it is `a.html` itself that is used as the [source browsing context](https://html.spec.whatwg.org/multipage/browsing-the-web.html#source-browsing-context), which determines among other things the [request client](https://fetch.spec.whatwg.org/#concept-request-client). This is [perhaps the only justifiable use of the incumbent concept on the web platform](https://www.w3.org/Bugs/Public/show_bug.cgi?id=26603#c36); in all other cases the consequences of using it are simply confusing and we hope to one day switch them to use [current](https://html.spec.whatwg.org/multipage/webappapis.html#concept-current-everything) or [relevant](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-everything) as appropriate.

###### 8.1.3.3.3 Current[](https://html.spec.whatwg.org/multipage/webappapis.html#current)

The JavaScript specification defines the [current Realm Record](https://tc39.es/ecma262/#current-realm), sometimes abbreviated to the "current Realm". [\[JAVASCRIPT\]](https://html.spec.whatwg.org/multipage/references.html#refsJAVASCRIPT)

Then, the current settings object is the [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-realm-settings-object) of the [current Realm Record](https://tc39.es/ecma262/#current-realm).

Similarly, the current global object is the [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-realm-global) of the [current Realm Record](https://tc39.es/ecma262/#current-realm).

###### 8.1.3.3.4 Relevant[](https://html.spec.whatwg.org/multipage/webappapis.html#relevant)

The relevant Realm for a [platform object](https://webidl.spec.whatwg.org/#dfn-platform-object) is the value of [its \[\[Realm\]\] field](https://webidl.spec.whatwg.org/#es-platform-objects).

Then, the relevant settings object for a [platform object](https://webidl.spec.whatwg.org/#dfn-platform-object) o is the [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-realm-settings-object) of the [relevant Realm](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-realm) for o.

Similarly, the relevant global object for a [platform object](https://webidl.spec.whatwg.org/#dfn-platform-object) o is the [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-realm-global) of the [relevant Realm](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-realm) for o.

##### 8.1.3.4 Enabling and disabling scripting[](https://html.spec.whatwg.org/multipage/webappapis.html#enabling-and-disabling-scripting)

Scripting is enabled for an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) settings when all of the following conditions are true:

-   The user agent supports scripting.
-   [![(This is a tracking vector.)](https://resources.whatwg.org/tracking-vector.svg)](https://infra.spec.whatwg.org/#tracking-vector "There is a tracking vector here.") The user has not disabled scripting for settings at this time. (User agents may provide users with the option to disable scripting globally, or in a finer-grained manner, e.g., on a per-origin basis, down to the level of individual [environment settings objects](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object).)
-   Either settings's [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global) is not a `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` object, or settings's [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global)'s [associated `Document`](https://html.spec.whatwg.org/multipage/window-object.html#concept-document-window)'s [active sandboxing flag set](https://html.spec.whatwg.org/multipage/origin.html#active-sandboxing-flag-set) does not have its [sandboxed scripts browsing context flag](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-scripts-browsing-context-flag) set.

Scripting is disabled for an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) when scripting is not [enabled](https://html.spec.whatwg.org/multipage/webappapis.html#concept-environment-script) for it, i.e., when any of the above conditions are false.

___

Scripting is enabled for a node node if node's [node document](https://dom.spec.whatwg.org/#concept-node-document)'s [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-bc) is non-null, and [scripting is enabled](https://html.spec.whatwg.org/multipage/webappapis.html#concept-environment-script) for node's [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object).

Scripting is disabled for a node when scripting is not [enabled](https://html.spec.whatwg.org/multipage/webappapis.html#concept-n-script), i.e., when its [node document](https://dom.spec.whatwg.org/#concept-node-document)'s [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-bc) is null or when [scripting is disabled](https://html.spec.whatwg.org/multipage/webappapis.html#concept-environment-noscript) for its [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object).

##### 8.1.3.5 Secure contexts[](https://html.spec.whatwg.org/multipage/webappapis.html#secure-contexts)

An [environment](https://html.spec.whatwg.org/multipage/webappapis.html#environment) environment is a secure context if the following algorithm returns true:

1.  If environment is an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), then:
    
    1.  Let global be environment's [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global).
        
    2.  If global is a `[WorkerGlobalScope](https://html.spec.whatwg.org/multipage/workers.html#workerglobalscope)`, then:
        
        1.  If global's [owner set](https://html.spec.whatwg.org/multipage/workers.html#concept-WorkerGlobalScope-owner-set)\[0\]'s [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object) is a [secure context](https://html.spec.whatwg.org/multipage/webappapis.html#secure-context), then return true.
            
            We only need to check the 0th item since they will necessarily all be consistent.
            
        2.  Return false.
            
    3.  If global is a `[WorkletGlobalScope](https://html.spec.whatwg.org/multipage/worklets.html#workletglobalscope)`, then return true.
        
        Worklets can only be created in secure contexts.
        
2.  If the result of [Is url potentially trustworthy?](https://w3c.github.io/webappsec-secure-contexts/#potentially-trustworthy-url) given environment's [top-level creation URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-environment-top-level-creation-url) is "`Potentially Trustworthy`", then return true.
    
3.  Return false.
    

An [environment](https://html.spec.whatwg.org/multipage/webappapis.html#environment) is a non-secure context if it is not a [secure context](https://html.spec.whatwg.org/multipage/webappapis.html#secure-context).

#### 8.1.4 Script processing model[](https://html.spec.whatwg.org/multipage/webappapis.html#scripting-processing-model)

##### 8.1.4.1 Scripts[](https://html.spec.whatwg.org/multipage/webappapis.html#script-structs)

A script is one of three possible [structs](https://infra.spec.whatwg.org/#struct). All scripts have:

A settings object

An [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), containing various settings that are shared with other [scripts](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script) in the same context.

A record

One of the following:

-   a [script record](https://tc39.es/ecma262/#sec-script-records), for [classic scripts](https://html.spec.whatwg.org/multipage/webappapis.html#classic-script);
    
-   a [Source Text Module Record](https://tc39.es/ecma262/#sec-source-text-module-records), for [JavaScript module scripts](https://html.spec.whatwg.org/multipage/webappapis.html#javascript-module-script);
    
-   a [Synthetic Module Record](https://tc39.es/proposal-json-modules/#sec-synthetic-module-records), for [CSS module scripts](https://html.spec.whatwg.org/multipage/webappapis.html#css-module-script) and [JSON module scripts](https://html.spec.whatwg.org/multipage/webappapis.html#json-module-script)
    
-   null, representing a parsing failure.
    

A parse error

A JavaScript value, which has meaning only if the [record](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-record) is null, indicating that the corresponding script source text could not be parsed.

This value is used for internal tracking of immediate parse errors when [creating scripts](https://html.spec.whatwg.org/multipage/webappapis.html#creating-scripts), and is not to be used directly. Instead, consult the [error to rethrow](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-error-to-rethrow) when determining "what went wrong" for this script.

An error to rethrow

A JavaScript value representing an error that will prevent evaluation from succeeding. It will be re-thrown by any attempts to [run](https://html.spec.whatwg.org/multipage/webappapis.html#calling-scripts) the script.

This could be the script's [parse error](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-parse-error), but in the case of a [module script](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) it could instead be the [parse error](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-parse-error) from one of its dependencies, or an error from [resolve a module specifier](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier).

Since this exception value is provided by the JavaScript specification, we know that it is never null, so we use null to signal that no error has occurred.

Fetch options

A [script fetch options](https://html.spec.whatwg.org/multipage/webappapis.html#script-fetch-options), containing various options related to fetching this script or [module scripts](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) that it imports.

A base URL

A base [URL](https://url.spec.whatwg.org/#concept-url) used for [resolving module specifiers](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier). This will either be the URL from which the script was obtained, for external scripts, or the [document base URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#document-base-url) of the containing document, for inline scripts.

A classic script is a type of [script](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script) that has the following additional [item](https://infra.spec.whatwg.org/#struct-item):

A muted errors boolean

A boolean which, if true, means that error information will not be provided for errors in this script. This is used to mute errors for cross-origin scripts, since that can leak private information.

A module script is another type of [script](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script). It has no additional [items](https://infra.spec.whatwg.org/#struct-item).

[Module scripts](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) can be classified into three types:

-   A [module script](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) is a JavaScript module script if its [record](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-record) is a [Source Text Module Record](https://tc39.es/ecma262/#sec-source-text-module-records).
    
-   A [module script](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) is a CSS module script if its [record](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-record) is a [Synthetic Module Record](https://tc39.es/proposal-json-modules/#sec-synthetic-module-records), and it was created via the [create a CSS module script](https://html.spec.whatwg.org/multipage/webappapis.html#creating-a-css-module-script) algorithm. CSS module scripts represent a parsed CSS stylesheet.
    
-   A [module script](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) is a JSON module script if its [record](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-record) is a [Synthetic Module Record](https://tc39.es/proposal-json-modules/#sec-synthetic-module-records), and it was created via the [create a JSON module script](https://html.spec.whatwg.org/multipage/webappapis.html#creating-a-json-module-script) algorithm. JSON module scripts represent a parsed JSON document.
    

As CSS stylesheets and JSON documents do not import dependent modules, and do not throw exceptions on evaluation, the [fetch options](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-script-fetch-options) and [base URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-base-url) of [CSS module scripts](https://html.spec.whatwg.org/multipage/webappapis.html#css-module-script) and [JSON module scripts](https://html.spec.whatwg.org/multipage/webappapis.html#json-module-script) and are always null.

The active script is determined by the following algorithm:

1.  Let record be [GetActiveScriptOrModule](https://tc39.es/ecma262/#sec-getactivescriptormodule)().
    
2.  If record is null, return null.
    
3.  Return record.\[\[HostDefined\]\].
    

The [active script](https://html.spec.whatwg.org/multipage/webappapis.html#active-script) concept is so far only used by the `[import()](https://tc39.es/ecma262/#sec-import-calls)` feature, to determine the [base URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-base-url) to use for resolving relative module specifiers.

##### 8.1.4.2 Fetching scripts[](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts)

This section introduces a number of algorithms for fetching scripts, taking various necessary inputs and resulting in [classic](https://html.spec.whatwg.org/multipage/webappapis.html#classic-script) or [module scripts](https://html.spec.whatwg.org/multipage/webappapis.html#module-script).

___

Script fetch options is a [struct](https://infra.spec.whatwg.org/#struct) with the following [items](https://infra.spec.whatwg.org/#struct-item):

cryptographic nonce

The [cryptographic nonce metadata](https://fetch.spec.whatwg.org/#concept-request-nonce-metadata) used for the initial fetch and for fetching any imported modules

integrity metadata

The [integrity metadata](https://fetch.spec.whatwg.org/#concept-request-integrity-metadata) used for the initial fetch

parser metadata

The [parser metadata](https://fetch.spec.whatwg.org/#concept-request-parser-metadata) used for the initial fetch and for fetching any imported modules

credentials mode

The [credentials mode](https://fetch.spec.whatwg.org/#concept-request-credentials-mode) used for the initial fetch (for [module scripts](https://html.spec.whatwg.org/multipage/webappapis.html#module-script)) and for fetching any imported modules (for both [module scripts](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) and [classic scripts](https://html.spec.whatwg.org/multipage/webappapis.html#classic-script))

referrer policy

The [referrer policy](https://fetch.spec.whatwg.org/#concept-request-referrer-policy) used for the initial fetch and for fetching any imported modules

render-blocking

The boolean value of [render-blocking](https://fetch.spec.whatwg.org/#request-render-blocking) used for the initial fetch and for fetching any imported modules. Unless otherwise stated, its value is false.

Recall that via the `[import()](https://tc39.es/ecma262/#sec-import-calls)` feature, [classic scripts](https://html.spec.whatwg.org/multipage/webappapis.html#classic-script) can import [module scripts](https://html.spec.whatwg.org/multipage/webappapis.html#module-script).

The default classic script fetch options are a [script fetch options](https://html.spec.whatwg.org/multipage/webappapis.html#script-fetch-options) whose [cryptographic nonce](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-nonce) is the empty string, [integrity metadata](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-integrity) is the empty string, [parser metadata](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-parser) is "`not-parser-inserted`", [credentials mode](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-credentials) is "`same-origin`", and [referrer policy](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-referrer-policy) is the empty string.

Given a [request](https://fetch.spec.whatwg.org/#concept-request) request and a [script fetch options](https://html.spec.whatwg.org/multipage/webappapis.html#script-fetch-options) options, we define:

set up the classic script request

Set request's [cryptographic nonce metadata](https://fetch.spec.whatwg.org/#concept-request-nonce-metadata) to options's [cryptographic nonce](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-nonce), its [integrity metadata](https://fetch.spec.whatwg.org/#concept-request-integrity-metadata) to options's [integrity metadata](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-integrity), its [parser metadata](https://fetch.spec.whatwg.org/#concept-request-parser-metadata) to options's [parser metadata](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-parser), its [referrer policy](https://fetch.spec.whatwg.org/#concept-request-referrer-policy) to options's [referrer policy](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-referrer-policy), and its [render-blocking](https://fetch.spec.whatwg.org/#request-render-blocking) to options's [render-blocking](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-render-blocking).

set up the module script request

Set request's [cryptographic nonce metadata](https://fetch.spec.whatwg.org/#concept-request-nonce-metadata) to options's [cryptographic nonce](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-nonce), its [integrity metadata](https://fetch.spec.whatwg.org/#concept-request-integrity-metadata) to options's [integrity metadata](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-integrity), its [parser metadata](https://fetch.spec.whatwg.org/#concept-request-parser-metadata) to options's [parser metadata](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-parser), its [credentials mode](https://fetch.spec.whatwg.org/#concept-request-credentials-mode) to options's [credentials mode](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-credentials), its [referrer policy](https://fetch.spec.whatwg.org/#concept-request-referrer-policy) to options's [referrer policy](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-referrer-policy), and its [render-blocking](https://fetch.spec.whatwg.org/#request-render-blocking) to options's [render-blocking](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-render-blocking).

For any given [script fetch options](https://html.spec.whatwg.org/multipage/webappapis.html#script-fetch-options) options, the descendant script fetch options are a new [script fetch options](https://html.spec.whatwg.org/multipage/webappapis.html#script-fetch-options) whose [items](https://infra.spec.whatwg.org/#struct-item) all have the same values, except for the [integrity metadata](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-integrity), which is instead the empty string.

___

The algorithms below can be customized by optionally supplying a custom perform the fetch hook, which takes a [request](https://fetch.spec.whatwg.org/#concept-request) and an is top-level flag. The algorithm must complete with a [response](https://fetch.spec.whatwg.org/#concept-response) (which may be a [network error](https://fetch.spec.whatwg.org/#concept-network-error)), either synchronously (when using [fetch a classic worker-imported script](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-classic-worker-imported-script)) or asynchronously (otherwise). The [is top-level](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-is-top-level) flag will be set for all [classic script](https://html.spec.whatwg.org/multipage/webappapis.html#classic-script) fetches, and for the initial fetch when [fetching an external module script graph](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-module-script-tree), [fetching a module worker script graph](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-module-worker-script-tree), or [fetching an import() module script graph](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-an-import()-module-script-graph), but not for the fetches resulting from `import` statements encountered throughout the graph.

By default, not supplying the [perform the fetch](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-perform-fetch) will cause the below algorithms to simply [fetch](https://fetch.spec.whatwg.org/#concept-fetch) the given [request](https://fetch.spec.whatwg.org/#concept-request), with algorithm-specific customizations to the [request](https://fetch.spec.whatwg.org/#concept-request) and validations of the resulting [response](https://fetch.spec.whatwg.org/#concept-response).

To layer your own customizations on top of these algorithm-specific ones, supply a [perform the fetch](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-perform-fetch) hook that modifies the given [request](https://fetch.spec.whatwg.org/#concept-request), [fetches](https://fetch.spec.whatwg.org/#concept-fetch) it, and then performs specific validations of the resulting [response](https://fetch.spec.whatwg.org/#concept-response) (completing with a [network error](https://fetch.spec.whatwg.org/#concept-network-error) if the validations fail).

The hook can also be used to perform more subtle customizations, such as keeping a cache of [responses](https://fetch.spec.whatwg.org/#concept-response) and avoiding performing a [fetch](https://fetch.spec.whatwg.org/#concept-fetch) at all.

Service Workers is an example of a specification that runs these algorithms with its own options for the hook. [\[SW\]](https://html.spec.whatwg.org/multipage/references.html#refsSW)

___

Now for the algorithms themselves.

To fetch a classic script given a url, a settings object, some options, a CORS setting, and a character encoding, run these steps. The algorithm will asynchronously complete with either null (on failure) or a new [classic script](https://html.spec.whatwg.org/multipage/webappapis.html#classic-script) (on success).

1.  Let request be the result of [creating a potential-CORS request](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#create-a-potential-cors-request) given url, "`script`", and CORS setting.
    
2.  Set request's [client](https://fetch.spec.whatwg.org/#concept-request-client) to settings object.
    
3.  [Set up the classic script request](https://html.spec.whatwg.org/multipage/webappapis.html#set-up-the-classic-script-request) given request and options.
    
4.  If the caller specified custom steps to [perform the fetch](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-perform-fetch), perform them on request, with the [is top-level](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-is-top-level) flag set. Return from this algorithm, and when the custom [perform the fetch](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-perform-fetch) steps complete with [response](https://fetch.spec.whatwg.org/#concept-response) response, run the remaining steps.
    
    Otherwise, [fetch](https://fetch.spec.whatwg.org/#concept-fetch) request. Return from this algorithm, and run the remaining steps as part of the fetch's _[processResponseConsumeBody](https://fetch.spec.whatwg.org/#process-response-end-of-body)_ given [response](https://fetch.spec.whatwg.org/#concept-response) response.
    
    response can be either [CORS-same-origin](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-same-origin) or [CORS-cross-origin](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-cross-origin). This only affects how error reporting happens.
    
5.  [Finalize and report timing](https://fetch.spec.whatwg.org/#finalize-and-report-timing) with response, settings object's [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global), and "`script`".
    
6.  Set response to response's [unsafe response](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#unsafe-response).
    
7.  If response's [type](https://fetch.spec.whatwg.org/#concept-response-type) is "`error`", or response's [status](https://fetch.spec.whatwg.org/#concept-response-status) is not an [ok status](https://fetch.spec.whatwg.org/#ok-status), then asynchronously complete this algorithm with null, and return.
    
    For historical reasons, this algorithm does not include MIME type checking, unlike the other script-fetching algorithms in this section.
    
8.  Let potentialMIMETypeForEncoding be the result of [extracting a MIME type](https://fetch.spec.whatwg.org/#concept-header-extract-mime-type) given response's [header list](https://fetch.spec.whatwg.org/#concept-response-header-list).
    
9.  Set character encoding to the result of [legacy extracting an encoding](https://fetch.spec.whatwg.org/#legacy-extract-an-encoding) given potentialMIMETypeForEncoding and character encoding.
    
    This intentionally ignores the [MIME type essence](https://mimesniff.spec.whatwg.org/#mime-type-essence).
    
10.  Let source text be the result of [decoding](https://encoding.spec.whatwg.org/#decode) response's [body](https://fetch.spec.whatwg.org/#concept-response-body) to Unicode, using character encoding as the fallback encoding.
    
    The [decode](https://encoding.spec.whatwg.org/#decode) algorithm overrides character encoding if the file contains a BOM.
    
11.  Let muted errors be true if response was [CORS-cross-origin](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-cross-origin), and false otherwise.
    
12.  Let script be the result of [creating a classic script](https://html.spec.whatwg.org/multipage/webappapis.html#creating-a-classic-script) given source text, settings object, response's [url](https://fetch.spec.whatwg.org/#concept-response-url), options, and muted errors.
    
13.  Asynchronously complete this algorithm with script.

To fetch a classic worker script given a url, a fetch client settings object, a destination, and a script settings object, run these steps. The algorithm will asynchronously complete with either null (on failure) or a new [classic script](https://html.spec.whatwg.org/multipage/webappapis.html#classic-script) (on success).

1.  Let request be a new [request](https://fetch.spec.whatwg.org/#concept-request) whose [URL](https://fetch.spec.whatwg.org/#concept-request-url) is url, [client](https://fetch.spec.whatwg.org/#concept-request-client) is fetch client settings object, [destination](https://fetch.spec.whatwg.org/#concept-request-destination) is destination, [mode](https://fetch.spec.whatwg.org/#concept-request-mode) is "`same-origin`", [credentials mode](https://fetch.spec.whatwg.org/#concept-request-credentials-mode) is "`same-origin`", [parser metadata](https://fetch.spec.whatwg.org/#concept-request-parser-metadata) is "`not parser-inserted`", and whose [use-URL-credentials flag](https://fetch.spec.whatwg.org/#concept-request-use-url-credentials-flag) is set.
    
2.  If the caller specified custom steps to [perform the fetch](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-perform-fetch), perform them on request, with the [is top-level](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-is-top-level) flag set. Return from this algorithm, and when the custom [perform the fetch](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-perform-fetch) steps complete with [response](https://fetch.spec.whatwg.org/#concept-response) response, run the remaining steps.
    
    Otherwise, [fetch](https://fetch.spec.whatwg.org/#concept-fetch) request. Return from this algorithm, and run the remaining steps as part of the fetch's _[processResponseConsumeBody](https://fetch.spec.whatwg.org/#process-response-end-of-body)_ given [response](https://fetch.spec.whatwg.org/#concept-response) response.
    
3.  [Finalize and report timing](https://fetch.spec.whatwg.org/#finalize-and-report-timing) with response, fetch client settings object's [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global), and "`other`".
    
4.  Set response to response's [unsafe response](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#unsafe-response).
    
5.  If either of the following conditions are met:
    
    -   response's [type](https://fetch.spec.whatwg.org/#concept-response-type) is "`error`"; or
        
    -   response's [status](https://fetch.spec.whatwg.org/#concept-response-status) is not an [ok status](https://fetch.spec.whatwg.org/#ok-status),
        
    
    then asynchronously complete this algorithm with null, and return.
    
6.  If both of the following conditions are met:
    
    -   response's [url](https://fetch.spec.whatwg.org/#concept-response-url)'s [scheme](https://url.spec.whatwg.org/#concept-url-scheme) is an [HTTP(S) scheme](https://fetch.spec.whatwg.org/#http-scheme); and
        
    -   the result of [extracting a MIME type](https://fetch.spec.whatwg.org/#concept-header-extract-mime-type) from response's [header list](https://fetch.spec.whatwg.org/#concept-response-header-list) is not a [JavaScript MIME type](https://mimesniff.spec.whatwg.org/#javascript-mime-type),
        
    
    then asynchronously complete this algorithm with null, and return.
    
    Other [fetch schemes](https://fetch.spec.whatwg.org/#fetch-scheme) are exempted from MIME type checking for historical web-compatibility reasons. We might be able to tighten this in the future; see [issue #3255](https://github.com/whatwg/html/issues/3255).
    
7.  Let source text be the result of [UTF-8 decoding](https://encoding.spec.whatwg.org/#utf-8-decode) response's [body](https://fetch.spec.whatwg.org/#concept-response-body).
    
8.  Let script be the result of [creating a classic script](https://html.spec.whatwg.org/multipage/webappapis.html#creating-a-classic-script) using source text, script settings object, response's [url](https://fetch.spec.whatwg.org/#concept-response-url), and the [default classic script fetch options](https://html.spec.whatwg.org/multipage/webappapis.html#default-classic-script-fetch-options).
    
9.  Asynchronously complete this algorithm with script.

To fetch a classic worker-imported script given a url and a settings object, run these steps. The algorithm will synchronously complete with a [classic script](https://html.spec.whatwg.org/multipage/webappapis.html#classic-script) on success, or throw an exception on failure.

1.  Let request be a new [request](https://fetch.spec.whatwg.org/#concept-request) whose [URL](https://fetch.spec.whatwg.org/#concept-request-url) is url, [client](https://fetch.spec.whatwg.org/#concept-request-client) is settings object, [destination](https://fetch.spec.whatwg.org/#concept-request-destination) is "`script`", [parser metadata](https://fetch.spec.whatwg.org/#concept-request-parser-metadata) is "`not parser-inserted`", [synchronous flag](https://fetch.spec.whatwg.org/#synchronous-flag) is set, and whose [use-URL-credentials flag](https://fetch.spec.whatwg.org/#concept-request-use-url-credentials-flag) is set.
    
2.  If the caller specified custom steps to [perform the fetch](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-perform-fetch), perform them on request, with the [is top-level](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-is-top-level) flag set. Let response be the result.
    
    Otherwise, [fetch](https://fetch.spec.whatwg.org/#concept-fetch) request, and let response be the result.
    
    Unlike other algorithms in this section, the fetching process is synchronous here. Thus any [perform the fetch](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-perform-fetch) steps will also finish their work synchronously.
    
3.  [Finalize and report timing](https://fetch.spec.whatwg.org/#finalize-and-report-timing) with response, settings object's [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global), and "`other`".
    
4.  Set response to response's [unsafe response](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#unsafe-response).
    
5.  If any of the following conditions are met:
    
    -   response's [type](https://fetch.spec.whatwg.org/#concept-response-type) is "`error`"; or
        
    -   response's [status](https://fetch.spec.whatwg.org/#concept-response-status) is not an [ok status](https://fetch.spec.whatwg.org/#ok-status); or
        
    -   the result of [extracting a MIME type](https://fetch.spec.whatwg.org/#concept-header-extract-mime-type) from response's [header list](https://fetch.spec.whatwg.org/#concept-response-header-list) is not a [JavaScript MIME type](https://mimesniff.spec.whatwg.org/#javascript-mime-type),
        
    
    then throw a ["`NetworkError`"](https://webidl.spec.whatwg.org/#networkerror) `[DOMException](https://webidl.spec.whatwg.org/#dfn-DOMException)`.
    
6.  Let source text be the result of [UTF-8 decoding](https://encoding.spec.whatwg.org/#utf-8-decode) response's [body](https://fetch.spec.whatwg.org/#concept-response-body).
    
7.  Let muted errors be true if response was [CORS-cross-origin](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-cross-origin), and false otherwise.
    
8.  Let script be the result of [creating a classic script](https://html.spec.whatwg.org/multipage/webappapis.html#creating-a-classic-script) given source text, settings object, response's [url](https://fetch.spec.whatwg.org/#concept-response-url), the [default classic script fetch options](https://html.spec.whatwg.org/multipage/webappapis.html#default-classic-script-fetch-options), and muted errors.
    
9.  Return script.
    

To fetch an external module script graph given a url, a settings object, and some options, run these steps. The algorithm will asynchronously complete with either null (on failure) or a [module script](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) (on success).

1.  [Fetch a single module script](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-single-module-script) given url, settings object, "`script`", options, settings object, "`client`", and with the top-level module fetch flag set. If the caller of this algorithm specified custom [perform the fetch](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-perform-fetch) steps, pass those along as well. Wait until the algorithm asynchronously completes with result.
    
2.  If result is null, asynchronously complete this algorithm with null, and return.
    
3.  Let visited set be « (url, "`javascript`") ».
    
4.  [Fetch the descendants of and link](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-the-descendants-of-and-link-a-module-script) result given settings object, destination, and visited set. When this asynchronously completes with final result, asynchronously complete this algorithm with final result.
    

To fetch an import() module script graph given a moduleRequest, a base URL, a settings object, and some options, run these steps. The algorithm will asynchronously complete with either null (on failure) or a [module script](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) (on success).

1.  Let url be the result of [resolving a module specifier](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) given base URL and moduleRequest.\[\[Specifier\]\].
    
2.  If url is failure, then asynchronously complete this algorithm with null, and return.
    
3.  Assert: moduleRequest.\[\[Assertions\]\] does not contain any [Record](https://tc39.es/ecma262/#sec-list-and-record-specification-type) entry such that entry.\[\[Key\]\] is not "`type`", because we only asked for "`type`" assertions in [HostGetSupportedImportAssertions](https://html.spec.whatwg.org/multipage/webappapis.html#hostgetsupportedimportassertions).
    
4.  Let moduleType be the result of running the [module type from module request](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-from-module-request) steps given moduleRequest.
    
5.  If the result of running the [module type allowed](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) steps given moduleType and settings object is false, then asynchronously complete this algorithm with null, and return.
    
6.  [Fetch a single module script](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-single-module-script) given url, settings object, "`script`", options, settings object, "`client`", moduleRequest, and with the top-level module fetch flag set. If the caller of this algorithm specified custom [perform the fetch](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-perform-fetch) steps, pass those along as well. Wait until the algorithm asynchronously completes with result.
    
7.  If result is null, asynchronously complete this algorithm with null, and return.
    
8.  Let visited set be « (url, moduleType) ».
    
9.  [Fetch the descendants of and link](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-the-descendants-of-and-link-a-module-script) result given settings object, destination, and visited set. When this asynchronously completes with final result, asynchronously complete this algorithm with final result.
    

To fetch a modulepreload module script graph given a url, a destination, a settings object, and some options, run these steps. The algorithm will asynchronously complete with either null (on failure) or a [module script](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) (on success), although it will perform optional steps even after completing.

1.  [Fetch a single module script](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-single-module-script) given url, settings object, destination, options, settings object, "`client`", and with the top-level module fetch flag set. Wait until algorithm asynchronously completes with result.
    
2.  Asynchronously complete this algorithm with result, but do _not_ return.
    
3.  If result is not null, optionally perform the following steps:
    
    1.  Let visited set be « (url, "`javascript`") ».
        
    2.  [Fetch the descendants of and link](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-the-descendants-of-and-link-a-module-script) result given settings object, destination, and visited set.
        
    
    Generally, performing these steps will be beneficial for performance, as it allows pre-loading the modules that will invariably be requested later, via algorithms such as [fetch an external module script graph](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-module-script-tree) that fetch the entire graph. However, user agents might wish to skip them in bandwidth-constrained situations, or situations where the relevant fetches are already in flight.
    

To fetch an inline module script graph given a source text, base URL, settings object, and options, run these steps. The algorithm will asynchronously complete with either null (on failure) or a [module script](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) (on success).

1.  Let script be the result of [creating a JavaScript module script](https://html.spec.whatwg.org/multipage/webappapis.html#creating-a-javascript-module-script) using source text, settings object, base URL, and options.
    
2.  If script is null, asynchronously complete this algorithm with null, and return.
    
3.  Let visited set be an empty [set](https://infra.spec.whatwg.org/#ordered-set).
    
4.  [Fetch the descendants of and link](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-the-descendants-of-and-link-a-module-script) script, given settings object, the destination "`script`", and visited set. When this asynchronously completes with final result, asynchronously complete this algorithm with final result.
    

To fetch a module worker script graph given a url, a fetch client settings object, a destination, a credentials mode, and a module map settings object, [fetch a worklet/module worker script graph](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-worklet/module-worker-script-graph) given url, fetch client settings object, destination, credentials mode, and module map settings object, asynchronously completing with the asynchronous completion result of that algorithm.

To fetch a worklet script graph given a url, a fetch client settings object, a destination, a credentials mode, a module map settings object, and a module responses map, [fetch a worklet/module worker script graph](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-worklet/module-worker-script-graph) given url, fetch client settings object, destination, credentials mode, and module map settings object, asynchronously completing with the asynchronous completion result of that algorithm. Use the following custom steps to [perform the fetch](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-perform-fetch) given response:

1.  Let requestURL be request's [URL](https://fetch.spec.whatwg.org/#concept-request-url).
    
2.  If moduleResponsesMap\[requestURL\] is "`fetching`", wait [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel) until that entry's value changes, then [queue a task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-task) on the [networking task source](https://html.spec.whatwg.org/multipage/webappapis.html#networking-task-source) to proceed with running the following steps.
    
3.  If moduleResponsesMap\[requestURL\] [exists](https://infra.spec.whatwg.org/#map-exists), then asynchronously complete the [perform the fetch](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-perform-fetch) steps with moduleResponsesMap\[requestURL\].
    
4.  [Set](https://infra.spec.whatwg.org/#map-set) moduleResponsesMap\[requestURL\] to "`fetching`".
    
5.  [Fetch](https://fetch.spec.whatwg.org/#concept-fetch) request, with _[processResponseConsumeBody](https://fetch.spec.whatwg.org/#process-response-end-of-body)_ set to the following steps given [response](https://fetch.spec.whatwg.org/#concept-response) response:
    
    1.  Set moduleResponsesMap\[requestURL\] to response.
        
    2.  Asynchronously complete the [perform the fetch](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-perform-fetch) steps with response.
        

___

The following algorithms are meant for internal use by this specification only as part of [fetching an external module script graph](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-module-script-tree) or other similar concepts above, and should not be used directly by other specifications.

This diagram illustrates how these algorithms relate to the ones above, as well as to each other:

[fetch an external module script graph](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-module-script-tree) [fetch an import() module script graph](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-an-import()-module-script-graph) [fetch a modulepreload module script graph](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-modulepreload-module-script-graph) [fetch an inline module script graph](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-an-inline-module-script-graph) [fetch a module worker script graph](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-module-worker-script-tree) [fetch a worklet script graph](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-worklet-script-graph) [fetch a worklet/module worker script graph](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-worklet/module-worker-script-graph) [fetch the descendants of and link a module script](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-the-descendants-of-and-link-a-module-script) [fetch the descendants of a module script](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-the-descendants-of-a-module-script) [internal module script graph fetching procedure](https://html.spec.whatwg.org/multipage/webappapis.html#internal-module-script-graph-fetching-procedure)

To fetch a worklet/module worker script graph given a url, a fetch client settings object, a destination, a credentials mode, and a module map settings object, run these steps. The algorithm will asynchronously complete with either null (on failure) or a [module script](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) (on success).

1.  Let options be a [script fetch options](https://html.spec.whatwg.org/multipage/webappapis.html#script-fetch-options) whose [cryptographic nonce](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-nonce) is the empty string, [integrity metadata](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-integrity) is the empty string, [parser metadata](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-parser) is "`not-parser-inserted`", [credentials mode](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-credentials) is credentials mode, and [referrer policy](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-fetch-options-referrer-policy) is the empty string.
    
2.  [Fetch a single module script](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-single-module-script) given url, fetch client settings object, destination, options, module map settings object, "`client`", and with the top-level module fetch flag set. If the caller of this algorithm specified custom [perform the fetch](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-perform-fetch) steps, pass those along as well. Wait until the algorithm asynchronously completes with result.
    
3.  If result is null, asynchronously complete this algorithm with null, and return.
    
4.  Let visited set be « (url, "`javascript`") ».
    
5.  [Fetch the descendants of and link](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-the-descendants-of-and-link-a-module-script) result given fetch client settings object, destination, and visited set. When this asynchronously completes with final result, asynchronously complete this algorithm with final result.
    

To fetch the descendants of and link a module script module script, given a fetch client settings object, a destination, and a visited set, run these steps. The algorithm will asynchronously complete with either null (on failure) or with module script (on success).

1.  [Fetch the descendants of](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-the-descendants-of-a-module-script) module script, given fetch client settings object, destination, and visited set.
    
2.  Return from this algorithm, and run the following steps when [fetching the descendants of a module script](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-the-descendants-of-a-module-script) asynchronously completes with result.
    
3.  If result is null, then asynchronously complete this algorithm with result.
    
    In this case, there was an error fetching one or more of the descendants. We will not attempt to link.
    
4.  Let parse error be the result of [finding the first parse error](https://html.spec.whatwg.org/multipage/webappapis.html#finding-the-first-parse-error) given result.
    
5.  If parse error is null, then:
    
    1.  Let record be result's [record](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-record).
        
    2.  Perform record.[Link](https://tc39.es/ecma262/#sec-moduledeclarationlinking)().
        
        This step will recursively call [Link](https://tc39.es/ecma262/#sec-moduledeclarationlinking) on all of the module's unlinked dependencies.
        
        If this throws an exception, set result's [error to rethrow](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-error-to-rethrow) to that exception.
        
6.  Otherwise, set result's [error to rethrow](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-error-to-rethrow) to parse error.
    
7.  Asynchronously complete this algorithm with result.
    

To fetch the descendants of a module script module script, given a fetch client settings object, a destination, and a visited set, run these steps. The algorithm will asynchronously complete with either null (on failure) or with module script (on success).

1.  If module script's [record](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-record) is null, then asynchronously complete this algorithm with module script and return.
    
2.  Let record be module script's [record](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-record).
    
3.  If record is not a [Cyclic Module Record](https://tc39.es/ecma262/#sec-cyclic-module-records), or if record.\[\[RequestedModules\]\] [is empty](https://infra.spec.whatwg.org/#list-is-empty), asynchronously complete this algorithm with module script.
    
4.  Let moduleRequests be a new empty [list](https://infra.spec.whatwg.org/#list).
    
5.  [For each](https://infra.spec.whatwg.org/#list-iterate) [ModuleRequest Record](https://tc39.es/proposal-import-assertions/#sec-modulerequest-record) requested of record.\[\[RequestedModules\]\],
    
    1.  Let url be the result of [resolving a module specifier](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) given module script's [base URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-base-url) and requested.\[\[Specifier\]\].
        
    2.  Assert: url is never failure, because [resolving a module specifier](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) must have been [previously successful](https://html.spec.whatwg.org/multipage/webappapis.html#validate-requested-module-specifiers) with these same two arguments.
        
    3.  Let moduleType be the result of running the [module type from module request](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-from-module-request) steps given requested.
        
    4.  If visited set does not [contain](https://infra.spec.whatwg.org/#list-contain) (url, moduleType), then:
        
        1.  [Append](https://infra.spec.whatwg.org/#list-append) requested to moduleRequests.
            
        2.  [Append](https://infra.spec.whatwg.org/#set-append) (url, moduleType) to visited set.
            
6.  Let options be the [descendant script fetch options](https://html.spec.whatwg.org/multipage/webappapis.html#descendant-script-fetch-options) for module script's [fetch options](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-script-fetch-options).
    
7.  Assert: options is not null, as module script is a [JavaScript module script](https://html.spec.whatwg.org/multipage/webappapis.html#javascript-module-script).
    
8.  [For each](https://infra.spec.whatwg.org/#list-iterate) moduleRequest in moduleRequests, perform the [internal module script graph fetching procedure](https://html.spec.whatwg.org/multipage/webappapis.html#internal-module-script-graph-fetching-procedure) given moduleRequest, fetch client settings object, destination, options, module script's [settings object](https://html.spec.whatwg.org/multipage/webappapis.html#settings-object), visited set, and module script's [base URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-base-url). If the caller of this algorithm specified custom [perform the fetch](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-perform-fetch) steps, pass those along while performing the [internal module script graph fetching procedure](https://html.spec.whatwg.org/multipage/webappapis.html#internal-module-script-graph-fetching-procedure).
    
    These invocations of the [internal module script graph fetching procedure](https://html.spec.whatwg.org/multipage/webappapis.html#internal-module-script-graph-fetching-procedure) should be performed in parallel to each other.
    
    If any of the invocations of the [internal module script graph fetching procedure](https://html.spec.whatwg.org/multipage/webappapis.html#internal-module-script-graph-fetching-procedure) asynchronously complete with null, asynchronously complete this algorithm with null, and return.
    
    Otherwise, wait until all of the [internal module script graph fetching procedure](https://html.spec.whatwg.org/multipage/webappapis.html#internal-module-script-graph-fetching-procedure) invocations have asynchronously completed. Asynchronously complete this algorithm with module script.
    

To perform the internal module script graph fetching procedure given a moduleRequest, a fetch client settings object, a destination, some options, a module map settings object, a visited set, and a referrer, perform these steps. The algorithm will asynchronously complete with either null (on failure) or a [module script](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) (on success).

1.  Let url be the result of [resolving a module specifier](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) given referrer and moduleRequest.\[\[Specifier\]\].
    
2.  Assert: url is never failure, because [resolving a module specifier](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) must have been [previously successful](https://html.spec.whatwg.org/multipage/webappapis.html#validate-requested-module-specifiers) with these same two arguments.
    
3.  Let moduleType be the result of running the [module type from module request](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-from-module-request) steps given moduleRequest.
    
4.  Assert: visited set [contains](https://infra.spec.whatwg.org/#list-contain) (url, moduleType).
    
5.  [Fetch a single module script](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-single-module-script) given url, fetch client settings object, destination, options, module map settings object, referrer, moduleRequest, and with the top-level module fetch flag unset. If the caller of this algorithm specified custom [perform the fetch](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-perform-fetch) steps, pass those along while [fetching a single module script](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-single-module-script).
    
6.  Return from this algorithm, and run the following steps when [fetching a single module script](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-single-module-script) asynchronously completes with result:
    
7.  If result is null, asynchronously complete this algorithm with null, and return.
    
8.  [Fetch the descendants of](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-the-descendants-of-a-module-script) result given fetch client settings object, destination, and visited set.
    
9.  When the appropriate algorithm asynchronously completes with final result, asynchronously complete this algorithm with final result.
    

To fetch a single module script, given a url, a fetch client settings object, a destination, some options, a module map settings object, a referrer, an optional moduleRequest, and a top-level module fetch flag, run these steps. The algorithm will asynchronously complete with either null (on failure) or a [module script](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) (on success).

1.  Let moduleType be "`javascript`".
    
2.  If moduleRequest was given, then set moduleType to the result of running the [module type from module request](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-from-module-request) steps given moduleRequest.
    
3.  Assert: the result of running the [module type allowed](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) steps given moduleType and module map settings object is true. Otherwise we would not have reached this point because a failure would have been raised when inspecting moduleRequest.\[\[Assertions\]\] in [create a JavaScript module script](https://html.spec.whatwg.org/multipage/webappapis.html#validate-requested-module-specifiers) or [fetch an import() module script graph](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-an-import()-module-script-graph).
    
4.  Let moduleMap be module map settings object's [module map](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-module-map).
    
5.  If moduleMap\[(url, moduleType)\] is "`fetching`", wait [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel) until that entry's value changes, then [queue a task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-task) on the [networking task source](https://html.spec.whatwg.org/multipage/webappapis.html#networking-task-source) to proceed with running the following steps.
    
6.  If moduleMap\[(url, moduleType)\] [exists](https://infra.spec.whatwg.org/#map-exists), asynchronously complete this algorithm with moduleMap\[url / moduleType\], and return.
    
7.  [Set](https://infra.spec.whatwg.org/#map-set) moduleMap\[(url, moduleType)\] to "`fetching`".
    
8.  Let request be a new [request](https://fetch.spec.whatwg.org/#concept-request) whose [URL](https://fetch.spec.whatwg.org/#concept-request-url) is url, [destination](https://fetch.spec.whatwg.org/#concept-request-destination) is destination, [mode](https://fetch.spec.whatwg.org/#concept-request-mode) is "`cors`", [referrer](https://fetch.spec.whatwg.org/#concept-request-referrer) is referrer, and [client](https://fetch.spec.whatwg.org/#concept-request-client) is fetch client settings object.
    
9.  If destination is "`worker`", "`sharedworker`", or "`serviceworker`", and the top-level module fetch flag is set, then set request's [mode](https://fetch.spec.whatwg.org/#concept-request-mode) to "`same-origin`".
    
10.  [Set up the module script request](https://html.spec.whatwg.org/multipage/webappapis.html#set-up-the-module-script-request) given request and options.
    
11.  If the caller specified custom steps to [perform the fetch](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-perform-fetch), perform them on request, setting the [is top-level](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-is-top-level) flag if the top-level module fetch flag is set. Return from this algorithm, and when the custom [perform the fetch](https://html.spec.whatwg.org/multipage/webappapis.html#fetching-scripts-perform-fetch) steps complete with [response](https://fetch.spec.whatwg.org/#concept-response) response, run the remaining steps.
    
    Otherwise, [fetch](https://fetch.spec.whatwg.org/#concept-fetch) request. Return from this algorithm, and run the remaining steps as part of the fetch's _[processResponseConsumeBody](https://fetch.spec.whatwg.org/#process-response-end-of-body)_ given [response](https://fetch.spec.whatwg.org/#concept-response) response.
    
    response is always [CORS-same-origin](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-same-origin).
    
12.  [Finalize and report timing](https://fetch.spec.whatwg.org/#finalize-and-report-timing) with response, fetch client settings object's [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global), and "`other`".
    
13.  If either of the following conditions are met:
    
    -   response's [type](https://fetch.spec.whatwg.org/#concept-response-type) is "`error`"; or
        
    -   response's [status](https://fetch.spec.whatwg.org/#concept-response-status) is not an [ok status](https://fetch.spec.whatwg.org/#ok-status).
        
    
    then [set](https://infra.spec.whatwg.org/#map-set) moduleMap\[(url, moduleType)\] to null, asynchronously complete this algorithm with null, and return.
    
14.  Let source text be the result of [UTF-8 decoding](https://encoding.spec.whatwg.org/#utf-8-decode) response's [body](https://fetch.spec.whatwg.org/#concept-response-body).
    
15.  Let MIME type be the result of [extracting a MIME type](https://fetch.spec.whatwg.org/#concept-header-extract-mime-type) from response's [header list](https://fetch.spec.whatwg.org/#concept-response-header-list).
    
16.  Let module script be null.
    
17.  If MIME type is a [JavaScript MIME type](https://mimesniff.spec.whatwg.org/#javascript-mime-type) and moduleType is "`javascript`", then set module script to the result of [creating a JavaScript module script](https://html.spec.whatwg.org/multipage/webappapis.html#creating-a-javascript-module-script) given source text, module map settings object, response's [url](https://fetch.spec.whatwg.org/#concept-response-url), and options.
    
18.  If the [MIME type essence](https://mimesniff.spec.whatwg.org/#mime-type-essence) of MIME type is "`[text/css](https://html.spec.whatwg.org/multipage/indices.html#text/css)`" and moduleType is "`css`", then set module script to the result of [creating a CSS module script](https://html.spec.whatwg.org/multipage/webappapis.html#creating-a-css-module-script) given source text and module map settings object.
    
19.  If MIME type essence is a [JSON MIME type](https://mimesniff.spec.whatwg.org/#json-mime-type) and moduleType is "`json`", then set module script to the result of [creating a JSON module script](https://html.spec.whatwg.org/multipage/webappapis.html#creating-a-json-module-script) given source text and module map settings object.
    
20.  [Set](https://infra.spec.whatwg.org/#map-set) moduleMap\[(url, moduleType)\] to module script, and asynchronously complete this algorithm with module script.
    
    It is intentional that the [module map](https://html.spec.whatwg.org/multipage/webappapis.html#module-map) is keyed by the [request URL](https://fetch.spec.whatwg.org/#concept-request-url), whereas the [base URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-base-url) for the [module script](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) is set to the [response URL](https://fetch.spec.whatwg.org/#concept-response-url). The former is used to deduplicate fetches, while the latter is used for URL resolution.
    

To find the first parse error given a root moduleScript and an optional discoveredSet:

1.  Let moduleMap be moduleScript's [settings object](https://html.spec.whatwg.org/multipage/webappapis.html#settings-object)'s [module map](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-module-map).
    
2.  If discoveredSet was not given, let it be an empty [set](https://infra.spec.whatwg.org/#ordered-set).
    
3.  [Append](https://infra.spec.whatwg.org/#list-append) moduleScript to discoveredSet.
    
4.  If moduleScript's [record](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-record) is null, then return moduleScript's [parse error](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-parse-error).
    
5.  If moduleScript's [record](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-record) is not a [Cyclic Module Record](https://tc39.es/ecma262/#sec-cyclic-module-records), then return null.
    
6.  Let moduleRequests be the value of moduleScript's [record](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-record)'s \[\[RequestedModules\]\] internal slot.
    
7.  [For each](https://infra.spec.whatwg.org/#list-iterate) moduleRequest of moduleRequests:
    
    1.  Let childURL be the result of [resolving a module specifier](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) given moduleScript's [base URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-base-url) and moduleRequest.\[\[Specifier\]\]. (This will never fail, as otherwise moduleScript would have been [marked as itself having a parse error](https://html.spec.whatwg.org/multipage/webappapis.html#validate-requested-module-specifiers).)
        
    2.  Let moduleType be the result of running the [module type from module request](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-from-module-request) steps given moduleRequest.
        
    3.  Let childModule be moduleMap\[(childURL, moduleType)\].
        
    4.  Assert: childModule is a [module script](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) (i.e., it is not "`fetching`" or null); by now all [module scripts](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) in the graph rooted at moduleScript will have successfully been fetched.
        
    5.  If discoveredSet already [contains](https://infra.spec.whatwg.org/#list-contain) childModule, [continue](https://infra.spec.whatwg.org/#iteration-continue).
        
    6.  Let childParseError be the result of [finding the first parse error](https://html.spec.whatwg.org/multipage/webappapis.html#finding-the-first-parse-error) given childModule and discoveredSet.
        
    7.  If childParseError is not null, return childParseError.
        
8.  Return null.
    

##### 8.1.4.3 Creating scripts[](https://html.spec.whatwg.org/multipage/webappapis.html#creating-scripts)

To create a classic script, given a [string](https://infra.spec.whatwg.org/#string) source, an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) settings, a [URL](https://url.spec.whatwg.org/#concept-url) baseURL, some [script fetch options](https://html.spec.whatwg.org/multipage/webappapis.html#script-fetch-options) options, and an optional boolean mutedErrors (default false):

1.  If mutedErrors is true, then set baseURL to `[about:blank](https://html.spec.whatwg.org/multipage/infrastructure.html#about:blank)`.
    
    When mutedErrors is true, baseURL is the script's [CORS-cross-origin](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-cross-origin) [response](https://fetch.spec.whatwg.org/#concept-response)'s [url](https://fetch.spec.whatwg.org/#concept-response-url), which shouldn't be exposed to JavaScript. Therefore, baseURL is sanitized here.
    
2.  If [scripting is disabled](https://html.spec.whatwg.org/multipage/webappapis.html#concept-environment-noscript) for settings, then set source to the empty string.
    
3.  Let script be a new [classic script](https://html.spec.whatwg.org/multipage/webappapis.html#classic-script) that this algorithm will subsequently initialize.
    
4.  Set script's [settings object](https://html.spec.whatwg.org/multipage/webappapis.html#settings-object) to settings.
    
5.  Set script's [base URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-base-url) to baseURL.
    
6.  Set script's [fetch options](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-script-fetch-options) to options.
    
7.  Set script's [muted errors](https://html.spec.whatwg.org/multipage/webappapis.html#muted-errors) to mutedErrors.
    
8.  Set script's [parse error](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-parse-error) and [error to rethrow](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-error-to-rethrow) to null.
    
9.  Let result be [ParseScript](https://tc39.es/ecma262/#sec-parse-script)(source, settings's [Realm](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object's-realm), script).
    
    Passing script as the last parameter here ensures result.\[\[HostDefined\]\] will be script.
    
10.  If result is a [list](https://infra.spec.whatwg.org/#list) of errors, then:
    
    1.  Set script's [parse error](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-parse-error) and its [error to rethrow](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-error-to-rethrow) to result\[0\].
        
    2.  Return script.
        
11.  Set script's [record](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-record) to result.
    
12.  Return script.
    

To create a JavaScript module script, given a [string](https://infra.spec.whatwg.org/#string) source, an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) settings, a [URL](https://url.spec.whatwg.org/#concept-url) baseURL, and some [script fetch options](https://html.spec.whatwg.org/multipage/webappapis.html#script-fetch-options) options:

1.  If [scripting is disabled](https://html.spec.whatwg.org/multipage/webappapis.html#concept-environment-noscript) for settings, then set source to the empty string.
    
2.  Let script be a new [module script](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) that this algorithm will subsequently initialize.
    
3.  Set script's [settings object](https://html.spec.whatwg.org/multipage/webappapis.html#settings-object) to settings.
    
4.  Set script's [base URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-base-url) to baseURL.
    
5.  Set script's [fetch options](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-script-fetch-options) to options.
    
6.  Set script's [parse error](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-parse-error) and [error to rethrow](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-error-to-rethrow) to null.
    
7.  Let result be [ParseModule](https://tc39.es/ecma262/#sec-parsemodule)(source, settings's [Realm](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object's-realm), script).
    
    Passing script as the last parameter here ensures result.\[\[HostDefined\]\] will be script.
    
8.  If result is a [list](https://infra.spec.whatwg.org/#list) of errors, then:
    
    1.  Set script's [parse error](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-parse-error) to result\[0\].
        
    2.  Return script.
        
9.  Assert: requested.\[\[Assertions\]\] does not contain any [Record](https://tc39.es/ecma262/#sec-list-and-record-specification-type) entry such that entry.\[\[Key\]\] is not "`type`", because we only asked for "`type`" assertions in [HostGetSupportedImportAssertions](https://html.spec.whatwg.org/multipage/webappapis.html#hostgetsupportedimportassertions).
    
10.  [For each](https://infra.spec.whatwg.org/#list-iterate) [ModuleRequest record](https://tc39.es/proposal-import-assertions/#sec-modulerequest-record) requested of result.\[\[RequestedModules\]\]:
    
    1.  Let url be the result of [resolving a module specifier](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) given script's [base URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-base-url) and requested.\[\[Specifier\]\].
        
    2.  Let moduleType be the result of running the [module type from module request](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-from-module-request) steps given requested.
        
    3.  If url is failure, or if the result of running the [module type allowed](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) steps given moduleType and settings is false, then:
        
        1.  Let error be a new `[TypeError](https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard-typeerror)` exception.
            
        2.  Set script's [parse error](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-parse-error) to error.
            
        3.  Return script.
            
    
    This step is essentially validating all of the requested module specifiers and type assertions. We treat a module with unresolvable module specifiers or unsupported type assertions the same as one that cannot be parsed; in both cases, a syntactic issue makes it impossible to ever contemplate linking the module later.
    
11.  Set script's [record](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-record) to result.
    
12.  Return script.
    

To create a CSS module script, given a string source and an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) settings:

1.  Let script be a new [module script](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) that this algorithm will subsequently initialize.
    
2.  Set script's [settings object](https://html.spec.whatwg.org/multipage/webappapis.html#settings-object) to settings.
    
3.  Set script's [base URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-base-url) and [fetch options](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-script-fetch-options) to null.
    
4.  Set script's [parse error](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-parse-error) and [error to rethrow](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-error-to-rethrow) to null.
    
5.  Let sheet be the result of running the steps to [create a constructed `CSSStyleSheet`](https://drafts.csswg.org/cssom/#create-a-constructed-cssstylesheet) with an empty dictionary as the argument.
    
6.  Run the steps to [synchronously replace the rules of a `CSSStyleSheet`](https://drafts.csswg.org/cssom/#synchronously-replace-the-rules-of-a-cssstylesheet) on sheet given source.
    
    If this throws an exception, set script's [parse error](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-parse-error) to that exception, and return script.
    
    The steps to [synchronously replace the rules of a `CSSStyleSheet`](https://drafts.csswg.org/cssom/#synchronously-replace-the-rules-of-a-cssstylesheet) will throw if source contains any `@import` rules. This is by-design for now because there is not yet an agreement on how to handle these for CSS module scripts; therefore they are blocked altogether until a consensus is reached.
    
7.  Set script's [record](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-record) to the result of [CreateDefaultExportSyntheticModule](https://tc39.es/proposal-json-modules/#sec-create-default-export-synthetic-module)(sheet).
    
8.  Return script.
    

To create a JSON module script, given a string source and an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) settings:

1.  Let script be a new [module script](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) that this algorithm will subsequently initialize.
    
2.  Set script's [settings object](https://html.spec.whatwg.org/multipage/webappapis.html#settings-object) to settings.
    
3.  Set script's [base URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-base-url) and [fetch options](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-script-fetch-options) to null.
    
4.  Set script's [parse error](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-parse-error) and [error to rethrow](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-error-to-rethrow) to null.
    
5.  Let result be [ParseJSONModule](https://tc39.es/proposal-json-modules/#sec-parse-json-module)(source).
    
    If this throws an exception, set script's [parse error](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-parse-error) to that exception, and return script.
    
6.  Set script's [record](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-record) to result.
    
7.  Return script.
    

The module type from module request steps, given a [ModuleRequest Record](https://tc39.es/proposal-import-assertions/#sec-modulerequest-record) moduleRequest, are as follows:

1.  Let moduleType be "`javascript`".
    
2.  If moduleRequest.\[\[Assertions\]\] has a [Record](https://tc39.es/ecma262/#sec-list-and-record-specification-type) entry such that entry.\[\[Key\]\] is "`type`", then:
    
    1.  If entry.\[\[Value\]\] is "`javascript`", then set moduleType to null.
        
        This specification uses the "`javascript`" module type internally for [JavaScript module scripts](https://html.spec.whatwg.org/multipage/webappapis.html#javascript-module-script), so this step is needed to prevent modules from being imported using a "`javascript`" type assertion (a null moduleType will cause the [module type allowed](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) check to fail).
        
    2.  Otherwise, set moduleType to entry.\[\[Value\]\].
        
3.  Return moduleType.
    

The module type allowed steps, given a [string](https://infra.spec.whatwg.org/#string) moduleType and an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) settings, are as follows:

1.  If moduleType is not "`javascript`", "`css`", or "`json`", then return false.
    
2.  If moduleType is "`css`" and the `[CSSStyleSheet](https://drafts.csswg.org/cssom/#the-cssstylesheet-interface)` interface is not [exposed](https://webidl.spec.whatwg.org/#dfn-exposed) in settings's [Realm](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object's-realm), then return false.
    
3.  Return true.
    

##### 8.1.4.4 Calling scripts[](https://html.spec.whatwg.org/multipage/webappapis.html#calling-scripts)

To run a classic script given a [classic script](https://html.spec.whatwg.org/multipage/webappapis.html#classic-script) script and an optional boolean rethrow errors (default false):

1.  Let settings be the [settings object](https://html.spec.whatwg.org/multipage/webappapis.html#settings-object) of script.
    
2.  [Check if we can run script](https://html.spec.whatwg.org/multipage/webappapis.html#check-if-we-can-run-script) with settings. If this returns "do not run" then return [NormalCompletion](https://tc39.es/ecma262/#sec-normalcompletion)(empty).
    
3.  [Prepare to run script](https://html.spec.whatwg.org/multipage/webappapis.html#prepare-to-run-script) given settings.
    
4.  Let evaluationStatus be null.
    
5.  If script's [error to rethrow](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-error-to-rethrow) is not null, then set evaluationStatus to Completion { \[\[Type\]\]: throw, \[\[Value\]\]: script's [error to rethrow](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-error-to-rethrow), \[\[Target\]\]: empty }.
    
6.  Otherwise, set evaluationStatus to [ScriptEvaluation](https://tc39.es/ecma262/#sec-runtime-semantics-scriptevaluation)(script's [record](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-record)).
    
    If [ScriptEvaluation](https://tc39.es/ecma262/#sec-runtime-semantics-scriptevaluation) does not complete because the user agent has [aborted the running script](https://html.spec.whatwg.org/multipage/webappapis.html#abort-a-running-script), leave evaluationStatus as null.
    
7.  If evaluationStatus is an [abrupt completion](https://tc39.es/ecma262/#sec-completion-record-specification-type), then:
    
    1.  If rethrow errors is true and script's [muted errors](https://html.spec.whatwg.org/multipage/webappapis.html#muted-errors) is false, then:
        
        1.  [Clean up after running script](https://html.spec.whatwg.org/multipage/webappapis.html#clean-up-after-running-script) with settings.
            
        2.  Rethrow evaluationStatus.\[\[Value\]\].
            
    2.  If rethrow errors is true and script's [muted errors](https://html.spec.whatwg.org/multipage/webappapis.html#muted-errors) is true, then:
        
        1.  [Clean up after running script](https://html.spec.whatwg.org/multipage/webappapis.html#clean-up-after-running-script) with settings.
            
        2.  Throw a ["`NetworkError`"](https://webidl.spec.whatwg.org/#networkerror) `[DOMException](https://webidl.spec.whatwg.org/#dfn-DOMException)`.
            
    3.  Otherwise, rethrow errors is false. Perform the following steps:
        
        1.  [Report the exception](https://html.spec.whatwg.org/multipage/webappapis.html#report-the-exception) given by evaluationStatus.\[\[Value\]\] for script.
            
        2.  [Clean up after running script](https://html.spec.whatwg.org/multipage/webappapis.html#clean-up-after-running-script) with settings.
            
        3.  Return evaluationStatus.
            
8.  [Clean up after running script](https://html.spec.whatwg.org/multipage/webappapis.html#clean-up-after-running-script) with settings.
    
9.  If evaluationStatus is a normal completion, then return evaluationStatus.
    
10.  If we've reached this point, evaluationStatus was left as null because the script was [aborted prematurely](https://html.spec.whatwg.org/multipage/webappapis.html#abort-a-running-script) during evaluation. Return Completion { \[\[Type\]\]: throw, \[\[Value\]\]: a new ["`QuotaExceededError`"](https://webidl.spec.whatwg.org/#quotaexceedederror) `[DOMException](https://webidl.spec.whatwg.org/#dfn-DOMException)`, \[\[Target\]\]: empty }.
    

To run a module script given a [module script](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) script and an optional boolean preventErrorReporting (default false):

1.  Let settings be the [settings object](https://html.spec.whatwg.org/multipage/webappapis.html#settings-object) of script.
    
2.  [Check if we can run script](https://html.spec.whatwg.org/multipage/webappapis.html#check-if-we-can-run-script) with settings. If this returns "do not run", then return a promise resolved with undefined.
    
3.  [Prepare to run script](https://html.spec.whatwg.org/multipage/webappapis.html#prepare-to-run-script) given settings.
    
4.  Let evaluationPromise be null.
    
5.  If script's [error to rethrow](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-error-to-rethrow) is not null, then set evaluationPromise to [a promise rejected with](https://webidl.spec.whatwg.org/#a-promise-rejected-with) script's [error to rethrow](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-error-to-rethrow).
    
6.  Otherwise:
    
    1.  Let record be script's [record](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-record).
        
    2.  Set evaluationPromise to record.[Evaluate](https://tc39.es/ecma262/#sec-moduleevaluation)().
        
        This step will recursively evaluate all of the module's dependencies.
        
        If [Evaluate](https://tc39.es/ecma262/#sec-moduleevaluation) fails to complete as a result of the user agent [aborting the running script](https://html.spec.whatwg.org/multipage/webappapis.html#abort-a-running-script), then set evaluationPromise to [a promise rejected with](https://webidl.spec.whatwg.org/#a-promise-rejected-with) a new ["`QuotaExceededError`"](https://webidl.spec.whatwg.org/#quotaexceedederror) `[DOMException](https://webidl.spec.whatwg.org/#dfn-DOMException)`.
        
7.  If preventErrorReporting is false, then [upon rejection](https://webidl.spec.whatwg.org/#upon-rejection) of evaluationPromise with reason, [report the exception](https://html.spec.whatwg.org/multipage/webappapis.html#report-the-exception) given by reason for script.
    
8.  [Clean up after running script](https://html.spec.whatwg.org/multipage/webappapis.html#clean-up-after-running-script) with settings.
    
9.  Return evaluationPromise.
    

The steps to check if we can run script with an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) settings are as follows. They return either "run" or "do not run".

1.  If the [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global) specified by settings is a `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` object whose `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` object is not [fully active](https://html.spec.whatwg.org/multipage/browsers.html#fully-active), then return "do not run".
    
2.  If [scripting is disabled](https://html.spec.whatwg.org/multipage/webappapis.html#concept-environment-noscript) for settings, then return "do not run".
    
3.  Return "run".
    

The steps to prepare to run script with an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) settings are as follows:

1.  Push settings's [realm execution context](https://html.spec.whatwg.org/multipage/webappapis.html#realm-execution-context) onto the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack); it is now the [running JavaScript execution context](https://tc39.es/ecma262/#running-execution-context).
    
2.  Add settings to the currently running [task](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task)'s [script evaluation environment settings object set](https://html.spec.whatwg.org/multipage/webappapis.html#script-evaluation-environment-settings-object-set).
    

The steps to clean up after running script with an [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) settings are as follows:

1.  Assert: settings's [realm execution context](https://html.spec.whatwg.org/multipage/webappapis.html#realm-execution-context) is the [running JavaScript execution context](https://tc39.es/ecma262/#running-execution-context).
    
2.  Remove settings's [realm execution context](https://html.spec.whatwg.org/multipage/webappapis.html#realm-execution-context) from the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack).
    
3.  If the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack) is now empty, [perform a microtask checkpoint](https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint). (If this runs scripts, these algorithms will be invoked reentrantly.)
    

These algorithms are not invoked by one script directly calling another, but they can be invoked reentrantly in an indirect manner, e.g. if a script dispatches an event which has event listeners registered.

The running script is the [script](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script) in the \[\[HostDefined\]\] field in the ScriptOrModule component of the [running JavaScript execution context](https://tc39.es/ecma262/#running-execution-context).

##### 8.1.4.5 Killing scripts[](https://html.spec.whatwg.org/multipage/webappapis.html#killing-scripts)

Although the JavaScript specification does not account for this possibility, it's sometimes necessary to abort a running script. This causes any [ScriptEvaluation](https://tc39.es/ecma262/#sec-runtime-semantics-scriptevaluation) or [Source Text Module Record](https://tc39.es/ecma262/#sec-source-text-module-records) [Evaluate](https://tc39.es/ecma262/#sec-moduleevaluation) invocations to cease immediately, emptying the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack) without triggering any of the normal mechanisms like `finally` blocks. [\[JAVASCRIPT\]](https://html.spec.whatwg.org/multipage/references.html#refsJAVASCRIPT)

User agents may impose resource limitations on scripts, for example CPU quotas, memory limits, total execution time limits, or bandwidth limitations. When a script exceeds a limit, the user agent may either throw a ["`QuotaExceededError`"](https://webidl.spec.whatwg.org/#quotaexceedederror) `[DOMException](https://webidl.spec.whatwg.org/#dfn-DOMException)`, [abort the script](https://html.spec.whatwg.org/multipage/webappapis.html#abort-a-running-script) without an exception, prompt the user, or throttle script execution.

For example, the following script never terminates. A user agent could, after waiting for a few seconds, prompt the user to either terminate the script or let it continue.

```
<script>
 while (true) { /* loop */ }
</script>
```

User agents are encouraged to allow users to disable scripting whenever the user is prompted either by a script (e.g. using the `[window.alert()](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-alert)` API) or because of a script's actions (e.g. because it has exceeded a time limit).

If scripting is disabled while a script is executing, the script should be terminated immediately.

User agents may allow users to specifically disable scripts just for the purposes of closing a [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context).

For example, the prompt mentioned in the example above could also offer the user with a mechanism to just close the page entirely, without running any `[unload](https://html.spec.whatwg.org/multipage/indices.html#event-unload)` event handlers.

##### 8.1.4.6 Runtime script errors[](https://html.spec.whatwg.org/multipage/webappapis.html#runtime-script-errors)

[reportError](https://developer.mozilla.org/en-US/docs/Web/API/reportError "The reportError() global method may be used to report errors to the console or global event handlers, emulating an uncaught JavaScript exception.")

Support in all current engines.

Firefox93+Safari15.4+Chrome95+

___

Opera81+Edge95+

___

Edge (Legacy)NoInternet ExplorerNo

___

Firefox Android93+Safari iOS15.4+Chrome Android95+WebView Android95+Samsung Internet17.0+Opera Android67+

`self.[reportError](https://html.spec.whatwg.org/multipage/webappapis.html#dom-reporterror)(e)`

Dispatches an `[error](https://html.spec.whatwg.org/multipage/indices.html#event-error)` event at the global object for the given value e, in the same fashion as an unhandled exception.

When the user agent is required to report an error for a particular [script](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script) script with a particular position line:col, using a particular target target, it must run these steps, after which the error is either _handled_ or _not handled_:

1.  If target is [in error reporting mode](https://html.spec.whatwg.org/multipage/webappapis.html#in-error-reporting-mode), then return; the error is _[not handled](https://html.spec.whatwg.org/multipage/webappapis.html#concept-error-nothandled)_.
    
2.  Let target be in error reporting mode.
    
3.  [![(This is a tracking vector.)](https://resources.whatwg.org/tracking-vector.svg)](https://infra.spec.whatwg.org/#tracking-vector "There is a tracking vector here.") Let message be an [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) string describing the error in a helpful manner.
    
4.  Let errorValue be the value that represents the error: in the case of an uncaught exception, that would be the value that was thrown; in the case of a JavaScript error that would be an `Error` object. If there is no corresponding value, then the null value must be used instead.
    
5.  Let urlString be the result of applying the [URL serializer](https://url.spec.whatwg.org/#concept-url-serializer) to the [URL record](https://url.spec.whatwg.org/#concept-url) that corresponds to the resource from which script was obtained.
    
    The resource containing the script will typically be the file from which the `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` was parsed, e.g. for inline `[script](https://html.spec.whatwg.org/multipage/scripting.html#the-script-element)` elements or [event handler content attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-content-attributes); or the JavaScript file that the script was in, for external scripts. Even for dynamically-generated scripts, user agents are strongly encouraged to attempt to keep track of the original source of a script. For example, if an external script uses the `[document.write()](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-write)` API to insert an inline `[script](https://html.spec.whatwg.org/multipage/scripting.html#the-script-element)` element during parsing, the URL of the resource containing the script would ideally be reported as being the external script, and the line number might ideally be reported as the line with the `[document.write()](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-write)` call or where the string passed to that call was first constructed. Naturally, implementing this can be somewhat non-trivial.
    
    User agents are similarly encouraged to keep careful track of the original line numbers, even in the face of `[document.write()](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-write)` calls mutating the document as it is parsed, or [event handler content attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-content-attributes) spanning multiple lines.
    
6.  If script is a [classic script](https://html.spec.whatwg.org/multipage/webappapis.html#classic-script) and script's [muted errors](https://html.spec.whatwg.org/multipage/webappapis.html#muted-errors) is true, then set message to "`Script error.`", urlString to the empty string, line and col to 0, and errorValue to null.
    
7.  Let notHandled be true.
    
8.  If target implements `[EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget)`, then set notHandled to the result of [firing an event](https://dom.spec.whatwg.org/#concept-event-fire) named `[error](https://html.spec.whatwg.org/multipage/indices.html#event-error)` at target, using `[ErrorEvent](https://html.spec.whatwg.org/multipage/webappapis.html#errorevent)`, with the `[cancelable](https://dom.spec.whatwg.org/#dom-event-cancelable)` attribute initialized to true, the `[message](https://html.spec.whatwg.org/multipage/webappapis.html#dom-errorevent-message)` attribute initialized to message, the `[filename](https://html.spec.whatwg.org/multipage/webappapis.html#dom-errorevent-filename)` attribute initialized to urlString, the `[lineno](https://html.spec.whatwg.org/multipage/webappapis.html#dom-errorevent-lineno)` attribute initialized to line, the `[colno](https://html.spec.whatwg.org/multipage/webappapis.html#dom-errorevent-colno)` attribute initialized to col, and the `[error](https://html.spec.whatwg.org/multipage/webappapis.html#dom-errorevent-error)` attribute initialized to errorValue.
    
9.  Let target no longer be [in error reporting mode](https://html.spec.whatwg.org/multipage/webappapis.html#in-error-reporting-mode).
    
10.  If notHandled is false, then the error is _[handled](https://html.spec.whatwg.org/multipage/webappapis.html#concept-error-handled)_. Otherwise, the error is _[not handled](https://html.spec.whatwg.org/multipage/webappapis.html#concept-error-nothandled)_.
    
    Returning true in an event handler cancels the event per [the event handler processing algorithm](https://html.spec.whatwg.org/multipage/webappapis.html#the-event-handler-processing-algorithm).
    

When the user agent is to report an exception E, the user agent must [report the error](https://html.spec.whatwg.org/multipage/webappapis.html#report-the-error) for the relevant [script](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script), with the problematic position (line number and column number) in the resource containing the script, using the [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global) specified by the script's [settings object](https://html.spec.whatwg.org/multipage/webappapis.html#settings-object) as the target. If the error is still _[not handled](https://html.spec.whatwg.org/multipage/webappapis.html#concept-error-nothandled)_ after this, then the error may be reported to a developer console.

The existence of both [report an error](https://html.spec.whatwg.org/multipage/webappapis.html#report-the-error) and [report an exception](https://html.spec.whatwg.org/multipage/webappapis.html#report-the-exception) is confusing, and both algorithms have known problems. You can track future cleanup in this area in [issue #958](https://github.com/whatwg/html/issues/958).

The `reportError(e)` method steps are to [report the exception](https://html.spec.whatwg.org/multipage/webappapis.html#report-the-exception) e.

[ErrorEvent](https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent "The ErrorEvent interface represents events providing information related to errors in scripts or in files.")

Support in all current engines.

Firefox27+Safari6+Chrome10+

___

Opera11+Edge79+

___

Edge (Legacy)12+Internet Explorer10+

___

Firefox Android27+Safari iOS6+Chrome Android18+WebView Android4.4+Samsung Internet1.0+Opera Android11+

The `[ErrorEvent](https://html.spec.whatwg.org/multipage/webappapis.html#errorevent)` interface is defined as follows:

```
[Exposed=*]
interface ErrorEvent : Event {
  constructor(DOMString type, optional ErrorEventInit eventInitDict = {});

  readonly attribute DOMString message;
  readonly attribute USVString filename;
  readonly attribute unsigned long lineno;
  readonly attribute unsigned long colno;
  readonly attribute any error;
};

dictionary ErrorEventInit : EventInit {
  DOMString message = "";
  USVString filename = "";
  unsigned long lineno = 0;
  unsigned long colno = 0;
  any error = null;
};
```

The `message` attribute must return the value it was initialized to. It represents the error message.

The `filename` attribute must return the value it was initialized to. It represents the [URL](https://url.spec.whatwg.org/#concept-url) of the script in which the error originally occurred.

The `lineno` attribute must return the value it was initialized to. It represents the line number where the error occurred in the script.

The `colno` attribute must return the value it was initialized to. It represents the column number where the error occurred in the script.

The `error` attribute must return the value it was initialized to. Where appropriate, it is set to the object representing the error (e.g., the exception object in the case of an uncaught DOM exception).

##### 8.1.4.7 Unhandled promise rejections[](https://html.spec.whatwg.org/multipage/webappapis.html#unhandled-promise-rejections)

[Window/rejectionhandled\_event](https://developer.mozilla.org/en-US/docs/Web/API/Window/rejectionhandled_event "The rejectionhandled event is sent to the script's global scope (usually window but also Worker) whenever a JavaScript Promise is rejected but after the promise rejection has been handled.")

Support in all current engines.

Firefox69+Safari11+Chrome49+

___

Opera36+Edge79+

___

Edge (Legacy)NoInternet ExplorerNo

___

Firefox Android79+Safari iOS11.3+Chrome Android49+WebView Android49+Samsung Internet5.0+Opera Android36+

In addition to synchronous [runtime script errors](https://html.spec.whatwg.org/multipage/webappapis.html#runtime-script-errors), scripts may experience asynchronous promise rejections, tracked via the `[unhandledrejection](https://html.spec.whatwg.org/multipage/indices.html#event-unhandledrejection)` and `[rejectionhandled](https://html.spec.whatwg.org/multipage/indices.html#event-rejectionhandled)` events. Tracking these rejections is done via the [HostPromiseRejectionTracker](https://html.spec.whatwg.org/multipage/webappapis.html#the-hostpromiserejectiontracker-implementation) abstract operation, but reporting them is defined here.

To notify about rejected promises on a given [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) settings object:

1.  Let list be a copy of settings object's [about-to-be-notified rejected promises list](https://html.spec.whatwg.org/multipage/webappapis.html#about-to-be-notified-rejected-promises-list).
    
2.  If list is empty, return.
    
3.  Clear settings object's [about-to-be-notified rejected promises list](https://html.spec.whatwg.org/multipage/webappapis.html#about-to-be-notified-rejected-promises-list).
    
4.  Let global be settings object's [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global).
    
5.  [Queue a global task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-global-task) on the [DOM manipulation task source](https://html.spec.whatwg.org/multipage/webappapis.html#dom-manipulation-task-source) given global to run the following substep:
    
    1.  For each promise p in list:
        
        1.  If p's \[\[PromiseIsHandled\]\] internal slot is true, continue to the next iteration of the loop.
            
        2.  Let notHandled be the result of [firing an event](https://dom.spec.whatwg.org/#concept-event-fire) named `[unhandledrejection](https://html.spec.whatwg.org/multipage/indices.html#event-unhandledrejection)` at global, using `[PromiseRejectionEvent](https://html.spec.whatwg.org/multipage/webappapis.html#promiserejectionevent)`, with the `[cancelable](https://dom.spec.whatwg.org/#dom-event-cancelable)` attribute initialized to true, the `[promise](https://html.spec.whatwg.org/multipage/webappapis.html#dom-promiserejectionevent-promise)` attribute initialized to p, and the `[reason](https://html.spec.whatwg.org/multipage/webappapis.html#dom-promiserejectionevent-reason)` attribute initialized to the value of p's \[\[PromiseResult\]\] internal slot.
            
        3.  If notHandled is false, then the promise rejection is _[handled](https://html.spec.whatwg.org/multipage/webappapis.html#concept-promise-rejection-handled)_. Otherwise, the promise rejection is _[not handled](https://html.spec.whatwg.org/multipage/webappapis.html#concept-promise-rejection-nothandled)_.
            
        4.  If p's \[\[PromiseIsHandled\]\] internal slot is false, add p to settings object's [outstanding rejected promises weak set](https://html.spec.whatwg.org/multipage/webappapis.html#outstanding-rejected-promises-weak-set).
            

This algorithm results in promise rejections being marked as _handled_ or _not handled_. These concepts parallel _[handled](https://html.spec.whatwg.org/multipage/webappapis.html#concept-error-handled)_ and _[not handled](https://html.spec.whatwg.org/multipage/webappapis.html#concept-error-nothandled)_ script errors. If a rejection is still _[not handled](https://html.spec.whatwg.org/multipage/webappapis.html#concept-promise-rejection-nothandled)_ after this, then the rejection may be reported to a developer console.

[PromiseRejectionEvent](https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent "The PromiseRejectionEvent interface represents events which are sent to the global script context when JavaScript Promises are rejected. These events are particularly useful for telemetry and debugging purposes.")

Support in all current engines.

Firefox69+Safari11+Chrome49+

___

Opera36+Edge79+

___

Edge (Legacy)NoInternet ExplorerNo

___

Firefox Android79+Safari iOS11.3+Chrome Android49+WebView Android49+Samsung Internet5.0+Opera Android36+

The `[PromiseRejectionEvent](https://html.spec.whatwg.org/multipage/webappapis.html#promiserejectionevent)` interface is defined as follows:

```
[Exposed=*]
interface PromiseRejectionEvent : Event {
  constructor(DOMString type, PromiseRejectionEventInit eventInitDict);

  readonly attribute Promise<any> promise;
  readonly attribute any reason;
};

dictionary PromiseRejectionEventInit : EventInit {
  required Promise<any> promise;
  any reason;
};
```

[PromiseRejectionEvent/promise](https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent/promise "The PromiseRejectionEvent interface's promise read-only property indicates the JavaScript Promise which was rejected. You can examine the event's PromiseRejectionEvent.reason property to learn why the promise was rejected.")

Support in all current engines.

Firefox69+Safari11+Chrome49+

___

Opera36+Edge79+

___

Edge (Legacy)NoInternet ExplorerNo

___

Firefox Android79+Safari iOS11.3+Chrome Android49+WebView Android49+Samsung Internet5.0+Opera Android36+

The `promise` attribute must return the value it was initialized to. It represents the promise which this notification is about.

[PromiseRejectionEvent/reason](https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent/reason "The PromiseRejectionEvent reason read-only property is any JavaScript value or Object which provides the reason passed into Promise.reject(). This in theory provides information about why the promise was rejected.")

Support in all current engines.

Firefox69+Safari11+Chrome49+

___

Opera36+Edge79+

___

Edge (Legacy)NoInternet ExplorerNo

___

Firefox Android79+Safari iOS11.3+Chrome Android49+WebView Android49+Samsung Internet5.0+Opera Android36+

The `reason` attribute must return the value it was initialized to. It represents the rejection reason for the promise.

#### 8.1.5 JavaScript specification host hooks[](https://html.spec.whatwg.org/multipage/webappapis.html#javascript-specification-host-hooks)

The JavaScript specification contains a number of [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) abstract operations, that vary depending on the host environment. This section defines them for user agent hosts.

##### 8.1.5.1 HostEnsureCanCompileStrings(realm)[](https://html.spec.whatwg.org/multipage/webappapis.html#hostensurecancompilestrings(realm))

JavaScript contains an [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) [HostEnsureCanCompileStrings](https://tc39.es/ecma262/#sec-hostensurecancompilestrings)(realm) abstract operation. User agents must use the following implementation: [\[JAVASCRIPT\]](https://html.spec.whatwg.org/multipage/references.html#refsJAVASCRIPT)

1.  Perform ? [EnsureCSPDoesNotBlockStringCompilation](https://w3c.github.io/webappsec-csp/#can-compile-strings)(realm). [\[CSP\]](https://html.spec.whatwg.org/multipage/references.html#refsCSP)
    

##### 8.1.5.2 HostPromiseRejectionTracker(promise, operation)[](https://html.spec.whatwg.org/multipage/webappapis.html#the-hostpromiserejectiontracker-implementation)

JavaScript contains an [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) [HostPromiseRejectionTracker](https://tc39.es/ecma262/#sec-host-promise-rejection-tracker)(promise, operation) abstract operation. User agents must use the following implementation: [\[JAVASCRIPT\]](https://html.spec.whatwg.org/multipage/references.html#refsJAVASCRIPT)

1.  Let script be the [running script](https://html.spec.whatwg.org/multipage/webappapis.html#running-script).
    
2.  If script is a [classic script](https://html.spec.whatwg.org/multipage/webappapis.html#classic-script) and script's [muted errors](https://html.spec.whatwg.org/multipage/webappapis.html#muted-errors) is true, terminate these steps.
    
3.  Let settings object be script's [settings object](https://html.spec.whatwg.org/multipage/webappapis.html#settings-object).
    
4.  If operation is `"reject"`,
    
    1.  Add promise to settings object's [about-to-be-notified rejected promises list](https://html.spec.whatwg.org/multipage/webappapis.html#about-to-be-notified-rejected-promises-list).
        
5.  If operation is `"handle"`,
    
    1.  If settings object's [about-to-be-notified rejected promises list](https://html.spec.whatwg.org/multipage/webappapis.html#about-to-be-notified-rejected-promises-list) contains promise, then remove promise from that list and return.
        
    2.  If settings object's [outstanding rejected promises weak set](https://html.spec.whatwg.org/multipage/webappapis.html#outstanding-rejected-promises-weak-set) does not contain promise, then return.
        
    3.  Remove promise from settings object's [outstanding rejected promises weak set](https://html.spec.whatwg.org/multipage/webappapis.html#outstanding-rejected-promises-weak-set).
        
    4.  Let global be settings object's [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global).
        
    5.  [Queue a global task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-global-task) on the [DOM manipulation task source](https://html.spec.whatwg.org/multipage/webappapis.html#dom-manipulation-task-source) given global to [fire an event](https://dom.spec.whatwg.org/#concept-event-fire) named `[rejectionhandled](https://html.spec.whatwg.org/multipage/indices.html#event-rejectionhandled)` at global, using `[PromiseRejectionEvent](https://html.spec.whatwg.org/multipage/webappapis.html#promiserejectionevent)`, with the `[promise](https://html.spec.whatwg.org/multipage/webappapis.html#dom-promiserejectionevent-promise)` attribute initialized to promise, and the `[reason](https://html.spec.whatwg.org/multipage/webappapis.html#dom-promiserejectionevent-reason)` attribute initialized to the value of promise's \[\[PromiseResult\]\] internal slot.
        

##### 8.1.5.3 Job-related host hooks[](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-javascript-jobs)

The JavaScript specification defines Jobs to be scheduled and run later by the host, as well as [JobCallback Records](https://tc39.es/ecma262/#sec-jobcallback-records) which encapsulate JavaScript functions that are called as part of jobs. The JavaScript specification contains a number of [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) abstract operations that lets the host define how jobs are scheduled and how JobCallbacks are handled. HTML uses these abstract operations to track the [incumbent settings object](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent-settings-object) in promises and `[FinalizationRegistry](https://tc39.es/ecma262/#sec-finalization-registry-objects)` callbacks by saving and restoring the [incumbent settings object](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent-settings-object) and a [JavaScript execution context](https://tc39.es/ecma262/#sec-execution-contexts) for the [active script](https://html.spec.whatwg.org/multipage/webappapis.html#active-script) in JobCallbacks. This section defines them for user agent hosts.

###### 8.1.5.3.1 HostCallJobCallback(callback, V, argumentsList)[](https://html.spec.whatwg.org/multipage/webappapis.html#hostcalljobcallback)

JavaScript contains an [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) [HostCallJobCallback](https://tc39.es/ecma262/#sec-hostcalljobcallback)(callback, V, argumentsList) abstract operation to let hosts restore state when invoking JavaScript callbacks from inside tasks. User agents must use the following implementation: [\[JAVASCRIPT\]](https://html.spec.whatwg.org/multipage/references.html#refsJAVASCRIPT)

1.  Let incumbent settings be callback.\[\[HostDefined\]\].\[\[IncumbentSettings\]\].
    
2.  Let script execution context be callback.\[\[HostDefined\]\].\[\[ActiveScriptContext\]\].
    
3.  [Prepare to run a callback](https://html.spec.whatwg.org/multipage/webappapis.html#prepare-to-run-a-callback) with incumbent settings.
    
    This affects the [incumbent](https://html.spec.whatwg.org/multipage/webappapis.html#concept-incumbent-everything) concept while the callback runs.
    
4.  If script execution context is not null, then [push](https://infra.spec.whatwg.org/#stack-push) script execution context onto the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack).
    
    This affects the [active script](https://html.spec.whatwg.org/multipage/webappapis.html#active-script) while the callback runs.
    
5.  Let result be [Call](https://tc39.es/ecma262/#sec-call)(callback.\[\[Callback\]\], V, argumentsList).
    
6.  If script execution context is not null, then [pop](https://infra.spec.whatwg.org/#stack-pop) script execution context from the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack).
    
7.  [Clean up after running a callback](https://html.spec.whatwg.org/multipage/webappapis.html#clean-up-after-running-a-callback) with incumbent settings.
    
8.  Return result.
    

###### 8.1.5.3.2 HostEnqueueFinalizationRegistryCleanupJob(finalizationRegistry)[](https://html.spec.whatwg.org/multipage/webappapis.html#hostenqueuefinalizationregistrycleanupjob)

JavaScript has the ability to register objects with `[FinalizationRegistry](https://tc39.es/ecma262/#sec-finalization-registry-objects)` objects, in order to schedule a cleanup action if they are found to be garbage collected. The JavaScript specification contains an [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) [HostEnqueueFinalizationRegistryCleanupJob](https://tc39.es/ecma262/#sec-host-cleanup-finalization-registry)(finalizationRegistry) abstract operation to schedule the cleanup action.

The timing and occurrence of cleanup work is [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) in the JavaScript specification. User agents might differ in when and whether an object is garbage collected, affecting both whether the return value of the `[WeakRef.prototype.deref()](https://tc39.es/ecma262/#sec-weak-ref.prototype.deref)` method is undefined, and whether `[FinalizationRegistry](https://tc39.es/ecma262/#sec-finalization-registry-objects)` cleanup callbacks occur. There are well-known cases in popular web browsers where objects are not accessible to JavaScript, but they remain retained by the garbage collector indefinitely. HTML clears kept-alive `[WeakRef](https://tc39.es/ecma262/#sec-weak-ref-objects)` objects in the [perform a microtask checkpoint](https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint) algorithm. Authors would be best off not depending on the timing details of garbage collection implementations.

Cleanup actions do not take place interspersed with synchronous JavaScript execution, but rather happen in queued [tasks](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task). User agents must use the following implementation: [\[JAVASCRIPT\]](https://html.spec.whatwg.org/multipage/references.html#refsJAVASCRIPT)

1.  Let global be finalizationRegistry.\[\[Realm\]\]'s [global object](https://html.spec.whatwg.org/multipage/webappapis.html#global-object).
    
2.  [Queue a global task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-global-task) on the JavaScript engine task source given global to perform the following steps:
    
    1.  Let entry be finalizationRegistry.\[\[CleanupCallback\]\].\[\[Callback\]\].\[\[Realm\]\]'s [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-realm-settings-object).
        
    2.  [Check if we can run script](https://html.spec.whatwg.org/multipage/webappapis.html#check-if-we-can-run-script) with entry. If this returns "do not run", then return.
        
    3.  [Prepare to run script](https://html.spec.whatwg.org/multipage/webappapis.html#prepare-to-run-script) with entry.
        
        This affects the [entry](https://html.spec.whatwg.org/multipage/webappapis.html#concept-entry-everything) concept while the cleanup callback runs.
        
    4.  Let result be the result of performing [CleanupFinalizationRegistry](https://tc39.es/ecma262/#sec-cleanup-finalization-registry)(finalizationRegistry).
        
    5.  [Clean up after running script](https://html.spec.whatwg.org/multipage/webappapis.html#clean-up-after-running-script) with entry.
        
    6.  If result is an [abrupt completion](https://tc39.es/ecma262/#sec-completion-record-specification-type), then [report the exception](https://html.spec.whatwg.org/multipage/webappapis.html#report-the-exception) given by result.\[\[Value\]\].
        

###### 8.1.5.3.3 HostEnqueuePromiseJob(job, realm)[](https://html.spec.whatwg.org/multipage/webappapis.html#hostenqueuepromisejob)

JavaScript contains an [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) [HostEnqueuePromiseJob](https://tc39.es/ecma262/#sec-hostenqueuepromisejob)(job, realm) abstract operation to schedule Promise-related operations. HTML schedules these operations in the microtask queue. User agents must use the following implementation: [\[JAVASCRIPT\]](https://html.spec.whatwg.org/multipage/references.html#refsJAVASCRIPT)

1.  If realm is not null, then let job settings be the [settings object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-realm-settings-object) for realm. Otherwise, let job settings be null.
    
    If realm is not null, it is the [Realm](https://tc39.es/ecma262/#sec-code-realms) of the author code that will run. When job is returned by [NewPromiseReactionJob](https://tc39.es/ecma262/#sec-newpromisereactionjob), it is the realm of the promise's handler function. When job is returned by [NewPromiseResolveThenableJob](https://tc39.es/ecma262/#sec-newpromiseresolvethenablejob), it is the realm of the `then` function.
    
    If realm is null, either no author code will run or author code is guaranteed to throw. For the former, the author may not have passed in code to run, such as in `promise.then(null, null)`. For the latter, it is because a revoked Proxy was passed. In both cases, all the steps below that would otherwise use job settings get skipped.
    
2.  [Queue a microtask](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-microtask) on the [surrounding agent](https://tc39.es/ecma262/#surrounding-agent)'s [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#concept-agent-event-loop) to perform the following steps:
    
    1.  If job settings is not null, then [check if we can run script](https://html.spec.whatwg.org/multipage/webappapis.html#check-if-we-can-run-script) with job settings. If this returns "do not run" then return.
        
    2.  If job settings is not null, then [prepare to run script](https://html.spec.whatwg.org/multipage/webappapis.html#prepare-to-run-script) with job settings.
        
        This affects the [entry](https://html.spec.whatwg.org/multipage/webappapis.html#concept-entry-everything) concept while the job runs.
        
    3.  Let result be job().
        
        job is an [abstract closure](https://tc39.es/ecma262/#sec-abstract-closure) returned by [NewPromiseReactionJob](https://tc39.es/ecma262/#sec-newpromisereactionjob) or [NewPromiseResolveThenableJob](https://tc39.es/ecma262/#sec-newpromiseresolvethenablejob). The promise's handler function when job is returned by [NewPromiseReactionJob](https://tc39.es/ecma262/#sec-newpromisereactionjob), and the `then` function when job is returned by [NewPromiseResolveThenableJob](https://tc39.es/ecma262/#sec-newpromiseresolvethenablejob), are wrapped in [JobCallback Records](https://tc39.es/ecma262/#sec-jobcallback-records). HTML saves the [incumbent settings object](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent-settings-object) and a [JavaScript execution context](https://tc39.es/ecma262/#sec-execution-contexts) for to the [active script](https://html.spec.whatwg.org/multipage/webappapis.html#active-script) in [HostMakeJobCallback](https://html.spec.whatwg.org/multipage/webappapis.html#hostmakejobcallback) and restores them in [HostCallJobCallback](https://html.spec.whatwg.org/multipage/webappapis.html#hostcalljobcallback).
        
    4.  If job settings is not null, then [clean up after running script](https://html.spec.whatwg.org/multipage/webappapis.html#clean-up-after-running-script) with job settings.
        
    5.  If result is an [abrupt completion](https://tc39.es/ecma262/#sec-completion-record-specification-type), then [report the exception](https://html.spec.whatwg.org/multipage/webappapis.html#report-the-exception) given by result.\[\[Value\]\].
        

###### 8.1.5.3.4 HostMakeJobCallback(callable)[](https://html.spec.whatwg.org/multipage/webappapis.html#hostmakejobcallback)

JavaScript contains an [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) [HostMakeJobCallback](https://tc39.es/ecma262/#sec-hostmakejobcallback)(callable) abstract operation to let hosts attach state to JavaScript callbacks that are called from inside [task](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task)s. User agents must use the following implementation: [\[JAVASCRIPT\]](https://html.spec.whatwg.org/multipage/references.html#refsJAVASCRIPT)

1.  Let incumbent settings be the [incumbent settings object](https://html.spec.whatwg.org/multipage/webappapis.html#incumbent-settings-object).
    
2.  Let active script be the [active script](https://html.spec.whatwg.org/multipage/webappapis.html#active-script).
    
3.  Let script execution context be null.
    
4.  If active script is not null, set script execution context to a new [JavaScript execution context](https://tc39.es/ecma262/#sec-execution-contexts), with its Function field set to null, its Realm field set to active script's [settings object](https://html.spec.whatwg.org/multipage/webappapis.html#settings-object)'s [Realm](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object's-realm), and its ScriptOrModule set to active script's [record](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-record).
    
    As seen below, this is used in order to propagate the current [active script](https://html.spec.whatwg.org/multipage/webappapis.html#active-script) forward to the time when the job callback is invoked.
    
    A case where active script is non-null, and saving it in this way is useful, is the following:
    
    ```
    Promise.resolve('import(`./example.mjs`)').then(eval);
    ```
    
    Without this step (and the steps that use it in [HostCallJobCallback](https://html.spec.whatwg.org/multipage/webappapis.html#hostcalljobcallback)), there would be no [active script](https://html.spec.whatwg.org/multipage/webappapis.html#active-script) when the `[import()](https://tc39.es/ecma262/#sec-import-calls)` expression is evaluated, since `[eval()](https://tc39.es/ecma262/#sec-eval-x)` is a built-in function that does not originate from any particular [script](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script).
    
    With this step in place, the active script is propagated from the above code into the job, allowing `[import()](https://tc39.es/ecma262/#sec-import-calls)` to use the original script's [base URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-base-url) appropriately.
    
    active script can be null if the user clicks on the following button:
    
    ```
    <button onclick="Promise.resolve('import(`./example.mjs`)').then(eval)">Click me</button>
    ```
    
    In this case, the JavaScript function for the [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) will be created by the [get the current value of the event handler](https://html.spec.whatwg.org/multipage/webappapis.html#getting-the-current-value-of-the-event-handler) algorithm, which creates a function with null \[\[ScriptOrModule\]\] value. Thus, when the promise machinery calls [HostMakeJobCallback](https://html.spec.whatwg.org/multipage/webappapis.html#hostmakejobcallback), there will be no [active script](https://html.spec.whatwg.org/multipage/webappapis.html#active-script) to pass along.
    
    As a consequence, this means that when the `[import()](https://tc39.es/ecma262/#sec-import-calls)` expression is evaluated, there will still be no [active script](https://html.spec.whatwg.org/multipage/webappapis.html#active-script). Fortunately that is handled by our implementations of [HostResolveImportedModule](https://html.spec.whatwg.org/multipage/webappapis.html#hostresolveimportedmodule(referencingscriptormodule,-modulerequest)) and [HostImportModuleDynamically](https://html.spec.whatwg.org/multipage/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-modulerequest,-promisecapability)), by falling back to using the [current settings object](https://html.spec.whatwg.org/multipage/webappapis.html#current-settings-object)'s [API base URL](https://html.spec.whatwg.org/multipage/webappapis.html#api-base-url).
    
5.  Return the [JobCallback Record](https://tc39.es/ecma262/#sec-jobcallback-records) { \[\[Callback\]\]: callable, \[\[HostDefined\]\]: { \[\[IncumbentSettings\]\]: incumbent settings, \[\[ActiveScriptContext\]\]: script execution context } }.
    

##### 8.1.5.4 Module-related host hooks[](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-module-system)

The JavaScript specification defines a syntax for modules, as well as some host-agnostic parts of their processing model. This specification defines the rest of their processing model: how the module system is bootstrapped, via the `[script](https://html.spec.whatwg.org/multipage/scripting.html#the-script-element)` element with `[type](https://html.spec.whatwg.org/multipage/scripting.html#attr-script-type)` attribute set to "`module`", and how modules are fetched, resolved, and executed. [\[JAVASCRIPT\]](https://html.spec.whatwg.org/multipage/references.html#refsJAVASCRIPT)

Although the JavaScript specification speaks in terms of "scripts" versus "modules", in general this specification speaks in terms of [classic scripts](https://html.spec.whatwg.org/multipage/webappapis.html#classic-script) versus [module scripts](https://html.spec.whatwg.org/multipage/webappapis.html#module-script), since both of them use the `[script](https://html.spec.whatwg.org/multipage/scripting.html#the-script-element)` element.

`modulePromise = [import(specifier)](https://tc39.es/ecma262/#sec-import-calls)`

Returns a promise for the module namespace object for the [module script](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) identified by specifier. This allows dynamic importing of module scripts at runtime, instead of statically using the `import` statement form. The specifier will be [resolved](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) relative to the [active script](https://html.spec.whatwg.org/multipage/webappapis.html#active-script)'s [base URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-base-url).

The returned promise will be rejected if an invalid specifier is given, or if a failure is encountered while [fetching](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-an-import()-module-script-graph) or [evaluating](https://html.spec.whatwg.org/multipage/webappapis.html#run-a-module-script) the resulting module graph.

This syntax can be used inside both [classic](https://html.spec.whatwg.org/multipage/webappapis.html#classic-script) and [module scripts](https://html.spec.whatwg.org/multipage/webappapis.html#module-script). It thus provides a bridge into the module-script world, from the classic-script world.

`url = [import.meta](https://tc39.es/ecma262/#sec-meta-properties) .url`

Returns the [active module script](https://html.spec.whatwg.org/multipage/webappapis.html#active-script)'s [base URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-base-url).

This syntax can only be used inside [module scripts](https://html.spec.whatwg.org/multipage/webappapis.html#module-script).

A module map is a [map](https://infra.spec.whatwg.org/#ordered-map) keyed by [tuples](https://infra.spec.whatwg.org/#tuple) consisting of a [URL record](https://url.spec.whatwg.org/#concept-url) and a [string](https://infra.spec.whatwg.org/#string). The [URL record](https://url.spec.whatwg.org/#concept-url) is the [request URL](https://fetch.spec.whatwg.org/#concept-request-url) at which the module was fetched, and the [string](https://infra.spec.whatwg.org/#string) indicates the type of the module (e.g. "`javascript`"). The [module map](https://html.spec.whatwg.org/multipage/webappapis.html#module-map)'s values are either a [module script](https://html.spec.whatwg.org/multipage/webappapis.html#module-script), null (used to represent failed fetches), or a placeholder value "`fetching`". [Module maps](https://html.spec.whatwg.org/multipage/webappapis.html#module-map) are used to ensure that imported module scripts are only fetched, parsed, and evaluated once per `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` or [worker](https://html.spec.whatwg.org/multipage/workers.html#workers).

Since [module maps](https://html.spec.whatwg.org/multipage/webappapis.html#module-map) are keyed by (URL, module type), the following code will create three separate entries in the [module map](https://html.spec.whatwg.org/multipage/webappapis.html#module-map), since it results in three different (URL, module type) [tuples](https://infra.spec.whatwg.org/#tuple) (all with "`javascript`" type):

```
import "https://example.com/module.mjs";
import "https://example.com/module.mjs#map-buster";
import "https://example.com/module.mjs?debug=true";
```

That is, URL [queries](https://url.spec.whatwg.org/#concept-url-query) and [fragments](https://url.spec.whatwg.org/#concept-url-fragment) can be varied to create distinct entries in the [module map](https://html.spec.whatwg.org/multipage/webappapis.html#module-map); they are not ignored. Thus, three separate fetches and three separate module evaluations will be performed.

In contrast, the following code would only create a single entry in the [module map](https://html.spec.whatwg.org/multipage/webappapis.html#module-map), since after applying the [URL parser](https://url.spec.whatwg.org/#concept-url-parser) to these inputs, the resulting [URL records](https://url.spec.whatwg.org/#concept-url) are equal:

```
import "https://example.com/module2.mjs";
import "https:example.com/module2.mjs";
import "https://///example.com\\module2.mjs";
import "https://example.com/foo/../module2.mjs";
```

So in this second example, only one fetch and one module evaluation will occur.

Note that this behavior is the same as how [shared workers](https://html.spec.whatwg.org/multipage/workers.html#sharedworker) are keyed by their parsed [constructor url](https://html.spec.whatwg.org/multipage/workers.html#concept-sharedworkerglobalscope-constructor-url).

Since module type is also part of the [module map](https://html.spec.whatwg.org/multipage/webappapis.html#module-map) key, the following code will create two separate entries in the [module map](https://html.spec.whatwg.org/multipage/webappapis.html#module-map) (the type is "`javascript`" for the first, and "`css`" for the second):

```
<script type=module>
  import "https://example.com/module";
</script>
<script type=module>
  import "https://example.com/module" assert { type: "css" };
</script>
```

This can result in two separate fetches and two separate module evaluations being performed. This is a [willful violation](https://html.spec.whatwg.org/multipage/introduction.html#willful-violation) of a constraint recommended (but not required) by the import assertions specification stating that each call to [HostResolveImportedModule](https://html.spec.whatwg.org/multipage/webappapis.html#hostresolveimportedmodule(referencingscriptormodule,-modulerequest)) with the same (referencingScriptOrModule, moduleRequest.\[\[Specifier\]\]) pair must return the same [Module Record](https://tc39.es/ecma262/#sec-source-text-module-records). [\[JSIMPORTASSERTIONS\]](https://html.spec.whatwg.org/multipage/references.html#refsJSIMPORTASSERTIONS)

In practice, due to the as-yet-unspecified memory cache (see issue [#6110](https://github.com/whatwg/html/issues/6110)) the resource may only be fetched once in WebKit and Blink-based browsers. Additionally, as long as all module types are mutually exclusive, the module type check in [fetch a single module script](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-single-module-script) will fail for at least one of the imports, so at most one module evaluation will occur.

The purpose of including the type in the [module map](https://html.spec.whatwg.org/multipage/webappapis.html#module-map) key is so that an import with the wrong type assertion does not prevent a different import of the same specifier but with the correct type from succeeding.

JavaScript module scripts are the default import type when importing from another JavaScript module; that is, when an `import` statement lacks a `type` import assertion the imported module script's type will be JavaScript. Attempting to import a JavaScript resource using an `import` statement with a `type` import assertion will fail:

```
<script type="module">
    // All of the following will fail, assuming that the imported .mjs files are served with a
    // JavaScript MIME type. JavaScript module scripts are the default and cannot be imported with
    // any import type assertion.
    import foo from "./foo.mjs" assert { type: "javascript" };
    import foo2 from "./foo2.mjs" assert { type: "js" };
    import foo3 from "./foo3.mjs" assert { type: "" };
    await import("./foo4.mjs", { assert: { type: null } });
    await import("./foo5.mjs", { assert: { type: undefined } });
</script>
```

To resolve a module specifier given a [URL](https://url.spec.whatwg.org/#concept-url) base URL and a [string](https://infra.spec.whatwg.org/#string) specifier, perform the following steps. It will return either a [URL record](https://url.spec.whatwg.org/#concept-url) or failure.

1.  Apply the [URL parser](https://url.spec.whatwg.org/#concept-url-parser) to specifier. If the result is not failure, return the result.
    
2.  If specifier does not start with the character U+002F SOLIDUS (`/`), the two-character sequence U+002E FULL STOP, U+002F SOLIDUS (`./`), or the three-character sequence U+002E FULL STOP, U+002E FULL STOP, U+002F SOLIDUS (`../`), return failure.
    
    This restriction is in place so that in the future we can allow custom module loaders to give special meaning to "bare" import specifiers, like `import "jquery"` or `import "web/crypto"`. For now any such imports will fail, instead of being treated as relative URLs.
    
3.  Return the result of applying the [URL parser](https://url.spec.whatwg.org/#concept-url-parser) to specifier with base URL.
    

The following are valid module specifiers according to the above algorithm:

-   `https://example.com/apples.mjs`
-   `http:example.com\pears.js` (becomes `http://example.com/pears.js` as step 1 parses with no base URL)
-   `//example.com/bananas`
-   `./strawberries.mjs.cgi`
-   `../lychees`
-   `/limes.jsx`
-   `data:text/javascript,export default 'grapes';`
-   `blob:https://whatwg.org/d0360e2f-caee-469f-9a2f-87d5b0456f6f`

The following are valid module specifiers according to the above algorithm, but will invariably cause failures when they are [fetched](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-single-module-script):

-   `javascript:export default 'artichokes';`
-   `data:text/plain,export default 'kale';`
-   `about:legumes`
-   `wss://example.com/celery`

The following are not valid module specifiers according to the above algorithm:

-   `https://eggplant:b/c`
-   `pumpkins.js`
-   `.tomato`
-   `..zucchini.mjs`
-   `.\yam.es`

###### 8.1.5.4.1 HostGetImportMetaProperties(moduleRecord)[](https://html.spec.whatwg.org/multipage/webappapis.html#hostgetimportmetaproperties)

[Reference/Statements/import.meta](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import.meta "The import.meta object exposes context-specific metadata to a JavaScript module. It contains information about the module, like the module's URL.")

Support in all current engines.

Firefox62+Safari11.1+Chrome64+

___

Opera51+Edge79+

___

Edge (Legacy)NoInternet ExplorerNo

___

Firefox Android62+Safari iOS12+Chrome Android64+WebView Android64+Samsung Internet9.0+Opera Android47+

JavaScript contains an [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) [HostGetImportMetaProperties](https://tc39.es/ecma262/#sec-hostgetimportmetaproperties) abstract operation. User agents must use the following implementation: [\[JAVASCRIPT\]](https://html.spec.whatwg.org/multipage/references.html#refsJAVASCRIPT)

1.  Let module script be moduleRecord.\[\[HostDefined\]\].
    
2.  Assert: module script's [base URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-base-url) is not null, as module script is a [JavaScript module script](https://html.spec.whatwg.org/multipage/webappapis.html#javascript-module-script).
    
3.  Let urlString be module script's [base URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-base-url), [serialized](https://url.spec.whatwg.org/#concept-url-serializer).
    
4.  Return « Record { \[\[Key\]\]: "url", \[\[Value\]\]: urlString } ».
    

###### 8.1.5.4.2 HostImportModuleDynamically(referencingScriptOrModule, moduleRequest, promiseCapability)[](https://html.spec.whatwg.org/multipage/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-modulerequest,-promisecapability))

JavaScript contains an [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) [HostImportModuleDynamically](https://tc39.es/proposal-dynamic-import/#sec-hostimportmoduledynamically) abstract operation. User agents must use the following implementation: [\[JAVASCRIPT\]](https://html.spec.whatwg.org/multipage/references.html#refsJAVASCRIPT)

1.  Let settings object be the [current settings object](https://html.spec.whatwg.org/multipage/webappapis.html#current-settings-object).
    
2.  If settings object's [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global) implements `[WorkletGlobalScope](https://html.spec.whatwg.org/multipage/worklets.html#workletglobalscope)` or `[ServiceWorkerGlobalScope](https://w3c.github.io/ServiceWorker/#serviceworkerglobalscope)`, then:
    
    1.  Let completion be Completion { \[\[Type\]\]: throw, \[\[Value\]\]: a new `[TypeError](https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard-typeerror)`, \[\[Target\]\]: empty }.
        
    2.  Perform [FinishDynamicImport](https://tc39.es/ecma262/#sec-finishdynamicimport)(referencingScriptOrModule, moduleRequest, promiseCapability, completion).
        
    3.  Return.
        
3.  Let base URL be settings object's [API base URL](https://html.spec.whatwg.org/multipage/webappapis.html#api-base-url).
    
4.  Let fetch options be the [default classic script fetch options](https://html.spec.whatwg.org/multipage/webappapis.html#default-classic-script-fetch-options).
    
5.  If referencingScriptOrModule is not null, then:
    
    1.  Let referencing script be referencingScriptOrModule.\[\[HostDefined\]\].
        
    2.  Set settings object to referencing script's [settings object](https://html.spec.whatwg.org/multipage/webappapis.html#settings-object).
        
    3.  Set base URL to referencing script's [base URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-base-url).
        
    4.  Set fetch options to the [descendant script fetch options](https://html.spec.whatwg.org/multipage/webappapis.html#descendant-script-fetch-options) for referencing script's [fetch options](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-script-fetch-options).
        
    5.  Assert: Neither base URL nor fetch options is null, as referencing script is a [classic script](https://html.spec.whatwg.org/multipage/webappapis.html#classic-script) or a [JavaScript module script](https://html.spec.whatwg.org/multipage/webappapis.html#javascript-module-script).
        
    
    As explained above for [HostResolveImportedModule](https://html.spec.whatwg.org/multipage/webappapis.html#hostresolveimportedmodule(referencingscriptormodule,-modulerequest)), in the common case, referencingScriptOrModule is non-null.
    
6.  [Fetch an import() module script graph](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-an-import()-module-script-graph) given moduleRequest, base URL, settings object, and fetch options. Wait until the algorithm asynchronously completes with result.
    
7.  Let promise be null.
    
8.  If result is null, then set promise to [a promise rejected with](https://webidl.spec.whatwg.org/#a-promise-rejected-with) a new `[TypeError](https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard-typeerror)`.
    
9.  Otherwise, set promise to the result of [running a module script](https://html.spec.whatwg.org/multipage/webappapis.html#run-a-module-script) given result and true.
    
10.  Perform [FinishDynamicImport](https://tc39.es/ecma262/#sec-finishdynamicimport)(referencingScriptOrModule, moduleRequest, promiseCapability, promise).
    
11.  Return undefined.
    

###### 8.1.5.4.3 HostResolveImportedModule(referencingScriptOrModule, moduleRequest)[](https://html.spec.whatwg.org/multipage/webappapis.html#hostresolveimportedmodule(referencingscriptormodule,-modulerequest))

JavaScript contains an [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) [HostResolveImportedModule](https://tc39.es/ecma262/#sec-hostresolveimportedmodule) abstract operation. User agents must use the following implementation: [\[JAVASCRIPT\]](https://html.spec.whatwg.org/multipage/references.html#refsJAVASCRIPT)

1.  Let settings object be the [current settings object](https://html.spec.whatwg.org/multipage/webappapis.html#current-settings-object).
    
2.  Let base URL be settings object's [API base URL](https://html.spec.whatwg.org/multipage/webappapis.html#api-base-url).
    
3.  If referencingScriptOrModule is not null, then:
    
    1.  Let referencing script be referencingScriptOrModule.\[\[HostDefined\]\].
        
    2.  Set settings object to referencing script's [settings object](https://html.spec.whatwg.org/multipage/webappapis.html#settings-object).
        
    3.  Set base URL to referencing script's [base URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-base-url).
        
    4.  Assert: base URL is not null, as referencing script is a [classic script](https://html.spec.whatwg.org/multipage/webappapis.html#classic-script) or a [JavaScript module script](https://html.spec.whatwg.org/multipage/webappapis.html#javascript-module-script).
        
4.  Let moduleMap be settings object's [module map](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-module-map).
    
5.  Let url be the result of [resolving a module specifier](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) given base URL and moduleRequest.\[\[Specifier\]\].
    
6.  Assert: url is never failure, because [resolving a module specifier](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) must have been previously successful with these same two arguments (either [while creating the corresponding module script](https://html.spec.whatwg.org/multipage/webappapis.html#validate-requested-module-specifiers), or in [fetch an import() module script graph](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-an-import()-module-script-graph)).
    
7.  Let moduleType be the result of running the [module type from module request](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-from-module-request) steps given moduleRequest.
    
8.  Let resolved module script be moduleMap\[(url, moduleType)\]. (This entry must [exist](https://infra.spec.whatwg.org/#map-exists) for us to have gotten to this point.)
    
9.  Assert: resolved module script is a [module script](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) (i.e., is not null or "`fetching`").
    
10.  Assert: resolved module script's [record](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-record) is not null.
    
11.  Return resolved module script's [record](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-record).
    

###### 8.1.5.4.4 HostGetSupportedImportAssertions()[](https://html.spec.whatwg.org/multipage/webappapis.html#hostgetsupportedimportassertions)

The Import Assertions proposal contains an [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) [HostGetSupportedImportAssertions](https://tc39.es/proposal-import-assertions/#sec-hostgetsupportedimportassertions) abstract operation. User agents must use the following implementation: [\[JSIMPORTASSERTIONS\]](https://html.spec.whatwg.org/multipage/references.html#refsJSIMPORTASSERTIONS)

1.  Return « "`type`" ».
    

#### 8.1.6 Event loops[](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)

##### 8.1.6.1 Definitions[](https://html.spec.whatwg.org/multipage/webappapis.html#definitions-3)

To coordinate events, user interaction, scripts, rendering, networking, and so forth, user agents must use event loops as described in this section. Each [agent](https://tc39.es/ecma262/#sec-agents) has an associated event loop, which is unique to that agent.

The [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#concept-agent-event-loop) of a [similar-origin window agent](https://html.spec.whatwg.org/multipage/webappapis.html#similar-origin-window-agent) is known as a window event loop. The [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#concept-agent-event-loop) of a [dedicated worker agent](https://html.spec.whatwg.org/multipage/webappapis.html#dedicated-worker-agent), [shared worker agent](https://html.spec.whatwg.org/multipage/webappapis.html#shared-worker-agent), or [service worker agent](https://html.spec.whatwg.org/multipage/webappapis.html#service-worker-agent) is known as a worker event loop. And the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#concept-agent-event-loop) of a [worklet agent](https://html.spec.whatwg.org/multipage/webappapis.html#worklet-agent) is known as a worklet event loop.

[Event loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) do not necessarily correspond to implementation threads. For example, multiple [window event loops](https://html.spec.whatwg.org/multipage/webappapis.html#window-event-loop) could be cooperatively scheduled in a single thread.

However, for the various worker [agents](https://tc39.es/ecma262/#sec-agents) that are allocated with \[\[CanBlock\]\] set to true, the JavaScript specification does place requirements on them regarding [forward progress](https://tc39.es/ecma262/#sec-forward-progress), which effectively amount to requiring dedicated per-agent threads in those cases.

___

An [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) has one or more task queues. A [task queue](https://html.spec.whatwg.org/multipage/webappapis.html#task-queue) is a [set](https://infra.spec.whatwg.org/#ordered-set) of [tasks](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task).

[Task queues](https://html.spec.whatwg.org/multipage/webappapis.html#task-queue) are [sets](https://infra.spec.whatwg.org/#ordered-set), not [queues](https://infra.spec.whatwg.org/#queue), because the [event loop processing model](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model) grabs the first [_runnable_](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task-runnable) [task](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task) from the chosen queue, instead of [dequeuing](https://infra.spec.whatwg.org/#queue-dequeue) the first task.

The [microtask queue](https://html.spec.whatwg.org/multipage/webappapis.html#microtask-queue) is not a [task queue](https://html.spec.whatwg.org/multipage/webappapis.html#task-queue).

Tasks encapsulate algorithms that are responsible for such work as:

Events

Dispatching an `[Event](https://dom.spec.whatwg.org/#interface-event)` object at a particular `[EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget)` object is often done by a dedicated task.

Not all events are dispatched using the [task queue](https://html.spec.whatwg.org/multipage/webappapis.html#task-queue); many are dispatched during other tasks.

Parsing

The [HTML parser](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) tokenizing one or more bytes, and then processing any resulting tokens, is typically a task.

Callbacks

Calling a callback is often done by a dedicated task.

Using a resource

When an algorithm [fetches](https://fetch.spec.whatwg.org/#concept-fetch) a resource, if the fetching occurs in a non-blocking fashion then the processing of the resource once some or all of the resource is available is performed by a task.

Reacting to DOM manipulation

Some elements have tasks that trigger in response to DOM manipulation, e.g. when that element is [inserted into the document](https://html.spec.whatwg.org/multipage/infrastructure.html#insert-an-element-into-a-document).

Formally, a task is a [struct](https://infra.spec.whatwg.org/#struct) which has:

Steps

A series of steps specifying the work to be done by the task.

A source

One of the [task sources](https://html.spec.whatwg.org/multipage/webappapis.html#task-source), used to group and serialize related tasks.

A document

A `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` associated with the task, or null for tasks that are not in a [window event loop](https://html.spec.whatwg.org/multipage/webappapis.html#window-event-loop).

A script evaluation environment settings object set

A [set](https://infra.spec.whatwg.org/#ordered-set) of [environment settings objects](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) used for tracking script evaluation during the task.

A [task](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task) is runnable if its [document](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task-document) is either null or [fully active](https://html.spec.whatwg.org/multipage/browsers.html#fully-active).

Per its [source](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task-source) field, each [task](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task) is defined as coming from a specific task source. For each [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), every [task source](https://html.spec.whatwg.org/multipage/webappapis.html#task-source) must be associated with a specific [task queue](https://html.spec.whatwg.org/multipage/webappapis.html#task-queue).

Essentially, [task sources](https://html.spec.whatwg.org/multipage/webappapis.html#task-source) are used within standards to separate logically-different types of tasks, which a user agent might wish to distinguish between. [Task queues](https://html.spec.whatwg.org/multipage/webappapis.html#task-queue) are used by user agents to coalesce task sources within a given [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop).

For example, a user agent could have one [task queue](https://html.spec.whatwg.org/multipage/webappapis.html#task-queue) for mouse and key events (to which the [user interaction task source](https://html.spec.whatwg.org/multipage/webappapis.html#user-interaction-task-source) is associated), and another to which all other [task sources](https://html.spec.whatwg.org/multipage/webappapis.html#task-source) are associated. Then, using the freedom granted in the initial step of the [event loop processing model](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model), it could give keyboard and mouse events preference over other tasks three-quarters of the time, keeping the interface responsive but not starving other task queues. Note that in this setup, the processing model still enforces that the user agent would never process events from any one [task source](https://html.spec.whatwg.org/multipage/webappapis.html#task-source) out of order.

___

Each [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) has a currently running task, which is either a [task](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task) or null. Initially, this is null. It is used to handle reentrancy.

Each [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) has a microtask queue, which is a [queue](https://infra.spec.whatwg.org/#queue) of [microtasks](https://html.spec.whatwg.org/multipage/webappapis.html#microtask), initially empty. A microtask is a colloquial way of referring to a [task](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task) that was created via the [queue a microtask](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-microtask) algorithm.

Each [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) has a performing a microtask checkpoint boolean, which is initially false. It is used to prevent reentrant invocation of the [perform a microtask checkpoint](https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint) algorithm.

Each [window event loop](https://html.spec.whatwg.org/multipage/webappapis.html#window-event-loop) has a `[DOMHighResTimeStamp](https://w3c.github.io/hr-time/#dom-domhighrestimestamp)` last render opportunity time, initially set to zero.

Each [window event loop](https://html.spec.whatwg.org/multipage/webappapis.html#window-event-loop) has a `[DOMHighResTimeStamp](https://w3c.github.io/hr-time/#dom-domhighrestimestamp)` last idle period start time, initially set to zero.

To get the same-loop windows for a [window event loop](https://html.spec.whatwg.org/multipage/webappapis.html#window-event-loop) loop, return all `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` objects whose [relevant agent](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-agent)'s [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#concept-agent-event-loop) is loop.

##### 8.1.6.2 Queuing tasks[](https://html.spec.whatwg.org/multipage/webappapis.html#queuing-tasks)

To queue a task on a [task source](https://html.spec.whatwg.org/multipage/webappapis.html#task-source) source, which performs a series of steps steps, optionally given an event loop event loop and a document document:

1.  If event loop was not given, set event loop to the [implied event loop](https://html.spec.whatwg.org/multipage/webappapis.html#implied-event-loop).
    
2.  If document was not given, set document to the [implied document](https://html.spec.whatwg.org/multipage/webappapis.html#implied-document).
    
3.  Let task be a new [task](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task).
    
4.  Set task's [steps](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task-steps) to steps.
    
5.  Set task's [source](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task-source) to source.
    
6.  Set task's [document](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task-document) to the document.
    
7.  Set task's [script evaluation environment settings object set](https://html.spec.whatwg.org/multipage/webappapis.html#script-evaluation-environment-settings-object-set) to an empty [set](https://infra.spec.whatwg.org/#ordered-set).
    
8.  Let queue be the [task queue](https://html.spec.whatwg.org/multipage/webappapis.html#task-queue) to which source is associated on event loop.
    
9.  [Append](https://infra.spec.whatwg.org/#list-append) task to queue.
    

Failing to pass an event loop and document to [queue a task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-task) means relying on the ambiguous and poorly-specified [implied event loop](https://html.spec.whatwg.org/multipage/webappapis.html#implied-event-loop) and [implied document](https://html.spec.whatwg.org/multipage/webappapis.html#implied-document) concepts. Specification authors should either always pass these values, or use the wrapper algorithms [queue a global task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-global-task) or [queue an element task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-an-element-task) instead. Using the wrapper algorithms is recommended.

To queue a global task on a [task source](https://html.spec.whatwg.org/multipage/webappapis.html#task-source) source, with a [global object](https://html.spec.whatwg.org/multipage/webappapis.html#global-object) global and a series of steps steps:

1.  Let event loop be global's [relevant agent](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-agent)'s [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#concept-agent-event-loop).
    
2.  Let document be global's [associated `Document`](https://html.spec.whatwg.org/multipage/window-object.html#concept-document-window), if global is a `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` object; otherwise null.
    
3.  [Queue a task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-task) given source, event loop, document, and steps.
    

To queue an element task on a [task source](https://html.spec.whatwg.org/multipage/webappapis.html#task-source) source, with an element element and a series of steps steps:

1.  Let global be element's [relevant global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-global).
    
2.  [Queue a global task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-global-task) given source, global, and steps.
    

To queue a microtask which performs a series of steps steps, optionally given an event loop event loop and a document document:

1.  If event loop was not given, set event loop to the [implied event loop](https://html.spec.whatwg.org/multipage/webappapis.html#implied-event-loop).
    
2.  If document was not given, set document to the [implied document](https://html.spec.whatwg.org/multipage/webappapis.html#implied-document).
    
3.  Let microtask be a new [task](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task).
    
4.  Set microtask's [steps](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task-steps) to steps.
    
5.  Set microtask's [source](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task-source) to the microtask task source.
    
6.  Set microtask's [document](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task-document) to document.
    
7.  Set microtask's [script evaluation environment settings object set](https://html.spec.whatwg.org/multipage/webappapis.html#script-evaluation-environment-settings-object-set) to an empty [set](https://infra.spec.whatwg.org/#ordered-set).
    
8.  [Enqueue](https://infra.spec.whatwg.org/#queue-enqueue) microtask on event loop's [microtask queue](https://html.spec.whatwg.org/multipage/webappapis.html#microtask-queue).
    

It is possible for a [microtask](https://html.spec.whatwg.org/multipage/webappapis.html#microtask) to be moved to a regular [task queue](https://html.spec.whatwg.org/multipage/webappapis.html#task-queue), if, during its initial execution, it [spins the event loop](https://html.spec.whatwg.org/multipage/webappapis.html#spin-the-event-loop). This is the only case in which the [source](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task-source), [document](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task-document), and [script evaluation environment settings object set](https://html.spec.whatwg.org/multipage/webappapis.html#script-evaluation-environment-settings-object-set) of the microtask are consulted; they are ignored by the [perform a microtask checkpoint](https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint) algorithm.

The implied event loop when queuing a task is the one that can deduced from the context of the calling algorithm. This is generally unambiguous, as most specification algorithms only ever involve a single [agent](https://tc39.es/ecma262/#sec-agents) (and thus a single [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)). The exception is algorithms involving or specifying cross-agent communication (e.g., between a window and a worker); for those cases, the [implied event loop](https://html.spec.whatwg.org/multipage/webappapis.html#implied-event-loop) concept must not be relied upon and specifications must explicitly provide an [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) when [queuing a task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-task) or [microtask](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-microtask).

The implied document when queuing a task on an [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) event loop is determined as follows:

1.  If event loop is not a [window event loop](https://html.spec.whatwg.org/multipage/webappapis.html#window-event-loop), then return null.
    
2.  If the task is being queued in the context of an element, then return the element's [node document](https://dom.spec.whatwg.org/#concept-node-document).
    
3.  If the task is being queued in the context of a [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context), then return the browsing context's [active document](https://html.spec.whatwg.org/multipage/browsers.html#active-document).
    
4.  If the task is being queued by or for a [script](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script), then return the script's [settings object](https://html.spec.whatwg.org/multipage/webappapis.html#settings-object)'s [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global)'s [associated `Document`](https://html.spec.whatwg.org/multipage/window-object.html#concept-document-window).
    
5.  Assert: this step is never reached, because one of the previous conditions must be true. Really?
    

Both [implied event loop](https://html.spec.whatwg.org/multipage/webappapis.html#implied-event-loop) and [implied document](https://html.spec.whatwg.org/multipage/webappapis.html#implied-document) are vaguely-defined and have a lot of action-at-a-distance. The hope is to remove these, especially [implied document](https://html.spec.whatwg.org/multipage/webappapis.html#implied-document). See [issue #4980](https://github.com/whatwg/html/issues/4980).

##### 8.1.6.3 Processing model[](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model)

An [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) must continually run through the following steps for as long as it exists:

1.  Let oldestTask and taskStartTime be null.
    
2.  If the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) has a [task queue](https://html.spec.whatwg.org/multipage/webappapis.html#task-queue) with at least one [runnable](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task-runnable) [task](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task), then:
    
    1.  Let taskQueue be one such [task queue](https://html.spec.whatwg.org/multipage/webappapis.html#task-queue), chosen in an [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) manner.
        
        Remember that the [microtask queue](https://html.spec.whatwg.org/multipage/webappapis.html#microtask-queue) is not a [task queue](https://html.spec.whatwg.org/multipage/webappapis.html#task-queue), so it will not be chosen in this step. However, a [task queue](https://html.spec.whatwg.org/multipage/webappapis.html#task-queue) to which the [microtask task source](https://html.spec.whatwg.org/multipage/webappapis.html#microtask-task-source) is associated might be chosen in this step. In that case, the [task](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task) chosen in the next step was originally a [microtask](https://html.spec.whatwg.org/multipage/webappapis.html#microtask), but it got moved as part of [spinning the event loop](https://html.spec.whatwg.org/multipage/webappapis.html#spin-the-event-loop).
        
    2.  Set taskStartTime to the [unsafe shared current time](https://w3c.github.io/hr-time/#dfn-unsafe-shared-current-time).
        
    3.  Set oldestTask to the first [runnable](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task-runnable) [task](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task) in taskQueue, and [remove](https://infra.spec.whatwg.org/#list-remove) it from taskQueue.
        
    4.  Set the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)'s [currently running task](https://html.spec.whatwg.org/multipage/webappapis.html#currently-running-task) to oldestTask.
        
    5.  Perform oldestTask's [steps](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task-steps).
        
    6.  Set the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)'s [currently running task](https://html.spec.whatwg.org/multipage/webappapis.html#currently-running-task) back to null.
        
3.  [Perform a microtask checkpoint](https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint).
    
4.  Let hasARenderingOpportunity be false.
    
5.  Let now be the [unsafe shared current time](https://w3c.github.io/hr-time/#dfn-unsafe-shared-current-time). [\[HRT\]](https://html.spec.whatwg.org/multipage/references.html#refsHRT)
    
6.  If oldestTask is not null, then:
    
    1.  Let top-level browsing contexts be an empty [set](https://infra.spec.whatwg.org/#ordered-set).
        
    2.  For each [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) settings of oldestTask's [script evaluation environment settings object set](https://html.spec.whatwg.org/multipage/webappapis.html#script-evaluation-environment-settings-object-set), [append](https://infra.spec.whatwg.org/#set-append) setting's [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) to top-level browsing contexts.
        
    3.  [Report long tasks](https://w3c.github.io/longtasks/#report-long-tasks), passing in taskStartTime, now (the end time of the task), top-level browsing contexts, and oldestTask.
        
7.  Update the rendering: if this is a [window event loop](https://html.spec.whatwg.org/multipage/webappapis.html#window-event-loop), then:
    
    1.  Let docs be all `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` objects whose [relevant agent](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-agent)'s [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#concept-agent-event-loop) is this event loop, sorted arbitrarily except that the following conditions must be met:
        
        -   Any `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` B whose [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-bc)'s [container document](https://html.spec.whatwg.org/multipage/browsers.html#bc-container-document) is A must be listed after A in the list.
            
        -   If there are two documents A and B whose [browsing contexts](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-bc) are both [child browsing contexts](https://html.spec.whatwg.org/multipage/browsers.html#child-browsing-context) whose [container documents](https://html.spec.whatwg.org/multipage/browsers.html#bc-container-document) are another `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` C, then the order of A and B in the list must match the [shadow-including tree order](https://dom.spec.whatwg.org/#concept-shadow-including-tree-order) of their respective [browsing context containers](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context-container) in C's [node tree](https://dom.spec.whatwg.org/#concept-node-tree).
            
        
        In the steps below that iterate over docs, each `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` must be processed in the order it is found in the list.
        
    2.  _Rendering opportunities_: Remove from docs all `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` objects whose [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-bc) do not have a [rendering opportunity](https://html.spec.whatwg.org/multipage/webappapis.html#rendering-opportunity).
        
        A [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) has a rendering opportunity if the user agent is currently able to present the contents of the [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) to the user, accounting for hardware refresh rate constraints and user agent throttling for performance reasons, but considering content presentable even if it's outside the viewport.
        
        A [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) has no [rendering opportunities](https://html.spec.whatwg.org/multipage/webappapis.html#rendering-opportunity) if its [active document](https://html.spec.whatwg.org/multipage/browsers.html#active-document) is [render-blocked](https://html.spec.whatwg.org/multipage/dom.html#render-blocked); otherwise, [rendering opportunities](https://html.spec.whatwg.org/multipage/webappapis.html#rendering-opportunity) are determined based on hardware constraints such as display refresh rates and other factors such as page performance or whether the document's [visibility state](https://html.spec.whatwg.org/multipage/interaction.html#visibility-state) is "`visible`". Rendering opportunities typically occur at regular intervals.
        
        This specification does not mandate any particular model for selecting rendering opportunities. But for example, if the browser is attempting to achieve a 60Hz refresh rate, then rendering opportunities occur at a maximum of every 60th of a second (about 16.7ms). If the browser finds that a [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) is not able to sustain this rate, it might drop to a more sustainable 30 rendering opportunities per second for that [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context), rather than occasionally dropping frames. Similarly, if a [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) is not visible, the user agent might decide to drop that page to a much slower 4 rendering opportunities per second, or even less.
        
    3.  If docs is not empty, then set hasARenderingOpportunity to true and set this [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)'s [last render opportunity time](https://html.spec.whatwg.org/multipage/webappapis.html#last-render-opportunity-time) to taskStartTime.
        
    4.  _Unnecessary rendering_: Remove from docs all `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` objects which meet both of the following conditions:
        
        -   The user agent believes that updating the rendering of the `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)`'s [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-bc) would have no visible effect, and
        -   The `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)`'s [map of animation frame callbacks](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#list-of-animation-frame-callbacks) is empty.
    5.  Remove from docs all `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` objects for which the user agent believes that it's preferable to skip updating the rendering for other reasons.
        
        The step labeled _Rendering opportunities_ prevents the user agent from updating the rendering when it is unable to present new content to the user (there's no [rendering opportunity](https://html.spec.whatwg.org/multipage/webappapis.html#rendering-opportunity)).
        
        The step labeled _Unnecessary rendering_ prevents the user agent from updating the rendering when there's no new content to draw.
        
        This step enables the user agent to prevent the steps below from running for other reasons, for example, to ensure certain [tasks](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task) are executed immediately after each other, with only [microtask checkpoints](https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint) interleaved (and without, e.g., [animation frame callbacks](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#run-the-animation-frame-callbacks) interleaved). Concretely, a user agent might wish to coalesce timer callbacks together, with no intermediate rendering updates.
        
    6.  For each [fully active](https://html.spec.whatwg.org/multipage/browsers.html#fully-active) `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` in docs, [flush autofocus candidates](https://html.spec.whatwg.org/multipage/interaction.html#flush-autofocus-candidates) for that `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` if its [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-bc) is a [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context).
        
    7.  For each [fully active](https://html.spec.whatwg.org/multipage/browsers.html#fully-active) `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` in docs, [run the resize steps](https://drafts.csswg.org/cssom-view/#run-the-resize-steps) for that `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)`, passing in now as the timestamp. [\[CSSOMVIEW\]](https://html.spec.whatwg.org/multipage/references.html#refsCSSOMVIEW)
        
    8.  For each [fully active](https://html.spec.whatwg.org/multipage/browsers.html#fully-active) `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` in docs, [run the scroll steps](https://drafts.csswg.org/cssom-view/#run-the-scroll-steps) for that `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)`, passing in now as the timestamp. [\[CSSOMVIEW\]](https://html.spec.whatwg.org/multipage/references.html#refsCSSOMVIEW)
        
    9.  For each [fully active](https://html.spec.whatwg.org/multipage/browsers.html#fully-active) `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` in docs, [evaluate media queries and report changes](https://drafts.csswg.org/cssom-view/#evaluate-media-queries-and-report-changes) for that `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)`, passing in now as the timestamp. [\[CSSOMVIEW\]](https://html.spec.whatwg.org/multipage/references.html#refsCSSOMVIEW)
        
    10.  For each [fully active](https://html.spec.whatwg.org/multipage/browsers.html#fully-active) `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` in docs, [update animations and send events](https://drafts.csswg.org/web-animations/#update-animations-and-send-events) for that `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)`, passing in now as the timestamp. [\[WEBANIMATIONS\]](https://html.spec.whatwg.org/multipage/references.html#refsWEBANIMATIONS)
        
    11.  For each [fully active](https://html.spec.whatwg.org/multipage/browsers.html#fully-active) `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` in docs, [run the fullscreen steps](https://fullscreen.spec.whatwg.org/#run-the-fullscreen-steps) for that `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)`, passing in now as the timestamp. [\[FULLSCREEN\]](https://html.spec.whatwg.org/multipage/references.html#refsFULLSCREEN)
        
    12.  For each [fully active](https://html.spec.whatwg.org/multipage/browsers.html#fully-active) `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` in docs, if the user agent detects that the backing storage associated with a `[CanvasRenderingContext2D](https://html.spec.whatwg.org/multipage/canvas.html#canvasrenderingcontext2d)` or an `[OffscreenCanvasRenderingContext2D](https://html.spec.whatwg.org/multipage/canvas.html#offscreencanvasrenderingcontext2d)`, context, has been lost, then it must run the context lost steps for each such context:
        
        1.  Let canvas be the value of context's `[canvas](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-canvas)` attribute, if context is a `[CanvasRenderingContext2D](https://html.spec.whatwg.org/multipage/canvas.html#canvasrenderingcontext2d)`, or the [associated `OffscreenCanvas` object](https://html.spec.whatwg.org/multipage/canvas.html#associated-offscreencanvas-object) for context otherwise.
            
        2.  Set context's [context lost](https://html.spec.whatwg.org/multipage/canvas.html#concept-canvas-context-lost) to true.
            
        3.  [Reset the rendering context to its default state](https://html.spec.whatwg.org/multipage/canvas.html#reset-the-rendering-context-to-its-default-state) given context.
            
        4.  Let shouldRestore be the result of [firing an event](https://dom.spec.whatwg.org/#concept-event-fire) named `[contextlost](https://html.spec.whatwg.org/multipage/indices.html#event-contextlost)` at canvas, with the `[cancelable](https://dom.spec.whatwg.org/#dom-event-cancelable)` attribute initialized to true.
            
        5.  If shouldRestore is false, then abort these steps.
            
        6.  Attempt to restore context by creating a backing storage using context's attributes and associating them with context. If this fails, then abort these steps.
            
        7.  Set context's [context lost](https://html.spec.whatwg.org/multipage/canvas.html#concept-canvas-context-lost) to false.
            
        8.  [Fire an event](https://dom.spec.whatwg.org/#concept-event-fire) named `[contextrestored](https://html.spec.whatwg.org/multipage/indices.html#event-contextrestored)` at canvas.
            
    13.  For each [fully active](https://html.spec.whatwg.org/multipage/browsers.html#fully-active) `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` in docs, [run the animation frame callbacks](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#run-the-animation-frame-callbacks) for that `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)`, passing in now as the timestamp.
        
    14.  For each [fully active](https://html.spec.whatwg.org/multipage/browsers.html#fully-active) `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` in docs, [run the update intersection observations steps](https://w3c.github.io/IntersectionObserver/#run-the-update-intersection-observations-steps) for that `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)`, passing in now as the timestamp. [\[INTERSECTIONOBSERVER\]](https://html.spec.whatwg.org/multipage/references.html#refsINTERSECTIONOBSERVER)
        
    15.  Invoke the [mark paint timing](https://w3c.github.io/paint-timing/#mark-paint-timing) algorithm for each `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` object in docs.
        
    16.  For each [fully active](https://html.spec.whatwg.org/multipage/browsers.html#fully-active) `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` in docs, update the rendering or user interface of that `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` and its [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-bc) to reflect the current state.
        
8.  If all of the following are true
    
    -   this is a [window event loop](https://html.spec.whatwg.org/multipage/webappapis.html#window-event-loop)
    -   there is no [task](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task) in this [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)'s [task queues](https://html.spec.whatwg.org/multipage/webappapis.html#task-queue) whose [document](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task-document) is [fully active](https://html.spec.whatwg.org/multipage/browsers.html#fully-active)
    -   this [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)'s [microtask queue](https://html.spec.whatwg.org/multipage/webappapis.html#microtask-queue) is [empty](https://infra.spec.whatwg.org/#list-is-empty)
    -   hasARenderingOpportunity is false
    
    then:
    
    1.  Set this [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)'s [last idle period start time](https://html.spec.whatwg.org/multipage/webappapis.html#last-idle-period-start-time) to the [unsafe shared current time](https://w3c.github.io/hr-time/#dfn-unsafe-shared-current-time).
        
    2.  Let computeDeadline be the following steps:
        
        1.  Let deadline be this [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)'s [last idle period start time](https://html.spec.whatwg.org/multipage/webappapis.html#last-idle-period-start-time) plus 50.
            
            The cap of 50ms in the future is to ensure responsiveness to new user input within the threshold of human perception.
            
        2.  Let hasPendingRenders be false.
            
        3.  For each windowInSameLoop of the [same-loop windows](https://html.spec.whatwg.org/multipage/webappapis.html#same-loop-windows) for this [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop):
            
            1.  If windowInSameLoop's [map of animation frame callbacks](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#list-of-animation-frame-callbacks) is not [empty](https://infra.spec.whatwg.org/#map-is-empty), or if the user agent believes that the windowInSameLoop might have pending rendering updates, set hasPendingRenders to true.
                
            2.  Let timerCallbackEstimates be the result of [getting the values](https://infra.spec.whatwg.org/#map-getting-the-values) of windowInSameLoop's [map of active timers](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#map-of-active-timers).
                
            3.  For each timeoutDeadline of timerCallbackEstimates, if timeoutDeadline is less than deadline, set deadline to timeoutDeadline.
                
        4.  If hasPendingRenders is true, then:
            
            1.  Let nextRenderDeadline be this [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)'s [last render opportunity time](https://html.spec.whatwg.org/multipage/webappapis.html#last-render-opportunity-time) plus (1000 divided by the current refresh rate).
                
                The refresh rate can be hardware- or implementation-specific. For a refresh rate of 60Hz, the nextRenderDeadline would be about 16.67ms after the [last render opportunity time](https://html.spec.whatwg.org/multipage/webappapis.html#last-render-opportunity-time).
                
            2.  If nextRenderDeadline is less than deadline, then return nextRenderDeadline.
                
        5.  Return deadline.
            
    3.  For each win of the [same-loop windows](https://html.spec.whatwg.org/multipage/webappapis.html#same-loop-windows) for this [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), perform the [start an idle period algorithm](https://w3c.github.io/requestidlecallback/#start-an-idle-period-algorithm) for win with the following step: return the result of calling computeDeadline, [coarsened](https://w3c.github.io/hr-time/#dfn-coarsen-time) given win's [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object)'s [cross-origin isolated capability](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-cross-origin-isolated-capability). [\[REQUESTIDLECALLBACK\]](https://html.spec.whatwg.org/multipage/references.html#refsREQUESTIDLECALLBACK)
        
9.  If this is a [worker event loop](https://html.spec.whatwg.org/multipage/webappapis.html#worker-event-loop-2), then:
    
    1.  If this [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)'s [agent](https://tc39.es/ecma262/#sec-agents)'s single [realm](https://tc39.es/ecma262/#sec-code-realms)'s [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-realm-global) is a [supported](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#concept-animationframeprovider-supported) `[DedicatedWorkerGlobalScope](https://html.spec.whatwg.org/multipage/workers.html#dedicatedworkerglobalscope)` and the user agent believes that it would benefit from having its rendering updated at this time, then:
        
        1.  Let now be the [current high resolution time](https://w3c.github.io/hr-time/#dfn-current-high-resolution-time) given the `[DedicatedWorkerGlobalScope](https://html.spec.whatwg.org/multipage/workers.html#dedicatedworkerglobalscope)`. [\[HRT\]](https://html.spec.whatwg.org/multipage/references.html#refsHRT)
            
        2.  [Run the animation frame callbacks](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#run-the-animation-frame-callbacks) for that `[DedicatedWorkerGlobalScope](https://html.spec.whatwg.org/multipage/workers.html#dedicatedworkerglobalscope)`, passing in now as the timestamp.
            
        3.  Update the rendering of that dedicated worker to reflect the current state.
            
        
        Similar to the notes for [updating the rendering](https://html.spec.whatwg.org/multipage/webappapis.html#update-the-rendering) in a [window event loop](https://html.spec.whatwg.org/multipage/webappapis.html#window-event-loop), a user agent can determine the rate of rendering in the dedicated worker.
        
    2.  If there are no [tasks](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task) in the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)'s [task queues](https://html.spec.whatwg.org/multipage/webappapis.html#task-queue) and the `[WorkerGlobalScope](https://html.spec.whatwg.org/multipage/workers.html#workerglobalscope)` object's [closing](https://html.spec.whatwg.org/multipage/workers.html#dom-workerglobalscope-closing) flag is true, then destroy the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), aborting these steps, resuming the [run a worker](https://html.spec.whatwg.org/multipage/workers.html#run-a-worker) steps described in the [Web workers](https://html.spec.whatwg.org/multipage/workers.html#workers) section below.
        

___

When a user agent is to perform a microtask checkpoint:

1.  If the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)'s [performing a microtask checkpoint](https://html.spec.whatwg.org/multipage/webappapis.html#performing-a-microtask-checkpoint) is true, then return.
    
2.  Set the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)'s [performing a microtask checkpoint](https://html.spec.whatwg.org/multipage/webappapis.html#performing-a-microtask-checkpoint) to true.
    
3.  While the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)'s [microtask queue](https://html.spec.whatwg.org/multipage/webappapis.html#microtask-queue) is not [empty](https://infra.spec.whatwg.org/#list-is-empty):
    
    1.  Let oldestMicrotask be the result of [dequeuing](https://infra.spec.whatwg.org/#queue-dequeue) from the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)'s [microtask queue](https://html.spec.whatwg.org/multipage/webappapis.html#microtask-queue).
        
    2.  Set the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)'s [currently running task](https://html.spec.whatwg.org/multipage/webappapis.html#currently-running-task) to oldestMicrotask.
        
    3.  Run oldestMicrotask.
        
        This might involve invoking scripted callbacks, which eventually calls the [clean up after running script](https://html.spec.whatwg.org/multipage/webappapis.html#clean-up-after-running-script) steps, which call this [perform a microtask checkpoint](https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint) algorithm again, which is why we use the [performing a microtask checkpoint](https://html.spec.whatwg.org/multipage/webappapis.html#performing-a-microtask-checkpoint) flag to avoid reentrancy.
        
    4.  Set the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)'s [currently running task](https://html.spec.whatwg.org/multipage/webappapis.html#currently-running-task) back to null.
        
4.  For each [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) whose [responsible event loop](https://html.spec.whatwg.org/multipage/webappapis.html#responsible-event-loop) is this [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), [notify about rejected promises](https://html.spec.whatwg.org/multipage/webappapis.html#notify-about-rejected-promises) on that [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object).
    
5.  [Cleanup Indexed Database transactions](https://w3c.github.io/IndexedDB/#cleanup-indexed-database-transactions).
    
6.  Perform [ClearKeptObjects](https://tc39.es/ecma262/#sec-clear-kept-objects)().
    
    When `[WeakRef.prototype.deref()](https://tc39.es/ecma262/#sec-weak-ref.prototype.deref)` returns an object, that object is kept alive until the next invocation of [ClearKeptObjects](https://tc39.es/ecma262/#sec-clear-kept-objects)(), after which it is again subject to garbage collection.
    
7.  Set the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)'s [performing a microtask checkpoint](https://html.spec.whatwg.org/multipage/webappapis.html#performing-a-microtask-checkpoint) to false.
    

___

When an algorithm running [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel) is to await a stable state, the user agent must [queue a microtask](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-microtask) that runs the following steps, and must then stop executing (execution of the algorithm resumes when the microtask is run, as described in the following steps):

1.  Run the algorithm's synchronous section.
    
2.  Resumes execution of the algorithm [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel), if appropriate, as described in the algorithm's steps.
    

Steps in [synchronous sections](https://html.spec.whatwg.org/multipage/webappapis.html#synchronous-section) are marked with ⌛.

___

Algorithm steps that say to spin the event loop until a condition goal is met are equivalent to substituting in the following algorithm steps:

1.  Let task be the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)'s [currently running task](https://html.spec.whatwg.org/multipage/webappapis.html#currently-running-task).
    
    task could be a [microtask](https://html.spec.whatwg.org/multipage/webappapis.html#microtask).
    
2.  Let task source be task's [source](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task-source).
    
3.  Let old stack be a copy of the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack).
    
4.  Empty the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack).
    
5.  [Perform a microtask checkpoint](https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint).
    
    If task is a [microtask](https://html.spec.whatwg.org/multipage/webappapis.html#microtask) this step will be a no-op due to [performing a microtask checkpoint](https://html.spec.whatwg.org/multipage/webappapis.html#performing-a-microtask-checkpoint) being true.
    
6.  [In parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):
    
    1.  Wait until the condition goal is met.
        
    2.  [Queue a task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-task) on task source to:
        
        1.  Replace the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack) with old stack.
            
        2.  Perform any steps that appear after this [spin the event loop](https://html.spec.whatwg.org/multipage/webappapis.html#spin-the-event-loop) instance in the original algorithm.
            
            This resumes task.
            
7.  Stop task, allowing whatever algorithm that invoked it to resume.
    
    This causes the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)'s main set of steps or the [perform a microtask checkpoint](https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint) algorithm to continue.
    

Unlike other algorithms in this and other specifications, which behave similar to programming-language function calls, [spin the event loop](https://html.spec.whatwg.org/multipage/webappapis.html#spin-the-event-loop) is more like a macro, which saves typing and indentation at the usage site by expanding into a series of steps and operations.

An algorithm whose steps are:

1.  Do something.
    
2.  [Spin the event loop](https://html.spec.whatwg.org/multipage/webappapis.html#spin-the-event-loop) until awesomeness happens.
    
3.  Do something else.
    

is a shorthand which, after "macro expansion", becomes

1.  Do something.
    
2.  Let old stack be a copy of the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack).
    
3.  Empty the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack).
    
4.  [Perform a microtask checkpoint](https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint).
    
5.  [In parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):
    
    1.  Wait until awesomeness happens.
        
    2.  [Queue a task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-task) on the task source in which "do something" was done to:
        
        1.  Replace the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack) with old stack.
            
        2.  Do something else.
            

Here is a more full example of the substitution, where the event loop is spun from inside a task that is queued from work in parallel. The version using [spin the event loop](https://html.spec.whatwg.org/multipage/webappapis.html#spin-the-event-loop):

1.  [In parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):
    
    1.  Do parallel thing 1.
        
    2.  [Queue a task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-task) on the [DOM manipulation task source](https://html.spec.whatwg.org/multipage/webappapis.html#dom-manipulation-task-source) to:
        
        1.  Do task thing 1.
            
        2.  [Spin the event loop](https://html.spec.whatwg.org/multipage/webappapis.html#spin-the-event-loop) until awesomeness happens.
            
        3.  Do task thing 2.
            
    3.  Do parallel thing 2.
        

The fully expanded version:

1.  [In parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):
    
    1.  Do parallel thing 1.
        
    2.  Let old stack be null.
        
    3.  [Queue a task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-task) on the [DOM manipulation task source](https://html.spec.whatwg.org/multipage/webappapis.html#dom-manipulation-task-source) to:
        
        1.  Do task thing 1.
            
        2.  Set old stack to a copy of the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack).
            
        3.  Empty the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack).
            
        4.  [Perform a microtask checkpoint](https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint).
            
    4.  Wait until awesomeness happens.
        
    5.  [Queue a task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-task) on the [DOM manipulation task source](https://html.spec.whatwg.org/multipage/webappapis.html#dom-manipulation-task-source) to:
        
        1.  Replace the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack) with old stack.
            
        2.  Do task thing 2.
            
    6.  Do parallel thing 2.
        

___

Some of the algorithms in this specification, for historical reasons, require the user agent to pause while running a [task](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task) until a condition goal is met. This means running the following steps:

1.  If necessary, update the rendering or user interface of any `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` or [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) to reflect the current state.
    
2.  Wait until the condition goal is met. While a user agent has a paused [task](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task), the corresponding [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) must not run further [tasks](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task), and any script in the currently running [task](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task) must block. User agents should remain responsive to user input while paused, however, albeit in a reduced capacity since the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) will not be doing anything.
    

[Pausing](https://html.spec.whatwg.org/multipage/webappapis.html#pause) is highly detrimental to the user experience, especially in scenarios where a single [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) is shared among multiple documents. User agents are encouraged to experiment with alternatives to [pausing](https://html.spec.whatwg.org/multipage/webappapis.html#pause), such as [spinning the event loop](https://html.spec.whatwg.org/multipage/webappapis.html#spin-the-event-loop) or even simply proceeding without any kind of suspended execution at all, insofar as it is possible to do so while preserving compatibility with existing content. This specification will happily change if a less-drastic alternative is discovered to be web-compatible.

In the interim, implementers should be aware that the variety of alternatives that user agents might experiment with can change subtle aspects of [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) behavior, including [task](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task) and [microtask](https://html.spec.whatwg.org/multipage/webappapis.html#microtask) timing. Implementations should continue experimenting even if doing so causes them to violate the exact semantics implied by the [pause](https://html.spec.whatwg.org/multipage/webappapis.html#pause) operation.

##### 8.1.6.4 Generic task sources[](https://html.spec.whatwg.org/multipage/webappapis.html#generic-task-sources)

The following [task sources](https://html.spec.whatwg.org/multipage/webappapis.html#task-source) are used by a number of mostly unrelated features in this and other specifications.

The DOM manipulation task source

This [task source](https://html.spec.whatwg.org/multipage/webappapis.html#task-source) is used for features that react to DOM manipulations, such as things that happen in a non-blocking fashion when an element is [inserted into the document](https://html.spec.whatwg.org/multipage/infrastructure.html#insert-an-element-into-a-document).

The user interaction task source

This [task source](https://html.spec.whatwg.org/multipage/webappapis.html#task-source) is used for features that react to user interaction, for example keyboard or mouse input.

Events sent in response to user input (e.g. `[click](https://w3c.github.io/uievents/#event-type-click)` events) must be fired using [tasks](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task) [queued](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-task) with the [user interaction task source](https://html.spec.whatwg.org/multipage/webappapis.html#user-interaction-task-source). [\[UIEVENTS\]](https://html.spec.whatwg.org/multipage/references.html#refsUIEVENTS)

The networking task source

This [task source](https://html.spec.whatwg.org/multipage/webappapis.html#task-source) is used for features that trigger in response to network activity.

The history traversal task source

This [task source](https://html.spec.whatwg.org/multipage/webappapis.html#task-source) is used to queue calls to `[history.back()](https://html.spec.whatwg.org/multipage/history.html#dom-history-back)` and similar APIs.

Writing specifications that correctly interact with the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) can be tricky. This is compounded by how this specification uses concurrency-model-independent terminology, so we say things like "[event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)" and "[in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel)" instead of using more familiar model-specific terms like "main thread" or "on a background thread".

By default, specification text generally runs on the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop). This falls out from the formal [event loop processing model](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model), in that you can eventually trace most algorithms back to a [task](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task) [queued](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-task) there.

The algorithm steps for any JavaScript method will be invoked by author code calling that method. And author code can only be run via queued tasks, usually originating somewhere in the [`script` processing model](https://html.spec.whatwg.org/multipage/scripting.html#script-processing-model).

From this starting point, the overriding guideline is that any work a specification needs to perform that would otherwise block the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) must instead be performed [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel) with it. This includes (but is not limited to):

-   performing heavy computation;
    
-   displaying a user-facing prompt;
    
-   performing operations which could require involving outside systems (i.e. "going out of process").
    

The next complication is that, in algorithm sections that are [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel), you must not create or manipulate objects associated to a specific [JavaScript realm](https://tc39.es/ecma262/#sec-code-realms), [global](https://html.spec.whatwg.org/multipage/webappapis.html#global-object), or [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object). (Stated in more familiar terms, you must not directly access main-thread artifacts from a background thread.) Doing so would create data races observable to JavaScript code, since after all, your algorithm steps are running _[in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel)_ to the JavaScript code.

You can, however, manipulate specification-level data structures and values from Infra, as those are realm-agnostic. They are never directly exposed to JavaScript without a specific conversion taking place (often [via Web IDL](https://webidl.spec.whatwg.org/#es-type-mapping)). [\[INFRA\]](https://html.spec.whatwg.org/multipage/references.html#refsINFRA) [\[WEBIDL\]](https://html.spec.whatwg.org/multipage/references.html#refsWEBIDL)

To affect the world of observable JavaScript objects, then, you must [queue a global task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-global-task) to perform any such manipulations. This ensures your steps are properly interleaved with respect to other things happening on the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop). Furthermore, you must choose a [task source](https://html.spec.whatwg.org/multipage/webappapis.html#task-source) when [queuing a global task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-global-task); this governs the relative order of your steps versus others. If you are unsure which [task source](https://html.spec.whatwg.org/multipage/webappapis.html#task-source) to use, pick one of the [generic task sources](https://html.spec.whatwg.org/multipage/webappapis.html#generic-task-sources) that sounds most applicable. Finally, you must indicate which [global object](https://html.spec.whatwg.org/multipage/webappapis.html#global-object) your queued task is associated with; this ensures that if that global object is inactive, the task does not run.

The base primitive, on which [queue a global task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-global-task) builds, is the [queue a task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-task) algorithm. In general, [queue a global task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-global-task) is better because it automatically picks the right [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) and, where appropriate, [document](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task-document). Older specifications often use [queue a task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-task) combined with the [implied event loop](https://html.spec.whatwg.org/multipage/webappapis.html#implied-event-loop) and [implied document](https://html.spec.whatwg.org/multipage/webappapis.html#implied-document) concepts, but this is discouraged.

Putting this all together, we can provide a template for a typical algorithm that needs to do work asynchronously:

1.  Do any synchronous setup work, while still on the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop). This may include converting [realm](https://tc39.es/ecma262/#sec-code-realms)\-specific JavaScript values into realm-agnostic specification-level values.
    
2.  Perform a set of potentially-expensive steps [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel), operating entirely on realm-agnostic values, and producing a realm-agnostic result.
    
3.  [Queue a global task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-global-task), on a specified [task source](https://html.spec.whatwg.org/multipage/webappapis.html#task-source) and given an appropriate [global object](https://html.spec.whatwg.org/multipage/webappapis.html#global-object), to convert the realm-agnostic result back into observable effects on the observable world of JavaScript objects on the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop).
    

The following is an algorithm that "encrypts" a passed-in [list](https://infra.spec.whatwg.org/#list) of [scalar value strings](https://infra.spec.whatwg.org/#scalar-value-string) input, after parsing them as URLs:

1.  Let urls be an empty [list](https://infra.spec.whatwg.org/#list).
    
2.  [For each](https://infra.spec.whatwg.org/#list-iterate) string of input:
    
    1.  Let parsed be the result of [parsing](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#parse-a-url) string relative to the [current settings object](https://html.spec.whatwg.org/multipage/webappapis.html#current-settings-object).
        
    2.  If parsed is failure, return a promise rejected with a ["`SyntaxError`"](https://webidl.spec.whatwg.org/#syntaxerror) `[DOMException](https://webidl.spec.whatwg.org/#dfn-DOMException)`.
        
    3.  Let serialized be the result of applying the [URL serializer](https://url.spec.whatwg.org/#concept-url-serializer) to parsed.
        
    4.  [Append](https://infra.spec.whatwg.org/#list-append) serialized to urls.
        
3.  Let realm be the [current Realm Record](https://tc39.es/ecma262/#current-realm).
    
4.  Let p be a new promise.
    
5.  Run the following steps [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):
    
    1.  Let encryptedURLs be an empty [list](https://infra.spec.whatwg.org/#list).
        
    2.  [For each](https://infra.spec.whatwg.org/#list-iterate) url of urls:
        
        1.  Wait 100 milliseconds, so that people think we're doing heavy-duty encryption.
            
        2.  Let encrypted be a new [string](https://infra.spec.whatwg.org/#string) derived from url, whose nth [code unit](https://infra.spec.whatwg.org/#code-unit) is equal to url's nth [code unit](https://infra.spec.whatwg.org/#code-unit) plus 13.
            
        3.  [Append](https://infra.spec.whatwg.org/#list-append) encrypted to encryptedURLs.
            
    3.  [Queue a global task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-global-task) on the [networking task source](https://html.spec.whatwg.org/multipage/webappapis.html#networking-task-source), given realm's [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-realm-global), to perform the following steps:
        
        1.  Let array be the result of [converting](https://webidl.spec.whatwg.org/#es-type-mapping) encryptedURLs to a JavaScript array, in realm.
            
        2.  Resolve p with array.
            
6.  Return p.
    

Here are several things to notice about this algorithm:

-   It does its URL parsing up front, on the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), before going to the [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel) steps. This is necessary, since parsing depends on the [current settings object](https://html.spec.whatwg.org/multipage/webappapis.html#current-settings-object), which would no longer be current after going [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel).
    
-   Alternately, it could have saved a reference to the [current settings object](https://html.spec.whatwg.org/multipage/webappapis.html#current-settings-object)'s [API base URL](https://html.spec.whatwg.org/multipage/webappapis.html#api-base-url) and used it during the [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel) steps; that would have been equivalent. However, we recommend instead doing as much work as possible up front, as this example does. Attempting to save the correct values can be error prone; for example, if we'd saved just the [current settings object](https://html.spec.whatwg.org/multipage/webappapis.html#current-settings-object), instead of its [API base URL](https://html.spec.whatwg.org/multipage/webappapis.html#api-base-url), there would have been a potential race.
    
-   It implicitly passes a [list](https://infra.spec.whatwg.org/#list) of [strings](https://infra.spec.whatwg.org/#string) from the initial steps to the [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel) steps. This is OK, as both [lists](https://infra.spec.whatwg.org/#list) and [strings](https://infra.spec.whatwg.org/#string) are [realm](https://tc39.es/ecma262/#sec-code-realms)\-agnostic.
    
-   It performs "expensive computation" (waiting for 100 milliseconds per input URL) during the [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel) steps, thus not blocking the main [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop).
    
-   Promises, as observable JavaScript objects, are never created and manipulated during the [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel) steps. p is created before entering those steps, and then is manipulated during a [task](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task) that is [queued](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-global-task) specifically for that purpose.
    
-   The creation of a JavaScript array object also happens during the queued task, and is careful to specify which realm it creates the array in since that is no longer obvious from context.
    

(On these last two points, see also [whatwg/webidl issue #135](https://github.com/whatwg/webidl/issues/135) and [whatwg/webidl issue #371](https://github.com/whatwg/webidl/issues/371), where we are still mulling over the subtleties of the above promise-resolution pattern.)

Another thing to note is that, in the event this algorithm was called from a Web IDL-specified operation taking a `sequence`<`[USVString](https://webidl.spec.whatwg.org/#idl-USVString)`\>, there was an automatic conversion from [realm](https://tc39.es/ecma262/#sec-code-realms)\-specific JavaScript objects provided by the author as input, into the realm-agnostic `sequence`<`[USVString](https://webidl.spec.whatwg.org/#idl-USVString)`\> Web IDL type, which we then treat as a [list](https://infra.spec.whatwg.org/#list) of [scalar value strings](https://infra.spec.whatwg.org/#scalar-value-string). So depending on how your specification is structured, there may be other implicit steps happening on the main [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) that play a part in this whole process of getting you ready to go [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel).

#### 8.1.7 Events[](https://html.spec.whatwg.org/multipage/webappapis.html#events)

##### 8.1.7.1 Event handlers[](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-attributes)

Many objects can have event handlers specified. These act as non-capture [event listeners](https://dom.spec.whatwg.org/#concept-event-listener) for the object on which they are specified. [\[DOM\]](https://html.spec.whatwg.org/multipage/references.html#refsDOM)

An [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) is a [struct](https://infra.spec.whatwg.org/#struct) with two [items](https://infra.spec.whatwg.org/#struct-item):

-   a value, which is either null, a callback object, or an [internal raw uncompiled handler](https://html.spec.whatwg.org/multipage/webappapis.html#internal-raw-uncompiled-handler). The `[EventHandler](https://html.spec.whatwg.org/multipage/webappapis.html#eventhandler)` callback function type describes how this is exposed to scripts. Initially, an [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers)'s [value](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-value) must be set to null.
    
-   a listener, which is either null or an [event listener](https://dom.spec.whatwg.org/#concept-event-listener) responsible for running [the event handler processing algorithm](https://html.spec.whatwg.org/multipage/webappapis.html#the-event-handler-processing-algorithm). Initially, an [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers)'s [listener](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-listener) must be set to null.
    

Event handlers are exposed in two ways.

The first way, common to all event handlers, is as an [event handler IDL attribute](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes).

The second way is as an [event handler content attribute](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-content-attributes). Event handlers on [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) and some of the event handlers on `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` objects are exposed in this way.

For both of these two ways, the [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) is exposed through a name, which is a string that always starts with "`on`" and is followed by the name of the event for which the handler is intended.

___

Most of the time, the object that exposes an [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) is the same as the object on which the corresponding [event listener](https://dom.spec.whatwg.org/#concept-event-listener) is added. However, the `[body](https://html.spec.whatwg.org/multipage/sections.html#the-body-element)` and `[frameset](https://html.spec.whatwg.org/multipage/obsolete.html#frameset)` elements expose several [event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) that act upon the element's `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` object, if one exists. In either case, we call the object an [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) acts upon the target of that [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers).

To determine the target of an event handler, given an `[EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget)` object eventTarget on which the [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) is exposed, and an [event handler name](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-name) name, the following steps are taken:

1.  If eventTarget is not a `[body](https://html.spec.whatwg.org/multipage/sections.html#the-body-element)` element or a `[frameset](https://html.spec.whatwg.org/multipage/obsolete.html#frameset)` element, then return eventTarget.
    
2.  If name is not the name of an attribute member of the `[WindowEventHandlers](https://html.spec.whatwg.org/multipage/webappapis.html#windoweventhandlers)` interface mixin and the [`Window`\-reflecting body element event handler set](https://html.spec.whatwg.org/multipage/webappapis.html#window-reflecting-body-element-event-handler-set) does not [contain](https://infra.spec.whatwg.org/#list-contain) name, then return eventTarget.
    
3.  If eventTarget's [node document](https://dom.spec.whatwg.org/#concept-node-document) is not an [active document](https://html.spec.whatwg.org/multipage/browsers.html#active-document), then return null.
    
    This could happen if this object is a `[body](https://html.spec.whatwg.org/multipage/sections.html#the-body-element)` element without a corresponding `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` object, for example.
    
    This check does not necessarily prevent `[body](https://html.spec.whatwg.org/multipage/sections.html#the-body-element)` and `[frameset](https://html.spec.whatwg.org/multipage/obsolete.html#frameset)` elements that are not [the body element](https://html.spec.whatwg.org/multipage/dom.html#the-body-element-2) of their [node document](https://dom.spec.whatwg.org/#concept-node-document) from reaching the next step. In particular, a `[body](https://html.spec.whatwg.org/multipage/sections.html#the-body-element)` element created in an [active document](https://html.spec.whatwg.org/multipage/browsers.html#active-document) (perhaps with `[document.createElement()](https://dom.spec.whatwg.org/#dom-document-createelement)`) but not [connected](https://dom.spec.whatwg.org/#connected) will also have its corresponding `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` object as the [target](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-target) of several [event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) exposed through it.
    
4.  Return eventTarget's [node document](https://dom.spec.whatwg.org/#concept-node-document)'s [relevant global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-global).
    

___

Each `[EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget)` object that has one or more [event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) specified has an associated event handler map, which is a [map](https://infra.spec.whatwg.org/#ordered-map) of strings representing [names](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-name) of [event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) to [event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers).

When an `[EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget)` object that has one or more [event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) specified is created, its [event handler map](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-map) must be initialized such that it contains an [entry](https://infra.spec.whatwg.org/#map-entry) for each [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) that has that object as [target](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-target), with [items](https://infra.spec.whatwg.org/#struct-item) in those [event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) set to their initial values.

The order of the [entries](https://infra.spec.whatwg.org/#map-entry) of [event handler map](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-map) could be arbitrary. It is not observable through any algorithms that operate on the map.

[Entries](https://infra.spec.whatwg.org/#map-entry) are not created in the [event handler map](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-map) of an object for [event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) that are merely exposed on that object, but have some other object as their [targets](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-target).

___

An event handler IDL attribute is an IDL attribute for a specific [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers). The name of the IDL attribute is the same as the [name](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-name) of the [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers).

The getter of an [event handler IDL attribute](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes) with name name, when called, must run these steps:

1.  Let eventTarget be the result of [determining the target of an event handler](https://html.spec.whatwg.org/multipage/webappapis.html#determining-the-target-of-an-event-handler) given this object and name.
    
2.  If eventTarget is null, then return null.
    
3.  Return the result of [getting the current value of the event handler](https://html.spec.whatwg.org/multipage/webappapis.html#getting-the-current-value-of-the-event-handler) given eventTarget and name.
    

The setter of an [event handler IDL attribute](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes) with name name, when called, must run these steps:

1.  Let eventTarget be the result of [determining the target of an event handler](https://html.spec.whatwg.org/multipage/webappapis.html#determining-the-target-of-an-event-handler) given this object and name.
    
2.  If eventTarget is null, then return.
    
3.  If the given value is null, then [deactivate an event handler](https://html.spec.whatwg.org/multipage/webappapis.html#deactivate-an-event-handler) given eventTarget and name.
    
4.  Otherwise:
    
    1.  Let handlerMap be eventTarget's [event handler map](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-map).
        
    2.  Let eventHandler be handlerMap\[name\].
        
    3.  Set eventHandler's [value](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-value) to the given value.
        
    4.  [Activate an event handler](https://html.spec.whatwg.org/multipage/webappapis.html#activate-an-event-handler) given eventTarget and name.
        

Certain [event handler IDL attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes) have additional requirements, in particular the `[onmessage](https://html.spec.whatwg.org/multipage/web-messaging.html#handler-messageport-onmessage)` attribute of `[MessagePort](https://html.spec.whatwg.org/multipage/web-messaging.html#messageport)` objects.

___

An event handler content attribute is a content attribute for a specific [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers). The name of the content attribute is the same as the [name](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-name) of the [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers).

[Event handler content attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-content-attributes), when specified, must contain valid JavaScript code which, when parsed, would match the _[FunctionBody](https://tc39.es/ecma262/#prod-FunctionBody)_ production after [automatic semicolon insertion](https://tc39.es/ecma262/#sec-automatic-semicolon-insertion).

The following [attribute change steps](https://dom.spec.whatwg.org/#concept-element-attributes-change-ext) are used to synchronize between [event handler content attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-content-attributes) and [event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers): [\[DOM\]](https://html.spec.whatwg.org/multipage/references.html#refsDOM)

1.  If namespace is not null, or localName is not the name of an [event handler content attribute](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-content-attributes) on element, then return.
    
2.  Let eventTarget be the result of [determining the target of an event handler](https://html.spec.whatwg.org/multipage/webappapis.html#determining-the-target-of-an-event-handler) given element and localName.
    
3.  If eventTarget is null, then return.
    
4.  If value is null, then [deactivate an event handler](https://html.spec.whatwg.org/multipage/webappapis.html#deactivate-an-event-handler) given eventTarget and localName.
    
5.  Otherwise:
    
    1.  If the [Should element's inline behavior be blocked by Content Security Policy?](https://w3c.github.io/webappsec-csp/#should-block-inline) algorithm returns "`Blocked`" when executed upon element, "`script attribute`", and value, then return. [\[CSP\]](https://html.spec.whatwg.org/multipage/references.html#refsCSP)
        
    2.  Let handlerMap be eventTarget's [event handler map](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-map).
        
    3.  Let eventHandler be handlerMap\[localName\].
        
    4.  Let location be the script location that triggered the execution of these steps.
        
    5.  Set eventHandler's [value](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-value) to the [internal raw uncompiled handler](https://html.spec.whatwg.org/multipage/webappapis.html#internal-raw-uncompiled-handler) value/location.
        
    6.  [Activate an event handler](https://html.spec.whatwg.org/multipage/webappapis.html#activate-an-event-handler) given eventTarget and localName.
        

Per the DOM Standard, these steps are run even if oldValue and value are identical (setting an attribute to its current value), but _not_ if oldValue and value are both null (removing an attribute that doesn't currently exist). [\[DOM\]](https://html.spec.whatwg.org/multipage/references.html#refsDOM)

___

To deactivate an event handler given an `[EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget)` object eventTarget and a string name that is the [name](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-name) of an [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers), run these steps:

1.  Let handlerMap be eventTarget's [event handler map](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-map).
    
2.  Let eventHandler be handlerMap\[name\].
    
3.  Set eventHandler's [value](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-value) to null.
    
4.  Let listener be eventHandler's [listener](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-listener).
    
5.  If listener is not null, then [remove an event listener](https://dom.spec.whatwg.org/#remove-an-event-listener) with eventTarget and listener.
    
6.  Set eventHandler's [listener](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-listener) to null.
    

To erase all event listeners and handlers given an `[EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget)` object eventTarget, run these steps:

1.  If eventTarget has an associated [event handler map](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-map), then for each name → eventHandler of eventTarget's associated [event handler map](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-map), [deactivate an event handler](https://html.spec.whatwg.org/multipage/webappapis.html#deactivate-an-event-handler) given eventTarget and name.
    
2.  [Remove all event listeners](https://dom.spec.whatwg.org/#remove-all-event-listeners) given eventTarget.
    

This algorithm is used to define `[document.open()](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-open)`.

To activate an event handler given an `[EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget)` object eventTarget and a string name that is the [name](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-name) of an [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers), run these steps:

1.  Let handlerMap be eventTarget's [event handler map](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-map).
    
2.  Let eventHandler be handlerMap\[name\].
    
3.  If eventHandler's [listener](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-listener) is not null, then return.
    
4.  Let callback be the result of creating a Web IDL `[EventListener](https://dom.spec.whatwg.org/#callbackdef-eventlistener)` instance representing a reference to a function of one argument that executes the steps of [the event handler processing algorithm](https://html.spec.whatwg.org/multipage/webappapis.html#the-event-handler-processing-algorithm), given eventTarget, name, and its argument.
    
    The `[EventListener](https://dom.spec.whatwg.org/#callbackdef-eventlistener)`'s [callback context](https://webidl.spec.whatwg.org/#dfn-callback-context) can be arbitrary; it does not impact the steps of [the event handler processing algorithm](https://html.spec.whatwg.org/multipage/webappapis.html#the-event-handler-processing-algorithm). [\[DOM\]](https://html.spec.whatwg.org/multipage/references.html#refsDOM)
    
    The callback is emphatically _not_ the [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) itself. Every event handler ends up registering the same callback, the algorithm defined below, which takes care of invoking the right code, and processing the code's return value.
    
5.  Let listener be a new [event listener](https://dom.spec.whatwg.org/#concept-event-listener) whose [type](https://dom.spec.whatwg.org/#event-listener-type) is the event handler event type corresponding to eventHandler and [callback](https://dom.spec.whatwg.org/#event-listener-callback) is callback.
    
    To be clear, an [event listener](https://dom.spec.whatwg.org/#concept-event-listener) is different from an `[EventListener](https://dom.spec.whatwg.org/#callbackdef-eventlistener)`.
    
6.  [Add an event listener](https://dom.spec.whatwg.org/#add-an-event-listener) with eventTarget and listener.
    
7.  Set eventHandler's [listener](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-listener) to listener.
    

The event listener registration happens only if the [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers)'s [value](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-value) is being set to non-null, and the [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) is not already activated. Since listeners are called in the order they were registered, assuming no [deactivation](https://html.spec.whatwg.org/multipage/webappapis.html#deactivate-an-event-handler) occurred, the order of event listeners for a particular event type will always be:

1.  the event listeners registered with `[addEventListener()](https://dom.spec.whatwg.org/#dom-eventtarget-addeventlistener)` before the first time the [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers)'s [value](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-value) was set to non-null
    
2.  then the callback to which it is currently set, if any
    
3.  and finally the event listeners registered with `[addEventListener()](https://dom.spec.whatwg.org/#dom-eventtarget-addeventlistener)` _after_ the first time the [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers)'s [value](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-value) was set to non-null.
    

This example demonstrates the order in which event listeners are invoked. If the button in this example is clicked by the user, the page will show four alerts, with the text "ONE", "TWO", "THREE", and "FOUR" respectively.

```
<button id="test">Start Demo</button>
<script>
 var button = document.getElementById('test');
 button.addEventListener('click', function () { alert('ONE') }, false);
 button.setAttribute('onclick', "alert('NOT CALLED')"); // event handler listener is registered here
 button.addEventListener('click', function () { alert('THREE') }, false);
 button.onclick = function () { alert('TWO'); };
 button.addEventListener('click', function () { alert('FOUR') }, false);
</script>
```

However, in the following example, the event handler is [deactivated](https://html.spec.whatwg.org/multipage/webappapis.html#deactivate-an-event-handler) after its initial activation (and its event listener is removed), before being reactivated at a later time. The page will show five alerts with "ONE", "TWO", "THREE", "FOUR", and "FIVE" respectively, in order.

```
<button id="test">Start Demo</button>
<script>
 var button = document.getElementById('test');
 button.addEventListener('click', function () { alert('ONE') }, false);
 button.setAttribute('onclick', "alert('NOT CALLED')"); // event handler is activated here
 button.addEventListener('click', function () { alert('TWO') }, false);
 button.onclick = null;                                 // but deactivated here
 button.addEventListener('click', function () { alert('THREE') }, false);
 button.onclick = function () { alert('FOUR'); };       // and re-activated here
 button.addEventListener('click', function () { alert('FIVE') }, false);
</script>
```

The interfaces implemented by the event object do not influence whether an [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) is triggered or not.

The event handler processing algorithm for an `[EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget)` object eventTarget, a string name representing the [name](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-name) of an [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers), and an `[Event](https://dom.spec.whatwg.org/#interface-event)` object event is as follows:

1.  Let callback be the result of [getting the current value of the event handler](https://html.spec.whatwg.org/multipage/webappapis.html#getting-the-current-value-of-the-event-handler) given eventTarget and name.
    
2.  If callback is null, then return.
    
3.  Let special error event handling be true if event is an `[ErrorEvent](https://html.spec.whatwg.org/multipage/webappapis.html#errorevent)` object, event's `[type](https://dom.spec.whatwg.org/#dom-event-type)` is `[error](https://html.spec.whatwg.org/multipage/indices.html#event-error)`, and event's `[currentTarget](https://dom.spec.whatwg.org/#dom-event-currenttarget)` implements the `[WindowOrWorkerGlobalScope](https://html.spec.whatwg.org/multipage/webappapis.html#windoworworkerglobalscope)` mixin. Otherwise, let special error event handling be false.
    
4.  Process the `[Event](https://dom.spec.whatwg.org/#interface-event)` object event as follows:
    
    If special error event handling is true
    
    [Invoke](https://webidl.spec.whatwg.org/#invoke-a-callback-function) callback with five arguments, the first one having the value of event's `[message](https://html.spec.whatwg.org/multipage/webappapis.html#dom-errorevent-message)` attribute, the second having the value of event's `[filename](https://html.spec.whatwg.org/multipage/webappapis.html#dom-errorevent-filename)` attribute, the third having the value of event's `[lineno](https://html.spec.whatwg.org/multipage/webappapis.html#dom-errorevent-lineno)` attribute, the fourth having the value of event's `[colno](https://html.spec.whatwg.org/multipage/webappapis.html#dom-errorevent-colno)` attribute, the fifth having the value of event's `[error](https://html.spec.whatwg.org/multipage/webappapis.html#dom-errorevent-error)` attribute, and with the _[callback this value](https://webidl.spec.whatwg.org/#dfn-callback-this-value)_ set to event's `[currentTarget](https://dom.spec.whatwg.org/#dom-event-currenttarget)`. Let return value be the callback's return value. [\[WEBIDL\]](https://html.spec.whatwg.org/multipage/references.html#refsWEBIDL)
    
    Otherwise
    
    [Invoke](https://webidl.spec.whatwg.org/#invoke-a-callback-function) callback with one argument, the value of which is the `[Event](https://dom.spec.whatwg.org/#interface-event)` object event, with the _[callback this value](https://webidl.spec.whatwg.org/#dfn-callback-this-value)_ set to event's `[currentTarget](https://dom.spec.whatwg.org/#dom-event-currenttarget)`. Let return value be the callback's return value. [\[WEBIDL\]](https://html.spec.whatwg.org/multipage/references.html#refsWEBIDL)
    
    If an exception gets thrown by the callback, end these steps and allow the exception to propagate. (It will propagate to the [DOM event dispatch logic](https://dom.spec.whatwg.org/#concept-event-dispatch), which will then [report the exception](https://html.spec.whatwg.org/multipage/webappapis.html#report-the-exception).)
    
5.  Process return value as follows:
    
    If event is a `[BeforeUnloadEvent](https://html.spec.whatwg.org/multipage/browsing-the-web.html#beforeunloadevent)` object and event's `[type](https://dom.spec.whatwg.org/#dom-event-type)` is `[beforeunload](https://html.spec.whatwg.org/multipage/indices.html#event-beforeunload)`
    
    In this case, the [event handler IDL attribute](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes)'s type will be `[OnBeforeUnloadEventHandler](https://html.spec.whatwg.org/multipage/webappapis.html#onbeforeunloadeventhandler)`, so return value will have been coerced into either null or a `[DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)`.
    
    If return value is not null, then:
    
    1.  Set event's [canceled flag](https://dom.spec.whatwg.org/#canceled-flag).
        
    2.  If event's `[returnValue](https://html.spec.whatwg.org/multipage/browsing-the-web.html#dom-beforeunloadevent-returnvalue)` attribute's value is the empty string, then set event's `[returnValue](https://html.spec.whatwg.org/multipage/browsing-the-web.html#dom-beforeunloadevent-returnvalue)` attribute's value to return value.
        
    
    If special error event handling is true
    
    If return value is true, then set event's [canceled flag](https://dom.spec.whatwg.org/#canceled-flag).
    
    Otherwise
    
    If return value is false, then set event's [canceled flag](https://dom.spec.whatwg.org/#canceled-flag).
    
    If we've gotten to this "Otherwise" clause because event's `[type](https://dom.spec.whatwg.org/#dom-event-type)` is `[beforeunload](https://html.spec.whatwg.org/multipage/indices.html#event-beforeunload)` but event is _not_ a `[BeforeUnloadEvent](https://html.spec.whatwg.org/multipage/browsing-the-web.html#beforeunloadevent)` object, then return value will never be false, since in such cases return value will have been coerced into either null or a `[DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)`.
    

___

The `[EventHandler](https://html.spec.whatwg.org/multipage/webappapis.html#eventhandler)` callback function type represents a callback used for event handlers. It is represented in Web IDL as follows:

```
[LegacyTreatNonObjectAsNull]
callback EventHandlerNonNull = any (Event event);
typedef EventHandlerNonNull? EventHandler;
```

In JavaScript, any `[Function](https://webidl.spec.whatwg.org/#common-Function)` object implements this interface.

For example, the following document fragment:

```
<body onload="alert(this)" onclick="alert(this)">
```

...leads to an alert saying "`[object Window]`" when the document is loaded, and an alert saying "`[object HTMLBodyElement]`" whenever the user clicks something in the page.

The return value of the function affects whether the event is canceled or not: as described above, if the return value is false, the event is canceled.

There are two exceptions in the platform, for historical reasons:

-   The `[onerror](https://html.spec.whatwg.org/multipage/webappapis.html#handler-onerror)` handlers on global objects, where returning _true_ cancels the event.
    
-   The `[onbeforeunload](https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onbeforeunload)` handler, where returning any non-null and non-undefined value will cancel the event.
    

For historical reasons, the `[onerror](https://html.spec.whatwg.org/multipage/webappapis.html#handler-onerror)` handler has different arguments:

```
[LegacyTreatNonObjectAsNull]
callback OnErrorEventHandlerNonNull = any ((Event or DOMString) event, optional DOMString source, optional unsigned long lineno, optional unsigned long colno, optional any error);
typedef OnErrorEventHandlerNonNull? OnErrorEventHandler;
```

```
window.onerror = (message, source, lineno, colno, error) => { … };
```

Similarly, the `[onbeforeunload](https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onbeforeunload)` handler has a different return value:

```
[LegacyTreatNonObjectAsNull]
callback OnBeforeUnloadEventHandlerNonNull = DOMString? (Event event);
typedef OnBeforeUnloadEventHandlerNonNull? OnBeforeUnloadEventHandler;
```

___

An internal raw uncompiled handler is a tuple with the following information:

-   An uncompiled script body
-   A location where the script body originated, in case an error needs to be reported

When the user agent is to get the current value of the event handler given an `[EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget)` object eventTarget and a string name that is the [name](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-name) of an [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers), it must run these steps:

1.  Let handlerMap be eventTarget's [event handler map](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-map).
    
2.  Let eventHandler be handlerMap\[name\].
    
3.  If eventHandler's [value](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-value) is an [internal raw uncompiled handler](https://html.spec.whatwg.org/multipage/webappapis.html#internal-raw-uncompiled-handler), then:
    
    1.  If eventTarget is an element, then let element be eventTarget, and document be element's [node document](https://dom.spec.whatwg.org/#concept-node-document). Otherwise, eventTarget is a `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` object, let element be null, and document be eventTarget's [associated `Document`](https://html.spec.whatwg.org/multipage/window-object.html#concept-document-window).
        
    2.  If [scripting is disabled](https://html.spec.whatwg.org/multipage/webappapis.html#concept-n-noscript) for document, then return null.
        
    3.  Let body be the uncompiled script body in eventHandler's [value](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-value).
        
    4.  Let location be the location where the script body originated, as given by eventHandler's [value](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-value).
        
    5.  If element is not null and element has a [form owner](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-owner), let form owner be that [form owner](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-owner). Otherwise, let form owner be null.
        
    6.  Let settings object be the [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object) of document.
        
    7.  If body is not parsable as _[FunctionBody](https://tc39.es/ecma262/#prod-FunctionBody)_ or if parsing detects an [early error](https://tc39.es/ecma262/#early-error-rule), then follow these substeps:
        
        1.  Set eventHandler's [value](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-value) to null.
            
            This does not [deactivate](https://html.spec.whatwg.org/multipage/webappapis.html#deactivate-an-event-handler) the event handler, which additionally [removes](https://dom.spec.whatwg.org/#remove-an-event-listener) the event handler's [listener](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-listener) (if present).
            
        2.  [Report the error](https://html.spec.whatwg.org/multipage/webappapis.html#report-the-error) for the appropriate [script](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script) and with the appropriate position (line number and column number) given by location, using settings object's [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-global). If the error is still _[not handled](https://html.spec.whatwg.org/multipage/webappapis.html#concept-error-nothandled)_ after this, then the error may be reported to a developer console.
            
        3.  Return null.
            
    8.  Push settings object's [realm execution context](https://html.spec.whatwg.org/multipage/webappapis.html#realm-execution-context) onto the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack); it is now the [running JavaScript execution context](https://tc39.es/ecma262/#running-execution-context).
        
        This is necessary so the subsequent invocation of [OrdinaryFunctionCreate](https://tc39.es/ecma262/#sec-ordinaryfunctioncreate) takes place in the correct [JavaScript Realm](https://tc39.es/ecma262/#sec-code-realms).
        
    9.  Let function be the result of calling [OrdinaryFunctionCreate](https://tc39.es/ecma262/#sec-ordinaryfunctioncreate), with arguments:
        
        functionPrototype
        
        [%Function.prototype%](https://tc39.es/ecma262/#sec-properties-of-the-function-prototype-object)
        
        sourceText
        
        If name is `[onerror](https://html.spec.whatwg.org/multipage/webappapis.html#handler-onerror)` and eventTarget is a `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` object
        
        The string formed by concatenating "`function` ", name, "`(event, source, lineno, colno, error) {`", U+000A LF, body, U+000A LF, and "`}`".
        
        Otherwise
        
        The string formed by concatenating "`function` ", name, "`(event) {`", U+000A LF, body, U+000A LF, and "`}`".
        
        ParameterList
        
        If name is `[onerror](https://html.spec.whatwg.org/multipage/webappapis.html#handler-onerror)` and eventTarget is a `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` object
        
        Let the function have five arguments, named `event`, `source`, `lineno`, `colno`, and `error`.
        
        Otherwise
        
        Let the function have a single argument called `event`.
        
        body
        
        The result of parsing body above.
        
        thisMode
        
        non-lexical-this
        
        scope
        
        1.  Let realm be settings object's [Realm](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object's-realm).
            
        2.  Let scope be realm.\[\[GlobalEnv\]\].
            
        3.  If eventHandler is an element's [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers), then set scope to [NewObjectEnvironment](https://tc39.es/ecma262/#sec-newobjectenvironment)(document, true, scope).
            
            (Otherwise, eventHandler is a `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` object's [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers).)
            
        4.  If form owner is not null, then set scope to [NewObjectEnvironment](https://tc39.es/ecma262/#sec-newobjectenvironment)(form owner, true, scope).
            
        5.  If element is not null, then set scope to [NewObjectEnvironment](https://tc39.es/ecma262/#sec-newobjectenvironment)(element, true, scope).
            
        6.  Return scope.
            
        
    10.  Remove settings object's [realm execution context](https://html.spec.whatwg.org/multipage/webappapis.html#realm-execution-context) from the [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack).
        
    11.  Set function.\[\[ScriptOrModule\]\] to null.
        
        This is done because the default behavior, of associating the created function with the nearest [script](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script) on the stack, can lead to path-dependent results. For example, an event handler which is first invoked by user interaction would end up with null \[\[ScriptOrModule\]\] (since then this algorithm would be first invoked when the [active script](https://html.spec.whatwg.org/multipage/webappapis.html#active-script) is null), whereas one that is first invoked by dispatching an event from script would have its \[\[ScriptOrModule\]\] set to that script.
        
        Instead, we just always set \[\[ScriptOrModule\]\] to null. This is more intuitive anyway; the idea that the first script which dispatches an event is somehow responsible for the event handler code is dubious.
        
        In practice, this only affects the resolution of relative URLs via `[import()](https://tc39.es/ecma262/#sec-import-calls)`, which consult the [base URL](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script-base-url) of the associated script. Nulling out \[\[ScriptOrModule\]\] means that [HostResolveImportedModule](https://html.spec.whatwg.org/multipage/webappapis.html#hostresolveimportedmodule(referencingscriptormodule,-modulerequest)) and [HostImportModuleDynamically](https://html.spec.whatwg.org/multipage/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-modulerequest,-promisecapability)) will fall back to the [current settings object](https://html.spec.whatwg.org/multipage/webappapis.html#current-settings-object)'s [API base URL](https://html.spec.whatwg.org/multipage/webappapis.html#api-base-url).
        
    12.  Set eventHandler's [value](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-value) to the result of creating a Web IDL `[EventHandler](https://html.spec.whatwg.org/multipage/webappapis.html#eventhandler)` callback function object whose object reference is function and whose [callback context](https://webidl.spec.whatwg.org/#dfn-callback-context) is settings object.
        
4.  Return eventHandler's [value](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-value).
    

##### 8.1.7.2 Event handlers on elements, `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` objects, and `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` objects[](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers-on-elements,-document-objects,-and-window-objects)

The following are the [event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) (and their corresponding [event handler event types](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-event-type)) that must be supported by all [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements), as both [event handler content attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-content-attributes) and [event handler IDL attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes); and that must be supported by all `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` and `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` objects, as [event handler IDL attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes):

| [Event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) | [Event handler event type](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-event-type) |
| --- | --- |
| `onabort`
[GlobalEventHandlers/onabort](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onabort "The onabort property of the GlobalEventHandlers mixin is the event handler for processing abort events.")

Support in all current engines.

Firefox9+Safari1+Chrome1+

___

Opera12.1+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android12.1+





 | `abort` |
| `onauxclick` | `[auxclick](https://w3c.github.io/uievents/#event-type-auxclick)` |
| `onbeforematch` | `[beforematch](https://html.spec.whatwg.org/multipage/indices.html#event-beforematch)` |
| `oncancel`

[GlobalEventHandlers/oncancel](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncancel "The oncancel property of the GlobalEventHandlers mixin is an event handler for processing cancel events sent to a <dialog> element.")

Support in one engine only.

FirefoxNoSafariNoChrome32+

___

Opera19+Edge79+

___

Edge (Legacy)NoInternet ExplorerNo

___

Firefox AndroidNoSafari iOSNoChrome Android32+WebView Android4.4.3+Samsung Internet2.0+Opera Android19+





 | `[cancel](https://html.spec.whatwg.org/multipage/indices.html#event-cancel)` |
| `oncanplay`

[GlobalEventHandlers/oncanplay](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplay "The oncanplay property of the GlobalEventHandlers mixin is the event handler for processing canplay events.")

Support in all current engines.

Firefox9+Safari9+Chrome32+

___

Opera19+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS9+Chrome Android32+WebView Android4.4.3+Samsung Internet2.0+Opera Android19+





 | `[canplay](https://html.spec.whatwg.org/multipage/media.html#event-media-canplay)` |
| `oncanplaythrough`

[GlobalEventHandlers/oncanplaythrough](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplaythrough "The oncanplaythrough property of the GlobalEventHandlers mixin is the event handler for processing canplaythrough events.")

Support in all current engines.

Firefox9+Safari9+Chrome32+

___

Opera19+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS9+Chrome Android32+WebView Android4.4.3+Samsung Internet2.0+Opera Android19+





 | `[canplaythrough](https://html.spec.whatwg.org/multipage/media.html#event-media-canplaythrough)` |
| `onchange`

[GlobalEventHandlers/onchange](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange "The onchange property of the GlobalEventHandlers mixin is an event handler for processing change events.")

Support in all current engines.

Firefox1+Safari3+Chrome1+

___

Opera9+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android4+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android10.1+





 | `[change](https://html.spec.whatwg.org/multipage/indices.html#event-change)` |
| `onclick`

[GlobalEventHandlers/onclick](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick "The onclick property of the GlobalEventHandlers mixin is the event handler for processing click events on a given element.")

Support in all current engines.

Firefox1+Safari3+Chrome1+

___

Opera9+Edge79+

___

Edge (Legacy)12+Internet Explorer4+

___

Firefox Android4+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android10.1+





 | `[click](https://w3c.github.io/uievents/#event-type-click)` |
| `onclose`

[GlobalEventHandlers/onclose](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclose "The onclose property of the GlobalEventHandlers mixin is an event handler for processing close events sent to a <dialog> element.")

Firefox53+SafariNoChrome32+

___

Opera19+Edge79+

___

Edge (Legacy)NoInternet ExplorerNo

___

Firefox Android53+Safari iOSNoChrome Android32+WebView Android4.4.3+Samsung Internet2.0+Opera Android19+





 | `[close](https://html.spec.whatwg.org/multipage/indices.html#event-close)` |
| `oncontextlost` | `[contextlost](https://html.spec.whatwg.org/multipage/indices.html#event-contextlost)` |
| `oncontextmenu`

[GlobalEventHandlers/oncontextmenu](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncontextmenu "The oncontextmenu property of the GlobalEventHandlers mixin is an event handler that processes contextmenu events.")

Support in all current engines.

Firefox9+Safari4+Chrome1+

___

Opera12.1+Edge79+

___

Edge (Legacy)12+Internet Explorer5+

___

Firefox Android9+Safari iOS3.2+Chrome Android18+WebView Android37+Samsung Internet1.0+Opera Android12.1+





 | `[contextmenu](https://w3c.github.io/uievents/#event-type-contextmenu)` |
| `oncontextrestored` | `[contextrestored](https://html.spec.whatwg.org/multipage/indices.html#event-contextrestored)` |
| `oncuechange`

[HTMLTrackElement/cuechange\_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTrackElement/cuechange_event "The cuechange event fires when a TextTrack has changed the currently displaying cues. The event is fired on both the TextTrack and the HTMLTrackElement in which it's being presented, if any.")

Support in all current engines.

Firefox68+Safari10+Chrome32+

___

Opera19+Edge79+

___

Edge (Legacy)14+Internet ExplorerNo

___

Firefox Android68+Safari iOS10+Chrome Android32+WebView Android4.4.3+Samsung Internet2.0+Opera Android19+





 | `[cuechange](https://html.spec.whatwg.org/multipage/media.html#event-media-cuechange)` |
| `ondblclick`

[GlobalEventHandlers/ondblclick](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondblclick "The ondblclick property of the GlobalEventHandlers mixin is an event handler that processes dblclick events on the given element.")

Support in all current engines.

Firefox9+Safari1+Chrome1+

___

Opera12.1+Edge79+

___

Edge (Legacy)12+Internet Explorer4+

___

Firefox Android9+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android12.1+





 | `[dblclick](https://w3c.github.io/uievents/#event-type-dblclick)` |
| `ondrag` | `[drag](https://html.spec.whatwg.org/multipage/dnd.html#event-dnd-drag)` |
| `ondragend` | `[dragend](https://html.spec.whatwg.org/multipage/dnd.html#event-dnd-dragend)` |
| `ondragenter` | `[dragenter](https://html.spec.whatwg.org/multipage/dnd.html#event-dnd-dragenter)` |
| `ondragleave` | `[dragleave](https://html.spec.whatwg.org/multipage/dnd.html#event-dnd-dragleave)` |
| `ondragover` | `[dragover](https://html.spec.whatwg.org/multipage/dnd.html#event-dnd-dragover)` |
| `ondragstart` | `[dragstart](https://html.spec.whatwg.org/multipage/dnd.html#event-dnd-dragstart)` |
| `ondrop` | `[drop](https://html.spec.whatwg.org/multipage/dnd.html#event-dnd-drop)` |
| `ondurationchange`

[GlobalEventHandlers/ondurationchange](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondurationchange "The ondurationchange property of the GlobalEventHandlers mixin is the event handler for processing durationchange events.")

Support in all current engines.

Firefox9+Safari9+Chrome32+

___

Opera19+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS9+Chrome Android32+WebView Android4.4.3+Samsung Internet2.0+Opera Android19+





 | `[durationchange](https://html.spec.whatwg.org/multipage/media.html#event-media-durationchange)` |
| `onemptied`

[GlobalEventHandlers/onemptied](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onemptied "The onemptied property sets and returns the event handler for the emptied event.")

Support in all current engines.

Firefox9+Safari9+Chrome32+

___

Opera19+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS9+Chrome Android32+WebView Android4.4.3+Samsung Internet2.0+Opera Android19+





 | `[emptied](https://html.spec.whatwg.org/multipage/media.html#event-media-emptied)` |
| `onended`

[GlobalEventHandlers/onended](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onended "The onended property of the GlobalEventHandlers mixin is the event handler for processing ended events.")

Support in all current engines.

Firefox9+Safari9+Chrome32+

___

Opera19+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS9+Chrome Android32+WebView Android4.4.3+Samsung Internet2.0+Opera Android19+





 | `[ended](https://html.spec.whatwg.org/multipage/media.html#event-media-ended)` |
| `onformdata`

[GlobalEventHandlers/onformdata](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onformdata "The onformdata property of the GlobalEventHandlers mixin is the event handler for processing formdata events, fired after the entry list representing the form's data is constructed. This happens when the form is submitted, but can also be triggered by the invocation of a FormData() constructor. onformdata is available on HTMLFormElement.")

Support in all current engines.

Firefox72+Safari15+Chrome77+

___

Opera64+Edge79+

___

Edge (Legacy)NoInternet ExplorerNo

___

Firefox Android79+Safari iOS15+Chrome Android77+WebView Android77+Samsung Internet12.0+Opera Android55+





 | `[formdata](https://html.spec.whatwg.org/multipage/indices.html#event-formdata)` |
| `oninput`

[GlobalEventHandlers/oninput](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput "The oninput property of the GlobalEventHandlers mixin is an event handler that processes input events on the <input>, <select>, and <textarea> elements. It also handles these events on elements where contenteditable or designMode are turned on.")

Support in all current engines.

Firefox9+Safari4+Chrome1+

___

Opera10+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS3.2+Chrome Android18+WebView Android37+Samsung Internet1.0+Opera Android10.1+





 | `[input](https://html.spec.whatwg.org/multipage/indices.html#event-input)` |
| `oninvalid`

[GlobalEventHandlers/oninvalid](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninvalid "The oninvalid property of the GlobalEventHandlers mixin is an event handler that processes invalid events.")

Support in all current engines.

Firefox9+Safari5+Chrome4+

___

Opera12.1+Edge79+

___

Edge (Legacy)13+Internet ExplorerNo

___

Firefox Android9+Safari iOS4+Chrome Android18+WebView Android37+Samsung Internet1.0+Opera Android12.1+





 | `[invalid](https://html.spec.whatwg.org/multipage/indices.html#event-invalid)` |
| `onkeydown`

[GlobalEventHandlers/onkeydown](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeydown "The onkeydown property of the GlobalEventHandlers mixin is an event handler that processes keydown events.")

Support in all current engines.

Firefox9+Safari1+Chrome1+

___

Opera12.1+Edge79+

___

Edge (Legacy)12+Internet Explorer4+

___

Firefox Android9+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android12.1+





 | `[keydown](https://w3c.github.io/uievents/#event-type-keydown)` |
| `onkeypress` | `[keypress](https://w3c.github.io/uievents/#event-type-keypress)` |
| `onkeyup`

[GlobalEventHandlers/onkeyup](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeyup "The onkeyup property of the GlobalEventHandlers mixin is an event handler that processes keyup events.")

Support in all current engines.

Firefox9+Safari1+Chrome1+

___

Opera12.1+Edge79+

___

Edge (Legacy)12+Internet Explorer4+

___

Firefox Android9+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android12.1+





 | `[keyup](https://w3c.github.io/uievents/#event-type-keyup)` |
| `onloadeddata`

[GlobalEventHandlers/onloadeddata](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadeddata "The onloadeddata property of the GlobalEventHandlers mixin is the event handler for processing loadeddata events.")

Support in all current engines.

Firefox9+Safari9+Chrome32+

___

Opera19+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS9+Chrome Android32+WebView Android4.4.3+Samsung Internet2.0+Opera Android19+





 | `[loadeddata](https://html.spec.whatwg.org/multipage/media.html#event-media-loadeddata)` |
| `onloadedmetadata`

[GlobalEventHandlers/onloadedmetadata](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadedmetadata "The onloadedmetadata property of the GlobalEventHandlers mixin is the event handler for processing loadedmetadata events.")

Support in all current engines.

Firefox9+Safari9+Chrome32+

___

Opera19+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS9+Chrome Android32+WebView Android4.4.3+Samsung Internet2.0+Opera Android19+





 | `[loadedmetadata](https://html.spec.whatwg.org/multipage/media.html#event-media-loadedmetadata)` |
| `onloadstart`

[GlobalEventHandlers/onloadstart](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadstart "The onloadstart property of the GlobalEventHandlers mixin is an event handler representing the code to be called when the loadstart event is raised (when progress has begun on the loading of a resource.)")

Support in all current engines.

Firefox9+Safari9+Chrome32+

___

Opera19+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS9+Chrome Android32+WebView Android4.4.3+Samsung Internet2.0+Opera Android19+





 | `[loadstart](https://html.spec.whatwg.org/multipage/media.html#event-media-loadstart)` |
| `onmousedown`

[GlobalEventHandlers/onmousedown](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousedown "The onmousedown property of the GlobalEventHandlers mixin is an event handler that processes mousedown events.")

Support in all current engines.

Firefox9+Safari1+Chrome1+

___

Opera12.1+Edge79+

___

Edge (Legacy)12+Internet Explorer4+

___

Firefox Android9+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android12.1+





 | `[mousedown](https://w3c.github.io/uievents/#event-type-mousedown)` |
| `onmouseenter`

[GlobalEventHandlers/onmouseenter](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseenter "The onmouseenter property of the GlobalEventHandlers mixin is the event handler for processing mouseenter events.")

Support in all current engines.

Firefox10+Safari7+Chrome30+

___

Opera17+Edge79+

___

Edge (Legacy)12+Internet Explorer5.5+

___

Firefox Android10+Safari iOS7+Chrome Android30+WebView Android4.4+Samsung Internet2.0+Opera Android18+





 | `[mouseenter](https://w3c.github.io/uievents/#event-type-mouseenter)` |
| `onmouseleave`

[GlobalEventHandlers/onmouseleave](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseleave "The onmouseleave property of the GlobalEventHandlers mixin is the event handler for processing mouseleave events.")

Support in all current engines.

Firefox10+Safari7+Chrome30+

___

Opera17+Edge79+

___

Edge (Legacy)12+Internet Explorer5.5+

___

Firefox Android10+Safari iOS7+Chrome Android30+WebView Android4.4+Samsung Internet2.0+Opera Android18+





 | `[mouseleave](https://w3c.github.io/uievents/#event-type-mouseleave)` |
| `onmousemove`

[GlobalEventHandlers/onmousemove](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousemove "The onmousemove property of the GlobalEventHandlers mixin is an event handler that processes mousemove events.")

Support in all current engines.

Firefox9+Safari1+Chrome1+

___

Opera12.1+Edge79+

___

Edge (Legacy)12+Internet Explorer4+

___

Firefox Android9+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android12.1+





 | `[mousemove](https://w3c.github.io/uievents/#event-type-mousemove)` |
| `onmouseout`

[GlobalEventHandlers/onmouseout](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseout "The onmouseout property of the GlobalEventHandlers mixin is an event handler that processes mouseout events.")

Support in all current engines.

Firefox9+Safari1+Chrome1+

___

Opera12.1+Edge79+

___

Edge (Legacy)12+Internet Explorer4+

___

Firefox Android9+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android12.1+





 | `[mouseout](https://w3c.github.io/uievents/#event-type-mouseout)` |
| `onmouseover`

[GlobalEventHandlers/onmouseover](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseover "The onmouseover property of the GlobalEventHandlers mixin is an event handler that processes mouseover events.")

Support in all current engines.

Firefox9+Safari1+Chrome1+

___

Opera12.1+Edge79+

___

Edge (Legacy)12+Internet Explorer4+

___

Firefox Android9+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android12.1+





 | `[mouseover](https://w3c.github.io/uievents/#event-type-mouseover)` |
| `onmouseup`

[GlobalEventHandlers/onmouseup](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseup "The onmouseup property of the GlobalEventHandlers mixin is an event handler that processes mouseup events.")

Support in all current engines.

Firefox9+Safari1+Chrome1+

___

Opera12.1+Edge79+

___

Edge (Legacy)12+Internet Explorer4+

___

Firefox Android9+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android12.1+





 | `[mouseup](https://w3c.github.io/uievents/#event-type-mouseup)` |
| `onpause`

[GlobalEventHandlers/onpause](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpause "The onpause property of the GlobalEventHandlers mixin is the event handler for processing pause events.")

Support in all current engines.

Firefox9+Safari9+Chrome32+

___

Opera19+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS9+Chrome Android32+WebView Android4.4.3+Samsung Internet2.0+Opera Android19+





 | `[pause](https://html.spec.whatwg.org/multipage/media.html#event-media-pause)` |
| `onplay`

[GlobalEventHandlers/onplay](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onplay "The onplay property of the GlobalEventHandlers mixin is the event handler for processing play events.")

Support in all current engines.

Firefox9+Safari9+Chrome32+

___

Opera19+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS9+Chrome Android32+WebView Android4.4.3+Samsung Internet2.0+Opera Android19+





 | `[play](https://html.spec.whatwg.org/multipage/media.html#event-media-play)` |
| `onplaying`

[GlobalEventHandlers/onplaying](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onplaying "The onplaying property of the GlobalEventHandlers mixin is the event handler for processing playing events.")

Support in all current engines.

Firefox9+Safari9+Chrome32+

___

Opera19+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS9+Chrome Android32+WebView Android4.4.3+Samsung Internet2.0+Opera Android19+





 | `[playing](https://html.spec.whatwg.org/multipage/media.html#event-media-playing)` |
| `onprogress` | `[progress](https://html.spec.whatwg.org/multipage/media.html#event-media-progress)` |
| `onratechange` | `[ratechange](https://html.spec.whatwg.org/multipage/media.html#event-media-ratechange)` |
| `onreset`

[GlobalEventHandlers/onreset](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onreset "The onreset property of the GlobalEventHandlers mixin is an event handler that processes reset events.")

Support in all current engines.

Firefox9+Safari1+Chrome1+

___

Opera12.1+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android12.1+





 | `[reset](https://html.spec.whatwg.org/multipage/indices.html#event-reset)` |
| `onsecuritypolicyviolation`

[GlobalEventHandlers/onsecuritypolicyviolation](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onsecuritypolicyviolation "The onsecuritypolicyviolation property of the GlobalEventHandlers mixin is an event handler for processing securitypolicyviolation events.")

Support in all current engines.

Firefox93+Safaripreview+Chrome97+

___

Opera83+Edge97+

___

Edge (Legacy)NoInternet ExplorerNo

___

Firefox Android93+Safari iOSNoChrome Android97+WebView Android97+Samsung InternetNoOpera AndroidNo





 | `[securitypolicyviolation](https://html.spec.whatwg.org/multipage/indices.html#event-securitypolicyviolation)` |
| `onseeked` | `[seeked](https://html.spec.whatwg.org/multipage/media.html#event-media-seeked)` |
| `onseeking` | `[seeking](https://html.spec.whatwg.org/multipage/media.html#event-media-seeking)` |
| `onselect`

[GlobalEventHandlers/onselect](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselect "The onselect property of the GlobalEventHandlers mixin is an event handler that processes select events.")

Support in all current engines.

Firefox9+Safari1+Chrome1+

___

Opera12.1+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android12.1+





 | `[select](https://html.spec.whatwg.org/multipage/indices.html#event-select)` |
| `onslotchange`

[GlobalEventHandlers/onslotchange](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onslotchange "The onslotchange property of the GlobalEventHandlers mixin is an event handler that processes slotchange events.")

Support in all current engines.

Firefox93+Safaripreview+Chrome97+

___

Opera83+Edge97+

___

Edge (Legacy)NoInternet ExplorerNo

___

Firefox Android93+Safari iOSNoChrome Android97+WebView Android97+Samsung InternetNoOpera AndroidNo





 | `[slotchange](https://html.spec.whatwg.org/multipage/indices.html#event-slotchange)` |
| `onstalled` | `[stalled](https://html.spec.whatwg.org/multipage/media.html#event-media-stalled)` |
| `onsubmit`

[GlobalEventHandlers/onsubmit](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onsubmit "The onsubmit property of the GlobalEventHandlers mixin is an event handler that processes submit events.")

Support in all current engines.

Firefox9+Safari1+Chrome1+

___

Opera12.1+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android12.1+





 | `[submit](https://html.spec.whatwg.org/multipage/indices.html#event-submit)` |
| `onsuspend` | `[suspend](https://html.spec.whatwg.org/multipage/media.html#event-media-suspend)` |
| `ontimeupdate` | `[timeupdate](https://html.spec.whatwg.org/multipage/media.html#event-media-timeupdate)` |
| `ontoggle` | `[toggle](https://html.spec.whatwg.org/multipage/indices.html#event-toggle)` |
| `onvolumechange` | `[volumechange](https://html.spec.whatwg.org/multipage/media.html#event-media-volumechange)` |
| `onwaiting` | `[waiting](https://html.spec.whatwg.org/multipage/media.html#event-media-waiting)` |
| `onwebkitanimationend` | `webkitAnimationEnd` |
| `onwebkitanimationiteration` | `webkitAnimationIteration` |
| `onwebkitanimationstart` | `webkitAnimationStart` |
| `onwebkittransitionend` | `webkitTransitionEnd` |
| `onwheel`

[GlobalEventHandlers/onwheel](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onwheel "The onwheel property of the GlobalEventHandlers mixin is an event handler that processes wheel events.")

Support in all current engines.

Firefox17+Safari7+Chrome31+

___

Opera18+Edge79+

___

Edge (Legacy)12+Internet ExplorerNo

___

Firefox Android17+Safari iOS7+Chrome Android31+WebView Android4.4.3+Samsung Internet2.0+Opera Android18+





 | `[wheel](https://w3c.github.io/uievents/#event-type-wheel)` |

___

The following are the [event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) (and their corresponding [event handler event types](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-event-type)) that must be supported by all [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) other than `[body](https://html.spec.whatwg.org/multipage/sections.html#the-body-element)` and `[frameset](https://html.spec.whatwg.org/multipage/obsolete.html#frameset)` elements, as both [event handler content attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-content-attributes) and [event handler IDL attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes); that must be supported by all `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` objects, as [event handler IDL attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes); and that must be supported by all `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` objects, as [event handler IDL attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes) on the `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` objects themselves, and with corresponding [event handler content attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-content-attributes) and [event handler IDL attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes) exposed on all `[body](https://html.spec.whatwg.org/multipage/sections.html#the-body-element)` and `[frameset](https://html.spec.whatwg.org/multipage/obsolete.html#frameset)` elements that are owned by that `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` object's [associated `Document`](https://html.spec.whatwg.org/multipage/window-object.html#concept-document-window):

| [Event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) | [Event handler event type](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-event-type) |
| --- | --- |
| `onblur`
[GlobalEventHandlers/onblur](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onblur "The onblur property of the GlobalEventHandlers mixin is the event handler for processing blur events. It's available on Element, Document, and Window.")

Support in all current engines.

Firefox9+Safari1+Chrome1+

___

Opera12.1+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android12.1+





 | `[blur](https://html.spec.whatwg.org/multipage/indices.html#event-blur)` |
| `onerror`

[GlobalEventHandlers/onerror](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror "The onerror property of the GlobalEventHandlers mixin is an event handler that processes error events.")

Support in all current engines.

Firefox1+Safari6+Chrome10+

___

Opera11.6+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android4+Safari iOS6+Chrome Android18+WebView Android37+Samsung Internet1.0+Opera Android12+





 | `[error](https://html.spec.whatwg.org/multipage/indices.html#event-error)` |
| `onfocus`

[GlobalEventHandlers/onfocus](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onfocus "The onfocus property of the GlobalEventHandlers mixin is an event handler that processes focus events on the given element.")

Support in all current engines.

Firefox9+Safari1+Chrome1+

___

Opera12.1+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android12.1+





 | `[focus](https://html.spec.whatwg.org/multipage/indices.html#event-focus)` |
| `onload`

[GlobalEventHandlers/onload](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload "The onload property of the GlobalEventHandlers mixin is an event handler that processes load events on a Window, XMLHttpRequest, <img> element, etc.")

Support in all current engines.

Firefox1+Safari3+Chrome1+

___

Opera9+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android4+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android10.1+





 | `[load](https://html.spec.whatwg.org/multipage/indices.html#event-load)` |
| `onresize`

[GlobalEventHandlers/onresize](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onresize "The onresize property of the GlobalEventHandlers interface is an event handler that processes resize events.")

Support in all current engines.

Firefox38+Safari10.1+Chrome34+

___

Opera21+Edge79+

___

Edge (Legacy)NoInternet Explorer🔰 4+

___

Firefox Android38+Safari iOS10.3+Chrome Android34+WebView Android37+Samsung Internet2.0+Opera Android21+





 | `[resize](https://drafts.csswg.org/cssom-view/#eventdef-window-resize)` |
| `onscroll`

[GlobalEventHandlers/onscroll](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onscroll "The onscroll property of the GlobalEventHandlers mixin is an event handler that processes scroll events.")

Support in all current engines.

Firefox9+Safari1.3+Chrome1+

___

Opera12.1+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android12.1+





 | `[scroll](https://drafts.csswg.org/cssom-view/#eventdef-document-scroll)` |

We call the [set](https://infra.spec.whatwg.org/#ordered-set) of the [names](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-name) of the [event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) listed in the first column of this table the `Window`\-reflecting body element event handler set.

___

The following are the [event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) (and their corresponding [event handler event types](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-event-type)) that must be supported by `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` objects, as [event handler IDL attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes) on the `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` objects themselves, and with corresponding [event handler content attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-content-attributes) and [event handler IDL attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes) exposed on all `[body](https://html.spec.whatwg.org/multipage/sections.html#the-body-element)` and `[frameset](https://html.spec.whatwg.org/multipage/obsolete.html#frameset)` elements that are owned by that `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` object's [associated `Document`](https://html.spec.whatwg.org/multipage/window-object.html#concept-document-window):

| [Event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) | [Event handler event type](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-event-type) |
| --- | --- |
| `onafterprint`
[Window/afterprint\_event](https://developer.mozilla.org/en-US/docs/Web/API/Window/afterprint_event "The afterprint event is fired after the associated document has started printing or the print preview has been closed.")

Support in all current engines.

Firefox6+Safari13+Chrome63+

___

Opera50+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android6+Safari iOS13+Chrome Android63+WebView Android63+Samsung Internet8.0+Opera Android46+





 | `[afterprint](https://html.spec.whatwg.org/multipage/indices.html#event-afterprint)` |
| `onbeforeprint`

[Window/beforeprint\_event](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeprint_event "The beforeprint event is fired when the associated document is about to be printed or previewed for printing.")

Support in all current engines.

Firefox6+Safari13+Chrome63+

___

Opera50+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android6+Safari iOS13+Chrome Android63+WebView Android63+Samsung Internet8.0+Opera Android46+





 | `[beforeprint](https://html.spec.whatwg.org/multipage/indices.html#event-beforeprint)` |
| `onbeforeunload`

[Window/beforeunload\_event](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event "The beforeunload event is fired when the window, the document and its resources are about to be unloaded. The document is still visible and the event is still cancelable at this point.")

Support in all current engines.

Firefox1+Safari3+Chrome1+

___

Opera12+Edge79+

___

Edge (Legacy)12+Internet Explorer4+

___

Firefox Android4+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android12+





 | `[beforeunload](https://html.spec.whatwg.org/multipage/indices.html#event-beforeunload)` |
| `onhashchange`

[Window/hashchange\_event](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event "The hashchange event is fired when the fragment identifier of the URL has changed (the part of the URL beginning with and following the # symbol).")

Support in all current engines.

Firefox3.6+Safari5+Chrome8+

___

Opera10.6+Edge79+

___

Edge (Legacy)12+Internet Explorer8+

___

Firefox Android4+Safari iOS5+Chrome Android18+WebView Android37+Samsung Internet1.0+Opera Android11+





 | `[hashchange](https://html.spec.whatwg.org/multipage/indices.html#event-hashchange)` |
| `onlanguagechange`

[Window/languagechange\_event](https://developer.mozilla.org/en-US/docs/Web/API/Window/languagechange_event "The languagechange event is fired at the global scope object when the user's preferred language changes.")

Support in all current engines.

Firefox32+Safari10.1+Chrome37+

___

Opera24+Edge79+

___

Edge (Legacy)NoInternet ExplorerNo

___

Firefox Android4+Safari iOS10.3+Chrome Android37+WebView Android37+Samsung Internet4.0+Opera Android24+





 | `[languagechange](https://html.spec.whatwg.org/multipage/indices.html#event-languagechange)` |
| `onmessage`

[Window/message\_event](https://developer.mozilla.org/en-US/docs/Web/API/Window/message_event "The message event is fired on a Window object when the window receives a message, for example from a call to Window.postMessage() from another browsing context.")

Support in all current engines.

Firefox9+Safari4+Chrome60+

___

Opera47+Edge79+

___

Edge (Legacy)12+Internet Explorer8+

___

Firefox Android9+Safari iOS4+Chrome Android60+WebView Android60+Samsung Internet8.0+Opera Android47+





 | `[message](https://html.spec.whatwg.org/multipage/indices.html#event-message)` |
| `onmessageerror`

[Window/messageerror\_event](https://developer.mozilla.org/en-US/docs/Web/API/Window/messageerror_event "The messageerror event is fired on a Window object when it receives a message that can't be deserialized.")

Firefox57+SafariNoChrome60+

___

Opera47+Edge79+

___

Edge (Legacy)18Internet ExplorerNo

___

Firefox Android57+Safari iOSNoChrome Android60+WebView Android60+Samsung Internet8.0+Opera Android47+





 | `[messageerror](https://html.spec.whatwg.org/multipage/indices.html#event-messageerror)` |
| `onoffline`

[Window/offline\_event](https://developer.mozilla.org/en-US/docs/Web/API/Window/offline_event "The offline event of the Window interface is fired when the browser has lost access to the network and the value of Navigator.onLine switches to false.")

Support in all current engines.

Firefox9+Safari4+Chrome3+

___

Opera15+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS3+Chrome Android18+WebView Android37+Samsung Internet1.0+Opera Android14+





 | `[offline](https://html.spec.whatwg.org/multipage/indices.html#event-offline)` |
| `ononline`

[Window/online\_event](https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event "The online event of the Window interface is fired when the browser has gained access to the network and the value of Navigator.onLine switches to true.")

Support in all current engines.

Firefox9+Safari4+Chrome3+

___

Opera15+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS3+Chrome Android18+WebView Android37+Samsung Internet1.0+Opera Android14+





 | `[online](https://html.spec.whatwg.org/multipage/indices.html#event-online)` |
| `onpagehide` | `[pagehide](https://html.spec.whatwg.org/multipage/indices.html#event-pagehide)` |
| `onpageshow` | `[pageshow](https://html.spec.whatwg.org/multipage/indices.html#event-pageshow)` |
| `onpopstate`

[Window/popstate\_event](https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event "The popstate event of the Window interface is fired when the active history entry changes while the user navigates the session history. It changes the current history entry to that of the last page the user visited or, if history.pushState() has been used to add a history entry to the history stack, that history entry is used instead.")

Support in all current engines.

Firefox4+Safari5+Chrome5+

___

Opera11.5+Edge79+

___

Edge (Legacy)12+Internet Explorer10+

___

Firefox Android4+Safari iOS4.2+Chrome Android18+WebView Android37+Samsung Internet1.0+Opera Android11.5+





 | `[popstate](https://html.spec.whatwg.org/multipage/indices.html#event-popstate)` |
| `onrejectionhandled`

[Window/rejectionhandled\_event](https://developer.mozilla.org/en-US/docs/Web/API/Window/rejectionhandled_event "The rejectionhandled event is sent to the script's global scope (usually window but also Worker) whenever a JavaScript Promise is rejected but after the promise rejection has been handled.")

Support in all current engines.

Firefox69+Safari11+Chrome49+

___

Opera36+Edge79+

___

Edge (Legacy)NoInternet ExplorerNo

___

Firefox Android79+Safari iOS11.3+Chrome Android49+WebView Android49+Samsung Internet5.0+Opera Android36+





 | `[rejectionhandled](https://html.spec.whatwg.org/multipage/indices.html#event-rejectionhandled)` |
| `onstorage`

[Window/storage\_event](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event "The storage event of the Window interface fires when a storage area (localStorage) has been modified in the context of another document.")

Support in all current engines.

Firefox45+Safari4+Chrome1+

___

Opera15+Edge79+

___

Edge (Legacy)15+Internet Explorer9+

___

Firefox Android45+Safari iOS4+Chrome Android18+WebView Android37+Samsung Internet1.0+Opera Android14+





 | `[storage](https://html.spec.whatwg.org/multipage/indices.html#event-storage)` |
| `onunhandledrejection`

[Window/unhandledrejection\_event](https://developer.mozilla.org/en-US/docs/Web/API/Window/unhandledrejection_event "The unhandledrejection event is sent to the global scope of a script when a JavaScript Promise that has no rejection handler is rejected; typically, this is the window, but may also be a Worker.")

Support in all current engines.

Firefox69+Safari11+Chrome49+

___

Opera36+Edge79+

___

Edge (Legacy)NoInternet ExplorerNo

___

Firefox Android79+Safari iOS11.3+Chrome Android49+WebView Android49+Samsung Internet5.0+Opera Android36+





 | `[unhandledrejection](https://html.spec.whatwg.org/multipage/indices.html#event-unhandledrejection)` |
| `onunload`

[Window/unload\_event](https://developer.mozilla.org/en-US/docs/Web/API/Window/unload_event "The unload event is fired when the document or a child resource is being unloaded.")

Support in all current engines.

Firefox1+Safari3+Chrome1+

___

Opera4+Edge79+

___

Edge (Legacy)12+Internet Explorer4+

___

Firefox Android4+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android10.1+





 | `[unload](https://html.spec.whatwg.org/multipage/indices.html#event-unload)` |

This list of [event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) is reified as [event handler IDL attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes) through the `[WindowEventHandlers](https://html.spec.whatwg.org/multipage/webappapis.html#windoweventhandlers)` interface mixin.

___

The following are the [event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) (and their corresponding [event handler event types](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-event-type)) that must be supported by all [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements), as both [event handler content attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-content-attributes) and [event handler IDL attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes); and that must be supported by all `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` objects, as [event handler IDL attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes):

| [Event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) | [Event handler event type](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-event-type) |
| --- | --- |
| `oncut`
[HTMLElement/cut\_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/cut_event "The cut event fires when the user initiates a cut action through the browser's user interface.")

Support in all current engines.

Firefox9+Safari3+Chrome1+

___

Opera12.1+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android12.1+





 | `[cut](https://html.spec.whatwg.org/multipage/indices.html#event-cut)` |
| `oncopy`

[HTMLElement/copy\_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/copy_event "The copy event fires when the user initiates a copy action through the browser's user interface.")

Support in all current engines.

Firefox3+Safari3+Chrome1+

___

Opera12.1+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android4+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android12.1+





 | `[copy](https://html.spec.whatwg.org/multipage/indices.html#event-copy)` |
| `onpaste`

[HTMLElement/paste\_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/paste_event "The paste event fires when the user initiates a paste action through the browser's user interface.")

Support in all current engines.

Firefox9+Safari3+Chrome1+

___

Opera12.1+Edge79+

___

Edge (Legacy)12+Internet Explorer9+

___

Firefox Android9+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android12.1+





 | `[paste](https://html.spec.whatwg.org/multipage/indices.html#event-paste)` |

This list of [event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) is reified as [event handler IDL attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes) through the `[DocumentAndElementEventHandlers](https://html.spec.whatwg.org/multipage/webappapis.html#documentandelementeventhandlers)` interface mixin.

___

The following are the [event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) (and their corresponding [event handler event types](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-event-type)) that must be supported on `[Document](https://html.spec.whatwg.org/multipage/dom.html#document)` objects as [event handler IDL attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes):

| [Event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) | [Event handler event type](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-event-type) |
| --- | --- |
| `onreadystatechange` | `[readystatechange](https://html.spec.whatwg.org/multipage/indices.html#event-readystatechange)` |
| `onvisibilitychange`
[Document/visibilitychange\_event](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event "The visibilitychange event is fired at the document when the contents of its tab have become visible or have been hidden.")

Firefox56+Safari🔰 14+Chrome62+

___

Opera49+Edge79+

___

Edge (Legacy)18Internet Explorer🔰 10+

___

Firefox Android56+Safari iOS🔰 14+Chrome Android62+WebView Android62+Samsung Internet8.0+Opera Android46+





 | `[visibilitychange](https://html.spec.whatwg.org/multipage/indices.html#event-visibilitychange)` |

###### 8.1.7.2.1 IDL definitions[](https://html.spec.whatwg.org/multipage/webappapis.html#idl-definitions)

[GlobalEventHandlers](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers "The GlobalEventHandlers mixin describes the event handlers common to several interfaces like HTMLElement, Document, or Window. Each of these interfaces can, of course, add more event handlers in addition to the ones listed below.")

Support in all current engines.

Firefox1+Safari1+Chrome1+

___

Opera12.1+Edge79+

___

Edge (Legacy)12+Internet Explorer4+

___

Firefox Android4+Safari iOS1+Chrome Android18+WebView Android1+Samsung Internet1.0+Opera Android12.1+

```
interface mixin GlobalEventHandlers {
  attribute EventHandler onabort;
  attribute EventHandler onauxclick;
  attribute EventHandler onbeforematch;
  attribute EventHandler onblur;
  attribute EventHandler oncancel;
  attribute EventHandler oncanplay;
  attribute EventHandler oncanplaythrough;
  attribute EventHandler onchange;
  attribute EventHandler onclick;
  attribute EventHandler onclose;
  attribute EventHandler oncontextlost;
  attribute EventHandler oncontextmenu;
  attribute EventHandler oncontextrestored;
  attribute EventHandler oncuechange;
  attribute EventHandler ondblclick;
  attribute EventHandler ondrag;
  attribute EventHandler ondragend;
  attribute EventHandler ondragenter;
  attribute EventHandler ondragleave;
  attribute EventHandler ondragover;
  attribute EventHandler ondragstart;
  attribute EventHandler ondrop;
  attribute EventHandler ondurationchange;
  attribute EventHandler onemptied;
  attribute EventHandler onended;
  attribute OnErrorEventHandler onerror;
  attribute EventHandler onfocus;
  attribute EventHandler onformdata;
  attribute EventHandler oninput;
  attribute EventHandler oninvalid;
  attribute EventHandler onkeydown;
  attribute EventHandler onkeypress;
  attribute EventHandler onkeyup;
  attribute EventHandler onload;
  attribute EventHandler onloadeddata;
  attribute EventHandler onloadedmetadata;
  attribute EventHandler onloadstart;
  attribute EventHandler onmousedown;
  [LegacyLenientThis] attribute EventHandler onmouseenter;
  [LegacyLenientThis] attribute EventHandler onmouseleave;
  attribute EventHandler onmousemove;
  attribute EventHandler onmouseout;
  attribute EventHandler onmouseover;
  attribute EventHandler onmouseup;
  attribute EventHandler onpause;
  attribute EventHandler onplay;
  attribute EventHandler onplaying;
  attribute EventHandler onprogress;
  attribute EventHandler onratechange;
  attribute EventHandler onreset;
  attribute EventHandler onresize;
  attribute EventHandler onscroll;
  attribute EventHandler onsecuritypolicyviolation;
  attribute EventHandler onseeked;
  attribute EventHandler onseeking;
  attribute EventHandler onselect;
  attribute EventHandler onslotchange;
  attribute EventHandler onstalled;
  attribute EventHandler onsubmit;
  attribute EventHandler onsuspend;
  attribute EventHandler ontimeupdate;
  attribute EventHandler ontoggle;
  attribute EventHandler onvolumechange;
  attribute EventHandler onwaiting;
  attribute EventHandler onwebkitanimationend;
  attribute EventHandler onwebkitanimationiteration;
  attribute EventHandler onwebkitanimationstart;
  attribute EventHandler onwebkittransitionend;
  attribute EventHandler onwheel;
};

interface mixin WindowEventHandlers {
  attribute EventHandler onafterprint;
  attribute EventHandler onbeforeprint;
  attribute OnBeforeUnloadEventHandler onbeforeunload;
  attribute EventHandler onhashchange;
  attribute EventHandler onlanguagechange;
  attribute EventHandler onmessage;
  attribute EventHandler onmessageerror;
  attribute EventHandler onoffline;
  attribute EventHandler ononline;
  attribute EventHandler onpagehide;
  attribute EventHandler onpageshow;
  attribute EventHandler onpopstate;
  attribute EventHandler onrejectionhandled;
  attribute EventHandler onstorage;
  attribute EventHandler onunhandledrejection;
  attribute EventHandler onunload;
};

interface mixin DocumentAndElementEventHandlers {
  attribute EventHandler oncopy;
  attribute EventHandler oncut;
  attribute EventHandler onpaste;
};
```

##### 8.1.7.3 Event firing[](https://html.spec.whatwg.org/multipage/webappapis.html#event-firing)

Certain operations and methods are defined as firing events on elements. For example, the `[click()](https://html.spec.whatwg.org/multipage/interaction.html#dom-click)` method on the `[HTMLElement](https://html.spec.whatwg.org/multipage/dom.html#htmlelement)` interface is defined as firing a `[click](https://w3c.github.io/uievents/#event-type-click)` event on the element. [\[UIEVENTS\]](https://html.spec.whatwg.org/multipage/references.html#refsUIEVENTS)

Firing a synthetic pointer event named e at target, with an optional not trusted flag, means running these steps:

1.  Let event be the result of [creating an event](https://dom.spec.whatwg.org/#concept-event-create) using `[PointerEvent](https://w3c.github.io/pointerevents/#pointerevent-interface)`.
    
2.  Initialize event's `[type](https://dom.spec.whatwg.org/#dom-event-type)` attribute to e.
    
3.  Initialize event's `[bubbles](https://dom.spec.whatwg.org/#dom-event-bubbles)` and `[cancelable](https://dom.spec.whatwg.org/#dom-event-cancelable)` attributes to true.
    
4.  Set event's [composed flag](https://dom.spec.whatwg.org/#composed-flag).
    
5.  If the not trusted flag is set, initialize event's `[isTrusted](https://dom.spec.whatwg.org/#dom-event-istrusted)` attribute to false.
    
6.  Initialize event's `ctrlKey`, `shiftKey`, `altKey`, and `metaKey` attributes according to the current state of the key input device, if any (false for any keys that are not available).
    
7.  Initialize event's `[view](https://w3c.github.io/uievents/#dom-uievent-view)` attribute to target's [node document](https://dom.spec.whatwg.org/#concept-node-document)'s `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` object, if any, and null otherwise.
    
8.  event's `getModifierState()` method is to return values appropriately describing the current state of the key input device.
    
9.  Return the result of [dispatching](https://dom.spec.whatwg.org/#concept-event-dispatch) event at target.
    

Firing a `click` event at target means [firing a synthetic pointer event named `click`](https://html.spec.whatwg.org/multipage/webappapis.html#fire-a-synthetic-pointer-event) at target.

### 8.2 The `[WindowOrWorkerGlobalScope](https://html.spec.whatwg.org/multipage/webappapis.html#windoworworkerglobalscope)` mixin[](https://html.spec.whatwg.org/multipage/webappapis.html#windoworworkerglobalscope-mixin)

The `[WindowOrWorkerGlobalScope](https://html.spec.whatwg.org/multipage/webappapis.html#windoworworkerglobalscope)` mixin is for use of APIs that are to be exposed on `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` and `[WorkerGlobalScope](https://html.spec.whatwg.org/multipage/workers.html#workerglobalscope)` objects.

Other standards are encouraged to further extend it using `partial interface mixin [WindowOrWorkerGlobalScope](https://html.spec.whatwg.org/multipage/webappapis.html#windoworworkerglobalscope) { … };` along with an appropriate reference.

```
typedef (DOMString or Function) TimerHandler;

interface mixin WindowOrWorkerGlobalScope {
  [Replaceable] readonly attribute USVString origin;
  readonly attribute boolean isSecureContext;
  readonly attribute boolean crossOriginIsolated;

  undefined reportError(any e);

  // base64 utility methods
  DOMString btoa(DOMString data);
  ByteString atob(DOMString data);

  // timers
  long setTimeout(TimerHandler handler, optional long timeout = 0, any... arguments);
  undefined clearTimeout(optional long id = 0);
  long setInterval(TimerHandler handler, optional long timeout = 0, any... arguments);
  undefined clearInterval(optional long id = 0);

  // microtask queuing
  undefined queueMicrotask(VoidFunction callback);

  // ImageBitmap
  Promise<ImageBitmap> createImageBitmap(ImageBitmapSource image, optional ImageBitmapOptions options = {});
  Promise<ImageBitmap> createImageBitmap(ImageBitmapSource image, long sx, long sy, long sw, long sh, optional ImageBitmapOptions options = {});

  // structured cloning
  any structuredClone(any value, optional StructuredSerializeOptions options = {});
};
Window includes WindowOrWorkerGlobalScope;
WorkerGlobalScope includes WindowOrWorkerGlobalScope;
```

`self.[isSecureContext](https://html.spec.whatwg.org/multipage/webappapis.html#dom-issecurecontext)`

[isSecureContext](https://developer.mozilla.org/en-US/docs/Web/API/isSecureContext "The global isSecureContext read-only property returns a boolean indicating whether the current context is secure (true) or not (false).")

Support in all current engines.

Firefox49+Safari11.1+Chrome47+

___

Opera34+Edge79+

___

Edge (Legacy)15+Internet ExplorerNo

___

Firefox Android49+Safari iOS11.3+Chrome Android47+WebView Android47+Samsung Internet5.0+Opera Android34+

Returns whether or not this global object represents a [secure context](https://html.spec.whatwg.org/multipage/webappapis.html#secure-context). [\[SECURE-CONTEXTS\]](https://html.spec.whatwg.org/multipage/references.html#refsSECURE-CONTEXTS)

`self.[origin](https://html.spec.whatwg.org/multipage/webappapis.html#dom-origin)`

[origin](https://developer.mozilla.org/en-US/docs/Web/API/origin "The global origin read-only property returns the origin of the global scope, serialized as a string.")

Support in all current engines.

Firefox54+Safari11+Chrome59+

___

Opera46+Edge79+

___

Edge (Legacy)18Internet ExplorerNo

___

Firefox Android54+Safari iOS11+Chrome Android59+WebView Android59+Samsung Internet7.0+Opera Android43+

Returns the global object's [origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin), serialized as string.

`self.[crossOriginIsolated](https://html.spec.whatwg.org/multipage/webappapis.html#dom-crossoriginisolated)`

[crossOriginIsolated](https://developer.mozilla.org/en-US/docs/Web/API/crossOriginIsolated "The global crossOriginIsolated read-only property returns a boolean value that indicates whether a SharedArrayBuffer can be sent via a Window.postMessage() call.")

Support in all current engines.

Firefox72+Safari15.2+Chrome87+

___

Opera73+Edge87+

___

Edge (Legacy)NoInternet ExplorerNo

___

Firefox AndroidNoSafari iOS15.2+Chrome Android87+WebView AndroidNoSamsung Internet14.0+Opera AndroidNo

Returns whether scripts running in this global are allowed to use APIs that require cross-origin isolation. This depends on the \``[Cross-Origin-Opener-Policy](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policy-2)`\` and \``[Cross-Origin-Embedder-Policy](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-embedder-policy)`\` HTTP response headers and the "`[cross-origin-isolated](https://html.spec.whatwg.org/multipage/infrastructure.html#cross-origin-isolated-feature)`" feature.

Developers are strongly encouraged to use `self.origin` over `location.origin`. The former returns the [origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin) of the environment, the latter of the URL of the environment. Imagine the following script executing in a document on `https://stargate.example/`:

```
var frame = document.createElement("iframe")
frame.onload = function() {
  var frameWin = frame.contentWindow
  console.log(frameWin.location.origin) // "null"
  console.log(frameWin.origin) // "https://stargate.example"
}
document.body.appendChild(frame)
```

`self.origin` is a more reliable security indicator.

The `isSecureContext` getter steps are to return true if [this](https://webidl.spec.whatwg.org/#this)'s [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object) is a [secure context](https://html.spec.whatwg.org/multipage/webappapis.html#secure-context), or false otherwise.

The `origin` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)'s [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object)'s [origin](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-origin), [serialized](https://html.spec.whatwg.org/multipage/origin.html#ascii-serialisation-of-an-origin).

The `crossOriginIsolated` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)'s [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object)'s [cross-origin isolated capability](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-cross-origin-isolated-capability).

### 8.3 Base64 utility methods[](https://html.spec.whatwg.org/multipage/webappapis.html#atob)

The `[atob()](https://html.spec.whatwg.org/multipage/webappapis.html#dom-atob)` and `[btoa()](https://html.spec.whatwg.org/multipage/webappapis.html#dom-btoa)` methods allow developers to transform content to and from the base64 encoding.

In these APIs, for mnemonic purposes, the "b" can be considered to stand for "binary", and the "a" for "ASCII". In practice, though, for primarily historical reasons, both the input and output of these functions are Unicode strings.

`result = self.[btoa](https://html.spec.whatwg.org/multipage/webappapis.html#dom-btoa)(data)`

[btoa](https://developer.mozilla.org/en-US/docs/Web/API/btoa "The btoa() method creates a Base64-encoded ASCII string from a binary string (i.e., a String object in which each character in the string is treated as a byte of binary data).")

Support in all current engines.

Firefox1+Safari3+Chrome4+

___

Opera10.5+Edge79+

___

Edge (Legacy)12+Internet Explorer10+

___

Firefox Android4+Safari iOS1+Chrome Android18+WebView Android37+Samsung Internet1.0+Opera Android11+

Takes the input data, in the form of a Unicode string containing only characters in the range U+0000 to U+00FF, each representing a binary byte with values 0x00 to 0xFF respectively, and converts it to its base64 representation, which it returns.

Throws an ["`InvalidCharacterError`"](https://webidl.spec.whatwg.org/#invalidcharactererror) `[DOMException](https://webidl.spec.whatwg.org/#dfn-DOMException)` exception if the input string contains any out-of-range characters.

`result = self.[atob](https://html.spec.whatwg.org/multipage/webappapis.html#dom-atob)(data)`

[atob](https://developer.mozilla.org/en-US/docs/Web/API/atob "The atob() function decodes a string of data which has been encoded using Base64 encoding. You can use the btoa() method to encode and transmit data which may otherwise cause communication problems, then transmit it and use the atob() method to decode the data again. For example, you can encode, transmit, and decode control characters such as ASCII values 0 through 31.")

Support in all current engines.

Firefox1+Safari3+Chrome4+

___

Opera10.5+Edge79+

___

Edge (Legacy)12+Internet Explorer10+

___

Firefox Android4+Safari iOS1+Chrome Android18+WebView Android37+Samsung Internet1.0+Opera Android11+

Takes the input data, in the form of a Unicode string containing base64-encoded binary data, decodes it, and returns a string consisting of characters in the range U+0000 to U+00FF, each representing a binary byte with values 0x00 to 0xFF respectively, corresponding to that binary data.

Throws an ["`InvalidCharacterError`"](https://webidl.spec.whatwg.org/#invalidcharactererror) `[DOMException](https://webidl.spec.whatwg.org/#dfn-DOMException)` if the input string is not valid base64 data.

The `btoa(data)` method must throw an ["`InvalidCharacterError`"](https://webidl.spec.whatwg.org/#invalidcharactererror) `[DOMException](https://webidl.spec.whatwg.org/#dfn-DOMException)` if data contains any character whose code point is greater than U+00FF. Otherwise, the user agent must convert data to a byte sequence whose nth byte is the eight-bit representation of the nth code point of data, and then must apply [forgiving-base64 encode](https://infra.spec.whatwg.org/#forgiving-base64-encode) to that byte sequence and return the result.

The `atob(data)` method steps are:

1.  Let decodedData be the result of running [forgiving-base64 decode](https://infra.spec.whatwg.org/#forgiving-base64-decode) on data.
    
2.  If decodedData is failure, then throw an ["`InvalidCharacterError`"](https://webidl.spec.whatwg.org/#invalidcharactererror) `[DOMException](https://webidl.spec.whatwg.org/#dfn-DOMException)`.
    
3.  Return decodedData.
    

[← 7.11 Browsing the web](https://html.spec.whatwg.org/multipage/browsing-the-web.html) — [Table of Contents](https://html.spec.whatwg.org/multipage/) — [8.4 Dynamic markup insertion →](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html)

Url: https://html.spec.whatwg.org/multipage/webappapis.html#scripting