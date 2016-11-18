/**
 * @author Isht.Ae
 */
Ext.define('Pas.view.purchase.getPurchase', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.purchase.getpurchase',
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
                    xtype: 'purchase.purchasegrid',
                    region: 'center'
                },
                {
                    xtype: 'purchase.purchasedetailgrid',
                    height: 220,
                    minHeight: 200,
                    maxHeight: 240,
                    collapsible: true,
                    region: 'south'
                }
            ]
        });

        me.callParent(arguments);
    }
});