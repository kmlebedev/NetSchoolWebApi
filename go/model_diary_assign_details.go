/*
 * NetSchool
 *
 * The API for the NetSchool irTech project
 *
 * API version: 5.10.63221
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package swagger

type DiaryAssignDetails struct {
	Id int32 `json:"id,omitempty"`
	AssignmentName string `json:"assignmentName,omitempty"`
	ActivityName string `json:"activityName,omitempty"`
	ProblemName string `json:"problemName,omitempty"`
	SubjectGroup *DiaryAssignDetailsSubjectGroup `json:"subjectGroup,omitempty"`
	Teachers []DiaryAssignDetailsTeachers `json:"teachers,omitempty"`
	ProductId int32 `json:"productId,omitempty"`
	IsDeleted bool `json:"isDeleted,omitempty"`
	Weight int32 `json:"weight,omitempty"`
	Date string `json:"date,omitempty"`
	Description string `json:"description,omitempty"`
	Attachments []DiaryAssignDetailsAttachments `json:"attachments,omitempty"`
	ContentElements []interface{} `json:"contentElements,omitempty"`
	CodeContentElements []interface{} `json:"codeContentElements,omitempty"`
}
