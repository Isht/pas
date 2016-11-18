/**
 * @author Isht.Ae
 */
Ext.define('Pas.view.users.getUsers', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.users.getusers',
    bodyPadding: '2 0 0 0',
    border: false,
    layout: 'border',
    defaults: {
        border: false,
        split: true
    },
    initComponent: function () {
        var me = this,
                panel = me;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'users.gridusers',
                    region: 'center'
                },
                {
                    xtype: 'users.formusers',
                    width: 380,
                    minWidth: 380,
                    maxWidth: 400,
                    collapsible: true,
                    region: 'west'
                }
            ]
        });

        me.callParent(arguments);
    }
});