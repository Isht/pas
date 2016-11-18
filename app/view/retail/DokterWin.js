/**
 * @author Isht Ae
 **/

Ext.define('Pas.view.retail.DokterWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.retail.dokterwin',
    itemId: 'dokterWin',
    title: 'Tambah Dokter',
    width: 430,
    height: 510,
    modal: true,
    resizable: false,
    border: true,
    autoScroll: true,
    layout: 'fit',
    autoShow: true,
    shadow: false,
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: dokterform,
            buttons: [
                {
                    text: 'Simpan',
                    glyph: Glyphs.setIcon('save'),
                    cls: 'cust-btn biru',
                    itemId: 'saveRacikan',
                    scope: this,
                    handler: this.close
                },
                {
                    text: 'Batal',
                    glyph: Glyphs.setIcon('cancel'),
                    cls: 'cust-btn merah',
                    itemId: 'batalRacikan',
                    scope: this,
                    handler: this.close
                }
            ]
        });
        me.callParent(arguments);
    }
});

var dokterform = Ext.define('Pas.view.retail.DokterForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.retail.dokterform',
    itemId: 'dokterForm',
    border: false,
    preventHeader: false,
    bodyPadding: '15 0 0 10',
    buttonAlign: 'right',
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 130,
        msgTarget: 'side',
        width: 390
    },
    autoScroll: true,
    initComponent: function () {
        var me = this,
                form = me;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'ID',
                    name: 'id',
                    hidden: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Nama Dokter ',
                    name: 'md_namadokter'
                },
                {
                    xtype: 'fieldcontainer',
                    width: 390,
                    fieldLabel: 'Gelar ',
                    combineErrors: true,
                    msgTarget: 'side',
                    layout: 'hbox',
                    defaults: {
                        flex: 1,
                        hideLabel: true
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            width: 150,
                            margin: '0 5 0 0',
                            name: 'md_gelardepan',
//                            store: 'pljual.GelarDepanStore',
                            valueField: 'id',
                            emptyText: 'Gelar Depan',
                            displayField: 'mg_namagelar',
                            forceSelection: true,
                            listeners: {
                                'afterrender': function (cmb, rec, opt) {
                                    var store = this.up('form').getForm().findField('md_gelardepan').getStore(),
                                            filterCollection = [];

                                    var statusFilter = new Ext.util.Filter({
                                        property: 'mg_posisigelar',
                                        value: 1
                                    });

                                    filterCollection.push(statusFilter);
                                    store.clearFilter(true);
                                    store.filter(filterCollection);
                                }
                            }
                        },
                        {
                            xtype: 'combobox',
                            width: 150,
                            emptyText: 'Gelar Belakang',
//                            allowBlank: false,
                            triggerAction: 'all',
                            hideTrigger: false,
                            queryMode: 'remote',
                            minChars: 2,
                            name: 'md_gelarbelakang',
//                            store: 'pljual.GelarBelakangStore',
                            valueField: 'id',
                            forceSelection: true,
                            displayField: 'mg_namagelar',
                            listeners: {
                                'afterrender': function (cmb, rec, opt) {
                                    var store = this.up('form').getForm().findField('md_gelarbelakang').getStore(),
                                            filterCollection = [];

                                    var statusFilter = new Ext.util.Filter({
                                        property: 'mg_posisigelar',
                                        value: 2
                                    });

                                    filterCollection.push(statusFilter);
                                    store.clearFilter(true);
                                    store.filter(filterCollection);
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Jenis Kelamin ',
                    width: 320,
                    name: 'md_jk',
                    items: [
                        {
                            boxLabel: 'Laki-laki',
                            width: 80,
                            name: 'md_jk',
                            inputValue: 1,
                            checked: true
                        },
                        {
                            boxLabel: 'Perempuan',
                            width: 130,
                            name: 'md_jk',
                            inputValue: 2
                        }
                    ]
                },
                {
                    xtype: 'combobox',
                    triggerAction: 'all',
                    hideTrigger: false,
                    width: 260,
                    minChars: 2,
                    fieldLabel: 'Agama ',
                    name: 'md_agamadokter',
//                    store: 'pljual.AgamaStore',
                    valueField: 'id',
                    displayField: 'nama_agama'
                },
                {
                    xtype: 'datefield',
                    width: 260,
                    fieldLabel: 'Tanggal Lahir ',
                    name: 'md_tgllahir',
                    format: 'd/M/Y',
                    submitFormat: 'Y-m-d'
                },
                {
                    xtype: 'textareafield',
                    width: 390,
                    fieldLabel: 'Alamat Rumah ',
                    name: 'md_almtrumah'
                },
                {
                    xtype: 'combobox',
                    triggerAction: 'all',
                    hideTrigger: false,
                    width: 390,
                    minChars: 2,
                    fieldLabel: 'Kota ',
                    name: 'md_kota',
//                    store: 'pljual.KoKabStore',
                    valueField: 'id',
                    displayField: 'kk_name',
                    forceSelection: true
                },
                {
                    xtype: 'textfield',
                    width: 260,
                    fieldLabel: 'No Telp ',
                    name: 'md_telp'
                },
                {
                    fieldLabel: 'No HP GSM ',
                    xtype: 'textfield',
                    width: 260,
                    height: 20,
                    name: 'md_hpgsm'
                },
                {
                    xtype: 'textfield',
                    width: 260,
                    fieldLabel: 'No Fax ',
                    name: 'md_nofax'
                },
                {
                    fieldLabel: 'Alamat Praktek Utama',
                    xtype: 'combobox',
                    width: 390,
                    name: 'md_almtpraktek',
                    triggerAction: 'all',
                    displayField: 'alamat_praktek',
                    emptyText: 'Dikosongkan saja.',
                    valueField: 'id',
                    minChars: 2,
                    queryMode: 'remote',
                    hidden: true,
                    forceSelection: true
                },
                {
                    xtype: 'combobox',
                    triggerAction: 'all',
                    hideTrigger: false,
                    width: 390,
                    fieldLabel: 'Kota Cabang ',
                    name: 'md_kotacbg',
//                    store: 'pljual.KoKabStore',
                    valueField: 'id',
                    displayField: 'kk_name',
                    forceSelection: true,
                    hidden: true
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Pegang Perusahaan ',
                    width: 320,
                    name: 'md_perusahaan',
                    items: [
                        {
                            boxLabel: 'Ya',
                            width: 80,
                            name: 'md_perusahaan',
                            inputValue: 1
                        },
                        {
                            boxLabel: 'Tidak',
                            width: 130,
                            name: 'md_perusahaan',
                            inputValue: 2,
                            checked: true
                        }
                    ]
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Status ',
                    width: 320,
                    name: 'md_statusdokter',
                    items: [
                        {
                            boxLabel: 'Aktif',
                            width: 80,
                            name: 'md_statusdokter',
                            inputValue: 1,
                            checked: true
                        },
                        {
                            boxLabel: 'Tidak Aktif',
                            width: 130,
                            name: 'md_statusdokter',
                            inputValue: 2
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});

/* End of file PlAddPasienWin.js */
/* Location: ./assets/js/app/view/pelayanan/pldaftar/PlAddPasienWin.js */