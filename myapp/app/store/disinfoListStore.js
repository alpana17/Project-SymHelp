Ext.define('symhelp.store.disinfoListStore',{
	requires : ['symhelp.model.disinfoList',
				'Ext.data.proxy.Rest'],
	extend : 'Ext.data.Store',
	
	config : {
		model : 'symhelp.model.disinfoList',
		storeId : 'disinfoListStore',
		/*proxy : {
			type : 'ajax',
			//url: 'http://localhost:4004/disName',
			reader : {
				type : 'json',
				rootProperty : 'Diseaseinfo'
			}
		}*/
		/*data : [
			{d_name : 'Cancer', dis_info : 'abc'},
			{d_name : 'Blood Pressure', dis_info : 'abc'},
			{d_name : 'Diabetes', dis_info : 'abc'}
		]*/
	}
});