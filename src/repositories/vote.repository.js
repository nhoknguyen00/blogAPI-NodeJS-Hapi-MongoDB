import voteModel from '../models/vote.model'
import moment from 'moment'
import debug from '../utils/debug.utils'

const NAMESPACE = `voteRepository-${moment.utc().toISOString()}`

export const getAllVotesOfComment = async (commentId) => {
  try {
    return await voteModel.find({ comment: commentId })
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const getAllVotesOfUser = async (userId) => {
  try {
    return await voteModel.find({ user: userId })
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}
