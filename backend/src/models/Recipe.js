const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  dietaryRestrictions: {
    type: [String],
    required: true,
  },
  cookingTime: {
    type: Number,
    required: true,
  },
  nutritionalInformation: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        text: String,
        rating: Number,
      },
    ],
    default: [],
  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;