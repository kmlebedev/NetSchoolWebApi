/**
 * NetSchool
 * The API for the NetSchool irTech project
 *
 * OpenAPI spec version: 5.10.63221
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
package io.swagger.client.model


/**
 * @param id  for example: '''5111111'''
 * @param assignmentName  for example: '''Развитие речи. Сочинение-рассуждение по рассказу «Коллекционная вещь» Тибора Фишера'''
 * @param activityName  for example: '''nil'''
 * @param problemName  for example: '''nil'''
 * @param subjectGroup 
 * @param teachers 
 * @param productId 
 * @param isDeleted  for example: '''false'''
 * @param weight  for example: '''10'''
 * @param date 
 * @param description  for example: '''Задание по рядам - рассуждение по картине. Смотрите прикреплённый файл'''
 * @param attachments 
 * @param contentElements  for example: '''nil'''
 * @param codeContentElements  for example: '''nil'''
 */
case class DiaryAssignDetails (
  id: Option[Integer] = None,
  assignmentName: Option[String] = None,
  activityName: Option[String] = None,
  problemName: Option[String] = None,
  subjectGroup: Option[diaryAssignDetails_subjectGroup] = None,
  teachers: Option[List[diaryAssignDetails_teachers]] = None,
  productId: Option[Integer] = None,
  isDeleted: Option[Boolean] = None,
  weight: Option[Integer] = None,
  date: Option[date] = None,
  description: Option[String] = None,
  attachments: Option[List[diaryAssignDetails_attachments]] = None,
  contentElements: Option[List[Any]] = None,
  codeContentElements: Option[List[Any]] = None
)

