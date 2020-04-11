const debug = require('../src/utils/debug.utils')

module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    try {
      await db.collection('users').insertMany([{
        firstName: 'Lưu',
        lastName: 'Tuấn Nguyên',
        age: 22,
        occupation: 'NodeJS Intern',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Mike D.',
        lastName: 'Tuấn Nguyên',
        age: 24,
        occupation: 'NodeJS Developer',
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
    await db.users.drop()
  }
};
