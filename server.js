const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { initializeDatabase } = require('./config/database');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.send(`
        <html>
          <head>
            <title>Assignment Submission Portal</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f4f7f8;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
              }
              .container {
                text-align: center;
                background-color: white;
                padding: 50px;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              }
              h1 {
                color: #333;
              }
              p {
                font-size: 1.1rem;
                color: #666;
              }
              h2 {
                color: #555;
                margin-top: 30px;
              }
              ul {
                list-style-type: none;
                padding: 0;
              }
              li {
                background-color: #e9ecef;
                margin: 10px 0;
                padding: 10px;
                border-radius: 5px;
                transition: background-color 0.3s ease;
              }
              li:hover {
                background-color: #d4d8da;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Welcome to School Management Portal's Backend System</h1>
              <p>Please test all the endpoints/routes in any API Testing service like Postman</p>
              
              <h2>Available Endpoints:</h2>
              <ul>
                <li>POST /school/addSchool</li>
                <li>GET /school/listSchools</li>
              </ul>
            </div>
          </body>
        </html>
      `);
  });

// Routes
const schoolRoutes = require('./routes/schoolRoutes');
app.use('/school', schoolRoutes);

// Initialize database
initializeDatabase();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

module.exports = app;