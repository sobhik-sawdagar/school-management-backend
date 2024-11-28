# School Management API

## Overview
This School Management API is a Node.js application built with Express.js and MySQL, designed to manage school information with a focus on geographical proximity. The API allows users to add schools and retrieve a list of schools sorted by their distance from a given location.

## Features
- Add new schools with detailed information
- List schools sorted by proximity to a specified location
- Robust input validation
- Haversine formula-based distance calculation
- MySQL database integration

## Requirements
- Node.js (v14 or higher)
- MySQL Database
- npm (Node Package Manager)

## Local Setup

### 1. Clone the Repository
```bash
https://github.com/sobhik-sawdagar/school-management-backend.git
cd school-management-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the project root with the following configuration:
```
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=school_management_db
PORT=3000
```

### 4. Database Setup
- Create a MySQL database named `school_management_db`
- The application will automatically create the required `schools` table

### 5. Run the Application
```bash
# Production mode
npm start
```

## API Endpoints

### 1. Add School
- **URL:** `/school/addSchool`
- **Method:** POST
- **Payload:** 
```json
{
  "name": "School Name",
  "address": "Full School Address",
  "latitude": 40.7128,
  "longitude": -74.0060
}
```

### 2. List Schools by Proximity
- **URL:** `/school/listSchools`
- **Method:** GET
- **Query Parameters:**
  - `latitude`: User's latitude
  - `longitude`: User's longitude
- **Example:** `/school/listSchools?latitude=40.7128&longitude=-74.0060`

## Hosted Application
Can't set up locally? Use the hosted version:
**Hosted URL:** https://school-management-backend-alpha.vercel.app/

## Postman Collection
A Postman collection is provided to easily test the APIs:
- Contains pre-configured requests for adding schools and listing schools
- Includes example payloads and expected responses
- Helps in quick API exploration and testing

## Testing the API
You can test the endpoints using:
- Postman
- cURL
- Any API testing tool
- Web API testing platforms

## Technologies Used
- Node.js
- Express.js
- MySQL
- Joi (Validation)
- Haversine Formula (Distance Calculation)

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
This project is open-source.
