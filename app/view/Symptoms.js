Ext.define('symhelp.view.Symptoms', {
    extend: 'Ext.Panel',
    xtype: 'Symptoms',
    id : 'hello',
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
            //title : 'Select',
            items: [
                        {
                        xtype : 'button',
                        id : 'logout',
                        name : 'logout',
                        text : 'Logout',
                        ui : 'round',
                        left : '102%'
                        },
                        {
                        xtype: 'selectfield',
                        label: 'Symptom 1',
                        options: [
                            {text: 'Headache',  value: 'First'},
                            {text: 'Fever', value: 'Second'},
                            {text: 'Cough',  value: 'Third'},
                            {text: 'Body Pain',  value: 'Fourth'},
                            {text: 'Weight loss', value: 'Fifth'},
                            {text: 'Vomiting',  value: 'Sixth'}
                        ]
                    }
                    ],
            id : 'symptom1',
            border : '1',
            style: 'border-color: black; border-style: solid;'
        },

        {
            xtype : 'fieldset',
            width : '60%',
            //title : 'Select',
            items: [
                        {
                        xtype: 'selectfield',
                        label: 'Symptom 2',
                        options: [
                            {text: 'Headache',  value: 'First'},
                            {text: 'Fever', value: 'Second'},
                            {text: 'Cough',  value: 'Third'},
                            {text: 'Body Pain',  value: 'Fourth'},
                            {text: 'Weight loss', value: 'Fifth'},
                            {text: 'Vomiting',  value: 'Sixth'}
                        ]
                    }
                    ],
            id : 'symptom2',
            border : '1',
            style: 'border-color: black; border-style: solid;'
        },
        {
            xtype : 'fieldset',
            width : '60%',
            //title : 'Select',
            items: [
                        {
                        xtype: 'selectfield',
                        label: 'Symptom 3',
                        options: [
                            {text: 'Headache',  value: 'First'},
                            {text: 'Fever', value: 'Second'},
                            {text: 'Cough',  value: 'Third'},
                            {text: 'Body Pain',  value: 'Fourth'},
                            {text: 'Weight loss', value: 'Fifth'},
                            {text: 'Vomiting',  value: 'Sixth'}
                        ]
                    }
                    ],
            id : 'symptom3',
            border : '1',
            style: 'border-color: black; border-style: solid;'
        },
        {
            xtype : 'fieldset',
            width : '60%',
            //title : 'Select',
            items: [
                        {
                        xtype: 'selectfield',
                        label: 'Symptom 4',
                        options: [
                            {text: 'Headache',  value: 'First'},
                            {text: 'Fever', value: 'Second'},
                            {text: 'Cough',  value: 'Third'},
                            {text: 'Body Pain',  value: 'Fourth'},
                            {text: 'Weight loss', value: 'Fifth'},
                            {text: 'Vomiting',  value: 'Sixth'}
                        ]
                    }
                    ],
            id : 'symptom4',
            border : '1',
            style: 'border-color: black; border-style: solid;'
        },
        {
            xtype : 'fieldset',
            width : '60%',
            //title : 'Select',
            items: [
                        {
                        xtype: 'selectfield',
                        label: 'Symptom 5',
                        options: [
                            {text: 'Headache',  value: 'First'},
                            {text: 'Fever', value: 'Second'},
                            {text: 'Cough',  value: 'Third'},
                            {text: 'Body Pain',  value: 'Fourth'},
                            {text: 'Weight loss', value: 'Fifth'},
                            {text: 'Vomiting',  value: 'Sixth'}
                        ]
                    }
                    ],
            id : 'symptom5',
            border : '1',
            style: 'border-color: black; border-style: solid;'
        },
                    {
                        xtype : 'button',
                        ui :'round',
                        text : 'Next',
                        name : 'next',
                        id : 'next',
                }
        ]
    }
});
