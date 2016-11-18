/**
 * @author Isht.Ae
 */
Ext.define('Pas.view.opname.getOpname', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.opname.getopname',
    border: false,
    layout: 'fit',
    initComponent: function () {
        var me = this,
                panel = me;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'opname.opnamegrid'
                }
            ]
        });

        me.callParent(arguments);
    }
});