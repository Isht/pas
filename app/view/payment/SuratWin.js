Ext.define('Apotek.view.plpelunasan.SuratWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.plpelunasan.suratwin',
    itemId: 'syratwin',
    title: 'FORM SURAT PENAGIHAN',
    width: 375,
//    height: 200,
    modal: true,
    resizable: false,
    border: true,
    autoScroll: true,
    layout: 'auto',
    autoShow: true,
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    border: false,
                    preventHeader: false,
                    itemId: 'suratform',
                    bodyPadding: '10 5',
                    buttonAlign: 'right',
                    fieldDefaults: {
                        labelAlign: 'right',
                        labelWidth: 110,
                        msgTarget: 'side',
                        width: 270
                    },
                    autoScroll: true,
                    items: [
                        {
                            xtype: 'datefield',
                            fieldLabel: 'Tgl. Jatuh Tempo ',
                            name: 'jatuh_tempo',
                            format: 'd/M/Y',
                            value: new Date(),
                            submitFormat: 'Y-m-d',
                            allowBlank: false,
                            width: 215
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'datefield',
                                    fieldLabel: 'Tgl. Transaksi ',
                                    name: 'tgl1',
                                    format: 'd/M/Y',
                                    value: new Date(),
                                    submitFormat: 'Y-m-d',
                                    allowBlank: false,
                                    width: 215
                                },
                                {
                                    xtype: 'tbtext',
                                    text: '&nbsp;s/d&nbsp;',
                                    padding: '2 2 0 2'
                                },
                                {
                                    xtype: 'datefield',
                                    name: 'tgl2',
                                    format: 'd/M/Y',
                                    value: new Date(),
                                    submitFormat: 'Y-m-d',
                                    allowBlank: false,
                                    width: 100
                                }
                            ]
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Tujuan Penagihan ',
                            name: 'tujuan_tagihan',
                            allowBlank: false
                        }
                    ]
                }
            ],
            buttons: [
                {
                    text: 'Print',
                    itemId: 'PrintSurat',
                    iconCls: 'icon-print'
                },
                {
                    text: 'Batal',
                    iconCls: 'icon-cancel',
                    handler: function () {
                        this.up('window').destroy();
                    }
                }
            ]
        });

        me.callParent(arguments);
    }
});