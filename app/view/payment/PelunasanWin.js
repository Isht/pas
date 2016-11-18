/**
 * @author coepoe
 **/
Ext.define('Apotek.view.plpelunasan.PelunasanWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.plpelunasan.pelunasanwin',
    itemId: 'pelunasanwin',
    title: 'RINCIAN PELUNASAN',
    width: 500,
    height: 330,
    modal: true,
    resizable: false,
    border: true,
    autoScroll: true,
    layout: 'fit',
    autoShow: true,
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'grid',
                    region: 'west',
                    width: 375,
                    itemId: 'tabelpelunasan',
                    forceFit: true,
                    border: false,
                    store: 'plpelunasan.InfoTagihanStore',
                    columns: [
                        Ext.create('Ext.grid.RowNumberer'),
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
                }
            ],
            buttons: [
                {
                    text: 'Tutup',
                    iconCls: 'icon-delete',
                    scope: this,
                    handler: this.close
                }
            ]
        });
        me.callParent(arguments);
    }
});
/* End of file memberWindow.js */
/* Location: ./assets/js/app/view/group/memberWindow.js */