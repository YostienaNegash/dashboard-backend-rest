const express = require('express');
const router = express.Router();
const campusOrganizationController = require('../controllers/campusOrganizationController');  


router.post('/campusOrganization', campusOrganizationController.createCampusOrganization);  
router.get('/campusOrganizations', campusOrganizationController.getAllCampusOrganizations);  
router.get('/campusOrganization/:id', campusOrganizationController.getCampusOrganizationById);  
router.put('/campusOrganization/:id', campusOrganizationController.updateCampusOrganization);  
router.delete('/campusOrganization/:id', campusOrganizationController.deleteCampusOrganization);  
module.exports = router;
