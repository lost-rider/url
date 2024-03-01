const mongoose = require('mongoose');
const shortId = require('shortid');

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  suggest: {
    type: String,
  },
  short: {
    type: String,
    required: true,
    default: function () {
      const base = shortId.generate();
      return this.suggest ? `${base}-${this.suggest}` : base;
    }
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = mongoose.model('ShortUrl', shortUrlSchema);
