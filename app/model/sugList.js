Ext.define('symhelp.model.sugList', {
	extend : 'Ext.data.Model',
	id : 'sugList',
	config : {
		fields : [
		{name: 'disease', type: 'string'},
		{name: 'docName', type: 'string'},
		{name: 'docContact', type: 'int'},
		{name: 'hosName', type: 'string'},
		{name: 'hosLoc', type: 'string'},
		{name: 'hosContact', type: 'string'}
		]
	} 
});