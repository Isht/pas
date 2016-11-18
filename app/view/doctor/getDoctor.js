/**
 * @author Isht.Ae
 */
Ext.define('Pas.view.doctor.getDoctor', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.doctor.getdoctor',
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
                    xtype: 'doctor.griddoctor',
                    region: 'center'
                },
                {
                    xtype: 'doctor.formdoctor',
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