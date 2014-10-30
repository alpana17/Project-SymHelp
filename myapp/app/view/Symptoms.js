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
            //title : 'Select',
            items: [
                        /*{
                        xtype : 'button',
                        id : 'logout_sym',
                        name : 'logout_sym',
                        text : 'Logout',
                        ui : 'round',
                        left : '102%'
                        },*/
                        {
                        xtype: 'selectfield',
                        label: 'Symptom 1',
                        id : 'symptom1',
                        options: [
                            {text: 'Null',  value: '0'},
                            {text: 'Fatigue',  value: '1'},
                            {text: 'Weight Loss', value: '2'},
                            {text: 'Loss of Appetite',  value: '3'},
                            {text: 'Hoarseness',  value: '4'},
                            {text: 'Difficulty Swallowing', value: '5'},
                            {text: 'Recurring respiratory infections',  value: '6'}
                        ]
                    }
                    ],
            
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
                        id : 'symptom2',
                        options: [
                        {text: 'Null',  value: '0'},
                            {text: 'Fatigue',  value: '1'},
                            {text: 'Weight Loss', value: '2'},
                            {text: 'Loss of Appetite',  value: '3'},
                            {text: 'Hoarseness',  value: '4'},
                            {text: 'Difficulty Swallowing', value: '5'},
                            {text: 'Recurring respiratory infections',  value: '6'}
                        ]
                    }
                    ],
            
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
                        id : 'symptom3',
                        options: [
                            {text: 'Null',  value: '0'},
                            {text: 'Fatigue',  value: '1'},
                            {text: 'Weight Loss', value: '2'},
                            {text: 'Loss of Appetite',  value: '3'},
                            {text: 'Hoarseness',  value: '4'},
                            {text: 'Difficulty Swallowing', value: '5'},
                            {text: 'Recurring respiratory infections',  value: '6'}
                        ]
                    }
                    ],
            
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
                        id : 'symptom4',
                        options: [
                            {text: 'Null',  value: '0'},
                            {text: 'Fatigue',  value: '1'},
                            {text: 'Weight Loss', value: '2'},
                            {text: 'Loss of Appetite',  value: '3'},
                            {text: 'Hoarseness',  value: '4'},
                            {text: 'Difficulty Swallowing', value: '5'},
                            {text: 'Recurring respiratory infections',  value: '6'}
                        ]
                    }
                    ],
            
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
                        id : 'symptom5',
                        options: [
                            {text: 'Null',  value: '0'},
                            {text: 'Fatigue',  value: '1'},
                            {text: 'Weight Loss', value: '2'},
                            {text: 'Loss of Appetite',  value: '3'},
                            {text: 'Hoarseness',  value: '4'},
                            {text: 'Difficulty Swallowing', value: '5'},
                            {text: 'Recurring respiratory infections',  value: '6'}
                        ]
                    }
                    ],
            
            border : '1',
            style: 'border-color: black; border-style: solid;'
        },
                    /*{
                        xtype : 'button',
                        ui :'round',
                        text : 'Next',
                        name : 'next',
                        id : 'next',
                }*/
                {
                        xtype : 'button',
                        ui :'action',
                        text : 'Find',
                        name : 'go',
                        id : 'go',
                }
        ]
    }
});
