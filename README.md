<div align="center">
  <img width="200" src=""https://res.cloudinary.com/dkkzaekid/image/upload/v1734104794/Shima.Rin.full.3264079_11zon_h7yvi7.jpg"" alt="YelpCamp logo">

## 🧭 Folder/File Structure
```
|-- README.md
|-- app.js
|-- index.test.js
|-- middleware
|   `-- index.js
|-- models
|   |-- campground.js
|   |-- comment.js
|   |-- review.js
|   `-- user.js
|-- package-lock.json
|-- package.json
|-- public
|   `-- stylesheets
|       |-- analytics.js
|       |-- main.css
|-- routes
|   |-- campgrounds.js
|   |-- comments.js
|   |-- index.js
|   `-- reviews.js
`-- views
    |-- campgrounds
    |   |-- edit.ejs
    |   |-- index.ejs
    |   |-- new.ejs
    |   `-- show.ejs
    |-- comments
    |   |-- edit.ejs
    |   `-- new.ejs
    |-- landing.ejs
    |-- login.ejs
    |-- partials
    |   |-- footer.ejs
    |   `-- header.ejs
    |-- register.ejs
    |-- reviews
    |   |-- edit.ejs
    |   |-- index.ejs
    |   `-- new.ejs
    `-- users
        `-- show.ejs
```

## 🚀 Getting Started
### To run this project on your system:
Create an .env file and add values to the following variables:
```
GEOCODER_API_KEY=
API_KEY=
DATABASEURL=
PASSPORT_SECRET=
```
Make sure you have [MongoDB](https://docs.mongodb.com/manual/installation/) installed on your system
In a terminal window, initialize a MongoDB Database 
```
$ ./mongod
```
In a second terminal window, access the MongoDB Database with Mongoose
```
$ mongoose
```
In a third terminal window, install dependencies using npm:

```
$ npm install
```
And then run the application with
```
$ npm start
```
or for hot reloading (recommended)
```
$ nodemon app.js
```

## 📐 Tests
To run the tests:
```
$ npm test
```

## 📣 Acknowledgments
-	The skeleton of this project was based on [Colt Steele's YelpCamp](https://github.com/Colt/yelp-camp-refactored) during the Web Development Bootcamp.

## 🔒 License
Copyright Notice and Statement: currently not offering any license. Permission only to view and download.
