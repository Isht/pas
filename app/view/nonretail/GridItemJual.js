Ext.define("Pas.view.nonretail.GridItemJual", {
    extend: "Ext.grid.Panel",
    alias: "widget.nonretail.griditemjual",
    itemId: "gridItemJualNr",
    title: "Daftar Barang",
//    store: "pljual.DetailJualStore",
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
                emptyText: "Tidak ada data Penjualan",
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
                    dataIndex: "juald_item_name"
                },
                {
                    width: 60,
                    text: "Dosis",
                    align: "center",
                    dataIndex: "juald_dosis"
                },
                {
                    xtype: "numbercolumn",
                    width: 110,
                    text: "Harga Satuan",
                    align: "right",
                    dataIndex: "juald_harga_satuan"
                },
                {
                    xtype: "numbercolumn",
                    text: "Qty.",
                    width: 60,
                    align: "center",
                    dataIndex: "juald_qty"
                },
                {
                    text: "Satuan",
                    width: 80,
                    dataIndex: "juald_satuan_name"
                },
                {
                    xtype: "numbercolumn",
                    text: "Netto",
                    width: 110,
                    align: "right",
                    dataIndex: "juald_netto"
                },
                {
//                    xtype: "actioncolumn",
                    text: "",
                    width: 25,
                    align: "center"
                }
            ]
        });
        me.callParent(arguments);
    }
});