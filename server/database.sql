CREATE DATABASE todo_react;

CREATE TABLE todo( 
    todo_id SERIAL PRIMARY KEY, 
    description VARCHAR(255)    
);

--() defines schema
--creates serialized unique id
--max char 255