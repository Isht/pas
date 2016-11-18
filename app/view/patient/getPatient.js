/**
 * @author Isht.Ae
 */
Ext.define('Pas.view.patient.getPatient', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.patient.getpatient',
    bodyPadding: "2 0 0 0",
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
                    xtype: 'patient.gridlistpatient',
                    region: 'center'
                },
                {
                    xtype: 'patient.formpatient',
                    width: 380,
                    minWidth: 380,
                    maxWidth: 400,
                    collapsible: true,
                    region: 'west'
                }
            ]
        });

        me.callParent(arguments);
    }
});