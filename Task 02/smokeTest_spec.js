/**
 * Created by joel_rodriguez
 * This file contain the smoke test scripts
 */

var frisby = require('frisby');
var commons = require('./ToDoly_commons.js');

var userB64 = 'am9lbC5yb2RyaWd1ZXpAamFsYXNvZnQuY29tOkNvbnRyb2wxMjM=';

commons.getAllItems(userB64).expectStatus(200).inspectJSON().toss();
commons.getAllProjects(userB64).expectStatus(200).inspectJSON().toss();
commons.getFilters(userB64).expectStatus(200).inspectJSON().toss();
commons.getToken(userB64).expectStatus(200).inspectJSON().toss();
commons.getUser(userB64).expectStatus(200).inspectJSON().toss();
