Ext.define('Pas.view.stockflow.StockGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.stockflow.stockgrid',
    itemId: 'stockGrid',
    title: 'DAFTAR ARUS STOCK',
    autoScroll: true,
    forceFit: true,
    border: false,
    columnLines: true,
    flex: 1,
//    store: 'plpelunasan.TagihanStore',
    glyph: Glyphs.setIcon('list'),
    cls: 'putih',
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            viewConfig: {
                autoScroll: true,
                emptyText: "Tidak ada data Arus Stock",
                deferEmptyText: false,
                stripeRows: false,
                trackOver: false,
                getRowClass: function (record, rowIndex, rowParams, store) {
                    return record.get("sisabyr") === 0 ? "status-normal" : "status-info-font";
                }
            },
            tbar: [
                {
                    xtype: "datefield",
                    itemId: "asDate1",
                    fieldLabel: "Filter ",
                    width: 160,
                    labelWidth: 40,
                    labelAlign: "right",
                    emptyText: "Tgl. Awal",
                    format: "d/M/Y",
                    submitFormat: "Y-m-d"
                },
                {
                    xtype: "datefield",
                    itemId: "asDate2",
                    width: 150,
                    fieldLabel: " s.d ",
                    labelWidth: 30,
                    labelAlign: "right",
                    emptyText: "Tgl. Akhir",
                    format: "d/M/Y",
                    submitFormat: "Y-m-d",
                    value: new Date()
                },
                {
                    xtype: "combobox",
                    emptyText: "Barang",
                    width: 220,
                    itemId: "asBarang",
                    allowBlank: true,
//                    store: "gdarusstock.ItemStore",
                    displayField: "mi_name",
                    valueField: "id_barang",
                    queryMode: "remote",
                    matchFieldWidth: false,
                    minChars: 2,
                    hidden: false,
                    listConfig: {
                        minWidth: 185
                    }
                },
                {
                    glyph: Glyphs.setIcon('search'),
                    cls: 'cust-btn biru',
                    action: 'cariArusStock'
                },
                {
                    glyph: Glyphs.setIcon('refresh'),
                    cls: 'cust-btn orange',
                    handler: function () {
                        var grid = this.up("grid"),
                                store = grid.getStore();
                        if (grid.down("#asBarang").getValue() !== null) {
                            store.load();
                        }
                    }
                },
                {
                    text: "Reset",
                    glyph: Glyphs.setIcon('clear'),
                    cls: 'cust-btn merah',
                    handler: function () {
                        var grid = this.up("grid"),
                                store = grid.getStore();

                        grid.down("#asDate1").reset();
                        grid.down("#asDate2").reset();
                        grid.down("#asBarang").reset();
                        store.clearFilter(true);
                        store.removeAll();
                    }
                },
                '->',
                {
                    text: "Cetak",
                    hidden: false,
                    glyph: Glyphs.setIcon('print'),
                    cls: 'cust-btn biru',
                    action: 'printArusStock'
                },
                {
                    text: "Cetak All",
                    hidden: false,
                    glyph: Glyphs.setIcon('print'),
                    cls: 'cust-btn orange',
                    action: 'printArusStockAll'
                }
            ],
            features: [
                {
                    startCollapsed: false,
                    id: "arusStockGroup",
                    ftype: "grouping",
                    groupHeaderTpl: "Nama Barang: {name}",
                    hideGroupedHeader: false,
                    enableGroupingMenu: true
                }
            ],
            columns: [
                Ext.create("Ext.grid.RowNumberer"),
                {
                    xtype: "datecolumn",
                    width: 50,
                    header: "Tgl. Transaksi",
                    dataIndex: "stk_date",
                    format: "d/M/Y"
                },
                {
                    width: 100,
                    header: "Nama Barang",
                    hidden: false,
                    renderer: "uppercase",
                    dataIndex: "mi_name"
                },
                {
                    width: 120,
                    header: "Keterangan",
                    hidden: false,
                    dataIndex: "stk_trxreftype",
                    renderer: function (val, meta, record, rowIndex, colIndex, store) {
                        if (val === 'opname') {
                            return 'PENYESUAIAN BARANG';
                        } else if (val === "ttgudang") {
                            return "PEMBELIAN BARANG";
                        } else {
                            return "PENJUALAN BARANG";
                        }
                    }
                },
                {
                    text: "Jenis",
                    columns: [
                        {
                            xtype: "numbercolumn",
                            align: "center",
                            width: 80,
                            text: "Masuk",
                            dataIndex: "stk_qty",
                            renderer: function (val, meta, record, rowIndex, colIndex, store) {
                                if (record.data.stk_trxtype === 0) {
                                    return 0;
                                }

                                return val;
                            }
                        },
                        {
                            xtype: "numbercolumn",
                            align: "center",
                            width: 80,
                            text: "Keluar",
                            dataIndex: "stk_qty",
                            renderer: function (val, meta, record, rowIndex, colIndex, store) {
                                if (record.data.stk_trxtype === 1) {
                                    return 0;
                                }

                                return val;
                            }
                        }
                    ]
                },
                {
                    text: "Stock",
                    columns: [
                        {
                            xtype: "numbercolumn",
                            align: "center",
                            width: 80,
                            text: "Awal",
                            dataIndex: "stock_awal",
                            format: "000"
                        },
                        {
                            xtype: "numbercolumn",
                            align: "center",
                            width: 80,
                            text: "Akhir",
                            dataIndex: "stock_akhir",
                            format: "000"
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});