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
        xtype: 'toolbar',
        docked: 'top',
        title: 'List of Diseases',
        items: [
        {   xtype : 'button',
            id   : 'back_list',
            ui : 'back',
            text : 'Back',
            align: 'right'
        },] 
        },
        {
            xtype: 'list',
            width: '60%',
            height: '100%',
            centered : 'true',
            id: 'disease_list', 
            store: 'sugListStore',
            itemTpl: ['<div>{d_name}','<div style="float:right";>{percentage}%</div></div>'],
        }]
    }
});