//  const Vendor = require('../models/vendors');
const vendorController = require('../controllers/vendorsController');
const express = require('express');

const router = express.Router();

router.post('/register' , vendorController.vendorRegister);

module.exports= router;