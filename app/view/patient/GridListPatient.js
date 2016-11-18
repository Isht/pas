Ext.define("Pas.view.patient.GridListPatient", {
    extend: "Ext.grid.Panel",
    alias: "widget.patient.gridlistpatient",
    itemId: "gridListPatient",
    title: "Daftar Pasien",
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
                emptyText: "Tidak ada data Pasien",
                deferEmptyText: false,
                stripeRows: false,
                trackOver: false
            },
            tbar:[
                {
                    xtype: 'tbtext',
                    text: '<strong>Filter :</strong>'
                },
                {
                    xtype: 'combobox',
                    name: 'pilihtype',
                    itemId: 'pilihtype',
                    displayField: 'type',
                    valueField: 'typeCode',
                    queryMode: 'local',
                    forceSelection: true,
                    typeAhead: true,
                    allowBlank: true,
                    width: 100,
                    valueNotFoundText: 'Tidak ada Data',
                    emptyText: 'Pilih',
                    store: new Ext.data.SimpleStore({
                        id: 0,
                        fields: [
                            'typeCode', //numeric value is the key
                            'type' //the text value is the value
                        ],
                        data: [
                            [1, 'Nama'],
                            [2, 'Kota']
                        ]
                    }),
                    listeners: {
                        select: function() {
                            var value = this.getValue();
                            
                            if(value === 1){
                                this.up('grid').down('#NamaMember').show();
                                this.up('grid').down('#NamaMember').enable();
                                
                                this.up('grid').down('#kota').hide();
                                this.up('grid').down('#kota').disable();
                                this.up('grid').down('#kota').reset();
                                
                                this.up('grid').down('#SearchMember').enable();
                            } else if(value === 2){
                                this.up('grid').down('#NamaMember').hide();
                                this.up('grid').down('#NamaMember').disable();
                                this.up('grid').down('#NamaMember').reset();
                                
                                this.up('grid').down('#kota').show();
                                this.up('grid').down('#kota').enable();
                                
                                this.up('grid').down('#SearchMember').enable();
                            } 
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    width: 150,
                    itemId: 'NamaMember',
                    hidden: true,
                    disabled: true
                },
                {
                    xtype: 'combobox',
                    width: 150,
                    itemId: 'kota',
                    triggerAction: 'all',
                    hideTrigger: false,
                    hidden: true,
                    disabled: true,
                    listConfig: {
                        minWidth: 250
                    },
                    mode: 'remote',
                    minChars: 2,
//                    store: 'listpasien.KoKabGridStore',
                    displayField: 'kk_name',
                    valueField: 'id'
                },
                {
                    text: 'Search',
                    itemId: 'searchMember',
//                    disabled: true,
                    glyph: Glyphs.setIcon('search'),
                    cls: 'cust-btn biru'
                },
                '->',
                {
                    xtype: 'button',
                    text: 'Refresh',
                    itemId: 'refreshMember',
                    glyph: Glyphs.setIcon('refresh'),
                    cls: 'cust-btn orange'
                },
                {
                    xtype: 'button',
                    text: 'Reset',
                    itemId: 'resetMember',
                    glyph: Glyphs.setIcon('clear'),
                    cls: 'cust-btn merah'
                }
            ],
            features: [
                {
                    startCollapsed: false,
                    ftype: 'grouping',
                    groupHeaderTpl: '{name}, ({rows.length} Anggota)',
                    hideGroupedHeader: true
                }
            ],
            columns: [
                Ext.create('Ext.grid.RowNumberer'),
                {
                    width: 250,
                    header: 'NAMA',
                    dataIndex: 'mp_namapasien',
                    renderer: 'uppercase'
                },
                {
                    header: 'ALAMAT',
                    width: 250,
                    dataIndex: 'mp_almtpasien',
                    renderer: 'uppercase'
                },
                {
                    header: 'KOTA',
                    width: 150,
                    dataIndex: 'kota',
                    renderer: 'uppercase'
                }
            ]
        });
        me.callParent(arguments);
    }
});