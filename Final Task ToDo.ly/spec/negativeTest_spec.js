/**
 * Created by joel_rodriguez
 * This file contain the CRUD test scripts
 */

var frisby = require('frisby');
var commons = require('./../lib/methods.js');

var userB64 = 'am9lbC5yb2RyaWd1ZXpAamFsYXNvZnQuY29tOkNvbnRyb2wxMjM=';

describe("Negative Test", function() {

  it("Verify error is returned Creating a New User with empty values", function() {
    commons.createUser(userB64, '', '', '')
      .after(function (err, res, body) {
        expect(res.statusCode).toBe(200);
      })
      .afterJSON(function(json){
        expect(json.ErrorMessage).toBe('Invalid Email Address');
        expect(json.ErrorCode).toBe(307);
      })
      .toss();
  });

  it("Verify error is returned retrieving All filters with wrong authentication code", function() {
    commons.getFilters('userB64')
      .after(function (err, res, body) {
        expect(res.statusCode).toBe(200);
      })
      .afterJSON(function(json){
        expect(json.ErrorMessage).toBe('Not Authenticated');
        expect(json.ErrorCode).toBe(102);
      })
      .toss();
  });

  it("Verify error is returned Updating Project with wrong ID", function() {
    commons.updateProjectByID(userB64, 0)
      .after(function (err, res, body) {
        expect(res.statusCode).toBe(200);
      })
      .afterJSON(function(json){
        expect(json.ErrorMessage).toBe('Invalid input Data');
        expect(json.ErrorCode).toBe(302);
      })
      .toss();
  });

  it("Verify error is returned Deleting Item with wrong ID", function() {
    commons.deleteItemById(userB64, 0)
      .after(function (err, res, body) {
        expect(res.statusCode).toBe(200);
      })
      .afterJSON(function(json){
        expect(json.ErrorMessage).toBe('Invalid Id');
        expect(json.ErrorCode).toBe(301);
      })
      .toss();
  });
});



