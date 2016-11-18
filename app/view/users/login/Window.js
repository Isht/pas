/**
 * @author Isht Ae
 **/

Ext.define('Pas.view.users.login.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.users.login.window',
    itemId: 'usersLoginWin',
    title: 'Login to Parahita Apotek System v 3.2.0116 <small style="color:red">beta</small>',
    modal: true,
    resizable: false,
    closable: false,
    border: true,
    autoScroll: true,
    layout: 'fit',
    width: 500,
    autoShow: true,
    shadow: false,
    initComponent: function () {
        var me = this,
                win = me;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    itemId: 'formLogin',
                    bodyPadding: '10 0 20 0',
                    border: false,
                    defaults: {
                        width: 460,
                        labelWidth: 100
                    },
                    items: [
                        {
                            border: false,
//                            html: '<h1 class="login-header"> Welcome to Parahita Apotek System</h1>'
                            html: '<img class="login-header" src="resources/img/login-logo.png" alt="PARAHITA APOTEK SYSTEM" height="80" width="282" />'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '<b>Username</b> ',
                            labelAlign: 'right',
                            name: 'username',
                            emptyText: " type username",
                            itemId: 'username',
                            id: 'logUsername',
                            allowBlank: false,
                            msgTarget: 'side',
                            tabIndex: 1,
                            listeners: {
                                scope: this,
                                specialkey: function (f, e) {
                                    if (e.getKey() === e.ENTER) {
                                        f.up('form').down('#logPassword').focus();
                                    }
                                }
                            }
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '<b>Password</b> ',
                            emptyText: " type password",
                            name: 'password',
                            labelAlign: 'right',
                            itemId: 'logPassword',
                            allowBlank: false,
                            msgTarget: 'side',
                            inputType: 'password'
                        }
                    ]
                }
            ],
            buttons: [
                {
                    xtype: 'button',
                    text: '<b>Login</b>',
                    action: 'doLogin',
                    glyph: Glyphs.setIcon('login'),
                    cls: 'cust-btn biru'
                },
                {
                    xtype: 'button',
                    text: '<b>Reset</b>',
                    action: 'resetForm',
                    glyph: Glyphs.setIcon('cancel'),
                    cls: 'cust-btn orange'
                }
            ]
        });
        me.callParent(arguments);
    }
});

/* End of file Window.js */
/* Location: app/view/users/login/Window.js */