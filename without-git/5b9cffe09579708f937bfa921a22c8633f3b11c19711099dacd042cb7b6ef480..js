//Thanks to: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript

$( document ).ready( function(){ 
  
  $("#JSONreceiver").JSONRequestFormatter();
  
  var examplURL = $("#exampleurl"),
      examplURLText = $("#exampleurl").text();
  
  examplURL.click( function(){
    var inputField = $("#httpForAjaxRequest");
     inputField.val(examplURLText);
  });

});

// js plugin
;(function(factory){
    if (typeof define === 'function' && define.amd)
      define(['jquery'], factory);
    else if (typeof exports === 'object')
      factory(require('jquery'));
    else
      factory(jQuery);

}(function($, undefined){
    function JSONRequestFormatter( element, options){ 
        this.element = element;
        this._name = pluginName;
        this.template = formTemplate;
        this.options = $.extend({}, defaults, options);
        this.init();
    };
  
  JSONRequestFormatter.prototype = {
    
    constuctor: JSONRequestFormatter,
    
    _syntaxHighlight: function( json ) {
      
      var formated = this.options.onlyFormatted;
      
      if( formated ){
        json = $(this.element).text();
        json = JSON.parse( json );
        json = JSON.stringify( json, null, 4 );    
      }
      
        if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function ( match ) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
      });
    },
    
    _createTemplate: function( pattern ){
        var templ = this.template;
        templ.appendTo( this.element );
    },
    
    _sentRequest: function(){
        var inputField = $("#httpForAjaxRequest"),
            formSent = $("#formForSendingAjaxRequest"),
            mydiv = $('<pre class = "preAjaxRequestStyle"></pre>'),
            that = this,
            mainElement = this.element;
  
        formSent.submit( function( e ){  
          var valueInput = inputField.val();
            if( valueInput ){
               mydiv.appendTo(  mainElement );
              $.getJSON( valueInput ).done(function( data ){     
                var wellJSON = that._syntaxHighlight(data);
                mydiv.html( wellJSON );           
              }).fail( function( e ){
                console.log( e.statusText );
                mydiv.html( e.statusText  )
              })
        }  
        e.preventDefault();
      });
    },
    
    init: function(){
      
      var formated = this.options.onlyFormatted;
      
        if( formated ){
          var wellJSON = this._syntaxHighlight();
          $(this.element).html( wellJSON );  
          $(this.element).css( 'white-space', 'pre');
        } else{
          this._createTemplate();
          this._sentRequest();
        } 
      
    }
    
  };
  
  var pluginName = "JSONRequestFormatter";
  
  var formTemplate = $('<form id="formForSendingAjaxRequest" class = "formForSendingAjaxRequestStyle">'+ 
    '<div class = "formWrapeprAjaxRequestStyle">'+
        '<input type="text" placeholder="Put your http" id="httpForAjaxRequest" autocomplete="off" class = "formInputAjaxRequestStyle">'+
        '<span>'+
          '<input type="submit" id="sentAjaxRequest" value = "sending" class = "formButtonAjaxRequestStyle">'+
        '</span>'+
    '</div>'+
  '</form>');
  
  var defaults = {
    'onlyFormatted' : false
  };
  
  
  $.fn[pluginName] = function( options ){
        return this.each(function(){
            if(!$.data(this, 'plugin_' + pluginName)){
                $.data(this, 'plugin_' + pluginName,
                new JSONRequestFormatter( this, options ));
            }
        });
    };
  
  
}));