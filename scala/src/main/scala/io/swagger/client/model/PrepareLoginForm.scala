/**
 * NetSchool
 * The API for the NetSchool irTech project
 *
 * OpenAPI spec version: 4.30.43656
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
package io.swagger.client.model


/**
 * @param countries 
 * @param states 
 * @param provinces 
 * @param cities 
 * @param funcs 
 * @param schools 
 * @param cid 
 * @param sid 
 * @param pid 
 * @param cn 
 * @param sft 
 * @param scid 
 * @param hlevels 
 * @param ems 
 */
case class PrepareLoginForm (
  countries: Option[List[PrepareEmLoginForm_countries]] = None,
  states: Option[List[PrepareEmLoginForm_countries]] = None,
  provinces: Option[List[PrepareEmLoginForm_countries]] = None,
  cities: Option[List[PrepareEmLoginForm_countries]] = None,
  funcs: Option[List[PrepareEmLoginForm_countries]] = None,
  schools: Option[List[PrepareEmLoginForm_countries]] = None,
  cid: Option[Integer] = None,
  sid: Option[Integer] = None,
  pid: Option[Integer] = None,
  cn: Option[Integer] = None,
  sft: Option[Integer] = None,
  scid: Option[Integer] = None,
  hlevels: Option[Any] = None,
  ems: Option[Any] = None
)

