(function (factory) {
	'use strict';

	if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = factory(require('jquery'));
	}
	else {
		factory(jQuery);
	}
})(function ($) {
	'use strict';

	$.fn.documentOutline = function (where) {
		var generateOutline = function (headings) {
			var html = '<ol>';

			headings.each(function (i) {
				var heading = $(this);
				var currLevel = heading[0].nodeName.substr(1);
				var name = heading.text().replace(/^[^a-z]+|[^\w:.-]+/gi, '').toLowerCase(); // https://stackoverflow.com/questions/9635625/javascript-regex-to-remove-illegal-characters-from-dom-id

				heading.attr('id', 'jquery-generate-document-outline-' + name + '-'  + currLevel + '-' + i);

				html += '<li><a href="#jquery-generate-document-outline-' + name + '-'  + currLevel + '-' + i + '">' + heading.text() + '</a>';

				var nextHeadings = heading.nextUntil('h' + currLevel, 'h' + (parseInt(currLevel, 10) + 1));

				if (nextHeadings.length) {
					html += generateOutline(nextHeadings);
				}

				html += '</li>';
			});

			html += '</ol>';

			return html;
		};

		return this.each(function () {
			var doc = $(this);
			var headings = doc.find(':header');

			if (headings.length) {
				$(where).append(generateOutline(doc.find(headings[0].nodeName)));
			}
		});
	};
});