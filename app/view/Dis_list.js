Ext.define('symhelp.view.Dis_list',{
	extend: 'Ext.Panel',
    xtype: 'Dis_list',
    id: 'Dis_list',
    config : {
    	layout: {
            type: 'vbox',
            align: 'top'
        },
        items : [
        {
        	xtype: 'titlebar',
            docked: 'top',
            width: '100%',
            id: 'DisTitle',
            title: 'List of Diseases'
        },
        {

                xtype: 'list',
                width: '60%',
                height: '100%',
                centered : 'true',
                id: 'Dislist', 
                store: 'sugListStore',
                itemTpl: '{disease}'
                

             }
        ]
    }
});