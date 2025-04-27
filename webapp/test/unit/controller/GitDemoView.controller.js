/*global QUnit*/

sap.ui.define([
	"zgitdemoproj/controller/GitDemoView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("GitDemoView Controller");

	QUnit.test("I should test the GitDemoView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
