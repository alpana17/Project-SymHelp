Ext.define('symhelp.model.sugList', {
	extend : 'Ext.data.Model',
	id : 'sugList',
	config : {
		fields : [
		{name: 'd_id', type: 'int'},
		{name: 'd_name', type: 'string'}
		//{name: 'dis_info', type: 'string'}
		]
	} 
});