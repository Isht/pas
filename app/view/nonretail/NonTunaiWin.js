/**
 * @author Isht Ae
 **/

Ext.define('Pas.view.nonretail.NonTunaiWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.nonretail.nontunaiwin',
    itemId: 'nonTunaiWinNr',
    title: 'Pembayaran Non Tunai',
    width: 795,
    height: 600,
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
            items: bayarForm,
            buttons: [
                {
                    text: 'Simpan',
                    glyph: Glyphs.setIcon('save'),
                    cls: 'cust-btn biru',
                    itemId: 'saveRacikan',
                    scope: this,
                    handler: this.close
                },
                {
                    xtype: 'button',
                    text: 'Cetak',
                    glyph: Glyphs.setIcon('print'),
                    cls: 'cust-btn biru',
                    itemId: 'newRacikan'
                },
                {
                    text: 'Batal',
                    glyph: Glyphs.setIcon('cancel'),
                    cls: 'cust-btn merah',
                    itemId: 'batalRacikan',
                    scope: this,
                    handler: this.close
                }
            ]
        });
        me.callParent(arguments);
    }
});

var bayarForm = Ext.define('Pas.view.retail.BayarForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.retail.BayarForm',
    itemId: 'bayarForm',
    border: false,
    preventHeader: false,
    bodyPadding: '5 10',
    buttonAlign: 'right',
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 90,
        msgTarget: 'side',
        width: 320
    },
    autoScroll: true,
    initComponent: function () {
        var me = this,
                form = me;

        Ext.applyIf(me, {
            tbar: [
                '->',
                {
                    xtype: 'tbtext',
                    height: 55,
                    itemId: 'totalBayar',
                    cls: 'daftar-total-view',
                    margin: '5 10 -23 10',
                    text: 'TOTAL : Rp. 0.00'
                }
            ],
            items: [
                //FORM BAYAR
                Ext.create('Ext.ux.form.NumericField', {
                    margin: "5 0",
                    fieldLabel: 'Kurang Bayar ',
                    name: 'kurang_bayar',
                    itemId: 'kurang_bayar',
                    decimalPrecision: 2,
                    decimalSeparator: '.',
                    alwaysDisplayDecimals: true,
                    allowNegative: false,
                    minValue: 0, //prevents negative numbers
                    // Remove spinner buttons, and arrow key and mouse wheel listeners
                    keyNavEnabled: false,
                    mouseWheelEnabled: false,
                    allowBlank: false,
                    hideTrigger: true,
                    hidden: false,
                    value: 0,
                    labelWidth: 110,
                    readOnly: true
                }),
                Ext.create('Ext.ux.form.NumericField', {
                    hidden: false,
                    fieldLabel: 'Total Bayar ',
                    name: 'totalTrx',
                    itemId: 'totalTrx',
                    decimalPrecision: 2,
                    decimalSeparator: '.',
                    alwaysDisplayDecimals: true,
                    allowNegative: false,
                    minValue: 0, //prevents negative numbers
                    // Remove spinner buttons, and arrow key and mouse wheel listeners
                    keyNavEnabled: false,
                    mouseWheelEnabled: false,
                    allowBlank: false,
                    hideTrigger: true,
                    value: 120000,
                    labelWidth: 110,
                    readOnly: true
                }),
                {
                    xtype: 'checkboxgroup',
                    fieldLabel: 'Pembayaran ',
                    itemId: 'dpx_bayar',
                    width: 320,
                    labelWidth: 110,
                    items: [
                        {
                            boxLabel: 'Tunai',
                            width: 65,
                            name: 'type_bayar[]',
                            inputValue: 1,
//                            checked: true,
                            listeners: {
                                change: function (rb, nv, ov, options) {
                                    if (nv) {
                                        form.down('#byrTunai').show();
                                        form.down('#byrTunai').enable();
                                    } else {
                                        form.down('#byrTunai').hide();
                                        form.down('#byrTunai').disable();
                                        form.down('#tunai_dibayar').reset();
                                    }
                                }
                            }
                        },
                        {
                            boxLabel: 'Debet',
                            width: 65,
                            name: 'type_bayar[]',
                            inputValue: 2,
                            listeners: {
                                change: function (rb, nv, ov, options) {
                                    if (nv) {
                                        form.down('#byrDebet').show();
                                        form.down('#byrDebet').enable();
                                    } else {
                                        form.down('#byrDebet').hide();
                                        form.down('#byrDebet').disable();
                                        form.down('#debetbca').reset();
                                        form.down('#debetmandiri').reset();
                                    }
                                }
                            }
                        },
                        {
                            boxLabel: 'Kartu Kredit',
                            width: 100,
                            name: 'type_bayar[]',
                            inputValue: 3,
                            listeners: {
                                change: function (rb, nv, ov, options) {
                                    if (nv) {
                                        form.down('#byrKredit').show();
                                        form.down('#byrKredit').enable();
                                    } else {
                                        form.down('#byrKredit').hide();
                                        form.down('#byrKredit').disable();
                                        form.down('#ccbca').reset();
                                        form.down('#ccmandiri').reset();
                                    }
                                }
                            }
                        },
                        {
                            boxLabel: 'Transfer',
                            width: 80,
                            name: 'type_bayar[]',
                            inputValue: 4,
                            listeners: {
                                change: function (rb, nv, ov, options) {
                                    if (nv) {
                                        form.down('#byrTransfer').show();
                                        form.down('#byrTransfer').enable();
                                    } else {
                                        form.down('#byrTransfer').hide();
                                        form.down('#byrTransfer').disable();
                                        form.down('#trf_value').reset();
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    width: 760,
                    margin: '10 0 10 0',
                    padding: '5',
                    itemId: "byrTunai",
                    title: '<b>Pembayaran Tunai</b>',
                    labelAlign: 'top',
                    hidden: true,
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            width: 750,
                            itemId: 'row1',
                            items: [
                                Ext.create('Ext.ux.form.NumericField', {
                                    width: 242,
                                    fieldLabel: 'Dibayar ',
                                    name: 'tunai_dibayar',
                                    itemId: 'tunai_dibayar',
                                    decimalPrecision: 2,
                                    decimalSeparator: '.',
                                    alwaysDisplayDecimals: true,
                                    allowNegative: false,
                                    minValue: 0, //prevents negative numbers
                                    // Remove spinner buttons, and arrow key and mouse wheel listeners
                                    keyNavEnabled: false,
                                    mouseWheelEnabled: false,
                                    allowBlank: true,
                                    hideTrigger: true,
                                    hidden: false,
                                    emptyText: "0,00",
                                    readOnly: false,
                                    listeners: {
                                        scope: this,
                                        change: function (f, n, o) {
                                            this.calcTrx(n, o);
                                        }
                                    }
                                }),
                                Ext.create('Ext.ux.form.NumericField', {
                                    width: 242,
                                    fieldLabel: 'Uang Bayar ',
                                    name: 'tunai_uangbayar',
                                    itemId: 'tunai_uangbayar',
                                    decimalPrecision: 2,
                                    decimalSeparator: '.',
                                    alwaysDisplayDecimals: true,
                                    allowNegative: false,
                                    minValue: 0, //prevents negative numbers
                                    // Remove spinner buttons, and arrow key and mouse wheel listeners
                                    keyNavEnabled: false,
                                    mouseWheelEnabled: false,
                                    allowBlank: true,
                                    hideTrigger: true,
                                    hidden: false,
                                    emptyText: "0,00",
                                    readOnly: false,
                                    listeners: {
                                        scope: this,
                                        change: function (f, n, o) {
                                            var dibayar = form.down('#tunai_dibayar').getValue(),
                                                    hitung;

                                            if (o === undefined) {
                                                o = 0;
                                            }
                                            if (n === 0) {
                                                hitung = 0 - dibayar;
                                            } else {
                                                hitung = n - dibayar;
                                            }

                                            this.down("#tunai_kembali").setValue(hitung);
                                        }
                                    }
                                }),
                                Ext.create('Ext.ux.form.NumericField', {
                                    width: 242,
                                    fieldLabel: 'Kembali ',
                                    name: 'tunai_kembali',
                                    itemId: 'tunai_kembali',
                                    decimalPrecision: 2,
                                    decimalSeparator: '.',
                                    alwaysDisplayDecimals: true,
                                    allowNegative: false,
                                    minValue: 0, //prevents negative numbers
                                    // Remove spinner buttons, and arrow key and mouse wheel listeners
                                    keyNavEnabled: false,
                                    mouseWheelEnabled: false,
                                    allowBlank: true,
                                    hideTrigger: true,
                                    hidden: false,
                                    emptyText: "0,00",
                                    readOnly: false
                                })
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    width: 760,
                    margin: '10 0 10 0',
                    padding: '5',
                    itemId: "byrDebet",
                    hidden: true,
                    disabled: true,
                    title: '<b>Pembayaran Debet</b>',
                    labelAlign: 'top',
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            width: 750,
                            itemId: 'row1',
                            items: [
                                Ext.create('Ext.ux.form.NumericField', {
                                    width: 242,
                                    fieldLabel: 'EDC BCA ',
                                    name: 'debetbca',
                                    itemId: 'debetbca',
                                    decimalPrecision: 2,
                                    decimalSeparator: '.',
                                    alwaysDisplayDecimals: true,
                                    allowNegative: false,
                                    minValue: 0, //prevents negative numbers
                                    // Remove spinner buttons, and arrow key and mouse wheel listeners
                                    keyNavEnabled: false,
                                    mouseWheelEnabled: false,
                                    allowBlank: true,
                                    hideTrigger: true,
                                    hidden: false,
                                    emptyText: "0,00",
                                    readOnly: false,
                                    listeners: {
                                        scope: this,
                                        change: function (f, n, o) {
                                            this.calcTrx(n, o);
                                        }
                                    }
                                }),
                                {
                                    xtype: "textfield",
                                    width: 242,
                                    fieldLabel: 'No Kartu ',
                                    name: 'debetbca_card'
                                },
                                {
                                    xtype: "textfield",
                                    width: 242,
                                    fieldLabel: 'Bank Asal ',
                                    name: 'debetbca_asal'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            width: 750,
                            itemId: 'row2',
                            items: [
                                Ext.create('Ext.ux.form.NumericField', {
                                    width: 242,
                                    fieldLabel: 'EDC Mandiri ',
                                    name: 'debetmandiri',
                                    itemId: 'debetmandiri',
                                    decimalPrecision: 2,
                                    decimalSeparator: '.',
                                    alwaysDisplayDecimals: true,
                                    allowNegative: false,
                                    minValue: 0, //prevents negative numbers
                                    // Remove spinner buttons, and arrow key and mouse wheel listeners
                                    keyNavEnabled: false,
                                    mouseWheelEnabled: false,
                                    allowBlank: true,
                                    hideTrigger: true,
                                    hidden: false,
                                    emptyText: "0,00",
                                    readOnly: false,
                                    listeners: {
                                        scope: this,
                                        change: function (f, n, o) {
                                            this.calcTrx(n, o);
                                        }
                                    }
                                }),
                                {
                                    xtype: "textfield",
                                    width: 242,
                                    fieldLabel: 'No Kartu ',
                                    name: 'debetmandiri_card'
                                },
                                {
                                    xtype: "textfield",
                                    width: 242,
                                    fieldLabel: 'Bank Asal ',
                                    name: 'debetmandiri_asal'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    width: 760,
                    margin: '10 0 10 0',
                    padding: '5',
                    itemId: "byrKredit",
                    hidden: true,
                    disabled: true,
                    title: '<b>Pembayaran Kredit</b>',
                    labelAlign: 'top',
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            width: 750,
                            itemId: 'row1',
                            items: [
                                Ext.create('Ext.ux.form.NumericField', {
                                    width: 242,
                                    fieldLabel: 'EDC BCA ',
                                    name: 'ccbca',
                                    itemId: 'ccbca',
                                    decimalPrecision: 2,
                                    decimalSeparator: '.',
                                    alwaysDisplayDecimals: true,
                                    allowNegative: false,
                                    minValue: 0, //prevents negative numbers
                                    // Remove spinner buttons, and arrow key and mouse wheel listeners
                                    keyNavEnabled: false,
                                    mouseWheelEnabled: false,
                                    allowBlank: true,
                                    hideTrigger: true,
                                    hidden: false,
                                    emptyText: "0,00",
                                    readOnly: false,
                                    listeners: {
                                        scope: this,
                                        change: function (f, n, o) {
                                            this.calcTrx(n, o);
                                        }
                                    }
                                }),
                                {
                                    xtype: "textfield",
                                    width: 242,
                                    fieldLabel: 'No Kartu ',
                                    name: 'ccbca_card'
                                },
                                {
                                    xtype: "textfield",
                                    width: 242,
                                    fieldLabel: 'Bank kartu ',
                                    name: 'ccbca_bank'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            width: 750,
                            itemId: 'row2',
                            items: [
                                Ext.create('Ext.ux.form.NumericField', {
                                    width: 242,
                                    fieldLabel: 'EDC Mandiri ',
                                    name: 'ccmandiri',
                                    itemId: 'ccmandiri',
                                    decimalPrecision: 2,
                                    decimalSeparator: '.',
                                    alwaysDisplayDecimals: true,
                                    allowNegative: false,
                                    minValue: 0, //prevents negative numbers
                                    // Remove spinner buttons, and arrow key and mouse wheel listeners
                                    keyNavEnabled: false,
                                    mouseWheelEnabled: false,
                                    allowBlank: true,
                                    hideTrigger: true,
                                    hidden: false,
                                    emptyText: "0,00",
                                    readOnly: false,
                                    listeners: {
                                        scope: this,
                                        change: function (f, n, o) {
                                            this.calcTrx(n, o);
                                        }
                                    }
                                }),
                                {
                                    xtype: "textfield",
                                    width: 242,
                                    fieldLabel: 'No Kartu ',
                                    name: 'ccmandiri_card'
                                },
                                {
                                    xtype: "textfield",
                                    width: 242,
                                    fieldLabel: 'Bank Kartu ',
                                    name: 'ccmandiri_bank'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    width: 760,
                    margin: '10 0 10 0',
                    padding: '5',
                    itemId: "byrTransfer",
                    hidden: true,
                    disabled: true,
                    title: '<b>Pembayaran Transfer</b>',
                    labelAlign: 'top',
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            width: 750,
                            itemId: 'row2',
                            items: [
                                Ext.create('Ext.ux.form.NumericField', {
                                    width: 242,
                                    fieldLabel: 'Nominal ',
                                    name: 'trf_value',
                                    itemId: 'trf_value',
                                    decimalPrecision: 2,
                                    decimalSeparator: '.',
                                    alwaysDisplayDecimals: true,
                                    allowNegative: false,
                                    minValue: 0, //prevents negative numbers
                                    // Remove spinner buttons, and arrow key and mouse wheel listeners
                                    keyNavEnabled: false,
                                    mouseWheelEnabled: false,
                                    allowBlank: true,
                                    hideTrigger: true,
                                    hidden: false,
                                    emptyText: "0,00",
                                    readOnly: false,
                                    listeners: {
                                        scope: this,
                                        change: function (f, n, o) {
                                            this.calcTrx(n, o);
                                        }
                                    }
                                }),
                                {
                                    xtype: "combobox",
                                    width: 242,
                                    fieldLabel: 'Bank PDC ',
                                    name: 'trf_bank'
                                },
                                {
                                    xtype: "textfield",
                                    width: 242,
                                    fieldLabel: 'No Ref. ',
                                    name: 'trf_noref'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        ,
                        {
                            xtype: 'checkbox',
                            fieldLabel: 'Ditagihkan ',
                            boxLabel: 'Ya ',
                            hidden: false,
                            labelWidth: 110,
                            width: 160,
                            name: 'is_ditagihkan',
                            itemId: 'is_ditagihkan',
                            inputValue: 1,
                            uncheckedValue: 0,
                            margin: "0 5 0 0",
                            listeners: {
                                change: function (rb, nv, ov, options) {
                                    if (nv) {
                                        form.down('#bpx_ditagihkanke').show();
                                        form.down('#bpx_ditagihkanke').enable();
                                    } else {
                                        form.down('#bpx_ditagihkanke').hide();
                                        form.down('#bpx_ditagihkanke').disable();

                                        form.getForm().findField('bpx_karyawan').hide();
                                        form.getForm().findField('bpx_karyawan').disable();
                                        form.getForm().findField('bpx_dokter').hide();
                                        form.getForm().findField('bpx_dokter').disable();
                                        form.getForm().findField('bpx_rekanan').hide();
                                        form.getForm().findField('bpx_rekanan').disable();
                                        form.getForm().findField('bpx_noaskes').hide();
                                        form.getForm().findField('bpx_noaskes').disable();
                                    }
                                }
                            }
                        },
                        {
                            xtype: 'radiogroup',
                            itemId: 'bpx_ditagihkanke',
                            hidden: true,
                            items: [
                                {
                                    boxLabel: 'APS',
                                    width: 50,
                                    name: 'bpx_ditagihkanke',
                                    inputValue: 1,
                                    checked: true,
                                    listeners: {
                                        change: function (rb, nv, ov, options) {
                                            if (nv) {
                                                form.getForm().findField('bpx_karyawan').hide();
                                                form.getForm().findField('bpx_karyawan').disable();
                                                form.getForm().findField('bpx_dokter').hide();
                                                form.getForm().findField('bpx_dokter').disable();
                                                form.getForm().findField('bpx_rekanan').hide();
                                                form.getForm().findField('bpx_rekanan').disable();
                                                form.getForm().findField('bpx_noaskes').hide();
                                                form.getForm().findField('bpx_noaskes').disable();
                                            }
                                        }
                                    }
                                },
                                {
                                    boxLabel: 'Karyawan',
                                    width: 80,
                                    name: 'bpx_ditagihkanke',
                                    inputValue: 2,
                                    checked: false,
                                    listeners: {
                                        change: function (rb, nv, ov, options) {
                                            if (nv) {
                                                form.getForm().findField('bpx_karyawan').show();
                                                form.getForm().findField('bpx_karyawan').enable();

                                                form.getForm().findField('bpx_dokter').hide();
                                                form.getForm().findField('bpx_dokter').disable();
                                                form.getForm().findField('bpx_rekanan').hide();
                                                form.getForm().findField('bpx_rekanan').disable();
                                                form.getForm().findField('bpx_noaskes').hide();
                                                form.getForm().findField('bpx_noaskes').disable();
                                            }
                                        }
                                    }
                                },
                                {
                                    boxLabel: 'Dokter',
                                    width: 70,
                                    name: 'bpx_ditagihkanke',
                                    inputValue: 3,
                                    listeners: {
                                        change: function (rb, nv, ov, options) {
                                            if (nv) {
                                                form.getForm().findField('bpx_dokter').show();
                                                form.getForm().findField('bpx_dokter').enable();

                                                form.getForm().findField('bpx_karyawan').hide();
                                                form.getForm().findField('bpx_karyawan').disable();
                                                form.getForm().findField('bpx_rekanan').hide();
                                                form.getForm().findField('bpx_rekanan').disable();
                                                form.getForm().findField('bpx_noaskes').hide();
                                                form.getForm().findField('bpx_noaskes').disable();
                                            }
                                        }
                                    }
                                },
                                {
                                    boxLabel: 'Rekanan',
                                    width: 80,
                                    name: 'bpx_ditagihkanke',
                                    inputValue: 4,
                                    listeners: {
                                        change: function (rb, nv, ov, options) {
                                            if (nv) {
                                                form.getForm().findField('bpx_rekanan').show();
                                                form.getForm().findField('bpx_rekanan').enable();
                                                form.getForm().findField('bpx_dokter').hide();
                                                form.getForm().findField('bpx_dokter').disable();
                                                form.getForm().findField('bpx_karyawan').hide();
                                                form.getForm().findField('bpx_karyawan').disable();

                                                form.getForm().findField('bpx_noaskes').hide();
                                                form.getForm().findField('bpx_noaskes').disable();
                                            }
                                        }
                                    }
                                },
                                {
                                    boxLabel: 'ASKES',
                                    width: 85,
                                    name: 'bpx_ditagihkanke',
                                    inputValue: 5,
                                    listeners: {
                                        change: function (rb, nv, ov, options) {
                                            if (nv) {
                                                form.getForm().findField('bpx_noaskes').show();
                                                form.getForm().findField('bpx_noaskes').enable();

                                                form.getForm().findField('bpx_rekanan').hide();
                                                form.getForm().findField('bpx_rekanan').disable();
                                                form.getForm().findField('bpx_dokter').hide();
                                                form.getForm().findField('bpx_dokter').disable();
                                                form.getForm().findField('bpx_karyawan').hide();
                                                form.getForm().findField('bpx_karyawan').disable();
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'combobox',
                    labelWidth: 110,
                    hidden: true,
                    disabled: true,
                    forceSelection: true,
                    allowBlank: false,
                    queryMode: 'remote',
                    triggerAction: 'all',
                    name: 'bpx_karyawan',
//                    store: 'pljual.KaryawanStore',
                    displayField: 'mp_namapasien',
                    valueField: 'id',
                    fieldLabel: 'Nama Karyawan ',
                    minChars: 2
                },
                {
                    xtype: 'combobox',
                    labelWidth: 110,
                    hidden: true,
                    disabled: true,
                    forceSelection: true,
                    allowBlank: false,
                    queryMode: 'remote',
                    triggerAction: 'all',
                    name: 'bpx_rekanan',
                    fieldLabel: 'Nama Rekanan ',
//                    store: 'pljual.RekananStore',
                    displayField: 'rkn_namarekanan',
                    valueField: 'id',
                    minChars: 2
                },
                {
                    xtype: 'combobox',
                    labelWidth: 110,
                    hidden: true,
                    disabled: true,
                    forceSelection: true,
                    allowBlank: false,
                    name: 'bpx_dokter',
                    fieldLabel: 'Nama Dokter ',
//                    store: 'pljual.DokterStore',
                    displayField: 'md_namadokter',
                    valueField: 'id',
                    minChars: 2
                },
                {
                    xtype: 'textfield',
                    labelWidth: 110,
                    hidden: true,
                    disabled: true,
                    allowBlank: false,
                    name: 'bpx_noaskes',
                    fieldLabel: 'No ASKES '
                }
            ]
        });

        me.callParent(arguments);
    },
    calcTrx: function (n, o) {
        var sisa = this.down("#kurang_bayar").getValue(),
                hitung;

        if (o === undefined) {
            o = 0;
        }
        if (n === 0) {
            hitung = sisa + o;
        } else {
            hitung = sisa + o - n;
        }

        if (hitung >= 0) {
            this.down("#kurang_bayar").setValue(hitung);
        } else {
            Ext.Msg.alert('Info', 'Pembayaran Lebih dari yang di tagihkan');
            this.down("#kurang_bayar").setValue(hitung);
        }
    }
});

/* End of file PlAddPasienWin.js */
/* Location: ./assets/js/app/view/pelayanan/pldaftar/PlAddPasienWin.js */