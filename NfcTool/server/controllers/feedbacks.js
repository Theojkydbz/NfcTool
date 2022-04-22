const Feedback = require('../models/feedbacks');

exports.getSecret = function (req, res) {
  return res.json({secret: 'I am secret Message'})
}

exports.getFeedbacks = function(req, res) {
  Feedback.find({})
        .populate('category')
        .populate('helperPeople')
        .exec((errors, feedbacks) => {

    if (errors) {
      return res.status(422).send({errors});
    }

    return res.json(feedbacks);
  });
}

exports.getFeedbackById = function(req, res) {
  const {id} = req.params;

  Feedback.findById(id)
        .populate('feedbackCreator', 'name id avatar')
        .populate('category')
        .populate({path: 'helperPeople',
           options: {limit: 5, sort: {username: -1}}})
        .exec((errors, feedback) => {
    if (errors) {
      return res.status(422).send({errors});
    }

    return res.json(feedback);
  });
}
