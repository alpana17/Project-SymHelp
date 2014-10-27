Ext.define('symhelp.view.Logout_success', {
    extend: 'Ext.Panel',
    id : 'Logout_success',
    xtype: 'logout_success',
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
            title: 'Logout Successful'
        },
        //html : 'Logout successful.',
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
                        id : 'login_logout',
                        name : 'login_logout',
                        text : 'Login',
                        ui : 'round'
        },
        //html : 'if not a registered user, go to register',
        {
                        xtype : 'button',
                        id : 'registerMain_logout',
                        name : 'registerMain_logout',
                        text : 'Register',
                        ui : 'round'
        }
        ]
    }
});
