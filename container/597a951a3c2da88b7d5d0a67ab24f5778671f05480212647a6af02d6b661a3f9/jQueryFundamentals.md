
## Filtering selections
```javascript
var listItems = $( 'li' );

// filter the selection to only items with a class of 'special'
var special = listItems.filter( '.special' );

// filter the selection to only items without a class of 'special'
var notSpecial = listItems.not( '.special' );

// filter the selection to only items that contain a span
var hasSpans = listItems.has( 'span' );
```



## Finding elements relative to a selection
```javascript
// get the first list item on the page
var listItem = $( 'li' ).first(); // also: .last()

// get the siblings of the list item
var siblings = listItem.siblings();

// get the next sibling of the list item
var nextSibling = listItem.next(); // also: .prev()

// get the list item's parent
var list = listItem.parent();

// get the list items that are immediate children of the list
var listItems = list.children();

// get ALL list items in the list, including nested ones
var allListItems = list.find( 'li' );

// find all ancestors of the list item that have a class of "module"
var modules = listItem.parents( '.module' );

// find the closest ancestor of the list item that has a class of "module"
var module = listItem.closest( '.module' );
```
  
You can also add to an existing selection by using the .add() method. You can pass it a selector, an array of elements, a string of HTML, or a jQuery object.
  
```javascript
var list = $( '#my-unordered-list' );

// do some stuff with the list, and then ...

var listAndListItems = list.add( '#my-unordered-list li' );
```


## Getting back to your original selection
```javascript
$( '#my-unordered-list' )
  .find('li')

  // now we're working with the list items
  .addClass('special')

.end()

// now we're back to working with the list
.addClass('super-special');
```





jQuery also provides the ```.addBack()``` method if you want to add your original selection to your current selection. For example:

```javascript
$( 'li.special' )

  .siblings()

    // now we're working with the siblings of the original selection
    .removeClass( 'important' )

  .addBack()

  // now we're working with the original li's AND their siblings
  .addClass( 'urgent' );
```
  
  
  

# Manipulation
  
## Altering elements
```javascript
var list = $( '#my-unordered-list' );
var width = Math.floor( list.width() * 0.1 );
 
list.find('li').each(function( index, elem ) {
  var padding = width * index;
  $( elem ).css( 'padding-left', padding + 'px' );
});
```

```javascript
$( 'li' ).eq( 1 ).css({
  'font-size': '20px',
  'padding-left': '20px'
});
```

### Changing other attributes
```javascript
$( 'a' ).attr( 'title', 'Click me!' );
```
  
```javascript
$( 'a' ).attr( 'href', function(index, value) {
  return value + '?special=true';
});
```


## Placing elements in the document

```javascript
var listItem = $( '#my-unordered-list li' ).first();
listItem.appendTo( '#my-unordered-list' );
```
  
```javascript
var listItem = $( '#my-unordered-list li' ).first();
$( '#my-unordered-list' ).append( listItem );
```
  
```javascript
var listItems = $( '#my-unordered-list li' );
listItems.first().insertAfter( listItems.last() );
```
  
```javascript
var listItems = $( '#my-unordered-list li' );
listItems.last().after( listItems.first() );
```
  
  
## Copying elements
```javascript
var clones = $( 'li' ).clone();

clones.html(function( index, oldHtml ) {
  return oldHtml + '!!!';
});

$( '#my-unordered-list' ).append( clones );
```

## Removing elements
There are three ways to remove elements from the document: ```.remove()```, ```.detach()```, and ```.replaceWith()```. Each method serves a particular purpose.
```javascript
$( '#my-unordered-list li' ).click(function() {
  alert( $( this ).text() );
});

var removedListItem = $( '#my-unordered-list li' ).first().remove();

removedListItem.appendTo( '#my-unordered-list' );
removedListItem.trigger( 'click' ); // no alert!
```
