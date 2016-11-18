/**
 * @author Isht.Ae
 */
Ext.define('Pas.view.faktur.getFaktur', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.faktur.getfaktur',
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
                    xtype: 'faktur.fakturgrid',
                    region: 'center'
                },
                {
                    xtype: 'faktur.fakturdetailgrid',
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