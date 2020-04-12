import * as commentController from '../controllers/comment.controller'
import basicResponse from './../response'

const commentRoute = [
  {
    method: 'GET',
    path: '/comment',
    config: {
      tags: ['api'],
      description: 'get all comment with vote number',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: commentController.getAllCommentsWithVoteNumber
  }
]

export default commentRoute
