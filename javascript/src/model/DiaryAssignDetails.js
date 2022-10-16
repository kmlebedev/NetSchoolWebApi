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
import {DiaryAssignDetailsAttachments} from './DiaryAssignDetailsAttachments';
import {DiaryAssignDetailsSubjectGroup} from './DiaryAssignDetailsSubjectGroup';
import {DiaryAssignDetailsTeacher} from './DiaryAssignDetailsTeacher';

/**
 * The DiaryAssignDetails model module.
 * @module model/DiaryAssignDetails
 * @version 4.30.43656
 */
export class DiaryAssignDetails {
  /**
   * Constructs a new <code>DiaryAssignDetails</code>.
   * @alias module:model/DiaryAssignDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DiaryAssignDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DiaryAssignDetails} obj Optional instance to populate.
   * @return {module:model/DiaryAssignDetails} The populated <code>DiaryAssignDetails</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DiaryAssignDetails();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('assignmentName'))
        obj.assignmentName = ApiClient.convertToType(data['assignmentName'], 'String');
      if (data.hasOwnProperty('activityName'))
        obj.activityName = ApiClient.convertToType(data['activityName'], 'String');
      if (data.hasOwnProperty('problemName'))
        obj.problemName = ApiClient.convertToType(data['problemName'], 'String');
      if (data.hasOwnProperty('subjectGroup'))
        obj.subjectGroup = DiaryAssignDetailsSubjectGroup.constructFromObject(data['subjectGroup']);
      if (data.hasOwnProperty('teacher'))
        obj.teacher = DiaryAssignDetailsTeacher.constructFromObject(data['teacher']);
      if (data.hasOwnProperty('productId'))
        obj.productId = ApiClient.convertToType(data['productId'], 'Number');
      if (data.hasOwnProperty('isDeleted'))
        obj.isDeleted = ApiClient.convertToType(data['isDeleted'], 'Boolean');
      if (data.hasOwnProperty('weight'))
        obj.weight = ApiClient.convertToType(data['weight'], 'Number');
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'Date');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('attachments'))
        obj.attachments = ApiClient.convertToType(data['attachments'], [DiaryAssignDetailsAttachments]);
      if (data.hasOwnProperty('contentElements'))
        obj.contentElements = ApiClient.convertToType(data['contentElements'], [Object]);
      if (data.hasOwnProperty('codeContentElements'))
        obj.codeContentElements = ApiClient.convertToType(data['codeContentElements'], [Object]);
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
DiaryAssignDetails.prototype.id = undefined;

/**
 * @member {String} assignmentName
 */
DiaryAssignDetails.prototype.assignmentName = undefined;

/**
 * @member {String} activityName
 */
DiaryAssignDetails.prototype.activityName = undefined;

/**
 * @member {String} problemName
 */
DiaryAssignDetails.prototype.problemName = undefined;

/**
 * @member {module:model/DiaryAssignDetailsSubjectGroup} subjectGroup
 */
DiaryAssignDetails.prototype.subjectGroup = undefined;

/**
 * @member {module:model/DiaryAssignDetailsTeacher} teacher
 */
DiaryAssignDetails.prototype.teacher = undefined;

/**
 * @member {Number} productId
 */
DiaryAssignDetails.prototype.productId = undefined;

/**
 * @member {Boolean} isDeleted
 */
DiaryAssignDetails.prototype.isDeleted = undefined;

/**
 * @member {Number} weight
 */
DiaryAssignDetails.prototype.weight = undefined;

/**
 * @member {Date} _date
 */
DiaryAssignDetails.prototype._date = undefined;

/**
 * @member {String} description
 */
DiaryAssignDetails.prototype.description = undefined;

/**
 * @member {Array.<module:model/DiaryAssignDetailsAttachments>} attachments
 */
DiaryAssignDetails.prototype.attachments = undefined;

/**
 * @member {Array.<Object>} contentElements
 */
DiaryAssignDetails.prototype.contentElements = undefined;

/**
 * @member {Array.<Object>} codeContentElements
 */
DiaryAssignDetails.prototype.codeContentElements = undefined;
