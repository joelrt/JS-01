/**
 * Created by joel_rodriguez
 * This file contain the restore environment scripts
 */

var frisby = require('frisby');
var commons = require('./../lib/methods.js');

var userB64 = 'am9lbC5yb2RyaWd1ZXpAamFsYXNvZnQuY29tOkNvbnRyb2wxMjM=';

describe("Restore Environment", function() {

  it("Verify the environment is restored as default", function() {
    commons.deleteUser(userB64)
      .expectStatus(200)
      .afterJSON(function(json){
        console.log(json);
        commons.createUser(userB64, 'Joel RT', 'Control123', 'joel.rodriguez@jalasoft.com')
          .expectStatus(200)
          .toss()
      })
      .toss()
  });
});