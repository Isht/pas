Ext.define('Pas.view.patient.FormPatient', {
    extend: 'Ext.form.Panel',
    alias: 'widget.patient.formpatient',
    itemId: 'formPatient',
    border: false,
    title: "Form Data Pasien",
//    preventHeader: true,
    //    bodyStyle: bg,
    bodyPadding: '5 10',
    buttonAlign: 'right',
    glyph: Glyphs.setIcon('form'),
    cls: 'putih',
    fieldDefaults: {
        labelAlign: 'right',
        width: 340,
        labelWidth: 120,
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
                    text: 'Baru',
                    itemId: 'NewMember',
                    glyph: Glyphs.setIcon('add'),
                    cls: 'cust-btn biru'
                },
                {
                    xtype: 'button',
                    text: 'Simpan',
                    itemId: 'SaveMember',
                    glyph: Glyphs.setIcon('save'),
                    cls: 'cust-btn biru'
                }
            ],
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'ID',
                    name: 'id',
                    value: 0,
                    hidden: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Nama Pasien ',
                    name: 'mp_namapasien',
                    emptyText: 'Nama Pasien',
                    allowBlank: false
                },
                {
                    xtype: 'textareafield',
                    fieldLabel: 'Alamat Rumah ',
                    name: 'mp_almtpasien',
                    emptyText: 'Alamat Pasien',
                    allowBlank: false
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Kota ',
                    name: 'mp_kota',
//                    store: 'listpasien.KoKabStore',
                    valueField: 'id',
                    displayField: 'kk_name',
                    forceSelection: true,
                    emptyText: 'Pilih Kota',
                    triggerAction: 'all'
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'checkbox',
                            width: 200,
                            fieldLabel: 'Member ',
                            boxLabel: 'Ya',
                            name: 'is_member',
                            inputValue: 1,
                            listeners: {
                                change: function (rb, nv, ov, options) {
                                    if (nv) {
                                        form.getForm().findField('mp_tgllahir').show();
                                        form.down('#mp_statusnikah').show();
                                        form.down('#mp_jk').show();
                                        form.down('#mp_is_member').show();
                                        form.getForm().findField('mp_hpgsm').show();
                                        form.getForm().findField('mp_telp').show();
                                        form.getForm().findField('mp_agama').show();

                                        form.getForm().findField('mp_idpasien').enable();
                                        form.getForm().findField('mp_tgllahir').enable();
                                        form.down('#mp_statusnikah').enable();
                                        form.down('#mp_jk').enable();
                                        form.down('#mp_is_member').enable();
                                        form.getForm().findField('mp_hpgsm').enable();
                                        form.getForm().findField('mp_telp').enable();
                                        form.getForm().findField('mp_agama').enable();
                                    } else {
                                        form.getForm().findField('mp_tgllahir').hide();
                                        form.down('#mp_statusnikah').hide();
                                        form.down('#mp_jk').hide();
                                        form.down('#mp_is_member').hide();
                                        form.getForm().findField('mp_hpgsm').hide();
                                        form.getForm().findField('mp_telp').hide();
                                        form.getForm().findField('mp_agama').hide();

                                        form.getForm().findField('mp_idpasien').disable();
                                        form.down('#mp_statusnikah').disable();
                                        form.getForm().findField('mp_tgllahir').disable();
                                        form.down('#mp_jk').disable();
                                        form.down('#mp_is_member').disable();
                                        form.getForm().findField('mp_hpgsm').disable();
                                        form.getForm().findField('mp_telp').disable();
                                        form.getForm().findField('mp_agama').disable();

                                        form.getForm().findField('mp_nama_rekanan').hide();
                                        form.getForm().findField('mp_nama_rekanan').disable();
                                        form.getForm().findField('mp_nama_rekanan').reset();
                                    }
                                }
                            }
                        },
                        {
                            xtype: 'textfield',
                            emptyText: 'Auto Generate',
                            name: 'mp_idpasien',
                            width: 100,
                            disabled: true,
                            readOnly: true,
                            hidden: true
                        }
                    ]
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Status Member ',
                    itemId: 'mp_is_member',
                    hidden: true,
                    disabled: true,
