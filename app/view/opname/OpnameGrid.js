Ext.define('Pas.view.opname.OpnameGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.opname.opnamegrid',
    itemId: 'opnameGrid',
    title: 'DAFTAR STOCK OPNAME',
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
                emptyText: "Tidak ada data barang",
                deferEmptyText: false,
                stripeRows: false,
                trackOver: false,
                getRowClass: function (record, rowIndex, rowParams, store) {
                    return record.get("sisabyr") === 0 ? "status-normal" : "status-info-font";
                }
            },
            plugins: {
                ptype: 'bufferedrenderer',
                trailingBufferZone: 20, // Keep 20 rows rendered in the table behind scroll
                leadingBufferZone: 50   // Keep 50 rows rendered in the table ahead of scroll
            },
            features: [
                {
                    startCollapsed: false,
                    ftype: 'groupingsummary',
                    groupHeaderTpl: 'Nama Barang : <span style="color:#2A98C7;text-transform:uppercase">{name}</span>, Total Barang : <span style="color:#2A98C7;text-transform:uppercase">{[values.rows[0].data.barang_total]}</span>',
                    hideGroupedHeader: true
                }
            ],
            tbar: [
                {
                    xtype: "textfield",
                    fieldLabel: "<b>Barang</b> ",
                    labelWidth: 60,
                    labelAlign: "right",
                    width: 250,
                    itemId: "barang_id",
                    emptyText: "Nama Barang"
                },
                {
                    action: "stockCari",
                    glyph: Glyphs.setIcon('search'),
                    cls: 'cust-btn biru'
                },
                {
                    xtype: "button",
                    text: "Semua",
                    action: "cariQuery",
                    glyph: Glyphs.setIcon('clear'),
                    cls: 'cust-btn merah'
                },
                '->',
                {
                    text: "Penyesuaian Barang",
                    itemId: "stockOpWin",
                    glyph: Glyphs.setIcon('transfer'),
                    cls: 'cust-btn biru'
                },
                {
                    text: "Tambah Lot",
                    itemId: "lotAddWin",
                    glyph: Glyphs.setIcon('add'),
                    cls: 'cust-btn biru'
                },
                {
                    text: "Kurangi Lot",
                    itemId: "lotMinWin",
                    glyph: Glyphs.setIcon('del'),
                    cls: 'cust-btn merah',
                    disabled: false
                },
                {
                    text: "Barang Exp.",
                    itemId: "lotBarangWin",
                    glyph: Glyphs.setIcon('date'),
                    cls: 'cust-btn biru'
                },
                {
                    text: "Stock Min",
                    itemId: "stockMinWin",
                    glyph: Glyphs.setIcon('lock'),
                    cls: 'cust-btn hijau'
                },
                {
                    text: "Stock Max",
                    itemId: "stockMaxWin",
                    glyph: Glyphs.setIcon('lock'),
                    cls: 'cust-btn merah'
                }
            ],
            columns: [
                {
                    xtype: "gridcolumn",
                    width: 200,
                    text: "Nama Barang",
                    dataIndex: "barang_name"
                },
                {
                    width: 200,
                    text: "No Batch",
                    dataIndex: "no_batch"
                },
                {
                    xtype: "datecolumn",
                    width: 40,
                    text: "Exp. Date",
                    format: 'd/M/Y',
                    align: "center",
                    dataIndex: "exp_date",
                    summaryRenderer: function (value) {
                        return "<b>Total Lot</b>";
                    }
                },
                {
                    xtype: "numbercolumn",
                    width: 40,
                    text: "Jumlah Lot",
                    align: "center",
                    dataIndex: "jumlah",
                    format: "000",
                    summaryType: 'sum',
                    summaryRenderer: function (value) {
                        return "<b>" + value + "</b>";
                    }
                },
                {
                    xtype: "numbercolumn",
                    width: 50,
                    text: "Nilai Barang",
                    align: "right",
                    dataIndex: "harga_jual",
                    summaryRenderer: function (value) {
                        return "<b>Total Nilai</b>";
                    }
                },
                {
                    xtype: "numbercolumn",
                    width: 50,
                    text: "Sub Total",
                    align: "right",
                    dataIndex: "sub_total",
                    summaryType: 'sum',
                    summaryRenderer: function (value) {
                        return "<b>" + Ext.util.Format.number(value, '0,000.00') + "</b>";
                    }
                }
            ]
        });

        me.callParent(arguments);
    }
});