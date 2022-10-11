<?php
/**
 * DiaryAssignment
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
 * DiaryAssignment Class Doc Comment
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class DiaryAssignment implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'DiaryAssignment';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'mark' => '\Swagger\Client\Model\Mark',
'attachments' => '\Swagger\Client\Model\Attachment[]',
'id' => 'int',
'type_id' => 'int',
'assignment_name' => 'string',
'weight' => 'int',
'due_date' => '\DateTime',
'class_meeting_id' => 'int',
'exists_test_plan' => 'bool'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'mark' => null,
'attachments' => null,
'id' => null,
'type_id' => null,
'assignment_name' => null,
'weight' => null,
'due_date' => 'date',
'class_meeting_id' => null,
'exists_test_plan' => null    ];

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
        'mark' => 'mark',
'attachments' => 'attachments',
'id' => 'id',
'type_id' => 'typeId',
'assignment_name' => 'assignmentName',
'weight' => 'weight',
'due_date' => 'dueDate',
'class_meeting_id' => 'classMeetingId',
'exists_test_plan' => 'existsTestPlan'    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'mark' => 'setMark',
'attachments' => 'setAttachments',
'id' => 'setId',
'type_id' => 'setTypeId',
'assignment_name' => 'setAssignmentName',
'weight' => 'setWeight',
'due_date' => 'setDueDate',
'class_meeting_id' => 'setClassMeetingId',
'exists_test_plan' => 'setExistsTestPlan'    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'mark' => 'getMark',
'attachments' => 'getAttachments',
'id' => 'getId',
'type_id' => 'getTypeId',
'assignment_name' => 'getAssignmentName',
'weight' => 'getWeight',
'due_date' => 'getDueDate',
'class_meeting_id' => 'getClassMeetingId',
'exists_test_plan' => 'getExistsTestPlan'    ];

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
        $this->container['mark'] = isset($data['mark']) ? $data['mark'] : null;
        $this->container['attachments'] = isset($data['attachments']) ? $data['attachments'] : null;
        $this->container['id'] = isset($data['id']) ? $data['id'] : null;
        $this->container['type_id'] = isset($data['type_id']) ? $data['type_id'] : null;
        $this->container['assignment_name'] = isset($data['assignment_name']) ? $data['assignment_name'] : null;
        $this->container['weight'] = isset($data['weight']) ? $data['weight'] : null;
        $this->container['due_date'] = isset($data['due_date']) ? $data['due_date'] : null;
        $this->container['class_meeting_id'] = isset($data['class_meeting_id']) ? $data['class_meeting_id'] : null;
        $this->container['exists_test_plan'] = isset($data['exists_test_plan']) ? $data['exists_test_plan'] : null;
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
     * Gets mark
     *
     * @return \Swagger\Client\Model\Mark
     */
    public function getMark()
    {
        return $this->container['mark'];
    }

    /**
     * Sets mark
     *
     * @param \Swagger\Client\Model\Mark $mark mark
     *
     * @return $this
     */
    public function setMark($mark)
    {
        $this->container['mark'] = $mark;

        return $this;
    }

    /**
     * Gets attachments
     *
     * @return \Swagger\Client\Model\Attachment[]
     */
    public function getAttachments()
    {
        return $this->container['attachments'];
    }

    /**
     * Sets attachments
     *
     * @param \Swagger\Client\Model\Attachment[] $attachments attachments
     *
     * @return $this
     */
    public function setAttachments($attachments)
    {
        $this->container['attachments'] = $attachments;

        return $this;
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
     * Gets type_id
     *
     * @return int
     */
    public function getTypeId()
    {
        return $this->container['type_id'];
    }

    /**
     * Sets type_id
     *
     * @param int $type_id type_id
     *
     * @return $this
     */
    public function setTypeId($type_id)
    {
        $this->container['type_id'] = $type_id;

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
     * Gets due_date
     *
     * @return \DateTime
     */
    public function getDueDate()
    {
        return $this->container['due_date'];
    }

    /**
     * Sets due_date
     *
     * @param \DateTime $due_date due_date
     *
     * @return $this
     */
    public function setDueDate($due_date)
    {
        $this->container['due_date'] = $due_date;

        return $this;
    }

    /**
     * Gets class_meeting_id
     *
     * @return int
     */
    public function getClassMeetingId()
    {
        return $this->container['class_meeting_id'];
    }

    /**
     * Sets class_meeting_id
     *
     * @param int $class_meeting_id class_meeting_id
     *
     * @return $this
     */
    public function setClassMeetingId($class_meeting_id)
    {
        $this->container['class_meeting_id'] = $class_meeting_id;

        return $this;
    }

    /**
     * Gets exists_test_plan
     *
     * @return bool
     */
    public function getExistsTestPlan()
    {
        return $this->container['exists_test_plan'];
    }

    /**
     * Sets exists_test_plan
     *
     * @param bool $exists_test_plan exists_test_plan
     *
     * @return $this
     */
    public function setExistsTestPlan($exists_test_plan)
    {
        $this->container['exists_test_plan'] = $exists_test_plan;

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
