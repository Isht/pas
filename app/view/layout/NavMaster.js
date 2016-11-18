/**
 * @author Isht Ae
 **/
Ext.define('Pas.view.layout.NavMaster', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.layout.navmaster',
    floating: false,
    bodyPadding: '5 15',
    cls: 'nav',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    text: 'Data Dokter',
                    itemId: 'getDoctor',
                    glyph: 0xf0f0,
                    cls: 'biru'
                },
                '-',
                {
                    text: 'Data Supplier',
                    itemId: 'getSupplier',
                    glyph: 0xf0d1,
                    cls: 'biru'
                },
                '-',
                {
                    text: 'Data Rekanan',
                    itemId: 'getRekanan',
                    glyph: 0xf02c,
                    cls: 'biru'
                }
            ]
        });
        me.callParent(arguments);
    }
});

/* End of file TreeMenu.js */
/* Location: ./assets/js/app/view/ui/TreeMenu.js */