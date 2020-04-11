const debug = require('../src/utils/debug.utils')
const ids = require('../mongoObjectIdSeeds')

module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    try {
      await db.collection('votes').insertMany([{
        _id: ids.voteIds[0],
        user: ids.userIds[0],
        comment: ids.commentIds[0],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        _id: ids.voteIds[1],
        user: ids.userIds[0],
        comment: ids.commentIds[1],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        _id: ids.voteIds[2],
        user: ids.userIds[0],
        comment: ids.commentIds[2],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        _id: ids.voteIds[3],
        user: ids.userIds[1],
        comment: ids.commentIds[3],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        _id: ids.voteIds[4],
        user: ids.userIds[1],
        comment: ids.commentIds[3],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        _id: ids.voteIds[5],
        user: ids.userIds[1],
        comment: ids.commentIds[0],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        _id: ids.voteIds[6],
        user: ids.userIds[0],
        comment: ids.commentIds[0],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        _id: ids.voteIds[7],
        user: ids.userIds[0],
        comment: ids.commentIds[1],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        _id: ids.voteIds[8],
        user: ids.userIds[1],
        comment: ids.commentIds[2],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        _id: ids.voteIds[9],
        user: ids.userIds[1],
        comment: ids.commentIds[2],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        _id: ids.voteIds[10],
        user: ids.userIds[1],
        comment: ids.commentIds[3],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        _id: ids.voteIds[11],
        user: ids.userIds[1],
        comment: ids.commentIds[1],
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
    db.collection('votes').drop()
  }
};
