/* 
 * NetSchool
 *
 * The API for the NetSchool irTech project
 *
 * OpenAPI spec version: 4.30.43656
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */
using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using SwaggerDateConverter = IO.Swagger.Client.SwaggerDateConverter;

namespace IO.Swagger.Model
{
    /// <summary>
    /// AssignmentTypesInner
    /// </summary>
    [DataContract]
        public partial class AssignmentTypesInner :  IEquatable<AssignmentTypesInner>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="AssignmentTypesInner" /> class.
        /// </summary>
        /// <param name="abbr">abbr.</param>
        /// <param name="order">order.</param>
        /// <param name="id">id.</param>
        /// <param name="name">name.</param>
        public AssignmentTypesInner(string abbr = default(string), int? order = default(int?), int? id = default(int?), string name = default(string))
        {
            this.Abbr = abbr;
            this.Order = order;
            this.Id = id;
            this.Name = name;
        }
        
        /// <summary>
        /// Gets or Sets Abbr
        /// </summary>
        [DataMember(Name="abbr", EmitDefaultValue=false)]
        public string Abbr { get; set; }

        /// <summary>
        /// Gets or Sets Order
        /// </summary>
        [DataMember(Name="order", EmitDefaultValue=false)]
        public int? Order { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public int? Id { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name="name", EmitDefaultValue=false)]
        public string Name { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class AssignmentTypesInner {\n");
            sb.Append("  Abbr: ").Append(Abbr).Append("\n");
            sb.Append("  Order: ").Append(Order).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as AssignmentTypesInner);
        }

        /// <summary>
        /// Returns true if AssignmentTypesInner instances are equal
        /// </summary>
        /// <param name="input">Instance of AssignmentTypesInner to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(AssignmentTypesInner input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Abbr == input.Abbr ||
                    (this.Abbr != null &&
                    this.Abbr.Equals(input.Abbr))
                ) && 
                (
                    this.Order == input.Order ||
                    (this.Order != null &&
                    this.Order.Equals(input.Order))
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.Abbr != null)
                    hashCode = hashCode * 59 + this.Abbr.GetHashCode();
                if (this.Order != null)
                    hashCode = hashCode * 59 + this.Order.GetHashCode();
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }
}
