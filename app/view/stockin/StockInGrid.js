Ext.define('Pas.view.stockin.StockInGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.stockin.stockingrid',
    itemId: 'stockInGrid',
    title: 'Daftar Penerimaan Barang',
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
                emptyText: "Tidak ada data Barang Masuk",
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
                    width: 120,
                    fieldLabel: "Tanggal",
                    margin: "0 0 0 5",
                    emptyText: "Tanggal Awal",
                    hideLabel: true,
                    itemId: "dateTtFilter",
                    format: "d/M/Y",
                    value: new Date(),
                    submitFormat: "Y-m-d"
                },
                {
                    xtype: "datefield",
                    width: 160,
                    labelWidth: 35,
                    fieldLabel: "s.d ",
                    margin: "0 5 0 5",
                    emptyText: "Tanggal Akhir",
                    itemId: "dateTtFilter2",
                    format: "d/M/Y",
                    value: new Date(),
                    submitFormat: "Y-m-d"
                },
                {
                    xtype: "combobox",
                    emptyText: "Cabang",
                    width: 120,
                    itemId: "pengCabang",
                    triggerAction: "all",
                    hideTrigger: false,
                    mode: "remote",
                    minChars: 2,
//                    store: "shared.CabangStore",
                    displayField: "cb_name", 
                    valueField: "id",
                    hidden: false,
                    value: "PUSAT"
                }, 
                {
                    xtype: "combobox",
                    emptyText: "Pilih suplier.",
                    triggerAction: "all",
                    queryMode: "remote",
                    minChars: 2,
                    itemId: "pilihSup",
                    width: 150,
                    labelAlign: "right",
                    labelWidth: 50,
                    msgTarget: "side",
//                    store: "gdtt.SuppStore",
                    displayField: "ms_name",
                    valueField: "id",
                    hideTrigger: false,
                    matchFieldWidth: false,
                    listConfig: {
                        minWidth: 185
                    }
                }, 
                {
                    glyph: Glyphs.setIcon('search'),
                    cls: 'cust-btn biru',
                    tooltip: "Search Query",
                    action: "cariDataTt"
                },
                {
                    glyph: Glyphs.setIcon('refresh'),
                    cls: 'cust-btn orange',
                    handler: function () {
                            grid.getStore().load();
                            grid.getStore().group("tt_no");
                    }
                },
                {
                    glyph: Glyphs.setIcon('clear'),
                    cls: 'cust-btn merah',
                    handler: function () {
                        var store = grid.getStore();
                        
                        store.clearFilter(true);
                        store.load();
                        store.group("tt_no");
                        grid.down('#pilihSup').reset();
                    }
                },
                "->",
                {
                    text: "TT Baru",
                    glyph: Glyphs.setIcon('add'),
                    cls: 'cust-btn biru',
                    action: "newTt"
                },
                {
                    text: "Revisi TT",
                    iconCls: "icon-revisi",
                    hidden: true,
                    itemId: "editTt"
                },
                {
                    text: "Cetak",
                    glyph: Glyphs.setIcon('print'),
                    cls: 'cust-btn biru',
                    action: "printListTt"
                }
            ],
            features: [
                {
                    startCollapsed: false,
                    id: "ttListGroup",
                    ftype: "grouping",
                    groupHeaderTpl: "No TT : {name}",
                    hideGroupedHeader: false,
                    enableGroupingMenu: true
                }
            ],
            columns: [
                Ext.create("Ext.grid.RowNumberer"), 
                {
                    xtype: "gridcolumn",
                    flex: 0.5,
                    text: "Nama Barang",
                    dataIndex: "tt_barang_name"
                },
                {
                    xtype: "gridcolumn",
                    flex: 0.3,
                    text: "Supplier",
                    renderer: "uppercase",
                    hidden: false,
                    dataIndex: "tt_supp_name"
                },
                {
                    xtype: "datecolumn",
                    flex: 0.2,
                    text: "Tgl Transaksi",
                    dataIndex: "tt_tgltrx",
                    renderer: Ext.util.Format.dateRenderer("d/M/Y")
                },
                {
                    xtype: "numbercolumn",
                    flex: 0.1,
                    align: "center",
                    text: "Jumlah",
                    format: "000",
                    dataIndex: "tt_qty_kirim"
                },
                {
                    xtype: "gridcolumn",
                    flex: 0.1,
                    align: "center",
                    text: "Satuan",
                    dataIndex: "satuan_name"
                },
                {
                    xtype: "numbercolumn",
                    flex: 0.3,
                    text: "Harga",
                    align: "right",
                    dataIndex: "tt_harga"
                },
                {
                    xtype: "numbercolumn",
                    flex: 0.1,
                    text: "Disc.",
                    align: "center",
                    dataIndex: "tt_disc"
                },
                {
                    xtype: "numbercolumn",
                    flex: 0.1,
                    text: "PPn",
                    format: "000",
                    align: "center",
                    dataIndex: "tt_ppn"
                }
            ]
        });

        me.callParent(arguments);
    }
});