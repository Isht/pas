Ext.define('Apotek.view.plpelunasan.BayarWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.plpelunasan.bayarwin',
    itemId: 'bayarwin',
    width: 360,
    title: 'FORM PEMBAYARAN',
    modal: true,
    resizable: false,
    border: true,
    autoScroll: true,
    layout: 'fit',
    autoShow: true,
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    border: false,
                    preventHeader: false,
                    itemId: 'bayarform',
                    bodyPadding: 10,
                    buttonAlign: 'right',
                    fieldDefaults: {
                        labelAlign: 'right',
                        labelWidth: 120,
                        msgTarget: 'side',
                        width: 320
                    },
//                    autoScroll: true,
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'ID Penjualan ',
                            name: 'id_jual_bayar',
                            width: 300,
                            hidden: true
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Count Selection',
                            name: 'count',
                            width: 300,
                            hidden: true
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: 'Tanggal Bayar ',
                            name: 'tgl_byr',
                            width: 250,
                            format: 'd/M/Y',
                            value: new Date(),
                            submitFormat: 'Y-m-d',
                            allowBlank: false
                        },
                        Ext.create('Ext.ux.form.NumericField', {
                            hideTrigger: true,
                            fieldLabel: 'Total Transaksi ',
                            name: 'nilai_tagihan',
                            decimalPrecision: 2,
                            decimalSeparator: ',',
                            alwaysDisplayDecimals: true,
                            allowNegative: false,
                            readOnly: true,
                            keyNavEnabled: false,
                            mouseWheelEnabled: false
                        }),
                        Ext.create('Ext.ux.form.NumericField', {
                            hideTrigger: true,
                            fieldLabel: 'Jumlah Pembayaran ',
                            name: 'jumlah_byr',
                            decimalPrecision: 2,
                            decimalSeparator: ',',
                            value: 0,
                            alwaysDisplayDecimals: true,
                            allowNegative: false,
                            readOnly: false,
                            keyNavEnabled: false,
                            mouseWheelEnabled: false,
                            listeners: {
                                change: function () {
                                    var val = this.getValue(),
                                            val2 = this.up('form').getForm().findField('nilai_tagihan').getValue(),
                                            val3;

                                    val3 = val2 - val;
                                    this.up('form').getForm().findField('sisa_byr').setValue(val3);
                                }
                            }
                        }),
                        Ext.create('Ext.ux.form.NumericField', {
                            hideTrigger: true,
                            fieldLabel: 'Sisa Bayar ',
                            name: 'sisa_byr',
                            decimalPrecision: 2,
                            decimalSeparator: ',',
                            alwaysDisplayDecimals: true,
                            allowNegative: false,
                            keyNavEnabled: false,
                            readOnly: true,
                            minValue: 0,
                            mouseWheelEnabled: false,
                            allowBlank: false
                        }),
                        {
                            xtype: 'radiogroup',
                            fieldLabel: 'Cara Bayar ',
                            name: 'cara_byr',
                            width: 300,
                            items: [
                                {
                                    boxLabel: 'Tunai',
                                    width: 60,
                                    name: 'cara_byr',
                                    inputValue: 1,
                                    checked: true,
                                    listeners: {
                                        change: function (rb, nv, ov, options) {
                                            if (nv) {
                                                this.up('form').getForm().findField('no_bg').hide();
                                                this.up('form').getForm().findField('no_bg').disable();

                                                this.up('form').getForm().findField('bank_bg').hide();
                                                this.up('form').getForm().findField('bank_bg').disable();

                                                this.up('form').getForm().findField('bank_transfer').hide();
                                                this.up('form').getForm().findField('bank_transfer').disable();
                                            }
                                        }
                                    }
                                },
                                {
                                    boxLabel: 'Transfer',
                                    width: 70,
                                    name: 'cara_byr',
                                    inputValue: 2,
                                    listeners: {
                                        change: function (rb, nv, ov, options) {
                                            if (nv) {
                                                this.up('form').getForm().findField('no_bg').hide();
                                                this.up('form').getForm().findField('no_bg').disable();

                                                this.up('form').getForm().findField('bank_bg').hide();
                                                this.up('form').getForm().findField('bank_bg').disable();

                                                this.up('form').getForm().findField('bank_transfer').show();
                                                this.up('form').getForm().findField('bank_transfer').enable();
                                            }
                                        }
                                    }
                                },
                                {
                                    boxLabel: 'BG',
                                    width: 60,
                                    name: 'cara_byr',
                                    inputValue: 3,
                                    listeners: {
                                        change: function (rb, nv, ov, options) {
                                            if (nv) {
                                                this.up('form').getForm().findField('no_bg').show();
                                                this.up('form').getForm().findField('no_bg').enable();

                                                this.up('form').getForm().findField('bank_bg').show();
                                                this.up('form').getForm().findField('bank_bg').enable();

                                                this.up('form').getForm().findField('bank_transfer').hide();
                                                this.up('form').getForm().findField('bank_transfer').disable();
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Nama Bank ',
                            name: 'bank_transfer',
                            hidden: true,
                            disabled: true
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'No BG ',
                            name: 'no_bg',
                            hidden: true,
                            disabled: true
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Nama Bank ',
                            name: 'bank_bg',
                            hidden: true,
                            disabled: true
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Nama Pembayar ',
                            name: 'nama_pembayar',
                            allowBlank: false
                        }
                    ]
                }
            ],
            buttons: [
                {
                    text: 'Simpan',
                    iconCls: 'icon-save',
                    itemId: 'SaveTagihan'
                },
//                {
//                    text: 'Print',
//                    handler: function() {
//                        this.up('window').destroy();
//                    }
//                }, 
                {
                    text: 'Batal',
                    iconCls: 'icon-cancel',
                    scope: this,
                    handler: this.close
                }
            ]
        });

        me.callParent(arguments);
    }
});