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
├── models/
│   ├── campground.js
│   ├── comment.js
│   ├── review.js
│   └── user.js
├── routes/
│   ├── campgrounds.js
│   ├── comments.js
│   ├── index.js
│   └── reviews.js
├── views/
│   ├── campgrounds/
│   ├── comments/
│   ├── partials/
│   ├── landing.ejs
│   ├── login.ejs
│   └── register.ejs
├── public/
│   ├── stylesheets/
│   └── scripts/
├── app.js
├── package.json
└── README.md
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
