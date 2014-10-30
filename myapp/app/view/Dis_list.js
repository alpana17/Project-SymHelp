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
       /* {
        	xtype: 'titlebar',
            docked: 'top',
            width: '100%',
            id: 'DisTitle',
            title: 'List of Diseases'
        },*/
        {
        xtype: 'toolbar',
        docked: 'top',
        title: 'List of Diseases',
        items: [
        {    xtype : 'button',
              id   : 'back_list',
              ui : 'back',
              text : 'Back',
             align: 'right'
        },
        ] 
        },
        /*{
            xtype : 'button',
            id    : 'back_list',
            ui   : 'round',
            text : 'Back',
            align : 'left', 
            margin : '10 10 10 1230',
            hidden: true
        },*/
        {

                xtype: 'list',
                width: '60%',
                height: '100%',
                centered : 'true',
                id: 'ds_list', 
                store: 'sugListStore',
                itemTpl: '{d_name}',
             }
        ]
    }
});