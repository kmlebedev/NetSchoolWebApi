=begin
#NetSchool

#The API for the NetSchool irTech project

OpenAPI spec version: 4.30.43656

Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 3.0.35
=end

require 'spec_helper'
require 'json'

# Unit tests for SwaggerClient::LoginApi
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'LoginApi' do
  before do
    # run before each test
    @instance = SwaggerClient::LoginApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of LoginApi' do
    it 'should create an instance of LoginApi' do
      expect(@instance).to be_instance_of(SwaggerClient::LoginApi)
    end
  end

  # unit tests for logindata
  # returns all login data
  # @param [Hash] opts the optional parameters
  # @return [LoginData]
  describe 'logindata test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for prepareemloginform
  # returns all prepareemloginform
  # @param [Hash] opts the optional parameters
  # @option opts [String] :cache_ver 
  # @return [PrepareEmLoginForm]
  describe 'prepareemloginform test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for prepareloginform
  # returns all prepareloginform
  # @param [Hash] opts the optional parameters
  # @option opts [String] :cache_ver 
  # @return [PrepareLoginForm]
  describe 'prepareloginform test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
