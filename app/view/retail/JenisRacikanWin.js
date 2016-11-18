/**
 * @author Isht Ae
 **/

Ext.define('Pas.view.retail.JenisRacikanWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.retail.jenisracikanwin',
    itemId: 'jenisRacikanWin',
    title: 'Daftar Jenis Racikan',
    width: 400,
    height: 390,
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
                    store: 'retail.racikan.JenisRacikan',
                    itemId: 'jenisRacikanGrid',
                    multiSelect: false,
                    columns: [
                        Ext.create('Ext.grid.RowNumberer'),
                        {
                            header: 'Nama Jenis Racikan',
                            dataIndex: 'jenisName',
                            flex: 1,
                            renderer: 'uppercase',
                            editor: {
                                allowBlank: false
                            }
                        },
                        {
                            header: 'Harga',
                            dataIndex: 'kemasanPrice',
                            flex: 1,
                            editor: {
                                allowBlank: false
                            }
                        },
                        {
                            xtype: "actioncolumn",
                            text: "",
                            width: 35,
                            align: "center",
                            items: [
                                {
                                    icon: 'resources/img/icon-delete.png', // Use a URL in the icon config
                                    tooltip: 'Hapus Data',
                                    action: 'actionDelete'
                                }
                            ]
                        }
                    ],
                    tbar: [
                        {
                            text: 'Tambah',
                            glyph: Glyphs.setIcon('add'),
                            cls: 'cust-btn biru',
                            handler: function () {
                                var grid = this.up('grid'),
                                        store = grid.getStore(),
                                        editor = grid.getPlugin('jenisRacikanEditor');

                                editor.cancelEdit();

                                var rec = {
                                    id: 0,
                                    jenisName: "NAMA RACIKAN",
                                    kemasanPrice: 0,
                                    materialPrice: 0,
                                    satuanId: 0,
                                    satuanName: ""
                                };

                                store.insert(0, rec);

                                editor.startEditByPosition({
                                    row: 0,
                                    column: 1
                                });
                            }
                        }
                    ],
                    plugins: [
                        {
                            ptype: 'cellediting',
                            clicksToEdit: 2,
                            pluginId: 'jenisRacikanEditor'
                        }
                    ],
                    listeners: {
                        'afterrender': function () {
                            this.getStore().clearFilter(true);
                            this.getStore().load();
                        },
                        'edit': function (editor, e, opt) {
                            if (e.record.dirty) {
                                var store = e.grid.getStore();

                                store.sync({
                                    success: function (batch, eOpts) {
//                                        console.log(batch.proxy.getReader().rawData.data.id);
//                                        Sync success
                                    },
                                    failure: function (batch, eOpts) {
//                                        Sync failed
                                    },
                                    callback: function () {
//                                        All Progress
                                        store.load();
                                    },
                                    scope: this
                                });
                            }
                        },
                        'actionDelete': function (rec, index) {
                            var store = this.getStore();

                            store.removeAt(index);
                            store.sync({
                                success: function (batch, eOpts) {
//                                        console.log(batch.proxy.getReader().rawData.data);
//                                    Sync success
                                },
                                failure: function (batch, eOpts) {
//                                    Sync failed
                                },
                                callback: function () {
//                                        All Progress
                                    store.load();
                                },
                                scope: this
                            });
                        }
                    }
                }
            ],
            buttons: [
                {
                    text: "Tutup",
                    glyph: Glyphs.setIcon('cancel'),
                    cls: 'cust-btn merah',
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