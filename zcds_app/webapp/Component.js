jQuery.sap.declare("zcds.Component");
sap.ui.getCore().loadLibrary("sap.ui.generic.app");
jQuery.sap.require("sap.ui.generic.app.AppComponent");

sap.ui.generic.app.AppComponent.extend("zcds.Component", {
	metadata: {
		"manifest": "json"
	}
});