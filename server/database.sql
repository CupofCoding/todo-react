CREATE DATABASE todo_react;

CREATE TABLE todo( --() defines schema
    todo_id SERIAL PRIMARY KEY, --creates serialized unique id
    description VARCHAR(255)    --max char 255
);