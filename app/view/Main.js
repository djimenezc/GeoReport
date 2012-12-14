Ext.define('GeoReport.view.Main', {
    extend : 'Ext.tab.Panel',
    xtype : 'main',
    requires : ['Ext.TitleBar'],
    config : {
        tabBarPosition : 'bottom',

        
        items : [{
            title : 'Welcome',
            iconCls : 'home',

            styleHtmlContent : true,
            scrollable : true,

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

            items : [{
                docked : 'top',
                xtype : 'titlebar',
                title : 'Reports'
            }]

        }, {
            title : 'Map',
            iconCls : 'maps',

            styleHtmlContent : true,
            scrollable : true,

            items : [{
                docked : 'top',
                xtype : 'titlebar',
                title : 'Map'
            }]

        }, {
            title : 'Logout',
            iconCls : 'disclosure',

            styleHtmlContent : true,
            scrollable : true,

            items : [{
                docked : 'top',
                xtype : 'titlebar',
                title : 'Logout'
            }]

        }]
    }
});
