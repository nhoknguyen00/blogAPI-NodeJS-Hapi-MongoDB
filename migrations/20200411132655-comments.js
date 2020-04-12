const debug = require('../src/utils/debug.utils')
const ids = require('../mongoObjectIdSeeds')

module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    try {
      await db.collection('comments').insertMany([{
        _id: ids.commentIds[0],
        content: 'This article is so great',
        user: ids.userIds[0],
        article: ids.articleIds[0],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        _id: ids.commentIds[1],
        content: 'The news is so breaking',
        user: ids.userIds[0],
        article: ids.articleIds[1],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        _id: ids.commentIds[2],
        content: 'Just comment for fun',
        user: ids.userIds[0],
        article: ids.articleIds[2],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        _id: ids.commentIds[3],
        content: 'Guys you have to believe this',
        user: ids.userIds[1],
        article: ids.articleIds[2],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        _id: ids.commentIds[4],
        content: 'Can you give me more information ?',
        user: ids.userIds[1],
        article: ids.articleIds[3],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        _id: ids.commentIds[5],
        content: 'I need to tell the world now',
        user: ids.userIds[1],
        article: ids.articleIds[3],
        createdAt: new Date(),
        updatedAt: new Date()
      }])
    }
    catch (err) {
      debug.error(err)
    }
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    try {
      await db.collection('comments').drop()
    }
    catch (err) {
      debug.error(err)
    }
  }
};
