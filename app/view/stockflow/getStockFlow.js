/**
 * @author Isht.Ae
 */
Ext.define('Pas.view.stockflow.getStockFlow', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.stockflow.getstockflow',
    border: false,
    layout: 'fit',
    initComponent: function () {
        var me = this,
                panel = me;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'stockflow.stockgrid'
                }
            ]
        });

        me.callParent(arguments);
    }
});