Ext.define('symhelp.view.Dis_info',{
	extend: 'Ext.Panel',
    xtype: 'Dis_info',
    id: 'Dis_info',
    config : {
    	layout: {
            type: 'vbox',
            align: 'top'
        },
        items : [
        {
        xtype: 'toolbar',
        docked: 'top',
        title: 'Disease Information',
        items: [
        {    xtype : 'button',
              id   : 'back_info',
              ui : 'back',
              text : 'Back',
             align: 'right'
        },
        ] 
        },
        {

                xtype: 'label',
                width: '95%',
                height: '30%',
                padding: '20 10 10 30',
                //centered : 'true',
                id: 'info',
                html : 'hello' 
                //store: 'disinfoListStore',
                //itemTpl: '{dis_info}',
             }
        ]
    }
});