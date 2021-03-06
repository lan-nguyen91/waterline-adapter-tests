var assert = require('assert'),
    _ = require('lodash');

describe('Queryable Interface', function() {

  describe('.findOneLike()', function() {

    /////////////////////////////////////////////////////
    // TEST METHODS
    ////////////////////////////////////////////////////

    it('should return the user with the given name', function(done) {
      var part = '%findOneLike%',
          testName = 'asdgah4 test_findOneLike asg';

      Queryable.User.create({ first_name: testName }, function(err) {
        if (err) return done(err);

        Queryable.User.findOne({ first_name: { like : part }}, function(err, user) {
          assert.ifError(err);
          assert.equal(user.first_name, testName);
          done();
        });
      });
    });

  });
});
