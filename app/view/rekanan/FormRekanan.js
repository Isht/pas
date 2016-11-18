Ext.define('Pas.view.rekanan.FormRekanan', {
    extend: 'Ext.form.Panel',
    alias: 'widget.rekanan.formrekanan',
    itemId: 'formRekanan',
    border: false,
    title: "Form Data Rekanan",
//    preventHeader: true,
    //    bodyStyle: bg,
    bodyPadding: '10 10',
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
                }
            ],
            items: [
                {
                    xtype: 'textfield',
                    width: 390,
                    hidden: true,
                    name: 'id'
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'combobox',
                            width: 303,
                            fieldLabel: 'Group Rekanan ',
                            name: 'rkn_idgroup',
//                            store: 'msrekanan.GroupRekananStore',
                            valueField: 'id',
                            displayField: 'gr_namagroup',
                            queryMode: 'remote',
                            triggerAction: 'all',
                            valueNotFoundText: 'Tidak ada data',
                            forceSelection: true,
                            hideTrigger: false,
                            allowBlank: false,
                            minChars: 2,
                            emptyText: 'Pilih Group'
                        },
                        {
                            xtype: 'button',
                            margins: '0 0 0 5',
                            glyph: Glyphs.setIcon('add'),
                            cls: 'putih',
                            listeners: {
                                click: function () {
                                    var win = new Ext.widget('msrekanan.grouprekananwin');
                                    win.down('#grouprekanangrid').getStore().load();
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Nama Rekanan ',
                    width: 330,
                    allowBlank: false,
                    name: 'rkn_namarekanan'
                },
                {
                    xtype: 'textareafield',
                    width: 330,
                    fieldLabel: 'Alamat Rekanan ',
                    name: 'rkn_alamat'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'No HP ',
                    width: 330,
                    name: 'rkn_nohp'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'No Telepon ',
                    width: 330,
                    name: 'rkn_notelp'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'PIC ',
                    width: 330,
                    name: 'rkn_pic'
                }
            ]
        });

        me.callParent(arguments);
    }
});