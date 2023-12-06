# В данном файле представленны задания выполненые на курсе ИНЖЕНЕР ПО ТЕСТИРОВАНИЮ ПО.
Краткая информация о БД [shop.bugred.ru](http://shop.bugred.ru/)

Схема БД состоит из следующих таблиц(только используемые в заданиях таблицы):   
categorys (last_id, title, sort, _lng, action, enable)        
items (last_id, sizes, colors, title, price, image, photos, category, description, sort, _lng, action, enable, params)  
orders (last_id, price, phone, addr, sort, _lng, action, enable, user_id)  
users (last_id, name, email, sort, _lng, action, enable, password)  
last_views (last_id, user_id, item, sort, _lng, action, enable)  

Задание    
Сделайте запрос в магазинчике. Я хочу подсчитать, сколько товаров создали вчера (при условии, что выборку делаю утром и новых товаров "сегодня" ещё не создавалось).   
Я знаю, что вчера утром максимальный id был 258. Его и берем за точку отсчета.
```
SELECT COUNT(last_id) FROM `items`    
WHERE last_id > 258
```

Задание   
Сделайте запрос в магазинчике, который достанет вам те вещи (таблица items), в которых:  
- Название (title) содержит слово «Платье» или «Платьюшко»  
- Цена от 10 до 2000  
- Фотография (image) не пустая  
```
SELECT * FROM `items`  
WHERE title LIKE 'Платье%' OR title LIKE 'Платьюшко%'  
AND price BETWEEN 10 AND 2000  
AND image IS NOT null  
```

Задание   
Я хочу получить последние 15 товаров (ориентируйтесь на автоинкрементальное поле id), у которых непустые параметры   
```
SELECT * FROM `items`   
WHERE params IS NOT null   
ORDER BY last_id DESC LIMIT 15
```

Задание    
Сделайте запрос в магазинчике из таблиц заказов orders и клиентов users. Выведите мне для всех сделанных заказов:   
- ФИО клиента  
- Телефон  
- Емейл  
- Адрес

```
SELECT u.name, o.phone, u.email, o.addr FROM orders o   
JOIN users u   
ON o.user_id = u.last_id   
```

Задание  
Сделайте запрос в магазинчике. Операторы сидят и заполняют таблицу предметов (items) по каждой категории.  
Я хочу видеть прогресс и «сколько ещё осталось». Поэтому подсчитайте мне, сколько категорий, по которым ещё нет товаров  

```
SELECT COUNT(c.last_id) not_filled_in   
FROM categorys c   
LEFT JOIN items i   
ON c.last_id = i.category   
WHERE i.category IS null   
```

Задание  
Сделайте запрос в магазинчике. Нас интересует таблица last_views.   
Я хочу увидеть, сколько товаров просматривал какой пользователь:  
- id пользователя   
- сколько товаров он просмотрел  
Сначала те, кто просматривает много — ищем потенциальных клиентов, чтобы предложить им рекламу "вы смотрели то и то, не хотите ли купить?"  
Те, кто просматривал меньше 4 товаров, меня не интересуют.

```
SELECT user_id, COUNT(item) FROM last_views  
GROUP BY user_id  
HAVING COUNT(item) >= 4  
ORDER BY COUNT(item) DESC  
```

Задание  
А теперь усложняем запрос из прошлого задания.  
В таблице last_views есть количество просмотров товаров. Я хочу увидеть, сколько товаров просматривал какой пользователь:  
- имя пользователя  
- сколько товаров он просмотрел  
Сначала те, кто просматривает много — ищем потенциальных клиентов, чтобы предложить им рекламу "вы смотрели то и то, не хотите ли купить?"  
Те, кто просматривал меньше 4 товаров, меня не интересуют.

```
SELECT u.name, COUNT(item) FROM last_views l  
JOIN users u  
on l.user_id = u.last_id  
GROUP BY user_id  
HAVING COUNT(item) >= 4  
ORDER BY COUNT(item) DESC  
```

