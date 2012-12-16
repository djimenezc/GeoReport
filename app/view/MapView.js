Ext.define('GeoReport.view.MapView', {
	extend : 'Ext.Panel',
	xtype : 'mapview',
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
			layout: 'fit',
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
