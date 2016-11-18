Ext.define("Pas.view.faktur.FakturGrid", {
    extend: "Ext.grid.Panel",
    alias: "widget.faktur.fakturgrid",
    itemId: "fakturGrid",
    title: "Daftar Faktur",
//    store: "listjual.JualStore",
    border: false,
    columnLines: true,
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
                emptyText: "Tidak ada data Faktur",
                deferEmptyText: false,
                sstripeRows: false,
                trackOver: false,
                getRowClass: function (record, rowIndex, rowParams, store) {
                    return record.get("jual_ditagihkan") === 0 ? "status-normal" : 'status-info';
                }
            },
            tbar: [
                {
                    xtype: "datefield",
                    fieldLabel: "Filter ",
                    labelWidth: 40,
                    width: 160,
                    labelAlign: "right",
                    emptyText: "Tgl. Awal",
                    itemId: "dateFakturFilter",
                    format: "d/M/Y",
                    submitFormat: "Y-m-d",
                    value: new Date()
                }, 
                {
                    xtype: "datefield",
                    fieldLabel: " s.d ",
                    labelWidth: 30,
                    width: 150,
                    labelAlign: "right",
                    emptyText: "Tgl. Akhir",
                    itemId: "dateFakturFilter2",
                    format: "d/M/Y",
                    submitFormat: "Y-m-d",
                    value: new Date()
                },
                {
                    glyph: Glyphs.setIcon('search'),
                    cls: 'cust-btn biru',
                    tooltip: "Search Query",
                    handler: function () {
                        var store = this.up("grid").getStore(),
                                combo = this.up("grid").down("#dateFakturFilter").getValue(),
                                combo2 = this.up("grid").down("#dateFakturFilter2").getValue(),
                                //cabang = this.up("grid").down("#cbFakturFilter").getValue(),
                                filterCollection = [];
                        var statusFilter = new Ext.util.Filter({
                            property: "faktur_tgl",
                            value: Ext.Date.format(combo === null ? new Date() : combo, "Y-m-d 00:00:00") + "GT"
                        });
                        filterCollection.push(statusFilter);
                        var statusFilter = new Ext.util.Filter({
                            property: "faktur_tgl",
                            value: Ext.Date.format(combo2 === null ? new Date() : combo2, "Y-m-d 23:59:59") + "LT"
                        });
                        filterCollection.push(statusFilter);
                        store.clearFilter(true);
                        store.filter(filterCollection);
//                        store.group("faktur_no");
                    }
                },
                {
                    glyph: Glyphs.setIcon('refresh'),
                    cls: 'cust-btn orange',
                    handler: function () {
                        var grid = this.up("grid"),
                                store = grid.getStore();
                        store.load();
//                        store.group("faktur_no");
                    }
                },
                {
                    text: "Semua",
                    itemId: 'allFaktur',
                    glyph: Glyphs.setIcon('clear'),
                    cls: 'cust-btn merah',
                    handler: function () {
                        var grid = this.up("grid"),
                                store = grid.getStore();
                        store.clearFilter(true);
                        store.load();
                    }
                },
                '->',
                {
                    text: "Faktur Baru",
                    glyph: Glyphs.setIcon('add'),
                    cls: 'cust-btn biru',
                    action: "newFaktur"
                },
                {
                    text: "Pelunasan",
                    glyph: Glyphs.setIcon('cash'),
                    cls: 'cust-btn biru',
                    action: "lunasFaktur"
                },
                {
                    text: "Cetak",
                    glyph: Glyphs.setIcon('print'),
                    cls: 'cust-btn biru',
                    itemId: "printTtFaktur"
                }
            ],
//            features: [
//                {
//                    startCollapsed: false,
//                    id: "fakturGroup",
//                    ftype: "grouping",
//                    groupHeaderTpl: "No Faktur : {name}",
//                    hideGroupedHeader: false,
//                    enableGroupingMenu: true
//                }
//            ],
            columns: [Ext.create("Ext.grid.RowNumberer"), {
                    xtype: "datecolumn",
                    flex: 0.35,
                    text: "Tgl. Faktur",
                    dataIndex: "faktur_tgl",
                    renderer: Ext.util.Format.dateRenderer("d/M/Y")
                }, {
                    xtype: "gridcolumn",
                    flex: 0.35,
                    text: "Supplier",
                    dataIndex: "faktur_suppnama"
                }, {
                    xtype: "gridcolumn",
                    flex: 0.35,
                    text: "No Faktur",
                    dataIndex: "faktur_no"
                }, {
                    xtype: "numbercolumn",
                    flex: 0.3,
                    align: "right",
                    text: "Total",
                    dataIndex: "faktur_total"
                }, {
                    xtype: "gridcolumn",
                    flex: 0.2,
                    text: "Cabang",
                    hidden: true,
                    dataIndex: "faktur_cabang"
                }
            ]
        });
        me.callParent(arguments);
    }
});
