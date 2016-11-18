/**
 * @author Isht.Ae
 */
Ext.define('Pas.view.apps.getApps', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.apps.getApps',
    bodyPadding: "2 0 0 0",
    border: false,
//    layout: "border",
//    style: 'border-left: 1px solid #E0E0E0',
//    defaults: {
//        border: false,
//        split: true
//    },
    initComponent: function () {
        var me = this,
                panel = me;

        Ext.applyIf(me, {
            html: '<h3 class="no_render">RENDER_FAILED::ERR_LIB_TPL(103)</h3>'
//            items: [
//                {
//                    xtype: "pljual.itemjualgrid",
//                    region: "center"
//                },
//                {
//                    xtype: "pljual.formpenjualan",
//                    width: 420,
//                    minWidth: 420,
//                    collapsible: true,
//                    region: "west"
//                }
//            ]
        });

        me.callParent(arguments);
    }
});