//                    width: 320,
                    columns: 2,
                    vertical: true,
                    items: [
                        {
                            boxLabel: 'Umum',
                            width: 80,
                            name: 'mp_is_member',
                            inputValue: 1,
                            listeners: {
                                change: function (rb, nv, ov, options) {
                                    if (nv) {
                                        form.getForm().findField('mp_nama_rekanan').hide();
                                        form.getForm().findField('mp_nama_rekanan').disable();
                                        form.getForm().findField('mp_nama_rekanan').reset();
                                    }
                                }
                            }
                        },
                        {
                            boxLabel: 'Rekanan',
                            width: 90,
                            name: 'mp_is_member',
                            inputValue: 2,
                            listeners: {
                                change: function (rb, nv, ov, options) {
                                    if (nv) {
                                        form.getForm().findField('mp_nama_rekanan').show();
                                        form.getForm().findField('mp_nama_rekanan').enable();
                                        form.getForm().findField('mp_nama_rekanan').reset();
                                    }
                                }
                            }
                        },
                        {
                            boxLabel: 'Kryw. Apotek',
                            width: 100,
                            name: 'mp_is_member',
                            inputValue: 3,
                            listeners: {
                                change: function (rb, nv, ov, options) {
                                    if (nv) {
                                        form.getForm().findField('mp_nama_rekanan').hide();
                                        form.getForm().findField('mp_nama_rekanan').disable();
                                        form.getForm().findField('mp_nama_rekanan').reset();
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Nama Rekanan ',
                    name: 'mp_nama_rekanan',
                    displayField: 'rkn_namarekanan',
                    emptyText: 'Pilih nama rekanan',
                    valueField: 'id',
//                    store: 'listpasien.RekananStore',
                    triggerAction: 'all',
                    minChars: 2,
                    hidden: true,
                    disabled: true,
                    allowBlank: false,
                    matchFieldWidth: false,
                    listConfig: {
                        minWidth: 275
                    }
                },
                {
                    xtype: 'radiogroup',
                    itemId: 'mp_statusnikah',
                    fieldLabel: 'Status Menikah ',
                    hidden: true,
//                    width: 320,
                    items: [
                        {
                            boxLabel: 'Sudah',
                            width: 60,
                            name: 'mp_statusnikah',
                            inputValue: 1,
                            listeners: {
                                change: function (rb, nv, ov, options) {
                                    if (nv) {
                                        form.down('#mp_kk').show();
                                        form.down('#mp_kk').enable();
                                        form.getForm().findField('mp_nama_kk').show();
                                        form.getForm().findField('mp_nama_kk').enable();
                                    }
                                }
                            }
                        },
                        {
                            boxLabel: 'Belum',
                            width: 60,
                            name: 'mp_statusnikah',
                            inputValue: 2,
                            listeners: {
                                change: function (rb, nv, ov, options) {
                                    if (nv) {
                                        form.down('#mp_kk').hide();
                                        form.down('#mp_kk').disable();
                                        form.getForm().findField('mp_nama_kk').hide();
                                        form.getForm().findField('mp_nama_kk').disable();
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'checkbox',
                    itemId: 'mp_kk',
                    fieldLabel: 'Kepala Keluarga ',
                    boxLabel: 'Ya',
                    hidden: true,
                    disabled: true,
                    inputValue: 1,
                    listeners: {
                        change: function (rb, nv, ov, options) {
                            if (nv) {
                                form.getForm().findField('mp_nama_kk').hide();
                                form.getForm().findField('mp_nama_kk').disable();
                            } else {
                                form.getForm().findField('mp_nama_kk').show();
                                form.getForm().findField('mp_nama_kk').enable();
                            }
                        }
                    }
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Nama Keluarga ',
                    name: 'mp_nama_kk',
                    displayField: 'mp_namapasien',
                    valueField: 'id',
//                    store: 'listpasien.PasienKkStore',
                    emptyText: 'Pilih Keluarga',
                    minChars: 2,
                    triggerAction: 'all',
                    hidden: true,
                    disabled: true,
                    matchFieldWidth: false,
                    listConfig: {
                        minWidth: 275
                    },
                    listeners: {
                        afterrender: function (combo, rec, eOpt) {
                            var store = combo.getStore(),
                                    filterCollection = [];

                            var statusFilter = new Ext.util.Filter({
                                property: 'mp_nama_kk',
                                value: 0
                            });
                            filterCollection.push(statusFilter);

                            var statusFilter = new Ext.util.Filter({
                                property: 'mp_statusnikah',
                                value: 1
                            });
                            filterCollection.push(statusFilter);

                            store.clearFilter(true);
                            store.filter(filterCollection);
                        }
                    }
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Tanggal Lahir ',
                    name: 'mp_tgllahir',
                    format: 'd/M/Y',
                    hidden: true,
                    disabled: true,
                    submitFormat: 'Y-m-d',
                    width: '60%'
                },
                {
                    xtype: 'radiogroup',
                    itemId: 'mp_jk',
                    disabled: true,
                    fieldLabel: 'Jenis Kelamin ',
                    hidden: true,
                    width: 320,
                    items: [
                        {
                            boxLabel: 'Laki-laki',
                            width: 80,
                            name: 'mp_jk',
                            inputValue: 1
                        },
                        {
                            boxLabel: 'Perempuan',
                            width: 95,
                            name: 'mp_jk',
                            inputValue: 2
                        }
                    ]
                },
                {
                    xtype: 'combobox',
                    triggerAction: 'all',
                    hideTrigger: false,
                    fieldLabel: 'Agama ',
                    emptyText: 'Pilih Agama ',
                    name: 'mp_agama',
                    width: '70%',
//                    store: 'listpasien.AgamaStore',
                    valueField: 'id',
                    disabled: true,
                    hidden: true,
                    displayField: 'nama_agama'
                },
                {
                    fieldLabel: 'No HP GSM ',
                    xtype: 'textfield',
                    emptyText: 'No HP',
                    disabled: true,
                    hidden: true,
                    name: 'mp_hpgsm'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'No Telp Rumah ',
                    emptyText: 'No Telp',
                    hidden: true,
                    disabled: true,
                    name: 'mp_telp'
                }
            ]
        });

        me.callParent(arguments);
    }
});