Ext.define('GeoReport.view.Main', {
    extend : 'Ext.tab.Panel',
    xtype : 'main',
    requires : ['Ext.TitleBar', 'GeoReport.view.MapView'],
    config : {
        tabBarPosition : 'bottom',

        items : [{
            title : 'Welcome',
            iconCls : 'home',

            styleHtmlContent : true,
            scrollable : true,
            html : '<h1>welcome</h1>',
            items : {
                docked : 'top',
                xtype : 'titlebar',
                title : 'GeoReport'
            }

        }, {
            title : 'Reports',
            iconCls : 'action',
            styleHtmlContent : true,
            scrollable : true,

            html : '<h1>Reports</h1>',
            items : [{
                docked : 'top',
                xtype : 'titlebar',
                title : 'Reports'
            }]

        }, {
            title : 'Map',
            iconCls : 'maps',
            fullscreen : false,
            layout : 'auto',
            styleHtmlContent : true,
            scrollable : true,
            layout : {
                type : 'card'
            },
            items : [{
                docked : 'top',
                xtype : 'titlebar',
                title : 'Map'
            }, {
                xtype : 'mapview'
            }]

        }, {
            title : 'Logout',
            iconCls : 'disclosure',

            styleHtmlContent : true,
            scrollable : true,
            listeners : {
                activate : function() {
                    console.log('Logout tab active');
                    GeoReport.app.fireEvent('logout');
                }
            },
            items : [{
                docked : 'top',
                xtype : 'titlebar',
                title : 'Logout'
            }]

        }]
    }
});
