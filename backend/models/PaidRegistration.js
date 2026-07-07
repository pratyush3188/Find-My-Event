const mongoose = require('mongoose');

const paidRegistrationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'eventModel'
  },
  eventModel: {
    type: String,
    required: true,
    enum: ['Event', 'EventSubmission']
  },
  razorpayOrderId: {
    type: String,
    required: true
  },
  razorpayPaymentId: {
    type: String
  },
  razorpaySignature: {
    type: String
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'INR'
  },
  ticketsCount: {
    type: Number,
    required: true,
    default: 1
  },
  customAnswers: [{
    question: String,
    answer: mongoose.Schema.Types.Mixed
  }],
  teamMembers: [{
    name: String,
    email: String,
    phone: String,
    customAnswers: [{
      question: String,
      answer: mongoose.Schema.Types.Mixed
    }]
  }],
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  teamSize: {
    type: Number,
    default: 1
  },
  teamMembers: [{
    name: String,
    email: String,
    phone: String,
    customAnswers: [{
      question: String,
      answer: mongoose.Schema.Types.Mixed
    }]
  }],
  customAnswers: [{
    question: String,
    answer: mongoose.Schema.Types.Mixed
  }]
}, { timestamps: true });

// Prevent multiple successful registrations for the same user and event
paidRegistrationSchema.index({ user: 1, event: 1 }, { unique: true });

module.exports = mongoose.model('PaidRegistration', paidRegistrationSchema);
