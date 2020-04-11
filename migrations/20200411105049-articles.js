const debug = require('../src/utils/debug.utils')
const ids = require('../mongoObjectIdSeeds')

module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    try {
      await db.collection('articles').insertMany([{
        _id: ids.articleIds[0],
        title: 'NBA announces inaugural HORSE Challenge',
        text: '8 NBA and WNBA players and legends to participate in single-elimination shooting competition',
        user: ids.userIds[0],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        _id: ids.articleIds[1],
        title: 'NBA says players will receive full pay on April 15',
        text: 'NBA players will receive their full checks when the next payday for most of them arrives on April 15 despite no games having been played for more than a month at that point.',
        user: ids.userIds[0],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        _id: ids.articleIds[2],
        title: 'Curry inspires hope with call to Oakland nurses',
        text: 'Golden State Warriors superstar Stephen Curry gave an ICU nurse and her coworkers a moment of inspiration and relief when he reached out to her (via FaceTime) on Wednesday.',
        user: ids.userIds[1],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        _id: ids.articleIds[3],
        title: 'NBA Together: Damian Lillard on the new normal',
        text: 'Ernie Johnson is joined by NBA Portland Trail Blazers guard Damian Lillard to discuss how he is adjusting to life at home.',
        user: ids.userIds[1],
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
    await db.collection('articles').drop()
  }
};
