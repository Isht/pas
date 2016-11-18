/**
 * @author Isht Ae
 **/
Ext.define('Pas.view.layout.NavFrontOffice', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.layout.navfrontoffice',
    floating: false,
    bodyPadding: '5 15',
    cls: 'nav',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    text: 'Penjualan Retail',
                    itemId: 'getRetail',
                    glyph: 0xf217,
                    cls: 'biru'
                },
                '-',
                {
                    text: 'Penjualan Non Retail',
                    itemId: 'getNonRetail',
                    glyph: 0xf16b,
                    cls: 'biru'
                },
                '-',
                {
                    text: 'Daftar Penjualan',
                    itemId: 'getSale',
                    glyph: 0xf201,
                    cls: 'biru'
                },
                '-',
                {
                    text: 'Penerimaan Kas',
                    itemId: 'getCash',
                    glyph: 0xf0d6,
                    cls: 'biru'
                },
                '-',
                {
                    text: 'Pelunasan',
                    itemId: 'getPayment',
                    glyph: 0xf046,
                    cls: 'biru'
                }
            ]
        });
        me.callParent(arguments);
    }
});

/* End of file TreeMenu.js */
/* Location: ./assets/js/app/view/ui/TreeMenu.js */