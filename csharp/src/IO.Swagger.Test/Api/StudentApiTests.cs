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
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using NUnit.Framework;

using IO.Swagger.Client;
using IO.Swagger.Api;
using IO.Swagger.Model;

namespace IO.Swagger.Test
{
    /// <summary>
    ///  Class for testing StudentApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class StudentApiTests
    {
        private StudentApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new StudentApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of StudentApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' StudentApi
            //Assert.IsInstanceOfType(typeof(StudentApi), instance, "instance is a StudentApi");
        }

        /// <summary>
        /// Test StudentDiary
        /// </summary>
        [Test]
        public void StudentDiaryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //int? studentId = null;
            //DateTime? weekStart = null;
            //DateTime? weekEnd = null;
            //bool? withLaAssigns = null;
            //bool? withPastMandatory = null;
            //int? yearId = null;
            //var response = instance.StudentDiary(studentId, weekStart, weekEnd, withLaAssigns, withPastMandatory, yearId);
            //Assert.IsInstanceOf<Diary> (response, "response is Diary");
        }
        /// <summary>
        /// Test StudentDiaryInit
        /// </summary>
        [Test]
        public void StudentDiaryInitTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.StudentDiaryInit();
            //Assert.IsInstanceOf<StudentDiaryInit> (response, "response is StudentDiaryInit");
        }
    }

}
