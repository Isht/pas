Ext.define("Pas.view.cash.CashGrid", {
    extend: "Ext.grid.Panel",
    alias: "widget.cash.cashgrid",
    itemId: "cashGrid",
    title: "Daftar Penerimaan Kas",
//    store: "listkas.RekapFoStore",
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
                emptyText: "Tidak ada data Penjualan",
                deferEmptyText: false,
                stripeRows: false,
                trackOver: false,
                getRowClass: function (record, rowIndex, rowParams, store) {
                    return record.get("bayar_type") === 1 ? "status-normal" : "status-info";
                }
            },
            features: [
                {
                    startCollapsed: false,
                    id: "rekapKasGroup",
                    ftype: "grouping",
                    groupHeaderTpl: "Nama Petugas : {name}",
                    hideGroupedHeader: false,
                    enableGroupingMenu: true
                }
            ],
            tbar: [
                {
                    xtype: "datefield",
                    fieldLabel: "<b>Tgl. Penjualan</b> ",
                    width: 220,
                    labelWidth: 100,
                    labelAlign: "right",
                    emptyText: "Tgl. Awal",
                    format: "d/M/Y",
                    submitFormat: "Y-m-d",
                    value: new Date(),
                    itemId: "TglAwal"
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
                    itemId: "TglAkhir"
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
                    value: 'Pusat'
                },
                {
                    xtype: "combobox",
                    fieldLabel: "<b>User</b> ",
                    width: 220,
                    labelWidth: 40,
                    itemId: "idPetugas",
                    emptyText: "Nama Pegawai",
                    labelAlign: "right",
//                    store: 'shared.UserStore',
                    displayField: 'nama',
                    valueField: 'id',
                    minChars: 2,
                    queryMode: 'remote',
                    forceSelection: true,
                    hidden: false
                },
                {
                    tooltip: 'Cari Data',
                    itemId: 'CariRekapFo',
                    glyph: Glyphs.setIcon('search'),
                    cls: 'cust-btn biru'
                },
                {
                    tooltip: 'Reset Data',
                    itemId: 'ResetRekapFo',
                    glyph: Glyphs.setIcon('clear'),
                    cls: 'cust-btn biru'
                }
            ],
            bbar: [
                '->',
                {
                    xtype: "tbtext",
                    height: 40,
                    itemId: "TotalFo",
                    cls: "daftar-total-view",
                    text: "Rp. 0.00"
                }
            ],
            columns: [
                Ext.create("Ext.grid.RowNumberer", {
                    width: 30
                }),
                {
                    xtype: "datecolumn",
                    width: 100,
                    text: "Tgl.",
                    format: "d/M/Y",
                    dataIndex: "rfo_tgltrx"
                },
                {
                    width: 100,
                    text: "No Resep",
                    dataIndex: "rfo_trx"
                },
                {
                    width: 250,
                    text: "Nama Pasien",
                    dataIndex: "nama_pasien",
                    renderer: "uppercase"
                },
                {
                    xtype: "numbercolumn",
                    text: "Nilai",
                    width: 120,
                    align: "right",
                    dataIndex: "rfo_jumlah"
                },
                {
                    xtype: "numbercolumn",
                    text: "Tunai",
                    width: 120,
                    align: "right",
                    dataIndex: "rfo_tunai"
                },
                {
                    xtype: "numbercolumn",
                    text: "Debet BCA",
                    width: 120,
                    align: "right",
                    dataIndex: "rfo_debetbca"
                },
                {
                    xtype: "numbercolumn",
                    text: "Debet Mandiri",
                    width: 120,
                    align: "right",
                    dataIndex: "rfo_debetmandiri"
                },
                {
                    xtype: "numbercolumn",
                    text: "KK BCA",
                    width: 120,
                    align: "right",
                    dataIndex: "rfo_kreditbca"
                },
                {
                    xtype: "numbercolumn",
                    text: "KK Mandiri",
                    width: 120,
                    align: "right",
                    dataIndex: "rfo_kreditmandiri"
                },
                {
                    xtype: "numbercolumn",
                    text: "Transfer",
                    width: 120,
                    align: "right",
                    dataIndex: "rfo_transfer"
                }
            ]
        });
        me.callParent(arguments);
    }
});
