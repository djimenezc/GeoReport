Ext.define('GeoReport.controller.MapController', {
    extend: 'Ext.app.Controller',
    xtype : 'mapcontroller',
    config: {
        refs: {
            myMap: 'myMap'
        },
        control: {
            myMap: {
                show: 'onMyMapShow',
                maprender: 'mapRendered'
            }
        }
    },

    onMyMapShow: function(myMap, eOpts) {
        // never enters this function...
    	console.log('onMyMapShow');
    },
    mapRendered : function(aa,aaa) {
    	console.log('mapRendered');
    }
});