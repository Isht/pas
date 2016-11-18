Ext.define("Pas.view.purchase.PurchaseDetailGrid", {
    extend: "Ext.grid.Panel",
    alias: "widget.purchase.purchasedetailgrid",
    itemId: "purchaseDetailGrid",
    title: "Detail PO",
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
                emptyText: "Tidak ada data item PO",
                deferEmptyText: false,
                stripeRows: false,
                trackOver: false
            },
            columns: [
                Ext.create("Ext.grid.RowNumberer"), {
                    xtype: "gridcolumn",
                    flex: 0.5,
                    text: "Nama Barang",
                    dataIndex: "barang_name"
                },
                {
                    xtype: "numbercolumn",
                    flex: 0.1,
                    text: "Qty",
                    format: "000",
                    dataIndex: "barang_qty"
                },
                {
                    xtype: "gridcolumn",
                    flex: 0.3,
                    text: "Satuan",
                    dataIndex: "satuan_name",
                    renderer: function (val, meta, record, rowIndex, colIndex, store) {
                        if (!val) {
                            return 'NO DATA';
                        }
                        return val;
                    }
                },
                {
                    xtype: "numbercolumn",
                    flex: 0.3,
                    text: "Harga",
                    align: "right",
                    dataIndex: "barang_harga"
                },
                {
                    xtype: "numbercolumn",
                    flex: 0.1,
                    text: "Disc.",
                    align: "center",
                    dataIndex: "barang_disc"
                },
                {
                    xtype: "numbercolumn",
                    flex: 0.1,
                    text: "PPn",
                    format: "000",
                    align: "center",
                    dataIndex: "barang_ppn"
                },
                {
                    xtype: "numbercolumn",
                    flex: 0.3,
                    text: "NETTO",
                    align: "right",
                    dataIndex: "barang_netto"
                }
            ]
        });
        me.callParent(arguments);
    }
});
