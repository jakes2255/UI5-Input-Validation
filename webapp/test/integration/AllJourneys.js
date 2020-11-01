/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/demo/aj/Z_Input_Validation/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/demo/aj/Z_Input_Validation/test/integration/pages/View1",
	"com/demo/aj/Z_Input_Validation/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.demo.aj.Z_Input_Validation.view.",
		autoWait: true
	});
});