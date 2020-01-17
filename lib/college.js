/**
 *
 * @namespace faker.college
 */
var College = function (faker) {
    var self = this;
    var fake = faker.fake;
  
    /**
     * college
     *
     * @method faker.college.college
     */
    self.college = function () {
      return fake('{{college.university}} {{college.model1}}');
    };
  
    self.college.schema = {
      "description": "Generates a random college.",
      "sampleResults": ["ou ou1", "au ou2", "hcu ou3", "ku KITS"]
    };
  
    /**
     * university
     *
     * @method faker.college.university
     */
    self.university = function () {
      return faker.random.arrayElement(faker.definitions.college.university);
    };
  
    self.university.schema = {
      "description": "Generates a university name.",
      "sampleResults": ["ou", "au", "hcu", "ku"]
    };
  
  
    /**
     * model1
     *
     * @method faker.college.model1
     */
    self.model1 = function () {
      return faker.random.arrayElement(faker.definitions.college.model1);
    };
  
    self.model1.schema = {
      "description": "Generates a college model1.",
      "sampleResults": ["ou", "ou1", "ou2", "ou3", "ou4"]
    };
  
    /**
     * type
     *
     * @method faker.college.type
     */
    self.type = function () {
      return faker.random.arrayElement(faker.definitions.college.type);
    };
  
    self.type.schema = {
      "description": "Generates a college type.",
      "sampleResults": ["engineering", "science and technology", "degree", "pg", "inter"]
    };
  
    /**
     * reasearch
     *
     * @method faker.college.reasearch
     */
    self.reasearch = function () {
      return faker.random.arrayElement(faker.definitions.college.reasearch);
    };
  
    self.reasearch.schema = {
      "description": "Generates a reasearch type.",
      "sampleResults": ["SRF", "RA", "JRF"]
    };

  };
  module["exports"] = College;
