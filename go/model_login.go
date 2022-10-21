/*
 * NetSchool
 *
 * The API for the NetSchool irTech project
 *
 * API version: 5.10.63221
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package swagger

type Login struct {
	At           string            `json:"at,omitempty"`
	Code         string            `json:"code,omitempty"`
	TimeOut      int32             `json:"timeOut,omitempty"`
	AccessToken  string            `json:"accessToken,omitempty"`
	RefreshToken string            `json:"refreshToken,omitempty"`
	AccountInfo  *LoginAccountInfo `json:"accountInfo,omitempty"`
	TokenType    string            `json:"tokenType,omitempty"`
	EntryPoint   string            `json:"entryPoint,omitempty"`
	RequestData  *LoginRequestData `json:"requestData,omitempty"`
	ErrorMessage string            `json:"errorMessage,omitempty"`
}
