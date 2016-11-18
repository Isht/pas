Ext.define("Pas.view.supplier.GridSupplier", {
    extend: "Ext.grid.Panel",
    alias: "widget.supplier.gridsupplier",
    itemId: "gridSupplier",
    title: "Daftar Supplier",
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
                emptyText: "Tidak ada data Supplier",
                deferEmptyText: false,
                stripeRows: false,
                trackOver: false
            },
            tbar: [
                {
                    xtype: "combobox",
                    fieldLabel: "<b>Filter</b> ",
                    labelWidth: 40,
                    labelAlign: "right",
                    emptyText: "Kota",
                    displayField: "kk_name",
                    valueField: "id",
                    minChars: 2,
                    itemId: 'kota',
//                    store: 'gdsupplier.KoKabStore',
                    forceSelection: true,
                    typeAhead: true,
                    valueNotFoundText: "Tidak ada Data"
                },
                {
                    xtype: "textfield",
                    emptyText: "Ketik Nama Supp.",
                    width: 150,
                    itemId: 'namaSupp'
                },
                {
                    glyph: Glyphs.setIcon('search'),
                    cls: 'cust-btn biru',
                    itemId: 'CariSupplier',
                    listeners: {
                        click: function () {
                            var grid = this.up('grid'),
                                    nama = grid.down('#namaSupp').getValue(),
                                    kota = grid.down('#kota').getValue(),
                                    store = grid.getStore(),
                                    filterCollection = [];

                            if (nama === '' && kota === null) {
                                Ext.MessageBox.show({
                                    title: 'Info',
                                    msg: 'Filter harus di isi.',
                                    buttons: Ext.MessageBox.OK,
                                    icon: Ext.MessageBox.INFO
                                });
                                return;
                            }

                            if (nama !== "") {
                                var filter = new Ext.util.Filter({
                                    property: 'ms_name=ll',
                                    value: nama
                                });
                                filterCollection.push(filter);
                            }

                            if (kota !== null) {
                                var filter2 = new Ext.util.Filter({
                                    property: 'ms_kota',
                                    value: kota
                                });
                                filterCollection.push(filter2);
                            }

                            store.clearFilter(true);
                            store.filter(filterCollection);
                        }
                    }
                },
                '->',
                {
                    glyph: Glyphs.setIcon('refresh'),
                    cls: 'cust-btn orange',
                    handler: function () {
                        grid.getStore().load();
                    }
                },
                {
                    glyph: Glyphs.setIcon('clear'),
                    cls: 'cust-btn biru',
                    handler: function () {
                        grid.down('#namaSupp').reset();
                        grid.down('#kota').reset();
                        grid.getSelectionModel().clearSelections();
                        grid.getStore().clearFilter(true);
                        grid.getStore().load();
                    }
                }
            ],
            columns: [
                Ext.create("Ext.grid.RowNumberer", {
                    width: 30,
                    text: "No"
                }),
                {
                    xtype: "gridcolumn",
                    width: 220,
                    text: "Nama Supplier",
                    dataIndex: "ms_name",
                    renderer: 'uppercase'
                },
                {
                    xtype: "gridcolumn",
                    width: 220,
                    text: "Alamat",
                    dataIndex: "ms_alamat",
                    renderer: 'uppercase'
                },
                {
                    xtype: "gridcolumn",
                    width: 120,
                    text: "Kota",
                    dataIndex: "nama_kota",
                    renderer: 'uppercase'
                },
                {
                    xtype: "gridcolumn",
                    width: 100,
                    text: "Telepon",
                    dataIndex: "ms_telp"
                },
                {
                    xtype: "gridcolumn",
                    width: 100,
                    text: "HP",
                    dataIndex: "ms_hp"
                },
                {
                    xtype: "gridcolumn",
                    width: 100,
                    text: "FAX",
                    dataIndex: "ms_fax"
                }
            ]
        });
        me.callParent(arguments);
    }
});