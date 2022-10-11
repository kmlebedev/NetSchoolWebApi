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
import {PrepareEmLoginFormCountries} from './PrepareEmLoginFormCountries';

/**
 * The PrepareLoginForm model module.
 * @module model/PrepareLoginForm
 * @version 4.30.43656
 */
export class PrepareLoginForm {
  /**
   * Constructs a new <code>PrepareLoginForm</code>.
   * @alias module:model/PrepareLoginForm
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PrepareLoginForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrepareLoginForm} obj Optional instance to populate.
   * @return {module:model/PrepareLoginForm} The populated <code>PrepareLoginForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PrepareLoginForm();
      if (data.hasOwnProperty('countries'))
        obj.countries = ApiClient.convertToType(data['countries'], [PrepareEmLoginFormCountries]);
      if (data.hasOwnProperty('states'))
        obj.states = ApiClient.convertToType(data['states'], [PrepareEmLoginFormCountries]);
      if (data.hasOwnProperty('provinces'))
        obj.provinces = ApiClient.convertToType(data['provinces'], [PrepareEmLoginFormCountries]);
      if (data.hasOwnProperty('cities'))
        obj.cities = ApiClient.convertToType(data['cities'], [PrepareEmLoginFormCountries]);
      if (data.hasOwnProperty('funcs'))
        obj.funcs = ApiClient.convertToType(data['funcs'], [PrepareEmLoginFormCountries]);
      if (data.hasOwnProperty('schools'))
        obj.schools = ApiClient.convertToType(data['schools'], [PrepareEmLoginFormCountries]);
      if (data.hasOwnProperty('cid'))
        obj.cid = ApiClient.convertToType(data['cid'], 'Number');
      if (data.hasOwnProperty('sid'))
        obj.sid = ApiClient.convertToType(data['sid'], 'Number');
      if (data.hasOwnProperty('pid'))
        obj.pid = ApiClient.convertToType(data['pid'], 'Number');
      if (data.hasOwnProperty('cn'))
        obj.cn = ApiClient.convertToType(data['cn'], 'Number');
      if (data.hasOwnProperty('sft'))
        obj.sft = ApiClient.convertToType(data['sft'], 'Number');
      if (data.hasOwnProperty('scid'))
        obj.scid = ApiClient.convertToType(data['scid'], 'Number');
      if (data.hasOwnProperty('hlevels'))
        obj.hlevels = ApiClient.convertToType(data['hlevels'], Object);
      if (data.hasOwnProperty('ems'))
        obj.ems = ApiClient.convertToType(data['ems'], Object);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/PrepareEmLoginFormCountries>} countries
 */
PrepareLoginForm.prototype.countries = undefined;

/**
 * @member {Array.<module:model/PrepareEmLoginFormCountries>} states
 */
PrepareLoginForm.prototype.states = undefined;

/**
 * @member {Array.<module:model/PrepareEmLoginFormCountries>} provinces
 */
PrepareLoginForm.prototype.provinces = undefined;

/**
 * @member {Array.<module:model/PrepareEmLoginFormCountries>} cities
 */
PrepareLoginForm.prototype.cities = undefined;

/**
 * @member {Array.<module:model/PrepareEmLoginFormCountries>} funcs
 */
PrepareLoginForm.prototype.funcs = undefined;

/**
 * @member {Array.<module:model/PrepareEmLoginFormCountries>} schools
 */
PrepareLoginForm.prototype.schools = undefined;

/**
 * @member {Number} cid
 */
PrepareLoginForm.prototype.cid = undefined;

/**
 * @member {Number} sid
 */
PrepareLoginForm.prototype.sid = undefined;

/**
 * @member {Number} pid
 */
PrepareLoginForm.prototype.pid = undefined;

/**
 * @member {Number} cn
 */
PrepareLoginForm.prototype.cn = undefined;

/**
 * @member {Number} sft
 */
PrepareLoginForm.prototype.sft = undefined;

/**
 * @member {Number} scid
 */
PrepareLoginForm.prototype.scid = undefined;

/**
 * @member {Object} hlevels
 */
PrepareLoginForm.prototype.hlevels = undefined;

/**
 * @member {Object} ems
 */
PrepareLoginForm.prototype.ems = undefined;

