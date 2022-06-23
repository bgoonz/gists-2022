Share Counts
============

I have always struggled with getting all the various share buttons from Facebook, Twitter, Google Plus, Pinterest, etc to align correctly and to not look like a tacky explosion of buttons.  Seeing a number of sites rolling their own share buttons with counts, for example [The Next Web](http://thenextweb.com/shareables/2012/05/08/move-over-zuck-abraham-lincoln-filed-a-patent-for-facebook-in-1845/) I decided to look into the various APIs on how to simply return the share count.

**If you want to roll up all of these into a single jQuery plugin check out [Sharrre](http://sharrre.com/)**

*Many of these API calls and methods are undocumented, so anticipate that they will change in the future.  Also, if you are planning on rolling these out across a site I would recommend creating a simple endpoint that periodically caches results from all of the APIs so that you are not overloading the services will requests.*

Twitter
-------

**GET URL:**

`http://cdn.api.twitter.com/1/urls/count.json?url=http://stylehatch.co`

**Returns:**
```json
{
	"count":528,
	"url":"http://stylehatch.co/"
}
```

Facebook
--------

**GET URL:**

`http://graph.facebook.com/?id=http://stylehatch.co`

**Returns:**

```json
{
   "id": "http://stylehatch.co",
   "shares": 61
}
```

Pinterest
---------

**GET URL:**

`http://api.pinterest.com/v1/urls/count.json?callback=&url=http://stylehatch.co`

**Result:**

```
({"count": 0, "url": "http://stylehatch.co"})
```

LinkedIn
--------

**GET URL:**

`http://www.linkedin.com/countserv/count/share?url=http://stylehatch.co&format=json`

**Returns:**

```json
{
	"count":17,
	"fCnt":"17",
	"fCntPlusOne":"18",
	"url":"http:\/\/stylehatch.co"
}
```

Google Plus
-----------

**POST URL:**

`https://clients6.google.com/rpc?key=YOUR_API_KEY`

**POST body:**

```json
[{
	"method":"pos.plusones.get",
	"id":"p",
	"params":{
		"nolog":true,
		"id":"http://stylehatch.co/",
		"source":"widget",
		"userId":"@viewer",
		"groupId":"@self"
		},
	"jsonrpc":"2.0",
	"key":"p",
	"apiVersion":"v1"
}]
```

**Returns**
```json

[{
	"result": { 
		"kind": "pos#plusones", 
		"id": "http://stylehatch.co/", 
		"isSetByViewer": false, 
		"metadata": {
			"type": "URL", 
			"globalCounts": {
				"count": 3097.0
			}
		}
	} ,
	"id": "p"
}]
```

StumbledUpon
------------

**GET URL:**

`http://www.stumbleupon.com/services/1.01/badge.getinfo?url=http://stylehatch.co`

**Result:**
```json

{
	"result":{
		"url":"http:\/\/stylehatch.co\/",
		"in_index":true,
		"publicid":"1iOLcK",
		"views":39,
		"title":"Style Hatch - Hand Crafted Digital Goods",
		"thumbnail":"http:\/\/cdn.stumble-upon.com\/mthumb\/941\/72725941.jpg",
		"thumbnail_b":"http:\/\/cdn.stumble-upon.com\/bthumb\/941\/72725941.jpg",
		"submit_link":"http:\/\/www.stumbleupon.com\/submit\/?url=http:\/\/stylehatch.co\/",
		"badge_link":"http:\/\/www.stumbleupon.com\/badge\/?url=http:\/\/stylehatch.co\/",
		"info_link":"http:\/\/www.stumbleupon.com\/url\/stylehatch.co\/"
	},
	"timestamp":1336520555,
	"success":true
}
```