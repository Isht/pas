/**
 * @author Isht Ae
 **/
Ext.define('Pas.view.layout.NavGudang', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.layout.navgudang',
    floating: false,
    bodyPadding: '5 15',
    cls: 'nav',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    text: 'Data Barang',
                    itemId: 'getStock',
                    glyph: 0xf1b2,
                    cls: 'biru'
                },
                '-',
                {
                    text: 'Beli Langsung',
                    itemId: 'getDirectBuy',
                    glyph: 0xf02a,
                    cls: 'biru'
                },
                '-',
                {
                    text: 'Pengadaan Stock',
                    itemId: 'getProcurement',
                    glyph: 0xf066,
                    cls: 'biru'
                },
                '-',
                {
                    text: 'PO Barang',
                    itemId: 'getPurchase',
                    glyph: 0xf1d9,
                    cls: 'biru'
                },
                '-',
                {
                    text: 'TT Barang',
                    itemId: 'getStockIn',
                    glyph: 0xf019,
                    cls: 'biru'
                },
                '-',
                {
                    text: 'TT Faktur',
                    itemId: 'getFaktur',
                    glyph: 0xf1f0,
                    cls: 'biru'
                },
                '-',
                {
                    text: 'Stock Opname',
                    itemId: 'getOpname',
                    glyph: 0xf046,
                    cls: 'biru'
                },
                '-',
                {
                    text: 'Arus Stock',
                    itemId: 'getStockFlow',
                    glyph: 0xf0ec,
                    cls: 'biru'
                }
            ]
        });
        me.callParent(arguments);
    }
});

/* End of file TreeMenu.js */
/* Location: ./assets/js/app/view/ui/TreeMenu.js */