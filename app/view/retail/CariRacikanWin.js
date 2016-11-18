/**
 * @author Isht Ae
 **/

Ext.define('Pas.view.retail.CariRacikanWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.retail.cariracikanwin',
    itemId: 'cariRacikanWin',
    title: 'Daftar Racikan',
    width: 320,
    height: 400,
    modal: true,
    resizable: false,
    border: true,
    autoScroll: true,
    layout: "fit",
    autoShow: true,
    initComponent: function () {
        var me = this,
                win = me;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'grid',
                    border: false,
                    columnLines: true,
                    store: 'retail.racikan.Racikan',
                    itemId: 'daftarRacikan',
                    multiSelect: false,
                    viewConfig: {
                        autoScroll: true,
                        emptyText: 'Tidak ada data.',
                        deferEmptyText: false
                    },
                    tbar: [
                        {
                            xtype: 'textfield',
                            width: 220,
                            fieldLabel: '<b>Filter</b> ',
                            labelAlign: 'right',
                            labelWidth: 40,
                            itemId: 'namaresep',
                            hidden: false,
                            emptyText: 'Nama Racikan',
                            listeners: {
                                scope: this,
                                change: function (f, e) {
                                    if (f.getValue().length > 2) {
                                        this.cariRacikan();
                                    }
                                },
                                specialkey: function (f, e) {
                                    if (e.getKey() === e.ENTER) {
                                        this.cariRacikan();
                                    }
                                }
                            }
                        },
                        {
                            glyph: Glyphs.setIcon('search'),
                            cls: 'cust-btn biru',
                            listeners: {
                                scope: this,
                                click: function () {
                                    this.cariRacikan();
                                }
                            }
                        }
                    ],
                    columns: [
                        Ext.create('Ext.grid.RowNumberer'),
                        {
                            xtype: 'gridcolumn',
                            text: 'Nama Racikan',
                            dataIndex: 'racikanName',
                            flex: 1
                        }
                    ],
                    listeners: {
                        afterrender: function () {
                            this.getStore().removeAll();
                        }
                    }
                }
            ],
            buttons: [
                {
                    text: 'Pilih',
                    itemId: 'pilihRacikan',
                    glyph: Glyphs.setIcon('check'),
                    cls: 'cust-btn biru',
                    handler: function () {
                        this.up('window').destroy();
                    }
                },
                {
                    text: 'Batal',
                    itemId: 'batalRacikan',
                    glyph: Glyphs.setIcon('cancel'),
                    cls: 'cust-btn merah',
                    handler: function () {
                        this.up('window').destroy();
                    }
                }
            ]
        });
        me.callParent(arguments);
    },
    cariRacikan: function () {
        var val = this.down('#namaresep').getValue();
        var store = this.down('grid').getStore(),
                filter = [];

        if (!Ext.isEmpty(val)) {
            filter.push({property: 'rc_name', operator: 'like', type: 'string', value: val});
        }

        this.down('grid').getSelectionModel().clearSelections();
        if (Ext.isEmpty(filter)) {
            store.removeAll();
            return false;
        }
        store.clearFilter(true);
        store.filter(filter);
    }
});

/* End of file PlAddPasienWin.js */
/* Location: ./assets/js/app/view/pelayanan/pldaftar/PlAddPasienWin.js */