import * as commentRepo from '../repositories/comment.repository'
import * as voteRepo from '../repositories/vote.repository'

export const getAllCommentsWithVoteNumber = async () => {
  const commentList = await commentRepo.getAllComments()
  const result = []
  for (const comment of commentList) {
    const voteListOfComment = await voteRepo.getAllVotesOfComment(comment._id)
    result.push({ comment, voteNumber: voteListOfComment.length })
    //cant add voteNumber directly to comment
  }
  return result
}
