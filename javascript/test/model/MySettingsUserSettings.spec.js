/*
 * NetSchool
 * The API for the NetSchool irTech project
 *
 * OpenAPI spec version: 5.10.63221
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
    describe('MySettingsUserSettings', function() {
      beforeEach(function() {
        instance = new NetSchool.MySettingsUserSettings();
      });

      it('should create an instance of MySettingsUserSettings', function() {
        // TODO: update the code to test MySettingsUserSettings
        expect(instance).to.be.a(NetSchool.MySettingsUserSettings);
      });

      it('should have the property showMobilePhone (base name: "showMobilePhone")', function() {
        // TODO: update the code to test the property showMobilePhone
        expect(instance).to.have.property('showMobilePhone');
        // expect(instance.showMobilePhone).to.be(expectedValueLiteral);
      });

      it('should have the property defaultDesktop (base name: "defaultDesktop")', function() {
        // TODO: update the code to test the property defaultDesktop
        expect(instance).to.have.property('defaultDesktop');
        // expect(instance.defaultDesktop).to.be(expectedValueLiteral);
      });

      it('should have the property language (base name: "language")', function() {
        // TODO: update the code to test the property language
        expect(instance).to.have.property('language');
        // expect(instance.language).to.be(expectedValueLiteral);
      });

      it('should have the property favoriteReports (base name: "favoriteReports")', function() {
        // TODO: update the code to test the property favoriteReports
        expect(instance).to.have.property('favoriteReports');
        // expect(instance.favoriteReports).to.be(expectedValueLiteral);
      });

      it('should have the property passwordExpired (base name: "passwordExpired")', function() {
        // TODO: update the code to test the property passwordExpired
        expect(instance).to.have.property('passwordExpired');
        // expect(instance.passwordExpired).to.be(expectedValueLiteral);
      });

      it('should have the property recoveryAnswer (base name: "recoveryAnswer")', function() {
        // TODO: update the code to test the property recoveryAnswer
        expect(instance).to.have.property('recoveryAnswer');
        // expect(instance.recoveryAnswer).to.be(expectedValueLiteral);
      });

      it('should have the property recoveryQuestion (base name: "recoveryQuestion")', function() {
        // TODO: update the code to test the property recoveryQuestion
        expect(instance).to.have.property('recoveryQuestion');
        // expect(instance.recoveryQuestion).to.be(expectedValueLiteral);
      });

      it('should have the property theme (base name: "theme")', function() {
        // TODO: update the code to test the property theme
        expect(instance).to.have.property('theme');
        // expect(instance.theme).to.be(expectedValueLiteral);
      });

      it('should have the property userId (base name: "userId")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property showNetSchoolApp (base name: "showNetSchoolApp")', function() {
        // TODO: update the code to test the property showNetSchoolApp
        expect(instance).to.have.property('showNetSchoolApp');
        // expect(instance.showNetSchoolApp).to.be(expectedValueLiteral);
      });

    });
  });

}));