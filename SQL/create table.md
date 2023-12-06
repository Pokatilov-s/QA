Задание *выполнялось в СУБД PostgreSQL*  
Заказчик придумал схему БД:  
```
students (id_student, name, course)
courses (id_course, course_name, course_desc)
Таблицы связанны “один ко многим” где course_name = course
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
