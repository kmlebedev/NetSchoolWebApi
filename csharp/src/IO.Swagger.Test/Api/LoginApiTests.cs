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
    ///  Class for testing LoginApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class LoginApiTests
    {
        private LoginApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new LoginApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of LoginApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' LoginApi
            //Assert.IsInstanceOfType(typeof(LoginApi), instance, "instance is a LoginApi");
        }

        /// <summary>
        /// Test Logindata
        /// </summary>
        [Test]
        public void LogindataTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.Logindata();
            //Assert.IsInstanceOf<LoginData> (response, "response is LoginData");
        }
        /// <summary>
        /// Test Prepareemloginform
        /// </summary>
        [Test]
        public void PrepareemloginformTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string cacheVer = null;
            //var response = instance.Prepareemloginform(cacheVer);
            //Assert.IsInstanceOf<PrepareEmLoginForm> (response, "response is PrepareEmLoginForm");
        }
        /// <summary>
        /// Test Prepareloginform
        /// </summary>
        [Test]
        public void PrepareloginformTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string cacheVer = null;
            //var response = instance.Prepareloginform(cacheVer);
            //Assert.IsInstanceOf<PrepareLoginForm> (response, "response is PrepareLoginForm");
        }
    }

}
