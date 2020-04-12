import articleModel from '../models/article.model'
import moment from 'moment'
import debug from '../utils/debug.utils'

const NAMESPACE = `articleRepository-${moment.utc().toISOString()}`

export const findArticleById = async (articleId) => {
  try {
    return await articleModel.findById(articleId)
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const updateArticleById = async (articleId, title, text) => {
  try {
    return await articleModel.findByIdAndUpdate(articleId, { title, text })
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}
