Ext.define("Pas.view.doctor.GridDoctor", {
    extend: "Ext.grid.Panel",
    alias: "widget.doctor.griddoctor",
    itemId: "gridDoctor",
    title: "Daftar Dokter",
//    store: "pljual.DetailJualStore",
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
                emptyText: "Tidak ada data Dokter",
                deferEmptyText: false,
                stripeRows: false,
                trackOver: false
            },
            tbar: [
                {
                    xtype: 'textfield',
                    fieldLabel: "<b>Filter</b> ",
                    width: 250,
                    labelWidth: 40,
                    labelAlign: "right",
                    emptyText: 'Nama Dokter',
                    itemId: 'NamaDokter'
                },
                {
                    glyph: Glyphs.setIcon('search'),
                    cls: 'cust-btn biru',
                    itemId: 'SearchDokter'
                },
                '->',
                {
                    glyph: Glyphs.setIcon('refresh'),
                    cls: 'cust-btn orange',
                    itemId: 'RefreshDokter'
                },
                {
                    glyph: Glyphs.setIcon('clear'),
                    cls: 'cust-btn merah',
                    itemId: 'ClearDokter'
                }
            ],
            columns: [
                Ext.create("Ext.grid.RowNumberer", {
                    width: 30,
                    text: "No"
                }),
                {
                    width: 150,
                    header: 'Nama',
                    dataIndex: 'md_namadokter2'
                },
                {
                    xtype: 'datecolumn',
                    header: 'Tgl. Lahir',
                    width: 100,
                    dataIndex: 'md_tgllahir',
                    format: 'd/M/Y'
                },
                {
                    header: 'Alamat',
                    width: 100,
                    dataIndex: 'md_almtrumah'
                },
                {
                    header: 'No Telp.',
                    width: 100,
                    dataIndex: 'md_telp'
                }
            ]
        });
        me.callParent(arguments);
    }
});