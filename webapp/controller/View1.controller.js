sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.demo.aj.Z_Input_Validation.controller.View1", {
		onInit: function () {

		},
		onMobNumberChangeRegEx: function (oEvent) {
			var input = oEvent.getSource();
			var mobNum = input.getValue();
			mobNum = mobNum.replace(/[^\d]/g, '');
			input.setValue(mobNum);
		}
	});
});