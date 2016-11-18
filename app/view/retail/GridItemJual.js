Ext.define("Pas.view.retail.GridItemJual", {
    extend: "Ext.grid.Panel",
    alias: "widget.retail.griditemjual",
    itemId: "gridItemJual",
    title: "Daftar Barang",
    store: "retail.ItemListRetail",
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
                    dataIndex: "itemName"
                },
                {
                    width: 60,
                    text: "Dosis",
                    align: "center",
                    dataIndex: "itemJualDosis"
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
                    format: '000',
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
                    text: "Netto",
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
            ]
        });
        me.callParent(arguments);
    }
});