const express = require('express');
const router = express.Router();
const nonStudentUserController = require('../controllers/nonStudentUserController');  

router.post('/nonStudentUser', nonStudentUserController.createNonStudentUser);  
router.get('/nonStudentUsers', nonStudentUserController.getAllNonStudentUsers);  
router.get('/nonStudentUser/:id', nonStudentUserController.getNonStudentUserById);  
router.put('/nonStudentUser/:id', nonStudentUserController.updateNonStudentUser);  
router.delete('/nonStudentUser/:id', nonStudentUserController.deleteNonStudentUser);  

module.exports = router;
