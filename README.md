# Node.js CRUD API with Express and MongoDB

This is a simple **CRUD** (Create, Read, Update, Delete) API built using **Node.js**, **Express.js**, and **MongoDB**. It is a backend application that allows users to perform basic operations such as adding, fetching, updating, and deleting user records from a database.

This project demonstrates how to set up a RESTful API using modern JavaScript technologies, with MongoDB as the database for storing user data.

## **Table of Contents**

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [Create a User](#1-create-a-user)
  - [Get All Users](#2-get-all-users)
  - [Get a Single User](#3-get-a-single-user)
  - [Update a User](#4-update-a-user)
  - [Delete a User](#5-delete-a-user)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [License](#license)

## **Project Overview**

This project provides a RESTful API for managing users, where each user has basic fields such as `name`, `email`, and `age`. The application is built with the following technologies:

- **Node.js** for the backend runtime environment.
- **Express.js** for building the API routes and handling HTTP requests.
- **MongoDB** as the database to store user data.
- **Mongoose** to model MongoDB data.

With this CRUD API, you can:

- Add a new user.
- Retrieve information about all users or a specific user.
- Update user information.
- Delete a user from the database.

## **Prerequisites**

To run this application locally, make sure you have the following installed on your machine:

1. **Node.js** (v14 or higher): [Download Node.js](https://nodejs.org/en/)
2. **MongoDB**:
   - You can install MongoDB locally from [MongoDB's official website](https://www.mongodb.com/try/download/community) if you prefer.
   - Alternatively, you can use a cloud-based MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

If you plan to use **MongoDB Atlas**, make sure to get your connection URI from there.

## **Installation**

Follow these steps to set up and run the project on your local machine:

### 1. **Clone the repository**:
   First, clone this repository to your local machine:
   ```bash
   git clone https://github.com/farhanalishah23/nodejs-crud-apis.git
