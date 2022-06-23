window.addEvent('domready', function() {
	new Request.HTML({
		url: '/gh/gist/response.html/1504294/',
		data: {'delay': 1},
		method: 'post',
		update: 'demo',
		onSuccess: function(response) {
			$('demo').highlight();
		}
	}).send();
})
