/* 
 * NetSchool
 *
 * The API for the NetSchool irTech project
 *
 * OpenAPI spec version: 5.10.63221
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
    /// GetAuthData
    /// </summary>
    [DataContract]
        public partial class GetAuthData :  IEquatable<GetAuthData>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetAuthData" /> class.
        /// </summary>
        /// <param name="lt">lt.</param>
        /// <param name="ver">ver.</param>
        /// <param name="salt">salt.</param>
        public GetAuthData(string lt = default(string), string ver = default(string), string salt = default(string))
        {
            this.Lt = lt;
            this.Ver = ver;
            this.Salt = salt;
        }
        
        /// <summary>
        /// Gets or Sets Lt
        /// </summary>
        [DataMember(Name="lt", EmitDefaultValue=false)]
        public string Lt { get; set; }

        /// <summary>
        /// Gets or Sets Ver
        /// </summary>
        [DataMember(Name="ver", EmitDefaultValue=false)]
        public string Ver { get; set; }

        /// <summary>
        /// Gets or Sets Salt
        /// </summary>
        [DataMember(Name="salt", EmitDefaultValue=false)]
        public string Salt { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class GetAuthData {\n");
            sb.Append("  Lt: ").Append(Lt).Append("\n");
            sb.Append("  Ver: ").Append(Ver).Append("\n");
            sb.Append("  Salt: ").Append(Salt).Append("\n");
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
            return this.Equals(input as GetAuthData);
        }

        /// <summary>
        /// Returns true if GetAuthData instances are equal
        /// </summary>
        /// <param name="input">Instance of GetAuthData to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetAuthData input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Lt == input.Lt ||
                    (this.Lt != null &&
                    this.Lt.Equals(input.Lt))
                ) && 
                (
                    this.Ver == input.Ver ||
                    (this.Ver != null &&
                    this.Ver.Equals(input.Ver))
                ) && 
                (
                    this.Salt == input.Salt ||
                    (this.Salt != null &&
                    this.Salt.Equals(input.Salt))
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
                if (this.Lt != null)
                    hashCode = hashCode * 59 + this.Lt.GetHashCode();
                if (this.Ver != null)
                    hashCode = hashCode * 59 + this.Ver.GetHashCode();
                if (this.Salt != null)
                    hashCode = hashCode * 59 + this.Salt.GetHashCode();
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