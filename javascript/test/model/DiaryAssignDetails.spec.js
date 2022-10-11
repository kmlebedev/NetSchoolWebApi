/*
 * NetSchool
 * The API for the NetSchool irTech project
 *
 * OpenAPI spec version: 4.30.43656
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.35
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NetSchool);
  }
}(this, function(expect, NetSchool) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('DiaryAssignDetails', function() {
      beforeEach(function() {
        instance = new NetSchool.DiaryAssignDetails();
      });

      it('should create an instance of DiaryAssignDetails', function() {
        // TODO: update the code to test DiaryAssignDetails
        expect(instance).to.be.a(NetSchool.DiaryAssignDetails);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property assignmentName (base name: "assignmentName")', function() {
        // TODO: update the code to test the property assignmentName
        expect(instance).to.have.property('assignmentName');
        // expect(instance.assignmentName).to.be(expectedValueLiteral);
      });

      it('should have the property activityName (base name: "activityName")', function() {
        // TODO: update the code to test the property activityName
        expect(instance).to.have.property('activityName');
        // expect(instance.activityName).to.be(expectedValueLiteral);
      });

      it('should have the property problemName (base name: "problemName")', function() {
        // TODO: update the code to test the property problemName
        expect(instance).to.have.property('problemName');
        // expect(instance.problemName).to.be(expectedValueLiteral);
      });

      it('should have the property subjectGroup (base name: "subjectGroup")', function() {
        // TODO: update the code to test the property subjectGroup
        expect(instance).to.have.property('subjectGroup');
        // expect(instance.subjectGroup).to.be(expectedValueLiteral);
      });

      it('should have the property teacher (base name: "teacher")', function() {
        // TODO: update the code to test the property teacher
        expect(instance).to.have.property('teacher');
        // expect(instance.teacher).to.be(expectedValueLiteral);
      });

      it('should have the property productId (base name: "productId")', function() {
        // TODO: update the code to test the property productId
        expect(instance).to.have.property('productId');
        // expect(instance.productId).to.be(expectedValueLiteral);
      });

      it('should have the property isDeleted (base name: "isDeleted")', function() {
        // TODO: update the code to test the property isDeleted
        expect(instance).to.have.property('isDeleted');
        // expect(instance.isDeleted).to.be(expectedValueLiteral);
      });

      it('should have the property weight (base name: "weight")', function() {
        // TODO: update the code to test the property weight
        expect(instance).to.have.property('weight');
        // expect(instance.weight).to.be(expectedValueLiteral);
      });

      it('should have the property _date (base name: "date")', function() {
        // TODO: update the code to test the property _date
        expect(instance).to.have.property('_date');
        // expect(instance._date).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property attachments (base name: "attachments")', function() {
        // TODO: update the code to test the property attachments
        expect(instance).to.have.property('attachments');
        // expect(instance.attachments).to.be(expectedValueLiteral);
      });

      it('should have the property contentElements (base name: "contentElements")', function() {
        // TODO: update the code to test the property contentElements
        expect(instance).to.have.property('contentElements');
        // expect(instance.contentElements).to.be(expectedValueLiteral);
      });

      it('should have the property codeContentElements (base name: "codeContentElements")', function() {
        // TODO: update the code to test the property codeContentElements
        expect(instance).to.have.property('codeContentElements');
        // expect(instance.codeContentElements).to.be(expectedValueLiteral);
      });

    });
  });

}));
