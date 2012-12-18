Ext.define('GeoReport.view.Main', {
	extend : 'Ext.tab.Panel',
	xtype : 'main',
	requires : [ 'Ext.TitleBar', 'GeoReport.view.MapView', 'Ext.Img' ],
	searchPos : 0,
	config : {
		tabBarPosition : 'bottom',

		items : [ 
//		          {
//			title : 'Welcome',
//			iconCls : 'home',
//			layout : 'fit',
//			styleHtmlContent : true,
//			scrollable : true,
//			items : [ {
//				xtype : 'image',
//				mode : 'image',
//				src : 'resources/images/loginv1.jpg',
//				width : '100%',
//				height : '100%'
//			} ]
//		}, 
		{
			title : 'mii',
			iconCls : 'action',
			styleHtmlContent : true,
			layout : 'fit',
			scrollable : true,
			items : [ {
				xtype : 'image',
				mode : 'image',
				src : 'resources/images/Screen-1.png',
				width : '100%',
				height : '100%',
				listeners : {
					tap: function() {
						console.log('login image tap');
						if(this.searchPos == 0) {
							this.setSrc('resources/images/Screen-2.png');
							this.searchPos = 1;
						} else {
							this.setSrc('resources/images/Screen-1.png');
							this.searchPos = 0;
						}
					}
				},
			} ]

		}
//		, {
//			title : 'Map',
//			iconCls : 'maps',
//			fullscreen : false,
//			layout : 'auto',
//			styleHtmlContent : true,
//			scrollable : true,
//			html : '<h1>Map</h1>'
//		}, {
//			title : 'Notifications',
//			iconCls: 'organize',
//			fullscreen : false,
//			layout : 'auto',
//			styleHtmlContent : true,
//			scrollable : true,
//			html : '<h1>Notifications</h1>',
//		}
//		, {
//			title : 'Logout',
//			iconCls : 'disclosure',
//
//			styleHtmlContent : true,
//			scrollable : true,
//			listeners : {
//				activate : function() {
//					console.log('Logout tab active');
//					GeoReport.app.fireEvent('logout');
//				}
//			},
//			items : [ {
//				docked : 'top',
//				xtype : 'titlebar',
//				title : 'Logout'
//			}
//			]
//
//		} 
		]
	}
});
