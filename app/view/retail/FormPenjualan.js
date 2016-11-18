Ext.define('Pas.view.retail.FormPenjualan', {
    extend: 'Ext.form.Panel',
    alias: 'widget.retail.formpenjualan',
    itemId: 'formPenjualan',
    border: false,
    title: "Form Penjualan",
    preventHeader: true,
    //    bodyStyle: bg,
    bodyPadding: '20 10 0 10',
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
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'combobox',
                            width: 402,
                            tabIndex: 1,
                            store: 'retail.StocksZatActive',
                            fieldLabel: 'Zat Aktif ',
                            boxLabel: 'Ya',
                            displayField: 'zatActiveName',
                            valueField: 'id',
                            emptyText: "--Pilih Zat Aktif--",
                            name: 'CMB_ZAT_ACTIVE',
                            minChars: 2,
                            triggerAction: 'all',
                            queryMode: 'remote',
                            allowBlank: true,
                            forceSelection: true,
                            colorField: 'red',
                            matchFieldWidth: false,
                            listConfig: {
                                minWidth: 470,
                                itemTpl: '<div style="border-bottom: 1px dotted #0081B7;padding:1px 3px;font-size: 11px;"><ul class="item-render"><li>{zatActiveName}</li></ul></div>'
                            }
                        },
                        {
                            xtype: 'button',
                            margins: '0 0 0 5',
                            action: 'resetZa',
                            glyph: Glyphs.setIcon('clear'),
                            cls: 'cust-btn biru'
                        },
                        {
                            xtype: 'button',
                            margins: '0 0 0 5',
                            text: 'Racikan (F8)',
                            action: 'showRacikan',
                            glyph: Glyphs.setIcon('racikan'),
                            cls: 'biru cust-btn'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'combobox',
                            width: 403,
                            tabIndex: 2,
                            store: 'retail.Stocks',
                            fieldLabel: 'Nama Barang ',
                            displayField: 'nameJualDosis',
                            valueField: 'id',
                            emptyText: "--Pilih Barang--",
                            name: 'CMB_ITEM_JUAL',
                            minChars: 2,
                            queryMode: 'remote',
                            allowBlank: true,
//                            typeAhead: true,
                            forceSelection: true,
                            matchFieldWidth: false,
                            listConfig: {
                                minWidth: 500,
                                itemTpl: '<div style="border-bottom: 1px dotted #0081B7;padding:1px 3px;font-size: 11px;"><ul class="item-render"><li>{itemName} <span style="color:#666">{dosisBarang} {dosisSatuanName}</span></li><li style="min-width: 150px">Rp. {[Ext.util.Format.number(values.hargaJualBarang, "0,000.00")]} / {satuanJualName}</li><li style="min-width: 40px;color: blue;align:center">{currentStock}</li></ul></div>'
                            }
                        },
                        {
                            xtype: 'numericfield',
                            margins: '0 0 0 5',
                            width: 150,
                            tabIndex: 3,
                            name: 'NUM_HARGA_BARANG',
                            emptyText: '--Harga--',
                            readOnly: true
                        },
                        {
                            xtype: 'numberfield',
                            margins: '0 0 0 5',
                            width: 80,
                            tabIndex: 4,
                            hideTrigger: true,
                            name: 'NUM_QTY_BARANG',
                            emptyText: "--Jumlah--",
                            readOnly: true
                        },
                        {
                            xtype: 'combobox',
                            width: 104,
                            tabIndex: 5,
                            margins: '0 0 0 5',
                            store: 'retail.StocksSatuanItem',
                            name: 'CMB_STUAN_ITEM',
                            emptyText: '--Satuan--',
                            displayField: 'satuanName',
                            valueField: 'satuanId',
                            readOnly: true,
                            triggerAction: 'all',
                            minChars: 2,
                            matchFieldWidth: false,
                            listConfig: {
                                minWidth: 90,
                                itemTpl: '<div style="border-bottom: 1px dotted #0081B7;padding:1px 3px;font-size: 11px;"><ul class="item-render"><li style="min-width:90px">{satuanName}</li></ul></div>'
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Tambah (F9)',
                            margins: '0 0 0 5',
                            action: 'addItemJual',
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