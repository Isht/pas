Ext.define('Pas.view.retail.FormRacikan', {
    extend: 'Ext.form.Panel',
    alias: 'widget.retail.formracikan',
    itemId: 'formRacikan',
    border: false,
    title: "Form Buat Racikan",
    preventHeader: true,
    bodyPadding: '10 10 5 10',
    buttonAlign: 'right',
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 150,
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
                    layout: 'hbox',
                    hidden: false,
                    items: [
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Id Racikan ',
                            name: 'NUM_ID',
                            value: 0,
                            hidden: false,
                            readOnly: true
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Id Penjualan ',
                            name: 'NUM_RETAIL_ID',
                            value: 0,
                            hidden: true,
                            readOnly: true
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Jenis Racikan ',
                            width: 399,
                            minChars: 2,
                            store: 'retail.racikan.JenisRacikan',
                            emptyText: 'Pilih',
                            displayField: 'jenisName',
                            valueField: 'id',
                            name: 'CMB_RACIKAN_TYPE',
                            itemId: 'CMB_RACIKAN_TYPE',
//                            typeAhead: true,
                            allowBlank: true,
                            valueNotFoundText: 'Tidak ada data.',
//                            forceSelection: true,
                            matchFieldWidth: false,
                            listConfig: {
                                minWidth: 250,
                                itemTpl: '<div style="border-bottom: 1px dotted #0081B7;padding:1px 3px;font-size: 11px;"><ul class="item-render"><li style="min-width:250px">{jenisName}</li></ul></div>'
                            }
                        },
                        {
                            xtype: 'button',
                            margins: '0 0 0 4',
                            tooltip: 'Tambah',
                            glyph: Glyphs.setIcon('add'),
                            cls: 'cust-btn biru',
                            action: 'jenisRacikan',
                            disabled: false
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
//                    itemId: 'racikan',
                    disabled: false,
                    items: [
                        {
                            xtype: 'textfield',
                            width: 425,
                            fieldLabel: 'Nama Racikan ',
                            emptyText: 'Ketik Nama Racikan atau Cari',
                            readOnly: false,
                            allowBlank: true,
                            name: 'TXT_RACIKAN_NAME',
                            itemId: 'TXT_RACIKAN_NAME'
                        },
                        {
                            xtype: 'button',
                            margin: '0 0 0 4',
                            glyph: Glyphs.setIcon('search'),
                            cls: 'cust-btn biru',
                            action: 'searchRacikan'
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Jumlah ',
                            emptyText: 'Jumlah Racikan',
                            width: 195,
                            labelWidth: 75,
                            readOnly: false,
                            disabled: false,
                            allowBlank: true,
                            name: 'NUM_RACIKAN_QTY',
                            itemId: 'NUM_RACIKAN_QTY',
                            hideTrigger: true
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
//                    itemId: 'racikan',
                    disabled: false,
                    items: [
                        {
                            xtype: 'combobox',
                            width: 450,
                            fieldLabel: 'Nama Dagang ',
                            emptyText: 'Ketik Nama Item',
                            name: 'CMB_BARANG_RACIKAN',
                            store: 'retail.racikan.Stocks',
                            displayField: 'nameJualDosis',
                            minChars: 2,
                            queryMode: 'remote',
                            allowBlank: true,
//                            typeAhead: true,
                            forceSelection: true,
                            matchFieldWidth: false,
                            listConfig: {
                                minWidth: 500,
                                itemTpl: '<div style="border-bottom: 1px dotted #0081B7;padding:1px 3px;font-size: 11px;"><ul class="item-render"><li>{itemName} <span style="color:#666">{dosisBarang} {dosisSatuanName}</span></li><li style="min-width: 150px">Rp. {[Ext.util.Format.number(values.hargaJualRacikan, "0,000.00")]} / {satuanJualName}</li><li style="min-width: 40px;color: blue;align:center">{currentStock}</li></ul></div>'
                            }
                        },
                        {
                            xtype: 'checkbox',
                            fieldLabel: 'Langsung ',
                            boxLabel: 'Ya',
                            width: 196,
                            labelWidth: 76,
                            name: 'CHK_IS_LANGSUNG',
                            inputValue: 1,
                            listeners: {
                                change: function (rb, nv, ov, options) {
                                    if (nv) {
                                        this.up('form').getForm().findField('NUM_LANGSUNG_QTY').enable();
                                        this.up('form').getForm().findField('NUM_LANGSUNG_QTY').show();

                                        this.up('form').getForm().findField('NUM_DOSIS_LANGSUNG').enable();
                                        this.up('form').getForm().findField('NUM_ZA_LANGSUNG').enable();
                                        
                                        this.up('form').down('#dosis').disable();
                                        this.up('form').down('#dosis').hide();
                                        this.up('form').down('#zataktif').disable();
                                        this.up('form').down('#zataktif').hide();
                                    } else {
                                        this.up('form').getForm().findField('NUM_LANGSUNG_QTY').disable();
                                        this.up('form').getForm().findField('NUM_LANGSUNG_QTY').hide();

                                        this.up('form').getForm().findField('NUM_DOSIS_LANGSUNG').disable();
                                        this.up('form').getForm().findField('NUM_ZA_LANGSUNG').disable();
                                        
                                        this.up('form').down('#dosis').enable();
                                        this.up('form').down('#dosis').show();
                                        this.up('form').down('#zataktif').enable();
                                        this.up('form').down('#zataktif').show();
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Jumlah ',
                    width: 345,
                    hidden: true,
                    disabled: true,
                    name: 'NUM_LANGSUNG_QTY',
                    allowBlank: false,
                    hideTrigger: true,
                    decimalPrecision: 2,
                    decimalSeparator: ',',
                    alwaysDisplayDecimals: true,
                    allowNegative: false,
                    minValue: 0,
                    keyNavEnabled: false,
                    mouseWheelEnabled: false
                },
                {
                    xtype: 'numberfield',
                    name: 'NUM_ZA_LANGSUNG',
                    hideTrigger: true,
                    hidden: true,
                    disabled: true
                },
                {
                    xtype: 'numberfield',
                    name: 'NUM_DOSIS_LANGSUNG',
                    hideTrigger: true,
                    hidden: true,
                    disabled: true
                },
                {
                    xtype: 'numberfield',
                    name: 'NUM_QTY_PEMBULATAN',
                    hideTrigger: true,
                    readOnly: true,
                    hidden: true
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    itemId: 'dosis',
                    hidden: false,
                    disabled: false,
                    items: [
                        {
                            xtype: 'numberfield',
                            width: 345,
                            fieldLabel: 'Dosis Yang Dibutuhkan ',
                            name: 'NUM_QTY_DOSIS',
                            allowBlank: false,
                            hideTrigger: true,
                            decimalPrecision: 2,
                            decimalSeparator: ',',
                            alwaysDisplayDecimals: true,
                            allowNegative: false,
                            minValue: 0,
                            keyNavEnabled: false,
                            mouseWheelEnabled: false
                        },
                        {
                            xtype: 'textfield',
                            name: 'TXT_SATUAN_DOSIS',
                            margin: '0 0 0 5',
                            width: 100,
                            readOnly: true
                        },
                        {
                            xtype: 'numberfield',
                            name: 'TXT_SATUAN_DOSIS_ID',
                            margin: '0 0 0 5',
                            width: 100,
                            readOnly: true,
                            hidden: true
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    itemId: 'zataktif',
                    hidden: false,
                    disabled: false,
                    items: [
                        {
                            xtype: 'numberfield',
                            width: 345,
                            fieldLabel: 'Kebutuhan Obat ',
                            name: 'NUM_QTY_ZA',
                            hideTrigger: true,
                            decimalPrecision: 2,
                            decimalSeparator: ',',
                            alwaysDisplayDecimals: true,
                            allowNegative: false,
                            minValue: 0,
                            keyNavEnabled: false,
                            mouseWheelEnabled: false
                        },
                        {
                            xtype: 'textfield',
                            name: 'TXT_SATUAN_ITEM',
                            width: 100,
                            margin: '0 0 0 5',
                            readOnly: true
                        },
                        {
                            xtype: 'numberfield',
                            name: 'TXT_SATUAN_ITEM_ID',
                            width: 100,
                            margin: '0 0 0 5',
                            readOnly: true,
                            hidden: true
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    itemId: 'harga',
                    disabled: false,
                    items: [
                        Ext.create('Ext.ux.form.NumericField', {
                            fieldLabel: 'Harga (Rp) ',
                            width: 392,
                            name: 'NUM_HARGA_ITEM_RC',
                            emptyText: 'Rp. 0,00',
                            readOnly: true,
                            hideTrigger: true,
                            decimalPrecision: 2,
                            decimalSeparator: ',',
                            alwaysDisplayDecimals: true,
                            allowNegative: false,
                            minValue: 0,
                            keyNavEnabled: false,
                            mouseWheelEnabled: false
                        }),
                        {
                            xtype: 'button',
                            margin: '0 0 0 5',
                            text: 'Tambah',
                            cls: 'cust-btn biru',
                            action: 'tambahDetRacikan'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});