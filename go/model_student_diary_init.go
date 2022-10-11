/*
 * NetSchool
 *
 * The API for the NetSchool irTech project
 *
 * API version: 4.30.43656
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package swagger

type StudentDiaryInit struct {
	Students []StudentDiaryInitStudents `json:"students,omitempty"`
	CurrentStudentId int32 `json:"currentStudentId,omitempty"`
	WeekStart string `json:"weekStart,omitempty"`
	YaClass bool `json:"yaClass,omitempty"`
	YaClassAuthUrl string `json:"yaClassAuthUrl,omitempty"`
	NewDiskToken string `json:"newDiskToken,omitempty"`
	NewDiskWasRequest bool `json:"newDiskWasRequest,omitempty"`
	TtsuRl string `json:"ttsuRl,omitempty"`
	ExternalUrl string `json:"externalUrl,omitempty"`
	Weight bool `json:"weight,omitempty"`
	MaxMark int32 `json:"maxMark,omitempty"`
	WithLaAssigns bool `json:"withLaAssigns,omitempty"`
}
