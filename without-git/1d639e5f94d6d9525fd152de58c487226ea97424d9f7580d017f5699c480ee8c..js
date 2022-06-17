var instaFeed = new Instafeed({
			        get: 'user',
			        userId: 6678174,
			        accessToken: '6678174.dcb4dc5.22dfed692290436f9737ffcb9938b819',
			        target: 'instafeed',
			        sortBy: 'most-recent',
			        limit: 32,
			        resolution: 'standard_resolution',
  template: '<a class="fancybox" href="{{image}}"><img src="{{image}}" /><div id="filter">{{model.filter}}</div><div class="info"><p class="location"><i class="icon-location"></i>{{location}}</p><p><i class="icon-comment"></i>{{caption}}</p><br><ul><li class="icon-heart">{{likes}} likes<li class="icon-chat">{{comments}} comments</ul></div></a>'
}).run();

$.fn.extend({
  matchHeight: function(data){
    var maxHeight = 0;
    $(this).each(function() {
       maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });
   $(this).height(maxHeight);
  }
});
 

   