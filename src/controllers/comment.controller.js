import * as commentService from '../services/comment.service'

export const getAllCommentsWithVoteNumber = async (request, h) => {
  return await commentService.getAllCommentsWithVoteNumber()
}
