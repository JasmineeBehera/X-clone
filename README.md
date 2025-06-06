This project is a Twitter clone built to replicate some of the core features of the popular social media platform. 
The project is designed to offer secure authentication, efficient data management, and interactive user functionalities, all packaged in a modern web application.

Features
Tech Stack: Built with React.js, MongoDB, Node.js, Express, and Tailwind CSS.
Authentication: Secure authentication using JSON Web Tokens (JWT).
Data Fetching: Efficient data fetching and caching with React Query.
User Interaction: Suggested users to follow.
Post Management: Create, delete, and manage posts.
Commenting: Comment on posts.
Liking: Like posts.
Ownership Control: Delete posts if you are the owner.
Profile Customization: Edit profile information, including cover and profile images.
Image Uploads: Image uploads handled via Cloudinary.
Notifications: Send and receive notifications.

Tech Stack
Frontend: React.js, Tailwind CSS
Backend: Node.js, Express
Database: MongoDB
Authentication: JSON Web Tokens (JWT)
Data Management: React Query
Image Hosting: Cloudinary

Installation and Setup

1. Clone the repository:
git clone https://github.com/your-username/twitter-clone.git
cd twitter-clone

2.Install dependencies for both backend and frontend:
npm install
npm install --prefix frontend

3.Create a .env file in the root directory and add your environment variables:
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

4.Start the development server:
npm run dev

5.Build the frontend for production:
npm run build

6.Start the production server:
npm start

Scripts
dev: Starts the development server with nodemon.
start: Starts the production server.
build: Installs dependencies and builds the frontend for production.

Dependencies
bcrypt: ^5.1.1
body-parser: ^1.20.2
cloudinary: ^2.2.0
cookie-parser: ^1.4.6
cors: ^2.8.5
dotenv: ^16.4.5
express: ^4.19.2
jsonwebtoken: ^9.0.2
mongoose: ^8.4.3

Dev Dependencies
autoprefixer: ^10.4.19
daisyui: ^4.12.4
nodemon: ^3.1.4
postcss: ^8.4.38
tailwindcss: ^3.4.4

Author 
Jasminee Behera.
