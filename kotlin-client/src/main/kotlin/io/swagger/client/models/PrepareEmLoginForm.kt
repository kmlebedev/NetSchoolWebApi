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
package io.swagger.client.models

import io.swagger.client.models.PrepareEmLoginFormCountries

/**
 * 
 * @param countries 
 * @param states 
 * @param hlevels 
 * @param ems 
 * @param emCid 
 * @param emSid 
 * @param hlevel 
 * @param emId 
 */
data class PrepareEmLoginForm (

    val countries: kotlin.Array<PrepareEmLoginFormCountries>? = null,
    val states: kotlin.Array<PrepareEmLoginFormCountries>? = null,
    val hlevels: kotlin.Array<PrepareEmLoginFormCountries>? = null,
    val ems: kotlin.Array<PrepareEmLoginFormCountries>? = null,
    val emCid: kotlin.Int? = null,
    val emSid: kotlin.Int? = null,
    val hlevel: kotlin.Int? = null,
    val emId: kotlin.Int? = null
) {
}