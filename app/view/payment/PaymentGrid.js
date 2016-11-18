Ext.define('Pas.view.payment.PaymentGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.payment.paymentgrid',
    itemId: 'paymentGrid',
    title: 'DAFTAR TAGIHAN',
    autoScroll: true,
    forceFit: true,
    border: false,
    columnLines: true,
    flex: 1,
//    store: 'plpelunasan.TagihanStore',
    selModel: Ext.create('Ext.ux.selection.CheckboxModel', {
        header: false
    }),
    glyph: Glyphs.setIcon('list'),
    cls: 'putih',
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            viewConfig: {
                autoScroll: true,
                emptyText: "Tidak ada data Tagihan",
                deferEmptyText: false,
                stripeRows: false,
                trackOver: false,
                getRowClass: function (record, rowIndex, rowParams, store) {
                    return record.get("sisabyr") === 0 ? "status-normal" : "status-info-font";
                }
            },
            tbar: [
                {
                    xtype: 'tbtext',
                    text: '<strong>Tipe Penagihan :</strong>'
                },
                {
                    xtype: 'combobox',
                    name: 'penagihan',
                    itemId: 'penagihan',
                    displayField: 'type',
                    valueField: 'typeCode',
                    queryMode: 'local',
                    forceSelection: true,
                    typeAhead: true,
                    width: 100,
                    allowBlank: true,
                    valueNotFoundText: 'Tidak ada Data',
                    emptyText: 'Pilih Filter',
                    store: new Ext.data.SimpleStore({
                        id: 0,
                        fields: [
                            'typeCode', //numeric value is the key
                            'type' //the text value is the value
                        ],
                        data: [
                            [1, 'Umum'],
                            [2, 'Karyawan'],
                            [3, 'Dokter'],
                            [4, 'Rekanan']
                        ]
                    }),
                    listeners: {
                        select: function () {
                            var value = this.getValue();

                            if (value === 1) {
                                this.up('grid').down('#umum').show();
                                this.up('grid').down('#umum').enable();

                                this.up('grid').down('#karyawan').hide();
                                this.up('grid').down('#karyawan').disable();
                                this.up('grid').down('#karyawan').reset();

                                this.up('grid').down('#dokter').hide();
                                this.up('grid').down('#dokter').disable();
                                this.up('grid').down('#dokter').reset();

                                this.up('grid').down('#rekanan').hide();
                                this.up('grid').down('#rekanan').disable();
                                this.up('grid').down('#rekanan').reset();

                                this.up('grid').down('#cariPelunasan').enable();
                            } else if (value === 2) {
                                this.up('grid').down('#umum').hide();
                                this.up('grid').down('#umum').disable();
                                this.up('grid').down('#umum').reset();

                                this.up('grid').down('#karyawan').show();
                                this.up('grid').down('#karyawan').enable();

                                this.up('grid').down('#dokter').hide();
                                this.up('grid').down('#dokter').disable();
                                this.up('grid').down('#dokter').reset();

                                this.up('grid').down('#rekanan').hide();
                                this.up('grid').down('#rekanan').disable();
                                this.up('grid').down('#rekanan').reset();

                                this.up('grid').down('#cariPelunasan').enable();
                            } else if (value === 3) {
                                this.up('grid').down('#umum').hide();
                                this.up('grid').down('#umum').disable();
                                this.up('grid').down('#umum').reset();

                                this.up('grid').down('#karyawan').hide();
                                this.up('grid').down('#karyawan').disable();
                                this.up('grid').down('#karyawan').reset();

                                this.up('grid').down('#dokter').show();
                                this.up('grid').down('#dokter').enable();

                                this.up('grid').down('#rekanan').hide();
                                this.up('grid').down('#rekanan').disable();
                                this.up('grid').down('#rekanan').reset();

                                this.up('grid').down('#cariPelunasan').enable();
                            } else if (value === 4) {
                                this.up('grid').down('#umum').hide();
                                this.up('grid').down('#umum').disable();
                                this.up('grid').down('#umum').reset();

                                this.up('grid').down('#karyawan').hide();
                                this.up('grid').down('#karyawan').disable();
                                this.up('grid').down('#karyawan').reset();

                                this.up('grid').down('#dokter').hide();
                                this.up('grid').down('#dokter').disable();
                                this.up('grid').down('#dokter').reset();

                                this.up('grid').down('#rekanan').show();
                                this.up('grid').down('#rekanan').enable();

                                this.up('grid').down('#cariPelunasan').enable();
                            }
                        }
                    }
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
                    xtype: 'combobox',
                    emptyText: 'Pilih Pasien',
                    fieldLabel: 'Umum ',
                    labelAlign: 'right',
                    labelWidth: 70,
                    width: 210,
                    itemId: 'umum',
                    triggerAction: 'all',
                    hidden: true,
                    disabled: true,
                    mode: 'remote',
                    minChars: 2,
//                    store: 'plpelunasan.UmumStore',
                    displayField: 'mp_namapasien',
                    valueField: 'id',
                    listConfig: {
                        minWidth: 250
                    }
                },
                {
                    xtype: 'combobox',
                    emptyText: 'Pilih Karyawan',
                    fieldLabel: 'Karyawan ',
                    labelAlign: 'right',
                    labelWidth: 70,
                    width: 210,
                    itemId: 'karyawan',
                    triggerAction: 'all',
                    hideTrigger: false,
                    hidden: true,
                    disabled: true,
                    mode: 'remote',
                    minChars: 2,
//                    store: 'plpelunasan.KaryawanStore',
                    displayField: 'mp_namapasien',
                    valueField: 'id',
                    listConfig: {
                        minWidth: 250
                    }
                },
                {
                    xtype: 'combobox',
                    emptyText: 'Pilih Dokter',
                    fieldLabel: 'Dokter ',
                    labelAlign: 'right',
                    labelWidth: 70,
                    width: 210,
                    itemId: 'dokter',
                    triggerAction: 'all',
                    hideTrigger: false,
                    hidden: true,
                    disabled: true,
                    mode: 'remote',
                    minChars: 2,
//                    store: 'plpelunasan.DokterStore',
                    displayField: 'md_namadokter2',
                    valueField: 'id',
                    listConfig: {
                        minWidth: 250
                    }
                },
                {
                    xtype: 'combobox',
                    emptyText: 'Pilih Rekanan',
                    fieldLabel: 'Rekanan ',
                    labelAlign: 'right',
                    labelWidth: 70,
                    width: 210,
                    itemId: 'rekanan',
                    triggerAction: 'all',
                    hideTrigger: false,
                    hidden: true,
                    disabled: true,
                    mode: 'remote',
                    minChars: 2,
//                    store: 'plpelunasan.RekananStore',
                    displayField: 'rkn_namarekanan',
                    valueField: 'id',
                    listConfig: {
                        minWidth: 250
                    }
                },
                {
                    xtype: 'button',
                    tooltip: 'Search',
                    disabled: true,
                    disabledCls: 'cust-btn-disabled',
                    glyph: Glyphs.setIcon('search'),
                    cls: 'cust-btn biru',
                    itemId: 'cariPelunasan'
                },
                {
                    xtype: 'button',
                    tooltip: 'All',
                    glyph: Glyphs.setIcon('clear'),
                    cls: 'cust-btn biru',
                    itemId: 'AllPelunasan'
                },
                '->',
                {
                    xtype: 'button',
                    glyph: Glyphs.setIcon('surat'),
                    cls: 'cust-btn biru',
                    text: 'Surat',
                    itemId: 'SuratTagihan'
                },
                {
                    xtype: 'button',
                    glyph: Glyphs.setIcon('group'),
                    cls: 'cust-btn biru',
                    text: 'Kolektif',
                    itemId: 'Kolektif'
                },
                {
                    xtype: 'button',
                    glyph: Glyphs.setIcon('cash'),
                    cls: 'cust-btn biru',
                    text: 'Pembayaran',
                    itemId: 'Pembayaran'
                },
                {
                    xtype: 'button',
                    glyph: Glyphs.setIcon('detail'),
                    cls: 'cust-btn biru',
                    text: 'Rincian',
                    itemId: 'RincianTrx'
                },
                {
                    xtype: 'button',
                    glyph: Glyphs.setIcon('history'),
                    cls: 'cust-btn biru',
                    text: 'History',
                    itemId: 'RincianLunas'
                }
            ],
            features: [
                {
                    startCollapsed: false,
                    id: 'poPengGroup',
                    ftype: 'grouping',
                    groupHeaderTpl: 'Penagihan atas nama : {name} ({rows.length} transaksi)',
                    hideGroupedHeader: false,
                    enableGroupingMenu: true
                }
            ],
            columns: [
                {
                    width: 100,
                    xtype: 'datecolumn',
                    header: 'Tgl. Transaksi',
                    format: "d/M/Y",
                    dataIndex: 'tgldaftar'
                },
                {
                    width: 120,
                    xtype: 'gridcolumn',
                    header: 'No Resep',
                    dataIndex: 'koderesep'
                },
                {
                    width: 240,
                    xtype: 'gridcolumn',
                    header: 'Atas Nama',
                    dataIndex: 'atas_nama'
                },
                {
                    width: 130,
                    xtype: 'numbercolumn',
                    align: 'right',
                    header: 'Nilai Transaksi',
                    dataIndex: 'netto'
                },
                {
                    width: 130,
                    xtype: 'numbercolumn',
                    align: 'right',
                    header: 'Di Bayar',
                    dataIndex: 'dibayar'
                },
                {
                    width: 130,
                    align: 'right',
                    xtype: 'numbercolumn',
                    header: 'Kurang Bayar',
                    dataIndex: 'sisabyr'
                }
            ]
        });

        me.callParent(arguments);
    }
});