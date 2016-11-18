/**
 * @author Isht.Ae
 */
Ext.define('Pas.view.retail.getRetail', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.retail.getretail',
//    bodyPadding: "2 0 0 0",
    border: false,
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },
    initComponent: function () {
        var me = this,
                panel = me;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: "retail.formpenjualan",
                    height: 80
                },
                {
                    xtype: "retail.griditemjual",
                    margin: 10,
                    border: true,
                    height: 200
                },
                {
                    xtype: "retail.formdetailpenjualan",
                    height: 200
                }
            ]
        });

        me.callParent(arguments);
    }
});