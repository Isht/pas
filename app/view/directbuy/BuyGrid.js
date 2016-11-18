/**
 * @author Isht.Ae
 */
Ext.define('Pas.view.directbuy.BuyGrid', {
    extend: "Ext.grid.Panel",
    alias: "widget.directbuy.buygrid",
    itemId: "buygrid",
    title: "Pembelian Langsung",
//    store: "gdbeli.BeliDetailMemStore",
    columnLines: true,
    flex: 1,
    forceFit: true,
    glyph: Glyphs.setIcon('list'),
    cls: 'putih',
    initComponent: function () {
        var me = this,
                grid = me;

        Ext.applyIf(me, {
            viewConfig: {
                autoScroll: true,
                emptyText: "Tidak ada item barang",
                deferEmptyText: false,
                stripeRows: false,
                trackOver: false
            },
            dockedItems: [
                {
                    xtype: "toolbar",
                    dock: "top",
                    itemId: 'tbAction',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Simpan',
                            glyph: Glyphs.setIcon('save'),
                            cls: 'cust-btn biru',
                            itemId: 'saveBeli'
                        },
                        {
                            xtype: 'button',
                            text: 'Batal',
                            glyph: Glyphs.setIcon('cancel'),
                            cls: 'cust-btn orange',
                            itemId: 'batalBeli'
                        },
                        '->',
                        {
                            xtype: 'button',
                            text: 'Insert Lot',
                            iconCls: 'icon-barcode',
                            itemId: 'addItemLot',
                            hidden: true
                        },
                        {
                            xtype: 'button',
                            text: 'Tambah',
                            glyph: Glyphs.setIcon('add'),
                            cls: 'cust-btn biru',
                            itemId: 'addItem'
                        },
                        {
                            xtype: 'button',
                            text: 'Hapus',
                            glyph: Glyphs.setIcon('del'),
                            cls: 'cust-btn merah',
                            itemId: 'hapusBeli'
                        }
                    ]
                },
                {
                    xtype: "toolbar",
                    dock: "top",
                    itemId: 'tbbtmform',
                    items: [
                        {
                            xtype: "form",
                            itemId: 'FormBeli',
                            bodyStyle: "background: transparent",
                            margin: '5 10',
                            width: '350',
                            border: false,
                            layout: {
                                type: "hbox",
                                pack: "start",
                                align: "stretch"
                            },
                            fieldDefaults: {
                                anchor: "100%",
                                labelAlign: "right"
                            },
                            items: [
                                {
                                    xtype: "fieldset",
                                    title: "<strong>Detail Pembelian</strong>",
                                    collapsed: false,
                                    itemId: 'StatusBarang',
                                    items: [
                                        {
                                            xtype: "combobox",
                                            fieldLabel: 'Nama Supplier ',
                                            name: 'po_suppid',
                                            itemId: 'po_suppid',
                                            triggerAction: 'all',
//                                            store: 'gdbeli.SupplierStore',
                                            displayField: 'ms_name',
                                            valueField: 'id',
                                            minChars: 2,
                                            width: 377,
                                            queryMode: 'remote',
                                            allowBlank: false,
                                            listConfig: {
                                                itemTpl: '{ms_name}',
                                                minWidth: 200
                                            },
                                            forceSelection: true,
                                            emptyText: "Supplier",
                                            valueNotFoundText: 'Tidak Ada Data',
                                            listeners: {
                                                select: function () {
                                                    var val = this.getValue(),
                                                            barangStore = grid.down("#barang_id").getStore();

                                                    barangStore.clearFilter(true);
                                                    barangStore.filter("dih_suppid", val);
                                                    grid.down("#barang_id").setReadOnly(false);
                                                    grid.down("#barang_qty").setReadOnly(false);
                                                    grid.down("#barang_harga").setReadOnly(false);
                                                    grid.down("#barang_disc_ext").setReadOnly(false);
                                                    grid.down("#barang_ket").setReadOnly(false);
                                                }
                                            }
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    xtype: 'checkbox',
                                                    fieldLabel: 'Brng. Diterima ',
                                                    boxLabel: 'Ya',
                                                    name: 'po_ttstatus',
                                                    itemId: 'po_ttstatus',
                                                    inputValue: 1,
                                                    width: 140,
                                                    listeners: {
                                                        change: function (rb, nv, ov, options) {
                                                            if (nv) {
                                                                grid.down('#tt_penerima').enable();
                                                                grid.down('#faktur_no').enable();
                                                            } else {
                                                                grid.down('#tt_penerima').disable();
                                                                grid.down('#faktur_no').disable();
                                                            }
                                                        }
                                                    }
                                                },
                                                {
                                                    xtype: "textfield",
                                                    width: 237,
                                                    labelWidth: 75,
                                                    fieldLabel: 'Penerima ',
                                                    name: 'tt_penerima',
                                                    itemId: 'tt_penerima',
                                                    disabled: true,
                                                    allowBlank: false,
                                                    forceSelection: true
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'checkbox',
                                            fieldLabel: 'Lunas ',
                                            boxLabel: 'Ya',
                                            name: 'po_tfstatus',
                                            itemId: 'po_tfstatus',
                                            checked: true,
                                            inputValue: 1,
                                            listeners: {
                                                change: function (rb, nv, ov, options) {
                                                    if (nv) {
                                                        grid.down('#faktur_realisasi').disable();
                                                    } else {
                                                        grid.down('#faktur_realisasi').enable();
                                                    }
                                                }
                                            }
                                        },
                                        Ext.create("Ext.ux.form.NumericField", {
                                            fieldLabel: "Disc. Transaksi ",
                                            name: "po_disc_value",
                                            itemId: "po_disc_value",
                                            flex: 1,
                                            decimalPrecision: 2,
                                            decimalSeparator: '.',
                                            alwaysDisplayDecimals: true,
                                            allowNegative: false,
                                            minValue: 0,
                                            width: 300,
                                            value: 0,
                                            hideTrigger: true,
                                            keyNavEnabled: false,
                                            mouseWheelEnabled: false,
//                            allowBlank: false,
                                            readOnly: false,
                                            listeners: {
                                                change: function () {
//                                                    var val = this.getValue();
//                                                    var valTrx = form.down('#po_value').getValue(), nilai = 0;
//                                                    if (val !== 0 && valTrx !== 0) {
//                                                        var disc = (val / 100) * valTrx;
//                                                        nilai = valTrx - disc;
//                                                        form.down('#po_netto').setValue(nilai);
//                                                    }
                                                }
                                            }
                                        }),
                                        Ext.create('Ext.ux.form.NumericField', {
                                            decimalPrecision: 2,
                                            decimalSeparator: ',',
                                            minValue: 0,
                                            allowNegative: false,
                                            alwaysDisplayDecimals: true,
                                            allowBlank: false,
                                            value: 0,
                                            width: 300,
                                            hideTrigger: true,
                                            name: 'faktur_realisasi',
                                            itemId: 'faktur_realisasi',
                                            fieldLabel: "Kurang Bayar ",
                                            emptyText: "Rp. 0,00",
                                            disabled: true,
                                            readOnly: false
                                        }),
                                        {
                                            xtype: 'textfield',
                                            width: 300,
                                            padding: '0 0 2 0',
                                            fieldLabel: 'No Faktur/Nota ',
                                            name: 'faktur_no',
                                            itemId: 'faktur_no',
                                            disabled: true,
                                            allowBlank: false
                                        },
                                        Ext.create('Ext.ux.form.NumericField', {
                                            decimalPrecision: 2,
                                            decimalSeparator: ',',
                                            minValue: 0,
                                            allowNegative: false,
                                            alwaysDisplayDecimals: true,
                                            allowBlank: false,
                                            value: 0,
                                            hideTrigger: true,
                                            itemId: 'TotalBeli',
                                            name: 'TotalBeli',
                                            fieldLabel: "Total Pembelian ",
                                            emptyText: "Rp. 0,00",
                                            disabled: false,
                                            readOnly: true,
                                            hidden: true
                                        })
                                    ]
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    layout: 'vbox',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            width: 300,
                                            fieldLabel: 'id_po_detail ',
                                            name: 'id_po_detail',
                                            itemId: 'id_po_detail',
                                            disabled: false,
                                            allowBlank: true,
                                            hidden: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            width: 300,
                                            fieldLabel: 'barang_dosis ',
                                            name: 'barang_dosis',
                                            itemId: 'barang_dosis',
                                            disabled: false,
                                            allowBlank: true,
                                            hidden: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            width: 300,
                                            fieldLabel: 'satuan_dosis ',
                                            name: 'satuan_dosis',
                                            itemId: 'satuan_dosis',
                                            disabled: false,
                                            allowBlank: true,
                                            hidden: true
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    layout: 'vbox',
                                    items: [
                                        {
                                            xtype: "fieldset",
                                            title: "<strong>Data Barang</strong>",
                                            collapsed: false,
                                            itemId: 'databarang',
                                            layout: "hbox",
                                            margin: "0 0 0 10",
                                            items: [
                                                {
                                                    xtype: "fieldcontainer",
                                                    defaults: {
                                                        width: 300
                                                    },
                                                    items: [
                                                        {
                                                            xtype: "combobox",
                                                            fieldLabel: "Barang ",
                                                            name: "barang_id",
                                                            itemId: "barang_id",
                                                            allowBlank: true,
                                                            triggerAction: "all",
                                                            hideTrigger: false,
                                                            mode: "remote",
                                                            minChars: 2,
//                                                            store: "gdbeli.ItemStore",
                                                            displayField: "mi_name",
                                                            valueField: "barang_id",
                                                            forceSelection: true,
                                                            valueNotFoundText: "Tidak ada barang",
                                                            emptyText: "ketik nama barang",
                                                            matchFieldWidth: false,
                                                            readOnly: true,
                                                            listConfig: {
                                                                shadow: "side",
                                                                minWidth: 230
                                                            },
                                                            listeners: {
                                                                select: function () {
                                                                    var id = this.getValue(),
                                                                            record = this.findRecordByValue(id),
                                                                            store = this.up('form').getForm().findField('barang_satuan').getStore();

                                                                    if (id) {
                                                                        store.clearFilter(true);
                                                                        store.filter('dih_itemid', id);
                                                                    }
                                                                    this.up('form').getForm().findField('barang_disc').setValue(record.get('dih_disc'));
                                                                    this.up('form').getForm().findField('barang_name').setValue(record.get('mi_name'));
                                                                    this.up('form').getForm().findField('barang_satuan').setReadOnly(false);
                                                                    this.up('form').getForm().findField('barang_satuan').setValue(record.get('dih_satuanid'));
                                                                    this.up('form').getForm().findField('barang_harga').setValue(record.get('dih_price'));
                                                                    this.up('form').getForm().findField('barang_ppn').setValue(record.get('dih_ppn'));
                                                                }
                                                            }
                                                        },
                                                        {
                                                            xtype: "fieldcontainer",
                                                            width: 300,
                                                            layout: "hbox",
                                                            items: [
                                                                {
                                                                    xtype: "numberfield",
                                                                    width: 165,
                                                                    name: "barang_qty",
                                                                    itemId: "barang_qty",
                                                                    hidden: false,
                                                                    fieldLabel: "Jumlah Barang",
                                                                    allowNegative: false,
                                                                    minValue: 1,
                                                                    hideTrigger: true,
                                                                    keyNavEnabled: false,
                                                                    mouseWheelEnabled: false,
                                                                    allowBlank: true,
                                                                    readOnly: true
                                                                },
                                                                {
                                                                    xtype: "combobox",
                                                                    name: "barang_satuan",
                                                                    itemId: "barang_satuan",
                                                                    hidden: false,
                                                                    margin: "0 0 0 5",
                                                                    width: 130,
                                                                    triggerAction: "all",
                                                                    mode: "remote",
//                                                                    store: "gdbeli.SatuanItemResepStore",
                                                                    displayField: "nama_satuan",
                                                                    valueField: "dih_satuanid",
                                                                    forceSelection: true,
                                                                    matchFieldWidth: false,
                                                                    readOnly: true,
                                                                    emptyText: "Pilih Satuan",
                                                                    listConfig: {
                                                                        shadow: "side",
                                                                        minWidth: 180
                                                                    },
                                                                    listeners: {
                                                                        select: function () {
                                                                            var id = this.getValue(),
                                                                                    record = this.findRecordByValue(id);

                                                                            this.up('form').getForm().findField('satuan_name').setValue(record.get('nama_satuan'));
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    xtype: "textfield",
                                                                    fieldLabel: "Katalog ",
                                                                    name: "satuan_name",
                                                                    itemId: "satuan_name",
                                                                    emptyText: "No Katalog",
                                                                    width: 135,
                                                                    labelWidth: 50,
                                                                    hidden: true,
                                                                    readOnly: true,
                                                                    fieldCls: "x-item-readonly"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            xtype: "fieldcontainer",
                                                            width: 300,
                                                            layout: "hbox",
                                                            items: [
                                                                Ext.create("Ext.ux.form.NumericField", {
                                                                    fieldLabel: "Harga ",
                                                                    name: "barang_harga",
                                                                    itemId: "barang_harga",
                                                                    flex: 1,
                                                                    width: 160,
                                                                    decimalPrecision: 2,
                                                                    decimalSeparator: ".",
                                                                    alwaysDisplayDecimals: true,
                                                                    allowNegative: false,
                                                                    minValue: 0,
                                                                    value: 0,
                                                                    hideTrigger: true,
                                                                    keyNavEnabled: false,
                                                                    mouseWheelEnabled: false,
                                                                    allowBlank: true,
                                                                    readOnly: true
                                                                }),
                                                                {
                                                                    xtype: "textfield",
                                                                    fieldLabel: "Katalog ",
                                                                    name: "barang_name",
                                                                    itemId: "barang_name",
                                                                    emptyText: "No Katalog",
                                                                    width: 135,
                                                                    labelWidth: 50,
                                                                    hidden: true,
                                                                    readOnly: true,
                                                                    fieldCls: "x-item-readonly"
                                                                },
                                                                {
                                                                    xtype: "numberfield",
                                                                    fieldLabel: "PPN ",
                                                                    name: "barang_ppn",
                                                                    itemId: "barang_ppn",
                                                                    emptyText: "No Katalog",
                                                                    width: 135,
                                                                    labelWidth: 50,
                                                                    hidden: true,
                                                                    readOnly: true,
                                                                    fieldCls: "x-item-readonly"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: "fieldcontainer",
                                                    defaults: {
                                                        width: 300
                                                    },
                                                    items: [
                                                        {
                                                            xtype: "fieldcontainer",
                                                            width: 300,
                                                            layout: "hbox",
                                                            items: [
                                                                Ext.create("Ext.ux.form.NumericField", {
                                                                    fieldLabel: "Diskon ",
                                                                    name: "barang_disc",
                                                                    itemId: "barang_disc",
                                                                    flex: 1,
                                                                    width: 130,
                                                                    decimalPrecision: 2,
                                                                    decimalSeparator: ".",
                                                                    alwaysDisplayDecimals: true,
                                                                    allowNegative: false,
                                                                    minValue: 0,
                                                                    value: 0,
                                                                    hideTrigger: true,
                                                                    keyNavEnabled: false,
                                                                    mouseWheelEnabled: false,
                                                                    allowBlank: true,
                                                                    readOnly: true
                                                                }),
                                                                {
                                                                    xtype: "numberfield",
                                                                    name: "barang_disc_ext",
                                                                    itemId: "barang_disc_ext",
                                                                    emptyText: "Disc. Tambahan",
                                                                    width: 135,
                                                                    labelWidth: 50,
                                                                    hidden: false,
                                                                    readOnly: true,
                                                                    hideTrigger: true,
                                                                    margin: "0 0 0 5",
                                                                    fieldCls: "x-item-readonly"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            xtype: "textareafield",
                                                            height: 50,
                                                            fieldLabel: "Keterangan ",
                                                            //disable: true,
                                                            readOnly: true,
                                                            name: "barang_ket",
                                                            itemId: "barang_ket"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            bbar: [
                '->',
                {
                    xtype: "tbtext",
                    height: 35,
                    itemId: "TotalBeliLgsg",
                    name: 'TotalBeliLgsg',
                    cls: "daftar-total-view",
                    text: "Total Pembelian : Rp. 0.00"
                }
            ],
            columns: [
                Ext.create("Ext.grid.RowNumberer", {
                    width: 30
                }),
                {
                    xtype: "gridcolumn",
                    width: 180,
                    text: "Nama Barang",
                    dataIndex: "barang_name"
                },
                {
                    xtype: "numbercolumn",
                    width: 40,
                    text: "Qty.",
                    align: "center",
                    dataIndex: "barang_qty"
                },
                {
                    xtype: "gridcolumn",
                    width: 60,
                    text: "Satuan",
                    align: "center",
                    dataIndex: "satuan_name"
                },
                {
                    xtype: "numbercolumn",
                    text: "Harga",
                    width: 80,
                    align: "right",
                    dataIndex: "barang_harga"
                },
                {
                    xtype: "numbercolumn",
                    text: "Dic. Total",
                    width: 40,
                    align: "center",
                    dataIndex: "barang_disc_total"
                },
                {
                    xtype: "numbercolumn",
                    text: "PPN",
                    width: 40,
                    align: "center",
                    dataIndex: "barang_ppn"
                },
                {
                    xtype: "numbercolumn",
                    text: "Netto",
                    width: 80,
                    align: "right",
                    dataIndex: "barang_netto"
                },
                {
                    xtype: "gridcolumn",
                    text: "Keterangan",
                    width: 150,
                    dataIndex: "barang_ket"
                }
            ]
        });
        me.callParent(arguments);
    }
});