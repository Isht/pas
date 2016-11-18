Ext.define('Pas.view.nonretail.FormPenjualan', {
    extend: 'Ext.form.Panel',
    alias: 'widget.nonretail.formpenjualan',
    itemId: 'formPenjualanNr',
    border: false,
    title: "Form Penjualan",
    preventHeader: true,
    //    bodyStyle: bg,
    bodyPadding: '10 10 0 10',
    buttonAlign: 'right',
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 120,
        msgTarget: 'side'
    },
    autoScroll: true,
    initComponent: function () {
        var me = this,
                form = me;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Id Item Jual ',
                    name: 'id',
                    value: 0,
                    hidden: true,
                    readOnly: true
                },
                {
                    xtype: 'combobox',
                    width: 430,
//                            store: 'pljual.ZatAktifResepStore',
                    fieldLabel: 'Rekanan ',
                    displayField: 'za_nama',
                    valueField: 'id',
                    emptyText: "--Pilih Rekanan--",
                    name: 'rekanan',
                    minChars: 2,
                    triggerAction: 'all',
                    queryMode: 'remote',
                    allowBlank: true,
                    forceSelection: true,
                    listConfig: {
                        minWidth: 210
                    }
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'gridcombobox',
                            width: 403,
                            store: new Ext.store('stock.Stocks'),
                            fieldLabel: 'Zat Aktif ',
                            displayField: 'za_nama',
                            valueField: 'id',
                            emptyText: "--Pilih Zat Aktif--",
                            name: 'zat_aktif',
                            minChars: 2,
                            triggerAction: 'all',
                            queryMode: 'remote',
                            allowBlank: true,
                            forceSelection: true,
                            matchFieldWidth: false,
                            pickerAlign: 'bl',
                            gridCfg: {
                                store: new Ext.store('stock.Stocks'),
                                height: 200,
                                width: 400,
                                columns: [
                                    {
                                        text: 'No',
                                        width: 40,
                                        dataIndex: 'no'
                                    },
                                    {
                                        text: 'Subject',
                                        width: 120,
                                        dataIndex: 'subject'
                                    },
                                    {
                                        text: 'Credit',
                                        width: 60,
                                        dataIndex: 'credit'
                                    },
                                    {
                                        text: 'Debit',
                                        width: 60,
                                        dataIndex: 'debit'
                                    },
                                    {
                                        text: 'Summary',
                                        width: 200,
                                        dataIndex: 'summary'
                                    }
                                ]
                            }
                        },
                        {
                            xtype: 'button',
                            margins: '0 0 0 5',
                            action: 'resetZa',
                            glyph: Glyphs.setIcon('clear'),
                            cls: 'cust-btn biru'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: "combobox",
                            fieldLabel: 'Nama Dagang ',
                            name: 'juald_item_id',
                            itemId: 'juald_item_id',
                            triggerAction: 'all',
                            width: 429,
//                    store: 'pljual.ItemStore',
                            displayField: 'item_name_jual',
                            valueField: 'id_barang',
                            hidden: false,
                            disabled: false,
                            minChars: 2,
                            queryMode: 'remote',
                            allowBlank: true,
                            listConfig: {
                                itemTpl: '{item_name_jual}',
                                minWidth: 300
                            },
                            forceSelection: true,
                            emptyText: "--Nama Dagang Obat--",
                            valueNotFoundText: 'Tidak Ada Data'
                        },
                        {
                            xtype: 'numericfield',
                            margins: '0 0 0 5',
                            width: 150,
                            name: 'jual_biaya_kirim',
                            emptyText: '--Harga--',
                            readOnly: true
                        },
                        {
                            xtype: 'numberfield',
                            margins: '0 0 0 5',
                            width: 80,
                            hideTrigger: true,
                            name: 'jual_biaya_kirim',
                            emptyText: "--Jumlah--",
                            readOnly: true
                        },
                        {
                            xtype: 'combobox',
                            width: 104,
                            margins: '0 0 0 5',
//                            store: 'pljual.SatuanItemResepStore',
                            name: 'juald_satuan_id',
                            emptyText: '--Satuan--',
                            displayField: 'nama_satuan',
                            valueField: 'id_satuan',
                            readOnly: true,
                            triggerAction: 'all',
                            minChars: 2,
                            matchFieldWidth: false,
                            listConfig: {
                                itemTpl: '{nama_satuan}',
                                minWidth: 83
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Tambah (F9)',
                            margins: '0 0 0 5',
                            glyph: Glyphs.setIcon('add'),
                            cls: 'cust-btn biru'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});