import * as articleRepo from '../repositories/article.repository'

export const findArticleById = async (articleId) => {
    return await articleRepo.findArticleById(articleId)
}

export const updateArticleById = async (articleId, title, text) => {
    return await articleRepo.updateArticleById(articleId, title, text)
}
