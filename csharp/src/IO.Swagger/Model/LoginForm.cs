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
    /// LoginForm
    /// </summary>
    [DataContract]
        public partial class LoginForm :  IEquatable<LoginForm>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="LoginForm" /> class.
        /// </summary>
        /// <param name="items">items.</param>
        /// <param name="lastElem">lastElem.</param>
        public LoginForm(List<PrepareEmLoginFormCountries> items = default(List<PrepareEmLoginFormCountries>), string lastElem = default(string))
        {
            this.Items = items;
            this.LastElem = lastElem;
        }
        
        /// <summary>
        /// Gets or Sets Items
        /// </summary>
        [DataMember(Name="items", EmitDefaultValue=false)]
        public List<PrepareEmLoginFormCountries> Items { get; set; }

        /// <summary>
        /// Gets or Sets LastElem
        /// </summary>
        [DataMember(Name="lastElem", EmitDefaultValue=false)]
        public string LastElem { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class LoginForm {\n");
            sb.Append("  Items: ").Append(Items).Append("\n");
            sb.Append("  LastElem: ").Append(LastElem).Append("\n");
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
            return this.Equals(input as LoginForm);
        }

        /// <summary>
        /// Returns true if LoginForm instances are equal
        /// </summary>
        /// <param name="input">Instance of LoginForm to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(LoginForm input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Items == input.Items ||
                    this.Items != null &&
                    input.Items != null &&
                    this.Items.SequenceEqual(input.Items)
                ) && 
                (
                    this.LastElem == input.LastElem ||
                    (this.LastElem != null &&
                    this.LastElem.Equals(input.LastElem))
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
                if (this.Items != null)
                    hashCode = hashCode * 59 + this.Items.GetHashCode();
                if (this.LastElem != null)
                    hashCode = hashCode * 59 + this.LastElem.GetHashCode();
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
