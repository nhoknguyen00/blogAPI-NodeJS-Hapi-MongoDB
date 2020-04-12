import Joi from '@hapi/joi'

const articleSchema = Joi.object({
  title: Joi.string().trim().required().min(1).max(1000).message({
    'string.base': 'Invalid type, title must be a string',
    'string.empty': 'Please enter title',
    'string.min': 'Title must be at least 1 character long.',
    'string.max': 'Title must be at most 100 character long.'
  }),
  text: Joi.string().trim().required().min(1).max(1000).message({
    'string.base': 'Invalid type, text must be a string',
    'string.empty': 'Please enter text',
    'string.min': 'Text must be at least 1 character long.',
    'string.max': 'Text must be at most 100 character long.'
  })
})

export default articleSchema
