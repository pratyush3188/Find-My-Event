const mongoose = require('mongoose');

const scannerLinkSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    default: null
  },
  expiresAt: {
    type: Date,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  lockedDeviceId: {
    type: String,
    default: ''
  }
}, { timestamps: true });

// Auto-delete document after expiration
scannerLinkSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model('ScannerLink', scannerLinkSchema);
