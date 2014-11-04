Ext.define('symhelp.view.No_symptom',{
	extend: 'Ext.Panel',
    xtype: 'No_symptom',
    id: 'No_symptom',
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
            {xtype : 'button',
             id   : 'back_symptom',
             ui : 'back',
             text : 'Back',
             align: 'right'
        }]},
        {   xtype: 'label',
            width: '95%',
            height: '30%',
                padding: '20 10 10 30',
                id: 'info1',
                html : 'No Symptom is selected.'
             }
        ]
    }
});