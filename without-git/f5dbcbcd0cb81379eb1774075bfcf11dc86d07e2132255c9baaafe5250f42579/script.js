/**
 * .NET like string format/replace function. Simple method for replacing {} placeholders in a string
 */
String.prototype.format = function () {
    var str = this.toString();
    for (var x = 0; x < arguments.length; x++) {
        str = str.replace(new RegExp("\\{" + x + "\\}", "g"), arguments[x]);
    }
    return str;
};


window.namespace = (function (module, $) {
    "use strict";

    module.ModuleName = function() {
       
        $('.js-video').each(function(){
                    var $html = $("html"),
        $videoContainer = $('<div class="video-wrapper"><iframe frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'),
        $videoIframe = $videoContainer.find("iframe"),
        embedUrls = { youtube: "//www.youtube.com/embed/{0}?rel=0&autoplay=0&wmode=opaque", vimeo: "//player.vimeo.com/video/{0}?autoplay=0" };
            
            var $this = $(this);
            var videoInfo = parseVideoURL(this.href);
            console.log('Video Url Test', videoInfo);

            if (videoInfo) {
                var embedUrl = embedUrls[videoInfo.provider];

                if (embedUrl) {
                    var videoSrc = embedUrl.format(videoInfo.id);

                    $videoIframe.attr("src", videoSrc);
                    $this.after($videoContainer).remove();
                }

            }

        });
        
    };

    $(document).ready(function () {      
        module.ModuleName();
    });
    
    function parseVideoURL(url) {
        function getParm(url, base) {
            var re = new RegExp("(\\?|&)" + base + "\\=([^&]*)(&|$)");
            var matches = url.match(re);
            if (matches) {
                return (matches[2]);
            } else {
                return ("");
            }
        }

        var retVal = {};
        var matches;
        var success = false;

        if (url.match('http(s)?://(www.)?youtube|youtu\.be')) {
            if (url.match('embed')) { retVal.id = url.split(/embed\//)[1].split('"')[0]; }
            else { retVal.id = url.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0]; }
            retVal.provider = "youtube";
            var videoUrl = 'https://www.youtube.com/embed/' + retVal.id + '?rel=0';
            success = true;
        } else if (matches = url.match(/vimeo.com\/(\d+)/)) {
            retVal.provider = "vimeo";
            retVal.id = matches[1];
            var videoUrl = 'https://player.vimeo.com/video/' + retVal.id;
            success = true;
        }

        if (success) {
            return retVal;
        }

        return null;
    }

    return module;
})(window.namespace || {}, window.jQuery);