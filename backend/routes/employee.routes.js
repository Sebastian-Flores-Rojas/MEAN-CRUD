const express = require('express');
const router = express.Router();

const employessCtrl = require('../controllers/employee.controller')

router.get('/', employessCtrl.getEmployees);
router.post('/', employessCtrl.postEmployee);
router.get('/:id', employessCtrl.getEmployee);
router.put('/:id', employessCtrl.putEmployee);
router.delete('/:id', employessCtrl.deleteEmployee);

module.exports = router;