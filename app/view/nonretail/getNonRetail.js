/**
 * @author Isht.Ae
 */
Ext.define('Pas.view.nonretail.getNonRetail', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.nonretail.getnonretail',
    bodyPadding: "2 0 0 0",
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
                    xtype: "nonretail.formpenjualan",
                    height: 100
                },
                {
                    xtype: "nonretail.griditemjual",
                    margin: 10,
                    border: true,
                    height: 200
                },
                {
                    xtype: "nonretail.formdetailpenjualan",
                    height: 200
                }
            ]
        });

        me.callParent(arguments);
    }
});