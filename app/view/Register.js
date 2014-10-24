Ext.define('symhelp.view.Register', {
    extend: 'Ext.Panel',
    xtype: 'Register',
    id : 'hello',
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
            title: 'Registeration'
        },
                {
                    xtype : 'textfield',
                    width : '60%',
                    name : 'name',
                    id : 'name1',
                    label : 'Name',
                    border : '1',
                    style: 'border-color: black; border-style: solid;',
                    required : true
                    },
                    {
                    xtype : 'textfield',
                    width : '60%',
                    name : 'uname',
                    id : 'uname1',
                    label : 'UserName',
                    border : '1',
                    style: 'border-color: black; border-style: solid;',
                    required : true
                    },
                    {
                    xtype : 'passwordfield',
                    width : '60%',
                    name : 'pswrd',
                    id : 'pswrd1',
                    label : 'Password',
                    border : '1',
                    style: 'border-color: black; border-style: solid;',
                    required : true
                    },
                    {
                    xtype : 'passwordfield',
                    width : '60%',
                    name : 'cnfrmPswrd',
                    id : 'cnfrmPswrd1',
                    label : 'Confirm Password',
                    border : '1',
                    style: 'border-color: black; border-style: solid;',
                    required : true
                    },
                    {
                        xtype : 'button',
                        ui : 'round',
                        name : 'register',
                        text : 'Register',
                        id : 'register'
        }
        ]
    }
});
