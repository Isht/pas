Ext.define("Pas.view.faktur.FakturDetailGrid", {
    extend: "Ext.grid.Panel",
    alias: "widget.faktur.fakturdetailgrid",
    itemId: "fakturDetailGrid",
    title: "Detail Faktur",
//    store: "listjual.DetailJualStore",
    border: false,
    columnLines: true,
    flex: 1,
    forceFit: false,
    glyph: Glyphs.setIcon('list'),
    cls: 'putih',
    initComponent: function () {
        var me = this,
                grid = me;

        Ext.applyIf(me, {
            viewConfig: {
                autoScroll: true,
                emptyText: "Tidak ada data faktur(s)",
                deferEmptyText: false,
                stripeRows: false,
                trackOver: false
            },
            features: [
                {
                    startCollapsed: false,
                    id: "fakturTtGroup",
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
                    width: 200,
                    text: "Nama Barang",
                    dataIndex: "tt_barang_name"
                },
                {
                    xtype: "numbercolumn",
                    width: 90,
                    text: "Qty. Pesan",
                    align: "center",
                    format: "0",
                    dataIndex: "tt_qty_pesan"
                },
                {
                    xtype: "numbercolumn",
                    width: 100,
                    align: "center",
                    format: "0",
                    text: "Qty. Terima",
                    dataIndex: "tt_qty_kirim"
                },
                {
                    xtype: "numbercolumn",
                    width: 150,
                    text: "Harga",
                    align: "right",
                    dataIndex: "tt_harga"
                },
                {
                    xtype: "numbercolumn",
                    width: 60,
                    text: "Disc.",
                    align: "center",
                    dataIndex: "tt_disc"
                },
                {
                    xtype: "numbercolumn",
                    width: 60,
                    text: "PPN",
                    align: "center",
                    dataIndex: "tt_ppn"
                },
                {
                    xtype: "numbercolumn",
                    width: 150,
                    text: "Netto",
                    align: "right",
                    dataIndex: "total_netto"
                }
            ]
        });
        me.callParent(arguments);
    }
});
