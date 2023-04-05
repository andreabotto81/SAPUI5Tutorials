sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/sap/databinding/formatter/Factory"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, factory) {
        "use strict";

        return Controller.extend("com.sap.databinding.controller.Databinding", {
            factory:factory,
            onInit: function () {

            }
        });
    });
