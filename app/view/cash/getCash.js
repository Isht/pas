/**
 * @author Isht.Ae
 */
Ext.define('Pas.view.cash.getCash', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.cash.getcash',
    border: false,
    layout: 'fit',
//    style: 'border-left: 1px solid #E0E0E0',
//    defaults: {
//        border: false,
//        split: true
//    },
    initComponent: function () {
        var me = this,
                panel = me;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'cash.cashgrid'
                }
            ]
        });

        me.callParent(arguments);
    }
});