/**
 * @author Isht.Ae
 */
Ext.define('Pas.view.directbuy.getDirectBuy', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.directbuy.getdirectbuy',
    border: false,
    layout: 'fit',
    initComponent: function () {
        var me = this,
                panel = me;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'directbuy.buygrid'
                }
            ]
        });

        me.callParent(arguments);
    }
});