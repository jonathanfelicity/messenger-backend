<div align="center">
  <img src="./logo.png">
</div>

# Messenger API
Messenger API is a TypeScript, TypeORM, MySQL, and Express API server for building messaging applications. It comes with pre-built modules for user authentication, logging, and request validation, making it a solid foundation for building scalable and secure messaging applications.
```

│
├──📂 src
│  ├──📂 config
│  │  └── index.ts
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

## Features
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

## Installation
Clone the repository and navigate into it.
```bash
git clone https://github.com/yourusername/messenger-api.git
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
## Usage
To use the API, you need to have an authenticated user. To authenticate a user, send a POST request to the api/v1/auth/login endpoint with the user's credentials in the request body. The API will return a JWT token that you can use to make requests to the protected endpoints.

Refer to the Swagger documentation for the list of available endpoints and their usage.

