<?php
include __DIR__ . '/../vendor/autoload.php';

$lang = isset($_GET['lang']) ? $_GET['lang'] : 'en';
/** @var Zend\I18n\Translator\Translator $translator */
$translator = include __DIR__ . '/../src/translator.php';
$translator->setLocale($lang);
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <p><?php echo $translator->translate('Hello my friend'); ?></p>
        <p><?php echo $translator->translate('How are you?'); ?></p>
        <p><?php echo $translator->translate('My name is Adam Crik'); ?></p>
    </body>
</html>
