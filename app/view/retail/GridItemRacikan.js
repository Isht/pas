Ext.define("Pas.view.retail.GridItemRacikan", {
    extend: "Ext.grid.Panel",
    alias: "widget.retail.griditemracikan",
    itemId: "gridItemRacikan",
    title: "Daftar Item Racikan",
    store: "retail.racikan._tempDetailRacikan",
    border: false,
    columnLines: true,
    collapsible: true,
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
                emptyText: "Tidak ada data item",
                deferEmptyText: false,
                stripeRows: false,
                trackOver: false
            },
            columns: [
                Ext.create("Ext.grid.RowNumberer", {
                    width: 35,
                    text: "No"
                }),
                {
                    xtype: "gridcolumn",
                    width: 200,
                    text: "Nama Dagang",
                    dataIndex: "itemName"
                },
                {
                    xtype: "numbercolumn",
                    width: 110,
                    text: "Harga Satuan",
                    align: "right",
                    dataIndex: "itemPrice"
                },
                {
                    xtype: "numbercolumn",
                    text: "Qty.",
                    width: 60,
                    align: "center",
                    dataIndex: "itemQty"
                },
                {
                    text: "Satuan",
                    width: 80,
                    dataIndex: "itemSatuanName"
                },
                {
                    xtype: "numbercolumn",
                    text: "Jumlah",
                    width: 110,
                    align: "right",
                    dataIndex: "itemSubTotal"
                },
                {
                    xtype: "actioncolumn",
                    text: "",
                    width: 25,
                    align: "center",
                    items: [
                        {
                            icon: 'resources/img/icon-delete.png', // Use a URL in the icon config
                            tooltip: 'Hapus Item',
                            action: 'actionDelete'
                        }
                    ]
                }
            ],
            bbar: [
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            width: 300,
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
                            width: 380,
                            defaults: {
                                width: 360
                            },
                            fieldDefaults: {
                                labelAlign: 'right',
                                labelWidth: 100,
                                labelStyle: 'font-weight: bold',
                                msgTarget: 'side'
                            },
                            items: [
                                Ext.create('Ext.ux.form.NumericField', {
                                    fieldLabel: 'Subtotal (Rp) ',
                                    name: 'NUM_RACIKAN_SUBTOTAL',
                                    itemId: 'NUM_RACIKAN_SUBTOTAL',
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
                                Ext.create('Ext.ux.form.NumericField', {
                                    fieldLabel: 'Kemasan (Rp) ',
                                    name: 'NUM_RACIKAN_KEMASAN',
                                    itemId: 'NUM_RACIKAN_KEMASAN',
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
                                Ext.create('Ext.ux.form.NumericField', {
                                    fieldLabel: 'Netto (Rp) ',
                                    name: 'NUM_RACIKAN_NETTO',
                                    itemId: 'NUM_RACIKAN_NETTO',
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
                                })
                            ]
                        }]
                }

            ]
        });
        me.callParent(arguments);
    }
});