/**
 * @author Isht Ae
 **/
Ext.define('Pas.view.layout.NavPengaturan', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.layout.navpengaturan',
    floating: false,
    bodyPadding: '5 15',
    cls: 'nav',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    text: 'Pengguna',
                    itemId: 'getUsers',
                    glyph: 0xf007,
                    cls: 'biru'
                },
                '-',
                {
                    text: 'Aplikasi',
                    itemId: 'getApps',
                    glyph: 0xf108,
                    cls: 'biru'
                }
            ]
        });
        me.callParent(arguments);
    }
});

/* End of file TreeMenu.js */
/* Location: ./assets/js/app/view/ui/TreeMenu.js */