Ext.define('symhelp.store.sugListStore',{
	requires : ['symhelp.model.sugList',
				'Ext.data.proxy.Rest'],
	extend : 'Ext.data.Store',
	config : {
		model : 'symhelp.model.sugList',
		storeId : 'sugListStore',
		proxy : {
			type : 'rest',
			reader : {
				type : 'json',
				rootProperty : 'Disease'
			}
		},
		sorters : [{
        property: 'percentage',
        direction: 'DESC'
        }]
	}
});

