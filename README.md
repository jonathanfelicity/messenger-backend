<div align="center">
  <img src="./logo.png">
</div>

___

## Table of Contents 📑

- [Introduction](#introduction-🌟) 🌟
  - [Features ](#features-🚚💬)🚚💬
- [Installation](#installation-💻) 💻
- [Usage](#usage-🚀) 🚀
- [Navigating API Design Trade-offs](#🔑-striking-the-perfect-balance-navigating-api-design-trade-offs-⚖️🚀) 🎨

## Introduction 🌟

Messenger API is a TypeScript, TypeORM, MySQL, and Express API server for building messaging applications. It comes with pre-built modules for user authentication, logging, and request validation, making it a solid foundation for building scalable and secure messaging applications.



## Features 🚚💬

### Functional
* Order placement: Customers can place orders for delivery via the Messenger platform.
* Order tracking: Customers can track the status of their orders in real-time.
* Rider management: Messenger can manage a pool of riders to fulfill delivery requests.
<!-- * Rider assignment: Messenger can assign the most suitable rider for each delivery request based on factors such as location, availability, and rating. -->
* Order distribution: Messenger can distribute delivery requests to riders via an efficient algorithm that optimizes for factors.
<!-- such as distance, traffic, and time. -->
<!-- * Real-time communication: Riders and customers can communicate with each other in real-time via a chat interface integrated into the Messenger platform. -->
* Third-party logistics integration: Messenger can integrate with third-party logistics providers to expand its delivery network and provide more delivery options to customers.

### Technical
* JWT authentication: The API is secured using JSON Web Token (JWT) authentication to ensure that only authorized users can access protected endpoints.
* Logging with Winston: The API logs all requests and responses using Winston, a popular logging library for Node.js, to help with debugging and monitoring.
* API request validation with Class Validator: Incoming requests are validated using Class Validator, a library that provides decorators to validate objects and properties based on predefined rules.
* Swagger documentation with Swagger UI * Express: The API is documented using Swagger UI Express, a library that generates interactive documentation based on Swagger/OpenAPI specifications.
* Environment variables management with Dotenv and Envalid: Environment variables are managed using Dotenv, a library that loads environment variables from a .env file, and Envalid, a library that validates environment variables and provides sensible defaults.
* CORS handling with Cors: The API handles Cross-Origin Resource Sharing (CORS) using Cors, a library that allows for cross-origin requests from whitelisted domains.
* HTTP security with Helmet and HPP: The API implements HTTP security best practices using Helmet, a library that adds security headers to HTTP responses, and HPP, a library that protects against HTTP Parameter Pollution attacks.
* Compression with Compression: Responses are compressed using Compression, a library that reduces the size of responses to improve performance.
* Hashing with Bcrypt: Passwords are hashed using Bcrypt, a library that provides secure one-way hashing of passwords to prevent them from being exposed in the event of a data breach.
* Continuous integration with Jest and linting with Eslint: The API is continuously integrated using Jest, a testing framework for Node.js, to ensure that changes to the codebase do not introduce regressions. Code is also linted using Eslint to ensure adherence to a consistent code style.
* Code formatting with Prettier: Code is formatted using Prettier, a code formatter that automatically formats code to a consistent style to reduce code review time.
* Automated deployment with PM2: The API is deployed using PM2, a process manager for Node.js, to ensure high availability and automatic restart in the event of a crash or error.



## Installation 💻
download the codebase and navigate into it.

```bash
sudo apt install update
sudo apt install unzip
unzip messenger-api.zip
cd messenger-api
```


## Install the dependencies.

```bash
npm install
```
Set the environment variables by creating a .env.development.local file in the root directory. You can use the .env.development.local.example file as a reference.

Create a MySQL database and update the .env.development.local file with the database details.

Start the server in development mode.

```bash
npm run dev
```

Access the API documentation at http://localhost:3000/api/v1/docs in your browser.

## Usage 🚀
To use the API, you need to have an authenticated user. To authenticate a user, send a POST request to the api/v1/auth/login endpoint with the user's credentials in the request body. The API will return a JWT token that you can use to make requests to the protected endpoints.

Refer to the Swagger documentation for the list of available endpoints and their usage.

## 🔑 STRIKING THE PERFECT BALANCE: Navigating API Design Trade-offs ⚖️🚀

```bash
│
├──📂 src
│  ├──📂 config
│  │  └── ...
│  │
│  ├──📂 controllers
│  │  └── ...
│  │
│  ├──📂 dtos
│  │  └── users.dto.ts
│  │
│  ├──📂 exceptions
│  │  └── ...
│  │
│  ├──📂 http
│  │  └── ...
│  │
│  ├──📂 interfaces
│  │  └── ...
│  │
│  ├──📂 middlewares
│  │  └── ...
│  │
│  ├──📂 models
│  │  └── ...
│  │
│  ├──📂 routes
│  │  └── ...
│  │
│  ├──📂 services
│  │  └── ...
│  │
│  ├──📂 test
│  │  └── ...
│  │
│  ├──📂 utils
│  │  └── ...
│  │
│  ├── app.ts
│  └── server.ts
│
├── .dockerignore
├── .editorconfig
├── .env.development.local
├── .env.production.local
├── .env.test.local
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .huskyrc
├── .lintstagedrc.json
├── .prettierrc
├── .swcrc
├── docker-compose.yml
├── Dockerfile.dev
├── Dockerfile.prod
├── ecosystem.config.js
├── jest.config.js
├── Makefile
├── nginx.conf
├── nodemon.json
├── package-lock.json
├── package.json
├── swagger.yaml
└── tsconfig.json
```



| Design             | Trade-Off     |
| :--------------- | :----------------- |
| One of the advantages of using the MVCS pattern is that it provides a clear separation of concerns between the different layers of the application. This can make the codebase more modular and easier to maintain over time      | However, the additional layer of the Service can add complexity to the application, making it harder to understand and debug.     |
| MySQL as the database can provide fast and reliable data access, but it requires more setup and configuration than other databases, such as MongoDB or SQLite.           | MySQL is a relational database, which means that it requires a predefined schema. This can make it less flexible than other databases, which allow for dynamic schemas.         |
| Swagger for documentation can help to make the API more accessible and understandable to other developers. It provides a standardized format for describing API endpoints, parameters, and responses.  | However, creating and maintaining Swagger documentation can be time-consuming and may require additional work to keep it up to date with changes to the API. |
<!-- | Install Package  | 📦 Install Package |
| Fix Readme       | 📚 Fix Readme      |
| Update Version   | 🌼 Update Version  |
| New Template     | 🎉 New Template    | -->


Overall, the decision to use the MVCS pattern, MySQL as the database, and Swagger for documentation involves trade-offs between flexibility, maintainability, and ease of use. By carefully considering these trade-offs and making informed decisions, developers can create a well-designed and scalable REST API that meets the needs of their users.
