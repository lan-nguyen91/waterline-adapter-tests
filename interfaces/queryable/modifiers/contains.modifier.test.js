var assert = require('assert'),
    _ = require('lodash');

describe('Queryable Interface', function() {

  describe('Modifiers', function() {
    describe('contains', function() {
      describe('full where criteria', function() {

        /////////////////////////////////////////////////////
        // TEST METHODS
        ////////////////////////////////////////////////////

        it('should return the user with the correct name', function(done) {
          var part = 'long_xx3ah4aj8xrxh!!!r',
              testName = 'long_xx3ah4aj8xrxh!!!r contains query test';

          Queryable.User.create({ first_name: testName }, function(err) {
            if(err) return done(err);

            Queryable.User.where({ first_name: { contains: part }}, function(err, users) {
              assert.ifError(err);
              assert(Array.isArray(users));
              assert.equal(users.length, 1);
              assert.equal(users[0].first_name, testName);
              done();
            });
          });
        });
      });

    });
  });
});
