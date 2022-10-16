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
import {ApiClient} from '../ApiClient';

/**
 * The LoginData model module.
 * @module model/LoginData
 * @version 4.30.43656
 */
export class LoginData {
  /**
   * Constructs a new <code>LoginData</code>.
   * @alias module:model/LoginData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>LoginData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoginData} obj Optional instance to populate.
   * @return {module:model/LoginData} The populated <code>LoginData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LoginData();
      if (data.hasOwnProperty('productName'))
        obj.productName = ApiClient.convertToType(data['productName'], 'String');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'String');
      if (data.hasOwnProperty('esiaLoginPage'))
        obj.esiaLoginPage = ApiClient.convertToType(data['esiaLoginPage'], 'String');
      if (data.hasOwnProperty('cacheVer'))
        obj.cacheVer = ApiClient.convertToType(data['cacheVer'], 'String');
      if (data.hasOwnProperty('schoolLogin'))
        obj.schoolLogin = ApiClient.convertToType(data['schoolLogin'], 'Boolean');
      if (data.hasOwnProperty('emLogin'))
        obj.emLogin = ApiClient.convertToType(data['emLogin'], 'Boolean');
      if (data.hasOwnProperty('windowsAuth'))
        obj.windowsAuth = ApiClient.convertToType(data['windowsAuth'], 'Boolean');
      if (data.hasOwnProperty('enableSms'))
        obj.enableSms = ApiClient.convertToType(data['enableSms'], 'Boolean');
      if (data.hasOwnProperty('esiaMainAuth'))
        obj.esiaMainAuth = ApiClient.convertToType(data['esiaMainAuth'], 'Boolean');
      if (data.hasOwnProperty('esiaButton'))
        obj.esiaButton = ApiClient.convertToType(data['esiaButton'], 'Boolean');
      if (data.hasOwnProperty('signatureLogin'))
        obj.signatureLogin = ApiClient.convertToType(data['signatureLogin'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} productName
 */
LoginData.prototype.productName = undefined;

/**
 * @member {String} version
 */
LoginData.prototype.version = undefined;

/**
 * @member {String} esiaLoginPage
 */
LoginData.prototype.esiaLoginPage = undefined;

/**
 * @member {String} cacheVer
 */
LoginData.prototype.cacheVer = undefined;

/**
 * @member {Boolean} schoolLogin
 */
LoginData.prototype.schoolLogin = undefined;

/**
 * @member {Boolean} emLogin
 */
LoginData.prototype.emLogin = undefined;

/**
 * @member {Boolean} windowsAuth
 */
LoginData.prototype.windowsAuth = undefined;

/**
 * @member {Boolean} enableSms
 */
LoginData.prototype.enableSms = undefined;

/**
 * @member {Boolean} esiaMainAuth
 */
LoginData.prototype.esiaMainAuth = undefined;

/**
 * @member {Boolean} esiaButton
 */
LoginData.prototype.esiaButton = undefined;

/**
 * @member {Boolean} signatureLogin
 */
LoginData.prototype.signatureLogin = undefined;
