/**
 * @author Isht.Ae
 */
Ext.define('Pas.view.stockin.getStockIn', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.stockin.getstockin',
    border: false,
    layout: 'fit',
    initComponent: function () {
        var me = this,
                panel = me;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'stockin.stockingrid'
                }
            ]
        });

        me.callParent(arguments);
    }
});