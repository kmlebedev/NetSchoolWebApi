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
    describe('Diary', function() {
      beforeEach(function() {
        instance = new NetSchool.Diary();
      });

      it('should create an instance of Diary', function() {
        // TODO: update the code to test Diary
        expect(instance).to.be.a(NetSchool.Diary);
      });

      it('should have the property weekStart (base name: "weekStart")', function() {
        // TODO: update the code to test the property weekStart
        expect(instance).to.have.property('weekStart');
        // expect(instance.weekStart).to.be(expectedValueLiteral);
      });

      it('should have the property weekEnd (base name: "weekEnd")', function() {
        // TODO: update the code to test the property weekEnd
        expect(instance).to.have.property('weekEnd');
        // expect(instance.weekEnd).to.be(expectedValueLiteral);
      });

      it('should have the property weekDays (base name: "weekDays")', function() {
        // TODO: update the code to test the property weekDays
        expect(instance).to.have.property('weekDays');
        // expect(instance.weekDays).to.be(expectedValueLiteral);
      });

      it('should have the property termName (base name: "termName")', function() {
        // TODO: update the code to test the property termName
        expect(instance).to.have.property('termName');
        // expect(instance.termName).to.be(expectedValueLiteral);
      });

      it('should have the property className (base name: "className")', function() {
        // TODO: update the code to test the property className
        expect(instance).to.have.property('className');
        // expect(instance.className).to.be(expectedValueLiteral);
      });

    });
  });

}));