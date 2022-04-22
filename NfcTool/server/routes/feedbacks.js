const express = require('express');
const router = express.Router();

const FeedbacksCtrl = require('../controllers/feedbacks');
const AuthCtrl = require('../controllers/auth')

router.get('', FeedbacksCtrl.getFeedbacks);
router.get('/secret', AuthCtrl.onlyAuthUser, FeedbacksCtrl.getSecret);

router.get('/:id', FeedbacksCtrl.getFeedbackById);

module.exports = router;
