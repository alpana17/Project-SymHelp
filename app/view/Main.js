Ext.define('symhelp.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    config: {

        layout: {
            type: 'vbox',
            align: 'middle',
            fullscreen : 'true',
            scrollable : 'true'
        },
        //insert html
        items: [
            {
            xtype: 'titlebar',
            docked: 'top',
            width: '100%',
            id: 'searchTitle',
            title: 'Welcome to SymHelp'
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
                        xtype : 'button',
                        id : 'login',
                        name : 'login',
                        text : 'Login',
                        ui : 'round'
        },
        //html here (if not a registered user, go to register)
        {
                        xtype : 'button',
                        id : 'register1',
                        name : 'register1',
                        text : 'Register1',
                        ui : 'round'
        }
        ]
    }
});
