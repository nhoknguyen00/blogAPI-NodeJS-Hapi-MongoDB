import * as commentRepo from '../repositories/comment.repository'
import * as voteRepo from '../repositories/vote.repository'

export const getAllCommentsOfUser = async (userId) => {
  return await commentRepo.getAllCommentsOfUser(userId)
}

export const deleteAllCommentsVotedByUser = async (userId) => {
  const voteList = await voteRepo.getAllVotesOfUser(userId)
  const results = []
  for (const vote of voteList) {
    const result = await commentRepo.deleteCommentById(vote.comment)
    if (result) {
      //result can be null because there are comments which were not voted by user
      results.push(result)
    }
  }
  return results
}
