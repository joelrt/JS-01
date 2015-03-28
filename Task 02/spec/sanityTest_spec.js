/**
 * Created by joel_rodriguez
 * This file contain the sanity test scripts
 */

var frisby = require('frisby');
var commons = require('./../lib/methods.js');

var userB64 = 'am9lbC5yb2RyaWd1ZXpAamFsYXNvZnQuY29tOkNvbnRyb2wxMjM=';

describe("Sanity Test", function() {

  it("Verify New Item is created with createNewItem method", function() {
    commons.createNewItem(userB64)
      .expectJSONTypes(
      { Id: Number,
        Content: String,
        ItemType: Number,
        Checked: Boolean,
        ProjectId: Object,
        ParentId: Object,
        Path: String,
        Collapsed: Boolean,
        DateString: Object,
        DateStringPriority: Number,
        DueDate: String,
        Recurrence: Object,
        ItemOrder: Object,
        Priority: Number,
        LastSyncedDateTime: String,
        Children: Object,
        DueDateTime: Object,
        CreatedDate: String,
        LastCheckedDate: Object,
        LastUpdatedDate: String,
        Deleted: Boolean,
        Notes: String,
        InHistory: Boolean,
        SyncClientCreationId: Object,
        DueTimeSpecified: Boolean,
        OwnerId: Number })
      .after(function(err, res, body){
        expect(res.statusCode).toBe(200);
      }).toss();
  });

  it("Verify Update Project with updateProjectByID method", function() {
    commons.getAllProjects(userB64).afterJSON(function(projectIDs){
      for (var i in projectIDs){
        commons.updateProjectByID(userB64, projectIDs[i].Id)
          .after(function(err, res, body){
            expect(res.statusCode).toBe(200);
          })
      .toss();
      }
    })
    .toss();
  });

  it("Verify Get Token method returns TokenString, UserEmail and ExpirationTime referred to the user", function() {
    commons.getToken(userB64).expectJSONTypes(
      { TokenString: String,
        UserEmail: String,
        ExpirationTime: String})
      .after(function(err, res, body){
        expect(res.statusCode).toBe(200);
      })
      .toss();
  });

  it("Verify User Authentication with isAuthenticated method", function() {
    commons.isAuthenticated(userB64)
      .after(function(err, res, body){
        expect(res.statusCode).toBe(200);
        expect(body).toBeTruthy()
      })
      .toss();
  });

  it("Verify Update User with updateUser method", function() {
    commons.updateUser(userB64)
      .after(function(err, res, body){
        expect(res.statusCode).toBe(200);
        expect(body).toBeTruthy();
        commons.getUser(userB64).afterJSON(function(userData){
          expect(userData.FullName).toContain('Name');
        }).toss()
      })
      .toss();
  });

  it("Verify Get User Detail with getUser method", function() {
    commons.getUser(userB64).afterJSON(function(userData){
      expect(userData.FullName).toContain('Name');
    })
    .after(function(err, res, body){
      expect(res.statusCode).toBe(200);
    })
    .toss()
  });

  it("Verify Get Project Detail with getProjectByID method", function() {
    commons.getAllProjects(userB64).afterJSON(function(projectIDs){
      for (var i in projectIDs){
        commons.getProjectByID(userB64, projectIDs[i].Id)
          .expectJSONTypes(
          { Id: Number,
            Content: String,
            ItemsCount: Number,
            Icon: Number,
            ItemType: Number,
            ParentId: Object,
            Collapsed: Boolean,
            ItemOrder: Number,
            Children: Object,
            IsProjectShared: Boolean,
            ProjectShareOwnerName: Object,
            ProjectShareOwnerEmail: Object,
            IsShareApproved: Boolean,
            IsOwnProject: Boolean,
            LastSyncedDateTime: String,
            LastUpdatedDate: String,
            Deleted: Boolean,
            SyncClientCreationId: Object })
        .after(function(err, res, body){
          expect(res.statusCode).toBe(200);
        })
        .toss();
      }
    })
    .toss();
  });

});