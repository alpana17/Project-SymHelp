Ext.define('symhelp.controller.control',
	{
		extend : 'Ext.app.Controller',
		requires : ['Ext.data.proxy.Rest'],
		config : {
			views : ['Main','Register','Symptoms','More_details'],
			refs : {
				login : '#login',
				registerMain : '#register1',
				register : '#register',
				logout : '#logout',
				next : '#next',
				find : '#find'
 			},
 			control : {
 				next : {
 					tap : 'logout'
 				}
 			}
		}
	}
);