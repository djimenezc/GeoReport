Ext.define('GeoReport.controller.SessionsController', {
    extend: 'Ext.app.Controller',
    views: ['GeoReport.view.Main'],
    config: {
        refs: {
            loginButton: 'button[action=login]',
            loginForm: 'loginform',
            mainView : 'main',
            main : 'main'
        },
        control: {
           loginButton: {
                tap: 'doLogin'
            },
        }
    },
    
    init : function() {
       console.log('SessionsController');
       GeoReport.app.on({
            logout : this.doLogout 
       });
    },

    doLogin: function() {
        console.log('doLogin');
        var form   = this.getLoginForm();
        var values = form.getValues();

        if(GEO.Sessions.authenticate(values)) {
            var mainView = Ext.create('GeoReport.view.Main');
            Ext.Viewport.add(mainView);
            Ext.Viewport.setActiveItem(mainView);
        }else {
            
        };
    },
    
    doLogout: function() {
        console.log('doLogout');
         var mainView = Ext.create('GeoReport.view.LoginForm');
        Ext.Viewport.setActiveItem(mainView);
    }
});