/**
 * Created by joel_rodriguez
 * This file contain the Smoke test scripts
 */

var frisby = require('frisby');
var commons = require('./../lib/methods.js');

var userB64 = 'am9lbC5yb2RyaWd1ZXpAamFsYXNvZnQuY29tOkNvbnRyb2wxMjM=';

describe("Smoke Test", function() {

  it("Verify createNewItem method is available", function() {
    commons.createNewItem('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify createProject method is available", function() {
    commons.createProject('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify deleteItemById method is available", function() {
    commons.deleteItemById('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify deleteProjectByID method is available", function() {
    commons.deleteProjectByID('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify deleteToken method is available", function() {
    commons.deleteToken('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify deleteUser method is available", function() {
    commons.deleteUser('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify getAllItems method is available", function() {
    commons.getAllItems('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify getAllProjects method is available", function() {
    commons.getAllProjects('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify getDoneItemsOfaFilter method is available", function() {
    commons.getDoneItemsOfaFilter('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify getDoneItemsOfProjectByID method is available", function() {
    commons.getDoneItemsOfProjectByID('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify getFilters method is available", function() {
    commons.getFilters('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify getFiltersByID method is available", function() {
    commons.getFiltersByID('WrongB64', '').after(function(err, res, body){
      expect(res.statusCode).toBe(404);
    }).toss();
  });

  it("Verify getItemByID method is available", function() {
    commons.getItemByID('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify getItemsOfaFilter method is available", function() {
    commons.getItemsOfaFilter('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify getItemsOfProjectByID method is available", function() {
    commons.getItemsOfProjectByID('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify getProjectByID method is available", function() {
    commons.getProjectByID('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify getRootItemByChildID method is available", function() {
    commons.getRootItemByChildID('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify getToken method is available", function() {
    commons.getToken('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify getUser method is available", function() {
    commons.getUser('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify isAuthenticated method is available", function() {
    commons.isAuthenticated('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify isAuthenticated method is available", function() {
    commons.isAuthenticated('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify updateItemByID method is available", function() {
    commons.updateItemByID('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify updateProjectByID method is available", function() {
    commons.updateProjectByID('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });

  it("Verify updateUser method is available", function() {
    commons.updateUser('WrongB64').after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    }).toss();
  });
});










