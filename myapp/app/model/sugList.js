Ext.define('symhelp.model.sugList', {
	extend : 'Ext.data.Model',
	id : 'sugList',
	config : {
		fields : [
		{name: 'd_id', type: 'int'},
		{name: 'd_name', type: 'string'},
		{name: 'dis_info', type: 'string'},
		{name: 'matched_sym', type: 'number'},
		{name: 'total_sym', type: 'number'},
		{name: 'percentage', type: 'number',
    			convert: function(val,row) {
    				return ((row.data.matched_sym / row.data.total_sym) * 100);
    			}	}
		]
	} 
});