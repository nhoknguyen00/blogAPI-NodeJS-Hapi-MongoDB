import commentModel from '../models/comment.model'
import moment from 'moment'
import debug from '../utils/debug.utils'

const NAMESPACE = `commentRepository-${moment.utc().toISOString()}`

export const getAllComments = async () => {
  try {
    return await commentModel.find()
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const getAllCommentsOfUser = async (userId) => {
  try {
    return await commentModel.find({ user: userId })
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const deleteCommentById = async (commentId) => {
  try {
    return await commentModel.findByIdAndDelete(commentId)
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}
