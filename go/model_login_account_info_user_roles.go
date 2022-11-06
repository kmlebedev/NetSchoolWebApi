/*
 * NetSchool
 *
 * The API for the NetSchool irTech project
 *
 * API version: 5.10.63221
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package swagger

type LoginAccountInfoUserRoles struct {
	UserId int32 `json:"userId,omitempty"`
	SchoolId int32 `json:"schoolId,omitempty"`
	Role *LoginAccountInfoUserRolesRole `json:"role,omitempty"`
}