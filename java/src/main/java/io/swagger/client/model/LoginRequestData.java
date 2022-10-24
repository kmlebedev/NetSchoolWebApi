/*
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

package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * LoginRequestData
 */

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2022-10-24T12:37:15.210Z[GMT]")
public class LoginRequestData {
  @SerializedName("warnType")
  private String warnType = null;

  public LoginRequestData warnType(String warnType) {
    this.warnType = warnType;
    return this;
  }

   /**
   * Get warnType
   * @return warnType
  **/
  @Schema(example = "1", description = "")
  public String getWarnType() {
    return warnType;
  }

  public void setWarnType(String warnType) {
    this.warnType = warnType;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LoginRequestData loginRequestData = (LoginRequestData) o;
    return Objects.equals(this.warnType, loginRequestData.warnType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(warnType);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LoginRequestData {\n");
    
    sb.append("    warnType: ").append(toIndentedString(warnType)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}