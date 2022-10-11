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
import {StudentDiaryInitStudents} from './StudentDiaryInitStudents';

/**
 * The StudentDiaryInit model module.
 * @module model/StudentDiaryInit
 * @version 4.30.43656
 */
export class StudentDiaryInit {
  /**
   * Constructs a new <code>StudentDiaryInit</code>.
   * @alias module:model/StudentDiaryInit
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StudentDiaryInit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StudentDiaryInit} obj Optional instance to populate.
   * @return {module:model/StudentDiaryInit} The populated <code>StudentDiaryInit</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StudentDiaryInit();
      if (data.hasOwnProperty('students'))
        obj.students = ApiClient.convertToType(data['students'], [StudentDiaryInitStudents]);
      if (data.hasOwnProperty('currentStudentId'))
        obj.currentStudentId = ApiClient.convertToType(data['currentStudentId'], 'Number');
      if (data.hasOwnProperty('weekStart'))
        obj.weekStart = ApiClient.convertToType(data['weekStart'], 'Date');
      if (data.hasOwnProperty('yaClass'))
        obj.yaClass = ApiClient.convertToType(data['yaClass'], 'Boolean');
      if (data.hasOwnProperty('yaClassAuthUrl'))
        obj.yaClassAuthUrl = ApiClient.convertToType(data['yaClassAuthUrl'], 'String');
      if (data.hasOwnProperty('newDiskToken'))
        obj.newDiskToken = ApiClient.convertToType(data['newDiskToken'], 'String');
      if (data.hasOwnProperty('newDiskWasRequest'))
        obj.newDiskWasRequest = ApiClient.convertToType(data['newDiskWasRequest'], 'Boolean');
      if (data.hasOwnProperty('ttsuRl'))
        obj.ttsuRl = ApiClient.convertToType(data['ttsuRl'], 'String');
      if (data.hasOwnProperty('externalUrl'))
        obj.externalUrl = ApiClient.convertToType(data['externalUrl'], 'String');
      if (data.hasOwnProperty('weight'))
        obj.weight = ApiClient.convertToType(data['weight'], 'Boolean');
      if (data.hasOwnProperty('maxMark'))
        obj.maxMark = ApiClient.convertToType(data['maxMark'], 'Number');
      if (data.hasOwnProperty('withLaAssigns'))
        obj.withLaAssigns = ApiClient.convertToType(data['withLaAssigns'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/StudentDiaryInitStudents>} students
 */
StudentDiaryInit.prototype.students = undefined;

/**
 * @member {Number} currentStudentId
 */
StudentDiaryInit.prototype.currentStudentId = undefined;

/**
 * @member {Date} weekStart
 */
StudentDiaryInit.prototype.weekStart = undefined;

/**
 * @member {Boolean} yaClass
 */
StudentDiaryInit.prototype.yaClass = undefined;

/**
 * @member {String} yaClassAuthUrl
 */
StudentDiaryInit.prototype.yaClassAuthUrl = undefined;

/**
 * @member {String} newDiskToken
 */
StudentDiaryInit.prototype.newDiskToken = undefined;

/**
 * @member {Boolean} newDiskWasRequest
 */
StudentDiaryInit.prototype.newDiskWasRequest = undefined;

/**
 * @member {String} ttsuRl
 */
StudentDiaryInit.prototype.ttsuRl = undefined;

/**
 * @member {String} externalUrl
 */
StudentDiaryInit.prototype.externalUrl = undefined;

/**
 * @member {Boolean} weight
 */
StudentDiaryInit.prototype.weight = undefined;

/**
 * @member {Number} maxMark
 */
StudentDiaryInit.prototype.maxMark = undefined;

/**
 * @member {Boolean} withLaAssigns
 */
StudentDiaryInit.prototype.withLaAssigns = undefined;

