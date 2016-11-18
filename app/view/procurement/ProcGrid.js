Ext.define("Pas.view.procurement.ProcGrid", {
    extend: "Ext.grid.Panel",
    alias: "widget.procurement.procgrid",
    itemId: "procGrid",
    title: "Daftar Pengadaan",
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
                emptyText: "Tidak ada data Pengadaan",
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
                    fieldLabel: "<b>Filter</b> ",
                    labelWidth: 40,
                    labelAlign: "right",
                    emptyText: "Tgl. Awal",
                    width: 160,
                    format: "d/M/Y",
                    submitFormat: "Y-m-d",
                    itemId: "poListTgl1",
                    value: new Date()
                },
                {
                    xtype: "datefield",
                    fieldLabel: " s.d ",
                    labelWidth: 30,
                    labelAlign: "right",
                    emptyText: "Tgl. Akhir",
                    width: 150,
                    format: "d/M/Y",
                    submitFormat: "Y-m-d",
                    itemId: "poListTgl2",
                    value: new Date()
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
                    value: 'PUSAT'
                }, 
                {
                    glyph: Glyphs.setIcon('search'),
                    cls: 'cust-btn biru',
                    action: "searchListPo"
                },
                {
                    glyph: Glyphs.setIcon('refresh'),
                    cls: 'cust-btn orange',
                    handler: function () {
                        grid.getStore().load();
                    }
                },
                {
                    glyph: Glyphs.setIcon('clear'),
                    cls: 'cust-btn merah',
                    itemId: "allPo",
                    handler: function () {
                        grid.getStore().clearFilter(true);
                        grid.getStore().load();
                        grid.down('#poListTgl1').reset();
                        grid.down('#poListTgl2').reset();
                        grid.up('panel').down('#poListDetGrid').getStore().removeAll();
                    }
                },
                {
                    glyph: Glyphs.setIcon('add'),
                    cls: 'cust-btn biru',
                    iconCls: "icon-new",
                    action: "newPengadaan"
                }
            ],
            columns: [
                Ext.create("Ext.grid.RowNumberer"),
                {
                    xtype: "gridcolumn",
                    flex: 0.15,
                    text: "No Pengadaan",
                    dataIndex: "po_no"
                },
                {
                    xtype: "datecolumn",
                    flex: 0.1,
                    text: "Tgl. Pengadaan",
                    dataIndex: "trx_date",
                    renderer: Ext.util.Format.dateRenderer("d/M/Y")
                },
                {
                    xtype: "gridcolumn",
                    flex: 0.2,
                    text: "Cabang",
                    dataIndex: "supplier_name",
                    renderer: "uppercase"
                },
                {
                    xtype: "gridcolumn",
                    flex: 0.5,
                    text: "Keterangan",
                    dataIndex: "po_no"
                },
                {
                    xtype: "numbercolumn",
                    flex: 0.05,
                    text: "Status",
                    align: "center",
                    dataIndex: "po_ttstatus",
                    format: '000',
                    hidden: true
                }
            ]
        });
        me.callParent(arguments);
    }
});
