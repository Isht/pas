/**
 * @author Isht Ae
 **/
Ext.define('Pas.view.layout.NavDataPasien', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.layout.navdatapasien',
    floating: false,
    bodyPadding: '5 15',
    cls: 'nav',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    text: 'Daftar PMR',
                    itemId: 'getPmr',
                    glyph: 0xf0cb,
                    cls: 'biru'
                },
                '-',
                {
                    text: 'Data Pasien',
                    itemId: 'getPatient',
                    glyph: 0xf21d,
                    cls: 'biru'
                }
            ]
        });
        me.callParent(arguments);
    }
});

/* End of file TreeMenu.js */
/* Location: ./assets/js/app/view/ui/TreeMenu.js */