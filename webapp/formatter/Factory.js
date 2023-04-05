sap.ui.define([
    "sap/m/ObjectAttribute"
], function (ObjectAttribute) {
    "use strict";
    return {
        hobbyFactory: function (sId, oContext) {

            var oUIControl;
            // decido 
            if (oContext.getProperty("skill") === "hobby") {
                //uso lo StandardListItem
                oUIControl=this.byId("amateur").clone(sId)
            } else {
                //uso lo ObjectListItem
                oUIControl=this.byId("professional").clone(sId)
            }
            return oUIControl;
        }
    }
}
)