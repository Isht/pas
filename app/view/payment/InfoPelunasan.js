Ext.define('Apotek.view.plpelunasan.InfoPelunasan', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.plpelunasan.infopelunasan',
    itemId: 'infopelunasan',
    title: 'RINCIAN PENAGIHAN',
    margin: '0 0',
    autoScroll: true,
    forceFit: true,
    border: true,
    columnLines: true,
    flex: 1,
    //store: 'plpelunasan.InfoTagihanStore',

    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            viewConfig: {
                autoScroll: true,
                emptyText: 'Tidak ada rincian.',
                deferEmptyText: false
            },
            columns: [
                Ext.create(Ext.grid.RowNumberer),
                {
                    flex: 0.2,
                    xtype: 'datecolumn',
                    header: 'TGL BAYAR',
                    dataIndex: 'tgl_byr',
                    format: 'd/M/Y'
                },
                {
                    xtype: 'numbercolumn',
                    flex: 0.2,
                    text: 'NETTO',
                    dataIndex: 'nilai_tagihan'
                },
                {
                    xtype: 'gridcolumn',
                    flex: 0.4,
                    text: 'CARA BAYAR',
                    dataIndex: 'carabayar'
                },
                {
                    xtype: 'gridcolumn',
                    flex: 0.3,
                    text: 'NAMA PEMBAYAR',
                    dataIndex: 'nama_pembayar'
                }
            ]
        });

        me.callParent(arguments);
    }
});