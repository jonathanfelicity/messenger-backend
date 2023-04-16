<div align="center">
  <img src="./logo.png">
</div>

# Messenger API

## Table of Contents 📑

- [Introduction](#introduction) 🌟
- [Installation](#installation) 💻
- [Usage](#usage) 🚀
- [Navigating API Design Trade-offs](#design) 🎨

## Introduction 🌟

Messenger API is a TypeScript, TypeORM, MySQL, and Express API server for building messaging applications. It comes with pre-built modules for user authentication, logging, and request validation, making it a solid foundation for building scalable and secure messaging applications.




* TypeScript
* TypeORM
* Express
* JWT authentication
* Logging with Winston
* API request validation with Class Validator
* Swagger documentation with Swagger UI Express
* Environment variables management with Dotenv and Envalid
* CORS handling with Cors
* HTTP security with Helmet and HPP
* Compression with Compression
* Hashing with Bcrypt
* Continuous integration with Jest and linting with Eslint
* Code formatting with Prettier
* Automated deployment with PM2

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
