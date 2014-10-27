Ext.define('symhelp.view.More_details', {
    extend: 'Ext.Panel',
    xtype: 'More_details',
    id : 'More_details',
    config: {
        layout: {
            type: 'vbox',
            align: 'middle',
            fullscreen : 'true'
        },
         
                items: [
                    {
            xtype: 'titlebar',
            docked: 'top',
            width: '100%',
            id: 'searchTitle',
            title: 'More Details'
        },
        {
                        xtype : 'button',
                        id : 'logout_details',
                        name : 'logout_details',
                        text : 'Logout',
                        left : '85%'
        },
        {
            xtype : 'fieldset',
            width : '60%',
            //title : 'Select',
            items: [
                        {
                        xtype: 'selectfield',
                        label: 'Income (per month)',
                        options: [
                            {text: '<1000',  value: 'First'},
                            {text: '1000-5000', value: 'Second'},
                            {text: '5001-10,000',  value: 'Third'},
                            {text: '10,001-20,000',  value: 'Fourth'},
                            {text: '20,001-30,000', value: 'Fifth'},
                            {text: '>30,000',  value: 'Sixth'}
                        ]
                    }
                    ],
            id : 'income1',
            border : '1',
            style: 'border-color: black; border-style: solid;'
        },
                {
                    xtype : 'textfield',
                    width : '60%',
                    name : 'age',
                    id : 'age1',
                    label : 'Age(in years)',
                    border : '1',
                    style: 'border-color: black; border-style: solid;',
                    //required : true
                    },
                    {
                        xtype : 'button',
                        ui : 'round',
                        name : 'find',
                        text : 'Find',
                        id : 'find'  
        }
        ]
    }
});
