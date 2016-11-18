Ext.define('Pas.controller.Base', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.listen({
            controller: {},
            component: {},
            global: {},
            store: {},
            proxy: {
                //Disable for a while until find the method
//                '#ajax': {
//                    exception: function (proxy, response, operation, eOpts) {
//                        console.log('Danger Will Robinson! We had a proxy error!');
//                    }
//                }
            }
        });
    },
    showSuccessNotif: function (msg) {
        Ext.create('widget.uxNotification', {
            title: '<span style="color:#8fe03e">SUCCESS</span>',
            position: 'tr',
//            iconCls: 'ux-notification-icon-information',
            autoCloseDelay: 5000,
            html: msg
        }).show();
    },
    showInfoNotif: function (msg) {
        Ext.create('widget.uxNotification', {
            title: '<span style="color:#337AB7">INFO</span>',
            position: 'tr',
//            iconCls: 'ux-notification-icon-information',
            autoCloseDelay: 5000,
            html: msg
        }).show();
    },
    showErrorNotif: function (msg) {
        Ext.create('widget.uxNotification', {
            title: '<span style="color:#D9534F">ERROR</span>',
            autoClose: false,
            position: 'tr',
//            iconCls: 'ux-notification-icon-information',
            autoCloseDelay: 5000,
            html: msg
        }).show();
    },
    showWarningNotif: function (msg) {
        Ext.create('widget.uxNotification', {
            title: '<span style="color:#F0AD4E">WARNING</span>',
            position: 'tr',
//            iconCls: 'ux-notification-icon-information',
            autoCloseDelay: 5000,
            html: msg
        }).show();
    }
});
