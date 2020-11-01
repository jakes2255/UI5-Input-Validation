sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller,MessageToast) {
	"use strict";

	return Controller.extend("com.demo.aj.Z_Input_Validation.controller.View1", {
		onInit: function () {

		},
		onMobNumberChangeRegEx: function (oEvent) {
			var input = oEvent.getSource();
			var mobNum = input.getValue();
			mobNum = mobNum.replace(/[^\d]/g, '');
			input.setValue(mobNum);
		},
		onMobNumberChange: function (oEvent) {
			var input = oEvent.getSource(),
			    mobNum = input.getValue();
			if(mobNum.length > 10){
				MessageToast.show("Upto 10 digits only!");
				input.setValue(oEvent.getParameters().value.substr(0,10).trim());
			} 
			else{
				input.setValue(mobNum);
			}
			if(mobNum.indexOf('.')!=-1){
				MessageToast.show("No decimal values please!");
				input.setValue(mobNum.substring(0,mobNum.length-1));
			}
			if(isNaN(mobNum)){
				MessageToast.show("Only numbers please!");
				input.setValue(mobNum.substring(0,mobNum.length-1));
			}
		}
	});
});