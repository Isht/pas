/**
 * @author Isht.Ae
 */
Ext.define('Pas.view.procurement.getProcurement', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.procurement.getprocurement',
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
                    xtype: 'procurement.procgrid',
                    region: 'center'
                },
                {
                    xtype: 'procurement.procdetailgrid',
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