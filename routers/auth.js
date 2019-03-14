const router = require('express').Router(),
      authControls = require('../controllers/authControllers.js'),
      errHandler = require('../utils/errorHandler.js');

// HOME
router.get('/', (req, res) => {
  res.send('Hello');
});

// CREATE USER
router.post('/user', errHandler(authControls.createUser));

// USER INFO
router.get('/user/:userId', errHandler(authControls.seeUser));

// UPDATE USER INFO
router.put('/user/:userId', errHandler(authControls.updateUser));

// DELETE USER ACCOUNT
router.delete('/user/:userId', errHandler(authControls.deleteUser));

module.exports = router;