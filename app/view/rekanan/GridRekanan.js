Ext.define("Pas.view.rekanan.GridRekanan", {
    extend: "Ext.grid.Panel",
    alias: "widget.rekanan.gridrekanan",
    itemId: "gridRekanan",
    title: "Daftar Rekanan",
//    store: "pljual.DetailJualStore",
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
                emptyText: "Tidak ada data Rakanan",
                deferEmptyText: false,
                stripeRows: false,
                trackOver: false
            },
            tbar: [
                {
                    xtype: 'textfield',
                    fieldLabel: '<b>Filter</b> ',
                    labelWidth: 40,
                    labelAlign: 'right',
                    emptyText: 'Nama rekanan',
                    width: 220,
                    itemId: 'NamaRekanan'
                },
                {
                    glyph: Glyphs.setIcon('search'),
                    cls: 'cust-btn biru',
                    itemId: 'SearchRekanan'
                },
                '->',
                {
                    glyph: Glyphs.setIcon('refresh'),
                    cls: 'cust-btn orange',
                    itemId: 'RefreshRekanan'
                },
                {
                    glyph: Glyphs.setIcon('clear'),
                    cls: 'cust-btn merah',
                    itemId: 'ClearRekanan'
                }
            ],
//            bbar: [
// 		          Ext.create('Ext.PagingToolbar', {
// 		              store: 'msrekanan.RekananStore',
// 		              border: false,
// 		              displayInfo: true,
// 		              displayMsg: 'Displaying records {0} - {1} of {2}',
// 		              emptyMsg: "No data to display"
// 		          })
//           	],
            features: [
                {
                    startCollapsed: true,
                    ftype: 'grouping',
                    groupHeaderTpl: '{name}, ({rows.length} rekanan)',
                    hideGroupedHeader: true
                }
            ],
            columns: [
                Ext.create("Ext.grid.RowNumberer", {
                    width: 30,
                    text: "No"
                }),
                {
                    width: 170,
                    header: 'Nama Rekanan',
                    dataIndex: 'rkn_namarekanan',
                    renderer: 'uppercase'
                },
                {
                    header: 'Alamat Rekanan',
                    width: 300,
                    dataIndex: 'rkn_alamat',
                    renderer: 'uppercase'
                },
                {
                    width: 100,
                    header: 'No HP',
                    dataIndex: 'rkn_nohp'
                },
                {
                    width: 100,
                    header: 'NoTelepon',
                    dataIndex: 'rkn_notelp'
                }
            ]
        });
        me.callParent(arguments);
    }
});