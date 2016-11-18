/**
 * @author coepoe
 **/
Ext.define('Apotek.view.plpelunasan.RincianWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.plpelunasan.rincianwin',
    itemId: 'rincianwin',
    title: 'RINCIAN TRANSAKSI',
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
                    itemId: 'tabelrincian',
                    forceFit: true,
                    border: false,
                    store: 'plpelunasan.DetailDaftarStore',
                    columns: [
                        Ext.create('Ext.grid.RowNumberer'),
                        {
                            width: 150,
                            text: "ITEM",
                            dataIndex: "juald_item_name"
                        },
                        {
                            width: 60,
                            align: "center",
                            text: "QTY",
                            dataIndex: "juald_qty"
                        },
                        {
                            width: 80,
                            text: "SATUAN",
                            dataIndex: "juald_satuan_name"
                        },
                        {
                            xtype: "numbercolumn",
                            text: "HARGA",
                            width: 120,
                            align: "right",
                            dataIndex: "juald_harga_satuan"
                        },
                        {
                            xtype: "numbercolumn",
                            text: "NETTO",
                            width: 120,
                            align: "right",
                            dataIndex: "juald_netto"
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