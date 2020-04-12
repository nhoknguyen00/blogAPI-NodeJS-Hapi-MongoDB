import * as userController from '../controllers/user.controller'
import basicResponse from './../response'

const userRoute = [
  {
    method: 'GET',
    path: '/user/{userId}/comment',
    config: {
      tags: ['api'],
      description: 'get all comments of user across all articles',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: userController.getAllCommentsOfUser
  },
  {
    method: 'PUT',
    path: '/user/{userId}/article/{articleId}',
    config: {
      tags: ['api'],
      description: 'update the article content which created by specific userId',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: userController.updateArticleOfUserById
  },
  {
    method: 'DELETE',
    path: '/user/{userId}/comment:voted',
    config: {
      tags: ['api'],
      description: 'delete all comments voted by specific userId',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: userController.deleteAllCommentsVotedByUser
  }
]

export default userRoute
