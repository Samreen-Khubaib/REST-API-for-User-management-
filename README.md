# User Management REST API
This project is a simple User Management RESTful API built using Node.js, Express.js, and PostgreSQL. It allows basic CRUD operations (Create, Read, Update, Delete) on user data.
This demonstrates backend API development, database connectivity, and RESTful route handling.

# Project Description
The API manages user records with the following data fields:
json
{
  "id": 1,
  "name": "Ali Raza",
  "email": "ali@example.com",
  "age": 23
}

# How to Install and Run the Project
1) Install Dependencies 
    npm install
2) Setup PostgreSQL
   Create a database named user_data
   Create the users table
  # js
  const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "password",
  database: "user_data",
  port: 5432
});
3) Start the Server
    node REST_API.js
    The server will run at:
    http://localhost:5200
    
# Database Used
PostgreSQL
Table: users

# List of available routes with examples
| Method | Route        | Description       | Example                                |
| ------ | ------------ | ----------------- | -------------------------------------- |
| GET    | /users     | Fetch all users   | GET http://localhost:5200/users     |
| GET    | /users/:id | Fetch user by ID  | GET http://localhost:5200/users/1    |
| POST   | /users     | Create new user   | POST http://localhost:5200/users     |
| PUT    | /users/:id | Update user by ID | PUT http://localhost:5200/users/1    |
| DELETE | /users/:id | Delete user by ID | DELETE http://localhost:5200/users/1 |

# API Testing
All routes were tested using Postman.
Postman screenshots are included in the submission.
