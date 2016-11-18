Ext.define('Pas.view.supplier.FormSupplier', {
    extend: 'Ext.form.Panel',
    alias: 'widget.supplier.formsupplier',
    itemId: 'formSupplier',
    border: false,
    title: "Form Data Supplier",
//    preventHeader: true,
    //    bodyStyle: bg,
    bodyPadding: '5 10',
    buttonAlign: 'right',
    glyph: Glyphs.setIcon('form'),
    cls: 'putih',
    fieldDefaults: {
        labelAlign: 'right',
        width: 340,
        labelWidth: 125,
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
                {
                    xtype: 'button',
                    text: 'Hapus',
                    glyph: Glyphs.setIcon('del'),
                    cls: 'cust-btn merah',
                    action: 'userDelete',
                    itemId: 'userDelete'
                }
            ],
            items: [
                {
                    xtype: "numberfield",
                    fieldLabel: "Id Supplier ",
                    name: "id",
                    id: "id",
                    value: 0,
                    hidden: true
                },
                {
                    xtype: "textfield",
                    fieldLabel: "kode ",
                    name: "ms_kode",
                    itemId: "ms_kode",
                    hidden: true
                },
                {
                    xtype: "textfield",
                    fieldLabel: "kode sub ",
                    name: "ms_kodesub",
                    itemId: "ms_kodesub",
                    hidden: true
                },
                {
                    xtype: "radiogroup",
                    fieldLabel: "Jenis ",
                    width: 250,
                    items: [
                        {
                            boxLabel: "Baru",
                            name: "ms_status",
                            inputValue: "1",
                            width: 50,
                            checked: true,
                            listeners: {
                                change: function (rb, nv, ov, options) {
                                    if (nv) {
                                        form.down("#supplierbaru").show();
                                        form.down("#supplierbaru").enable()
                                        form.down("#supplierlama").hide();
                                        form.down("#supplierlama").disable();
                                    }
                                }
                            }
                        }, {
                            boxLabel: "Lama",
                            name: "ms_status",
                            width: 60,
                            inputValue: "2",
                            listeners: {
                                change: function (rb, nv, ov, options) {
                                    if (nv) {
                                        form.down("#supplierbaru").hide();
                                        form.down("#supplierbaru").disable();
                                        form.down("#supplierlama").show();
                                        form.down("#supplierlama").enable()
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: "textfield",
                    fieldLabel: "Nama Supplier ",
                    name: "ms_name",
                    itemId: "supplierbaru",
                    allowBlank: false
                },
                {
                    xtype: "combobox",
                    fieldLabel: "Supplier Lama ",
                    name: "ms_name_baru",
//                    store: "gdsupplier.ListSupplier",
                    displayField: "ms_name",
                    valueField: "id",
                    emptyText: "Pilih Supplier",
                    disabled: true,
                    hidden: true,
                    matchFieldWidth: false,
                    allowBlank: false,
                    minChars: 2,
                    itemId: "supplierlama",
                    triggerAction: "all",
                    queryMode: "remote",
                    listeners: {
                        select: function (cmb, rec, opt) {
                            var val = cmb.getValue(),
                                    data = cmb.findRecordByValue(val);
                            form.down("#ms_kode").setValue(data.get("ms_kode"));
                            form.down("#ms_kodesub").setValue(data.get("ms_kodesub"))
                        }
                    }
                },
                {
                    xtype: "textareafield",
                    fieldLabel: "Alamat ",
                    height: 50,
                    name: "ms_alamat",
                    allowBlank: false
                },
                {
                    xtype: "combobox",
                    fieldLabel: "Nama Kota ",
                    name: "ms_kota",
                    triggerAction: "all",
                    queryMode: "remote",
                    minChars: 2,
                    displayField: "kk_name",
                    valueField: "id",
//                    store: 'gdsupplier.KoKabStore',
                    matchFieldWidth: false,
                    emptyText: "pilih kota",
                    forceSelection: true,
                    valueNotFoundText: "Belum ada data",
                    allowBlank: false
                },
                {
                    xtype: "textfield",
                    fieldLabel: "Email ",
                    name: "ms_email",
                    allowBlank: true
                },
                {
                    xtype: "textfield",
                    fieldLabel: "No Telp. ",
                    name: "ms_telp",
                    allowBlank: true
                },
                {
                    xtype: "textfield",
                    fieldLabel: "No Telp. (Alt) ",
                    name: "ms_telp2"
                },
                {
                    xtype: "textfield",
                    fieldLabel: "No HP ",
                    name: "ms_hp",
                    allowBlank: true
                },
                {
                    xtype: "textfield",
                    fieldLabel: "Contact 1 ",
                    name: "ms_contact1",
                    allowBlank: true
                },
                {
                    xtype: "textfield",
                    fieldLabel: "Contact 2 ",
                    name: "ms_contact2"
                },
                {
                    xtype: "textfield",
                    fieldLabel: "Fax ",
                    name: "ms_fax",
                    allowBlank: true
                },
                {
                    xtype: "textfield",
                    fieldLabel: "Nama Bank ",
                    name: "ms_bank",
                    allowBlank: true
                },
                {
                    xtype: "textfield",
                    fieldLabel: "No Rekening ",
                    name: "ms_rekening",
                    allowBlank: true
                },
                {
                    xtype: 'checkbox',
                    fieldLabel: "Supplier Account ",
                    boxLabel: "Ya",
//                    hidden: GlobalVar.user_id === '1' || GlobalVar.user_id === '2' ? false : true,
                    name: "is_suppacc",
                    checkedValue: 1,
                    checked: false,
                    hidden: true
                },
                {
                    xtype: 'checkbox',
                    fieldLabel: "Supplier Jasa ",
                    boxLabel: "Ya",
//                    hidden: GlobalVar.user_id === '1' || GlobalVar.user_id === '2' ? false : true,
                    name: "is_jasa",
                    checkedValue: 1,
                    checked: false,
                    hidden: true
                }
            ]
        });

        me.callParent(arguments);
    }
});