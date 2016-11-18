/**
 * @author Isht.Ae
 */
Ext.define('Pas.view.stock.StockGrid', {
    extend: "Ext.grid.Panel",
    alias: "widget.stock.stockgrid",
    itemId: "stockGrid",
    title: "Data Barang",
    store: "stock.Stocks",
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
                emptyText: "Tidak ada data barang",
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
                            xtype: "button",
                            text: "Baru",
                            glyph: Glyphs.setIcon('add'),
                            cls: 'cust-btn biru',
                            itemId: 'NewBarang'
                        },
                        {
                            xtype: "button",
                            text: "Simpan",
                            glyph: Glyphs.setIcon('save'),
                            cls: 'cust-btn biru',
                            itemId: 'SaveBarang'
                        },
                        {
                            xtype: "button",
                            text: "Approve",
                            hidden: true,
                            glyph: Glyphs.setIcon('check'),
                            cls: 'cust-btn biru',
                            itemId: 'AppBarang'
                        },
                        {
                            xtype: "button",
                            text: "Lap Pembelian",
                            glyph: Glyphs.setIcon('report'),
                            cls: 'cust-btn hijau',
                            itemId: 'LapPembelian'
                        },
                        '->',
                        {
                            xtype: "button",
                            text: "Supplier",
                            itemId: "setSupp",
                            glyph: Glyphs.setIcon('truck'),
                            cls: 'cust-btn biru'
                        },
                        {
                            xtype: "button",
                            text: "Satuan",
                            itemId: "setSatuan",
                            glyph: Glyphs.setIcon('compass'),
                            cls: 'cust-btn orange'
                        },
                        {
                            xtype: "button",
                            text: "Harga Supplier",
                            itemId: "setHargaSupp",
                            glyph: Glyphs.setIcon('cash'),
                            cls: 'cust-btn hijau'
                        },
                        {
                            xtype: "button",
                            text: "Safety Stock",
                            itemId: "setSafetyStock",
                            glyph: Glyphs.setIcon('lock'),
                            cls: 'cust-btn merah'
                        },
                        {
                            xtype: "button",
                            text: "Embalance",
                            itemId: "setMarginRacikan",
                            glyph: Glyphs.setIcon('empire'),
                            cls: 'cust-btn biru'
                        },
                        {
                            xtype: "button",
                            text: "Margin Rekanan",
                            itemId: "setMarginRekanan",
                            glyph: Glyphs.setIcon('piechart'),
                            cls: 'cust-btn orange'
                        }
                    ]
                },
                {
                    xtype: "toolbar",
                    dock: "top",
                    itemId: 'toolbarform',
                    items: [
                        {
                            xtype: "form",
                            itemId: 'formBarangGrid',
                            bodyStyle: "background: transparent",
                            border: false,
                            width: '100%',
                            fieldDefaults: {
                                labelAlign: "right"
                            },
                            items: [
                                {
                                    xtype: "fieldset",
                                    title: "<strong>Data Barang</strong>",
                                    //	disabled: CABANG_ID === 1 ? false : true,
                                    margin: '5 10 0 10',
                                    padding: 5,
                                    collapsed: false,
                                    layout: {
                                        type: "hbox",
                                        pack: "start",
                                        align: "stretch"
                                    },
                                    items: [
                                        {
                                            xtype: "fieldcontainer",
                                            defaults: {
                                                width: 280
                                            },
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'ID ',
                                                    itemId: 'id_barang',
                                                    name: 'id_barang',
                                                    hidden: true,
                                                    readOnly: true
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Nama Barang ',
                                                    itemId: 'mi_name',
                                                    name: 'mi_name',
                                                    allowBlank: false
                                                },
                                                {
                                                    xtype: 'comboboxedit',
                                                    fieldLabel: 'Golongan ',
//                                                    store: 'gdbarang.GolonganStore',
                                                    displayField: 'nama_kelompok',
                                                    valueField: 'id',
                                                    itemId: 'mi_golongan',
                                                    name: 'mi_golongan',
                                                    trigger2Cls: 'x-form-new-trigger',
                                                    queryMode: 'remote',
                                                    triggerAction: 'all',
                                                    valueNotFoundText: 'NO DATA',
                                                    forceSelection: true,
                                                    allowBlank: false,
                                                    minChars: 2,
                                                    onTrigger2Click: function () {
                                                        var win = new Ext.widget('gdbarang.golonganwin');
                                                        win.down('#GolGrid').getStore().load();
                                                    }
                                                },
                                                {
                                                    xtype: "combobox",
                                                    fieldLabel: "Jenis Barang ",
                                                    itemId: "mi_jenis",
                                                    name: "mi_jenis",
                                                    displayField: 'name',
                                                    valueField: 'value',
                                                    allowBlank: false,
                                                    store: Ext.create('Ext.data.Store', {
                                                        fields: ['name', 'value'],
                                                        data: [
                                                            {name: 'Inventaris', value: 0},
                                                            {name: 'Persediaan', value: 1},
                                                            {name: 'Non Persediaan', value: 2}
                                                        ]
                                                    }),
                                                    value: 1
                                                }
                                            ]
                                        },
                                        {
                                            xtype: "fieldcontainer",
                                            defaults: {
                                                width: 280
                                            },
                                            items: [
                                                {
                                                    xtype: "comboboxedit",
                                                    fieldLabel: "Zat Aktif ",
                                                    itemId: "mi_zataktif",
                                                    name: "mi_zataktif",
//                                                    store: 'gdbarang.ZatAktifStore',
                                                    displayField: 'za_nama',
                                                    valueField: 'id',
                                                    trigger2Cls: 'x-form-new-trigger',
                                                    queryMode: 'remote',
                                                    triggerAction: 'all',
                                                    valueNotFoundText: 'NO DATA',
                                                    forceSelection: true,
                                                    allowBlank: false,
                                                    minChars: 2,
                                                    onTrigger2Click: function () {
                                                        var win = new Ext.widget('gdbarang.zataktifwin');
                                                        win.down('#ZaGrid').getStore().load();
                                                    }
                                                },
                                                {
                                                    xtype: 'fieldcontainer',
                                                    layout: 'hbox',
                                                    items: [
                                                        {
                                                            xtype: 'textfield',
                                                            fieldLabel: 'Dosis ',
                                                            width: 155,
                                                            itemId: 'mi_dosis',
                                                            name: 'mi_dosis',
                                                            margins: '0 5 0 0',
                                                            allowBlank: false
                                                        },
                                                        {
                                                            xtype: 'comboboxedit',
                                                            width: 120,
//                                                            store: 'gdbarang.DosisStore',
                                                            displayField: 'sd_nama',
                                                            valueField: 'id',
                                                            trigger2Cls: 'x-form-new-trigger',
                                                            queryMode: 'remote',
                                                            triggerAction: 'all',
                                                            valueNotFoundText: 'NO DATA',
                                                            forceSelection: true,
                                                            allowBlank: false,
                                                            minChars: 2,
                                                            onTrigger2Click: function () {
                                                                var win = new Ext.widget('gdbarang.dosiswin');
                                                                win.down('#DosisGrid').getStore().load();
                                                            },
                                                            itemId: 'mi_dosis_satuan',
                                                            name: 'mi_dosis_satuan'
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: "comboboxedit",
                                                    fieldLabel: "Tipe Obat ",
                                                    itemId: "mi_type",
                                                    name: "mi_type",
//                                                    store: 'gdbarang.SubTipeObatStore',
                                                    displayField: 'nama',
                                                    valueField: 'id',
                                                    trigger2Cls: 'x-form-new-trigger',
                                                    queryMode: 'remote',
                                                    triggerAction: 'all',
                                                    valueNotFoundText: 'NO DATA',
                                                    forceSelection: true,
                                                    allowBlank: false,
                                                    minChars: 2,
                                                    onTrigger2Click: function () {
                                                        var win = new Ext.widget('gdbarang.tipeobatwin');
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            xtype: "fieldcontainer",
                                            layout: 'vbox',
                                            defaults: {
                                                width: 280
                                            },
                                            items: [
                                                {
                                                    xtype: "comboboxedit",
                                                    fieldLabel: "Sediaan ",
                                                    itemId: "mi_sediaan",
                                                    name: "mi_sediaan",
//                                                    store: 'gdbarang.SediaanStore',
                                                    displayField: 'ms_namasediaan',
                                                    valueField: 'id',
                                                    trigger2Cls: 'x-form-new-trigger',
                                                    queryMode: 'remote',
                                                    triggerAction: 'all',
                                                    valueNotFoundText: 'NO DATA',
                                                    forceSelection: true,
                                                    allowBlank: false,
                                                    minChars: 2,
                                                    onTrigger2Click: function () {
                                                        var win = new Ext.widget('gdbarang.sediaanwin');
                                                        win.down('#SediaanGrid').getStore().load();
                                                    }
                                                },
                                                Ext.create('Ext.ux.form.NumericField', {
                                                    fieldLabel: 'Harga Jual Dasar ',
                                                    name: 'mi_harga',
                                                    itemId: 'mi_harga',
                                                    decimalPrecision: 2,
                                                    decimalSeparator: '.',
                                                    alwaysDisplayDecimals: true,
                                                    allowNegative: false,
                                                    minValue: 0.000001, //prevents negative numbers
                                                    // Remove spinner buttons, and arrow key and mouse wheel listeners
                                                    keyNavEnabled: false,
                                                    mouseWheelEnabled: false,
                                                    allowBlank: false,
                                                    hideTrigger: true,
                                                    hidden: false,
                                                    value: 0
                                                }),
                                                {
                                                    xtype: 'fieldcontainer',
                                                    layout: 'hbox',
                                                    items: [
                                                        {
                                                            xtype: 'numberfield',
                                                            fieldLabel: 'Diskon ',
                                                            name: 'mi_disc',
                                                            itemId: 'mi_disc',
                                                            decimalPrecision: 2,
                                                            margins: '0 5 0 0',
                                                            decimalSeparator: '.',
                                                            width: 200,
                                                            alwaysDisplayDecimals: true,
                                                            allowNegative: false,
                                                            // Remove spinner buttons, and arrow key and mouse wheel listeners
                                                            keyNavEnabled: false,
                                                            mouseWheelEnabled: false,
                                                            allowBlank: false,
                                                            hideTrigger: true,
                                                            hidden: false,
                                                            emptyText: '000',
                                                            value: 0
                                                        },
                                                        {
                                                            xtype: 'checkbox',
                                                            width: 50,
                                                            boxLabel: 'PPN',
                                                            margins: '0 0 0 5',
                                                            name: 'mi_ppn',
                                                            itemId: 'mi_ppn',
                                                            inputValue: 1,
                                                            uncheckedValue: 0
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: "fieldcontainer",
                                            layout: 'vbox',
                                            defaults: {
                                                width: 280
                                            },
                                            items: [
                                                {
                                                    xtype: 'combobox',
                                                    fieldLabel: 'Satuan Jual ',
                                                    itemId: 'mi_satuan_jual',
                                                    name: 'mi_satuan_jual',
//                                                    store: 'gdbarang.SatuanItemStore',
                                                    displayField: 'nama_satuan',
                                                    valueField: 'id_satuan',
                                                    valueNotFoundText: 'NO DATA',
                                                    forceSelection: true,
                                                    allowBlank: false,
                                                    minChars: 2,
                                                    disabled: true,
                                                    hidden: true
                                                },
                                                {
                                                    xtype: "radiogroup",
                                                    fieldLabel: "Aktif ",
                                                    items: [
                                                        {
                                                            boxLabel: "Ya",
                                                            name: "mi_is_active",
                                                            width: 30,
                                                            inputValue: 1,
                                                            checked: true
                                                        },
                                                        {
                                                            boxLabel: "Tidak",
                                                            width: 60,
                                                            name: "mi_is_active",
                                                            inputValue: 0,
                                                            checked: false
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: "radiogroup",
                                                    fieldLabel: "Exp Date ",
                                                    items: [
                                                        {
                                                            boxLabel: "Ya",
                                                            name: "mi_is_expdate",
                                                            width: 30,
                                                            inputValue: 1,
                                                            checked: false
                                                        },
                                                        {
                                                            boxLabel: "Tidak",
                                                            width: 60,
                                                            name: "mi_is_expdate",
                                                            inputValue: 0,
                                                            checked: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'checkbox',
                                                    fieldLabel: "Tampil di Web ",
                                                    width: 160,
                                                    boxLabel: 'Ya',
                                                    margins: '0 0 0 5',
                                                    name: 'is_tampil',
                                                    itemId: 'is_tampil',
                                                    checked: true,
                                                    inputValue: 1,
                                                    uncheckedValue: 0
                                                },
                                                {
                                                    xtype: "radiogroup",
                                                    fieldLabel: "PO Cabang ",
                                                    hidden: true,
                                                    items: [
                                                        {
                                                            boxLabel: "Ya",
                                                            name: "mi_status_po",
                                                            width: 40,
                                                            inputValue: 1,
                                                            checked: true
                                                        },
                                                        {
                                                            boxLabel: "Tidak",
                                                            width: 60,
                                                            name: "mi_status_po",
                                                            inputValue: 0,
                                                            checked: false
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: "fieldset",
                                    title: "<strong>Filter Barang</strong>",
                                    collapsed: false,
                                    margin: '5 10',
                                    padding: 5,
                                    layout: {
                                        type: "hbox",
                                        pack: "start"
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '<b>Nama Barang</b> ',
                                            width: 375,
                                            name: 'txtNamaBarang',
                                            itemId: 'txtNamaBarang',
                                            emptyText: 'Ketik kata kunci dan tekan enter'
                                        },
                                        {
                                            xtype: 'combobox',
                                            fieldLabel: '<b>Jenis Barang</b> ',
                                            labelWidth: 95,
                                            name: 'cmbJenisBarang',
                                            itemId: 'cmbJenisBarang',
                                            displayField: 'name',
                                            valueField: 'value',
                                            minChars: 2,
                                            store: Ext.create('Ext.data.Store', {
                                                fields: ['name', 'value'],
                                                data: [
                                                    {name: 'Inventaris', value: 0},
                                                    {name: 'Persediaan', value: 1},
                                                    {name: 'Non Persediaan', value: 2}
                                                ]
                                            })
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    xtype: 'combobox',
                                                    width: 253,
                                                    fieldLabel: '<b>Zat Aktif</b> ',
                                                    labelWidth: 70,
                                                    itemId: 'cmbZatAktif',
                                                    name: 'cmbZatAktif',
                                                    store: 'stock.StocksZatActive',
                                                    minChars: 2,
                                                    forceSelection: true,
                                                    displayField: 'zatActiveName',
                                                    valueField: 'id'
                                                },
                                                {
                                                    xtype: "button",
                                                    tooltip: "Cari Data",
                                                    margin: "0 0 0 3",
                                                    action: "searchStockData",
                                                    glyph: Glyphs.setIcon('search'),
                                                    cls: 'cust-btn biru'
                                                },
                                                {
                                                    xtype: "button",
                                                    tooltip: "All Data",
                                                    margin: "0 0 0 3",
                                                    action: "showAllData",
                                                    glyph: Glyphs.setIcon('clear'),
                                                    cls: 'cust-btn merah'
                                                },
                                                {
                                                    xtype: "button",
                                                    tooltip: "Refresh Data",
                                                    margin: "0 0 0 3",
                                                    action: "refreshData",
                                                    glyph: Glyphs.setIcon('refresh'),
                                                    cls: 'cust-btn orange'
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
            columns: [
                Ext.create("Ext.grid.RowNumberer", {
                    width: 40
                }),
                {
                    text: "Nama Barang",
                    width: 230,
                    dataIndex: "itemName",
                    filter: {
                        type: 'string'
                    }
                },
                {
                    text: "Golongan",
                    width: 120,
                    dataIndex: "golBarangName"
                },
                {
                    text: "Jenis Barang",
                    width: 80,
                    dataIndex: "jenisBarang",
                    align: "center",
                    renderer: function (value, meta, record) {
                        if (value === 0) {
                            return 'INVENTARIS';
                        } else if (value === 1) {
                            return 'PERSEDIAAN';
                        } else if (value === 2) {
                            return 'NON PERSEDIAAN';
                        }
                    }
                },
                {
                    text: "Zat Aktif",
                    width: 140,
                    dataIndex: "zatAktifName"
                },
                {
                    xtype: 'numbercolumn',
                    format: '000',
                    text: "Stok Min",
                    width: 50,
                    dataIndex: "minStock",
                    align: "center"
                },
                {
                    xtype: 'numbercolumn',
                    format: '000',
                    text: "Stok Maks",
                    width: 50,
                    dataIndex: "maxStock",
                    align: "center"
                },
                {
                    xtype: 'numbercolumn',
                    format: '000',
                    text: "Stok Akhir",
                    width: 50,
                    dataIndex: "currentStock",
                    align: "center"
                },
                {
                    xtype: 'numbercolumn',
                    text: "Harga Dasar",
                    width: 80,
                    align: "right",
                    dataIndex: "hargaDasar"
                },
                {
                    xtype: 'numbercolumn',
                    text: "Harga Jual",
                    width: 80,
                    align: "right",
                    dataIndex: "hargaJualBarang"
                }
            ]
        });
        me.callParent(arguments);
    }
});