Ext.define('Pas.view.users.FormUsers', {
    extend: 'Ext.form.Panel',
    alias: 'widget.users.formusers',
    itemId: 'formUsers',
    border: false,
    title: "Form Data Pengguna",
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
                    text: 'Non Aktifkan',
                    glyph: Glyphs.setIcon('del'),
                    cls: 'cust-btn merah',
                    action: 'userDelete',
                    itemId: 'userDelete'
                }
            ],
            items: [
                {
                    xtype: 'fieldcontainer',
                    width: 350,
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1.8,
                            fieldLabel: 'Nama ',
                            emptyText: 'Depan',
                            name: 'first_name',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            flex: 0.9,
                            name: 'last_name',
                            margins: '0 0 0 3',
                            emptyText: 'Belakang',
                            allowBlank: true
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    width: 350,
                    fieldLabel: 'Username ',
                    name: 'username',
                    emptyText: 'Pilih username',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    width: 350,
                    fieldLabel: 'Email ',
                    name: 'email',
                    vtype: 'email',
                    emptyText: 'Valid email',
                    allowBlank: true
                },
                {
                    xtype: 'textfield',
                    width: 350,
                    fieldLabel: 'Password ',
                    inputType: 'password',
                    name: 'password',
                    emptyText: 'Minimal 4 Char',
                    id: 'password',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    width: 350,
                    fieldLabel: 'Confirm Password ',
                    inputType: 'password',
                    name: 'password_confirm',
                    emptyText: 'Konfirmasi password',
                    vtype: 'password',
                    initialPassField: 'password',
                    allowBlank: false
                },
                {
                    xtype: 'checkboxgroup',
                    fieldLabel: 'Group(s) Pengguna ',
                    columns: 1,
                    itemId: 'userGroup',
                    vertical: true
                },
                {
                    xtype: 'textfield',
                    width: 350,
                    fieldLabel: 'id',
                    name: 'id',
                    itemId: 'id',
                    value: 0,
                    hidden: true
                }
            ]
        });

        me.callParent(arguments);
    }
});