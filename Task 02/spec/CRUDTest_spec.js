/**
 * Created by joel_rodriguez
 * This file contain the CRUD test scripts
 */

var frisby = require('frisby');
var commons = require('./../lib/methods.js');

var userB64 = 'am9lbC5yb2RyaWd1ZXpAamFsYXNvZnQuY29tOkNvbnRyb2wxMjM=';

describe("Sanity Test", function() {

  it("Verify New Item is created with createNewItem method", function() {
    var now = new Date();
    var uname = 'Uname' + now.getTime();
    var password = 'Control123';
    var email = 'joel' + now.getTime() + '@joel.com';
    commons.createUser(userB64, uname, password, email)
      .expectJSONTypes(
      { Id: Number,
        Email: String,
        Password: Object,
        FullName: String,
        TimeZone: Number,
        IsProUser: Boolean,
        DefaultProjectId: Number,
        AddItemMoreExpanded: Boolean,
        EditDueDateMoreExpanded: Boolean,
        ListSortType: Number,
        FirstDayOfWeek: Number,
        NewTaskDueDate: Number,
        TimeZoneId: String })
      .afterJSON(function(json){
        expect(json.Email).toBe(email);
        expect(json.FullName).toBe(uname);
      })
      .expectStatus(200)
    .toss();
  });

  it("Verify Get All filters", function() {
    commons.getFilters(userB64)
      .expectJSONTypes(
      { Id: undefined,
        Content: undefined,
        ItemsCount: undefined,
        Icon: undefined,
        ItemType: undefined,
        Children: undefined })
      .afterJSON(function(json){
        expect(json.length).toBeGreaterThan(0);
      })
      .expectStatus(200)
      .toss();
  });

  it("Verify Update Project", function() {
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

  it("Verify Delete Item", function() {
    commons.getAllItems(userB64).afterJSON(function(itemsIDs){
      if (itemsIDs.length > 0) {
        commons.deleteItemById(userB64, itemsIDs[0].Id)
          .after(function (err, res, body) {
            expect(res.statusCode).toBe(200);
          })
          .afterJSON(function(json){
            expect(json.Deleted).toBeTruthy()
          })
          .toss();
      }
    })
      .toss();
  });

  it("Verify Get All Projects", function() {
    commons.getAllProjects(userB64)
      .expectJSONTypes('*',
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
      .after(function (err, res, body) {
        expect(res.statusCode).toBe(200);
      })
      .toss();
  });

});



