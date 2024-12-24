# YuruCamp Project

Welcome to the **YuruCamp Project** repository! This project is a web application inspired by the anime *YuruCamp* (Laid-Back Camp), offering an interactive platform for camping enthusiasts to explore, share, and plan camping experiences.

---

## 🌟 Features

- **Camping Spots Explorer**: Discover and share detailed information about various camping locations.
- **User Authentication**: Secure user registration and login functionalities.
- **Review System**: Users can leave reviews and ratings for camping spots.
- **Image Uploads**: Upload photos of camping sites to enhance listings.
- **Responsive Design**: Accessible on both desktop and mobile devices.

---

## 🌐 Live Demo

Experience the application live at [YuruCamp on Render](https://yurucamp.onrender.com).

---

## 🚀 Technologies Used

### **Frontend**:
- HTML, CSS, JavaScript
- Templating Engine: EJS (Embedded JavaScript)

### **Backend**:
- Node.js with Express.js
- MongoDB (Database for storing user data, camping spots, reviews)
- Mongoose (Object Data Modeling library for MongoDB)

### **Authentication**:
- Passport.js (Middleware for authentication)

### **Image Storage**:
- Cloudinary (Cloud-based image and video management)

### **Deployment**:
- Render (Hosting platform)

---

## 📂 Folder Structure

```plaintext
yurucamp/
├── cloudinary/
│   └── index.js                 # Configuration for image uploads
├── controllers/
│   ├── campgrounds.js           # Handles logic for campground operations
│   ├── reviews.js               # Handles logic for review-related actions
│   └── users.js                 # Handles user authentication and profiles
├── models/
│   ├── campground.js            # Schema and model for campgrounds
│   ├── review.js                # Schema and model for reviews
│   └── user.js                  # Schema and model for users
├── public/
│   ├── javascripts/             # Frontend JavaScript files
│   └── stylesheets/
│       ├── app.css              # Custom application styles
├── routes/
│   ├── campgrounds.js           # Routes for campground features
│   ├── index.js                 # Main routes and root handlers
│   ├── reviews.js               # Routes for handling reviews
│   └── users.js                 # Routes for user management
├── seeds/
│   └── index.js                 # Seed script for populating the database
├── utils/
│   └── ExpressError.js          # Custom error handling class
├── views/
│   ├── campgrounds/
│   │   ├── edit.ejs             # Edit campground page
│   │   ├── index.ejs            # Campground list page
│   │   ├── new.ejs              # Form for adding a new campground
│   │   └── show.ejs             # Detailed campground view
│   ├── layouts/
│   │   └── boilerplate.ejs      # Base template for the app
│   ├── partials/
│   │   ├── flash.ejs            # Flash message notifications
│   │   ├── footer.ejs           # Footer template
│   │   ├── header.ejs           # Header template
│   │   └── navbar.ejs           # Navbar template
│   ├── users/
│   │   ├── login.ejs            # Login page
│   │   └── register.ejs         # Registration page
│   └── home.ejs                 # Homepage
├── .gitignore                   # File to ignore specific files/folders in Git
├── README.md                    # Project description and details
├── app.js                       # Main server-side entry point
├── middleware.js                # Middleware functions for error handling and validation
├── package-lock.json            # Lockfile for npm dependencies
├── package.json                 # Project dependencies and scripts
└── schemas.js                   # Validation schemas for input data

```

---

## ⚡ How to Run Locally

### Prerequisites

1. Node.js and npm installed.
2. MongoDB installed locally or access to a cloud instance.
3. Cloudinary account for image storage.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/bharathsai369/yurucamp.git
   cd yurucamp
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Environment Variables**:
   Create a `.env` file in the root directory with the following:
   ```plaintext
   PORT=3000
   MONGO_URI=your-mongodb-connection-string
   CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   ```

4. **Run the Application**:
   ```bash
   npm start
   ```

5. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.
---

This project, YuruCamp, is a customized adaptation of the YelpCamp project from Colt Steele's Web Development Bootcamp. It includes features and design elements inspired by the original while incorporating my own twists to make it unique.
