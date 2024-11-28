const { pool } = require('../config/database');
const Joi = require('joi');

// Input validation schema
const schoolSchema = Joi.object({
  name: Joi.string().trim().required().min(2).max(255),
  address: Joi.string().trim().required().min(5).max(500),
  latitude: Joi.number().min(-90).max(90).required(),
  longitude: Joi.number().min(-180).max(180).required()
});

class School {
  // Validate school data
  static validateSchool(schoolData) {
    return schoolSchema.validate(schoolData);
  }

  // Add new school
  static async addSchool(schoolData) {
    const { name, address, latitude, longitude } = schoolData;
    
    try {
      const [result] = await pool.execute(
        'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
        [name, address, latitude, longitude]
      );
      
      return result.insertId;
    } catch (error) {
      throw new Error(`Error adding school: ${error.message}`);
    }
  }

  // List schools sorted by proximity
  static async listSchoolsByProximity(userLat, userLon) {
    try {
      const [schools] = await pool.execute('SELECT * FROM schools');
      
      // Calculate and sort schools by distance
      return schools.map(school => ({
        ...school,
        distance: `${require('../utils/geoDistance').calculateDistance(
          userLat, 
          userLon, 
          school.latitude, 
          school.longitude
      ) + ' ' + 'Km'}`
      })).sort((a, b) => a.distance - b.distance);
    } catch (error) {
      throw new Error(`Error listing schools: ${error.message}`);
    }
  }
}

module.exports = School; 