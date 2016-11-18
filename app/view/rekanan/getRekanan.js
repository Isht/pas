/**
 * @author Isht.Ae
 */
Ext.define('Pas.view.rekanan.getRekanan', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.rekanan.getrekanan',
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
                    xtype: 'rekanan.gridrekanan',
                    region: 'center'
                },
                {
                    xtype: 'rekanan.formrekanan',
                    width: 360,
                    minWidth: 360,
                    maxWidth: 380,
                    collapsible: true,
                    region: 'west'
                }
            ]
        });

        me.callParent(arguments);
    }
});