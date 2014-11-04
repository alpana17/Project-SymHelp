Ext.define('symhelp.controller.control',{
	extend : 'Ext.app.Controller',
	config : {
		views : ['Symptoms','Dis_info','Dis_list'],
		refs : {
			go : '#go',
			dslist: '#disease_list',
			back_list : '#back_list',
			back_info : '#back_info',
			back_no_disease : '#back_symptom'
 		},
 		control : {
 			back_list : {
 				tap : 'back_listMove'
 			},
 			back_info : {
 				tap : 'back_infoMove'
 			},
 			back_no_disease : {
 				tap : 'back_symptomMove'
 			},
 			go : {
 				tap : 'goMove'
 			},
 			dslist : {
 				itemtap : 'listMove'
 			}
 		}
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
	back_symptomMove : function()
	{
		console.log("inside back");
		Ext.getCmp('No_symptom').hide();
		if(!Ext.getCmp('Symptoms'))
		{
			Ext.Viewport.add(Ext.create('symhelp.view.Symptoms'));
		}
		Ext.getCmp('Symptoms').show();
	},
	goMove : function(){
		if((Ext.getCmp('symptom1').getValue()==0) && (Ext.getCmp('symptom2').getValue()==0) && (Ext.getCmp('symptom3').getValue()==0) && (Ext.getCmp('symptom4').getValue()==0) && (Ext.getCmp('symptom5').getValue()==0))
		{
			console.log("No symptom selected");
			Ext.Msg.alert('No Symptoms', 'Please enter the symptoms.');
		}
		else
		{
			var count=5;
		if(Ext.getCmp('symptom1').getValue()==0)
			{count--;}
		if(Ext.getCmp('symptom2').getValue()==0)
			{count--;}
		if(Ext.getCmp('symptom3').getValue()==0)
			{count--;}
		if(Ext.getCmp('symptom4').getValue()==0)
			{count--;}
		if(Ext.getCmp('symptom5').getValue()==0)
			{count--;}
		localStorage.setItem('count_sym', count);
		var store = Ext.StoreMgr.get('sugListStore');
		store.setProxy({
           url: 'http://localhost:4004/findDisease?sym1=' +Ext.getCmp('symptom1').getValue()+'&sym2=' +Ext.getCmp('symptom2').getValue()+'&sym3=' +Ext.getCmp('symptom3').getValue()+'&sym4=' +Ext.getCmp('symptom4').getValue()+'&sym5=' +Ext.getCmp('symptom5').getValue()+'&count_symtm=' +localStorage.count_sym,
           //method: 'GET',
		});
		Ext.getStore('sugListStore').load();
		Ext.getCmp('Symptoms').hide();
		//console.log(localStorage.getItem('count_sym'));
		if(!Ext.getCmp('Dis_list'))
       	{
           	Ext.Viewport.add(Ext.create('symhelp.view.Dis_list'));           	
       	}
		Ext.getCmp('Dis_list').show();
	}
	},
	listMove : function(list, index, target, record){
		var dis = record.get('d_name');
		console.log(dis);
		var allRecord = Ext.getStore('disinfoListStore').findRecord('d_name',dis);
		if(!allRecord){
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
		else{
			console.log("found");
			var newinfo = Ext.getStore('disinfoListStore').findRecord('d_name',dis).data.dis_info;
			console.log(newinfo);
			Ext.getCmp('Dis_list').hide();
			if(!Ext.getCmp('Dis_info')){
           		Ext.Viewport.add(Ext.create('symhelp.view.Dis_info'));
        	}
       		Ext.getCmp('info').setHtml(newinfo.toString());
			Ext.getCmp('Dis_info').show();
		}
	}
});