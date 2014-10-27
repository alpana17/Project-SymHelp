Ext.define('symhelp.controller.control',
	{
		extend : 'Ext.app.Controller',
		//requires : ['Ext.data.proxy.Rest'],
		config : {
			views : ['Main','Register','Symptoms','More_details','Logout_success'],
			refs : {
				login : '#login',
				registerMain : '#registerMain',
				register : '#register',
				logout_sym : '#logout_sym',
				logout_details : '#logout_details',
				next : '#next',
				find : '#find'
 			},
 			control : {
 				login : {
 					tap : 'loginMove'
 				},
 				registerMain : {
 					tap : 'registerMainMove '
 				},
 				register : {
 					tap : 'registerMove'
 				},
 				logout_sym : {
 					tap : 'logout_sym'
 				},
 				logout_details : {
 					tap : 'logout_detailsMove'
 				},
 				next : {
 					tap : 'nextMove'
 				}
 			}
		},
		loginMove : function()
		{
			Ext.getCmp('Main').hide();
			if(!Ext.getCmp('Symptoms'))
			{
				Ext.create('symhelp.view.Symptoms',{
					viewId: 'Symptoms'
				})
			}
			Ext.getCmp('Symptoms').show();
		},
		registerMainMove : function()
		{
			Ext.getCmp('Main').hide();
			if(!Ext.getCmp('Register'))
			{
				Ext.create('symhelp.view.Register',{
					viewId : 'Register'
				})
			}
			Ext.getCmp('Register').show();
		},
		register : function()
		{
			Ext.getCmp('Register').hide();
			if(!Ext.getCmp('Symptoms'))
			{
				Ext.create('symhelp.view.Symptoms',{
					viewId : 'Symptoms'
				})
			}
			Ext.getCmp('Symptoms').show();
		},
		logout_sym : function()
		{
			Ext.getCmp('Symptoms').hide();
			if(!Ext.getCmp('Logout_success'))
			{
				Ext.create('symhelp.view.Logout_success',{
					viewId : 'Logout_success'
				})
			}
			Ext.getCmp('Logout_success').show();
		},
		logout_detailsMove : function()
		{
			Ext.getCmp('More_details').hide();
			if(!Ext.getCmp('Logout_success'))
			{
				Ext.create('symhelp.view.Logout_success',{
					viewId : 'Logout_success'
				})
			}
			Ext.getCmp('Logout_success').show();
		},
		nextMove : function()
		{
		Ext.getCmp('Symptoms').hide();
		if(!Ext.getCmp('More_details'))
        {
            Ext.create('symhelp.view.More_details',{ 
            	viewId: 'More_details'
            })
        }
		Ext.getCmp('More_details').show();
		//console.log('alpana');
	}
});