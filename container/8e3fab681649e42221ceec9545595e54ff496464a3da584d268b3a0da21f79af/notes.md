http://codex.wordpress.org/Theme_Features  
http://codex.wordpress.org/Template_Tags  


**roots-dev / functions.php** - if it is present in the theme you are using, it is automatically loaded during WordPress initialization (both for admin pages and external pages)  


http://codex.wordpress.org/Function_Reference/bloginfo  
bloginfo( $show );
```php
// Displays your blog's title
<h1><?php bloginfo('name'); ?></h1>
// Displays the tagline of your blog as set in Settings > General.
<p><?php bloginfo('description'); ?> </p>
```