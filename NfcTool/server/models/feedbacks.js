const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  title: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  image: { type: String, required: true },
  description: { type: String, required: true },
  timeDeadline: { type: Date, required: true },
  calendlyLink: { type: String,
    required: 'Calendly Link is Required',
    lowercase: true,
    match: [/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/]},
  status: String,
  helperPeopleCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  feedbackCreator: { type: Schema.Types.ObjectId, ref: 'User' },
  helperPeople: [{type: Schema.Types.ObjectId, ref: 'User'}]
});
module.exports = mongoose.model('Feedback', feedbackSchema );
