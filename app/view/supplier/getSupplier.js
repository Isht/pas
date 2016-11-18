/**
 * @author Isht.Ae
 */
Ext.define('Pas.view.supplier.getSupplier', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.supplier.getsupplier',
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
                    xtype: 'supplier.gridsupplier',
                    region: 'center'
                },
                {
                    xtype: 'supplier.formsupplier',
                    width: 400,
                    minWidth: 400,
                    maxWidth: 420,
                    collapsible: true,
                    region: 'west'
                }
            ]
        });

        me.callParent(arguments);
    }
});