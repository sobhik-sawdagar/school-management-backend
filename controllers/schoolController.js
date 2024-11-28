const School = require('../models/school');

exports.addSchool = async (req, res) => {
  try {
    // Validate input
    const { error } = School.validateSchool(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message
      });
    }

    // Add school
    const schoolId = await School.addSchool(req.body);
    
    res.status(201).json({
      success: true,
      message: 'School added successfully',
      schoolId: schoolId
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.listSchools = async (req, res) => {
  const { latitude, longitude } = req.query;

  // Validate coordinates
  if (!latitude || !longitude) {
    return res.status(400).json({
      success: false,
      message: 'Latitude and longitude are required'
    });
  }

  try {
    const schools = await School.listSchoolsByProximity(
      parseFloat(latitude), 
      parseFloat(longitude)
    );

    res.status(200).json({
      success: true,
      total: schools.length,
      schools: schools
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};