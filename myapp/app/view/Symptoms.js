Ext.define('symhelp.view.Symptoms', {
    extend: 'Ext.Panel',
    xtype: 'Symptoms',
    id : 'Symptoms',
    config: {
        layout: {
            type: 'vbox',
            align: 'middle',
            fullscreen : 'true',
            scrollable : 'true'
        },
        items: [
            {
            xtype: 'titlebar',
            docked: 'top',
            width: '100%',
            id: 'searchTitle',
            title: 'Select Symptoms'
            },
            {
            xtype : 'fieldset',
            width : '60%',
            items: [
                {
                xtype: 'selectfield',
                label: 'Symptom 1',
                id : 'symptom1',
                store: 'symptomsStore',
                displayField: 'symptom',
                valueField: 'value'
                }],
            border : '1',
            style: 'border-color: black; border-style: solid;'
            },
            {
            xtype : 'fieldset',
            width : '60%',
            items: [
                {
                xtype: 'selectfield',
                label: 'Symptom 2',
                id : 'symptom2',
                store: 'symptomsStore',
                displayField: 'symptom',
                valueField: 'value'
                }],
            border : '1',
            style: 'border-color: black; border-style: solid;'
            },
            {
            xtype : 'fieldset',
            width : '60%',
            items: [
                {
                xtype: 'selectfield',
                label: 'Symptom 3',
                id : 'symptom3',
                store: 'symptomsStore',
                displayField: 'symptom',
                valueField: 'value'
                }],
            border : '1',
            style: 'border-color: black; border-style: solid;'
            },
            {
            xtype : 'fieldset',
            width : '60%',
            items: [
                {
                xtype: 'selectfield',
                label: 'Symptom 4',
                id : 'symptom4',
                store: 'symptomsStore',
                displayField: 'symptom',
                valueField: 'value'
                }],
            border : '1',
            style: 'border-color: black; border-style: solid;'
            },
            {
            xtype : 'fieldset',
            width : '60%',
            items: [
                {
                xtype: 'selectfield',
                label: 'Symptom 5',
                id : 'symptom5',
                store: 'symptomsStore',
                displayField: 'symptom',
                valueField: 'value'
                }],
            border : '1',
            style: 'border-color: black; border-style: solid;'
            },
            {
            xtype : 'button',
            ui :'action',
            text : 'Find',
            name : 'go',
            id : 'go',
            }]
        }
});
