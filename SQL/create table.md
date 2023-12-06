Задание *выполнялось в СУБД PostgreSQL*  
Заказчик придумал схему БД:  
```
students (id_student, name, course)
courses (id_course, course_name, course_desc)
Таблицы связанны “один ко многим” где courses.course_name = students.course
```  
Сильно заморачиваться над ТЗ заказчик не хочет и порешил, что любое текстовое поле будет размеров 50 символов.  
В таблицу courses необходимо записать следующие данные:  
*id_course, course_name, course_desc*
- 1, REST, Изучаем API  
- 2, ШНАТ, Школа для новичков   
- 3, Postman, Автоматизация API  

```
create table students(   
id_student SERIAL PRIMARY KEY,   
name varchar(50),     
course varchar(50)   
)   

create table courses(  
id_course bigint,  
course_name varchar(50),  
course_desc varchar(50)  
)  

alter table courses    
add constraint pk_course_name primary key (course_name)  

alter table students   
add constraint fk_course foreign key (course)   
references courses (course_name)    

insert into courses(id_course, course_name, course_desc)   
values   
(1,'REST', 'Изучаем API'),  
(2,'ШНАТ', 'Школа для новичков'),  
(3, 'Postman', 'Автоматизация API')  
```

Задание *выполнялось в СУБД PostgreSQL*   
В БД реализовано две таблицы: Users (id, name, email) и Requests (id, request, response, datetime, user_id), связанные “один ко многим” (где Users.Id=Requests.User_id). Нужно вывести email самого активного пользователя (который делает больше всего запросов) и количество его запросов. Нужно написать сам запрос и дать объяснение по каждому условию.  

*Создание таблицы*
```
create table users(
id SERIAL PRIMARY KEY,
name varchar(50),
email varchar(50)
);

create table requests (
id SERIAL PRIMARY KEY,
request varchar(255),
response varchar(255),
datetime timestamp, 
user_id bigint
);

alter table requests
add constraint fk_requests foreign key (user_id)
references users (id);



insert into users(name, email)
values
('Сергей', 'mail@ru'),
('Мария', 'Gmail@ry'),
('Роман', 'Jmail@com')



insert into requests(request, response, user_id)
values
('200', '200', 1),
('200', '200', 2),
('400', '500', 3),
('200', '200', 1),
('Мария', 'Gmail@ry', 1),
('Роман', 'Jmail@com', 2)
```

*Вторая часть задания*  
```
select u.email active_email, COUNT(r.id) count_request
from users u
join requests r 
ON u.id = r.user_id
GROUP by u.email 
ORDER by count_request DESC 
LIMIT 1;
```
