
### CreatePageAction
```php
<?php
use MBITEL\Confluence\EditorActions\CreatePageAction;

$cPager = new CreatePageAction($confluenceClient);
$cPager->createPage($rootPageId);
$cPager->setTextarea($html);
$cPager->setTitle($pageTitle);
$result = $cPager->save();
```


### EditPageAction
```php
<?php
use MBITEL\Confluence\EditorActions\EditPageAction;

$editor = new EditPageAction($confluenceClient);
$editor->editPage($pageId);
$editor->setTextarea($html);
$editor->setTitle($pageTitle);
$result = $editor->save();

```

### CopyPageAction
```php
<?php


```

### RemovePageAction
```php
<?php


```

### WikiConverterAction
Wiki 2 HTML conversion
```php
<?php
use MBITEL\Confluence\PageActions\WikiConverterAction;

$converter = new WikiConverterAction($client);
$html = $converter->wiki2html($wiki);
```

```php
<?php


```

### AttachFileAction
```php
<?php
use MBITEL\Confluence\PageActions\AttachFileAction;

$files = array(
  'path to file 1',
  'path to file 2',
  'path to file n',
  'path to file n+1'
);

$uploader = new AttachFileAction($confluenceClient);
$uploader->attachFiles($pageId, $files);

```