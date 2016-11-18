Ext.define("Pas.view.sale.SaleGrid", {
    extend: "Ext.grid.Panel",
    alias: "widget.sale.salegrid",
    itemId: "saleGrid",
    title: "Daftar Penjualan",
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
                emptyText: "Tidak ada data Penjualan",
                deferEmptyText: false,
                sstripeRows: false,
                trackOver: false,
                getRowClass: function (record, rowIndex, rowParams, store) {
                    return record.get("jual_ditagihkan") === 0 ? "status-normal" : 'status-info';
                }
            },
            features: [
                {
                    startCollapsed: false,
                    id: "raNonGroup",
                    ftype: "grouping",
                    groupHeaderTpl: "Tipe Penjualan : {name}",
                    hideGroupedHeader: false,
                    enableGroupingMenu: true
                }
            ],
            tbar: [
                {
                    xtype: "datefield",
                    fieldLabel: "<b>Tgl. Jual</b> ",
                    width: 180,
                    labelWidth: 60,
                    labelAlign: "right",
                    emptyText: "Tgl. Awal",
                    format: "d/M/Y",
                    submitFormat: "Y-m-d",
                    value: new Date(),
                    itemId: "TglAwalJual"
                },
                {
                    xtype: "datefield",
                    width: 150,
                    margin: "0 5 0 0",
                    fieldLabel: " s.d ",
                    labelWidth: 30,
                    labelAlign: "right",
                    emptyText: "Tgl. Akhir",
                    format: "d/M/Y",
                    submitFormat: "Y-m-d",
                    value: new Date(),
                    itemId: "TglAkhirJual"
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
                    glyph: Glyphs.setIcon('search'),
                    cls: 'cust-btn orange',
                    listeners: {
                        click: function () {
                            var store = this.up('grid').getStore(),
                                    filterCollection = [],
                                    aw = this.up('grid').down('#TglAwalJual').getValue(),
                                    ak = this.up('grid').down('#TglAkhirJual').getValue();

                            var statusFilter = new Ext.util.Filter({
                                property: 'jual_tanggal',
                                value: Ext.Date.format(aw, 'Y-m-d 00:00:00') + 'GT'
                            });
                            filterCollection.push(statusFilter);

                            var statusFilter = new Ext.util.Filter({
                                property: 'jual_tanggal',
                                value: Ext.Date.format(ak, 'Y-m-d 23:59:59') + 'LT'
                            });
                            filterCollection.push(statusFilter);

                            store.clearFilter(true);
                            store.filter(filterCollection);
                        }
                    }
                },
                '->',
                {
                    glyph: Glyphs.setIcon('copy'),
                    cls: 'cust-btn biru',
                    text: "Copy Resep",
//                    disabled: true,
                    itemId: 'CopyResep'
                },
                {
                    glyph: Glyphs.setIcon('print'),
                    cls: 'cust-btn biru',
                    text: "Cetak Ulang",
//                    disabled: true,
                    itemId: 'PrintJual'
                },
                {
                    glyph: Glyphs.setIcon('user'),
                    cls: 'cust-btn biru',
                    text: "Info Pasien",
//                    disabled: true,
                    itemId: 'InfoPasien'
                }
            ],
            columns: [
                Ext.create("Ext.grid.RowNumberer", {
                    width: 30
                }),
                {
                    xtype: "datecolumn",
                    width: 100,
                    text: "Tgl. Transaksi",
                    format: "d/M/Y",
                    dataIndex: "jual_tanggal"
                },
                {
                    width: 100,
                    text: "No Resep",
                    dataIndex: "jual_resep_no"
                },
                {
                    width: 250,
                    text: "Nama Customer",
                    dataIndex: "nama_pasien"
                },
                {
                    xtype: "numbercolumn",
                    text: "Netto",
                    width: 120,
                    align: "right",
                    dataIndex: "jual_netto"
                }
            ]
        });
        me.callParent(arguments);
    },
    listeners: {
        'selectionchange': function (view, records) {
            this.down('#InfoPasien').setDisabled(!records.length);
            this.down('#CopyResep').setDisabled(!records.length);
            this.down('#PrintJual').setDisabled(!records.length);
        }
    }
});
