[![ads via Carbon](https://cdn4.buysellads.net/uu/1/110638/1650040417-carbon_usa_ase2_grey_applynow_text1.jpg)](https://srv.carbonads.net/ads/click/x/GTND42JMCKADKK3JCYSLYKQNCW7IL2JNF6BIVZ3JCYBIC5QLCYBITKQKC67DV53MCASIV23MCWBIC53JF6YD52QUHEYIK2QIFT7D6K3ECTNCYBZ52K?segment=placement:eslintorg;)[Accelerate your Career in Software Development. Apply Now.](https://srv.carbonads.net/ads/click/x/GTND42JMCKADKK3JCYSLYKQNCW7IL2JNF6BIVZ3JCYBIC5QLCYBITKQKC67DV53MCASIV23MCWBIC53JF6YD52QUHEYIK2QIFT7D6K3ECTNCYBZ52K?segment=placement:eslintorg;)[ads via Carbon](http://carbonads.net/?utm_source=eslintorg&utm_medium=ad_via_link&utm_campaign=in_unit&utm_term=carbon)

ESLint is designed to be flexible and configurable for your use case. You can turn off every rule and run only with basic syntax validation or mix and match the bundled rules and your custom rules to fit the needs of your project. There are two primary ways to configure ESLint:

1.  **Configuration Comments** - use JavaScript comments to embed configuration information directly into a file.
2.  **Configuration Files** - use a JavaScript, JSON, or YAML file to specify configuration information for an entire directory and all of its subdirectories. This can be in the form of a [`.eslintrc.*`](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats) file or an `eslintConfig` field in a [`package.json`](https://docs.npmjs.com/files/package.json) file, both of which ESLint will look for and read automatically, or you can specify a configuration file on the [command line](https://eslint.org/docs/user-guide/command-line-interface).

Here are some of the options that you can configure in ESLint:

-   [**Environments**](https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments) - which environments your script is designed to run in. Each environment brings with it a certain set of predefined global variables.
-   [**Globals**](https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals) - the additional global variables your script accesses during execution.
-   [**Rules**](https://eslint.org/docs/user-guide/configuring/rules) - which rules are enabled and at what error level.
-   [**Plugins**](https://eslint.org/docs/user-guide/configuring/plugins) - which third-party plugins define additional rules, environments, configs, etc. for ESLint to use.

All of these options give you fine-grained control over how ESLint treats your code.

## Table of Contents[](https://eslint.org/docs/user-guide/configuring/#table-of-contents)

[**Configuration Files**](https://eslint.org/docs/user-guide/configuring/configuration-files)

-   [Configuration File Formats](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats)
-   [Using Configuration Files](https://eslint.org/docs/user-guide/configuring/configuration-files#using-configuration-files)
-   [Adding Shared Settings](https://eslint.org/docs/user-guide/configuring/configuration-files#adding-shared-settings)
-   [Cascading and Hierarchy](https://eslint.org/docs/user-guide/configuring/configuration-files#cascading-and-hierarchy)
-   [Extending Configuration Files](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)
-   [Configuration Based on Glob Patterns](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-based-on-glob-patterns)
-   [Personal Configuration Files](https://eslint.org/docs/user-guide/configuring/configuration-files#personal-configuration-files-deprecated)

[**Language Options**](https://eslint.org/docs/user-guide/configuring/language-options)

-   [Specifying Environments](https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments)
-   [Specifying Globals](https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals)
-   [Specifying Parser Options](https://eslint.org/docs/user-guide/configuring/language-options#specifying-parser-options)

[**Rules**](https://eslint.org/docs/user-guide/configuring/rules)

-   [Configuring Rules](https://eslint.org/docs/user-guide/configuring/rules#configuring-rules)
-   [Disabling Rules](https://eslint.org/docs/user-guide/configuring/rules#disabling-rules)

[**Plugins**](https://eslint.org/docs/user-guide/configuring/plugins)

-   [Specifying Parser](https://eslint.org/docs/user-guide/configuring/plugins#specifying-parser)
-   [Specifying Processor](https://eslint.org/docs/user-guide/configuring/plugins#specifying-processor)
-   [Configuring Plugins](https://eslint.org/docs/user-guide/configuring/plugins#configuring-plugins)

[**Ignoring Code**](https://eslint.org/docs/user-guide/configuring/ignoring-code)

-   [`ignorePatterns` in Config Files](https://eslint.org/docs/user-guide/configuring/ignoring-code#ignorepatterns-in-config-files)
-   [The `.eslintignore` File](https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file)
-   [Using an Alternate File](https://eslint.org/docs/user-guide/configuring/ignoring-code#using-an-alternate-file)
-   [Using eslintIgnore in package.json](https://eslint.org/docs/user-guide/configuring/ignoring-code#using-eslintignore-in-packagejson)
-   [Ignored File Warnings](https://eslint.org/docs/user-guide/configuring/ignoring-code#ignored-file-warnings)