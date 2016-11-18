Ext.define('Pas.controller.AppSecurity', {
    extend: 'Pas.controller.Base', //Extends base controller
    stores: [
    ],
    views: [
        'users.login.Window'
    ],
    refs: [
        {ref: "WindowLogin", selector: "[xtype=users.login.window]"}
    ],
    init: function () {
        this.listen({
            controller: {
            },
            component: {
                '#usersLoginWin button[action=doLogin]': {
                    click: this.doLogin
                },
                '#doLogout': {
                    click: this.doLogout
                },
                '#logPassword': {
                    specialkey: function (f, e) {
                        if (e.getKey() === e.ENTER) {
                            this.doLogin();
                        }
                    }
                },
                '#usersLoginWin button[action=resetForm]': {
                    click: this.doReset
                }
            },
            global: {
                beforeviewportrender: this.processLoggedIn
            },
            store: {}
//            proxy: {
//                '#ajax': {
//                    exception: function (proxy, response, operation, eOpts) {
//                        console.log(response.status);
//                    }
//                }
//            }
        });
    },
    /**
     *  Reset Form Login
     */
    doReset: function (button, e, eOpts) {
        var me = this,
                win = button.up('window'),
                form = win.down('form');

        form.getForm().reset();
    },
    /**
     * Handles form submission for login
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    doLogin: function () {
        var me = this,
                win = this.getWindowLogin(),
                form = win.down('form'),
                values = form.getValues(),
                hashedPassword;
        // simple validation
        if (Ext.isEmpty(values.username) || Ext.isEmpty(values.password)) {
            Ext.Msg.alert('Attention', 'Please complete the login form!');
            return false;
        }
        Ext.Ajax.request({
            url: 'auth/login',
            params: {
                identity: values.username,
                password: values.password
            },
            success: function (response, options) {
                // decode response
                var result = Ext.decode(response.responseText);
                // check if success flag is true
                if (result.success) {
                    // has session...add to application stack
                    Pas.LoggedInUser = Ext.create('Pas.model.security.User', result.data);
                    // fire global event aftervalidateloggedin
                    Ext.globalEvents.fireEvent('aftervalidateloggedin');
                    // show message
                    Ext.Msg.alert('Attention', 'You successfully logged in. Welcome to Parahita Apotek System!');
                    // close window
                    win.destroy();
                }
                // couldn't login...show error
                else {
                    Ext.Msg.alert('Attention', result.msg);
                }
            },
            failure: function (response, options) {
                Ext.Msg.alert('Attention', 'Sorry, an error occurred during your request. Please try again.');
            }
        });
    },
    /**
     * Handles form submission for logout
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    doLogout: function (button, e, eOpts) {
        var me = this;
        Ext.Msg.confirm('Attention', 'Are you sure you want to logout of PAS?', function (button) {
            if (button === 'yes') {
                Ext.Ajax.request({
                    url: 'auth/logout',
                    method: 'GET',
                    success: function (response, options) {
                        history.pushState("", document.title, window.location.pathname);
                        window.location.reload(true);
                    },
                    failure: function (response, options) {
                        Ext.Msg.alert('Attention', 'Sorry, an error occurred during your request. Please try again.');
                    }
                });
            }
        });
    },
    /**
     *  Main Method for security Check
     */
    processLoggedIn: function () {
        var me = this;
        // Check Security Login
        Ext.Ajax.request({
            url: 'apps/checklogin',
            success: function (response, options) {
                // decode response
                var result = Ext.decode(response.responseText);
                // check if success flag is true
                if (result.success) {
                    // has session...add to application stack
                    Pas.LoggedInUser = Ext.create('Pas.model.security.User', result.data);
                    // fire global event aftervalidateloggedin
                    Ext.globalEvents.fireEvent('aftervalidateloggedin');
                }
                // couldn't login...show error
                else {
                    Ext.Msg.alert('Attention', result.msg);
                }
            },
            failure: function (response, options) {
                Ext.widget('users.login.window').show();
                Ext.getDoc().dom.title = 'PAS - Login';
                history.pushState("", document.title, window.location.pathname);
            }
        });
    }
});