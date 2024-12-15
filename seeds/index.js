if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const mongoose = require('mongoose')
const Campground = require('../models/campground')
const User = require('../models/user')
const Review = require('../models/review')

const data = require('./data')
const users = require('./users')
const reviews = require('./reviews')

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/yelp-camp'

mongoose.connect(dbUrl,)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected")
});


const seedDB = async () => {
    await Campground.deleteMany({})
    await User.deleteMany({})
    await Review.deleteMany({})

    const userCount = []
    for (let i = 0; i < users.length; i++) {
        const user = new User({
            email: users[i].email,
            username: users[i].username,
            images: users[i].imgUrl,
        })
        const count = await user.save()
        userCount.push(count)
    }

    const savedReviews = []
    for (let i = 0; i < reviews.length; i++) {
        const user = userCount[Math.floor(Math.random() * userCount.length)]
        const review = new Review({
            body: reviews[i].body,
            rating: reviews[i].rating,
            author: user._id
        })
        const savedReview = await review.save()
        savedReviews.push(savedReview)
    }

    for (let i = 0; i < data.length; i++) {
        const user = userCount[Math.floor(Math.random() * userCount.length)]
        const reviewAuthors = savedReviews.filter(x => x.author === user._id)
        const reviewAuthor = reviewAuthors[Math.floor(Math.random() * reviewAuthors.length)]

        const camp = new Campground({
            author: user._id,
            title: data[i].title,
            location: data[i].location,
            geometry: {
                type: data[i].geometry.type,
                coordinates: data[i].geometry.coordinates,
            },
            images: data[i].images,
            reviews: [reviewAuthor._id],
            price: data[i].price,
            description: `${data[i].description}`
        })
        await camp.save()
    }
}
seedDB().then(() => mongoose.connection.close())