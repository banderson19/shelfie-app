npm init -y 
installed requied packages 
 - axios in root directory
 - react-router-dom


#Heroku
 - create data base online
 - got to sql tabs to create first table, import data base api
 - add query (?ssl=true)

#Tables 
CREATE TABLE SHELF (
    shelf_id SERIAL PRIMARY KEY NOT NULL,
    shelf varchar(20) NOT NULL
)
 - insert 5 shelves into db
 
CREATE TABLE bin (
    bin_id SERIAL PRIMARY KEY NOT NULL,
    bin_name TEXT,
    shelf_id int REFERENCES shelf(shelf_id)
)
CREATE TABLE item (
    item_id SERIAL PRIMARY KEY NOT NULL,
    item_name TEXT,
    item_price DECIMAL(20, 2),
    bin_id int REFERENCES bin(bin_id)
)


#Set up server.js
 - require packages 
 - invoke massive with connection string and send promice setting app.set to 'db'
 - app.listen on port

#Module exports - full crud

