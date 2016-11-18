Ext.define("Pas.view.purchase.PurchaseGrid", {
    extend: "Ext.grid.Panel",
    alias: "widget.purchase.purchasegrid",
    itemId: "purchaseGrid",
    title: "Daftar Purchase Order",
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
                emptyText: "Tidak ada data PO",
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
                '->',
                {
                    text: "Baru",
                    glyph: Glyphs.setIcon('add'),
                    cls: 'cust-btn biru',
                    action: "newPo"
                },
                {
                    text: "Print",
                    glyph: Glyphs.setIcon('print'),
                    cls: 'cust-btn biru',
                    itemId: "printPoCopy"
                },
                {
                    text: "Kirim PDF",
                    glyph: Glyphs.setIcon('pdf'),
                    cls: 'cust-btn merah',
                    itemId: "sentPoPdf"
                }
            ],
            columns: [
                Ext.create("Ext.grid.RowNumberer"), {
                    xtype: "gridcolumn",
                    flex: 0.15,
                    text: "No PO",
                    dataIndex: "po_no"
                },
                {
                    xtype: "gridcolumn",
                    flex: 0.4,
                    text: "Nama Supplier",
                    dataIndex: "supplier_name",
                    renderer: "uppercase"
                },
                {
                    xtype: "datecolumn",
                    flex: 0.1,
                    text: "Tgl. PO",
                    dataIndex: "trx_date",
                    renderer: Ext.util.Format.dateRenderer("d/M/Y")
                },
                {
                    xtype: "datecolumn",
                    flex: 0.1,
                    text: "Tgl. Jatuh Tempo",
                    dataIndex: "po_ed",
                    renderer: Ext.util.Format.dateRenderer("d/M/Y")
                },
                {
                    xtype: "numbercolumn",
                    flex: 0.08,
                    text: "Disc",
                    align: "center",
                    dataIndex: "po_disc_value"
                },
                {
                    xtype: "numbercolumn",
                    flex: 0.2,
                    text: "PO Total",
                    align: "right",
                    dataIndex: "po_value"
                },
                {
                    xtype: "numbercolumn",
                    flex: 0.2,
                    text: "PO Netto",
                    align: "right",
                    dataIndex: "po_netto"
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
