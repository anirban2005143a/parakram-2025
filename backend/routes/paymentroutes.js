const express = require('express');
const { processPayment } = require('../controllers/paymentController.js');
const { validatePayment } = require('../middlewares/validation.js');
const { getPaymentScreenshot }=require('../controllers/paymentController.js');
const multer = require('multer');

// Configure multer for temporary storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();


router.get('/screenshot/:paymentId', getPaymentScreenshot);

router.post(
  '/process',
  upload.single('paymentScreenshot'),
  validatePayment,
  processPayment
);



module.exports = router;