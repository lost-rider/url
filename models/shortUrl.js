const mongoose = require('mongoose');
const base="lost";
const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  suggest: {
    type: String,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
});

// Create a separate counter schema
const CounterSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 }
});

const Counter = mongoose.model('Counter', CounterSchema);

shortUrlSchema.pre('save', async function (next) {
  const doc = this;
  if (!doc.isNew) {
    // If the document is not new, do nothing
    return next();
  }

  try {
    // Use findOneAndUpdate to increment the counter and get the updated value
    const counter = await Counter.findOneAndUpdate(
      { _id: 'shortUrlCounter' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    // Set the short URL based on the counter and suggest value
    if (doc.suggest) {
      doc.short = `${base}-${counter.seq}-${doc.suggest}`;
    } else {
      doc.short = `${base}-${counter.seq}`;
    }

    next();
  } catch (error) {
    return next(error);
  }
});

module.exports = mongoose.model('ShortUrl', shortUrlSchema);
