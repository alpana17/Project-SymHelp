Ext.define('symhelp.controller.control',
	{
		extend : 'Ext.app.Controller',
		//requires : ['Ext.data.proxy.Rest'],
		config : {
			views : ['Main','Register','Symptoms','More_details','Logout_success','Dis_list'],
			refs : {
				login : '#login',
				registerMain : '#registerMain',
				register : '#register',
			    logout_details : '#logout_details',
				next : '#next',
				find : '#find',

				go : '#go',
				list: '#ds_list',
				back_list : '#back_list',
				back_info : '#back_info'
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
 				back_list : {
 					tap : 'back_listMove'
 				},
 				back_info : {
 					tap : 'back_infoMove'
 				},
 				logout_details : {
 					tap : 'logout_detailsMove'
 				},
 				next : {
 					tap : 'nextMove'
 				},
 				go : {
 					tap : 'goMove'
 				},
 				list : {
 					itemtap : 'listMove'
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
		back_listMove : function()
		{
			Ext.getCmp('Dis_list').hide();
			Ext.getCmp('Symptoms').show();
		},
		back_infoMove : function()
		{
			Ext.getCmp('Dis_info').hide();
			if(!Ext.getCmp('Dis_list'))
			{
				Ext.Viewport.add(Ext.create('symhelp.view.Dis_list'));
			}
			Ext.getCmp('Dis_list').show();
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
	},
	goMove : function()
	{
		var store = Ext.StoreMgr.get('sugListStore');
		store.setProxy({
			//scope: this,
            url: 'http://localhost:4004/findDisease?sym1=' + Ext.getCmp('symptom1').getValue()+'&sym2=' +Ext.getCmp('symptom2').getValue()+'&sym3 = '+Ext.getCmp('symptom3').getValue()+'&sym4 ='+Ext.getCmp('symptom4').getValue()+'&sym5 ='+Ext.getCmp('symptom5').getValue(),
            //method: 'GET',
		});
		Ext.getStore('sugListStore').load();
		
		console.log("back to control");
		Ext.getCmp('Symptoms').hide();
		if(!Ext.getCmp('Dis_list'))
        {
            Ext.Viewport.add(Ext.create('symhelp.view.Dis_list'));
        }
		Ext.getCmp('Dis_list').show();
	},
	listMove : function(list, index, target, record){
		var dis = record.get('d_name');
		console.log(dis);
		var allRecord = Ext.getStore('disinfoListStore').findRecord('d_name',dis);
		if(!allRecord)
		{
			console.log("record not found");
			Ext.Ajax.request({
				scope: this,
            	url: 'http://localhost:4004/findDiseaseName?dname=' +dis,
            	method: 'GET',
            	success: function(response){
            		var result = Ext.decode(response.responseText);
            		var disinfo = result.info[0].dis_info;
            		Ext.getStore('disinfoListStore').add({d_name : dis , dis_info : disinfo});
            		var newinfo = Ext.getStore('disinfoListStore').findRecord('d_name',dis).data.dis_info;
            		
            		console.log(newinfo);

            		Ext.getCmp('Dis_list').hide();
					if(!Ext.getCmp('Dis_info'))
        			{
           				Ext.Viewport.add(Ext.create('symhelp.view.Dis_info'));
        			}
       				Ext.getCmp('info').setHtml(newinfo.toString());
					Ext.getCmp('Dis_info').show();
            	}
			});
		}
		else
		{
			console.log("found");
			var newinfo = Ext.getStore('disinfoListStore').findRecord('d_name',dis).data.dis_info;
			console.log(newinfo);
			Ext.getCmp('Dis_list').hide();
					if(!Ext.getCmp('Dis_info'))
        			{
           				Ext.Viewport.add(Ext.create('symhelp.view.Dis_info'));
        			}
       				Ext.getCmp('info').setHtml(newinfo.toString());
					Ext.getCmp('Dis_info').show();
		}
	}
});

