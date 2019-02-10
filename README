# What is PUCITx?

PUCITx is a project of PUCIT Help Desk. We gather lectures of PUCIT Instructors and provide them on a single platform hence making sure that all the knowledge needed by you is just a click away. It is designed to enlighten everyone to enhance teaching and learning skills on-campus, online, and beyond.

# Contributing

```php
require 'flight/Flight.php';

Flight::route('/', function(){
    echo 'hello world!';
});

Flight::start();
```

[Learn more](http://flightphp.com/learn)

# Requirements

Flight requires `PHP 5.3` or greater.

# License

PUCITx is released under the [GNU GPLv3](https://github.com/PUCITHD/PUCITx/blob/master/LICENSE) license.
Flight is released under the [MIT](http://flightphp.com/license) license.

# Installation

1\. Download the files.

You can [download](https://github.com/PUCITHD/PUCITx/archive/master.zip) them directly 
and extract them to your web directory.

2\. Configure your webserver.

For *Apache*, edit your `.htaccess` file with the following:

```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php [QSA,L]
```

**Note**: If you need to use flight in a subdirectory add the line `RewriteBase /subdir/` just after `RewriteEngine On`.

For *Nginx*, add the following to your server declaration:

```
server {
    location / {
        try_files $uri $uri/ /index.php;
    }
}
```
