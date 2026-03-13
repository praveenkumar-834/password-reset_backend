# Password Reset Backend

This backend service handles authentication and password reset functionality using Node.js, Express, MongoDB, and Nodemailer.

## Live API
https://password-reset-backend-lac.vercel.app

## Features
- User Registration
- User Login
- Password Reset via Email
- Secure Token Generation
- Token Expiration Handling
- MongoDB User Storage

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer
- JSON Web Token (JWT)

## Folder Structure
controllers
models
routes
config
api/index.js
package.json

## Installation

Clone the repository:

git clone https://github.com/praveenkumar-834/password_reset_backend.git

Navigate to the folder:

cd password_reset_backend

Install dependencies:

npm install

Run the server:

node server.js

## Environment Variables

Create `.env` file:

PORT=5000
MONGO_URI=your_mongodb_connection
EMAIL=your_email@gmail.com
EMAIL_PASS=your_app_password
FRONTEND_URL=https://password-reset-frontend-n8n5fem0s.vercel.app

## API Endpoints

POST /api/auth/register  
Register a new user.

POST /api/auth/login  
Authenticate user and return token.

POST /api/auth/forgot-password  
Send password reset email.

POST /api/auth/reset-password/:token  
Reset password using secure token.

## Email Service
Emails are sent using Nodemailer SMTP configuration.

## Deployment
Backend is deployed on Vercel.

## Author
Praveen Kumar
