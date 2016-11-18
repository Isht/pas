Ext.define('Pas.view.retail.FormDetailPenjualan', {
    extend: 'Ext.form.Panel',
    alias: 'widget.retail.formdetailpenjualan',
    itemId: 'formDetailPenjualan',
    border: false,
    title: "Form Detail Penjualan",
    preventHeader: true,
    //    bodyStyle: bg,
    bodyPadding: '0 10 5 10',
    buttonAlign: 'right',
//    layout: {
//        type: 'hbox',
//        align: 'stretch',
//        pack: 'start'
//    },
    layout: 'column',
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 100,
        msgTarget: 'side'
    },
    autoScroll: true,
    initComponent: function () {
        var me = this,
                form = me;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldcontainer',
                    columnWidth: 1,
                    layout: 'vbox',
                    items: [
                        {
                            xtype: "fieldset",
                            title: "<b>Data Resep</b>",
                            itemId: 'dataResep',
                            items: [
                                {
                                    xtype: 'fieldcontainer',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: "combobox",
                                            width: 438,
                                            labelWidth: 88,
                                            fieldLabel: 'Nama Pasien ',
                                            name: 'CMB_PASIEN_ID',
                                            itemId: 'CMB_PASIEN_ID',
                                            triggerAction: 'all',
                                            store: 'retail.DataPasien',
                                            displayField: 'pasienName',
                                            valueField: 'id',
                                            minChars: 2,
                                            queryMode: 'remote',
                                            allowBlank: false,
                                            forceSelection: true,
                                            emptyText: "Masukkan Nama Pasien",
                                            valueNotFoundText: 'Tidak Ada Data',
                                            matchFieldWidth: false,
                                            listConfig: {
                                                minWidth: 350,
                                                itemTpl: '<div style="border-bottom: 1px dotted #0081B7;padding:1px 3px;font-size: 11px;"><ul class="item-render"><li style="min-width:350px">{pasienName}</li></ul></div>'
                                            }
                                        },
                                        {
                                            xtype: 'button',
                                            margins: '0 0 0 5',
                                            tooltip: 'Tambah',
                                            glyph: Glyphs.setIcon('add'),
                                            cls: 'cust-btn biru',
                                            action: 'addPasien',
                                            disabled: false
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'checkbox',
                                            fieldLabel: 'Resep ',
                                            labelWidth: 88,
                                            boxLabel: 'Ya',
                                            name: 'CHK_IS_RESEP',
                                            uncheckedValue: 0,
                                            inputValue: 1
                                        },
                                        {
                                            xtype: "combobox",
                                            width: 314,
                                            labelWidth: 105,
                                            fieldLabel: 'Nama Dokter ',
                                            name: 'CMB_DOKTER_ID',
                                            itemId: 'CMB_DOKTER_ID',
                                            triggerAction: 'all',
                                            store: 'retail.DataDokter',
                                            displayField: 'dokterName',
                                            valueField: 'id',
                                            minChars: 2,
                                            queryMode: 'remote',
                                            disabled: true,
                                            allowBlank: false,
                                            forceSelection: true,
                                            emptyText: "Masukkan Nama Dokter",
                                            valueNotFoundText: 'Tidak Ada Data',
                                            matchFieldWidth: false,
                                            listConfig: {
                                                minWidth: 210,
                                                itemTpl: '<div style="border-bottom: 1px dotted #0081B7;padding:1px 3px;font-size: 11px;"><ul class="item-render"><li style="min-width:210px">{dokterName}</li></ul></div>'
                                            },
                                            listeners: {
                                                select: function () {
                                                    var val = this.getValue();

                                                    if (val === 731) {
                                                        Ext.Msg.alert('Info', 'Dokter tidak dapat di pilih.');
                                                        this.setValue();
                                                        return;
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            xtype: 'button',
                                            margins: '0 0 0 5',
                                            tooltip: 'Tambah',
                                            glyph: Glyphs.setIcon('add'),
                                            cls: 'cust-btn biru',
                                            action: 'addDokter',
                                            itemId: 'newDokter',
                                            disabled: true,
                                            disabledCls: 'cust-btn-disabled'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'checkbox',
                                            fieldLabel: 'Pengiriman ',
                                            width: 138,
                                            labelWidth: 88,
                                            boxLabel: 'Ya',
                                            name: 'CHK_IS_KIRIM',
                                            uncheckedValue: 0,
                                            inputValue: 1
                                        },
                                        {
                                            xtype: 'checkbox',
                                            width: 82,
                                            boxLabel: 'Biaya',
                                            margins: '0 0 0 14',
                                            name: 'CHK_IS_BIAYA',
                                            itemId: 'CHK_IS_BIAYA',
                                            disabled: true,
                                            inputValue: 1,
                                            uncheckedValue: 0
                                        },
                                        {
                                            xtype: 'numericfield',
                                            width: 204,
                                            hideTrigger: true,
                                            name: 'NUM_BIAYA_KIRIM',
                                            itemId: 'NUM_BIAYA_KIRIM',
                                            emptyText: "Rp. 0,00",
                                            disabled: true
                                        }
                                    ]
                                },
                                {
                                    xtype: 'textareafield',
                                    width: 438,
                                    labelWidth: 88,
                                    fieldLabel: "Alamat Kirim ",
                                    name: 'TXA_ALAMAT_KIRIM',
                                    itemId: 'TXA_ALAMAT_KIRIM',
                                    height: 50,
                                    disabled: true
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'vbox',
                    width: 500,
                    defaults: {
                        width: 480,
                        labelWidth: 160
                    },
                    items: [
                        {
                            xtype: 'numericfield',
                            readOnly: true,
                            value: 0,
                            fieldLabel: 'Sub Total ',
                            name: 'NUM_SUB_TOTAL'
                        },
                        {
                            xtype: "fieldcontainer",
                            layout: "hbox",
                            width: 500,
                            items: [
                                {
                                    xtype: 'combobox',
                                    hideTrigger: false,
                                    labelWidth: 160,
                                    width: 265,
                                    name: 'CMD_DISC_TYPE',
                                    fieldLabel: "Diskon ",
                                    emptyText: "-Pilih-",
                                    store: 'retail.StocksDiskon',
                                    displayField: 'diskonName',
                                    valueField: 'id',
                                    disabled: false,
                                    matchFieldWidth: false,
                                    listConfig: {
                                        minWidth: 100,
                                        itemTpl: '<div style="border-bottom: 1px dotted #0081B7;padding:1px 3px;font-size: 11px;"><ul class="item-render"><li style="min-width:100px">{diskonName} <span style="color:#666">[ {diskonValue}% ]</span></li></ul></div>'
                                    }
                                },
                                {
                                    xtype: 'numericfield',
                                    name: 'NUM_DISC_VALUE',
                                    value: 0,
                                    margin: '0 0 0 5',
                                    width: 150,
                                    labelWidth: 25,
                                    fieldLabel: 'Rp ',
                                    minValue: 0,
                                    hidden: false,
                                    decimalPrecision: 2,
                                    decimalSeparator: ',',
                                    alwaysDisplayDecimals: true,
                                    allowNegative: false,
                                    keyNavEnabled: false,
                                    mouseWheelEnabled: false,
                                    readOnly: true
                                },
                                {
                                    xtype: 'checkbox',
                                    margins: '0 0 0 10',
                                    width: 50,
                                    boxLabel: 'PPN',
                                    name: 'CHK_PPN',
                                    inputValue: 1,
                                    uncheckedValue: 0
                                }
                            ]
                        },
                        {
                            xtype: 'numericfield',
                            readOnly: true,
                            hidden: true,
                            value: 0,
                            fieldLabel: 'Embalance ',
                            name: 'NUM_EMBALANCE'
                        },
                        {
                            xtype: 'numericfield',
                            readOnly: true,
                            value: 0,
                            fieldLabel: 'Total ',
                            name: 'NUM_NETT_TOTAL'
                        },
                        {
                            xtype: 'numericfield',
                            value: 0,
                            fieldLabel: 'Uang Bayar ',
                            name: 'NUM_UANG_BAYAR'
                        },
                        {
                            xtype: 'numericfield',
                            readOnly: true,
                            value: 0,
                            fieldLabel: 'Kembali ',
                            name: 'NUM_UANG_KEMBALI'
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            width: 500,
                            margin: '10 0 0 90',
//                            bodyStyle: 'float:right',
                            items: [
                                {
                                    xtype: 'button',
                                    text: 'PMR',
                                    glyph: Glyphs.setIcon('pmr'),
                                    scale: 'medium',
                                    cls: 'cust-btn biru',
                                    action: 'showPmr'
                                },
                                {
                                    xtype: 'button',
                                    margins: '0 0 0 3',
                                    text: 'Simpan (S)',
                                    glyph: Glyphs.setIcon('save'),
                                    scale: 'medium',
                                    cls: 'cust-btn biru',
                                    action: 'saveTunai'
                                },
                                {
                                    xtype: 'button',
                                    margins: '0 0 0 3',
                                    text: 'Tunai (T)',
                                    glyph: Glyphs.setIcon('print'),
                                    scale: 'medium',
                                    cls: 'cust-btn biru',
                                    action: 'printTunai'
                                },
                                {
                                    xtype: 'button',
                                    margins: '0 0 0 3',
                                    text: 'Non Tunai (N)',
                                    glyph: Glyphs.setIcon('noncash'),
                                    scale: 'medium',
                                    cls: 'cust-btn biru',
                                    action: 'saveNonTunai'
                                },
                                {
                                    xtype: 'button',
                                    margins: '0 0 0 3',
                                    tooltip: 'Batal',
                                    glyph: Glyphs.setIcon('cancel'),
                                    scale: 'medium',
                                    cls: 'cust-btn merah',
                                    action: 'resetTrx'
                                }
                            ]
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});