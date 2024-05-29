# Recipe App Backend

This is the backend server for the Recipe App, built using Node.js and Express. It handles the API routes for recipes and users.

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the server: `npm start`

## API Routes

### Recipes

- GET `/api/recipes`: Get all recipes
- GET `/api/recipes/:id`: Get a specific recipe by ID
- POST `/api/recipes`: Create a new recipe
- PUT `/api/recipes/:id`: Update a recipe by ID
- DELETE `/api/recipes/:id`: Delete a recipe by ID

### Users

- GET `/api/users`: Get all users
- GET `/api/users/:id`: Get a specific user by ID
- POST `/api/users`: Create a new user
- PUT `/api/users/:id`: Update a user by ID
- DELETE `/api/users/:id`: Delete a user by ID

## Dependencies

- express
- mongoose
- passport
- axios

## Database

This project uses MongoDB as the database. Make sure to have MongoDB installed and running locally. Update the `.env` file with your MongoDB connection string.

## Authentication

User authentication is handled using Passport.js with JWT strategy. Make sure to set up your authentication middleware for protected routes.

## Error Handling

Error handling middleware is implemented to catch and format errors in a consistent way. Make sure to handle errors gracefully in your controllers.

## Models

- `Recipe`: Schema for storing recipe information
- `User`: Schema for storing user information

## Controllers

- `RecipeController`: Handles CRUD operations for recipes
- `UserController`: Handles CRUD operations for users

## Routes

- `recipes.js`: Defines API routes for recipes
- `users.js`: Defines API routes for users

## Server

- `server.js`: Entry point for the backend server. Connects to the database, sets up middleware, and defines routes.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

- `PORT`: Port number for the server
- `MONGODB_URI`: MongoDB connection string

## Documentation

For detailed API documentation, refer to the API routes and their functionality.

Happy coding! 🚀