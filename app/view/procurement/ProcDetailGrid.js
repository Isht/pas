Ext.define("Pas.view.procurement.ProcDetailGrid", {
    extend: "Ext.grid.Panel",
    alias: "widget.procurement.procdetailgrid",
    itemId: "procDetailGrid",
    title: "Detail Pengadaan",
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
                emptyText: "Tidak ada data item Pengadaan",
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
                    align: "center",
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
                    xtype: "datecolumn",
                    flex: 0.2,
                    text: "Untuk Tgl.",
                    dataIndex: "trx_date",
                    renderer: Ext.util.Format.dateRenderer("d/M/Y")
                },
                {
                    xtype: "gridcolumn",
                    flex: 0.5,
                    text: "Keterangan",
                    dataIndex: "po_no"
                }
            ]
        });
        me.callParent(arguments);
    }
});
