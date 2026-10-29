# Student API — Setup & Postman Testing Guide

This guide provides instructions to set up, run, and test the Express.js Student Management API using Postman.

## Prerequisites

* **Node.js** installed on your system.

* **Postman** app installed (or Postman Web Client).

## 1. Setup & Running the Server

1. **Initialize Project & Install Dependencies**:

   ```
   npm init -y
   npm install express
   
   ```

2. **Create Server File**:
   Save the API code into a file named `server.js`.

3. **Start the Server**:

   ```
   node server.js
   
   ```

   You should see the following console output:

   ```
   Server running at http://localhost:3000
   
   ```

## 2. API Endpoints Overview

| Method | Endpoint | Description | Request Body Required | 
| ----- | ----- | ----- | ----- | 
| **GET** | `http://localhost:3000/students` | Get all students | No | 
| **GET** | `http://localhost:3000/students/:id` | Get student by ID | No | 
| **POST** | `http://localhost:3000/students` | Add a new student | Yes (JSON) | 
| **PUT** | `http://localhost:3000/students/:id` | Update student by ID | Yes (JSON) | 
| **DELETE** | `http://localhost:3000/students/:id` | Delete student by ID | No | 

## 3. Step-by-Step Postman Testing

### 1. Get All Students

* **Method:** `GET`

* **URL:** `http://localhost:3000/students`

* **Steps:**

  1. Open a new tab in Postman.

  2. Select `GET` method and enter the URL.

  3. Click **Send**.

* **Expected Status:** `200 OK`

* **Expected Response:**

  ```
  [
    { "id": 1, "name": "Amit", "course": "IT" },
    { "id": 2, "name": "Priya", "course": "Computer" }
  ]
  
  ```

### 2. Get Student by ID

* **Method:** `GET`

* **URL:** `http://localhost:3000/students/1`

* **Steps:**

  1. Set method to `GET`.

  2. Enter the URL above.

  3. Click **Send**.

* **Expected Status:** `200 OK`

* **Expected Response:**

  ```
  { "id": 1, "name": "Amit", "course": "IT" }
  
  ```

### 3. Add a New Student

* **Method:** `POST`

* **URL:** `http://localhost:3000/students`

* **Steps:**

  1. Select `POST` method.

  2. Go to the **Body** tab below the URL bar.

  3. Select **raw** option.

  4. Change the dropdown on the right from `Text` to `JSON`.

  5. Paste the payload:

     ```
     {
       "name": "Rohan",
       "course": "Mechanical"
     }
     
     ```

  6. Click **Send**.

* **Expected Status:** `201 Created`

* **Expected Response:**

  ```
  {
    "message": "Student added successfully",
    "student": {
      "id": 3,
      "name": "Rohan",
      "course": "Mechanical"
    }
  }
  
  ```

### 4. Update an Existing Student

* **Method:** `PUT`

* **URL:** `http://localhost:3000/students/1`

* **Steps:**

  1. Select `PUT` method.

  2. Go to **Body** $\rightarrow$ **raw** $\rightarrow$ **JSON**.

  3. Paste the updated payload:

     ```
     {
       "name": "Amit Kumar",
       "course": "Data Science"
     }
     
     ```

  4. Click **Send**.

* **Expected Status:** `200 OK`

* **Expected Response:**

  ```
  {
    "message": "Student updated successfully",
    "student": {
      "id": 1,
      "name": "Amit Kumar",
      "course": "Data Science"
    }
  }
  
  ```

### 5. Delete a Student

* **Method:** `DELETE`

* **URL:** `http://localhost:3000/students/2`

* **Steps:**

  1. Select `DELETE` method.

  2. Enter the URL with the target ID.

  3. Click **Send**.

* **Expected Status:** `200 OK`

* **Expected Response:**

  ```
  {
    "message": "Student deleted successfully",
    "student": {
      "id": 2,
      "name": "Priya",
      "course": "Computer"
    }
  }
  
  ```

## 4. Error Handling Checks

You can also test error scenarios:

* **Invalid ID on GET/PUT/DELETE** (`/students/99`): Should return `404 Not Found` with `{ "message": "Student not found" }`.

* **Missing or Invalid Body on POST/PUT**: Send `{ "name": "" }` to trigger `400 Bad Request` with `{ "message": "Name and course are required" }`.