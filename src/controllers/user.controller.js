import * as userService from '../services/user.service'
import * as articleService from '../services/article.service'
import articleSchema from '../validation/article.schema'
import Boom from '@hapi/boom'

export const getAllCommentsOfUser = async (request, h) => {
  const { userId } = request.params

  if (!userId) {
    return Boom.badRequest('UserId is missing')
  }

  return await userService.getAllCommentsOfUser(userId)
}

export const deleteAllCommentsVotedByUser = async (request, h) => {
  const { userId } = request.params

  if (!userId) {
    return Boom.badRequest('UserId is missing')
  }

  return await userService.deleteAllCommentsVotedByUser(userId)
}

export const updateArticleOfUserById = async (request, h) => {
  const { userId, articleId } = request.params

  if (!userId || !articleId) {
    return Boom.badRequest('UserId or articleId is missing.')
  }

  const articleInstance = await articleService.findArticleById(articleId)
  if (articleInstance.user != userId) {
    return Boom.badRequest('This article is not belong to this user.')
  }

  const { title, text } = request.payload
  const { error } = articleSchema.validate({ title, text })
  if (error) {
    return Boom.badRequest(error.details[0].message)
  }

  return articleService.updateArticleById(articleInstance._id, title, text)
}
