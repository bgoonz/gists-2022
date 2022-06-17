var wiki_base_url = "https://en.wikipedia.org/wiki/";
var api_search = "https://en.wikipedia.org/w/api.php?callback=?";
var api_get_thumb = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=pageimages&pithumbsize=100&titles=";
var pageid_temp ="";

$(document).ready(function() {
  $('#search').keypress(function (e) {
    if (event.keyCode === 10 || event.keyCode === 13) {
      event.preventDefault();
      var text = this.value;
      getPages(text);
    }
  });

  function getPages(query) {
    $.getJSON(api_search, {
      action: 'query',
      format: 'json',
      inprop: "url",
      formatversion: 2,
      generator: 'search',
      gsrsearch: query,
      gsrwhat: "text",
      prop: 'extracts|info',
      exsentences: 3,
      exintro: "",
      explaintext: "",        
      exlimit: 20,
      timeOut: 500
    })
    .success(function(response) {
      $('#results').html('');
      if (response.hasOwnProperty("query")) {
        response.query.pages.forEach(function(element) {
          makeCard(element);
        }, this);        
      } else {
        $('#results').html("<h3 class='center-align'>No articles found</h3>");
      }

    })
    .error(function(response){
      console.log("Error ...");
    });
  }

  function makeCard(object) {
    var card_templ = $('#card-templ');
    var new_content = $('#card-templ').html()
      .replace(/{{pageid}}/ig, object.pageid)
      .replace(/{{title}}/ig, object.title)
      .replace(/{{description}}/ig, object.extract)
      .replace(/{{fullurl}}/ig, object.fullurl);
    
    $('#results').append(new_content);
    getThumb(object.title, object.pageid);
  }

  function getThumb(title, pageid) {
    var url = ""
    $.getJSON(api_search, {
      format: "json",
      action: "query",
      prop: "pageimages",
      pithumbsize: "100",
      titles: title,
      timeOut: 500
    },
    passPageId(pageid),
    function(response){
      console.log("Error no responso images ..")
    });
  }

  function passPageId(pageid) {
    return function(data, textStatus, xhr) {
      if (!data.query.pages.hasOwnProperty(pageid)) {
        return "";
      }
      if (!data.query.pages[pageid].hasOwnProperty("thumbnail")) {
        return "";
      }
      $('#' + pageid).attr('src', data.query.pages[pageid]["thumbnail"]["source"]);
      return data.query.pages[pageid]["thumbnail"]["source"];
    }
  }
});
