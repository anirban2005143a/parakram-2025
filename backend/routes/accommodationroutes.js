const express = require('express');
const { selectAccommodation, getAccommodationTypes } = require('../controllers/accommodationController');

const router = express.Router();

router.get('/types', getAccommodationTypes);
router.post('/select', selectAccommodation);

module.exports = router;
// routes/accommodationRoutes.js

// const express = require('express');
// const { 
//   getAccommodationOptions, 
//   selectAccommodation, 
//   calculateTeamAccommodationCost, 
//   seedAccommodationOptions 
// } = require('../controllers/accommodationController');
// const { authMiddleware, adminMiddleware } = require('../middlewares/auth');

// const router = express.Router();

// // This should be getAccommodationOptions (not getAccommodationTypes)
// router.get('/types', getAccommodationOptions);
// router.post('/select', selectAccommodation);

// // If you need these other routes:
// router.get('/team/:teamId/cost', calculateTeamAccommodationCost);
// router.post('/seed', authMiddleware, adminMiddleware, seedAccommodationOptions);

// module.exports = router;

// const express = require('express');
// const { 
//   getAccommodationOptions: getAccommodationTypes, 
//   selectAccommodation 
// } = require('../controllers/accommodationController');

// const router = express.Router();

// router.get('/types', getAccommodationTypes);
// router.post('/select', selectAccommodation);

// module.exports = router;