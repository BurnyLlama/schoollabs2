# What is SchoolLabs?
SchoolLabs is supposed to be an open source all-in-one solution for schools.

## Features
* Time tables/schedules
* Messaging between teacher and student
* Attendance
* Multi-language support (Swedish and English as of now.)
* And more to come!

[Click here to see my Trello board!](https://trello.com/b/4ZWKYCru/schoollabs) 

## Why is the repository's name "schoollabs2"?
I already started to develop SchoolLabs as a project in my school ([source code](https://github.com/BurnyLlama/schoollabs)), but I am going to rewrite everything due the code most likely being undercooked ramen.

## Technologies used
### Node JS
[Node JS](https://nodejs.org/en/) is a Javascript runtime, it enables me to use Javascript as a language to code the back-end with. It is also relatively fast and stable (in my opinion).

### Mongo DB
I use [Mongo DB](https://www.mongodb.com/) because it is free and open source. It is also document-oriented database and easily usable with Javascript and Node.

### bcrypt
This project uses [bcrypt](https://en.wikipedia.org/wiki/Bcrypt) to make sure passwords are stored in a safe way and not just in plain text.


# Installation
As of now I am not providing an official guide on how to install this software as it is not close to done. If you want to try it out clone this repository and start the server using Node (`node index.js`). However, you will need to create a file called `.env` and add some variables to it:
```
APP_SECRET = your_secret
DB_URI = LINK TO YOUR DATABASE
TOKEN_SECRET = your_other_secret 
```
The secrets can be any text, they are basically text snippets used to hash/encrypt things and might potentially break stuff if changed. You could give them some random text like `asfadgajkdwvgadfafcgwhavhfbfefjaeehwgjkhan`.


# Documentation
As of now there's no documentation at all. Sorry for the inconvience.