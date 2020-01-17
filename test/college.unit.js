if (typeof module !== 'undefined') {
  var assert = require('assert');
  var sinon = require('sinon');
  var faker = require('../index');
}

describe("college.js", function () {
  describe("college()", function () {
      it("returns a random college", function () {
          sinon.stub(faker.college, 'college').returns('ou HITS');
          var college = faker.college.college();

          assert.equal(college, 'ou HITS');
          faker.college.college.restore();
      });
  });

  describe("university()", function () {
      it("returns random university", function () {
          sinon.stub(faker.college, 'university').returns('ou');
          var university = faker.college.university();

          assert.equal(university, 'ou');
          faker.college.university.restore();
      });
  });

  describe("type()", function () {
    it("returns random college type", function () {
      sinon.stub(faker.college, 'type').returns('engineering');
          var type = faker.college.type();

          assert.equal(type, 'engineering');
          faker.college.type.restore();
      });
  });

  describe("reasearch()", function () {
      it("returns a reasearch type", function () {
          sinon.stub(faker.college, 'reasearch').returns('JRF');
          var reasearch = faker.college.reasearch();

          assert.equal(reasearch, 'JRF');
          faker.college.reasearch.restore();
      });
  });
  
});
