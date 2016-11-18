/**
 * @author Isht Ae
 **/

Ext.define('Pas.view.retail.RacikanWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.retail.racikanwin',
    itemId: 'racikanWin',
    title: 'Pembuatan Racikan',
    width: 690,
    height: 620,
    modal: true,
    resizable: false,
    closable: false,
    border: true,
    autoScroll: true,
    autoShow: true,
    shadow: false,
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'retail.formracikan',
                    height: 'auto',
                    margin: 'auto auto auto auto'
                },
                {
                    xtype: 'retail.griditemracikan',
                    height: 'auto'
                }
            ],
            buttons: [
                {
                    xtype: 'button',
                    text: 'Baru',
                    glyph: Glyphs.setIcon('add'),
                    cls: 'cust-btn biru',
                    action: 'newRacikan'
                },
                {
                    text: 'Simpan',
                    glyph: Glyphs.setIcon('save'),
                    cls: 'cust-btn biru',
                    action: 'saveRacikan',
                    scope: this,
                    handler: this.close
                },
                {
                    text: 'Batal',
                    glyph: Glyphs.setIcon('cancel'),
                    cls: 'cust-btn merah',
                    action: 'batalRacikan',
                    scope: this,
                    handler: this.close
                }
            ]
        });
        me.callParent(arguments);
    }
});

/* End of file PlAddPasienWin.js */
/* Location: ./assets/js/app/view/pelayanan/pldaftar/PlAddPasienWin.js */