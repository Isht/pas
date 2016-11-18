Ext.define("Pas.view.sale.SaleDetailGrid", {
    extend: "Ext.grid.Panel",
    alias: "widget.sale.saledetailgrid",
    itemId: "saleDetailGrid",
    title: "Item Penjualan",
//    store: "listjual.DetailJualStore",
    border: false,
    columnLines: true,
    flex: 1,
    forceFit: false,
    glyph: Glyphs.setIcon('cart'),
    cls: 'putih',
    initComponent: function () {
        var me = this,
                grid = me;

        Ext.applyIf(me, {
            viewConfig: {
                autoScroll: true,
                emptyText: "Tidak ada data item(s)",
                deferEmptyText: false,
                stripeRows: false,
                trackOver: false
            },
//            features: [
//                {
//                    startCollapsed: false,
//                    id: "raNonGroup",
//                    ftype: "grouping",
//                    groupHeaderTpl: "Tipe Penjualan : {name}",
//                    hideGroupedHeader: false,
//                    enableGroupingMenu: true
//                }
//            ],
            tbar: [
                "->",
                {
                    glyph: Glyphs.setIcon('detail'),
                    cls: 'cust-btn biru',
                    text: "Detail Racikan",
                    itemId: 'lihatRacikan'
//                    disabled: true
                }
            ],
            columns: [
                Ext.create("Ext.grid.RowNumberer", {
                    width: 30
                }),
                {
                    width: 150,
                    text: "Item Jual",
                    dataIndex: "juald_item_name"
                },
                {
                    width: 60,
                    align: "center",
                    text: "Qty",
                    dataIndex: "juald_qty"
                },
                {
                    width: 80,
                    text: "Satuan",
                    dataIndex: "juald_satuan_name"
                },
                {
                    xtype: "numbercolumn",
                    text: "Harga",
                    width: 120,
                    align: "right",
                    dataIndex: "juald_harga_satuan"
                },
                {
                    xtype: "numbercolumn",
                    text: "Netto",
                    width: 120,
                    align: "right",
                    dataIndex: "juald_netto"
                }
            ]
        });
        me.callParent(arguments);
    },
    listeners: {
        'selectionchange': function (view, records) {
            this.down('#lihatRacikan').setDisabled(!records.length);
        }
    }
});
