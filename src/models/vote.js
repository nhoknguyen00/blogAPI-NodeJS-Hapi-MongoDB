import mongoose from 'mongoose'

const voteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true
    },
    comment: {
      type: mongoose.Types.ObjectId,
      ref: 'Comment',
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

const Model = mongoose.model('Vote', voteSchema)

export default Model
