Для корректной работы нужно еще установить пакет https://github.com/arturishe21/mail-templates

В composer.json добавляем в блок require
```json
 "vis/feedback": "1.0.*"
```

Выполняем
```json
composer update
```

Добавляем в app.php
```php
  'Vis\Feedback\FeedbackServiceProvider',
```

Публикуем js файлы
```json
   php artisan asset:publish vis/feedback
```

Публикуем config
```json
   php artisan config:publish vis/feedback
```

Публикуем views
```json
   php artisan view:publish vis/feedback
```

Вызов в вьюхе
```php
   @include('feedback::form')
```