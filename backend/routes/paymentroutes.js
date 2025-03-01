const express = require('express');
const { processPayment } = require('../controllers/paymentController');
const { validatePayment } = require('../middlewares/validation');
const { getPaymentScreenshot }=require('../controllers/paymentController');
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