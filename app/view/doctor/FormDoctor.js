Ext.define('Pas.view.doctor.FormDoctor', {
    extend: 'Ext.form.Panel',
    alias: 'widget.doctor.formdoctor',
    itemId: 'formDoctor',
    border: false,
    title: "Form Data Dokter",
//    preventHeader: true,
    //    bodyStyle: bg,
    bodyPadding: '10 10',
    buttonAlign: 'right',
    glyph: Glyphs.setIcon('form'),
    cls: 'putih',
    fieldDefaults: {
        labelAlign: 'right',
        width: 370,
        labelWidth: 140,
        msgTarget: 'side'
    },
    autoScroll: true,
    initComponent: function () {
        var me = this,
                form = me;

        Ext.applyIf(me, {
            tbar: [
                {
                    xtype: 'button',
                    text: 'Simpan',
                    glyph: Glyphs.setIcon('save'),
                    cls: 'cust-btn biru',
                    action: 'userSave'
                },
                {
                    xtype: 'button',
                    text: 'Baru',
                    glyph: Glyphs.setIcon('add'),
                    cls: 'cust-btn hijau',
                    action: 'userNew'
                },
                '->',
                {
                    text: 'Gelar',
                    itemId: 'AddGelar',
                    glyph: Glyphs.setIcon('gelar'),
                    cls: 'cust-btn biru',
                    action: 'showGelar'
                }
            ],
            items: [
                {
                    xtype: 'textfield',
                    hidden: true,
                    name: 'id'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'ID Dokter ',
                    readOnly: true,
                    emptyText: 'Autogerate',
                    hidden: true,
                    name: 'md_iddokter'
                },
                {
                    fieldLabel: 'Nama ',
                    xtype: 'textfield',
                    name: 'md_namadokter'
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'combobox',
                            width: 245,
                            triggerAction: 'all',
                            fieldLabel: 'Gelar ',
                            emptyText: 'Depan',
                            name: 'md_gelardepan',
                            forceSelection: true,
                            minChars: 2,
                            valueNotFoundText: "Tidak ada gelar",
//                            store: 'msdokter.GelarDepanStore',
                            valueField: 'id',
                            displayField: 'mg_namagelar'
                        },
                        {
                            xtype: 'combobox',
                            width: 120,
                            emptyText: 'Belakang',
                            triggerAction: 'all',
                            margins: '0 0 0 5',
                            hideTrigger: false,
                            minChars: 2,
                            name: 'md_gelarbelakang',
//                            store: 'msdokter.GelarBelakangStore',
                            forceSelection: true,
                            valueNotFoundText: "Tidak Ada gelar",
                            valueField: 'id',
                            displayField: 'mg_namagelar'
                        }
                    ]
                },
                {
                    xtype: 'textareafield',
                    fieldLabel: 'Alamat Rumah ',
                    name: 'md_almtrumah'
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            fieldLabel: 'Alamat Praktek Utama ',
                            xtype: 'combobox',
                            width: 343,
                            name: 'md_almtpraktek',
                            triggerAction: 'all',
//                            store: 'msdokter.PraktekStore',
                            displayField: 'alamat_praktek_lengkap',
                            valueField: 'id',
                            minChars: 2,
                            readOnly: true
                        },
                        {
                            xtype: 'button',
                            glyph: Glyphs.setIcon('add'),
                            cls: 'putih',
                            margins: '0 0 0 5',
                            itemId: 'AddAlmtPraktik'
                        }
                    ]
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Jenis Kelamin ',
                    itemId: 'md_jk',
                    width: 250,
                    items: [
                        {
                            boxLabel: 'Laki-laki',
                            width: 80,
                            name: 'md_jk',
                            inputValue: 1
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
                    width: 300,
                    fieldLabel: 'Agama ',
                    name: 'md_agamadokter',
//                    store: 'msdokter.AgamaStore',
                    valueField: 'id',
                    displayField: 'nama_agama'
                },
                {
                    xtype: 'datefield',
                    width: 300,
                    fieldLabel: 'Tanggal Lahir ',
                    name: 'md_tgllahir',
                    format: 'd/M/Y',
                    submitFormat: 'Y-m-d'
                },
                {
                    xtype: 'combobox',
                    triggerAction: 'all',
                    hideTrigger: false,
                    width: 300,
                    fieldLabel: 'Kota ',
                    name: 'md_kota',
//                    store: 'msdokter.KoKabStore',
                    queryMode: "remote",
                    minChars: 2,
                    displayField: "kk_name",
                    valueField: "id",
                    matchFieldWidth: false,
                    emptyText: "pilih kota",
                    forceSelection: true,
                    valueNotFoundText: "Tidak ada data",
                    allowBlank: true
                },
                {
                    xtype: 'numberfield',
                    width: 300,
                    fieldLabel: 'No Telp ',
                    name: 'md_telp',
                    hideTrigger: true
                },
                {
                    fieldLabel: 'No HP GSM ',
                    xtype: 'textfield',
                    width: 300,
                    name: 'md_hpgsm'
                },
                {
                    xtype: 'numberfield',
                    width: 300,
                    fieldLabel: 'No Fax ',
                    name: 'md_nofax',
                    hideTrigger: true
                },
                {
                    xtype: 'combobox',
                    triggerAction: 'all',
                    hideTrigger: false,
                    width: 300,
                    fieldLabel: 'Kota Cabang ',
                    allowBlank: true,
                    name: 'md_kotacbg',
//                    store: 'msdokter.CabangStore',
                    valueField: 'id',
                    displayField: 'cb_name',
                    hidden: true,
                    readOnly: true
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Pegang Perusahaan ',
                    width: 320,
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
                            inputValue: 2
                        }
                    ]
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Status ',
                    width: 320,
                    items: [
                        {
                            boxLabel: 'Aktif',
                            width: 80,
                            name: 'md_status',
                            inputValue: 1
                        },
                        {
                            boxLabel: 'Non Aktif',
                            width: 130,
                            name: 'md_status',
                            inputValue: 2
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    name: 'simpan_status',
                    hidden: true
                }
            ]
        });

        me.callParent(arguments);
    }
});