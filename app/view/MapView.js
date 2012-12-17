Ext.define('GeoReport.view.MapView', {
    extend : 'Ext.Panel',
    xtype : 'mapview',
    title : 'map',
   
    config : {

        fullscreen : false,
        styleHtmlContent : true,
        layout : {
            type : 'fit'
        },
        items : [{
            xtype : 'panel',
            items : [{
                xtype : 'textfield',
                label : 'Address',
                name : 'search'
            }]
        }, {
            xtype : 'map',
            useCurrentLocation : true,
            mapOptions : {
                zoom : 12,
                navigationControl : true,
                navigationControlOptions : {
                    style : google.maps.NavigationControlStyle.DEFAULT
                }
            }
        }]
    },
    
    initialize : function(){
        console.log('init mapview');
        
    }
});
