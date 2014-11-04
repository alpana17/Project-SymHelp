Ext.define('symhelp.store.disinfoListStore',{
	requires : ['symhelp.model.disinfoList',
				'Ext.data.proxy.Rest'],
	extend : 'Ext.data.Store',
	config : {
		model : 'symhelp.model.disinfoList',
		storeId : 'disinfoListStore'
	}
});