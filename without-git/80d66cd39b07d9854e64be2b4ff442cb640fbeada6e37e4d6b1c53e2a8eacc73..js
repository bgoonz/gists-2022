var websiteToJson = require("website-to-json")
var trim = require('trim')
var wtj = require('website-to-json')
wtj.extractData('https://bgoonz-blog.netlify.app/', {
  fields: ['data'],
  parse: function($) {
    return {
      title: ($("h1").text()||trim($(".title").text())),
      content: trim($("*").text()),
      keywords: $('.post-taglist grid-item-content a').map(function(val) {
        return $(this).text()
      }).get()
    }
  }
})
.then(function(res) {
  console.log(JSON.stringify(res, null, 3));
})