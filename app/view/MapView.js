Ext.define('GeoReport.view.MapView', {
	extend : 'Ext.Panel',
	xtype : 'mapview',
//	fullscreen : false,
//	layout: 'card',
	config : {

		fullscreen : false,
		layout: 'card',
		styleHtmlContent: true,
		items : [ {
			xtype : 'panel',
			items : [ {
				xtype : 'textfield',
				label : 'Address',
				name : 'search'
			} ]
		}, {
			xtype : 'map',
			id: 'myMap',
			useCurrentLocation : true,
			mapOptions: {
                zoom: 12,
                navigationControl: true,
                navigationControlOptions: 
                {
                    style: google.maps.NavigationControlStyle.DEFAULT
                }
            },
			config : {
				hidden : false
			}
		} ]
	}
});
