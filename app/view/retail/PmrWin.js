/**
 * @author Isht Ae, coepoe
 **/

Ext.define('Pas.view.retail.PmrWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.retail.pmrwin',
    itemId: 'pmrWin',
    title: 'Data PMR',
    width: 800,
    height: 500,
    modal: true,
    resizable: false,
    border: true,
    autoScroll: true,
    layout: 'fit',
    autoShow: true,
    shadow: false,
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'tabpanel',
                    itemId: 'GridPmrTabs',
                    deferredRender: true,
                    plain: false,
                    activeTab: 0,
                    layout: 'fit',
                    border: false,
                    items: [
                        {
                            xtype: "grid",
                            itemId: "AlergiGrid",
                            title: "Riwayat Alergi",
//                            store: "pljual.PmrAlergi",
                            columnLines: true,
                            flex: 1,
                            forceFit: true,
                            border: false,
                            tbar: [
                                {
                                    xtype: "form",
                                    itemId: "AlergiForm",
                                    bodyStyle: "background: transparent",
                                    padding: '5 20 0 20',
                                    width: '100%',
                                    border: false,
                                    fieldDefaults: {
                                        anchor: "100%",
                                        labelAlign: "right"
                                    },
                                    items: [
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: "Id ",
                                            name: 'pma_id',
                                            itemId: 'pma_id',
                                            hidden: true,
                                            value: 0
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: "Id ",
                                            itemId: 'pma_pasien_id',
                                            name: 'pma_pasien_id',
                                            hidden: true,
                                            value: 0
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    xtype: "radiogroup",
                                                    fieldLabel: "Jenis Alergi  ",
                                                    width: 300,
                                                    items: [
                                                        {
                                                            boxLabel: "Obat",
                                                            name: "pma_type",
                                                            width: 60,
                                                            inputValue: 1,
                                                            checked: true
                                                        },
                                                        {
                                                            boxLabel: "Makanan",
                                                            width: 80,
                                                            name: "pma_type",
                                                            inputValue: 2,
                                                            checked: false
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: "button",
                                                    margin: "0 0 0 5",
                                                    iconCls: "icon-save",
                                                    itemId: 'SaveAlergi'
                                                },
                                                {
                                                    xtype: "button",
                                                    margin: "0 0 0 5",
                                                    iconCls: "icon-new",
                                                    itemId: 'NewAlergi'
                                                },
                                                {
                                                    xtype: "button",
                                                    margin: "0 0 0 5",
                                                    iconCls: "icon-delete",
                                                    itemId: 'DelAlergi'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'textareafield',
                                            fieldLabel: "Uraian ",
                                            name: 'pma_desc',
                                            allowBlank: false,
                                            height: 50
                                        }
                                    ]
                                }
                            ],
                            columns: [
                                Ext.create("Ext.grid.RowNumberer", {
                                    width: 30
                                }),
                                {
                                    width: 60,
                                    text: "TYPE ALERGI",
                                    dataIndex: "type_alergi",
                                    renderer: "uppercase"
                                },
                                {
                                    width: 200,
                                    text: "URAIAN ALERGI",
                                    dataIndex: "pma_desc",
                                    renderer: "uppercase"
                                }
                            ]
                        },
                        {
                            xtype: "grid",
                            itemId: "ObatGrid",
                            title: "Efek Samping Obat",
//                            store: "pljual.PmrObat",
                            columnLines: true,
                            flex: 1,
                            forceFit: true,
                            border: false,
                            tbar: [
                                {
                                    xtype: "form",
                                    itemId: "ObatForm",
                                    bodyStyle: "background: transparent",
                                    padding: '5 20 0 20',
                                    width: '100%',
                                    border: false,
                                    fieldDefaults: {
                                        anchor: "100%",
                                        labelAlign: "right"
                                    },
                                    items: [
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: "Id ",
                                            name: 'pmo_id',
                                            itemId: 'pmo_id',
                                            hidden: true,
                                            value: 0
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: "Id ",
                                            itemId: 'pmo_pasien_id',
                                            name: 'pmo_pasien_id',
                                            hidden: true,
                                            value: 0
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    xtype: "textfield",
                                                    fieldLabel: "Nama Obat ",
                                                    name: "pmo_nama_obat",
                                                    allowBlank: false,
                                                    width: 300
                                                },
                                                {
                                                    xtype: "button",
                                                    margin: "0 0 0 5",
                                                    iconCls: "icon-save",
                                                    itemId: 'SaveObat'
                                                },
                                                {
                                                    xtype: "button",
                                                    margin: "0 0 0 5",
                                                    iconCls: "icon-new",
                                                    itemId: 'NewObat'
                                                },
                                                {
                                                    xtype: "button",
                                                    margin: "0 0 0 5",
                                                    iconCls: "icon-delete",
                                                    itemId: 'DelObat'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'textareafield',
                                            fieldLabel: "Uraian ",
                                            allowBlank: false,
                                            name: 'pmo_desc',
                                            height: 50
                                        }
                                    ]
                                }
                            ],
                            columns: [
                                Ext.create("Ext.grid.RowNumberer", {
                                    width: 30
                                }),
                                {
                                    width: 100,
                                    text: "NAMA OBAT",
                                    dataIndex: "pmo_nama_obat",
                                    renderer: "uppercase"
                                },
                                {
                                    width: 220,
                                    text: "URAIAN ALERGI",
                                    dataIndex: "pmo_desc",
                                    renderer: "uppercase"
                                }
                            ]
                        },
                        {
                            xtype: "grid",
                            itemId: "PemnyakitGrid",
                            title: "Riwayat Penyakit",
//                            store: "pljual.PmrPenyakit",
                            columnLines: true,
                            flex: 1,
                            forceFit: true,
                            border: false,
                            tbar: [
                                {
                                    xtype: "form",
                                    itemId: "PemnyakitForm",
                                    bodyStyle: "background: transparent",
                                    padding: '5 20 0 20',
                                    width: '100%',
                                    border: false,
                                    fieldDefaults: {
//                                        anchor: "100%",
                                        labelAlign: "right"
                                    },
                                    items: [
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: "Id ",
                                            name: 'pmp_id',
                                            itemId: 'pmp_id',
                                            hidden: true,
                                            value: 0
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: "Id ",
                                            itemId: 'pmp_pasien_id',
                                            name: 'pmp_pasien_id',
                                            hidden: true,
                                            value: 0
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    xtype: "textfield",
                                                    fieldLabel: "Nama Penyakit ",
                                                    allowBlank: false,
                                                    name: "pmp_penyakit_name",
                                                    width: 300
                                                },
                                                {
                                                    xtype: "button",
                                                    margin: "0 0 0 5",
                                                    iconCls: "icon-save",
                                                    itemId: 'SavePenyakit'
                                                },
                                                {
                                                    xtype: "button",
                                                    margin: "0 0 0 5",
                                                    iconCls: "icon-new",
                                                    itemId: 'NewPenyakit'
                                                },
                                                {
                                                    xtype: "button",
                                                    margin: "0 0 0 5",
                                                    iconCls: "icon-delete",
                                                    itemId: 'DelPenyakit'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'textfield',
                                            allowBlank: false,
                                            fieldLabel: "Tahun ",
                                            width: 170,
                                            name: 'pmp_tahun'
                                        }
                                    ]
                                }
                            ],
                            columns: [
                                Ext.create("Ext.grid.RowNumberer", {
                                    width: 30
                                }),
                                {
                                    width: 80,
                                    text: "TAHUN",
                                    dataIndex: "pmp_tahun"
                                },
                                {
                                    width: 300,
                                    text: "NAMA PENYAKIT",
                                    dataIndex: "pmp_penyakit_name"
                                            //renderer: "uppercase"
                                }
                            ]
                        },
                        {
                            xtype: "grid",
                            itemId: "BagDalamGrid",
                            title: "Bagian Dalam",
//                            store: "pljual.PmrBagDalamStore",
                            columnLines: true,
                            flex: 1,
                            forceFit: false,
                            autoScroll: true,
                            border: false,
                            dockedItems: [
                                {
                                    xtype: "toolbar",
                                    dock: "top",
                                    itemId: 'tbAction',
                                    items: [
                                        {
                                            xtype: "button",
                                            margin: "0 0 0 5",
                                            text: "Copy Detail Penjualan",
                                            iconCls: "icon-copy",
                                            itemId: 'CopyDetJual'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: "Id ",
                                            itemId: 'pmbd_pasien_id',
                                            name: 'pmbd_pasien_id',
                                            hidden: true,
                                            value: 0
                                        }
                                    ]
                                }
                            ],
                            columns: [
                                Ext.create("Ext.grid.RowNumberer", {
                                    width: 30
                                }),
                                {
                                    xtype: 'datecolumn',
                                    width: 80,
                                    text: 'TANGGAL',
                                    dataIndex: 'pmbd_tgl'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: 200,
                                    text: 'NAMA ITEM',
                                    dataIndex: 'item'
                                            //renderer: 'uppercase'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: 80,
                                    text: 'JENIS',
                                    dataIndex: 'pmbd_racikan',
                                    renderer: function (value) {
                                        var returnValue = "";
                                        if (value === 0) {
                                            returnValue = 'Bukan Racikan';
                                        } else {
                                            returnValue = 'Racikan';
                                        }
                                        return returnValue;
                                    }
                                },
                                {
                                    xtype: 'numbercolumn',
                                    width: 60,
                                    text: 'JUMLAH',
                                    dataIndex: 'pmbd_jumlah'
                                            //renderer: 'uppercase',
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: 60,
                                    text: 'SATUAN',
                                    dataIndex: 'satuan'
                                            //renderer: 'uppercase',
                                },
                                {
                                    xtype: 'gridcolumn',
                                    text: 'ATURAN PAKAI',
                                    width: 150,
                                    dataIndex: 'aturanpakai'
                                            //renderer: 'uppercase'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    text: 'DRP',
                                    width: 200,
                                    dataIndex: 'pmbd_drp'
                                            //renderer: 'uppercase'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: 300,
                                    text: 'DATA PENUNJANG',
                                    dataIndex: 'pmbd_datapenunjang'
                                            //renderer: 'uppercase'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    text: 'MANAJEMEN TERAPI',
                                    width: 200,
                                    dataIndex: 'pmbd_terapi'
                                            //renderer: 'uppercase'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    text: 'FOLLOW UP',
                                    width: 200,
                                    dataIndex: 'pmbd_followup'
                                            //renderer: 'uppercase'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: 400,
                                    text: 'CATATAN',
                                    dataIndex: 'pmbd_catatan'
                                            //renderer: 'uppercase'
                                }
                            ]
                        }
                    ]
                }
            ],
            buttons: [
                {
                    text: 'Batal',
                    glyph: Glyphs.setIcon('cancel'),
                    cls: 'merah',
                    itemId: 'batalRacikan',
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