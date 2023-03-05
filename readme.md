# Anonymous Thoughts Web Application

This is a MERN (MongoDB, Express.js, React.js, Node.js) stack web application where users can submit anonymous thoughts that are visible to everyone who accesses the site. The purpose of creating this project was to learn how to use Docker to containerize the application.

## Getting Started

To run this application, you will need to have Docker installed on your local machine. Once you have Docker installed, you can follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project root directory in your terminal.
3. Run the command `docker-compose up --build` to build and start the Docker containers.
4. Access the application in your browser at `http://localhost:3000`.

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- Docker

## Features

- Submit anonymous thoughts.
- View thoughts submitted by other users.
- Real-time updates when new thoughts are submitted.
- Simple and user-friendly interface.
- Docker Containers

This application consists of two Docker containers:

1. app: Contains the Node.js server and the Express.js application.
2. mongo: Contains the MongoDB database.

## Contributing

If you find any issues or have any suggestions for how to improve this application, feel free to open an issue or submit a pull request.
