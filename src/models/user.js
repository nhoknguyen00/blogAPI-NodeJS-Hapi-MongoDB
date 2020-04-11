import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'firstName is required']
    },
    lastName: {
      type: String,
      required: [true, 'lastName is required']
    },
    age: {
      type: Number,
      min: [1, 'Age of user cannot be less than 1'],
      max: [100, 'Age of user cannot be greater than 100'],
      required: true
    },
    occupation: {
      type: String,
      default: false,
      required: [true, 'occupation is required']
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true
    },
    updatedAt: {
      type: Date,
      default: Date.now,
      required: true
    }
  }
);

userSchema.index({
  firstName: 1,
  lastName: 1
}, {
  unique: true
})

const Model = mongoose.model('User', userSchema)

export default Model
