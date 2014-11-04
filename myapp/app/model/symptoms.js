Ext.define('symhelp.model.symptoms', {
	extend : 'Ext.data.Model',
	id : 'symptoms',
	config : {
		fields : [
		{name: 'symptom', type: 'string'},
		{name: 'value', type: 'int'}
		]
	} 
});