Ext.define('GeoReport.controller.SessionsController', {
    extend: 'Ext.app.Controller',
    views: ['GeoReport.view.Main'],
    config: {
        refs: {
            loginButton: 'button[action=login]',
            loginForm: 'loginform',
            mainView : 'main'
        },
        control: {
           loginButton: {
                tap: 'doLogin'
            }
        }
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
        // called whenever any Button with action=logout is tapped
    }
});