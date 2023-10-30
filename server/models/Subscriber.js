import mongoose from "mongoose";

// Define the Subscriber schema
const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  isSubscribed: {
    type: Boolean,
    default: false, // You can set this to true by default
  },
  // Additional metadata fields (e.g., name, preferences, etc.)
});

// Create a Subscriber model from the schema
const Subscriber = mongoose.model('Subscriber', subscriberSchema);

export default Subscriber