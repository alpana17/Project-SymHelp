Ext.define('symhelp.view.RegisterHere', {
    extend: 'Ext.tab.Panel',
    //xtype: 'RegisterNew',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },
                {
                    xtype : 'textfield',
                    name : 'name',
                    id : 'name1',
                    label : 'Name',
                    border : '1',
                    style: 'border-color: black; border-style: solid;',
                    required : true
                    },
                    {
                    xtype : 'textfield',
                    name : 'uname',
                    id : 'uname1',
                    label : 'UserName',
                    border : '1',
                    style: 'border-color: black; border-style: solid;',
                    required : true
                    },
                    {
                    xtype : 'passwordfield',
                    name : 'pswrd',
                    id : 'pswrd1',
                    label : 'Password',
                    border : '1',
                    style: 'border-color: black; border-style: solid;',
                    required : true
                    },
                    {
                    xtype : 'passwordfield',
                    name : 'cnfrmPswrd',
                    id : 'cnfrmPswrd1',
                    label : 'Confirm Password',
                    border : '1',
                    style: 'border-color: black; border-style: solid;',
                    required : true
                    },
                    {
                        xtype : 'container',
                        defaults : {
                            xtype: 'button',
                            style : 'margin: .5em',
                            ui : 'round',
                            width: '20%',
                            centered : 'true'
                        },
                        layout: {
                            type: 'hbox'
                        },
                        items: {
                            text: 'Register',
                            handler: function(){
                            /*var h = parseInt(Ext.getCmp('hght').getValue());
                            h = h*h;
                            var w = parseInt(Ext.getCmp('weght').getValue());
                            var bmi = w/h;

                            Ext.getCmp('bm').setValue(bmi.toString());*/
                            }
                    },
                    html: [
                    "If you are a registered user, go to Login."
                ].join("")
                    
            }]
        }
        ]
    }
});
