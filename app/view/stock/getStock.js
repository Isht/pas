/**
 * @author Isht.Ae
 */
Ext.define('Pas.view.stock.getStock', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.stock.getstock',
    border: false,
    layout: 'fit',
    initComponent: function () {
        var me = this,
                panel = me;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'stock.stockgrid'
                }
            ]
        });

        me.callParent(arguments);
    }
});