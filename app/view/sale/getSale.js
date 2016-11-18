/**
 * @author Isht.Ae
 */
Ext.define('Pas.view.sale.getSale', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.sale.getsale',
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
                    xtype: 'sale.salegrid',
                    region: 'center'
                },
                {
                    xtype: 'sale.saledetailgrid',
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