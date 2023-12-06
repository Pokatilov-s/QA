# В данном файле представленны задания выполненые на курсе ИНЖЕНЕР ПО ТЕСТИРОВАНИЮ ПО.
Краткая информация о БД [shop.bugred.ru](http://shop.bugred.ru/)

Схема БД состоит из следующих таблиц(только используемые в заданиях таблицы):   
```
categorys (last_id, title, sort, _lng, action, enable)        
items (last_id, sizes, colors, title, price, image, photos, category, description, sort, _lng, action, enable, params)  
orders (last_id, price, phone, addr, sort, _lng, action, enable, user_id)   
colors (last_id, title, color, sort, _lng, action, enable)  
sizes (last_id, title, sort, _lng, action, enable)  
``` 

Задание  
Напишите запрос для магазинчика, таблица items. Допустим, там есть товар с last_id = 61 и category = 5.   
Нужно изменить ему категорию: была 5, станет 10

```
UPDATE items SET category = 10  
WHERE last_id = 61;  
commit  
```

Задание  
Напишите запрос для магазинчика, таблица colors.   
Нужно добавить новый цвет — оранжевый, #fe0808  

```
INSERT INTO colors (title, color)  
VALUES ('оранжевый', '#fe0808')  
```  

Задание  
Почистить тестовые данные  
Что мы знаем, какие данные тестовые:  
- colors — в тайтле цвета есть слово "Тестовый" или "Лабуда"  
- размеры — размер 9999  
- orders — в адресе есть слово "тест"  
- items — в title / description есть слово "Тестовый" или "Лабуда". Или размер — 9999  

```
DELETE FROM colors   
WHERE title LIKE '%Тестовый%' OR title LIKE '%Лабуда%'  

DELETE FROM sizes   
WHERE title = '9999'  

DELETE FROM orders   
WHERE addr LIKE '%тест%'  

DELETE FROM items   
WHERE title LIKE'%Тестовый%' OR title LIKE '%Лабуда%'   
OR description LIKE'%Тестовый%' OR title LIKE '%Лабуда%'  
OR sizes = 9999  
```

