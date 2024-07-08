## Description

This project implements a user authentication module with sign-up and sign-in functionalities. It consists of a backend API built with NestJS for handling user operations, and a frontend developed using ReactJS with Vite.

## Features

Sign-up Page: Allows users to register with their email, name, and password.<br/>
Sign-in Page: Enables users to log in using their email and password.<br/>
Application Page: Upon successful login, displays a welcome message "Welcome to the application".<br/>

# Environment Setup

## Backend (API)

Ensure MongoDB is set up and running locally. Configure the following environment variables:

```bash
MONGO_SRV=
MONGO_DB=
```
Set up the API base URL for the frontend. Configure the following environment variable:

## Frontend (Client)

```bash
VITE_API_BASE_URL=
```


```

## Running the app

```bash

# development mode
$ cd api
$ npm run start

$ cd client
$ npm run dev


```
## IMPORTANT NOTE

Ensure MongoDB is properly configured and accessible. Adjust configuration variables as per your local setup before running the application.
