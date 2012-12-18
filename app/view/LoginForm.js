Ext.define('GeoReport.view.LoginForm', {
    extend : 'Ext.form.Panel',
    xtype : 'loginform',
    requires : ['Ext.TitleBar', 'Ext.Button', 'Ext.form.Panel', 'Ext.field.Password'],
    config : {

        fullscreen : true,
        items : [{
            title : 'mii',
            iconCls : 'home',
            xtype : 'titlebar',
            styleHtmlContent : true,
            docked: 'top',
        }, {
            xtype : 'textfield',
            name : 'name',
            label : 'Name'
        },{
            xtype : 'passwordfield',
            name : 'password',
            label : 'Password'
        }, {
            xtype : 'button',
            text : 'Submit',
            action: 'login'
        }]
    }
});
