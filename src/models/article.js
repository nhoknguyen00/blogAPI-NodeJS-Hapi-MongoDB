import mongoose from 'mongoose'

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'title is required']
    },
    text: {
      type: String,
      required: [true, 'text is required']
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true
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

const Model = mongoose.model('Article', articleSchema)

export default Model
