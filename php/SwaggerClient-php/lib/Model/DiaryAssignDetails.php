<?php
/**
 * DiaryAssignDetails
 *
 * PHP version 5
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * NetSchool
 *
 * The API for the NetSchool irTech project
 *
 * OpenAPI spec version: 4.30.43656
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 3.0.35
 */
/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace Swagger\Client\Model;

use \ArrayAccess;
use \Swagger\Client\ObjectSerializer;

/**
 * DiaryAssignDetails Class Doc Comment
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class DiaryAssignDetails implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'diaryAssignDetails';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'id' => 'int',
'assignment_name' => 'string',
'activity_name' => 'string',
'problem_name' => 'string',
'subject_group' => '\Swagger\Client\Model\DiaryAssignDetailsSubjectGroup',
'teacher' => '\Swagger\Client\Model\DiaryAssignDetailsTeacher',
'product_id' => 'int',
'is_deleted' => 'bool',
'weight' => 'int',
'date' => '\DateTime',
'description' => 'string',
'attachments' => '\Swagger\Client\Model\DiaryAssignDetailsAttachments[]',
'content_elements' => 'object[]',
'code_content_elements' => 'object[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'id' => null,
'assignment_name' => null,
'activity_name' => null,
'problem_name' => null,
'subject_group' => null,
'teacher' => null,
'product_id' => null,
'is_deleted' => null,
'weight' => null,
'date' => 'date',
'description' => null,
'attachments' => null,
'content_elements' => null,
'code_content_elements' => null    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerTypes()
    {
        return self::$swaggerTypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerFormats()
    {
        return self::$swaggerFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'id' => 'id',
'assignment_name' => 'assignmentName',
'activity_name' => 'activityName',
'problem_name' => 'problemName',
'subject_group' => 'subjectGroup',
'teacher' => 'teacher',
'product_id' => 'productId',
'is_deleted' => 'isDeleted',
'weight' => 'weight',
'date' => 'date',
'description' => 'description',
'attachments' => 'attachments',
'content_elements' => 'contentElements',
'code_content_elements' => 'codeContentElements'    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'id' => 'setId',
'assignment_name' => 'setAssignmentName',
'activity_name' => 'setActivityName',
'problem_name' => 'setProblemName',
'subject_group' => 'setSubjectGroup',
'teacher' => 'setTeacher',
'product_id' => 'setProductId',
'is_deleted' => 'setIsDeleted',
'weight' => 'setWeight',
'date' => 'setDate',
'description' => 'setDescription',
'attachments' => 'setAttachments',
'content_elements' => 'setContentElements',
'code_content_elements' => 'setCodeContentElements'    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'id' => 'getId',
'assignment_name' => 'getAssignmentName',
'activity_name' => 'getActivityName',
'problem_name' => 'getProblemName',
'subject_group' => 'getSubjectGroup',
'teacher' => 'getTeacher',
'product_id' => 'getProductId',
'is_deleted' => 'getIsDeleted',
'weight' => 'getWeight',
'date' => 'getDate',
'description' => 'getDescription',
'attachments' => 'getAttachments',
'content_elements' => 'getContentElements',
'code_content_elements' => 'getCodeContentElements'    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$swaggerModelName;
    }

    

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['id'] = isset($data['id']) ? $data['id'] : null;
        $this->container['assignment_name'] = isset($data['assignment_name']) ? $data['assignment_name'] : null;
        $this->container['activity_name'] = isset($data['activity_name']) ? $data['activity_name'] : null;
        $this->container['problem_name'] = isset($data['problem_name']) ? $data['problem_name'] : null;
        $this->container['subject_group'] = isset($data['subject_group']) ? $data['subject_group'] : null;
        $this->container['teacher'] = isset($data['teacher']) ? $data['teacher'] : null;
        $this->container['product_id'] = isset($data['product_id']) ? $data['product_id'] : null;
        $this->container['is_deleted'] = isset($data['is_deleted']) ? $data['is_deleted'] : null;
        $this->container['weight'] = isset($data['weight']) ? $data['weight'] : null;
        $this->container['date'] = isset($data['date']) ? $data['date'] : null;
        $this->container['description'] = isset($data['description']) ? $data['description'] : null;
        $this->container['attachments'] = isset($data['attachments']) ? $data['attachments'] : null;
        $this->container['content_elements'] = isset($data['content_elements']) ? $data['content_elements'] : null;
        $this->container['code_content_elements'] = isset($data['code_content_elements']) ? $data['code_content_elements'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets id
     *
     * @return int
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param int $id id
     *
     * @return $this
     */
    public function setId($id)
    {
        $this->container['id'] = $id;

        return $this;
    }

    /**
     * Gets assignment_name
     *
     * @return string
     */
    public function getAssignmentName()
    {
        return $this->container['assignment_name'];
    }

    /**
     * Sets assignment_name
     *
     * @param string $assignment_name assignment_name
     *
     * @return $this
     */
    public function setAssignmentName($assignment_name)
    {
        $this->container['assignment_name'] = $assignment_name;

        return $this;
    }

    /**
     * Gets activity_name
     *
     * @return string
     */
    public function getActivityName()
    {
        return $this->container['activity_name'];
    }

    /**
     * Sets activity_name
     *
     * @param string $activity_name activity_name
     *
     * @return $this
     */
    public function setActivityName($activity_name)
    {
        $this->container['activity_name'] = $activity_name;

        return $this;
    }

    /**
     * Gets problem_name
     *
     * @return string
     */
    public function getProblemName()
    {
        return $this->container['problem_name'];
    }

    /**
     * Sets problem_name
     *
     * @param string $problem_name problem_name
     *
     * @return $this
     */
    public function setProblemName($problem_name)
    {
        $this->container['problem_name'] = $problem_name;

        return $this;
    }

    /**
     * Gets subject_group
     *
     * @return \Swagger\Client\Model\DiaryAssignDetailsSubjectGroup
     */
    public function getSubjectGroup()
    {
        return $this->container['subject_group'];
    }

    /**
     * Sets subject_group
     *
     * @param \Swagger\Client\Model\DiaryAssignDetailsSubjectGroup $subject_group subject_group
     *
     * @return $this
     */
    public function setSubjectGroup($subject_group)
    {
        $this->container['subject_group'] = $subject_group;

        return $this;
    }

    /**
     * Gets teacher
     *
     * @return \Swagger\Client\Model\DiaryAssignDetailsTeacher
     */
    public function getTeacher()
    {
        return $this->container['teacher'];
    }

    /**
     * Sets teacher
     *
     * @param \Swagger\Client\Model\DiaryAssignDetailsTeacher $teacher teacher
     *
     * @return $this
     */
    public function setTeacher($teacher)
    {
        $this->container['teacher'] = $teacher;

        return $this;
    }

    /**
     * Gets product_id
     *
     * @return int
     */
    public function getProductId()
    {
        return $this->container['product_id'];
    }

    /**
     * Sets product_id
     *
     * @param int $product_id product_id
     *
     * @return $this
     */
    public function setProductId($product_id)
    {
        $this->container['product_id'] = $product_id;

        return $this;
    }

    /**
     * Gets is_deleted
     *
     * @return bool
     */
    public function getIsDeleted()
    {
        return $this->container['is_deleted'];
    }

    /**
     * Sets is_deleted
     *
     * @param bool $is_deleted is_deleted
     *
     * @return $this
     */
    public function setIsDeleted($is_deleted)
    {
        $this->container['is_deleted'] = $is_deleted;

        return $this;
    }

    /**
     * Gets weight
     *
     * @return int
     */
    public function getWeight()
    {
        return $this->container['weight'];
    }

    /**
     * Sets weight
     *
     * @param int $weight weight
     *
     * @return $this
     */
    public function setWeight($weight)
    {
        $this->container['weight'] = $weight;

        return $this;
    }

    /**
     * Gets date
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->container['date'];
    }

    /**
     * Sets date
     *
     * @param \DateTime $date date
     *
     * @return $this
     */
    public function setDate($date)
    {
        $this->container['date'] = $date;

        return $this;
    }

    /**
     * Gets description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->container['description'];
    }

    /**
     * Sets description
     *
     * @param string $description description
     *
     * @return $this
     */
    public function setDescription($description)
    {
        $this->container['description'] = $description;

        return $this;
    }

    /**
     * Gets attachments
     *
     * @return \Swagger\Client\Model\DiaryAssignDetailsAttachments[]
     */
    public function getAttachments()
    {
        return $this->container['attachments'];
    }

    /**
     * Sets attachments
     *
     * @param \Swagger\Client\Model\DiaryAssignDetailsAttachments[] $attachments attachments
     *
     * @return $this
     */
    public function setAttachments($attachments)
    {
        $this->container['attachments'] = $attachments;

        return $this;
    }

    /**
     * Gets content_elements
     *
     * @return object[]
     */
    public function getContentElements()
    {
        return $this->container['content_elements'];
    }

    /**
     * Sets content_elements
     *
     * @param object[] $content_elements content_elements
     *
     * @return $this
     */
    public function setContentElements($content_elements)
    {
        $this->container['content_elements'] = $content_elements;

        return $this;
    }

    /**
     * Gets code_content_elements
     *
     * @return object[]
     */
    public function getCodeContentElements()
    {
        return $this->container['code_content_elements'];
    }

    /**
     * Sets code_content_elements
     *
     * @param object[] $code_content_elements code_content_elements
     *
     * @return $this
     */
    public function setCodeContentElements($code_content_elements)
    {
        $this->container['code_content_elements'] = $code_content_elements;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     *
     * @param integer $offset Offset
     * @param mixed   $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        if (defined('JSON_PRETTY_PRINT')) { // use JSON pretty print
            return json_encode(
                ObjectSerializer::sanitizeForSerialization($this),
                JSON_PRETTY_PRINT
            );
        }

        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}
