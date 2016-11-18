Ext.define('Pas.view.nonretail.FormDetailPenjualan', {
    extend: 'Ext.form.Panel',
    alias: 'widget.nonretail.formdetailpenjualan',
    itemId: 'formDetailPenjualanNr',
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
                            xtype: 'label',
                            html: '&nbsp;'
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
                            name: 'juald_item_id'
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
                                    name: 'bayar_disc_type',
                                    fieldLabel: "Diskon ",
                                    emptyText: "-Pilih-",
//                                    store: 'pljual.DiskonStore',
                                    displayField: 'mds_diskon',
                                    valueField: 'id',
                                    disabled: false
                                },
                                {
                                    xtype: 'numericfield',
                                    name: 'persenHasil',
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
                                    name: 'is_ppn',
                                    inputValue: 1,
                                    uncheckedValue: 0
                                }
                            ]
                        },
                        {
                            xtype: 'numericfield',
                            readOnly: true,
                            value: 0,
                            fieldLabel: 'Total ',
                            name: 'juald_item_id'
                        },
                        {
                            xtype: 'numericfield',
                            value: 0,
                            fieldLabel: 'Uang Bayar ',
                            name: 'juald_item_id'
                        },
                        {
                            xtype: 'numericfield',
                            value: 0,
                            fieldLabel: 'Kembali ',
                            name: 'juald_item_id'
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            width: 500,
                            margin: '10 0 0 150',
                            items: [
                                {
                                    xtype: 'button',
                                    margins: '0 0 0 3',
                                    text: 'Simpan (S)',
                                    glyph: Glyphs.setIcon('save'),
                                    scale: 'medium',
                                    cls: 'cust-btn biru',
                                    action: 'saveTunaiNr'
                                },
                                {
                                    xtype: 'button',
                                    margins: '0 0 0 3',
                                    text: 'Tunai (T)',
                                    glyph: Glyphs.setIcon('print'),
                                    scale: 'medium',
                                    cls: 'cust-btn biru',
                                    action: 'printTunaiNr'
                                },
                                {
                                    xtype: 'button',
                                    margins: '0 0 0 3',
                                    text: 'Non Tunai (N)',
                                    glyph: Glyphs.setIcon('noncash'),
                                    scale: 'medium',
                                    cls: 'cust-btn biru',
                                    action: 'saveNonTunaiNr'
                                },
                                {
                                    xtype: 'button',
                                    margins: '0 0 0 3',
                                    tooltip: 'Batal',
                                    glyph: Glyphs.setIcon('cancel'),
                                    scale: 'medium',
                                    cls: 'cust-btn merah',
                                    action: 'resetTrxNr'
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