sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.kt.nav.navigationexample.controller.View1", {
            onInit: function () {

            },
            onPressNavgateView2:function(){
                var oNavigate=this.getOwnerComponent().getRouter();
                oNavigate.navTo("RouteView2");
            }
        });
    });
